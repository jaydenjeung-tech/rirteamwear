export type ProductCategory =
  | "apparel"
  | "gear"
  | "mouthguard"
  | "accessories";

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
  },
];

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  apparel: "Apparel",
  gear: "Gear",
  mouthguard: "Mouthguards",
  accessories: "Accessories",
};
