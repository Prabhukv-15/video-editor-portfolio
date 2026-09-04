const grades: Record<string, { a: string; b: string; c: string; wash: string }> = {
  wedding: { a: "#3b2416", b: "#c48a4a", c: "#f0d7a8", wash: "rgba(255, 180, 90, 0.28)" },
  brand: { a: "#0c1218", b: "#1c3d4a", c: "#d7e4ea", wash: "rgba(90, 160, 190, 0.22)" },
  music: { a: "#140814", b: "#7a1f5a", c: "#3ad0c8", wash: "rgba(255, 40, 120, 0.25)" },
  short: { a: "#120e0a", b: "#5a4630", c: "#d6b58a", wash: "rgba(180, 120, 40, 0.2)" },
  youtube: { a: "#10140f", b: "#2f4a38", c: "#c8d2b8", wash: "rgba(120, 160, 90, 0.2)" },
  event: { a: "#1a0a0a", b: "#8a1f1f", c: "#e8c37a", wash: "rgba(220, 60, 40, 0.22)" },
};

type CinematicStillProps = {
  id: string;
  className?: string;
  title?: string;
};

export function CinematicStill({ id, className = "", title }: CinematicStillProps) {
  const grade = grades[id] ?? grades.short;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden={!title}>
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 30% 20%, ${grade.c} 0%, transparent 42%), radial-gradient(ellipse at 80% 80%, ${grade.b} 0%, ${grade.a} 58%)`,
        }}
      />
      <div
        className="absolute inset-0 mix-blend-screen"
        style={{ background: grade.wash }}
      />
      <div className="absolute inset-x-[8%] top-[18%] h-[42%] border border-white/10 bg-black/20" />
      <div className="absolute right-[12%] bottom-[16%] h-16 w-16 rounded-full border border-white/20" />
      <div className="sprocket absolute top-0 bottom-0 left-0 w-4 opacity-50" />
      <div className="sprocket absolute top-0 right-0 bottom-0 w-4 opacity-50" />
      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/20" />
      {title ? <span className="sr-only">{title}</span> : null}
    </div>
  );
}
