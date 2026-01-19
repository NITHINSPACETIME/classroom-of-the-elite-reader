import { CharacterGridClient } from "./CharacterGridClient";

export async function generateStaticParams() {
    const classes = ["A", "B", "C", "D", "Student Council", "Teacher"];
    const years = ["1", "2", "3"];

    const params: { classId: string; yearId: string }[] = [];

    for (const yearId of years) {
        const validClasses = [...classes, "All"];

        for (const classId of validClasses) {
            params.push({
                classId: classId,
                yearId: yearId
            });
        }
    }

    return params;
}

interface PageProps {
    params: Promise<{ classId: string; yearId: string }>;
}

export default async function CharacterGridPage({ params }: PageProps) {
    const { classId, yearId } = await params;
    return <CharacterGridClient classId={classId} yearId={yearId} />;
}
