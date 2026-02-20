import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                accent: {
                    blue: "#0070f3",
                    purple: "#7928ca",
                    teal: "#00dfd8",
                    pink: "#ff0080",
                    gold: "#f5a623",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                heading: ["var(--font-space-grotesk)"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "mesh-gradient": "radial-gradient(at 0% 0%, rgba(0, 112, 243, 0.15) 0, transparent 50%), radial-gradient(at 50% 0%, rgba(121, 40, 202, 0.15) 0, transparent 50%), radial-gradient(at 100% 0%, rgba(0, 223, 216, 0.15) 0, transparent 50%)",
            },
            animation: {
                "slow-pulse": "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "float": "float 6s ease-in-out infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
