import { tbateVolumes, tbateSideStories } from "@/data/tbate";
import TbateSelectClient from "./TbateSelectClient";

export const dynamic = 'force-static';

export default function TbateSelectPage() {
    return (
        <TbateSelectClient 
            volumes={tbateVolumes} 
            sideStories={tbateSideStories} 
        />
    );
}
