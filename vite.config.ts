// Vite & TanStack Start Portfolio Configuration
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts
    server: { entry: "server" },
    nitro: {
      preset: "static",
      prerender: {
        routes: ["/", "/contact"],
      },
    },
  },
});
