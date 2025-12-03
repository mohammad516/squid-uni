export interface Product {
  id: number;
  name: string;
  color: string;
  image: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  products: Product[];
}

export const categoriesData: Category[] = [
  {
    name: "T-Shirts",
    slug: "t-shirts",
    description: "High-quality t-shirts designed for comfort and durability. Perfect for everyday wear and professional settings.",
    products: [
      { id: 1, name: "Classic White T-Shirt", color: "white", image: "/1.jpg" },
      { id: 2, name: "Premium Black T-Shirt", color: "black", image: "/2.jpg" },
      { id: 3, name: "Navy Blue T-Shirt", color: "navy", image: "/3.jpg" },
      { id: 4, name: "Green T-Shirt", color: "green", image: "/1.jpg" },
      { id: 5, name: "White V-Neck T-Shirt", color: "white", image: "/2.jpg" },
      { id: 6, name: "Black Crew Neck", color: "black", image: "/3.jpg" },
      { id: 7, name: "Navy Polo Style", color: "navy", image: "/1.jpg" },
      { id: 8, name: "Forest Green T-Shirt", color: "green", image: "/2.jpg" },
    ]
  },
  {
    name: "Polo",
    slug: "polo",
    description: "Elegant polo shirts with premium fabrics and perfect fit. Ideal for business casual and professional environments.",
    products: [
      { id: 9, name: "Classic White Polo", color: "white", image: "/1.jpg" },
      { id: 10, name: "Black Professional Polo", color: "black", image: "/2.jpg" },
      { id: 11, name: "Navy Blue Polo", color: "navy", image: "/3.jpg" },
      { id: 12, name: "Green Sport Polo", color: "green", image: "/1.jpg" },
      { id: 13, name: "White Long Sleeve Polo", color: "white", image: "/2.jpg" },
      { id: 14, name: "Black Short Sleeve Polo", color: "black", image: "/3.jpg" },
    ]
  },
  {
    name: "Shirts & Formal Wear",
    slug: "shirts-formal-wear",
    description: "Professional dress shirts and formal wear crafted with attention to detail. Perfect for corporate and formal occasions.",
    products: [
      { id: 15, name: "White Dress Shirt", color: "white", image: "/1.jpg" },
      { id: 16, name: "Black Formal Shirt", color: "black", image: "/2.jpg" },
      { id: 17, name: "Navy Business Shirt", color: "navy", image: "/3.jpg" },
      { id: 18, name: "Green Casual Shirt", color: "green", image: "/1.jpg" },
      { id: 19, name: "White Oxford Shirt", color: "white", image: "/2.jpg" },
    ]
  },
  {
    name: "Suits & Blazers",
    slug: "suits-blazers",
    description: "Elegant suits and blazers for the modern professional. Tailored to perfection with premium materials.",
    products: [
      { id: 20, name: "Navy Business Suit", color: "navy", image: "/3.jpg" },
      { id: 21, name: "Black Formal Suit", color: "black", image: "/1.jpg" },
      { id: 22, name: "Navy Blazer", color: "navy", image: "/2.jpg" },
      { id: 23, name: "Black Blazer", color: "black", image: "/3.jpg" },
    ]
  },
  {
    name: "Security Uniforms",
    slug: "security-uniforms",
    description: "Durable and professional security uniforms designed for comfort during long shifts.",
    products: [
      { id: 24, name: "Black Security Shirt", color: "black", image: "/1.jpg" },
      { id: 25, name: "Navy Security Uniform", color: "navy", image: "/2.jpg" },
      { id: 26, name: "Black Tactical Shirt", color: "black", image: "/3.jpg" },
    ]
  },
  {
    name: "Jackets & Vests",
    slug: "jackets-vests",
    description: "Professional jackets and vests for various work environments. Functional and stylish.",
    products: [
      { id: 27, name: "Black Work Jacket", color: "black", image: "/1.jpg" },
      { id: 28, name: "Navy Vest", color: "navy", image: "/2.jpg" },
      { id: 29, name: "Green Safety Vest", color: "green", image: "/3.jpg" },
      { id: 30, name: "Black Professional Vest", color: "black", image: "/1.jpg" },
    ]
  },
  {
    name: "Chef & Kitchen Wear",
    slug: "chef-kitchen-wear",
    description: "Professional chef coats and kitchen wear designed for heat resistance and comfort.",
    products: [
      { id: 31, name: "White Chef Coat", color: "white", image: "/1.jpg" },
      { id: 32, name: "Black Chef Jacket", color: "black", image: "/2.jpg" },
      { id: 33, name: "White Kitchen Apron", color: "white", image: "/3.jpg" },
    ]
  },
  {
    name: "Hospital & Housekeeping wear",
    slug: "hospital-housekeeping-wear",
    description: "Clean and professional medical and housekeeping uniforms. Designed for hygiene and comfort.",
    products: [
      { id: 34, name: "White Medical Scrub", color: "white", image: "/1.jpg" },
      { id: 35, name: "Navy Medical Uniform", color: "navy", image: "/2.jpg" },
      { id: 36, name: "Green Medical Scrub", color: "green", image: "/3.jpg" },
      { id: 37, name: "White Housekeeping Uniform", color: "white", image: "/1.jpg" },
    ]
  },
  {
    name: "Aprons",
    slug: "aprons",
    description: "Functional and durable aprons for various professional settings.",
    products: [
      { id: 38, name: "White Professional Apron", color: "white", image: "/1.jpg" },
      { id: 39, name: "Black Kitchen Apron", color: "black", image: "/2.jpg" },
      { id: 40, name: "Green Work Apron", color: "green", image: "/3.jpg" },
    ]
  },
  {
    name: "School",
    slug: "school",
    description: "Comfortable and durable school uniforms for students of all ages.",
    products: [
      { id: 41, name: "Navy School Shirt", color: "navy", image: "/1.jpg" },
      { id: 42, name: "White School Blouse", color: "white", image: "/2.jpg" },
      { id: 43, name: "Green School Uniform", color: "green", image: "/3.jpg" },
    ]
  },
  {
    name: "Maintenance",
    slug: "maintenance",
    description: "Durable workwear for maintenance and industrial professionals.",
    products: [
      { id: 44, name: "Black Work Shirt", color: "black", image: "/1.jpg" },
      { id: 45, name: "Navy Maintenance Uniform", color: "navy", image: "/2.jpg" },
      { id: 46, name: "Green Safety Shirt", color: "green", image: "/3.jpg" },
    ]
  },
  {
    name: "Sweater",
    slug: "sweater",
    description: "Warm and comfortable sweaters for professional and casual wear.",
    products: [
      { id: 47, name: "Navy Professional Sweater", color: "navy", image: "/1.jpg" },
      { id: 48, name: "Black Casual Sweater", color: "black", image: "/2.jpg" },
      { id: 49, name: "Green Work Sweater", color: "green", image: "/3.jpg" },
    ]
  },
  {
    name: "Accessories",
    slug: "accessories",
    description: "Complete your uniform with our selection of professional accessories.",
    products: [
      { id: 50, name: "Black Tie", color: "black", image: "/1.jpg" },
      { id: 51, name: "Navy Tie", color: "navy", image: "/2.jpg" },
      { id: 52, name: "Green Accessory Set", color: "green", image: "/3.jpg" },
    ]
  }
];

export const availableColors = ["white", "black", "green", "navy"];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categoriesData.find(category => category.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return categoriesData.map(category => category.slug);
}

export function getCategorySlugByName(name: string): string {
  const category = categoriesData.find(cat => cat.name === name);
  return category?.slug || name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '');
}

