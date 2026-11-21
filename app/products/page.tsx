import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Image from "next/image";
import { Label, MaskedHeading } from "@/components/typography/Label";
import { Button } from "@/components/ui/Button";
import { Chip, PageHero, PhotoBand } from "@/components/sections/Shared";
import { ChipWall } from "@/components/home/HomeSections";
import { PhysorifyPhone } from "@/components/products/PhysorifyPhone";
import { BrowserFrame, ProductLogo, ProductName } from "@/components/products/ProductBits";
import { IMG } from "@/lib/constants/images";
import { PRODUCTS, type Product } from "@/lib/constants/site";

export const metadata: Metadata = pageMeta({
  title: "Products",
  description:
    "Axeract's portfolio brings together artificial intelligence, modern software engineering and thoughtful product design: Physorify, an AI full-body fitness coach, and Postmondo, the social media workspace for teams and agencies.",
  path: "/products",
  image: "/og/products.png",
});

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Axeract Products"
        lines={["Products designed around", "possibilities technology", "created only recently."]}
        img={IMG.heroChip}
        copy={
          <>
            <p>Our portfolio brings together artificial intelligence, modern software engineering and thoughtful product design.</p>
            <p className="t-body mt-3">Different products. Different audiences. One philosophy for how technology should feel.</p>
          </>
        }
      >
        <Button href="#physorify" variant="brand" size="lg" className="rounded-full">
          See our products
        </Button>
      </PageHero>

      {PRODUCTS.map((p, n) => (
        <ProductSection key={p.key} product={p} index={n} />
      ))}

      {/* future */}
      <section id="future" className="tone-soft scroll-mt-20 rule-b py-16 md:py-28" aria-labelledby="future-heading">
        <div className="container-v grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Label index="03">Future products</Label>
            <MaskedHeading as="h2" id="future-heading" lines={["More is", "being built."]} className="t-display mt-6" />
            <p className="t-lead mt-6 max-w-[40ch]" data-reveal>
              New products will appear here as they move from idea to reality.
            </p>
          </div>
          <div className="lg:col-span-7">
            <p className="t-label mb-6 text-center">Axeract is exploring products across</p>
            <ChipWall
              label="Areas Axeract is exploring"
              items={[
                { k: "ai", name: "Artificial Intelligence" },
                { k: "comms", name: "Communication" },
                { k: "faith", name: "Faith & Lifestyle" },
                { k: "productivity", name: "Productivity" },
                { k: "utilities", name: "Everyday Utilities" },
                { k: "mobile", name: "Mobile Experiences" },
              ]}
            />
          </div>
        </div>
      </section>

      <PhotoBand
        img={IMG.building}
        label="What comes next"
        lines={["The next product", "starts as a possibility."]}
        copy="Have an idea, a partnership or a question about what we're building? We'd like to hear it."
        actions={[{ label: "Contact Axeract", href: "/contact", variant: "white" }]}
      />
    </>
  );
}

/* one full section per product: logo + headline, hero visual with summary card, then a gallery */
function ProductSection({ product: p, index }: { product: Product; index: number }) {
  const isPhysorify = p.key === "physorify";
  const gallery = isPhysorify ? [IMG.physorifyScan, IMG.physorifyNutrition] : [IMG.postmondoHome, IMG.postmondoComposer];
  return (
    <section id={p.key} className={`scroll-mt-20 rule-b py-16 md:py-28 ${index % 2 ? "bg-surface" : ""}`} aria-labelledby={`${p.key}-heading`}>
      <div className="container-v">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Label index={String(index + 1).padStart(2, "0")} brand>
              {p.category}
            </Label>
            <div className="mt-8 flex items-center gap-5">
              <ProductLogo product={p} size={72} className="max-md:!h-14 max-md:!w-auto" />
              <div>
                <ProductName product={p} className="block text-[clamp(1.5rem,2.4vw,2.25rem)] leading-none" />
                <MaskedHeading as="h2" id={`${p.key}-heading`} lines={[...p.lines]} className="t-title mt-3" />
              </div>
            </div>
          </div>
          <ul className="flex flex-wrap gap-2 lg:col-span-4 lg:justify-end" aria-label={`${p.name} tags`} data-reveal>
            {p.tags.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </ul>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 lg:grid-cols-12">
          {isPhysorify ? (
            <div className="relative isolate flex min-h-[560px] items-end justify-end overflow-hidden rounded-[20px] p-6 lg:col-span-7" data-reveal>
              <Image src={IMG.physorifyGym.src} alt={IMG.physorifyGym.alt} fill sizes="(min-width:1024px) 55vw, 92vw" className="-z-10 object-cover" />
              <span aria-hidden className="absolute inset-0 -z-[5] bg-gradient-to-t from-[#0b0c16]/60 via-transparent to-transparent" />
              <PhysorifyPhone />
            </div>
          ) : (
            <div className="relative isolate flex min-h-[460px] items-center overflow-hidden rounded-[20px] p-5 md:p-8 lg:col-span-7" data-reveal>
              <Image src={IMG.postmondoStudio.src} alt={IMG.postmondoStudio.alt} fill sizes="(min-width:1024px) 55vw, 92vw" className="-z-10 object-cover" />
              <span aria-hidden className="absolute inset-0 -z-[5] bg-[#03252e]/45" />
              <BrowserFrame src={IMG.postmondoCalendar.src} alt={IMG.postmondoCalendar.alt} domain={p.domain} sizes="(min-width:1024px) 50vw, 88vw" className="w-full" />
            </div>
          )}
          <div className="card flex flex-col justify-between gap-10 p-6 md:p-10 lg:col-span-5" data-reveal style={delay(100)}>
            <span className="t-label">Product / {String(index + 1).padStart(2, "0")}</span>
            <div className="flex flex-col gap-5">
              <p className="font-display text-[clamp(1.4rem,2vw,1.85rem)] leading-[1.15]">{p.summary}</p>
              <ul className="flex flex-col">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 border-t border-line py-2.5 text-[15px] text-primary">
                    <span className="dot-brand !h-[6px] !w-[6px] !shadow-none" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <dl className="grid grid-cols-3 border-t border-line pt-6 text-center">
              {[
                ["Category", p.category],
                ["Platform", p.platform],
                ["Status", p.status],
              ].map(([k, v], i) => (
                <div key={k} className={i > 0 ? "border-l border-line px-2" : "px-2"}>
                  <dt className="t-label">{k}</dt>
                  <dd className="mt-2 text-[13px] leading-snug text-primary">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button href={p.url} newTab variant="brand" size="lg" className="rounded-full">
                Visit {p.name}
              </Button>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-[14px] text-secondary underline-offset-4 hover:text-primary hover:underline">
                {p.domain}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {gallery.map((im, i) =>
            isPhysorify ? (
              <div key={im.src} className="relative aspect-[4/3] overflow-hidden rounded-[20px]" data-reveal style={delay(i * 100)}>
                <Image src={im.src} alt={im.alt} fill sizes="(min-width:768px) 45vw, 92vw" className="object-cover" />
              </div>
            ) : (
              <div key={im.src} data-reveal style={delay(i * 100)}>
                <BrowserFrame src={im.src} alt={im.alt} domain={p.domain} sizes="(min-width:768px) 45vw, 92vw" />
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
