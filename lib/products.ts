export type ProductCategory =
  | "apparel"
  | "gear"
  | "mouthguard"
  | "accessories";

export type ProductAudience = "team" | "retail" | "both";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  basePrice: number;
  minQuantity: number;
  sizes: string[];
  imageUrl: string;
  featured?: boolean;
  audience?: ProductAudience;
  retailPrice?: number;
  retailMinQuantity?: number;
}

export const PRODUCTS: Product[] = [
  {
    id: "custom-tshirt",
    name: "Custom Team T-Shirt",
    category: "apparel",
    description:
      "Premium cotton-blend tees with full-color screen print or embroidery. Built for daily training and team pride.",
    basePrice: 18,
    minQuantity: 12,
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    imageUrl: "/products/custom-tshirt.png",
    featured: true,
    audience: "both",
    retailPrice: 28,
    retailMinQuantity: 1,
  },
  {
    id: "rashguard",
    name: "Custom Rashguard",
    category: "apparel",
    description:
      "Compression-fit rashguards with sublimated designs. No cracking, no peeling — built for the mats.",
    basePrice: 32,
    minQuantity: 12,
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    imageUrl: "/products/rashguard.png",
    featured: true,
    audience: "both",
    retailPrice: 48,
    retailMinQuantity: 1,
  },
  {
    id: "team-hoodie",
    name: "Team Hoodie",
    category: "apparel",
    description:
      "Heavyweight fleece hoodies with front and back print options. Perfect for competition travel.",
    basePrice: 42,
    minQuantity: 12,
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    imageUrl: "/products/team-hoodie.png",
    featured: true,
    audience: "both",
    retailPrice: 58,
    retailMinQuantity: 1,
  },
  {
    id: "training-shorts",
    name: "Training Shorts",
    category: "apparel",
    description:
      "Lightweight grappling shorts with custom side panels and logo placement.",
    basePrice: 28,
    minQuantity: 12,
    sizes: ["S", "M", "L", "XL", "2XL"],
    imageUrl: "/products/training-shorts.png",
    audience: "both",
    retailPrice: 38,
    retailMinQuantity: 1,
  },
  {
    id: "headgear",
    name: "Custom Headgear",
    category: "gear",
    description:
      "Competition-grade headgear with embroidered gym logo and color-matched trim.",
    basePrice: 55,
    minQuantity: 6,
    sizes: ["S/M", "L/XL"],
    imageUrl: "/products/headgear.png",
    featured: true,
    audience: "team",
  },
  {
    id: "mma-gloves",
    name: "Custom MMA Gloves",
    category: "gear",
    description:
      "4oz competition and training MMA gloves with custom logo on wrist wrap. Durable leather construction.",
    basePrice: 45,
    minQuantity: 6,
    sizes: ["S", "M", "L", "XL"],
    imageUrl: "/products/mma-gloves.png",
    featured: true,
    audience: "team",
  },
  {
    id: "boxing-gloves",
    name: "Custom Boxing Gloves",
    category: "gear",
    description:
      "Professional boxing gloves with custom logo embroidery on cuff. Available in training and sparring weights.",
    basePrice: 50,
    minQuantity: 6,
    sizes: ["10oz", "12oz", "14oz", "16oz"],
    imageUrl: "/products/boxing-gloves.png",
    featured: true,
    audience: "team",
  },
  {
    id: "shin-guards",
    name: "Custom Shin Guards",
    category: "gear",
    description:
      "Muay Thai and kickboxing shin guards with team logo and color-matched straps.",
    basePrice: 38,
    minQuantity: 6,
    sizes: ["S", "M", "L", "XL"],
    imageUrl: "/products/shin-guards.png",
    audience: "team",
  },
  {
    id: "focus-mitts",
    name: "Custom Focus Mitts",
    category: "gear",
    description:
      "Curved focus mitts with embroidered gym logo. Built for pad work and coach training sessions.",
    basePrice: 65,
    minQuantity: 2,
    sizes: ["One Size"],
    imageUrl: "/products/focus-mitts.png",
    audience: "team",
  },
  {
    id: "mouthguard",
    name: "Custom Mouthguard",
    category: "mouthguard",
    description:
      "Boil-and-bite mouthguards with your logo embedded. Bulk team orders available.",
    basePrice: 12,
    minQuantity: 24,
    sizes: ["Youth", "Adult"],
    imageUrl: "/products/mouthguard.png",
    audience: "both",
    retailPrice: 18,
    retailMinQuantity: 1,
  },
  {
    id: "premium-mouthguard",
    name: "Premium Custom Fit",
    category: "mouthguard",
    description:
      "Lab-grade custom fit mouthguard molded to each athlete. Maximum protection with embedded team logo and personalized color options.",
    basePrice: 150,
    minQuantity: 1,
    sizes: ["Youth", "Adult"],
    imageUrl: "/products/premium-mouthguard.png",
    featured: true,
    audience: "both",
    retailPrice: 150,
    retailMinQuantity: 1,
  },
  {
    id: "team-bag",
    name: "Team Duffel Bag",
    category: "accessories",
    description:
      "Durable duffel with embroidered logo. Ideal for competition and travel days.",
    basePrice: 35,
    minQuantity: 6,
    sizes: ["One Size"],
    imageUrl: "/products/team-bag.png",
    audience: "both",
    retailPrice: 45,
    retailMinQuantity: 1,
  },
  {
    id: "mug-cup",
    name: "Custom Mug Cup",
    category: "accessories",
    description:
      "11oz ceramic mug with full-color RiR logo print. Perfect for gym pro shop or team gift sets.",
    basePrice: 14,
    minQuantity: 24,
    sizes: ["One Size"],
    imageUrl: "/products/mug-cup.png",
    featured: true,
    audience: "both",
    retailPrice: 18,
    retailMinQuantity: 1,
  },
  {
    id: "tumbler",
    name: "Custom Tumbler",
    category: "accessories",
    description:
      "20oz insulated stainless steel tumbler with laser-etched or printed team logo. Keeps drinks hot or cold for hours.",
    basePrice: 22,
    minQuantity: 12,
    sizes: ["One Size"],
    imageUrl: "/products/tumbler.png",
    featured: true,
    audience: "both",
    retailPrice: 28,
    retailMinQuantity: 1,
  },
  {
    id: "patch-set",
    name: "Embroidered Patch Set",
    category: "accessories",
    description:
      "High-density embroidered patches for gis, bags, and uniforms.",
    basePrice: 8,
    minQuantity: 50,
    sizes: ["3\"", "4\"", "5\""],
    imageUrl: "/products/patch-set.png",
    audience: "both",
    retailPrice: 10,
    retailMinQuantity: 3,
  },
];

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  apparel: "Apparel",
  gear: "Gear",
  mouthguard: "Mouthguards",
  accessories: "Accessories",
};

const CATEGORY_FEATURES: Record<ProductCategory, string[]> = {
  apparel: [
    "Premium fabrics built for daily training",
    "Sublimation, screen print, or embroidery options",
    "Full size run for your entire team",
  ],
  gear: [
    "Competition-grade materials and construction",
    "Color-matched trim and logo placement",
    "Sized for youth through adult athletes",
  ],
  mouthguard: [
    "Embedded team logo options",
    "Youth and adult sizing available",
    "Bulk team orders with individual fit options",
  ],
  accessories: [
    "Durable construction for daily use",
    "Ideal for pro shop sales or team gift sets",
    "Embroidery or full-color print options",
  ],
};

const ORDER_FEATURES = [
  "Upload your gym logo (PNG, AI, PDF, or SVG)",
  "Design proof sent for approval before production",
  "Volume discounts — the more you order, the more you save",
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((product) => product.id === id);
}

export function getRelatedProducts(
  product: Product,
  limit = 3
): Product[] {
  return PRODUCTS.filter(
    (item) => item.id !== product.id && item.category === product.category
  ).slice(0, limit);
}

export function getProductFeatures(product: Product): string[] {
  return [...ORDER_FEATURES, ...CATEGORY_FEATURES[product.category]];
}

export function isRetailAvailable(product: Product): boolean {
  return product.audience === "retail" || product.audience === "both";
}

export function isTeamAvailable(product: Product): boolean {
  return !product.audience || product.audience === "team" || product.audience === "both";
}

export function getRetailPrice(product: Product): number {
  return product.retailPrice ?? product.basePrice;
}

export function getRetailMinQuantity(product: Product): number {
  return product.retailMinQuantity ?? 1;
}

export function getRetailProducts(): Product[] {
  return PRODUCTS.filter(isRetailAvailable);
}

export function getTeamProducts(): Product[] {
  return PRODUCTS.filter(isTeamAvailable);
}

export function getShopRelatedProducts(product: Product, limit = 3): Product[] {
  return PRODUCTS.filter(
    (item) =>
      item.id !== product.id &&
      item.category === product.category &&
      isRetailAvailable(item)
  ).slice(0, limit);
}

export function getTeamRelatedProducts(product: Product, limit = 3): Product[] {
  return PRODUCTS.filter(
    (item) =>
      item.id !== product.id &&
      item.category === product.category &&
      isTeamAvailable(item)
  ).slice(0, limit);
}
