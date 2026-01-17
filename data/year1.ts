
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
        id: "v1",
        volumeNumber: "Y1:V1",
        title: "Light Novel Volume 1",
        releaseDateJP: "May 25, 2015",
        releaseDateEN: "May 7, 2019",
        isbnJP: "978-4-0406-7657-9",
        isbnEN: "978-1-64275-137-6",
        chapters: [
            "Prologue: The Structure of Japanese Society",
            "Chapter 1: Welcome to the School Life of your Dreams",
            "Chapter 2: The Students of Class D",
            "Chapter 3: Ladies and Gentlemen, Thank You for Waiting!",
            "Chapter 4: Friends",
            "Chapter 5: The End of Everyday Life",
            "Chapter 6: Classroom of the Elite",
            "Chapter 7: The Association of Failures",
            "Chapter 8: The Failures Mobilize Once Again",
            "Chapter 9: Midterm Exam",
            "Chapter 10: The Beginning",
            "Epilogue: Victory Celebration"
        ],
        characters: ["Suzune Horikita", "Kiyotaka Ayanokōji"],
        coverImage: "/assets/y1v1.jpg",
        epubSource: "/books/year1/v1.epub"
    },
    {
        id: "v2",
        volumeNumber: "Y1:V2",
        title: "Light Novel Volume 2",
        releaseDateJP: "Sep 25, 2015",
        releaseDateEN: "Aug 13, 2019",
        isbnJP: "978-4-0406-7778-1",
        isbnEN: "978-1-64275-139-0",
        chapters: [
            "Prologue: Sakura Airi's Soliloquy",
            "Chapter 1: The Sudden Beginning of our Tumultuous Troubles",
            "Chapter 2: Weak Point",
            "Chapter 3: An Unexpected Witness",
            "Chapter 4: Each and Every Prediction",
            "Chapter 5: Truth and Lies",
            "Epilogue: Only One Solution"
        ],
        characters: ["Kikyō Kushida", "Airi Sakura"],
        coverImage: "/assets/y1v2.jpg",
        epubSource: "/books/year1/v2.epub"
    },
    {
        id: "v3",
        volumeNumber: "Y1:V3",
        title: "Light Novel Volume 3",
        releaseDateJP: "Jan 25, 2016",
        releaseDateEN: "Nov 19, 2019",
        isbnJP: "978-4-0406-8008-8",
        isbnEN: "978-1-64275-723-1",
        chapters: [
            "Prologue: Chabashira Sae's Soliloquy",
            "Chapter 1: The Boundary between Heaven and Hell",
            "Chapter 2: Rivals on the Move",
            "Chapter 3: The Meaning of Freedom",
            "Chapter 4: The Quiet Outbreak of War",
            "Chapter 5: False Teamwork",
            "Epilogue: The Curtain Rises"
        ],
        characters: ["Mio Ibuki", "Honami Ichinose"],
        coverImage: "/assets/y1v3.jpg",
        epubSource: "/books/year1/v3.epub"
    },
    {
        id: "v4",
        volumeNumber: "Y1:V4",
        title: "Light Novel Volume 4",
        releaseDateJP: "May 25, 2016",
        releaseDateEN: "Feb 25, 2020",
        isbnJP: "978-4-0406-8338-6",
        isbnEN: "978-1-64505-197-8",
        chapters: [
            "Prologue: Karuizawa Kei's Soliloquy",
            "Chapter 1: The Gentle Days...",
            "Chapter 2: An Infinite Variety of Wishes",
            "Chapter 3: Double Question",
            "Epilogue: Each and Every Difference"
        ],
        characters: ["Yōsuke Hirata", "Kei Karuizawa"],
        coverImage: "/assets/y1v4.jpg",
        epubSource: "/books/year1/v4.epub"
    },
    {
        id: "v4.5",
        volumeNumber: "Y1:V4.5",
        title: "Light Novel Volume 4.5",
        releaseDateJP: "Sep 23, 2016",
        releaseDateEN: "May 5, 2020",
        isbnJP: "978-4-0406-8629-5",
        isbnEN: "978-1-64505-437-5",
        chapters: [
            "Prologue: Summer Vacation is Nearly Over",
            "Chapter 1: Ibuki Mio has Surprisingly Good Sense",
            "Chapter 2: Katsuragi Kohei is Surprisingly Troubled",
            "Chapter 3: Dangers Lurk in Everyday Life",
            "Chapter 4: A Day of Girl Troubles and Disaster: A Devil Smiles like an Angel",
            "Chapter 5: A Gathering Between Classes",
            "Extra: Ike, Yamauchi and Sudou's Summer Vacation"
        ],
        characters: ["Suzune Horikita"],
        coverImage: "/assets/y1v4.5.jpg",
        epubSource: "/books/year1/v4.5.epub"
    },
    {
        id: "v5",
        volumeNumber: "Y1:V5",
        title: "Light Novel Volume 5",
        releaseDateJP: "Jan 25, 2017",
        releaseDateEN: "Jul 21, 2020",
        isbnJP: "978-4-0406-9017-9",
        isbnEN: "978-1-6450-5486-3",
        chapters: [
            "Prologue: Sudō Ken's Soliloquy",
            "Chapter 1: The School's Sports Festival Begins",
            "Chapter 2: Class D's Objective",
            "Chapter 3: Everyone's Calculations",
            "Chapter 4: There's A Reason For Their Relationship",
            "Chapter 5: The Curtains Rise",
            "Chapter 6: For Whose Sake?",
            "Chapter 7: What You and I Lack",
            "Epilogue: The Turning Point"
        ],
        characters: ["Kōhei Katsuragi", "Arisu Sakayanagi"],
        coverImage: "/assets/y1v5.jpg",
        epubSource: "/books/year1/v5.epub"
    },
    {
        id: "v6",
        volumeNumber: "Y1:V6",
        title: "Light Novel Volume 6",
        releaseDateJP: "May 25, 2017",
        releaseDateEN: "Oct 13, 2020",
        isbnJP: "978-4-0406-9231-9",
        isbnEN: "978-1-6450-5751-2",
        chapters: [
            "Prologue: Kushida Kikyō's Soliloquy",
            "Chapter 1: The Changing Class D",
            "Chapter 2: The Paper Shuffle",
            "Chapter 3: C-Class Makes its Move",
            "Chapter 4: A Means of Escape",
            "Chapter 5: The Ayanokōji Group's Formation",
            "Epilogue: The Difference in Determination"
        ],
        characters: ["Teruhiko Yukimura", "Haruka Hasebe"],
        coverImage: "/assets/y1v6.jpg",
        epubSource: "/books/year1/v6.epub"
    },
    {
        id: "v7",
        volumeNumber: "Y1:V7",
        title: "Light Novel Volume 7",
        releaseDateJP: "Oct 25, 2017",
        releaseDateEN: "Jan 26, 2021",
        isbnJP: "978-4-04-069451-1",
        isbnEN: "978-1-64827-024-6",
        chapters: [
            "Prologue: Ryūen Kakeru’s Soliloquy",
            "Chapter 1: The Sound of Footsteps in the Middle of Winter",
            "Chapter 2: Reunions and Farewells",
            "Chapter 3: Insanity",
            "Chapter 4: Time to Settle Things",
            "Chapter 5: Intersecting Thoughts",
            "Epilogue: What Ryūen Wins and Loses"
        ],
        characters: ["Hiyori Shiina", "Kakeru Ryūen"],
        coverImage: "/assets/y1v7.jpg",
        epubSource: "/books/year1/v7.epub"
    },
    {
        id: "v7.5",
        volumeNumber: "Y1:V7.5",
        title: "Light Novel Volume 7.5",
        releaseDateJP: "Jan 25, 2018",
        releaseDateEN: "Mar 23, 2021",
        isbnJP: "978-4-0406-9675-1",
        isbnEN: "978-1-64827-147-2",
        chapters: [
            "Prologue: First Winter",
            "Chapter 1: Love’s Arrow",
            "Chapter 2: Ibuki Mio’s Disastrous Day",
            "Chapter 3: How We Spend Our Time",
            "Chapter 4: The Turbulent Double Date",
            "Epilogue: Where the Arrow Landed"
        ],
        characters: ["Kei Karuizawa"],
        coverImage: "/assets/y1v7.5.jpg",
        epubSource: "/books/year1/v7.5.epub"
    },
    {
        id: "v8",
        volumeNumber: "Y1:V8",
        title: "Light Novel Volume 8",
        releaseDateJP: "May 25, 2018",
        releaseDateEN: "Aug 3, 2021",
        isbnJP: "978-4-04-069882-3",
        isbnEN: "978-1-64827-268-4",
        chapters: [
            "Prologue: Horikita Manabu’s Soliloquy",
            "Chapter 1: A New Special Exam: Mixed Training Camp",
            "Chapter 2: Human Nature Put to the Test",
            "Chapter 3: A Premonition of Defeat",
            "Chapter 4: The First Half of the Girls’ Battle: Ichinose Honami",
            "Chapter 5: Ubiquitous Things",
            "Chapter 6: What Is Lost, What Isn’t",
            "Chapter 7: The Second Half of the Girls’ Battle: Horikita Suzune",
            "Epilogue: Blind Spot"
        ],
        characters: ["Manabu Horikita", "Akane Tachibana"],
        coverImage: "/assets/y1v8.jpg",
        epubSource: "/books/year1/v8.epub"
    },
    {
        id: "v9",
        volumeNumber: "Y1:V9",
        title: "Light Novel Volume 9",
        releaseDateJP: "Sep 25, 2018",
        releaseDateEN: "Nov 16, 2021",
        isbnJP: "978-4-04-065166-8",
        isbnEN: "978-1-64827-380-3",
        chapters: [
            "Prologue: Ichinose Honami’s Soliloquy",
            "Chapter 1: The Student Council President’s Inclination",
            "Chapter 2: Changing Relationships",
            "Chapter 3: Unchanging Intent",
            "Chapter 4: Ichinose’s Secret, Kamuro’s Secret",
            "Chapter 5: Rumors Running Rampant",
            "Chapter 6: Ambiguous Things",
            "Chapter 7: All the Tricks",
            "Epilogue: Return"
        ],
        characters: ["Masayoshi Hashimoto", "Masumi Kamuro"],
        coverImage: "/assets/y1v9.jpg",
        epubSource: "/books/year1/v9.epub"
    },
    {
        id: "v10",
        volumeNumber: "Y1:V10",
        title: "Light Novel Volume 10",
        releaseDateJP: "Jan 25, 2019",
        releaseDateEN: "Feb 22, 2022",
        isbnJP: "978-4-04-065400-3",
        isbnEN: "978-1-64827-512-8",
        chapters: [
            "Prologue: Hirata Yōsuke’s Soliloquy",
            "Chapter 1: The Calm Before the Storm",
            "Chapter 2: In-Class Voting",
            "Chapter 3: The Difficulty of Saving",
            "Chapter 4: Older Brother and Younger Sister",
            "Chapter 5: Good and Evil",
            "Chapter 6: Other Classes’ Ideas",
            "Epilogue: The Expelled Students"
        ],
        characters: ["Miyabi Nagumo", "Nazuna Asahina"],
        coverImage: "/assets/y1v10.jpg",
        epubSource: "/books/year1/v10.epub"
    },
    {
        id: "v11",
        volumeNumber: "Y1:V11",
        title: "Light Novel Volume 11",
        releaseDateJP: "May 25, 2019",
        releaseDateEN: "May 17, 2022",
        isbnJP: "978-4-04-065664-9",
        isbnEN: "978-1-64827-622-4",
        chapters: [
            "Prologue: Sakayanagi Arisu’s Soliloquy",
            "Chapter 1: The Teachers’ Battle",
            "Chapter 2: The Final Battle of The First Year",
            "Chapter 3: Opponents",
            "Chapter 4: What the Class is Lacking",
            "Chapter 5: Traps, Home Cooking and a Favor",
            "Chapter 6: A Man’s Tears",
            "Chapter 7: Ayanōkoji VS Sakayanagi",
            "Chapter 8: Class B VS. Class D",
            "Epilogue: The Line Between Winner and Loser"
        ],
        characters: ["Mei-Yu Wang", "Rokusuke Kōenji"],
        coverImage: "/assets/y1v11.jpg",
        epubSource: "/books/year1/v11.epub"
    },
    {
        id: "v11.5",
        volumeNumber: "Y1:V11.5",
        title: "Light Novel Volume 11.5",
        releaseDateJP: "Sep 25, 2019",
        releaseDateEN: "Aug 9, 2022",
        isbnJP: "978-4-04-064052-5",
        isbnEN: "978-1-64827-775-7",
        chapters: [
            "Prologue: A Girl Peering at Herself in the Mirror",
            "Chapter 1: Graduation Ceremony",
            "Chapter 2: Hiyori Date",
            "Chapter 3: Lost Lamb",
            "Chapter 4: From Older Brother to Younger Sister",
            "Chapter 5: Matsushita’s Suspicions",
            "Epilogue: Adolescence About to Begin"
        ],
        characters: ["Honami Ichinose"],
        coverImage: "/assets/y1v11.5.jpg",
        epubSource: "/books/year1/v11.5.epub"
    }
];
