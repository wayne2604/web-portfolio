import { useEffect, useState, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import "./styles/Loading.css";
import { useLoading } from "@/context/LoadingProvider";

const WORDS = ["fast", "reliable", "beautiful", "secure"];
const TYPE_SPEED = 100;
const DELETE_SPEED = 50;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 300;

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [exiting, setExiting] = useState(false);
  const screenRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const magnifierFrameRef = useRef<number>(0);
  const [typedText, setTypedText] = useState("");
  const hasTriggeredLoad = useRef(false);
  const hasTriggeredExit = useRef(false);
  const typewriterRef = useRef<{
    wordIndex: number;
    charIndex: number;
    isDeleting: boolean;
    timeout: ReturnType<typeof setTimeout> | null;
  }>({ wordIndex: 0, charIndex: 0, isDeleting: false, timeout: null });

  // ── Typewriter effect ──
  useEffect(() => {
    const tw = typewriterRef.current;

    function typeLoop() {
      const currentWord = WORDS[tw.wordIndex];
      let speed: number;

      if (tw.isDeleting) {
        tw.charIndex--;
        setTypedText(currentWord.substring(0, tw.charIndex));
        speed = DELETE_SPEED;
      } else {
        tw.charIndex++;
        setTypedText(currentWord.substring(0, tw.charIndex));
        speed = TYPE_SPEED;
      }

      if (!tw.isDeleting && tw.charIndex === currentWord.length) {
        tw.isDeleting = true;
        speed = PAUSE_AFTER_TYPE;
      } else if (tw.isDeleting && tw.charIndex === 0) {
        tw.isDeleting = false;
        tw.wordIndex = (tw.wordIndex + 1) % WORDS.length;
        speed = PAUSE_AFTER_DELETE;
      }

      tw.timeout = setTimeout(typeLoop, speed);
    }

    typeLoop();

    return () => {
      if (tw.timeout) clearTimeout(tw.timeout);
    };
  }, []);

  // ── Liquid canvas background ──
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;
    const speed = 5 * 0.002;
    const blendMode = "screen";

    const blobs = [
      { color: "#000000", x: 0, y: 0, vx: 1, vy: 1, s: 1, t: 0 },
      { color: "#A7D129", x: 0, y: 0, vx: -1, vy: 1, s: 1, t: 2 },
      { color: "#000000", x: 0, y: 0, vx: -1, vy: -1, s: 1, t: 4 },
      { color: "#000000", x: 0, y: 0, vx: 1, vy: -1, s: 1, t: 6 },
    ];

    const mouse = { x: 0, y: 0 };
    const targetMouse = { x: 0, y: 0 };
    let hasMouse = false;

    function resize() {
      if (!canvas) return;
      canvas.width = 128;
      canvas.height = 128;
    }

    const handleResize = () => resize();
    window.addEventListener("resize", handleResize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      hasMouse = true;
      const rect = canvas.getBoundingClientRect();
      targetMouse.x = ((e.clientX - rect.left) / rect.width) * canvas.width;
      targetMouse.y = ((e.clientY - rect.top) / rect.height) * canvas.height;
    };

    const handleMouseLeave = () => {
      hasMouse = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    function animate() {
      if (!ctx || !canvas) return;
      time += speed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = blendMode;

      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      blobs.forEach((b) => {
        const movementX =
          Math.sin(time + b.t) * 0.5 +
          Math.sin(time * 0.5 + b.t * 2) * 0.5;
        const movementY =
          Math.cos(time + b.t) * 0.5 +
          Math.cos(time * 0.6 + b.t * 2) * 0.5;

        let x = canvas.width / 2 + movementX * (canvas.width * 0.3);
        let y = canvas.height / 2 + movementY * (canvas.height * 0.3);

        if (hasMouse) {
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = canvas.width * 0.6;

          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist;
            x += dx * force * 0.2;
            y += dy * force * 0.2;
          }
        }

        const radius = canvas.width * 0.5;
        const g = ctx.createRadialGradient(x, y, 0, x, y, radius);
        g.addColorStop(0, b.color);
        g.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animFrameRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  useEffect(() => {
    const cleanup = initCanvas();
    return cleanup;
  }, [initCanvas]);

  // ── Magnifier mask animation (JS-driven for smooth soft edge) ──
  useEffect(() => {
    if (!exiting) return;
    const screen = screenRef.current;
    if (!screen) return;

    let startTime: number | null = null;
    const duration = 1400;

    // Compute half-diagonal of screen (distance to corner) in pixels
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const cornerDist = Math.sqrt((vw / 2) ** 2 + (vh / 2) ** 2);
    
    // Target radius in pixels is slightly larger than the corner distance
    // to guarantee the soft outer edge of the mask fully clears the screen
    const targetRadius = cornerDist * 1.1;

    function easeOutExpo(t: number): number {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function animateMask(time: number) {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const radius = easeOutExpo(progress) * targetRadius;

      // Build a wide soft-edge mask gradient in pixels (the "frosted glass lens edge")
      const inner = Math.max(0, radius - 4);
      const softA = radius + 8;
      const softB = radius + 24;
      const softC = radius + 48;
      const outer = radius + 80;

      const maskVal =
        `radial-gradient(circle at 50% 50%, ` +
        `transparent ${inner}px, ` +
        `rgba(0,0,0,0.06) ${softA}px, ` +
        `rgba(0,0,0,0.25) ${softB}px, ` +
        `rgba(0,0,0,0.6) ${softC}px, ` +
        `black ${outer}px)`;

      screen.style.setProperty("-webkit-mask-image", maskVal);
      screen.style.setProperty("mask-image", maskVal);

      // Update portal ring size (in actual pixels)
      const ringDiameter = radius * 2;
      if (portalRef.current) {
        portalRef.current.style.setProperty(
          "--ring-size",
          `${ringDiameter}px`
        );
      }

      if (progress < 1) {
        magnifierFrameRef.current = requestAnimationFrame(animateMask);
      }
    }

    magnifierFrameRef.current = requestAnimationFrame(animateMask);

    return () => {
      cancelAnimationFrame(magnifierFrameRef.current);
    };
  }, [exiting]);

  // ── Loading complete trigger ──
  useEffect(() => {
    if (percent >= 100 && !hasTriggeredLoad.current) {
      hasTriggeredLoad.current = true;
      setTimeout(() => {
        setLoaded(true);
        setTimeout(() => {
          setIsLoaded(true);
        }, 400);
      }, 300);
    }
  }, [percent]);

  // ── Exit sequence ──
  useEffect(() => {
    if (!isLoaded || hasTriggeredExit.current) return;
    hasTriggeredExit.current = true;

    // 1) Start magnifier mask animation
    setExiting(true);

    // 2) Pre-import initialFX
    import("./utils/initialFX").then((module) => {
      // 3) Fire initialFX partway through the magnifier reveal so the
      //    portfolio starts fading in while the lens is still opening.
      //    This prevents the flash that would happen if we called initialFX
      //    at the same moment we unmount (main-active sets opacity:0 first).
      setTimeout(() => {
        if (module.initialFX) {
          module.initialFX();
        }
      }, 500);

      // 4) Remove loading screen after magnifier fully opens + portfolio
      //    has started its fade-in (500ms head start → portfolio ~50% visible)
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    });
  }, [isLoaded, setIsLoading]);

  return (
    <>
      {/* ── Loading Screen (masked during exit) ── */}
      <div
        ref={screenRef}
        className={`loading-screen ${exiting ? "loading-magnifier-exit" : ""}`}
      >
        {/* Liquid Animated Background */}
        <div className="loading-liquid-bg">
          <canvas ref={canvasRef} className="loading-liquid-canvas" />
        </div>

        {/* Centered Content */}
        <div
          className={`loading-center-content ${loaded ? "loading-content-ready" : ""} ${exiting ? "loading-content-exit" : ""}`}
        >
          {/* Logo */}
          <div className="loading-logo-wrap">
            <img src="/logo-rwm.svg" alt="RWM" className="loading-logo" />
          </div>

          {/* Typewriter Text */}
          <div className="loading-typewriter">
            <span className="loading-typewriter-static">We build</span>
            <span className="loading-typewriter-viewport">
              <span className="loading-typewriter-word">{typedText}</span>
              <span className="loading-typewriter-cursor" />
            </span>
            <span className="loading-typewriter-static">websites.</span>
          </div>

          {/* Loading Progress */}
          <div
            className={`loading-progress-section ${loaded ? "progress-complete" : ""}`}
          >
            <div className="loading-progress-bar">
              <div
                className="loading-progress-fill"
                style={{ width: `${Math.min(percent, 100)}%` }}
              />
            </div>
            <span className="loading-progress-text">
              {Math.min(percent, 100)}%
            </span>
          </div>
        </div>
      </div>

      {/* ── Magnifier Lens Effects (portal — rendered outside loading screen
           so it's NOT affected by the mask). Sits just below the loading
           screen z-index, visible through the mask's transparent center. ── */}
      {exiting &&
        createPortal(
          <div ref={portalRef} className="magnifier-portal" aria-hidden="true">
            {/* Primary glowing lens ring */}
            <div className="magnifier-lens-ring" />
            {/* Chromatic aberration — green offset */}
            <div className="magnifier-lens-ring magnifier-ring-green" />
            {/* Chromatic aberration — warm offset */}
            <div className="magnifier-lens-ring magnifier-ring-warm" />
            {/* Diffused bokeh glow at the lens edge */}
            <div className="magnifier-bokeh-glow" />
          </div>,
          document.body
        )}
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      let rand = Math.round(Math.random() * 5);
      percent = percent + rand;
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        percent = percent + Math.round(Math.random());
        setLoading(percent);
        if (percent > 91) {
          clearInterval(interval);
        }
      }, 2000);
    }
  }, 100);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 2);
    });
  }
  return { loaded, percent, clear };
};
