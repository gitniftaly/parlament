/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const nextConfig = {
  // ✅ moved out of experimental
  reactCompiler: false,

  experimental: {
    // Disable server source maps (prevents stack frame requests)
    serverSourceMaps: false,
  },

  // Disable "building..." indicators (Next.js 15+)
  devIndicators: {
    position: "bottom-right",
  },

  // Disable browser source maps in production
  productionBrowserSourceMaps: false,

  outputFileTracingRoot: path.join(__dirname, ".."),
};

export default nextConfig;
