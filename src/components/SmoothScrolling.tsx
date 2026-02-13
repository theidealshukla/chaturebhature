"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * Keeps Lenis smooth-scroll and GSAP ScrollTrigger in perfect sync.
 * Must be rendered inside <ReactLenis>.
 */
function LenisScrollTriggerBridge() {
    const lenis = useLenis();

    useEffect(() => {
        if (!lenis) return;

        // Forward every Lenis scroll tick to ScrollTrigger
        lenis.on("scroll", ScrollTrigger.update);

        // Let GSAP's high-precision ticker drive Lenis RAF
        const tick = (time: number) => {
            lenis.raf(time * 1000);
        };
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.off("scroll", ScrollTrigger.update);
            gsap.ticker.remove(tick);
        };
    }, [lenis]);

    return null;
}

export default function SmoothScrolling({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.12,
                duration: 1.2,
                smoothWheel: true,
                wheelMultiplier: 1,
                touchMultiplier: 1.5,
                autoRaf: false, // GSAP ticker drives RAF instead
            }}
        >
            <LenisScrollTriggerBridge />
            {children}
        </ReactLenis>
    );
}
