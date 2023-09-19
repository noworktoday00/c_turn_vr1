import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'/twccs_vr3/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "/images": "src/assets/images",
    },
  },
  build:{
    target: 'esnext',
  },
});
