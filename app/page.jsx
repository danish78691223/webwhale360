"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function IntroPage() {
  const router = useRouter();
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const handleEnded = () => {
      router.replace("/home");
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, [router]);

  return (
    <main className="intro-page">
      <video
        ref={videoRef}
        className="intro-video"
        src="/webwhale_intro.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
      />

      <div className="intro-overlay" />
    </main>
  );
}