import { MetadataRoute } from 'next';

export const dynamic = "force-static";
import { volumes as year1Volumes, shortStories as year1ShortStories } from '@/data/year1';
import { volumes as year2Volumes, shortStories as year2ShortStories } from '@/data/year2';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://cote-reader.me';

    // Base routes
    const routes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/cote/select`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/cote/select/year-1`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/cote/select/year-2`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/cote/select/year-3`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }
    ];

    // Map all volumes
    const allVolumes = [
        ...year1Volumes,
        ...year1ShortStories,
        ...year2Volumes,
        ...year2ShortStories,
    ];

    const volumeRoutes = allVolumes.map((vol) => ({
        url: `${baseUrl}/cote/read/${vol.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));


    return [...routes, ...volumeRoutes];
}
