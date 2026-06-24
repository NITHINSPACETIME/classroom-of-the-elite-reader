import { apothecaryDiariesVolumes } from "@/data/apothecary-diaries";
import ApothecarySelectClient from "./ApothecarySelectClient";

export const dynamic = 'force-static';

export default function ApothecarySelectPage() {
    return (
        <ApothecarySelectClient volumes={apothecaryDiariesVolumes} />
    );
}
