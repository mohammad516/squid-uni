import { Suspense } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="min-h-screen" />,
});

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <Suspense fallback={<div className="min-h-screen" />}>
        <Contact />
      </Suspense>
      <Footer />
    </main>
  );
}
