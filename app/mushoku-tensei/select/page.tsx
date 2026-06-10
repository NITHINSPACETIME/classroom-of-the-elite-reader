import { mushokuTenseiVolumes } from "@/data/mushoku-tensei";
import MushokuTenseiSelectClient from "./MushokuTenseiSelectClient";

export const dynamic = 'force-static';

export default function MushokuTenseiSelectPage() {
    return (
        <MushokuTenseiSelectClient volumes={mushokuTenseiVolumes} />
    );
}
