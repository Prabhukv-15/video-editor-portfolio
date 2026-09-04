export const site = {
  name: "Esakki Prabhu",
  firstName: "Esakki",
  lastName: "Prabhu",
  monogram: "EP",
  role: "Video Editor & Colorist",
  tagline: "I cut stories that stay with you.",
  tamilLine: "கதைக்கு ரிதம். உணர்வுக்கு நிறம்.",
  summary:
    "DaVinci Resolve editor shaping commercials, films, weddings, and brand stories — paced for feeling, graded for memory.",
  location: "Tamil Nadu, India",
  email: "esakkipraphuk@gmail.com",
  availability: "Open for 2026 commissions",
  available: true,
  tools: ["DaVinci Resolve", "After Effects", "Premiere Pro", "Audition"],
  socials: {
    instagram: "",
    youtube: "",
    whatsapp: "",
  },
} as const;

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  runtime: string;
  grade: string;
  blurb: string;
  /** YouTube video ID. Leave empty until the reel is ready. */
  youtubeId: string;
};

export const projects: Project[] = [
  {
    id: "wedding",
    number: "01",
    title: "Wedding Films",
    category: "Documentary romance",
    runtime: "04:20",
    grade: "Warm tungsten / skin-true",
    blurb:
      "Quiet glances, crowded halls, and the cut that lets a vow land. Built for families who want a film, not a highlight dump.",
    youtubeId: "",
  },
  {
    id: "brand",
    number: "02",
    title: "Brand & Commercial",
    category: "Campaign",
    runtime: "00:45",
    grade: "Clean product / high contrast",
    blurb:
      "Product, founder, and city films with a tight narrative spine. Color that sells without shouting.",
    youtubeId: "",
  },
  {
    id: "music",
    number: "03",
    title: "Music Videos",
    category: "Performance",
    runtime: "03:12",
    grade: "Teal-orange night",
    blurb:
      "Rhythm-led cutting, lyric punctuation, and grades that match the mix. Built to hold on a phone and on a stage screen.",
    youtubeId: "",
  },
  {
    id: "short",
    number: "04",
    title: "Short Films",
    category: "Narrative",
    runtime: "12:00",
    grade: "Print-film density",
    blurb:
      "Scene architecture, coverage puzzles, and color that protects performance. The edit should disappear; the story should not.",
    youtubeId: "",
  },
  {
    id: "youtube",
    number: "05",
    title: "YouTube & Documentary",
    category: "Long-form",
    runtime: "08:40",
    grade: "Natural / editorial",
    blurb:
      "Talking-head that still feels cinematic. B-roll that earns its place. Pacing for retention without cheap jump-cuts.",
    youtubeId: "",
  },
  {
    id: "event",
    number: "06",
    title: "Events & Recaps",
    category: "Live",
    runtime: "02:30",
    grade: "Punchy / social-ready",
    blurb:
      "Multi-cam recaps for launches, stages, and celebrations. Fast turnaround, still graded like a film.",
    youtubeId: "",
  },
];

export const services = [
  {
    code: "I",
    title: "Story Edit",
    copy: "Selects, structure, and rhythm. I find the cut that makes a scene feel inevitable.",
  },
  {
    code: "II",
    title: "Color Grade",
    copy: "DaVinci Resolve finishing — skin, contrast, and a look that holds across shots and platforms.",
  },
  {
    code: "III",
    title: "Motion & Titles",
    copy: "Opening cards, lower-thirds, and type that belongs in the frame instead of sitting on it.",
  },
  {
    code: "IV",
    title: "Sound Pass",
    copy: "Dialogue, beds, and hits so the picture has weight. Silence is a cut too.",
  },
];

export const stats = [
  { value: "DaVinci", label: "Primary suite" },
  { value: "Remote", label: "Worldwide" },
  { value: "2026", label: "Booking now" },
  { value: "2.39 / 16:9", label: "Delivery" },
];
