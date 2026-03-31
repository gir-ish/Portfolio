import { useRef, useEffect } from "react";

export default function MagneticWrap({ children, strength = 0.3, radius = 90 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < radius) {
        el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
        el.style.transition = "transform 0.15s ease";
      } else {
        el.style.transform = "";
        el.style.transition = "transform 0.45s cubic-bezier(0.34,1.56,0.64,1)";
      }
    };

    const onLeave = () => {
      el.style.transform = "";
      el.style.transition = "transform 0.45s cubic-bezier(0.34,1.56,0.64,1)";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    el.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength, radius]);

  return <span ref={ref} style={{ display: "inline-block" }}>{children}</span>;
}
