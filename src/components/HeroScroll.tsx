"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { UtensilsCrossed, ShoppingBag } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

/* ═══════════════════════════════════════════════
   CONFIGURATION
   ═══════════════════════════════════════════════ */
const TOTAL_FRAMES = 205;
const DESKTOP_PATH = "/images/desktop/";
const MOBILE_VIDEO = "/images/mobile/bhature portrait.mp4";
const MOBILE_BREAKPOINT = 768;

function getFrameSrc(basePath: string, index: number): string {
    return `${basePath}ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`;
}

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
   DESKTOP HERO — Scroll-controlled canvas, 500vh
   ═══════════════════════════════════════════════ */
function DesktopHero() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
    const framesRef = useRef<HTMLImageElement[]>([]);
    const currentFrameRef = useRef<number>(0);
    const rafIdRef = useRef<number>(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadProgress, setLoadProgress] = useState(0);

    const renderFrame = useCallback((index: number) => {
        const ctx = ctxRef.current;
        const canvas = canvasRef.current;
        if (!ctx || !canvas) return;

        const frame = framesRef.current[index];
        if (!frame || !frame.complete || !frame.naturalWidth) return;

        const vw = canvas.clientWidth || window.innerWidth;
        const vh = canvas.clientHeight || window.innerHeight;

        const imgW = frame.naturalWidth;
        const imgH = frame.naturalHeight;
        const scale = Math.max(vw / imgW, vh / imgH);
        const drawW = imgW * scale;
        const drawH = imgH * scale;
        const drawX = (vw - drawW) / 2;
        const drawY = (vh - drawH) / 2;

        ctx.drawImage(frame, drawX, drawY, drawW, drawH);
    }, []);

    const resizeCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const w = window.innerWidth;
        const h = window.innerHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;

        const ctx = canvas.getContext("2d", { alpha: false, desynchronized: true });
        if (ctx) {
            ctx.scale(dpr, dpr);
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = "high";
            ctxRef.current = ctx;
        }

        if (framesRef.current.length > 0) {
            renderFrame(currentFrameRef.current);
        }
    }, [renderFrame]);

    useEffect(() => {
        const section = sectionRef.current;
        const canvas = canvasRef.current;
        if (!section || !canvas) return;

        // Acquire initial context
        const ctx = canvas.getContext("2d", { alpha: false, desynchronized: true });
        if (ctx) {
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = "high";
            ctxRef.current = ctx;
        }

        resizeCanvas();

        // Preload frames
        const frames: HTMLImageElement[] = [];
        let loaded = 0;
        let lastPct = 0;

        const onReady = () => {
            loaded++;
            const pct = Math.round((loaded / TOTAL_FRAMES) * 100);
            if (pct >= lastPct + 5 || loaded >= TOTAL_FRAMES) {
                lastPct = pct;
                setLoadProgress(pct);
            }
            if (loaded >= TOTAL_FRAMES) {
                framesRef.current = frames;
                setIsLoaded(true);
                renderFrame(0);
            }
        };

        for (let i = 0; i < TOTAL_FRAMES; i++) {
            const img = new Image();
            img.decoding = "async";
            img.src = getFrameSrc(DESKTOP_PATH, i);
            img.onload = onReady;
            img.onerror = onReady;
            frames.push(img);
        }

        // GSAP ScrollTrigger
        const proxy = { frame: 0 };
        gsap.to(proxy, {
            frame: TOTAL_FRAMES - 1,
            snap: "frame",
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.15,
            },
            onUpdate: () => {
                const next = Math.round(proxy.frame);
                if (next !== currentFrameRef.current) {
                    currentFrameRef.current = next;
                    cancelAnimationFrame(rafIdRef.current);
                    rafIdRef.current = requestAnimationFrame(() => renderFrame(next));
                }
            },
        });

        // Resize handler
        let timer: ReturnType<typeof setTimeout>;
        const onResize = () => {
            clearTimeout(timer);
            timer = setTimeout(resizeCanvas, 150);
        };
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
            cancelAnimationFrame(rafIdRef.current);
            clearTimeout(timer);
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, [renderFrame, resizeCanvas]);

    return (
        <section
            ref={sectionRef}
            className="relative bg-teal-dark"
            style={{ height: "500vh" }}
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Loading overlay */}
                {!isLoaded && (
                    <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-teal-dark">
                        <div className="w-20 h-20 rounded-full bg-mustard/10 border-2 border-brass/30 flex items-center justify-center mb-8 animate-pulse">
                            <span className="font-[family-name:var(--font-rozha)] text-mustard text-2xl">
                                CB
                            </span>
                        </div>
                        <div className="w-56 h-[3px] bg-cream/10 rounded-full overflow-hidden mb-3">
                            <div
                                className="h-full bg-gradient-to-r from-brass via-mustard to-brass-light rounded-full transition-all duration-500 ease-out"
                                style={{ width: `${loadProgress}%` }}
                            />
                        </div>
                        <p className="text-cream/40 text-[11px] tracking-[0.2em] uppercase font-medium">
                            Loading experience… {loadProgress}%
                        </p>
                    </div>
                )}

                {/* Canvas */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0"
                    style={{
                        opacity: isLoaded ? 1 : 0,
                        transition: "opacity 0.6s ease",
                        willChange: "transform",
                        contain: "strict",
                    }}
                />

                {/* Typography overlay (only show after loaded) */}
                <div
                    style={{
                        opacity: isLoaded ? 1 : 0,
                        transition: "opacity 0.6s ease 0.4s",
                    }}
                >
                    <HeroTypography />
                </div>

                {/* Cinematic overlays */}
                <div
                    style={{
                        opacity: isLoaded ? 1 : 0,
                        transition: "opacity 0.8s ease 0.3s",
                    }}
                >
                    <CinematicOverlays />
                </div>
            </div>

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
