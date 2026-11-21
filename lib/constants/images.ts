/** All photography is AI-generated (Higgsfield, GPT Image 2.5) for Axeract. No real people or places. */
const img = (name: string, alt: string) => ({ src: `/images/${name}.jpg`, alt });

export const IMG = {
  heroPrism: img("hero-prism", "A frosted glass triangular prism standing in a quiet concrete studio, lit by a beam of daylight"),
  heroDesk: img("hero-desk", "An engineer's hands typing on a laptop beside a notebook of geometric sketches"),
  heroChip: img("hero-chip", "Macro view of a processor on a dark circuit board"),
  research: img("research", "Paper wireframe sketches spread across a designer's table"),
  design: img("design", "A tablet showing a minimal app wireframe on a stone desk"),
  engineering: img("engineering", "A tidy server rack with small teal status lights"),
  intelligence: img("intelligence", "Glass optical fibres fanning out and glowing at the tips"),
  product: img("product", "A hand holding a phone showing a clean voice app with a microphone button"),
  physorifyGym: img("physorify-gym", "Someone resting between sets in a modern gym, holding a phone with a workout app open"),
  physorifyScan: img("physorify-scan", "Physorify physique scan: an athlete photographed front-on against a dark backdrop"),
  physorifyNutrition: img("physorify-nutrition", "A balanced meal bowl with chicken, rice, edamame, avocado and vegetables"),
  postmondoStudio: img("postmondo-studio", "A laptop showing a content library on a wooden desk with a camera and printed photos"),
  postmondoCalendar: img("postmondo-calendar", "Postmondo's publishing calendar showing a month of scheduled posts across channels"),
  postmondoHome: img("postmondo-home", "Postmondo home screen with weekly posting goals, drafts and connected channels"),
  postmondoComposer: img("postmondo-composer", "Postmondo composer editing an Instagram post with a live preview"),
  datacenter: img("datacenter", "A long quiet data centre corridor"),
  building: img("building", "A modern glass and concrete building at blue hour"),
  aboutTeam: img("about-team", "A small product team working around a long table in a bright studio"),
  prototypes: img("prototypes", "Early product prototypes and 3D-printed forms on a workbench"),
  mobile: img("mobile", "A smartphone and wireless earbuds on a concrete surface"),
  realtime: img("realtime", "Light trails flowing through a city at night, seen from above"),
  automation: img("automation", "A white robotic arm placing a component on a tray in a clean lab"),
  platforms: img("platforms", "A monitor showing a clean analytics dashboard on a tidy desk"),
  contact: img("contact", "A calm, empty modern office lounge with daylight and plants"),
};
