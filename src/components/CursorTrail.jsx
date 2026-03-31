import { useEffect, useRef } from "react";
import "./CursorTrail.css";

export default function CursorTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W = window.innerWidth, H = window.innerHeight;
    canvas.width = W; canvas.height = H;

    const particles = [];
    let mouse = { x: -200, y: -200 };
    let frame = 0, raf;

    window.addEventListener("mousemove", (e) => { mouse = { x: e.clientX, y: e.clientY }; });

    function draw() {
      ctx.clearRect(0, 0, W, H);
      frame++;
      if (frame % 2 === 0) {
        particles.push({
          x: mouse.x, y: mouse.y,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2 - 0.3,
          life: 1,
          size: Math.random() * 5 + 2,
          hue: Math.random() > 0.5 ? 220 : 270,
        });
      }
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        p.life -= 0.04; p.size *= 0.95;
        if (p.life <= 0) { particles.splice(i, 1); continue; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 65%, ${p.life * 0.6})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }
    draw();

    const onResize = () => {
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W; canvas.height = H;
    };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  return <canvas ref={canvasRef} className="cursor-trail" aria-hidden="true" />;
}
