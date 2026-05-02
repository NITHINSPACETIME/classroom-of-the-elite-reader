import { CharacterGridClient } from "./CharacterGridClient";

export const revalidate = 2592000; // Cache for 30 days



interface PageProps {
    params: Promise<{ classId: string; yearId: string }>;
}

export default async function CharacterGridPage({ params }: PageProps) {
    const { classId, yearId } = await params;
    return <CharacterGridClient classId={classId} yearId={yearId} />;
}
