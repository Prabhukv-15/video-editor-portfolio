export const site = {
  name: "Esakki Prabhu",
  firstName: "Esakki",
  lastName: "Prabhu",
  monogram: "EP",
  role: "Video Editor & Colorist",
  tagline: "I cut stories that stay with you.",
  tamilLine: "கதைக்கு ரிதம். உணர்வுக்கு நிறம்.",
  summary:
    "DaVinci Resolve editor shaping commercials, films, and brand stories — paced for feeling, graded for memory.",
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
  youtubeId: string;
  videoSrc?: string;
  poster?: string;
  featured?: boolean;
  logline?: string;
  tagline?: string;
  body?: string[];
  role?: string;
  format?: string;
};

export const projects: Project[] = [
  {
    id: "earth",
    number: "01",
    title: "Our Earth",
    category: "Cinematic nature short",
    runtime: "03:24",
    format: "16:9",
    grade: "Picture · Sound · Titles · Fairlight",
    tagline: "One planet. Millions of lives. One home.",
    logline:
      "A 3-minute cinematic short about the Earth we share — and the silence after we forget it is ours.",
    blurb:
      "A film that lets the world speak — then asks what happens when we stop listening.",
    body: [
      "From first light to deep ocean, the cut follows a single chain of life. Then the picture goes black. Human noise enters. What remains is a question: this was always our home. Did we forget?",
      "Edited and mixed in DaVinci Resolve — picture, sound, titles, Fairlight. Built for brands, campaigns, and creators who want nature with emotion, not a lecture.",
    ],
    role: "Editor · Sound · Titles · Mix",
    videoSrc: "/videos/our-earth.mp4",
    poster: "/videos/our-earth-poster.jpg",
    featured: true,
    youtubeId: "",
  },
  {
    id: "wedding",
    number: "02",
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
    number: "03",
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
    number: "04",
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
    number: "05",
    title: "Short Films",
    category: "Narrative",
    runtime: "12:00",
    grade: "Print-film density",
    blurb:
      "Scene architecture, coverage puzzles, and color that protects performance. The edit should disappear; the story should not.",
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

export const featuredProject = projects.find((project) => project.featured) ?? projects[0];

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
