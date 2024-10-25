/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "index.html"],
  theme: {
    extend: {
      colors: {
        darkbg: "#12072Cff",
        lightbg: "#D5D2EA",
        darknav: "#1b1232ac",
        lightnav: "#d5d2eac0",
        lighttext: "#DED3F8ff",
        darktext: "#312D4B",
        border: "#474361",
        bold1: "#6C3FA1",
        bold2: "#CA38A2",
        darkbox: "#29263d",
        lightbox: "#CA38A2",
        darkbox2: "#211e31",
        lightbox2: "#CA38A2",
        // glass: "#56565680",
        darkglass: "#13081e80",
        cyan: "#00D094",

        c1: "#DED3F8ff",
        c2: "#BDA6F2ff",
        c3: "#9C7AEBff",
        c4: "#7B4DE5ff",
        c5: "#5A21DEff",
        c6: "#481AB2ff",
        c7: "#361485ff",
        c8: "#240D59ff",
        c9: "#12072Cff",
      },
    },
  },
  plugins: [],
};
