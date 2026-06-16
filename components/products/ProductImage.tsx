import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
  aspect?: "square" | "4/3";
}

export function ProductImage({
  src,
  alt,
  aspect = "4/3",
}: ProductImageProps) {
  const aspectClass = aspect === "square" ? "aspect-square" : "aspect-[4/3]";

  return (
    <div className={`relative ${aspectClass} overflow-hidden bg-rir-gray`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  );
}
