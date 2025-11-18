import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate", // Automatically update service worker in the background
      includeAssets: ["favicon/favicon.ico", "favicon/apple-touch-icon.png"], // Static files to include
      manifest: {
        name: "2048 Puzzle Game",
        short_name: "2048",
        description: "A native-like 2048 game built with React and Vite",
        theme_color: "#fb923c", // bg-orange-400
        background_color: "#fb923c", // bg-orange-400
        display: "standalone",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "favicon/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "favicon/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "favicon/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "apple touch icon",
          },
        ],
      },
      workbox: {
        cleanupOutdatedCaches: true,
        sourcemap: true,
      },
    }),
  ],
});
