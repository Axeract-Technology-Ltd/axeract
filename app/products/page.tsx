import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Image from "next/image";
import { Label, MaskedHeading } from "@/components/typography/Label";
import { Button } from "@/components/ui/Button";
import { Chip, PageHero, PhotoBand } from "@/components/sections/Shared";
import { ChipWall } from "@/components/home/HomeSections";
import { PhysoraPhone } from "@/components/products/PhysoraPhone";
import { IMG } from "@/lib/constants/images";
import { PHYSORA } from "@/lib/constants/site";

export const metadata: Metadata = pageMeta({
  title: "Products",
  description:
    "Axeract's portfolio brings together artificial intelligence, modern software engineering and thoughtful product design, starting with Physora, a muscle-building mobile app now in development.",
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
        <Button href="#physora" variant="brand" size="lg" className="rounded-full">
          Meet Physora
        </Button>
      </PageHero>

      {/* physora */}
      <section id="physora" className="scroll-mt-20 rule-b py-16 md:py-28" aria-labelledby="physora-heading">
        <div className="container-v">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Label index="01" brand>
                Physora
              </Label>
              <div className="mt-8 flex items-center gap-5">
                <Image src={PHYSORA.logo.src} alt="Physora logo" width={56} height={68} className="h-16 w-auto md:h-20" />
                <MaskedHeading as="h2" id="physora-heading" lines={["Muscle building,", "made simple."]} className="t-display" />
              </div>
            </div>
            <ul className="flex flex-wrap gap-2 lg:col-span-4 lg:justify-end" aria-label="Product tags" data-reveal>
              {PHYSORA.tags.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </ul>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 lg:grid-cols-12">
            <div className="relative isolate flex min-h-[560px] items-end justify-end overflow-hidden rounded-[20px] p-6 lg:col-span-7" data-reveal>
              <Image src={IMG.physoraGym.src} alt={IMG.physoraGym.alt} fill sizes="(min-width:1024px) 55vw, 92vw" className="-z-10 object-cover" />
              <span aria-hidden className="absolute inset-0 -z-[5] bg-gradient-to-t from-[#0b0c16]/60 via-transparent to-transparent" />
              <PhysoraPhone />
            </div>
            <div className="card flex flex-col justify-between gap-10 p-6 md:p-10 lg:col-span-5" data-reveal style={delay(100)}>
              <span className="t-label">Product / 01</span>
              <div className="flex flex-col gap-4">
                <p className="font-display text-[clamp(1.5rem,2.2vw,2rem)] leading-[1.12]">
                  Physora is a mobile app for building muscle, and the first product from Axeract.
                </p>
                <p className="t-body text-[16px]">
                  Getting stronger shouldn&apos;t take a spreadsheet, a coach on speed dial or guesswork. Physora is being designed to make training clear,
                  motivating and simple to stick with.
                </p>
                <p className="t-body text-[16px]">It&apos;s in development now. Leave us a message and we&apos;ll let you know when it&apos;s ready.</p>
              </div>
              <dl className="grid grid-cols-3 border-t border-line pt-6 text-center">
                {[
                  ["Category", "Fitness & strength"],
                  ["Platform", "Mobile app"],
                  ["Status", PHYSORA.status],
                ].map(([k, v], i) => (
                  <div key={k} className={i > 0 ? "border-l border-line px-2" : "px-2"}>
                    <dt className="t-label">{k}</dt>
                    <dd className="mt-2 text-[13px] leading-snug text-primary">{v}</dd>
                  </div>
                ))}
              </dl>
              <div>
                <Button href="/contact" variant="brand" size="lg" className="rounded-full">
                  Get launch updates
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {[IMG.physoraPhone, IMG.physoraTraining].map((im, i) => (
              <div key={im.src} className="relative aspect-[4/3] overflow-hidden rounded-[20px]" data-reveal style={delay(i * 100)}>
                <Image src={im.src} alt={im.alt} fill sizes="(min-width:768px) 45vw, 92vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* future */}
      <section id="future" className="tone-soft scroll-mt-20 rule-b py-16 md:py-28" aria-labelledby="future-heading">
        <div className="container-v grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Label index="02">Future products</Label>
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
