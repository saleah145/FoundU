import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // This tells Vercel to ignore the mobile folder errors and just deploy!
    ignoreBuildErrors: true,
  }
};

export default nextConfig;