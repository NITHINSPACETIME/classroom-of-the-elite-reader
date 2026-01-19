import type { NextConfig } from "next";

const nextConfig: NextConfig = {

    reactStrictMode: true,
    poweredByHeader: false,
    compress: true,
    images: {
        qualities: [60, 75],
    },
    serverExternalPackages: ['jszip'],
    outputFileTracingExcludes: {
        '*': [
            'public/books/**/*',
            '.cache/**/*',
            './public/books/**/*',
            './.cache/**/*',
            'node_modules/**/*.map',
        ],
        '/read/[volumeId]/[chapterIndex]': [
            'public/books/**/*',
            '.cache/**/*',
            './public/books/**/*',
            './.cache/**/*',
        ],
    },
};

export default nextConfig;
