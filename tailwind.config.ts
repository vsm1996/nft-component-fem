import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        0: "var(--space-0)",
        100: "var(--space-100)",
        200: "var(--space-200)",
        300: "var(--space-300)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "var(--black)",
        white: "var(--white)",
        "blue-950": "var(--blue-950)",
        "blue-900": "var(--blue-900)",
        "blue-800": "var(--blue-800)",
        "blue-500" : "var(--blue-500)",
        "cyan": "var(--cyan)",
      },
      fontSize: {
        lg: "var(--font-lg)",
        md: "var(--font-md)",
        base: "var(--font-base)",
      },
    },
  },
  plugins: [],
} satisfies Config;
