"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-[#171717]/60">No products found matching your filter.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="group"
        >
          <Link
            href={`/product/${product.id}`}
            className="block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#EDEDED]"
          >
            <div className="relative aspect-square overflow-hidden bg-[#EDEDED]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-[#171717] mb-1 group-hover:text-[#DA0037] transition-colors">
                {product.name || product.title}
              </h3>
              <p className="text-sm text-[#171717]/60 capitalize">
                {product.color?.name || product.colorName || 'unknown'}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

