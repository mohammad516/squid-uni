"use client";

import { motion } from "framer-motion";

interface ColorFilterProps {
  colors: string[];
  selectedColor: string | null;
  onColorSelect: (color: string | null) => void;
  colorsWithHex?: Record<string, string>;
}

const colorMap: Record<string, string> = {
  white: "#FFFFFF",
  black: "#171717",
  green: "#22C55E",
  navy: "#1E3A8A",
  red: "#EF4444",
  blue: "#3B82F6",
  gray: "#6B7280",
  grey: "#6B7280",
  yellow: "#FBBF24",
  orange: "#F97316",
  purple: "#A855F7",
  pink: "#EC4899",
  brown: "#92400E",
  beige: "#F5F5DC",
  // Add more common color mappings
};

export default function ColorFilter({ colors, selectedColor, onColorSelect, colorsWithHex }: ColorFilterProps) {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <span className="text-sm font-semibold text-[#171717]">Filter by Color:</span>
      <button
        onClick={() => onColorSelect(null)}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          selectedColor === null
            ? "bg-[#DA0037] text-white shadow-md"
            : "bg-[#EDEDED] text-[#171717] hover:bg-[#DA0037]/20 hover:text-[#DA0037]"
        }`}
      >
        All
      </button>
      {colors.map((color) => (
        <motion.button
          key={color}
          onClick={() => onColorSelect(selectedColor === color ? null : color)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
            selectedColor === color
              ? "border-[#DA0037] shadow-lg scale-110"
              : "border-[#EDEDED] hover:border-[#DA0037]/50"
          }`}
          style={{
            backgroundColor: colorsWithHex?.[color] || colorMap[color] || color,
          }}
          aria-label={`Filter by ${color}`}
        />
      ))}
    </div>
  );
}

