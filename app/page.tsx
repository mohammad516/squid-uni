import { Suspense } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Dynamic imports for better code splitting
const FeaturesSection = dynamic(() => import("@/components/FeaturesSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const CategoriesSection = dynamic(() => import("@/components/CategoriesSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const DeliverySection = dynamic(() => import("@/components/DeliverySection"), {
  loading: () => <div className="min-h-[150px]" />,
});
const ClientsCarousel = dynamic(() => import("@/components/ClientsCarousel"), {
  loading: () => <div className="min-h-[200px]" />,
});

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <FeaturesSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <CategoriesSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[150px]" />}>
        <DeliverySection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <ClientsCarousel />
      </Suspense>
      <Footer />
    </main>
  );
}