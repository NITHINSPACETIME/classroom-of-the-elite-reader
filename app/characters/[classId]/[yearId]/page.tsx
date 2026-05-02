import { CharacterGridClient } from "./CharacterGridClient";



interface PageProps {
    params: Promise<{ classId: string; yearId: string }>;
}

export default async function CharacterGridPage({ params }: PageProps) {
    const { classId, yearId } = await params;
    return <CharacterGridClient classId={classId} yearId={yearId} />;
}
