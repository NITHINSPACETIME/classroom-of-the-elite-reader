import { lotmVolumes, coiVolumes } from "@/data/lotm";
import LotmSelectClient from "./LotmSelectClient";

export const dynamic = 'force-static';

export default function LotmSelectPage() {
    return (
        <LotmSelectClient volumes={lotmVolumes} coiVolumes={coiVolumes} />
    );
}
