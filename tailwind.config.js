/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["ui-sans-serif", "system-ui", "Inter", "SF Pro Display"],
        body: ["ui-sans-serif", "system-ui", "Inter", "SF Pro Text"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 20px 50px rgba(0,0,0,0.55)"
      }
    }
  },
  plugins: []
};
