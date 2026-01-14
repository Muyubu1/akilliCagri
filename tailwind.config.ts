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
                primary: {
                    DEFAULT: "#0EA5E9", // Sky Blue - Kurumsal, güvenilir
                    foreground: "#ffffff",
                },
                secondary: {
                    DEFAULT: "#1E40AF", // Deep Blue - Profesyonel, kurumsal
                    foreground: "#ffffff",
                },
                accent: {
                    DEFAULT: "#14B8A6", // Teal - Güven, yenilik
                    foreground: "#ffffff",
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "hero-glow": "conic-gradient(from 90deg at 50% 50%, #00000000 50%, #0EA5E9 100%)",
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                display: ["var(--font-orbitron)"],
            }
        },
    },
    plugins: [],
};
export default config;
