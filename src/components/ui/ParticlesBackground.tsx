"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

export function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const { resolvedTheme } = useTheme();

  // Initialize the engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // Optional: Log when particles are loaded
  };

  // Memoize options so it updates dynamically with theme but doesn't flicker unnecessarily
  const options: ISourceOptions = useMemo(() => {
    const isDark = resolvedTheme === "dark";
    
    return {
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: isDark ? 0.35 : 0.25,
            },
          },
          push: {
            quantity: 4,
          },
        },
      },
      particles: {
        color: {
          value: isDark ? "#a78bfa" : "#7c3aed", // Lighter violet for dark mode
        },
        links: {
          color: isDark ? "#a78bfa" : "#7c3aed",
          distance: 140,
          enable: true,
          opacity: isDark ? 0.3 : 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 0.4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            // area: 1200,
          },
          value: 120, // Increased density
        },
        opacity: {
          value: { min: 0.1, max: isDark ? 0.45 : 0.35 },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2.5 }, // Slightly larger
        },
      },
      detectRetina: true,
    };
  }, [resolvedTheme]);

  if (!init) return null;

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
      <Particles
        id="tsparticles"
        className="h-full w-full"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    </div>
  );
}
