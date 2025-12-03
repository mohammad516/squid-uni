"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  categoryName: string;
}

export default function Breadcrumb({ categoryName }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-[#171717]/70 mb-6">
      <Link
        href="/"
        className="hover:text-[#DA0037] transition-colors"
      >
        Home
      </Link>
      <ChevronRight size={16} className="text-[#171717]/40" />
      <span className="text-[#171717] font-medium">{categoryName}</span>
    </nav>
  );
}

