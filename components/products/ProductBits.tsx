import Image from "next/image";
import type { Product } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

/** Product mark. Postmondo's mark is white, so it sits on its own teal tile; Physorify's gradient mark stands alone. */
export function ProductLogo({ product, size = 48, className }: { product: Product; size?: number; className?: string }) {
  const { logo } = product;
  if (logo.tile) {
    return (
      <span className={cn("bg-postmondo grid shrink-0 place-items-center rounded-[22%]", className)} style={{ width: size, height: size }} aria-hidden>
        <Image src={logo.src} alt="" width={logo.width} height={logo.height} style={{ height: Math.round(size * 0.56), width: "auto" }} />
      </span>
    );
  }
  return <Image src={logo.src} alt="" width={logo.width} height={logo.height} className={cn("w-auto shrink-0", className)} style={{ height: size }} aria-hidden />;
}

/** Product name set in the product's own accent. */
export function ProductName({ product, className }: { product: Product; className?: string }) {
  return <span className={cn("font-display", product.accent === "physorify" ? "text-physorify" : "text-postmondo", className)}>{product.name}</span>;
}

/** A real screenshot of a web product inside a minimal browser window. */
export function BrowserFrame({ src, alt, domain, sizes, className, priority }: { src: string; alt: string; domain: string; sizes: string; className?: string; priority?: boolean }) {
  return (
    <figure className={cn("overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_30px_60px_-28px_rgba(0,0,0,0.45)]", className)}>
      <div className="flex items-center gap-3 border-b border-black/[0.07] bg-[#f3f5f6] px-3 py-2" aria-hidden>
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="mx-auto truncate rounded-md bg-white px-3 py-0.5 text-[11px] text-[#5b6770]">{domain}</span>
        <span className="w-[42px]" />
      </div>
      <div className="relative aspect-[16/10]">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
      </div>
    </figure>
  );
}
