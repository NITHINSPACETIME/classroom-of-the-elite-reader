"use client"
/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const defaultColors: Record<string, string> = {
    cote: "#ef4444",
    lotm: "#f59e0b",
    rezero: "#8b5cf6",
    "bunny-girl": "#d946ef",
    "mushoku-tensei": "#10b981",
    orv: "#06b6d4",
    "reverend-insanity": "#ef4444",
}

function parseHex(hex: string) {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) {
        hex = hex.split('').map(c => c + c).join('');
    }
    const r = parseInt(hex.substring(0, 2), 16) || 0;
    const g = parseInt(hex.substring(2, 4), 16) || 0;
    const b = parseInt(hex.substring(4, 6), 16) || 0;
    return { r, g, b };
}

function hexToHslString(hex: string): string {
    const { r: rByte, g: gByte, b: bByte } = parseHex(hex);
    const r = rByte / 255;
    const g = gByte / 255;
    const b = bByte / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    const hDeg = Math.round(h * 360);
    const sPct = Math.round(s * 100);
    const lPct = Math.round(l * 100);

    return `${hDeg} ${sPct}% ${lPct}%`;
}

export function DynamicAccentProvider() {
    const pathname = usePathname();
    const [styleRules, setStyleRules] = useState<string>("");

    useEffect(() => {
        if (!pathname) return;
        const parts = pathname.split("/");
        const novelSlug = parts[1];

        if (!novelSlug || !(novelSlug in defaultColors)) {
            setStyleRules("");
            return;
        }

        const handleColorChange = () => {
            const savedColor = localStorage.getItem(`${novelSlug}-custom-color`);
            const baseColor = savedColor || defaultColors[novelSlug];
            const { r, g, b } = parseHex(baseColor);
            const hslVal = hexToHslString(baseColor);

            const css = `
                :root, .theme-${novelSlug} {
                    --primary: ${hslVal} !important;
                    --primary-color: ${baseColor} !important;
                    --primary-color-hover: rgba(${r}, ${g}, ${b}, 0.9) !important;
                    --primary-bg-alpha: rgba(${r}, ${g}, ${b}, 0.1) !important;
                    --primary-border-alpha: rgba(${r}, ${g}, ${b}, 0.25) !important;
                    --primary-border-alpha-hover: rgba(${r}, ${g}, ${b}, 0.45) !important;
                    --primary-glow: rgba(${r}, ${g}, ${b}, 0.35) !important;
                    --primary-glow-alpha: rgba(${r}, ${g}, ${b}, 0.15) !important;
                }

                /* Class Override Layer */
                .text-red-500, .text-red-400, .text-amber-500, .text-violet-500, .text-purple-400, .text-emerald-500, .text-cyan-500, .text-cyan-400, .text-indigo-500, .text-indigo-400, .text-purple-300, .text-violet-400, .text-emerald-400, .text-red-600 {
                    color: var(--primary-color) !important;
                }
                .hover\\:text-red-400:hover, .hover\\:text-red-300:hover, .hover\\:text-cyan-300:hover, .hover\\:text-purple-300:hover, .hover\\:text-violet-300:hover, .hover\\:text-emerald-300:hover, .hover\\:text-indigo-300:hover, .hover\\:text-red-500:hover, .group-hover\\:text-red-400, .group:hover .group-hover\\:text-red-400, .group-hover\\:text-red-300, .group:hover .group-hover\\:text-red-300 {
                    color: var(--primary-color-hover) !important;
                }
                .bg-red-500, .bg-amber-500, .bg-violet-500, .bg-purple-500, .bg-emerald-500, .bg-cyan-500, .bg-indigo-500, .bg-red-600 {
                    background-color: var(--primary-color) !important;
                }
                .bg-red-950\\/20, .bg-red-950\\/10, .bg-red-500\\/10, .bg-cyan-500\\/10, .bg-purple-500\\/10, .bg-violet-500\\/10, .bg-emerald-500\\/10, .bg-indigo-500\\/10, .bg-purple-950\\/20, .bg-amber-500\\/10 {
                    background-color: var(--primary-bg-alpha) !important;
                }
                .border-red-500, .border-red-500\\/50, .border-red-500\\/20, .border-red-500\\/25, .border-cyan-500, .border-purple-400, .border-violet-500, .border-emerald-500, .border-indigo-500, .border-cyan-500\\/30, .border-purple-500\\/30, .border-violet-500\\/30, .border-red-500\\/30 {
                    border-color: var(--primary-border-alpha) !important;
                }
                .group-hover\\:border-red-500\\/30:hover, .group:hover .group-hover\\:border-red-500\\/30, .hover\\:border-red-300:hover, .hover\\:border-cyan-300:hover, .hover\\:border-purple-300:hover, .hover\\:border-violet-300:hover, .hover\\:border-emerald-300:hover, .hover\\:border-indigo-300:hover {
                    border-color: var(--primary-border-alpha-hover) !important;
                }
                .shadow-\\[0_0_50px_rgba\\(220\\,38\\,38\\,0\\.3\\)\\] {
                    box-shadow: 0 0 50px var(--primary-glow) !important;
                }
                .shadow-\\[0_0_30px_rgba\\(220\\,38\\,38\\,0\\.15\\)\\] {
                    box-shadow: 0 0 30px var(--primary-glow-alpha) !important;
                }
                .shadow-\\[0_0_20px_rgba\\(220\\,38\\,38\\,0\\.3\\)\\] {
                    box-shadow: 0 0 20px var(--primary-glow) !important;
                }
                .accent-amber-500 {
                    accent-color: var(--primary-color) !important;
                }
                .focus\\:ring-cyan-500:focus, .focus\\:ring-purple-400:focus, .focus\\:ring-violet-500:focus, .focus\\:ring-emerald-500:focus, .focus\\:ring-indigo-500:focus, .focus\\:ring-red-500:focus {
                    --tw-ring-color: var(--primary-color) !important;
                }
            `;
            setStyleRules(css);
        };

        handleColorChange();

        window.addEventListener("accent-color-changed", handleColorChange);
        return () => window.removeEventListener("accent-color-changed", handleColorChange);
    }, [pathname]);

    if (!styleRules) return null;

    return <style dangerouslySetInnerHTML={{ __html: styleRules }} />;
}
