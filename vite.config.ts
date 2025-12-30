import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
// GitHub Pages base path: 
// - 如果是用户主页 (username.github.io) 使用 '/'
// - 如果是项目仓库 (username.github.io/repo-name) 使用 '/repo-name/'
// 可以通过环境变量 GITHUB_PAGES_BASE 设置，默认是 '/'
const base = process.env.GITHUB_PAGES_BASE || '/';

export default defineConfig({
  base: base,
  plugins: [react(),
    tailwindcss()
  ],
});
