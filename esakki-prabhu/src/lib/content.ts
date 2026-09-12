export const site = {
  name: "Esakki Prabhu",
  firstName: "Esakki",
  lastName: "Prabhu",
  monogram: "EP",
  role: "Video Editor & Colorist",
  tagline: "I cut stories that stay with you.",
  summary:
    "DaVinci Resolve editor shaping commercials, films, and brand stories — paced for feeling, graded for memory.",
  location: "Tamil Nadu, India",
  email: "esakkipraphuk@gmail.com",
  availability: "Open for 2026 commissions",
  available: true,
  tools: ["DaVinci Resolve", "After Effects", "Premiere Pro", "Audition"],
  socials: {
    instagram: "https://www.instagram.com/prabhukv_15/",
    whatsapp: "https://wa.me/919025815302",
    threads: "https://www.threads.com/@prabhukv_15",
    youtube: "",
  },
  heroImage: "/images/hero-nle-bg.jpg",
  profileImage: "/images/profile-hero.jpg",
} as const;

export const softwares = [
  { id: "resolve", label: "DaVinci Resolve", short: "DR", color: "#1E1E1E", accent: "#FF6A00" },
  { id: "ae", label: "After Effects", short: "Ae", color: "#00005B", accent: "#9999FF" },
  { id: "pr", label: "Premiere Pro", short: "Pr", color: "#00005B", accent: "#9999FF" },
  { id: "au", label: "Audition", short: "Au", color: "#00000A", accent: "#00E4BB" },
] as const;

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
  question?: string;
  role?: string;
  format?: string;
  /** Google Drive (or other) folder with footage, SFX, and edit resources for client review. */
  resourcesUrl?: string;
  resourcesLabel?: string;
  /** Group under AI Generated section instead of Horizontal / Vertical. */
  aiGenerated?: boolean;
  /** Loop short AI clips (e.g. under 2s). */
  loop?: boolean;
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
      "From first light to deep ocean, the cut follows a single chain of life. Then the picture goes black. Human noise enters. What remains is a question:",
      "Edited and mixed in DaVinci Resolve — picture, sound, titles, Fairlight. Built for brands, campaigns, and creators who want nature with emotion, not a lecture.",
    ],
    question: "this was always our home. Did we forget?",
    role: "Editor · Sound · Titles · Mix",
    videoSrc: "/videos/our-earth.mp4",
    poster: "/videos/our-earth-poster.jpg?v=2",
    featured: true,
    youtubeId: "",
    resourcesUrl:
      "https://drive.google.com/drive/folders/1JbnWDm_NpXTUrv1J10ssLjI42zUfG4JV?usp=sharing",
    resourcesLabel: "View resources",
  },
  {
    id: "animated-house",
    number: "02",
    title: "Animated House",
    category: "Architectural motion",
    runtime: "00:50",
    format: "16:9",
    grade: "Golden hour / pool glow · 4K",
    tagline: "A home that wakes as the light falls.",
    logline:
      "A 50-second architectural motion piece — villa, pool, and twilight atmosphere built in the edit.",
    blurb:
      "An animated house film for lifestyle and real-estate mood — warm interiors, turquoise pool, and a sky that holds the last light.",
    body: [
      "The cut lets the villa breathe: exterior stills become motion, water holds the reflection, and the grade keeps dusk warm without washing the pool.",
      "Edited and mixed in DaVinci Resolve — picture, atmosphere, and sound beds for a home that feels lived-in before anyone steps inside.",
    ],
    role: "Editor · Motion · Color · Sound",
    videoSrc: "/videos/animated-house.mp4",
    poster: "/videos/animated-house-poster.jpg",
    youtubeId: "",
    resourcesLabel: "View resources",
  },
  {
    id: "portrait-reel",
    number: "03",
    title: "Portrait Reel",
    category: "Vertical interview",
    runtime: "00:39",
    format: "9:16",
    grade: "Natural light / social-ready",
    tagline: "A clean vertical cut for talk, brand, and Reels.",
    logline: "A vertical portrait reel — paced for the phone and built for attention.",
    blurb:
      "A short vertical interview-style reel — skin-true grade, steady pacing, and a finish made for Instagram and WhatsApp delivery.",
    body: [
      "The cut keeps the speaker centered and the frame calm. Titles stay out of the way so the face and voice carry the story.",
      "Edited in DaVinci Resolve for 9:16 — ready for Reels, Shorts, and client reviews on mobile.",
    ],
    role: "Editor · Color · Mix",
    videoSrc: "/videos/portrait-reel.mp4",
    poster: "/videos/portrait-reel-poster.jpg",
    youtubeId: "",
  },
  {
    id: "richwood",
    number: "04",
    title: "Richwood Interior",
    category: "Brand film",
    runtime: "01:12",
    format: "9:16",
    grade: "Warm wood / skin-true",
    tagline: "Wood first. Then the room. Then the man who builds it.",
    logline:
      "A one-minute vertical brand film for Richwood Interior — wood, space, and the person behind the work.",
    blurb:
      "A founder film for an interior brand — warm, still, and built for the phone.",
    body: [
      "The cut keeps the grain in frame and the voice in the room. No empty luxury montage. Interview, space, and a grade that holds skin against teak and light.",
      "Edited and mixed in DaVinci Resolve. Made for reels, ads, and brand pages that need a space to feel lived-in.",
    ],
    role: "Editor · Color · Sound",
    videoSrc: "/videos/richwood-interior.mp4",
    poster: "/videos/richwood-poster.jpg",
    youtubeId: "",
    resourcesUrl:
      "https://drive.google.com/drive/folders/1iG2iMxY8UWdadId13Wj3_GSvHIK7R8VE?usp=sharing",
    resourcesLabel: "View resources",
  },
  {
    id: "admit-scholar",
    number: "05",
    title: "Admit Scholar",
    category: "Education brand reel",
    runtime: "00:43",
    format: "9:16",
    grade: "Clean interview / social-ready",
    tagline: "A face, a dream school, and a cut that sells the next step.",
    logline:
      "A vertical Admit Scholar reel — interview energy, university stakes, and a phone-first finish.",
    blurb:
      "A short vertical for Admit Scholar — student voice, MIT-scale ambition, and a grade that stays clean on Reels.",
    body: [
      "The cut keeps the talker in the frame and the brand in the story. Titles and logos land without drowning the interview.",
      "Edited and mixed in DaVinci Resolve for Instagram and paid social — 9:16, paced to hold a thumb-stop.",
    ],
    role: "Editor · Color · Titles · Mix",
    videoSrc: "/videos/admit-scholar.mp4",
    poster: "/videos/admit-scholar-poster.jpg",
    youtubeId: "",
    resourcesUrl:
      "https://drive.google.com/file/d/1b9Fdm5S8Jz2mZzoRserR98RWF-dVH-PW/view?usp=sharing",
    resourcesLabel: "View resources",
  },
  {
    id: "ai-pippit",
    number: "AI-01",
    title: "Pippit Demo",
    category: "AI generated · Vertical",
    runtime: "01:04",
    format: "9:16",
    grade: "Generative motion / social-ready",
    tagline: "Prompt-led vertical motion — paced for Reels and Shorts.",
    logline: "A vertical AI-generated demo cut finished for phone-first playback.",
    blurb:
      "An AI-generated vertical piece — motion, grade, and timing tuned so the feed feels intentional, not accidental.",
    body: [
      "Built as a generative motion demo for clients exploring AI + edit hybrid workflows.",
      "Finished for 9:16 — Reels, Shorts, and WhatsApp delivery.",
    ],
    role: "AI generation · Edit · Finish",
    videoSrc: "/videos/ai-pippit.mp4",
    poster: "/videos/ai-pippit-poster.jpg",
    youtubeId: "",
    aiGenerated: true,
  },
  {
    id: "ai-villa",
    number: "AI-02",
    title: "Villa Home",
    category: "AI generated · Architectural",
    runtime: "00:01",
    format: "16:9",
    grade: "Golden architectural glow",
    tagline: "A villa moment from prompt to picture.",
    logline: "A short AI architectural loop — villa atmosphere in a single breath.",
    blurb:
      "A brief AI-generated villa home beat — warm exterior light and a still that almost moves. Looped for mood boards and real-estate pitches.",
    body: [
      "Designed as a generative architecture sample — fast to review, easy to drop into a pitch deck or reel.",
    ],
    role: "AI generation · Grade · Loop finish",
    videoSrc: "/videos/ai-villa.mp4",
    poster: "/videos/ai-villa-poster.jpg?v=2",
    youtubeId: "",
    aiGenerated: true,
    loop: true,
  },
  {
    id: "wedding",
    number: "06",
    title: "Wedding Films",
    category: "Documentary romance",
    runtime: "04:20",
    grade: "Warm tungsten / skin-true",
    blurb:
      "Quiet glances, crowded halls, and the cut that lets a vow land. Built for families who want a film, not a highlight dump.",
    youtubeId: "",
  },
  {
    id: "music",
    number: "07",
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
    number: "08",
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
    number: "09",
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
export const aiVideos = projects.filter(
  (project) => Boolean(project.videoSrc) && project.aiGenerated,
);
export const horizontalVideos = projects.filter(
  (project) =>
    Boolean(project.videoSrc) && project.format === "16:9" && !project.aiGenerated,
);
export const verticalVideos = projects.filter(
  (project) =>
    Boolean(project.videoSrc) && project.format === "9:16" && !project.aiGenerated,
);
export const verticalProjects = verticalVideos;
export const landscapeFilms = horizontalVideos.filter((project) => !project.featured);
/** @deprecated Prefer verticalProjects */
export const verticalProject = verticalProjects[0];

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
