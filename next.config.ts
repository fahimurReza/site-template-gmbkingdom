import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    qualities: [70, 75, 80, 85, 90, 100],
  },
};

export default nextConfig;
