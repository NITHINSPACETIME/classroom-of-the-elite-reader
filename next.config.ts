import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    reactStrictMode: true,
    poweredByHeader: false,
    images: {
        unoptimized: true,
    },
   
};

export default nextConfig;
