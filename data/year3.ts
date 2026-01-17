
export interface VolumeData {
    id: string;
    volumeNumber: string;
    title: string;
    releaseDateJP: string;
    releaseDateEN: string;
    isbnJP: string;
    isbnEN: string;
    chapters: string[];
    characters: string[];
    coverImage: string;
    epubSource?: string;
}

export const volumes: VolumeData[] = [
    {
        id: "y3v1",
        volumeNumber: "Y3:V1",
        title: "Light Novel 3rd Year Volume 1",
        releaseDateJP: "Mar 25, 2025",
        releaseDateEN: "-",
        isbnJP: "978-4-04-684635-8",
        isbnEN: "-",
        chapters: [
            "Prologue: The End of Daily Life",
            "Chapter 1: Confusion",
            "Chapter 2: To Ascertain",
            "Chapter 3: The Beginning of a One-Year Period",
            "Chapter 4: An Outside Perspective",
            "Chapter 5: Amalgamation",
            "Chapter 6: School Life in C-Class",
            "Chapter 7: The Defeat of Ayanokōji",
            "Chapter 8: Enemies and Allies",
            "Epilogue: What Awaits Ahead"
        ],
        characters: ["Suzune Horikita", "Kakeru Ryūen"],
        coverImage: "/assets/y3v1.jpg",
        epubSource: "/books/year3/y3v1.epub"
    },
    {
        id: "y3v2",
        volumeNumber: "Y3:V2",
        title: "Light Novel 3rd Year Volume 2",
        releaseDateJP: "Jul 25, 2025",
        releaseDateEN: "-",
        isbnJP: "978-4-04-684976-2",
        isbnEN: "-",
        chapters: [
            "Prologue: Tsubasa Nanase's Monologue",
            "Chapter 1: Becoming Familiar",
            "Chapter 2: A Calm Exam",
            "Chapter 3: To Know the Other Side",
            "Chapter 4: Seeking Knowledge",
            "Chapter 5: Yamamura's Courage",
            "Chapter 6: Fortune and Misfortune, Intertwined like Rope",
            "Chapter 7: Observer",
            "Epilogue: Another Story Starts to Unfold"
        ],
        characters: ["Masayoshi Hashimoto", "Asuka Shiraishi"],
        coverImage: "/assets/y3v2.jpg",
        epubSource: "/books/year3/y3v2.epub"
    },
    {
        id: "y3v3",
        volumeNumber: "Y3:V3",
        title: "Light Novel 3rd Year Volume 3",
        releaseDateJP: "Nov 25, 2025",
        releaseDateEN: "-",
        isbnJP: "978-4-04-685440-7",
        isbnEN: "-",
        chapters: [
            "Prologue: Hiyori Shiina's Monologue",
            "Chapter 1: The Curtains Rises • Survival Game Special Exam",
            "Chapter 2: Surprise Attack",
            "Chapter 3: Invisible Pressure",
            "Chapter 4: Coincidence",
            "Chapter 5: Alliance",
            "Chapter 6: True Aim",
            "Chapter 7: Decisive Battle",
            "Epilogue: Show Me What You've Got"
        ],
        characters: ["Honami Ichinose", "Hiyori Shiina"],
        coverImage: "/assets/y3v3.jpg",
        epubSource: "/books/year3/y3v3.epub"
    }
];
