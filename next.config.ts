import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    qualities: [70, 75, 80, 85, 90, 100], // ← add 80 (and others you might use)
    // Optional: if you have remote patterns or other image settings
    remotePatterns: [
      // example if you ever use external URLs
      // { protocol: 'https', hostname: '**' },
    ],
  },
};

export default nextConfig;
