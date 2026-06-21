/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Download, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";


import { RezeroVolumeData } from "@/data/rezero";
import { UserMenu } from "@/components/auth/UserMenu";
import { BackgroundSlideshow } from "@/components/landing/BackgroundSlideshow";
import dynamic from "next/dynamic";

const AuthModal = dynamic(() => import("@/components/auth/AuthModal").then(mod => mod.AuthModal), { ssr: false });
const ProfileModal = dynamic(() => import("@/components/auth/ProfileModal").then(mod => mod.ProfileModal), { ssr: false });

interface RezeroSelectClientProps {
    volumes: RezeroVolumeData[];
}

// Re:Zero Story Arcs metadata
const storyArcs = [
    {
        id: "arc-1",
        title: "Arc 1: A Tumultuous First Day",
        description: "Subaru is summoned to a fantasy world and meets a half-elf named Emilia. He discovers his tragic ability: 'Return by Death'.",
        volumes: ["v1"],
        color: "from-violet-950/40 via-purple-900/20 to-black/20"
    },
    {
        id: "arc-2",
        title: "Arc 2: The Chaotic Week",
        description: "Subaru wakes up inside Roswaal's opulent mansion. Working alongside twin maids Rem and Ram, he must break a deadly curse.",
        volumes: ["v2", "v3"],
        color: "from-fuchsia-950/40 via-purple-900/20 to-black/20"
    },
    {
        id: "arc-3",
        title: "Arc 3: Return to the Royal Capital",
        description: "The contest for the Lugnica Crown begins. Subaru faces the dreaded Witch's Cult and hunts the legendary White Whale.",
        volumes: ["v4", "v5", "v6", "v7", "v8", "v9"],
        color: "from-indigo-950/40 via-purple-900/20 to-black/20"
    },
    {
        id: "arc-4",
        title: "Arc 4: The Everlasting Contract",
        description: "Venturing to the Sanctuary, Subaru undergoes the trials of Echidna, the Witch of Greed, to protect his loved ones.",
        volumes: ["v10", "v11", "v12", "v13", "v14", "v15"],
        color: "from-violet-950/40 via-indigo-950/30 to-black/20"
    },
    {
        id: "arc-5",
        title: "Arc 5: Stars that Engrave History",
        description: "In the Water Gate City of Pristella, candidates gather together to battle an unprecedented multi-front Archbishop invasion.",
        volumes: ["v16", "v17", "v18", "v19", "v20"],
        color: "from-emerald-950/40 via-purple-900/20 to-black/20"
    },
    {
        id: "arc-6",
        title: "Arc 6: The Hall of Memories",
        description: "Subaru leads an expedition to the Pleiades Watchtower across the Sand Dunes to retrieve Rem's memories.",
        volumes: ["v21", "v22", "v23", "v24", "v25"],
        color: "from-sky-950/40 via-purple-900/20 to-black/20"
    },
    {
        id: "arc-7",
        title: "Arc 7: Vincent Vollachia (Land of the Wolves)",
        description: "Stranded in the militaristic Vollachian Empire, Subaru must help the deposed emperor Vincent reclaim his crown.",
        volumes: ["v26", "v27", "v28", "v29", "v30", "v31", "v32", "v33"],
        color: "from-amber-950/40 via-purple-900/20 to-black/20"
    },
    {
        id: "arc-8",
        title: "Arc 8: Vincent Vollachia (Four Knights of the Apocalypse)",
        description: "The Great Disaster triggers an Undead invasion. Candidates, imperial generals, and knights unite to defend the empire.",
        volumes: ["v34", "v35", "v36", "v37", "v38"],
        color: "from-rose-950/40 via-purple-900/20 to-black/20"
    },
    {
        id: "arc-9",
        title: "Arc 9: The Light of a Nameless Star",
        description: "With the empire's trials resolved, candidates return to Lugnica. The light of a nameless star begins to shine.",
        volumes: ["v39", "v40", "v41", "v42", "v43"],
        color: "from-violet-950/40 via-purple-900/25 to-black/20"
    },
    {
        id: "arc-10",
        title: "Arc 10: The Land of the Lion Kings",
        description: "Priscilla's death shifts focus back to the Capital. Subaru and the Crusch camp prepare for the second half of the story in full force.",
        volumes: ["v44", "v45"],
        color: "from-amber-950/40 via-red-950/20 to-black/20"
    }
];

/// Re:Zero Recommended Reading Order Timeline
const readingOrderItems = [
    {
        step: "1",
        type: "Main Volume",
        title: "Volume 1",
        description: "The starting point. Subaru gets dumped into a fantasy world with nothing but a convenience store bag and a phone, only to get brutally murdered. Introduces the loop mechanic, Elsa the Bow Hunter, Felt, Reinhard, and Emilia (initially calling herself Satella). Essential foundation.",
        badge: "Arc 1 Entry",
        badgeColor: "bg-violet-600 text-white",
        volumeId: "v1",
        arcId: "arc-1"
    },
    {
        step: "2",
        type: "Main Volume",
        title: "Volume 2 & 3",
        description: "Moves the setting to Roswaal's mansion. Subaru tries to settle in as a butler, but gets caught in a nightmarish loop of paranoia, curses, and suspicious maids (Rem and Ram). A massive step up in tension that tests his sanity and establishes his bond with the mansion staff.",
        badge: "Arc 2 Complete",
        badgeColor: "bg-fuchsia-700 text-white",
        volumeId: "v2",
        arcId: "arc-2"
    },
    {
        step: "3",
        type: "Side Stories",
        title: "Tapenshuu Volume 1 & 2",
        description: "Read these right after Arc 2. These short story collections focus on the peaceful everyday life at the mansion. While they seem optional, they provide critical character depth and bonding for Rem, Ram, and Beatrice that makes the upcoming tragedies in Arc 3 hit twice as hard.",
        badge: "Mansion Life",
        badgeColor: "bg-purple-950/80 text-violet-300 border border-violet-800",
        arcId: "arc-2"
    },
    {
        step: "4",
        type: "Main Volume",
        title: "Volume 4",
        description: "The start of Arc 3. Subaru accompanies Emilia to the Royal Capital for the Royal Selection ceremony. This volume is famously painful because of Subaru's absolute cringe and self-righteous behavior, leading to a massive, heartbreaking fallout with Emilia. A necessary reality check for his character.",
        badge: "Arc 3 Entry",
        badgeColor: "bg-indigo-700 text-white",
        volumeId: "v4",
        arcId: "arc-3"
    },
    {
        step: "5",
        type: "Main Volume",
        title: "Volume 5 & 6",
        description: "Subaru hits rock bottom. The Witch's Cult, led by the maniacal Petelgeuse, targets the mansion. Subaru is repeatedly broken mentally and physically, culminating in the legendary 'From Zero' conversation in Volume 6 where Rem pulls him back from the edge of giving up.",
        badge: "The Turning Point",
        badgeColor: "bg-red-900 text-white font-bold",
        volumeId: "v5",
        arcId: "arc-3"
    },
    {
        step: "6",
        type: "Prequel EX",
        title: "EX Volume 1: The Lion King's Dream",
        description: "A prequel EX novel focusing on Crusch Karsten and her close bond with the late Prince Fourier. Read this around here to fully understand her political drive, her grief, and why she refuses to rely on the Dragon's covenant for Lugnica's future.",
        badge: "Crusch Backstory",
        badgeColor: "bg-purple-950/80 text-amber-300 border border-amber-800",
        arcId: "arc-3"
    },
    {
        step: "7",
        type: "Main Volume",
        title: "Volume 7 & 8",
        description: "Armed with a renewed spirit, Subaru leverages political negotiation to form a coalition between the Crusch and Anastasia camps. Leads into the desperate, massive raid against the White Whale, featuring Wilhelm's legendary vengeance.",
        badge: "White Whale Hunt",
        badgeColor: "bg-indigo-600 text-white",
        volumeId: "v7",
        arcId: "arc-3"
    },
    {
        step: "8",
        type: "Main Volume",
        title: "Volume 9",
        description: "The final battle against Petelgeuse and his fingers. It ends in a triumphant victory, but is immediately followed by a devastating punch to the gut: Rem's existence and memories are erased by the Sin Archbishop of Gluttony. Seamlessly transitions into Arc 4.",
        badge: "Arc 3 Climax",
        badgeColor: "bg-indigo-500 text-white",
        volumeId: "v9",
        arcId: "arc-3"
    },
    {
        step: "9",
        type: "Prequel EX",
        title: "EX Volume 2 & 3: Sword Devil Love Song",
        description: "Focuses entirely on the backstory of the young 'Sword Devil' Wilhelm and his romance with the Sword Saint Theresia. Highly recommended to read before starting Arc 5 (or right after Arc 3) to appreciate Wilhelm's character and the history of the Demi-human Civil War.",
        badge: "Wilhelm Prequel",
        badgeColor: "bg-purple-950/80 text-cyan-300 border border-cyan-800",
        arcId: "arc-3"
    },
    {
        step: "10",
        type: "Main Volume",
        title: "Volume 10 to 15",
        description: "The massive Sanctuary arc. Stuck in a secluded village, Subaru has to confront his past in Echidna's trials, handle the terrifying Great Rabbit, and figure out Roswaal's dark secrets. It's a massive puzzle that requires him to stop trying to carry every burden alone, ending in a beautiful salvation for Beatrice.",
        badge: "Arc 4 Complete",
        badgeColor: "bg-violet-750 text-white",
        volumeId: "v10",
        arcId: "arc-4"
    },
    {
        step: "11",
        type: "Side Stories",
        title: "Tapenshuu Volume 3 to 5",
        description: "Fills the one-year timeskip between Arc 4 and Arc 5. These stories detail the aftermath of the Sanctuary trials, the reconstruction of the Roswaal Manor, and the preparation of the Emilia Camp for the next stage of the Royal Selection.",
        badge: "Post-Sanctuary",
        badgeColor: "bg-purple-950/80 text-teal-300 border border-teal-800",
        arcId: "arc-4"
    },
    {
        step: "12",
        type: "Main Volume",
        title: "Volume 16 to 20",
        description: "Covers Arc 5. The action moves to Pristella, the Water Gate City. What starts as a peaceful gathering of the selection candidates quickly turns into a nightmare as multiple Sin Archbishops (Greed, Wrath, Lust, Gluttony) launch a surprise siege. High-stakes action and camp crossovers.",
        badge: "Arc 5 Complete",
        badgeColor: "bg-emerald-600 text-white",
        volumeId: "v16",
        arcId: "arc-5"
    },
    {
        step: "13",
        type: "Prequel EX",
        title: "EX Volume 4 & 5: Vollachia Prelude",
        description: "Prequel lore centering on Priscilla Barielle's childhood in the Vollachian Empire and a diplomatic mission involving Reinhard, Julius, and Ferris. Essential reading to understand the political landscape, the culture, and characters before Subaru gets stranded in Vollachia in Arc 7.",
        badge: "Vollachia Lore",
        badgeColor: "bg-purple-950/80 text-orange-300 border border-orange-850",
        arcId: "arc-5"
    },
    {
        step: "14",
        type: "Main Volume",
        title: "Volume 21 to 25",
        description: "Covers Arc 6. Subaru leads a desperate expedition across the deadly Sand Dunes to the Pleiades Watchtower to find a way to restore Rem's memories. A brutal gauntlet of trials overseen by the sage Shaula, testing Subaru's identity, sanity, and resolve through intense amnesia and self-doubt.",
        badge: "Arc 6 Complete",
        badgeColor: "bg-sky-600 text-white",
        volumeId: "v21",
        arcId: "arc-6"
    },
    {
        step: "15",
        type: "Main Volume",
        title: "Volume 26 to 33",
        description: "Covers Arc 7. Stranded in the Vollachian Empire alongside Rem and Louis, Subaru is caught up in a brutal civil war. He must team up with the deposed Emperor Vincent Vollachia to survive. Focuses on the Vollachian philosophy of strength, Gladiator Island, and Subaru's transformation.",
        badge: "Arc 7 Complete",
        badgeColor: "bg-amber-600 text-white",
        volumeId: "v26",
        arcId: "arc-7"
    },
    {
        step: "16",
        type: "Main Volume",
        title: "Volume 34 to 38",
        description: "Covers Arc 8. The Great Disaster strikes, bringing an undead invasion across the Empire. The selection candidates, Imperial Generals, and knights must join forces to defend Vollachia from complete annihilation. Culminates in a legendary, heartbreaking final sacrifice by Priscilla.",
        badge: "Arc 8 Complete",
        badgeColor: "bg-rose-700 text-white",
        volumeId: "v34",
        arcId: "arc-8"
    },
    {
        step: "17",
        type: "Main Volume",
        title: "Volume 39 to 43",
        description: "Covers Arc 9. Following the tragic conclusion of the Vollachia saga, Subaru and the candidates return to Lugnica. The emotional weight of recent losses hangs heavy as the selection enters its final phase, and the light of a nameless star begins to guide their path.",
        badge: "Arc 9 Complete",
        badgeColor: "bg-violet-750 text-white",
        volumeId: "v39",
        arcId: "arc-9"
    },
    {
        step: "18",
        type: "Main Volume",
        title: "Volume 44+",
        description: "Covers Arc 10. The story turns its eyes to the Capital and the Land of the Lion Kings. The camps deal with the aftermath of Priscilla's death, and Crusch's camp starts preparing for the second half of the Selection story in full force.",
        badge: "Arc 10 Entry",
        badgeColor: "bg-amber-700 text-white",
        volumeId: "v44",
        arcId: "arc-10"
    }
];


export default function RezeroSelectClient({ volumes: lightVolumes }: RezeroSelectClientProps) {
    const [viewMode, setViewMode] = useState<"detailed" | "compact">("compact");
    const searchParams = useSearchParams();
    const router = useRouter();
    const initialContentType = searchParams.get("contentType") as "volumes" | "guide" | null;
    const [contentType, setContentType] = useState<"volumes" | "guide">(initialContentType === "guide" ? "guide" : "volumes");

    const [progressMap, setProgressMap] = useState<Record<string, { percentage: number; chapterTitle: string; chapterIndex?: number }>>({});
    const [readChapters, setReadChapters] = useState<Record<string, boolean>>({});

    
    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [profileModalOpen, setProfileModalOpen] = useState(false);

    useEffect(() => {
        const type = searchParams.get("contentType");
        if (type === "volumes" || type === "guide") {
            setContentType(type);
        }
    }, [searchParams]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem("global-view-mode") as "detailed" | "compact" | null;
            if (saved === "detailed" || saved === "compact") {
                setViewMode(saved);
            } else if (window.innerWidth >= 768) {
                setViewMode("detailed");
            } else {
                setViewMode("compact");
            }
        }

        const progress: Record<string, { percentage: number; chapterTitle: string; chapterIndex?: number }> = {};
        lightVolumes.forEach(vol => {
            const savedMeta = localStorage.getItem(`rezero-progress-meta-${vol.id}`);
            if (savedMeta) {
                try {
                    progress[vol.id] = JSON.parse(savedMeta);
                } catch {}
            } else {
                const savedCfi = localStorage.getItem(`rezero-progress-${vol.id}`);
                if (savedCfi) {
                    progress[vol.id] = { percentage: 0, chapterTitle: "Continue Reading", chapterIndex: parseInt(savedCfi) || 1 };
                }
            }
        });
        const readData = localStorage.getItem("rezero-read-chapters");
        if (readData) {
            try {
                setReadChapters(JSON.parse(readData));
            } catch {}
        }
        setProgressMap(progress);

        const handleViewModeChange = (e: Event) => {
            const customEvent = e as CustomEvent<"detailed" | "compact">;
            if (customEvent.detail === "detailed" || customEvent.detail === "compact") {
                setViewMode(customEvent.detail);
            }
        };
        window.addEventListener('change-view-mode', handleViewModeChange);
        return () => {
            window.removeEventListener('change-view-mode', handleViewModeChange);
        };
    }, [lightVolumes]);



    const handleResetVolume = (volId: string) => {
        localStorage.removeItem(`rezero-progress-meta-${volId}`);
        localStorage.removeItem(`rezero-progress-${volId}`);
        
        const readKey = "rezero-read-chapters";
        const readData = localStorage.getItem(readKey);
        if (readData) {
            try {
                const readMap = JSON.parse(readData);
                const prefix = `${volId}-`;
                const updated = Object.keys(readMap).reduce((acc, key) => {
                    if (!key.startsWith(prefix)) {
                        acc[key] = readMap[key];
                    }
                    return acc;
                }, {} as Record<string, boolean>);
                localStorage.setItem(readKey, JSON.stringify(updated));
                setReadChapters(updated);
            } catch (e) {
                console.error(e);
            }
        }

        setProgressMap(prev => {
            const copy = { ...prev };
            delete copy[volId];
            return copy;
        });
    };



    const handleResetAll = () => {
        if (confirm("Are you sure you want to reset all reading progress for Re:Zero?")) {
            lightVolumes.forEach(vol => {
                localStorage.removeItem(`rezero-progress-meta-${vol.id}`);
                localStorage.removeItem(`rezero-progress-${vol.id}`);
            });
            localStorage.removeItem("rezero-read-chapters");
            setProgressMap({});
            setReadChapters({});
        }
    };

    const handleDownloadCover = (vol: RezeroVolumeData, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const link = document.createElement('a');
        link.href = vol.coverImage;
        link.download = `Cover_${vol.title.replace(/\s+/g, '_') || vol.id}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleTimelineItemClick = (item: { step: string; type: string; title: string; description: string; badge: string; badgeColor: string; volumeId?: string; arcId?: string }) => {
        setContentType("volumes");

        if (item.volumeId) {
            const vol = lightVolumes.find(v => v.id === item.volumeId);
            if (vol && !vol.inProgress) {
                router.push(`/rezero/select/${item.volumeId}`);
            }
        }

        const arcId = item.arcId;
        if (arcId) {
            setTimeout(() => {
                const element = document.getElementById(arcId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 150);
        }
    };

    return (
        <div className="min-h-screen w-full bg-[#05030a] text-zinc-100 overflow-y-auto relative flex flex-col items-center select-none theme-rezero">
            {/* Background elements */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none fixed">
                <div className="absolute inset-0 bg-[#05030a]/80 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05030a] via-[#05030a]/60 to-transparent z-10" />
                <BackgroundSlideshow images={[
                    '/assets/rezero_bg_1.png',
                    '/assets/rezero_bg_2.png',
                    '/assets/rezero_bg_3.png',
                ]} interval={7000} />
            </div>
            {/* Fine magical grid overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('/assets/grid.svg')] mix-blend-overlay fixed pointer-events-none z-20" />

            {/* Top Bar */}
            <div className="sticky top-0 left-0 w-full z-50 p-6 bg-gradient-to-b from-[#05030a]/90 to-transparent backdrop-blur-md flex items-center justify-between border-b border-violet-950/20">
                <div className="flex items-center">
                    <Link href="/rezero">
                        <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white hover:bg-violet-950/30 rounded-full transition-all">
                            <ArrowLeft className="w-6 h-6" />
                        </Button>
                    </Link>
                    <h1 className="ml-4 text-2xl font-serif font-bold text-white tracking-widest hidden sm:block font-serif">Witch&apos;s Archive</h1>
                    <h1 className="ml-4 text-xl font-serif font-bold text-white tracking-widest sm:hidden">Archive</h1>
                </div>

                <div className="flex items-center gap-3">
                    <Button
                        variant="destructive"
                        onClick={handleResetAll}
                        className="text-xs font-serif font-bold text-white bg-red-600 hover:bg-red-700 rounded-full px-4 h-9 border-none transition-all active:scale-95 shadow-md"
                    >
                        Reset All
                    </Button>
                    <UserMenu
                        onSignIn={() => setAuthModalOpen(true)}
                        onProfile={() => setProfileModalOpen(true)}
                    />
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 container mx-auto px-4 pb-20 max-w-5xl"
            >
                {/* Content Toggle (Volumes vs Suggested Read Order Guide) */}
                <div className="flex justify-center mb-10 mt-6">
                    <div className="relative bg-violet-950/15 backdrop-blur-md p-1.5 rounded-full border border-violet-900/30 flex items-center gap-1">
                        <button
                            onClick={() => setContentType("volumes")}
                            className={`relative px-6 py-2 rounded-full text-sm font-bold transition-colors duration-300 z-10 ${contentType === "volumes" ? "text-white" : "text-zinc-400 hover:text-zinc-200"}`}
                        >
                            {contentType === "volumes" && (
                                <motion.div
                                    layoutId="activeTabRezero"
                                    className="absolute inset-0 bg-violet-700/80 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                Story Arcs
                                <span className={`text-xs px-1.5 py-0.5 rounded-full ${contentType === "volumes" ? "bg-white/20 text-white" : "bg-white/10 text-zinc-500"}`}>
                                    {lightVolumes.length}
                                </span>
                            </span>
                        </button>
                        <button
                            onClick={() => setContentType("guide")}
                            className={`relative px-6 py-2 rounded-full text-sm font-bold transition-colors duration-300 z-10 ${contentType === "guide" ? "text-white" : "text-zinc-400 hover:text-zinc-200"}`}
                        >
                            {contentType === "guide" && (
                                <motion.div
                                    layoutId="activeTabRezero"
                                    className="absolute inset-0 bg-violet-700/80 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                Reading Order Guide
                            </span>
                        </button>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {contentType === "volumes" ? (
                        <motion.div
                            key="arcs-view"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col gap-12"
                        >
                            {storyArcs.map((arc, arcIdx) => {
                                const arcVols = lightVolumes.filter(v => arc.volumes.includes(v.id));
                                if (arcVols.length === 0) return null;

                                return (
                                    <div key={arc.id} id={arc.id} className="relative w-full border border-violet-950/20 rounded-xl overflow-hidden bg-zinc-950/30 backdrop-blur-md p-6">
                                        {/* Arc Decorative Background Gradient */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${arc.color} opacity-40 z-0 pointer-events-none`} />

                                        <div className="relative z-10 mb-6 border-b border-violet-900/20 pb-4">
                                            <h2 className="font-serif text-2xl font-bold text-violet-300 tracking-wide">{arc.title}</h2>
                                            <p className="text-sm text-zinc-400 mt-1 max-w-3xl leading-relaxed">{arc.description}</p>
                                        </div>

                                        {viewMode === "detailed" ? (
                                            <div className="relative z-10 flex flex-col gap-8">
                                                {arcVols.map((vol, index) => (
                                                    <div
                                                        key={vol.id}
                                                        className="bg-[#0b0816]/70 backdrop-blur-md border border-violet-900/30 rounded-lg overflow-hidden shadow-xl"
                                                    >
                                                        {/* Header Row */}
                                                        <div className="grid grid-cols-[60px_1fr] md:grid-cols-[90px_1.5fr_1fr_250px] bg-gradient-to-r from-violet-950/35 to-black/60 border-b border-violet-900/20 divide-x divide-violet-900/20 text-center items-center">
                                                            <div className="p-3 font-serif font-bold text-lg md:text-xl text-violet-300">
                                                                #{vol.volumeNumber}
                                                            </div>
                                                            <div className="p-3 font-bold text-zinc-200 font-serif text-sm md:text-base text-left pl-6">
                                                                {vol.title}
                                                            </div>
                                                            <div className="hidden md:flex p-3 flex-col justify-center text-xs text-zinc-400 text-left">
                                                                <span className="font-bold text-violet-400/80 mb-0.5 uppercase tracking-wider text-[10px]">Release Dates</span>
                                                                <span className="truncate">JP: {vol.releaseDateJP}</span>
                                                                <span className="truncate">EN: {vol.releaseDateEN}</span>
                                                            </div>
                                                            <div className="hidden md:flex p-3 flex-col justify-center text-xs text-zinc-400 text-left">
                                                                <span className="font-bold text-violet-400/80 mb-0.5 uppercase tracking-wider text-[10px]">ISBN Identifiers</span>
                                                                <span className="truncate">JP: {vol.isbnJP}</span>
                                                                <span className="truncate">EN: {vol.isbnEN}</span>
                                                            </div>
                                                        </div>

                                                        {/* Content Row */}
                                                        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_260px] divide-y md:divide-y-0 md:divide-x divide-violet-900/20">
                                                            {/* Synopsis / Summary */}
                                                            <div className="p-5 flex flex-col justify-between gap-4">
                                                                <div>
                                                                    <h4 className="font-bold text-zinc-300 text-xs uppercase tracking-widest mb-2 text-violet-400/80">Archival Synopsis</h4>
                                                                    <p className="text-sm text-zinc-300 leading-relaxed font-serif">{vol.synopsis}</p>
                                                                </div>
                                                                <div className="border-t border-violet-950/45 pt-3 flex flex-wrap gap-2 text-xs text-zinc-400">
                                                                    <span className="font-bold text-violet-400">Chapters list:</span>
                                                                    <span className="text-zinc-500 font-serif italic">{vol.chapters.length} chapters</span>
                                                                </div>
                                                            </div>

                                                            {/* Cover Card Action (Right) */}
                                                            <div className="relative group flex flex-col items-center justify-center p-6 bg-violet-950/5">
                                                                <div 
                                                                    className="hover-3d relative cursor-pointer w-full max-w-[150px]"
                                                                    onClick={() => !vol.inProgress && router.push(`/rezero/select/${vol.id}`)}
                                                                >
                                                                    <div className="relative w-full aspect-[2/3] shadow-2xl rounded border border-violet-900/30 overflow-hidden">
                                                                        <Image
                                                                            src={vol.coverImage}
                                                                            alt={vol.title}
                                                                            fill
                                                                            className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                                                            sizes="150px"
                                                                            priority={arcIdx === 0 && index === 0}
                                                                        />
                                                                        {vol.inProgress && (
                                                                            <div className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center border-t border-violet-500/30">
                                                                                <span className="text-violet-400 font-bold text-xs uppercase tracking-widest animate-pulse">In Progress</span>
                                                                            </div>
                                                                        )}
                                                                        {progressMap[vol.id] && (
                                                                            <div className="absolute bottom-0 left-0 right-0 bg-black/75 backdrop-blur-sm px-2 py-1 border-t border-violet-900/30 text-center pointer-events-none z-10">
                                                                                <div className="text-[10px] font-bold text-violet-300 truncate">
                                                                                    {progressMap[vol.id].chapterTitle}
                                                                                </div>
                                                                                <div className="text-[9px] text-zinc-400 mt-0.5">
                                                                                    {Math.round(progressMap[vol.id].percentage * 100)}% read
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                                                                </div>

                                                                {/* Volume Actions */}
                                                                <div className="w-full mt-4 flex flex-col gap-2">
                                                                    <Button 
                                                                        onClick={() => !vol.inProgress && router.push(`/rezero/select/${vol.id}`)}
                                                                        className="w-full bg-violet-900/40 hover:bg-violet-800/60 text-violet-200 border border-violet-800/40 font-serif font-bold text-xs tracking-wider"
                                                                        disabled={vol.inProgress}
                                                                    >
                                                                        {vol.inProgress ? "IN PROGRESS" : "READ VOLUME"}
                                                                    </Button>

                                                                    {progressMap[vol.id] && (
                                                                         <Button
                                                                            variant="destructive"
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                                if (confirm(`Reset progress for Volume ${vol.volumeNumber}?`)) {
                                                                                    handleResetVolume(vol.id);
                                                                                }
                                                                            }}
                                                                            className="w-full bg-red-600 hover:bg-red-700 text-white border-none font-bold text-[10px] tracking-wider py-1.5 cursor-pointer rounded-xl transition-all shadow-md"
                                                                        >
                                                                            RESET PROGRESS
                                                                        </Button>
                                                                    )}

                                                                    {vol.epubSource && (
                                                                        <Button
                                                                            variant="ghost"
                                                                            onClick={(e) => handleDownloadCover(vol, e)}
                                                                            className="w-full text-zinc-400 hover:text-white hover:bg-violet-950/20 text-xs flex gap-1.5 items-center justify-center"
                                                                        >
                                                                            <Download className="w-3.5 h-3.5" /> Save Cover Art
                                                                        </Button>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                                {arcVols.map((vol) => (
                                                    <div
                                                        key={vol.id}
                                                        onClick={() => !vol.inProgress && router.push(`/rezero/select/${vol.id}`)}
                                                        className="flex flex-col gap-2 group cursor-pointer relative"
                                                    >
                                                        <div className="hover-3d relative cursor-pointer w-full">
                                                            <div className="relative w-full aspect-[2/3] rounded overflow-hidden shadow-lg border border-violet-900/20">
                                                                <Image
                                                                    src={vol.coverImage}
                                                                    alt={vol.title}
                                                                    fill
                                                                    className="object-cover transition-all duration-300 opacity-90 group-hover:opacity-100"
                                                                    sizes="(max-width: 768px) 50vw, 150px"
                                                                />
                                                                
                                                                {vol.inProgress && (
                                                                    <div className="absolute inset-0 bg-black/80 flex items-center justify-center text-center p-2 z-20">
                                                                        <span className="text-violet-400 font-mono font-bold text-[9px] tracking-widest uppercase animate-pulse">Coming Soon</span>
                                                                    </div>
                                                                )}
                                                                {progressMap[vol.id] && (
                                                                    <>
                                                                        <div className="absolute top-2 left-2 bg-violet-950/80 backdrop-blur-sm px-2 py-0.5 rounded border border-violet-500/30 text-[9px] font-bold text-violet-300 z-20 pointer-events-none">
                                                                            RESUME
                                                                        </div>
                                                                        <div className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-sm border border-white/10 w-9 h-9 rounded-full flex items-center justify-center z-20 shadow-md pointer-events-none">
                                                                            <span className="text-[9px] font-mono font-bold" style={{ color: 'var(--primary-color, #8b5cf6)' }}>
                                                                                {Math.round(progressMap[vol.id].percentage * 100)}%
                                                                            </span>
                                                                            <svg className="absolute w-8 h-8 transform -rotate-90 text-violet-500" viewBox="0 0 36 36" style={{ color: 'var(--primary-color, #8b5cf6)' }}>
                                                                                <path
                                                                                    className="text-zinc-800"
                                                                                    strokeWidth="3.5"
                                                                                    stroke="currentColor"
                                                                                    fill="none"
                                                                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                                                />
                                                                                <path
                                                                                    className="text-primary transition-all duration-300"
                                                                                    strokeDasharray={`${Math.round(progressMap[vol.id].percentage * 100)}, 100`}
                                                                                    strokeWidth="3.5"
                                                                                    strokeLinecap="round"
                                                                                    stroke="currentColor"
                                                                                    fill="none"
                                                                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </>
                                                                )}
                                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-end justify-center pb-3 pointer-events-none">
                                                                    <span className="bg-violet-600/90 text-white text-[9px] font-bold font-mono tracking-widest px-2.5 py-0.5 rounded-full shadow-md">
                                                                        EXPAND
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                                                        </div>
                                                        <div className="text-center mt-1 px-1">
                                                            <div className="font-bold text-zinc-100 text-xs group-hover:text-violet-400 transition-colors truncate">
                                                                Volume {vol.volumeNumber}
                                                            </div>
                                                            <div className="text-[10px] text-zinc-500 truncate">
                                                                {vol.title}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="reading-guide-view"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="bg-zinc-950/40 border border-violet-950/20 backdrop-blur-md rounded-xl p-8 max-w-3xl mx-auto shadow-2xl relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-950/15 via-transparent to-transparent z-0 pointer-events-none" />

                            <div className="relative z-10 mb-8 border-b border-violet-900/20 pb-4 text-center">
                                <h2 className="font-serif text-3xl font-bold text-white tracking-widest flex items-center justify-center gap-2">
                                    <Sparkles className="text-violet-400 w-6 h-6 animate-pulse" />
                                    Re:Zero Light Novel Reading Guide
                                </h2>
                                <p className="text-sm text-zinc-400 mt-2 max-w-xl mx-auto leading-relaxed">
                                    The ultimate reading guide for Re:Zero. Chronologically merges side story anthologies (Tapenshuu) and prequel EX novels with the main sequence to maximize narrative impact.
                                </p>
                            </div>

                            {/* Timeline Track */}
                            <div className="relative z-10 pl-6 border-l border-violet-900/30 ml-4 space-y-8 py-2">
                                {readingOrderItems.map((item, idx) => (
                                    <div key={idx} className="relative group">
                                        {/* Step Indicator Dot */}
                                        <div className="absolute -left-[35px] top-1.5 w-6 h-6 rounded-full bg-[#05030a] border border-violet-600 flex items-center justify-center font-bold text-xs text-violet-300 shadow-[0_0_10px_rgba(139,92,246,0.3)] transition-transform duration-300 group-hover:scale-110">
                                            {item.step}
                                        </div>

                                        <div 
                                            onClick={() => handleTimelineItemClick(item)}
                                            className="bg-zinc-900/40 hover:bg-violet-950/20 border border-violet-950/20 hover:border-violet-600/40 rounded-xl p-5 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.05)] active:scale-[0.99]"
                                        >
                                            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                                <span className="font-serif text-lg font-bold text-zinc-100">{item.title}</span>
                                                <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                                                    {item.badge}
                                                </span>
                                            </div>
                                            <p className="text-xs text-zinc-500 mb-2 uppercase font-mono tracking-widest">{item.type}</p>
                                            <p className="text-sm text-zinc-400 leading-relaxed font-serif">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>



            <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
            <ProfileModal isOpen={profileModalOpen} onClose={() => setProfileModalOpen(false)} />
        </div>
    );
}
