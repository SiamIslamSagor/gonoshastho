"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LayoutEffects() {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Global GSAP configuration
    gsap.config({
      nullTargetWarn: false,
    });

    // Clean up ScrollTrigger on unmount
    return () => {
      // Force cleanup all ScrollTriggers to prevent memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // This component doesn't render anything
  return null;
}
