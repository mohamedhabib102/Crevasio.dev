"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Container, Engine, ISourceOptions } from "@tsparticles/engine";

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });

        // Theme Checker
        const checkTheme = () => {
            const isDark = document.documentElement.classList.contains("dark");
            setIsDarkMode(isDark);
        };

        checkTheme();

        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        return () => observer.disconnect();
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        // console.log(container);
    };

    const options: ISourceOptions = {
        fullScreen: { enable: false },
        background: {
            color: {
                value: "transparent",
            },
        },
        particles: {
            color: {
                value: isDarkMode ? "#ffffff" : "#2563eb",
            },
            links: {
                color: isDarkMode ? "#ffffff" : "#2563eb",
                distance: 200, // أقصى مسافة للربط بين نقطتين بخط
                enable: true,
                opacity: 0.3,
                width: 2, // 1. سُمك الخطوط (Lines Width)
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                outModes: {
                    default: "bounce",
                },
            },
            number: {
                density: {
                    enable: true,
                },
                value: 120, // 2. عدد الجسيمات (Number of Particles)
            },
            opacity: {
                value: 0.3,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab",
                },
                resize: { enable: true },
            },
            modes: {
                grab: {
                    distance: 140,
                    links: {
                        opacity: 0.5
                    }
                },
            },
        },
        detectRetina: true,
    };

    if (init) {
        return (
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={options}
                    className="w-full h-full"
                />
            </div>
        );
    }

    return <></>;
};

export default ParticlesBackground;