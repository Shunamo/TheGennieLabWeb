"use client";

import { useEffect, useRef } from "react";

export default function DNABackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // DNA Helix - two strands
    const helix1: Array<{
      x: number;
      y: number;
      angle: number;
      opacity: number;
    }> = [];
    const helix2: Array<{
      x: number;
      y: number;
      angle: number;
      opacity: number;
    }> = [];

    const helixLength = 80;
    const centerX = canvas.width / 2;
    const radius = 250;
    const verticalSpacing = canvas.height / helixLength;

    // Initialize helix particles
    for (let i = 0; i < helixLength; i++) {
      const baseAngle = (i / helixLength) * Math.PI * 6;
      helix1.push({
        x: centerX,
        y: i * verticalSpacing,
        angle: baseAngle,
        opacity: 0.6 + Math.random() * 0.3,
      });
      helix2.push({
        x: centerX,
        y: i * verticalSpacing,
        angle: baseAngle + Math.PI, // Opposite side
        opacity: 0.6 + Math.random() * 0.3,
      });
    }

    // Background network particles
    const networkParticles: Array<{
      x: number;
      y: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 200; i++) {
      networkParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        opacity: 0.1 + Math.random() * 0.2,
      });
    }

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Draw background network connections
      ctx.strokeStyle = "rgba(0, 242, 255, 0.08)"; // bio-cyan
      ctx.lineWidth = 0.5;
      for (let i = 0; i < networkParticles.length; i++) {
        for (let j = i + 1; j < networkParticles.length; j++) {
          const dx = networkParticles[i].x - networkParticles[j].x;
          const dy = networkParticles[i].y - networkParticles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            ctx.globalAlpha =
              (1 - distance / 120) * networkParticles[i].opacity * 0.5;
            ctx.beginPath();
            ctx.moveTo(networkParticles[i].x, networkParticles[i].y);
            ctx.lineTo(networkParticles[j].x, networkParticles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw background network dots
      ctx.fillStyle = "rgba(0, 242, 255, 0.15)"; // bio-cyan
      networkParticles.forEach((particle) => {
        ctx.globalAlpha = particle.opacity * 0.6;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 0.8, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw DNA helix strands
      helix1.forEach((particle, index) => {
        // Update position along helix - slower rotation
        particle.angle += 0.005;
        const helixX = Math.sin(particle.angle) * radius;
        const helixY =
          (index / helixLength) * canvas.height + Math.cos(particle.angle) * 30;

        particle.x = centerX + helixX;
        particle.y = (helixY + canvas.height) % canvas.height;

        // Draw connection to opposite strand
        const opposite = helix2[index];
        opposite.angle += 0.005;
        const oppositeX = Math.sin(opposite.angle) * radius;
        const oppositeY =
          (index / helixLength) * canvas.height + Math.cos(opposite.angle) * 30;
        opposite.x = centerX + oppositeX;
        opposite.y = (oppositeY + canvas.height) % canvas.height;

        // Draw connecting line between strands
        ctx.strokeStyle = "rgba(0, 242, 255, 0.4)"; // bio-cyan
        ctx.lineWidth = 0.8;
        ctx.globalAlpha = 0.3;
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(opposite.x, opposite.y);
        ctx.stroke();

        // Draw helix particles with glow
        [particle, opposite].forEach((p) => {
          // Glow effect - bio-cyan glow
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 12);
          gradient.addColorStop(0, "rgba(255, 255, 255, 0.9)");
          gradient.addColorStop(0.4, "rgba(0, 242, 255, 0.6)"); // bio-cyan
          gradient.addColorStop(0.7, "rgba(0, 242, 255, 0.2)");
          gradient.addColorStop(1, "rgba(0, 242, 255, 0)");

          ctx.globalAlpha = p.opacity * 0.8;
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 12, 0, Math.PI * 2);
          ctx.fill();

          // Core dot - bright white
          ctx.globalAlpha = 0.95;
          ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
          ctx.fill();
        });

        // Draw helix line - bio-cyan
        if (index > 0) {
          const prev1 = helix1[index - 1];
          const prev2 = helix2[index - 1];

          ctx.strokeStyle = "rgba(0, 242, 255, 0.5)"; // bio-cyan
          ctx.lineWidth = 1;
          ctx.globalAlpha = 0.3;
          ctx.beginPath();
          ctx.moveTo(prev1.x, prev1.y);
          ctx.lineTo(particle.x, particle.y);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(prev2.x, prev2.y);
          ctx.lineTo(opposite.x, opposite.y);
          ctx.stroke();
        }
      });

      ctx.globalAlpha = 1;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}
