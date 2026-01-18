
import { redirect } from "next/navigation";

interface PageProps {
    params: Promise<{ classId: string }>;
}

export default async function ClassPage({ params }: PageProps) {
    const { classId } = await params;
    redirect(`/characters/${classId}/1`);
}
