"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { UtensilsCrossed, ShoppingBag } from "lucide-react";
import frontview from "@/assests/frontview.png";

/* ═══════════════════════════════════════════════
   CONFIGURATION
   ═══════════════════════════════════════════════ */
const MOBILE_VIDEO = "/images/mobile/bhature portrait.mp4";
const MOBILE_BREAKPOINT = 768;

/* ═══════════════════════════════════════════════
   SHARED TYPOGRAPHY OVERLAY
   ═══════════════════════════════════════════════ */
function HeroTypography() {
    return (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                {/* Decorative accent line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-16 h-[3px] bg-[#e11d48] mx-auto mb-6 origin-center rounded-full"
                />

                {/* Tagline pill */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="inline-block mb-6"
                >
                    <span className="px-5 py-2 rounded-full bg-white/70 backdrop-blur-md border border-[#b45309]/20 text-[#b45309] tracking-[0.2em] uppercase text-xs md:text-sm font-bold shadow-sm">
                        Punjab di Feel, Har Meal
                    </span>
                </motion.div>

                {/* Heading — staggered reveal */}
                <div className="overflow-hidden mb-1 pt-2">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        style={{ WebkitTextStroke: "2px #ea580c" }}
                        className="font-[family-name:var(--font-rozha)] text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] text-[#fed7aa] leading-[0.9] tracking-tight drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"
                    >
                        CHATURE
                    </motion.h1>
                </div>
                <div className="overflow-hidden mb-6">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                        style={{ WebkitTextStroke: "2px #ea580c" }}
                        className="font-[family-name:var(--font-rozha)] text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] text-[#fed7aa] leading-[0.9] tracking-tight drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"
                    >
                        BHATURE
                    </motion.h1>
                </div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-white text-base md:text-xl max-w-xl mx-auto leading-relaxed mb-12 font-medium drop-shadow-md"
                >
                    Authentic North Indian flavours crafted with love,{" "}
                    <span className="font-bold">served with a twist of chatur-ness.</span>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-5"
                >
                    <a
                        href="#menu"
                        className="group relative px-9 py-4 bg-[#e11d48] text-white rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:bg-[#be123c] hover:shadow-xl hover:shadow-[#e11d48]/30 hover:-translate-y-1 inline-flex items-center gap-2"
                    >
                        <UtensilsCrossed size={18} className="group-hover:rotate-12 transition-transform" />
                        Explore Menu
                    </a>
                    <a
                        href="#contact"
                        className="px-9 py-4 bg-white/50 backdrop-blur-sm border-2 border-[#2d2d2d]/10 text-[#2d2d2d] rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:border-[#2d2d2d] hover:bg-white hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2"
                    >
                        <ShoppingBag size={18} />
                        Order Online
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <span className="text-[10px] tracking-[0.25em] uppercase text-white/60 font-bold drop-shadow-md">
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[2px] h-10 bg-gradient-to-b from-[#e11d48] to-transparent rounded-full"
                />
            </motion.div>
        </div>
    );
}

/* ═══════════════════════════════════════════════
   CINEMATIC OVERLAYS (shared)
   ═══════════════════════════════════════════════ */
function CinematicOverlays() {
    return (
        <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-teal-dark/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-cream to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(14,61,59,0.30)_100%)]" />
        </div>
    );
}

/* ═══════════════════════════════════════════════
   SCALLOPED BOTTOM EDGE (shared)
   ═══════════════════════════════════════════════ */
function ScallopedEdge() {
    return (
        <div className="absolute bottom-0 left-0 right-0 z-20">
            <svg viewBox="0 0 1200 40" className="w-full" preserveAspectRatio="none">
                <path
                    d="M0,40 L0,20 Q30,0 60,20 Q90,40 120,20 Q150,0 180,20 Q210,40 240,20 Q270,0 300,20 Q330,40 360,20 Q390,0 420,20 Q450,40 480,20 Q510,0 540,20 Q570,40 600,20 Q630,0 660,20 Q690,40 720,20 Q750,0 780,20 Q810,40 840,20 Q870,0 900,20 Q930,40 960,20 Q990,0 1020,20 Q1050,40 1080,20 Q1110,0 1140,20 Q1170,40 1200,20 L1200,40 Z"
                    fill="#fdf6e3"
                />
            </svg>
        </div>
    );
}

/* ═══════════════════════════════════════════════
   MOBILE HERO — Auto-playing video, single screen
   ═══════════════════════════════════════════════ */
function MobileHero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoReady, setVideoReady] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const onCanPlay = () => setVideoReady(true);
        video.addEventListener("canplaythrough", onCanPlay);

        video.playbackRate = 1.25;
        video.play().catch(() => setVideoReady(true));

        return () => video.removeEventListener("canplaythrough", onCanPlay);
    }, []);

    return (
        <section className="relative h-screen bg-teal-dark overflow-hidden">
            {/* Video — covers entire viewport */}
            <video
                ref={videoRef}
                className="absolute top-0 left-0"
                src={MOBILE_VIDEO}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                style={{
                    width: "100vw",
                    height: "100vh",
                    objectFit: "cover",
                    opacity: videoReady ? 1 : 0,
                    transition: "opacity 0.6s ease",
                }}
            />

            {/* Loading state */}
            {!videoReady && (
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-teal-dark">
                    <div className="w-20 h-20 rounded-full bg-mustard/10 border-2 border-brass/30 flex items-center justify-center mb-8 animate-pulse">
                        <span className="font-[family-name:var(--font-rozha)] text-mustard text-2xl">
                            CB
                        </span>
                    </div>
                    <p className="text-cream/40 text-[11px] tracking-[0.2em] uppercase font-medium">
                        Loading…
                    </p>
                </div>
            )}

            {/* Typography overlay */}
            <HeroTypography />

            {/* Cinematic overlays */}
            <CinematicOverlays />

            {/* Scalloped bottom edge */}
            <ScallopedEdge />
        </section>
    );
}

/* ═══════════════════════════════════════════════
   DESKTOP HERO — Static frontview image
   ═══════════════════════════════════════════════ */
function DesktopHero() {
    return (
        <section className="relative h-screen bg-teal-dark overflow-hidden">
            {/* Background image — covers entire viewport */}
            <img
                src={frontview.src}
                alt="Chature Bhature"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Typography overlay */}
            <HeroTypography />

            {/* Cinematic overlays */}
            <CinematicOverlays />

            {/* Scalloped bottom edge */}
            <ScallopedEdge />
        </section>
    );
}

/* ═══════════════════════════════════════════════
   MAIN EXPORT — picks mobile video vs desktop canvas
   ═══════════════════════════════════════════════ */
export default function HeroScroll() {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        check(); // initial

        // Only switch on significant resize (e.g. orientation change)
        let timer: ReturnType<typeof setTimeout>;
        const onResize = () => {
            clearTimeout(timer);
            timer = setTimeout(check, 200);
        };
        window.addEventListener("resize", onResize);
        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    // SSR / first render — show nothing until we know the viewport
    if (isMobile === null) {
        return (
            <section className="h-screen bg-teal-dark flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-mustard/10 border-2 border-brass/30 flex items-center justify-center animate-pulse">
                    <span className="font-[family-name:var(--font-rozha)] text-mustard text-2xl">
                        CB
                    </span>
                </div>
            </section>
        );
    }

    return isMobile ? <MobileHero /> : <DesktopHero />;
}
