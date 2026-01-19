import type { NextConfig } from "next";

const nextConfig: NextConfig = {

    reactStrictMode: true,
    poweredByHeader: false,
    compress: true,
    images: {
        qualities: [60, 75],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], 
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    serverExternalPackages: ['jszip'],
    outputFileTracingExcludes: {
        '*': [
            'public/books/**/*',
            'public/content/**/*',
            '.cache/**/*',
            'node_modules/**/*.map',
            'node_modules/**/*.md',
            'node_modules/**/*.txt',
        ],
    },
};

export default nextConfig;
