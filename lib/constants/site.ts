export const SITE = {
  name: "Axeract",
  url: "https://axeract.ai",
  legalName: "AXERACT TECHNOLOGY LTD",
  tagline: "Technology, made tangible.",
};

/**
 * Axeract's products. Copy mirrors each product's own website; don't add claims those sites don't make.
 * `accent` drives the small per-product colour touches (name, dots, logo tile).
 */
export const PRODUCTS = [
  {
    key: "physorify",
    name: "Physorify",
    url: "https://physorify.com",
    domain: "physorify.com",
    category: "AI fitness coach",
    lines: ["Your AI full-body", "fitness coach."],
    summary: "Physorify is an AI full-body fitness coach: physique scan, personalized training with progressive overload, exercise demos, nutrition tracking and progress analysis.",
    features: ["Physique scan", "Personalized training with progressive overload", "Exercise demos", "Nutrition tracking", "Progress analysis"],
    status: "Coming soon to iOS and Android",
    platform: "iOS & Android",
    tags: ["AI", "Fitness", "Nutrition", "iOS & Android"],
    logo: { src: "/brand/physorify-mark.png", width: 842, height: 1023, tile: false },
    accent: "physorify",
  },
  {
    key: "postmondo",
    name: "Postmondo",
    url: "https://postmondo.com",
    domain: "postmondo.com",
    category: "Social media workspace",
    lines: ["Plan, create and publish", "for every brand you run."],
    summary: "Postmondo is the social media workspace for teams and agencies: compose once, shape it for every channel, get it approved and publish on time.",
    features: ["Compose once", "Shape it for every channel", "Get it approved", "Publish on time"],
    status: "Live",
    platform: "Web",
    tags: ["Social Media", "Teams & Agencies", "Publishing", "Approvals"],
    logo: { src: "/brand/postmondo-mark-white.png", width: 194, height: 240, tile: true },
    accent: "postmondo",
  },
] as const;

export type Product = (typeof PRODUCTS)[number];

export const NAV_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Technology", href: "/#technology" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = [
  ...NAV_LINKS,
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

/** Short brand lines for marquees, loading states and visual moments. */
export const BRAND_LINES = [
  "Technology, made tangible.",
  "We build what comes next.",
  "From possibility to product.",
  "Complex technology. Simple experiences.",
  "Built around what technology makes possible.",
  "Ideas become systems. Systems become products.",
  "Intelligence behind simpler experiences.",
  "Designed for what comes next.",
];

export const CONTACT_REASONS = ["Product Enquiry", "Partnership", "Business", "Press", "Careers", "Other"] as const;

export const SOCIAL = [
  { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/145252968/" },
  { key: "instagram", label: "Instagram", href: "https://www.instagram.com/axeract.ai/" },
  { key: "facebook", label: "Facebook", href: "https://www.facebook.com/profile.php?id=61594499683436" },
  { key: "youtube", label: "YouTube", href: "https://www.youtube.com/@axeract" },
  { key: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@axeract.technology" },
  { key: "github", label: "GitHub", href: "https://github.com/Axeract-Technology-Ltd" },
] as const;

/** Public inboxes (aliases of the main Microsoft 365 mailbox). */
export const EMAILS = [
  { label: "General enquiries", address: "info@axeract.ai" },
  { label: "Support", address: "support@axeract.ai" },
  { label: "Careers", address: "careers@axeract.ai" },
  { label: "Privacy & legal", address: "privacy@axeract.ai" },
] as const;
