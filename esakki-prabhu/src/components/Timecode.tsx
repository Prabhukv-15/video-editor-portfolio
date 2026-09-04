"use client";

import { useEffect, useState } from "react";

function pad(value: number, size = 2) {
  return String(value).padStart(size, "0");
}

export function Timecode() {
  const [stamp, setStamp] = useState("01:00:00:00");

  useEffect(() => {
    const started = Date.now();
    const tick = () => {
      const elapsed = Math.floor((Date.now() - started) / (1000 / 24));
      const frames = elapsed % 24;
      const totalSeconds = Math.floor(elapsed / 24);
      const seconds = totalSeconds % 60;
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const hours = 1 + Math.floor(totalSeconds / 3600);
      setStamp(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frames)}`);
    };
    tick();
    const id = window.setInterval(tick, 1000 / 24);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="timecode text-[11px] text-paper-dim sm:text-xs" aria-hidden>
      {stamp}
    </span>
  );
}
