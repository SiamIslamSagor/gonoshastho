import { useState, useEffect, useRef } from "react";

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState<{
    x: number | null;
    y: number | null;
  }>({
    x: null,
    y: null,
  });

  // Better throttling using RAF
  const rafId = useRef<number | null>(null);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      // Store the current position
      lastPos.current = { x: e.clientX, y: e.clientY };

      // If we already have a RAF queued, don't queue another
      if (rafId.current !== null) return;

      // Use requestAnimationFrame for better performance
      rafId.current = requestAnimationFrame(() => {
        setMousePosition({ x: lastPos.current.x, y: lastPos.current.y });
        rafId.current = null;
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      // Cancel any pending animation frame
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return mousePosition;
}
