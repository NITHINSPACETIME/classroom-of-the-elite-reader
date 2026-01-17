import type { NextConfig } from "next";

const nextConfig: NextConfig = {

    serverExternalPackages: ['jszip'],
    experimental: {
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
    } as any,
};

export default nextConfig;
