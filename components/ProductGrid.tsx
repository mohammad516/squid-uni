"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Product {
  id: string;
  name: string;
  title?: string;
  color?: {
    name: string;
    hexCode: string;
  } | null;
  colorName?: string; // For backward compatibility
  image: string;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-[#171717]/60">No products found matching your filter.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group"
          >
            <div className="block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#EDEDED]">
              <div 
                className="relative aspect-square overflow-hidden bg-[#EDEDED] cursor-pointer"
                onClick={() => setSelectedImage(product.image)}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 
                  className="font-semibold text-[#171717] mb-1 group-hover:text-[#DA0037] transition-colors cursor-pointer"
                  onClick={() => setSelectedImage(product.image)}
                >
                  {product.name || product.title}
                </h3>
                <Link href={`/product/${product.id}`}>
                  <p className="text-sm text-[#171717]/60 capitalize hover:text-[#DA0037] transition-colors">
                    {product.color?.name || product.colorName || 'unknown'}
                  </p>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 text-white transition-all duration-300 hover:scale-110"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={selectedImage}
                  alt="Product image"
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

