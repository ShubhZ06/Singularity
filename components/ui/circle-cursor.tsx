'use client';

import { useEffect, useRef } from 'react';

export default function CircleCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let isClicking = false;
    let isVisible = false;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        ringX = mouseX;
        ringY = mouseY;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }
      // Instant 1:1 update for center dot (0ms latency, zero lag!)
      dot.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;

      // Check if hovering over clickable element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer')
        );
        isHovering = isClickable;
      }
    };

    const onMouseDown = () => {
      isClicking = true;
    };

    const onMouseUp = () => {
      isClicking = false;
    };

    const onMouseLeave = () => {
      isVisible = false;
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const onMouseEnter = () => {
      isVisible = true;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    };

    // Smooth trailing animation loop for the outer glow ring
    const render = () => {
      if (isVisible) {
        // Smooth lerp (0.22 gives a silky, responsive trail)
        ringX += (mouseX - ringX) * 0.22;
        ringY += (mouseY - ringY) * 0.22;

        const scale = isHovering ? 1.5 : isClicking ? 0.8 : 1;
        ring.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0) scale(${scale})`;

        if (isHovering) {
          ring.style.borderColor = 'rgba(251, 191, 36, 0.9)';
          ring.style.backgroundColor = 'rgba(251, 191, 36, 0.15)';
          ring.style.boxShadow = '0 0 20px rgba(251, 191, 36, 0.6)';
        } else {
          ring.style.borderColor = 'rgba(255, 255, 255, 0.6)';
          ring.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
          ring.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.3)';
        }
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Instant 1:1 Center Pointer Dot (0ms latency) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-gold-400 rounded-full pointer-events-none z-[99999] opacity-0 transition-opacity duration-200 hidden md:block shadow-[0_0_6px_rgba(251,191,36,0.9)]"
        style={{ willChange: 'transform' }}
      />
      {/* Smooth Trailing Glow Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-[99998] opacity-0 transition-all duration-150 ease-out hidden md:block"
        style={{ willChange: 'transform' }}
      />
    </>
  );
}

