import { bunnyGirlVolumes } from "@/data/bunny-girl";
import BunnyGirlSelectClient from "./BunnyGirlSelectClient";

export const dynamic = 'force-static';

export default function BunnyGirlSelectPage() {
    return (
        <BunnyGirlSelectClient volumes={bunnyGirlVolumes} />
    );
}
