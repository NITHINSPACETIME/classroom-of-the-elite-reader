import { tensuraVolumes, tensuraSideStories } from "@/data/tensura";
import TensuraSelectClient from "./TensuraSelectClient";

export const dynamic = 'force-static';

export default function TensuraSelectPage() {
    return (
        <TensuraSelectClient 
            volumes={tensuraVolumes} 
            sideStories={tensuraSideStories} 
        />
    );
}
