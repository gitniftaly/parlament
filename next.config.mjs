/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    // Disable server source maps (prevents stack frame requests)
    serverSourceMaps: false,
    // Disable RSC debug overlay (this is what triggers the 404 spam)
    reactCompiler: false,
  },

  // Disable "building..." indicators
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: "bottom-right",
  },

  // Disable browser source maps in production
  productionBrowserSourceMaps: false,
};

export default nextConfig;
