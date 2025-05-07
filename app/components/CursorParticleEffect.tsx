"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CursorParticleEffect() {
  const rafRef = useRef<number | null>(null);
  const mouseTrailRef = useRef<HTMLDivElement>(null);
  const lastMousePos = useRef({ x: 0, y: 0 });

  // Handle mouse movement with direct DOM manipulation instead of React state
  useEffect(() => {
    const updateMouseTrail = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      lastMousePos.current = { x: clientX, y: clientY };

      if (rafRef.current !== null) return;

      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;

        if (!mouseTrailRef.current) return;

        // Create a trail element for the current mouse position
        const trailElement = document.createElement("div");
        trailElement.className =
          "absolute rounded-full pointer-events-none z-50 opacity-30";
        trailElement.style.left = `${lastMousePos.current.x}px`;
        trailElement.style.top = `${lastMousePos.current.y}px`;
        trailElement.style.width = "12px";
        trailElement.style.height = "12px";
        trailElement.style.background =
          "radial-gradient(circle, rgba(34, 197, 94, 0.6), transparent 70%)";
        trailElement.style.transition =
          "transform 0.5s ease-out, opacity 0.5s ease-out";

        mouseTrailRef.current.appendChild(trailElement);

        // Animate and remove the trail elements
        gsap.to(trailElement, {
          width: "3px",
          height: "3px",
          opacity: 0,
          duration: 1,
          onComplete: () => {
            if (
              mouseTrailRef.current &&
              mouseTrailRef.current.contains(trailElement)
            ) {
              mouseTrailRef.current.removeChild(trailElement);
            }
          },
        });

        // Limit the number of trail elements
        if (mouseTrailRef.current.children.length > 10) {
          if (mouseTrailRef.current.firstChild) {
            mouseTrailRef.current.removeChild(mouseTrailRef.current.firstChild);
          }
        }
      });
    };

    window.addEventListener("mousemove", updateMouseTrail);

    return () => {
      window.removeEventListener("mousemove", updateMouseTrail);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mouseTrailRef}
      className="fixed inset-0 pointer-events-none z-[1000] overflow-hidden"
    ></div>
  );
}
