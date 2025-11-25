import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["4vxyt08lie.ufs.sh"],
    remotePatterns: [
      { protocol: "https", hostname: "4vxyt08lie.ufs.sh", port: "" },
    ],
  },
};


export default nextConfig;
