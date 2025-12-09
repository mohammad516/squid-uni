import type { Metadata } from "next";
import { Lora, Open_Sans } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Squadlink- Professional Uniform Supplier in Lebanon",
  description: "Squadlink is a professional uniform supplier based in Lebanon, serving clients locally and worldwide. We specialize in high-quality chef wear, security uniforms, corporate uniforms, hospital & housekeeping uniforms, school uniforms, and custom workwear for businesses across the Middle East, Europe, Africa, and international markets. We provide premium fabrics, precise tailoring, and reliable worldwide shipping. Our uniforms are designed for comfort, durability, and professional appearance, with full customization options including logo printing and embroidery. At Squadlink, we are committed to quality, consistency, and long-term client partnerships worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${openSans.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
