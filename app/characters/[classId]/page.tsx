import { redirect } from "next/navigation";

export const revalidate = 2592000; // Cache for 30 days

interface PageProps {
    params: Promise<{ classId: string }>;
}

export default async function ClassPage({ params }: PageProps) {
    const { classId } = await params;
    redirect(`/characters/${classId}/1`);
}
