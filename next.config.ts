import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "20mb",
    },
  },
  cacheMaxMemorySize: 0,
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "cache",
            value: "no-store",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
