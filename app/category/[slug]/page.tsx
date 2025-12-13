"use client";

import { useState, useMemo, useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import ColorFilter from "@/components/ColorFilter";
import ProductGrid from "@/components/ProductGrid";
import { motion } from "framer-motion";

interface Product {
  id: string;
  name: string;
  title: string;
  color: {
    name: string;
    hexCode: string;
  } | null;
  colorName?: string; // For backward compatibility
  image: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  title: string;
  products: Product[];
  availableColors: string[];
  colorsWithHex?: Record<string, string>;
}

export default function CategoryPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`/api/categories/${slug}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            setError('Category not found');
            setCategory(null);
          } else {
            throw new Error('Failed to fetch category');
          }
          return;
        }

        const data = await response.json();
        setCategory(data);
      } catch (err) {
        console.error('Error fetching category:', err);
        setError('Failed to load category');
        setCategory(null);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchCategory();
    }
  }, [slug]);

  const filteredProducts = useMemo(() => {
    if (!category) return [];
    if (!selectedColor) return category.products;
    return category.products.filter((product) => {
      const productColorName = product.color?.name?.toLowerCase() || product.colorName || 'unknown';
      return productColorName === selectedColor;
    });
  }, [category, selectedColor]);

  if (loading) {
    return (
      <main className="relative w-full overflow-x-hidden">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-[#EAEAEA] pt-24 lg:pt-32">
          <div className="text-center">
            <p className="text-lg text-[#252A34]/60">Loading category...</p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (error || !category) {
    return (
      <main className="relative w-full overflow-x-hidden">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-[#EAEAEA] pt-24 lg:pt-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#252A34] mb-4">Category Not Found</h1>
            <p className="text-[#252A34]/60 mb-6">The category you're looking for doesn't exist.</p>
            <a
              href="/"
              className="inline-block px-6 py-3 bg-[#08D9D6] text-white rounded-lg hover:bg-[#FF2E63] transition-colors"
            >
              Go Back Home
            </a>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="relative w-full overflow-x-hidden">
      <Navbar />
      <div className="min-h-screen bg-[#EAEAEA] pt-24 lg:pt-32">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <Breadcrumb categoryName={category.name} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#252A34] mb-4">
              {category.name}
            </h1>
            <p className="text-lg text-[#252A34]/70 mb-8 max-w-3xl">
              {category.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 bg-white rounded-xl p-6 shadow-sm border border-[#EAEAEA]"
          >
            <ColorFilter
              colors={category.availableColors || []}
              selectedColor={selectedColor}
              onColorSelect={setSelectedColor}
              colorsWithHex={category.colorsWithHex}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-[#252A34]/60">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
                {selectedColor && ` in ${selectedColor}`}
              </p>
            </div>
            <ProductGrid products={filteredProducts} />
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

