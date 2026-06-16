export const BRAND = {
  name: "RiR Teamwear",
  tagline: "Custom Martial Arts Gear",
  philosophy: "Raise In Respect",
  email: "hello@rirteamwear.com",
  phone: "(555) 123-4567",
} as const;

export const SPORT_TYPES = [
  "BJJ",
  "MMA",
  "Karate",
  "Taekwondo",
  "Muay Thai",
  "Boxing",
  "Judo",
  "Wrestling",
  "Krav Maga",
] as const;

export const CATEGORIES = [
  {
    id: "apparel",
    name: "Apparel",
    description: "Custom team tees, rashguards, hoodies, and training wear.",
    icon: "shirt",
  },
  {
    id: "gear",
    name: "Gear",
    description: "Gloves, headgear, shin guards, mitts, and protective equipment.",
    icon: "helmet",
  },
  {
    id: "mouthguard",
    name: "Mouthguards",
    description: "Custom-fit mouthguards with your gym logo.",
    icon: "shield",
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Patches, bags, mugs, tumblers, and team gear add-ons.",
    icon: "bag",
  },
] as const;
