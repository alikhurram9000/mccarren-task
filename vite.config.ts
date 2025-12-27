import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";

const certDir = path.join(process.env.HOME || process.env.USERPROFILE || ".", ".office-addin-dev-certs");
const keyPath = path.join(certDir, "localhost.key");
const crtPath = path.join(certDir, "localhost.crt");

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    https: fs.existsSync(keyPath) && fs.existsSync(crtPath)
      ? { key: fs.readFileSync(keyPath), cert: fs.readFileSync(crtPath) }
      : true
  }
});
