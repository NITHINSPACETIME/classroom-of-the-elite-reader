import { CharacterGridClient } from "./CharacterGridClient";

export const revalidate = 2592000; // Cache for 30 days



interface PageProps {
    params: Promise<{ classId: string; yearId: string }>;
}

export async function generateStaticParams() {
    const classes = ["A", "B", "C", "D", "Student Council", "Teacher", "All"];
    const years = ["1", "2", "3"];
    const params: { classId: string; yearId: string }[] = [];

    classes.forEach(c => {
        years.forEach(y => {
            params.push({ classId: c, yearId: y });
        });
    });

    return params;
}

export default async function CharacterGridPage({ params }: PageProps) {
    const { classId, yearId } = await params;
    return <CharacterGridClient classId={classId} yearId={yearId} />;
}
