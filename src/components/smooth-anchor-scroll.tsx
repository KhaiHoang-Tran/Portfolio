"use client";

import { useEffect } from "react";

const easeOut = (progress: number) => 1 - Math.pow(1 - progress, 3);

export function SmoothAnchorScroll() {
  useEffect(() => {
    let frame = 0;

    const stop = () => cancelAnimationFrame(frame);
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      const hash = link?.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!target) return;

      event.preventDefault();
      stop();
      history.pushState(null, "", hash);

      const start = window.scrollY;
      const offset = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
      const end = Math.max(0, target.getBoundingClientRect().top + start - offset);
      const distance = end - start;

      const finish = () => {
        if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      };

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || Math.abs(distance) < 4) {
        window.scrollTo(0, end);
        finish();
        return;
      }

      const duration = Math.min(1100, Math.max(650, Math.abs(distance) * 0.5));
      const started = performance.now();
      const step = (now: number) => {
        const progress = Math.min(1, (now - started) / duration);
        window.scrollTo(0, start + distance * easeOut(progress));
        if (progress < 1) frame = requestAnimationFrame(step);
        else finish();
      };
      frame = requestAnimationFrame(step);
    };

    document.addEventListener("click", onClick);
    window.addEventListener("wheel", stop, { passive: true });
    window.addEventListener("touchstart", stop, { passive: true });
    window.addEventListener("keydown", stop);

    return () => {
      stop();
      document.removeEventListener("click", onClick);
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchstart", stop);
      window.removeEventListener("keydown", stop);
    };
  }, []);

  return null;
}
