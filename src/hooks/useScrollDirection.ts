"use client";

import { useEffect, useState, useRef } from "react";

interface ScrollState {
  scrollY: number;
  scrollDirection: "up" | "down";
  isScrolled: boolean;
}

export default function useScrollDirection(): ScrollState {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;

      setScrollDirection(currentY > lastScrollY.current ? "down" : "up");
      setScrollY(currentY);
      setIsScrolled(currentY > 50);

      lastScrollY.current = currentY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollY, scrollDirection, isScrolled };
}
