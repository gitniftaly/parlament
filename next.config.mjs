/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const nextConfig = {
  experimental: {
    // Disable server source maps (prevents stack frame requests)
    serverSourceMaps: false,
    // Disable RSC debug overlay (this is what triggers the 404 spam)
    reactCompiler: false,
  },

  // Disable "building..." indicators (updated for Next.js 15+)
  devIndicators: {
    position: "bottom-right", // replaces buildActivityPosition
  },

  // Disable browser source maps in production
  productionBrowserSourceMaps: false,
  outputFileTracingRoot: path.join(__dirname, ".."),
};

export default nextConfig;
