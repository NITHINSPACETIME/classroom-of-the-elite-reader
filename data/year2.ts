
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
    customChapters?: Record<number, string>;
    inProgress?: boolean;
}

export const volumes: VolumeData[] = [
    {
        id: "y2v1",
        volumeNumber: "Y2:V1",
        title: "Light Novel 2nd Year Volume 1",
        releaseDateJP: "Jan 24, 2020",
        releaseDateEN: "July 19, 2022",
        isbnJP: "978-4-04-064321-2",
        isbnEN: "978-1-64827-882-2",
        chapters: [
            "Prologue: Operating Behind the Scenes",
            "Chapter 1: True Ability",
            "Chapter 2: A New Stage",
            "Chapter 3: These New First-Years are Nothing But Troublemakers",
            "Chapter 4: Ichika’s Test",
            "Chapter 5: Class D and Class D",
            "Chapter 6: Expulsion Approaches",
            "Epilogue: A Deepening Mystery"
        ],
        characters: ["Kiyotaka Ayanokōji", "Tsubasa Nanase"],
        coverImage: "/assets/y2v1.jpg",
        epubSource: "/books/year2/y2v1.epub"
    },
    {
        id: "y2v2",
        volumeNumber: "Y2:V2",
        title: "Light Novel 2nd Year Volume 2",
        releaseDateJP: "Jun 25, 2020",
        releaseDateEN: "Oct 22, 2020",
        isbnJP: "978-4-04-064664-0",
        isbnEN: "978-1-6482-7323-0",
        chapters: [
            "Prologue: The White Room Student’s Soliloquy",
            "Chapter 1: Changing School Life",
            "Chapter 2: Days Passing By",
            "Chapter 3: Approaching Summer, Premonition of a Fierce Battle",
            "Chapter 4: Battle of the First-Years and Third-Years",
            "Chapter 5: Invitation",
            "Epilogue: The Calm Before the Storm"
        ],
        characters: ["Ichika Amasawa", "Kazuomi Hōsen"],
        coverImage: "/assets/y2v2.jpg",
        epubSource: "/books/year2/y2v2.epub"
    },
    {
        id: "y2v3",
        volumeNumber: "Y2:V3",
        title: "Light Novel 2nd Year Volume 3",
        releaseDateJP: "Oct 24, 2020",
        releaseDateEN: "Jan 21, 2021",
        isbnJP: "978-4-04-065942-8",
        isbnEN: "978-1-6482-7489-3",
        chapters: [
            "Prologue: Nanase Tsubasa’s Soliloquy",
            "Chapter 1: Everyone Has Their Own Strategies",
            "Chapter 2: The Curtain Rises on the Uninhabited Island Exam",
            "Chapter 3: Traveling Companion",
            "Chapter 4: What It Means to Like Someone",
            "Chapter 5: Unseen Enemy",
            "Chapter 6: The Aloof Child Prodigy of Class 2-D",
            "Chapter 7: The First-Years on the Move",
            "Chapter 8: Identity Revealed",
            "Epilogue: Seeds of Unrest"
        ],
        characters: ["Riku Utomiya", "Sakurako Tsubaki"],
        coverImage: "/assets/y2v3.jpg",
        epubSource: "/books/year2/y2v3.epub"
    },
    {
        id: "y2v4",
        volumeNumber: "Y2:V4",
        title: "Light Novel 2nd Year Volume 4",
        releaseDateJP: "Feb 25, 2021",
        releaseDateEN: "Jun 24, 2021",
        isbnJP: "978-4-04-680164-7",
        isbnEN: "978-1-6482-7933-1",
        chapters: [
            "Prologue: Amasawa Ichika’s Soliloquy",
            "Chapter 1: Secret Maneuvers",
            "Chapter 2: Just Keep Going and Keep Quiet",
            "Chapter 3: Fighting Against Solitude",
            "Chapter 4: Under Siege: Kōenji VS. The Free Groups",
            "Chapter 5: Each and Every Calculation",
            "Chapter 6: The Man Called Tsukishiro",
            "Epilogue: Announcement of the Results"
        ],
        characters: ["Takuya Yagami", "Fūka Kiryūin"],
        coverImage: "/assets/y2v4.jpg",
        epubSource: "/books/year2/y2v4.epub"
    },
    {
        id: "y2v4.5",
        volumeNumber: "Y2:V4.5",
        title: "Light Novel 2nd Year Volume 4.5",
        releaseDateJP: "Jun 25, 2021",
        releaseDateEN: "Oct 19, 2021",
        isbnJP: "978-4-04-680517-1",
        isbnEN: "978-1-6385-8332-5",
        chapters: [
            "Prologue: The Curtain Rises on a Fun Summer Vacation",
            "Chapter 1: Ike and Komiya and…",
            "Chapter 2: The Beginning of a Short-Lived Vacation",
            "Chapter 3: Everyone’s Holiday",
            "Chapter 4: Everyone’s Growth",
            "Chapter 5: A Treasure Hunt of Girl Troubles",
            "Chapter 6: A Connection to the Past",
            "Epilogue: When Hearts Touch"
        ],
        characters: ["Tsubasa Nanase"],
        coverImage: "/assets/y2v4.5.jpg",
        epubSource: "/books/year2/y2v4.5.epub"
    },
    {
        id: "y2v5",
        volumeNumber: "Y2:V5",
        title: "Light Novel 2nd Year Volume 5",
        releaseDateJP: "Oct 25, 2021",
        releaseDateEN: "Mar 22, 2022",
        isbnJP: "978-4-04-680846-2",
        isbnEN: "978-1-6385-8594-7",
        chapters: [
            "Prologue: Chabashira Sae’s Monologue",
            "Chapter 1: Signs of an Approaching Storm",
            "Chapter 2: Two Teachers and A Fated Special Exam",
            "Chapter 3: Dark Clouds",
            "Chapter 4: Ichinose Honami’s Choice",
            "Chapter 5: Ryūen Kakeru’s Choice",
            "Chapter 6: Sakayanagi Arisu’s Choice",
            "Chapter 7: Horikita Suzune’s Choice",
            "Epilogue: Farewell to the Past"
        ],
        characters: ["Maya Satō", "Chiaki Matsushita"],
        coverImage: "/assets/y2v5.jpg",
        epubSource: "/books/year2/y2v5.epub"
    },
    {
        id: "y2v6",
        volumeNumber: "Y2:V6",
        title: "Light Novel 2nd Year Volume 6",
        releaseDateJP: "Feb 25, 2022",
        releaseDateEN: "Jul 21, 2022",
        isbnJP: "978-4-04-681185-1",
        isbnEN: "978-1-6385-8968-6",
        chapters: [
            "Prologue: Akito Miyake’s Soliloquy",
            "Chapter 1: The Price of Victory",
            "Chapter 2: An Unavoidable Path",
            "Chapter 3: Still, We Gotta Do It!",
            "Chapter 4: An Arrangement",
            "Chapter 5: The Second Sports Festival",
            "Chapter 6: The Guest",
            "Epilogue: The Arrival of Autumn"
        ],
        characters: ["Kayano Onodera", "Ken Sudō"],
        coverImage: "/assets/y2v6.jpg",
        epubSource: "/books/year2/y2v6.epub"
    },
    {
        id: "y2v7",
        volumeNumber: "Y2:V7",
        title: "Light Novel 2nd Year Volume 7",
        releaseDateJP: "Jun 24, 2022",
        releaseDateEN: "Dec 6, 2022",
        isbnJP: "978-4-04-681477-7",
        isbnEN: "978-1-6857-9465-1",
        chapters: [
            "Prologue: Hasebe Haruka’s Soliloquy",
            "Chapter 1: Getting Ready for the Cultural Festival",
            "Chapter 2: The Signal Fire of Rebellion",
            "Chapter 3: A Love Letter",
            "Chapter 4: Meeting the Day Before the Cultural Festival",
            "Chapter 5: The Cultural Festival",
            "Chapter 6: What Airi Left Behind",
            "Chapter 7: Unseen Characters",
            "Epilogue: Those Working Behind the Scenes"
        ],
        characters: ["Ryūji Kanzaki", "Yuki Himeno"],
        coverImage: "/assets/y2v7.jpg",
        epubSource: "/books/year2/y2v7.epub"
    },
    {
        id: "y2v8",
        volumeNumber: "Y2:V8",
        title: "Light Novel 2nd Year Volume 8",
        releaseDateJP: "Oct 25, 2022",
        releaseDateEN: "Jul 18, 2023",
        isbnJP: "978-4-04-681833-1",
        isbnEN: "978-1-6857-9556-6",
        chapters: [
            "Prologue: Kanzaki Ryūji’s Soliloquy",
            "Chapter 1: Know Your Enemy, Know Yourself, and You Need Not Fear a Hundred Battles",
            "Chapter 2: Self-Explanatory School Trip",
            "Chapter 3: School Trip Day Two",
            "Chapter 4: School Trip Day Three",
            "Chapter 5: School Trip Day Four",
            "Epilogue: The Light Shining at the End of the Darkness"
        ],
        characters: ["Daichi Ishizaki", "Takeko Nishino"],
        coverImage: "/assets/y2v8.jpg",
        epubSource: "/books/year2/y2v8.epub"
    },
    {
        id: "v0",
        volumeNumber: "V0",
        title: "Light Novel Volume 0",
        releaseDateJP: "Dec 23, 2022",
        releaseDateEN: "-",
        isbnJP: "ZMXZ-15881",
        isbnEN: "-",
        chapters: [
            "Prologue: Atsuomi Ayanokōji’s Soliloquy",
            "Chapter 1: Project’s Inauguration",
            "Chapter 2: Efforts",
            "Chapter 3: Launch",
            "Chapter 4: The Unprecedented Experiment Facility",
            "Chapter 5: The Story of the Innocent Children",
            "Chapter 6: Hopelessness and a Way of Life",
            "Epilogue: Catching a Glimpse of the Future"
        ],
        characters: ["Arisu Sakayanagi", "Kiyotaka Ayanokōji"],
        coverImage: "/assets/y2v0.jpg",
        epubSource: "/books/year2/v0.epub"
    },
    {
        id: "y2v9",
        volumeNumber: "Y2:V9",
        title: "Light Novel 2nd Year Volume 9",
        releaseDateJP: "Feb 25, 2023",
        releaseDateEN: "Oct 24, 2023",
        isbnJP: "978-4-04-682213-0",
        isbnEN: "978-1-6857-9950-2",
        chapters: [
            "Prologue: Nagumo Miyabi’s Soliloquy",
            "Chapter 1: Signs of Momentum",
            "Chapter 2: A New Student Council Member",
            "Chapter 3: How to Spend Time with People in Ichinose's Class",
            "Chapter 4: How to Spend a Day Off",
            "Chapter 5: Approaching the Special Exam",
            "Chapter 6: The Expected and the Unexpected",
            "Epilogue: A Tinge of Anxiety"
        ],
        characters: ["Mako Amikura", "Norihito Watanabe"],
        coverImage: "/assets/y2v9.jpg",
        epubSource: "/books/year2/y2v9.epub"
    },
    {
        id: "y2v9.5",
        volumeNumber: "Y2:V9.5",
        title: "Light Novel 2nd Year Volume 9.5",
        releaseDateJP: "Jun 23, 2023",
        releaseDateEN: "Mar 19, 2024",
        isbnJP: "978-4-04-682566-7",
        isbnEN: "978-1-6385-8968-6",
        chapters: [
            "Prologue: My Irreplaceable Everyday Life",
            "Chapter 1: Song of Loneliness",
            "Chapter 2: A Little Premonition",
            "Chapter 3: Testing Each Other Out",
            "Chapter 4: Quiet Surfacing of Movement",
            "Chapter 5: The Remaining Time",
            "Epilogue: Changing Relationships"
        ],
        characters: ["Arisu Sakayanagi"],
        coverImage: "/assets/y2v9.5.jpg",
        epubSource: "/books/year2/y2v9.5.epub"
    },
    {
        id: "y2v10",
        volumeNumber: "Y2:V10",
        title: "Light Novel 2nd Year Volume 10",
        releaseDateJP: "Oct 25, 2023",
        releaseDateEN: "-",
        isbnJP: "978-4-04-682985-6",
        isbnEN: "-",
        chapters: [
            "Prologue: Masayoshi Hashimoto’s Soliloquy",
            "Chapter 1: The Beginning of the 2nd Years' 3rd Semester",
            "Chapter 2: The Survival and Elimination Special Exam",
            "Chapter 3: The Identity of the Messenger",
            "Chapter 4: Advice",
            "Chapter 5: Game Changer",
            "Chapter 6: The Rectangle of Attack and Defence",
            "Chapter 7: New Expulsion",
            "Epilogue: The Prelude of Awakening"
        ],
        characters: ["Miki Yamamura", "Hayato Kitō"],
        coverImage: "/assets/y2v10.jpg",
        epubSource: "/books/year2/y2v10.epub"
    },
    {
        id: "y2v11",
        volumeNumber: "Y2:V11",
        title: "Light Novel 2nd Year Volume 11",
        releaseDateJP: "Feb 24, 2024",
        releaseDateEN: "-",
        isbnJP: "978-4-04-683349-5",
        isbnEN: "-",
        chapters: [
            "Prologue: Miki Yamamura’s Monologue",
            "Chapter 1: One-on-one Interview with Elements Hidden in Plain Sight",
            "Chapter 2: Networking Training Camp",
            "Chapter 3: A Request from Horikita & A Request from Ayanokōji",
            "Chapter 4: An Unsettling Feeling of Discomfort",
            "Chapter 5: The One Who Watches, The One Being Watched",
            "Chapter 6: A Peaceful Resolution",
            "Chapter 7: A Drowsy Night",
            "Chapter 8: The Courage to Move Forward",
            "Epilogue: Who is the Challenger?"
        ],
        characters: ["Ai Morishita", "Kōsei Sanada"],
        coverImage: "/assets/y2v11.jpg",
        epubSource: "/books/year2/y2v11.epub"
    },
    {
        id: "y2v12",
        volumeNumber: "Y2:V12",
        title: "Light Novel 2nd Year Volume 12",
        releaseDateJP: "Jul 25, 2024",
        releaseDateEN: "-",
        isbnJP: "978-4-04-683790-5",
        isbnEN: "-",
        chapters: [
            "Prologue: Chie Hoshinomiya’s Soliloquy",
            "Chapter 1: An Unusual End-of-Year Special Exam",
            "Chapter 2: Things That Should Be Concluded",
            "Chapter 3: End-of-Year Special Exam, Opening",
            "Chapter 4: The Battle of the Vanguards",
            "Chapter 5: Katsuragi’s Counterattack",
            "Chapter 6: Tears of Frustration",
            "Chapter 7: Ayanokōji’s Strategy",
            "Chapter 8: The Awaited Person",
            "Epilogue: The Truth Is——"
        ],
        characters: ["Sae Chabashira", "Chie Hoshinomiya"],
        coverImage: "/assets/y2v12.jpg",
        epubSource: "/books/year2/y2v12.epub"
    },
    {
        id: "y2v12.5",
        volumeNumber: "Y2:V12.5",
        title: "Light Novel 2nd Year Volume 12.5",
        releaseDateJP: "Nov 25, 2024",
        releaseDateEN: "-",
        isbnJP: "978-4-04-684244-2",
        isbnEN: "-",
        chapters: [
            "Prologue: Behind the Curtain",
            "Chapter 1: Checking Each Answer",
            "Chapter 2: Another Time",
            "Chapter 3: Vacant Throne",
            "Chapter 4: Anticipating",
            "Chapter 5: Illusion",
            "Chapter 6: Even After Graduation",
            "Chapter 7: Parent and Child, Child and Parent",
            "Chapter 8: Celebration",
            "Chapter 9: The Promised Night",
            "Chapter 10: Goals",
            "Epilogue: The Curtain Rises Once Again"
        ],
        characters: ["Hiyori Shiina"],
        coverImage: "/assets/y2v12.5.jpg",
        epubSource: "/books/year2/y2v12.5.epub"
    }
];

export const shortStories: VolumeData[] = [
    {
        id: "ss-y2-v1",
        volumeNumber: "SS",
        title: "Short Stories: Volume 1",
        releaseDateJP: "Jan 24, 2020",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Tsubasa Nanase : What is Reflected in Nanase's Eyes",
            "Kei Karuizawa : A Time for Them Alone",
            "Suzune Horikita : What's the Fuss About My Hair",
            "Tsubasa Nanase : Voice of the Heart",
            "Kiyotaka Ayanokōji : Auction ✕ Seat Change / Year 2 Volume 1.05"
        ],
        characters: ["Tsubasa Nanase", "Kei Karuizawa", "Suzune Horikita", "Kiyotaka Ayanokōji"],
        coverImage: "/assets/y2v1.jpg",
        inProgress: true,
    },
    {
        id: "ss-y2-v2",
        volumeNumber: "SS",
        title: "Short Stories: Volume 2",
        releaseDateJP: "Jun 25, 2020",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Ichika Amasawa : What is Reflected in Ichika Amasawa's Eyes",
            "Suzune Horikita : He Who Stands Beside Me",
            "Hiyori Shiina : An Excuse",
            "Sakurako Tsubaki : What Could Be Seen From That Back",
            "Kei Karuizawa : Trial Date"
        ],
        characters: ["Ichika Amasawa", "Suzune Horikita", "Hiyori Shiina", "Sakurako Tsubaki", "Kei Karuizawa"],
        coverImage: "/assets/y2v2.jpg",
        inProgress: true,
    },
    {
        id: "ss-y2-v3",
        volumeNumber: "SS",
        title: "Short Stories: Volume 3",
        releaseDateJP: "Oct 24, 2020",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Arisu Sakayanagi : An Enjoyable Moment",
            "Tsubasa Nanase : Unfathomable",
            "Suzune Horikita : A Brief Farewell",
            "Tsubasa Nanase : What Could Be Seen From That Back"
        ],
        characters: ["Arisu Sakayanagi", "Tsubasa Nanase", "Suzune Horikita"],
        coverImage: "/assets/y2v3.jpg",
        inProgress: true,
    },
    {
        id: "ss-y2-v4",
        volumeNumber: "SS",
        title: "Short Stories: Volume 4",
        releaseDateJP: "Feb 25, 2021",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Hiyori Shiina : Beneath a Scarlet Sky",
            "Fūka Kiryūin : Poker Face",
            "Mio Ibuki : No Reason to It",
            "Honami Ichinose : Something I Have to Tell You"
        ],
        characters: ["Hiyori Shiina", "Fūka Kiryūin", "Mio Ibuki", "Honami Ichinose"],
        coverImage: "/assets/y2v4.jpg",
        inProgress: true,
    },
    {
        id: "ss-y2-v4.5",
        volumeNumber: "SS",
        title: "Short Stories: Volume 4.5",
        releaseDateJP: "Jun 25, 2021",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Tsubasa Nanase : A Double-sided Favour Repayment",
            "Maya Satō : A Slightly Bad Girl",
            "Fūka Kiryūin : To Be the Older One",
            "Kei Karuizawa : A Dream I Have Seen Before",
            "Arisu Sakayanagi : Sakayanagi's Unexpected Assessment"
        ],
        characters: ["Tsubasa Nanase", "Maya Satō", "Fūka Kiryūin", "Kei Karuizawa", "Arisu Sakayanagi"],
        coverImage: "/assets/y2v4.5.jpg",
        inProgress: true,
    },
    {
        id: "ss-y2-v5",
        volumeNumber: "SS",
        title: "Short Stories: Volume 5",
        releaseDateJP: "Oct 25, 2021",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Kei Karuizawa : Reading the Mood",
            "Haruka Hasebe : Facing Tomorrow",
            "Sae Chabashira : A Restless Mind",
            "During Standby"
        ],
        characters: ["Kei Karuizawa", "Haruka Hasebe", "Sae Chabashira"],
        coverImage: "/assets/y2v5.jpg",
        inProgress: true,
    },
    {
        id: "ss-y2-v6",
        volumeNumber: "SS",
        title: "Short Stories: Volume 6",
        releaseDateJP: "Feb 25, 2022",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Sae Chabashira : Something That Can’t be Forgiven",
            "Arisu Sakayanagi : Complicated Feelings",
            "Kayano Onodera : That’s What I Believe In",
            "Ichika Amasawa : The Truth is, I’ve Always"
        ],
        characters: ["Sae Chabashira", "Arisu Sakayanagi", "Kayano Onodera", "Ichika Amasawa"],
        coverImage: "/assets/y2v6.jpg",
        inProgress: true,
    },
    {
        id: "ss-y2-v7",
        volumeNumber: "SS",
        title: "Short Stories: Volume 7",
        releaseDateJP: "Jun 24, 2022",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Hiyori Shiina : Sprouting Feelings",
            "Kikyō Kushida : Way to Survival",
            "Suzune Horikita : The Dream I Will Forget After Awakening",
            "Sae Chabashira : An Experience I Want to Forget",
            "Kiyotaka Ayanokōji : Behind the Scenes"
        ],
        characters: ["Hiyori Shiina", "Kikyō Kushida", "Suzune Horikita", "Sae Chabashira", "Kiyotaka Ayanokōji"],
        coverImage: "/assets/y2v7.jpg",
        inProgress: true,
    },
    {
        id: "ss-y2-v8",
        volumeNumber: "SS",
        title: "Short Stories: Volume 8",
        releaseDateJP: "Oct 25, 2022",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Miki Yamamura : A Subtle Change",
            "Kikyō Kushida : A Certain Lapse of Judgment",
            "Sae Chabashira : Confused but Resolute",
            "Suzune Horikita : In the Changing Room",
            "Maya Satō : In a Corner of the Front Stage"
        ],
        characters: ["Miki Yamamura", "Kikyō Kushida", "Sae Chabashira", "Suzune Horikita", "Maya Satō"],
        coverImage: "/assets/y2v8.jpg",
        inProgress: true,
    },
    {
        id: "ss-y2-v9",
        volumeNumber: "SS",
        title: "Short Stories: Volume 9",
        releaseDateJP: "Feb 25, 2023",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Yuki Himeno : A Certain Boy I Don’t Really Understand",
            "Honami Ichinose : Jealousy",
            "Kikyō Kushida : Like Hell I Will Join",
            "Honami Ichinose : I Have to Move Forward"
        ],
        characters: ["Yuki Himeno", "Honami Ichinose", "Kikyō Kushida"],
        coverImage: "/assets/y2v9.jpg",
        inProgress: true,
    },
    {
        id: "ss-y2-v9.5",
        volumeNumber: "SS",
        title: "Short Stories: Volume 9.5",
        releaseDateJP: "Jun 23, 2023",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Masumi Kamuro : Because I Hate It",
            "Hiyori Shiina : What I Want You To Know",
            "Miki Yamamura : The Person That Can Find Me",
            "Arisu Sakayanagi : Emotional Control",
            "Kiyotaka Ayanokōji : An Adult-ish Special Lesson",
            "Kiyotaka Ayanokōji : The First Discordant Sounds of the New Year / Year 2 Volume 9.75"
        ],
        characters: ["Masumi Kamuro", "Hiyori Shiina", "Miki Yamamura", "Arisu Sakayanagi", "Kiyotaka Ayanokōji"],
        coverImage: "/assets/y2v9.5.jpg",
        inProgress: true,
    },
    {
        id: "ss-y2-v10",
        volumeNumber: "SS",
        title: "Short Stories: Volume 10",
        releaseDateJP: "Oct 25, 2023",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Suzune Horikita : Unconcious Awakening",
            "Hiyori Shiina : A Small Spark",
            "Ai Morishita : Atop the Cold Bench",
            "Arisu Sakayanagi : Feeling of Melancholy",
            "Kiyotaka Ayanokōji : Ever Since That Time... / Year 2 Volume 10.25"
        ],
        characters: ["Suzune Horikita", "Hiyori Shiina", "Ai Morishita", "Arisu Sakayanagi", "Kiyotaka Ayanokōji"],
        coverImage: "/assets/y2v10.jpg",
        inProgress: true,
    },
    {
        id: "ss-y2-v11",
        volumeNumber: "SS",
        title: "Short Stories: Volume 11",
        releaseDateJP: "Feb 24, 2024",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Sae Chabashira : The Student Before Me",
            "Hiyori Shiina : Memories I Don't Want to Forget",
            "Ai Morishita : Please Listen In My Stead"
        ],
        characters: ["Sae Chabashira", "Hiyori Shiina", "Ai Morishita"],
        coverImage: "/assets/y2v11.jpg",
        inProgress: true,
    },
    {
        id: "ss-y2-v12",
        volumeNumber: "SS",
        title: "Short Stories: Volume 12",
        releaseDateJP: "Jul 25, 2024",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Kakeru Ryūen : True Intentions",
            "Suzune Horikita : The Everyday I’ve Become Familiar With",
            "Arisu Sakayanagi : Wavelength",
            "Honami Ichinose : The Approaching Promise"
        ],
        characters: ["Kakeru Ryūen", "Suzune Horikita", "Arisu Sakayanagi", "Honami Ichinose"],
        coverImage: "/assets/y2v12.jpg",
        inProgress: true,
    },
    {
        id: "ss-y2-v12.5",
        volumeNumber: "SS",
        title: "Short Stories: Volume 12.5",
        releaseDateJP: "Nov 25, 2024",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Hiyori Shiina : Friend?",
            "Honami Ichinose : The Other Side of the Promise",
            "What is Really Being Observed",
            "Sae Chabashira : How Long Has It Been...",
            "First Contact",
            "Behind the Scenes"
        ],
        characters: ["Hiyori Shiina", "Honami Ichinose", "Sae Chabashira"],
        coverImage: "/assets/y2v12.5.jpg",
        inProgress: true,
    }
];
