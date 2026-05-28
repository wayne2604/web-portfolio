"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  alpha: number;
  twinkleSpeed: number;
  color: string;
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  delay: number;
  active: boolean;
}

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    let meteors: Meteor[] = [];
    const numStars = 120;
    const numMeteors = 8;

    // Set dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
      initMeteors();
    };

    const initStars = () => {
      stars = [];
      const colors = ["#ffffff", "#F8EEB4", "#a1c4fd"];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          alpha: Math.random(),
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const initMeteors = () => {
      meteors = [];
      for (let i = 0; i < numMeteors; i++) {
        meteors.push(resetMeteor(true));
      }
    };

    const resetMeteor = (initial = false): Meteor => {
      return {
        x: Math.random() * canvas.width * 0.8,
        y: initial ? Math.random() * -canvas.height : -100,
        length: Math.random() * 80 + 50,
        speed: Math.random() * 6 + 4,
        angle: Math.PI / 4, // 45 degrees
        opacity: Math.random() * 0.5 + 0.5,
        delay: initial ? 0 : Math.random() * 8000,
        active: initial,
      };
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0c0c0c";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach((star) => {
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 1 || star.alpha < 0) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }
        ctx.save();
        ctx.globalAlpha = Math.max(0.1, Math.min(1, star.alpha));
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw meteors
      meteors.forEach((meteor) => {
        if (!meteor.active) {
          if (meteor.delay > 0) {
            meteor.delay -= 16.67; // approx 1 frame in ms
          } else {
            meteor.active = true;
          }
          return;
        }

        meteor.x += meteor.speed;
        meteor.y += meteor.speed;

        // Draw trail
        const endX = meteor.x - meteor.length * Math.cos(meteor.angle);
        const endY = meteor.y - meteor.length * Math.sin(meteor.angle);

        ctx.save();
        const gradient = ctx.createLinearGradient(meteor.x, meteor.y, endX, endY);
        gradient.addColorStop(0, `rgba(167, 209, 41, ${meteor.opacity})`);
        gradient.addColorStop(0.3, `rgba(167, 209, 41, ${meteor.opacity * 0.4})`);
        gradient.addColorStop(1, "rgba(167, 209, 41, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        ctx.restore();

        // Reset if offscreen
        if (meteor.x > canvas.width + 100 || meteor.y > canvas.height + 100) {
          Object.assign(meteor, resetMeteor(false));
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "#0c0c0c" }}
    />
  );
}
