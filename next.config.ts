import type { NextConfig } from "next";

const nextConfig: NextConfig = {

    reactStrictMode: true,
    poweredByHeader: false,
    compress: true,
    images: {
        qualities: [60, 75],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 31536000, // 1 year
    },
    serverExternalPackages: ['jszip'],
    outputFileTracingExcludes: {
        '*': [
            'public/books/**/*',
            'public/content/**/*',
            'public/images/books/**/*',
            '.cache/**/*',
            'node_modules/**/*.map',
            'node_modules/**/*.md',
            'node_modules/**/*.txt',
        ],
    },
    async headers() {
        return [
            {
                source: '/assets/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                source: '/fonts/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ]
    },
};

export default nextConfig;
