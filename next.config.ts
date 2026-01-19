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
            'public/content/**/*',
            'public/images/books/**/*',
            '.cache/**/*',
            'node_modules/**/*.map',
            'node_modules/**/*.md',
            'node_modules/**/*.txt',
        ],
    },
};

export default nextConfig;
