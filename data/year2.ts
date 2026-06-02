
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
            "Chapter 8 - Epilogue : A Tinge of Anxiety"
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
            "Epilogue: Who is the Challenger?",
            "Postscript"
        ],
        characters: ["Ai Morishita", "Kōsei Sanada"],
        coverImage: "/assets/y2v11.jpg",
        epubSource: "/books/year2/y2v11.epub",
        inProgress: false
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
        inProgress: false,

        customChapters: {
            1: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">What is Reflected in Nanase's Eyes</h1>
<p class="text-center text-sm text-gray-500 mb-12">Tsubasa Nanase SS — 2nd Year Volume 1</p>

<p>After leaving the dorm, I glanze at the wave of students coming and going for some time.</p>
<p>Students from all the years are inhabitating the same grounds at this school.</p>
<p>There are no adults nor children to be seen. I was yet again reminded how special this environment is.</p>
<p>Will it be possible to live a calm and relaxed life here, I wonder?</p>
<p>But it is certainly an unknown environment that I’ve never encountered in my life thus far.</p>
<p>I’d wanted to enjoy the scenery that was spreading out beyond me forever, but that wasn’t meant to be.</p>
<p>That’s because I spotted Ayanokouji-senpai.</p>
<p>He surely won’t notice me at this distance I suppose.</p>
<p>Plus, he seems to be focusing on two students from class 1-A walking in front of him.</p>
<p>I think those two already have partners so he was perhaps worrying about whether to ask them for help.</p>
<p>Ignoring him getting any closer to Class 1-A wouldn’t be a merit.</p>
<p>I start running, closing the distance before matching Ayanokouji-senpai’s pace.</p>
<p>«Good morning, Ayanokouji-senpai.»</p>
<p>I call out to him in a natural way and make him notice me.</p>
<p>I definitely think I managed a perfect smile.</p>
<p>«Ah, good morning.»</p>
<p>He seems bewildered when I enter the scene, perhaps because he wasn’t expecting it seems.</p>
<p>«Do you have any business with those two in front? Shall I call them out for you?»</p>
<p>I knew he would reject the offer, but I still suggested it anyway.</p>
<p>«No, it’s okay.»</p>
<p>«Really?»</p>
<p>I begin to walk beside him after getting the answer I was expecting.</p>
<p>But, how shall I say it? Ayanokouji-senpai’s presence is unusually peculiar.</p>
<p>Rather than calling it thin, it would be better to call it an absentminded sharpened blade.</p>
<p>It made me feel like just lightly touching it with a finger was enough to give you a deep wound…that kind of existence.</p>
<p>But that’s perhaps why he was a special person.</p>
<p>Good or evil. Which of them we was, is the only thing important to me.</p>
<p>«I’m sorry for how rude Housen was</p>
<p>the other day.»</p>
<p>«No, I wasn’t directly harmed in any way so you don’t need to apologise.»</p>
<p>«But there’s no lie to say he troubled you. I’m following him to stop him from doing those kind of things, but… how shall I say it? Not being able to to anything is painful…»</p>
<p>I will force him to deepen his relationship with class 1-D by actively getting him involved.</p>
<p>Depending on how it goes, he may possibly seek out my cooperation to become his partner.</p>
<p>No… that possibility is close to 0 for the moment.</p>
<p>He is only an unknown existance for me as of now.</p>
<p>My thoughts regarding him and how accurate those are were, are just speculation on my end.</p>
<p>Anyway, to prevent myself from acting any more unnatural, I continued my act.</p>
<p>By doing that he should call out to me in due time.</p>
<p>«Have you decided on any candidates to be your partner for this special exam?»</p>
<p>He avoided asking directly while taking the first step towards me.</p>
<p>If he really is a special person, he would have grasped my situation from the OAA app already.</p>
<p>«Me you mean? I haven’t decided yet.»</p>
<p>«Well, but you have been asked, right?»</p>
<p>This conversation is just a formality.</p>
<p>«I suppose so. I’ve been asked by some upperclassmen from class 2-A and 2-D more or less.»</p>
<p>«Any reasons for not answering them?»</p>
<p>Why am I not answering them?</p>
<p>That’s just because that’s the direction I’m going for. That’s the only thing I could answer with…</p>
<p>«I’m sorry, but I can’t answer that.»</p>
<p>There is of course, no way I can tell him that at this point in time.</p>
<p>«Not answering a question you don’t want to be asked is the right choice, no need to apologise.»</p>
<p>He seems to know that I can’t answer him from the very beginning.</p>
<p>«It it’s okay for you, how about joining forces between our classes and find suiting partners between us?»</p>
<p>And then he made a drastic proposition towards me.</p>
<p>«You mean to cooperate…right?»</p>
<p>But that’s what I had wanted in the first place.</p>
<p>If he hadn’t suggested it, I would have done it instead.</p>
<p>So that means my first contact with him probably is a success.</p>
<p>I looked at Ayanokouji-senpai, while deeply in my thoughts. His image reflected in my eyes.</p>
<p>—You can’t judge people by their apperances.</p>
<p>That’s a sentiment I hold strongly.</p>`,
            2: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">A Time for Them Alone</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kei Karuizawa SS — 2nd Year Volume 1</p>

<p>It was Friday evening. I had gone to my boyfriend’s room to play. As if… we were going to study.</p>
<p>Usually this kind of things tend to lead to something romantic, but the chances of it happening was zilch.</p>
<p>It’s a pity that it felt like an extension of school however.</p>
<p>But I wasn’t that sad. It was precious alone time with him after all.</p>
<p>Being who I am, I asked him a bit about himself.</p>
<p>«By the way, there’s something I’ve been wondering ‘bout.»</p>
<p>«What is it?»</p>
<p>«I know you are teaching me and such, but aren’t you supposed to be ranked at C for academics? That’s so normal if you know what I mean? The truth is… you could have gotten something better, isn’t that right?»</p>
<p>«That’s how it is.»</p>
<p>I already knew he was pretty smart already.</p>
<p>I just didn’t know how smart he was.</p>
<p>If he was at studying, being open about it would make people look at him more favourably I think.</p>
<p>«Your fighting I can understand, but why are you trying to hide everything else so much?»</p>
<p>«I don’t want to stand out, so I don’t see the need to take a better score.»</p>
<p>That seems like something he would say.</p>
<p>By how he’s been so quiet up until now, that seems understandable.</p>
<p>«Hey hey, how much could you get if you got serious?»</p>
<p>«Who knows.»</p>
<p>Who knows, he said? I instinctively revealed a smile due to how cool and serious he looked.</p>
<p>«Don’t try to hide it, tell me~?»</p>
<p>Something only I had heard, something he only told me.</p>
<p>That’s special… yes, something between couples.</p>
<p>It can’t be helped, he seemed to think while I was pestering him so he came up with this suggestion.</p>
<p>«If you show up at the study group from tomorrow on, I don’t mind telling you.»</p>
<p>I had been invited to the study group that was managed by Horikita-san a few times already.</p>
<p>I have always managed to avoid them until now. But it’s true, even I knew I needed to study.</p>
<p>«I will, I will! I realised just how bad it’s for me today!»</p>
<p>Yes, if I got a failing mark at any special exams now, I would be expelled.</p>
<p>I refuse to get expelled just after going out with him.</p>
<p>Finally realising how serious I was, he revealed it to me.</p>
<p>«Let’s leave aside how many points I could get. I’m wondering how many to get.»</p>
<p>«W-what’s that supposed to mean? It’s kinda sounds awesome, the way you’re putting it.»</p>
<p>The surprising part wasn’t that he said how many points he wanted to take, or how many he could manage. That was made it so impressive.</p>
<p>«400 points.»</p>
<p>The amount he casually said he would take would be a pipe dream if I had said the same.</p>
<p>«…You serious? If I remember right, 400 points would be…»</p>
<p>I tried to remember what Chabashira-sensei had explained.</p>
<p>«A in Academics.»</p>
<p>«Y-you think just wishing for it somehow makes it possible?»</p>
<p>You normally wouldn’t get that many points just by merely studying.</p>
<p>In other words, he was saying that he could compete with Yukimura as of now too?</p>
<p>«It comes natural to me and I haven’t encountered any problems I thought I couldn’t solve since I entered this school.»</p>
<p>I’m done. I can’t follow what he is saying…really. He’s so awesome.</p>
<p>So that means, it may be weird, but what he is saying is basically that he can control how many points he get?</p>
<p>A-and, doesn’t it sound like he could archieve full score if he decided to get serious?…</p>
<p>But his answer was so unrealistic that I couldn’t keep up with him.</p>
<p>I don’t think I’m lying when I say that my face probably looked like I was in the clouds right now.</p>
<p>«It’s because I can see everything that I know the risks and want you to focus.»</p>
<p>At any rate, I should listen to his warning since since he’s so impressive.</p>
<p>But it’s true that my heart wasn’t leaping out of joy by the idea of studying with Horikita and the rest.</p>
<p>«Well… maybe I should study a bit before I leave…»</p>
<p>Yes, I think I can do my best if it’s together with my boyfriend.</p>
<p>«I see. Then let’s start at once.»</p>
<p>He easily agreed to my modest wish.</p>
<p>I became more positive by seeing his appearance in front of me as he opened the notes and instructed me.</p>
<p>«Here, here.»</p>
<p>«Hmm?»</p>
<p>If that’s the case, better to sit side-by-side instead of facing one another.</p>
<p>I tapped the spot beside me, welcoming him to come over.</p>
<p>«Teach me from here, then»</p>
<p>He didn’t reject me, and slowly went over and sat down beside me.</p>
<p>It was if a gentle breeze had taken his scent along with it.</p>
<p>I became so happy that I for a moment didn’t care about studying at all. But I took the reins once again and focused.</p>
<p>In order to spend a fun school life with Kiyotaka.</p>`,
            3: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">What's the Fuss About My Hair</h1>
<p class="text-center text-sm text-gray-500 mb-12">Suzune Horikita SS — 2nd Year Volume 1</p>

<p>It’s been a long chain of unfortunate events after I left my house this morning.</p>
<p>When people I know notice me, they look at my hair in surprise. Then they start whispering between themselves.</p>
<p>Everyone’s cutting their hair or letting it grow.</p>
<p>It shouldn’t be a big deal.</p>
<p>But it was still fine with people from other classes.</p>
<p>The problem was this. When I entered the classroom, all my classmates had an even bigger reaction.</p>
<p>«S-Suzune…? You, eh, hair… what happened to your hair!?»</p>
<p>Sudou-kun, who was merrily talking with Ike-kun and the others, looked at me and raised his voice.</p>
<p>The students who hadn’t noticed me yet thus also directed their glances at me.</p>
<p>It was also the same for Kushida-san, who despised me.</p>
<p>«Horikita-san, you really went through a total image change… what a surprise.»</p>
<p>«Is it that weird to change my hairstyle?»</p>
<p>I tried asking Sudou-kun who seemingly had the strongest opinions about it.</p>
<p>«N-no well, it’s not weird, it’s just, it just surprised me… you just changed your image with that hair… well, it’s not that it doesn’t suit you or anything. Short hair is fine too, you know. R-right? Kushida?»</p>
<p>Cutting your hair leads to a change in your image.</p>
<p>That’s certainly true after all.</p>
<p>«It, sure does. I think it suits you. But… has something happened?»</p>
<p>It seems Kushida-san was more interested in why I cut my hair rather than my change of image itself.</p>
<p>I’m not sure I can use this as reference for later, but I’ll remember it just in case.</p>
<p>«What do ya’ mean, something happened?»</p>
<p>«For example… unrequited love?»</p>
<p>«U-u-u-unrequited love!?»</p>
<p>It was to show my resolution to separate the me from the past with the me from now, I’m not heartbroken in the slightest.</p>
<p>They made such a bad guess that I had to refute it at once.</p>
<p>«It’s more like showing my resolution if I have to say it.»</p>
<p>The biggest reason is because I don’t want my best memory of my brother tainted with descriptions such as unrequited love.</p>
<p>«I-is that so, yeah, no way you’re heartbroken, yeah?»</p>
<p>«We are 2nd years now so we shall soon have to fight to raise our class up. That’s why, I want to do all the things I possibly can do.»</p>
<p>Yes. I… want to become a person who can support everyone in my class.</p>
<p>And then we shall reach Class A—.</p>
<p>I lightly stroked my short, flowing hair while once again hardening my will in my heart.</p>`,
            4: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Voice of the Heart</h1>
<p class="text-center text-sm text-gray-500 mb-12">Tsubasa Nanase SS — 2nd Year Volume 1</p>

<p>«Horikita-senpai sure is busy.» I muttered as I saw her leave the library.</p>
<p>«That’s part of her work to hold the class together after all.»</p>
<p>«I wish I can become someone as splendid as her too, by next year…»</p>
<p>«Horikita didn’t ask you in detail about this but, how are you going to convince Housen?»</p>
<p>That amounts to nothing more than a small detail to me. But this may be my chance since Horikita-senpai isn’t here.</p>
<p>«That… I don’t have a problem answering that question but only if, if you can tell me about you.»</p>
<p>«About me?»</p>
<p>«Horikita-senpai is the leader of your class. You aren’t anything like that, right?»</p>
<p>«What— kind of person are you, senpai?»</p>
<p>I wasn’t even aware of it. I asked him this question without thinking at all. I’d be better if I’d stopped right here, but I still continued, willpower in every word I said as he looked at me in silence.</p>
<p>«Will you tell me?»</p>
<p>About what I wanted to know. What kind of person are you?</p>
<p>I started to think I’d asked him in a wrong way somehow and that he hadn’t understood me…</p>
<p>«What you want to know isn’t about her relationship with me, it seems.»</p>
<p>He replied as if he’d understood everything I wanted to ask. I can’t stand back after coming this far.</p>
<p>It may be a bit reckless of me, but I may get the answer I just had to know.</p>
<p>«Yes, I think perhaps you may be a wicked and filthy human being after all, Ayanokouji-senpai.»</p>
<p>It would be natural for him to get angry. But he listened to me. Not even a twitch of his eyebrows. As if he was trying to read behind my words.</p>
<p>But I’d managed to calm myself at this point.</p>
<p>I told myself that it was way too early for me to hope for results at this point in time. We’d just met after all.</p>
<p>«As far as I can see, you look like a regular human being, Ayanokouji-senpai.»</p>
<p>«So, does that mean you see me as someone who is not?»</p>
<p>«…no. That’s not it.»</p>
<p>I thought I’d come too close so I decided to retreat. Anything I hastily tell him now will only be a demerit to me. I know.</p>
<p>«I’m sorry, please forget I said anything. What’s important now is whether we can reach some understanding and cooperate between our classes.»</p>
<p>I’d expected him to pursue the topic, but he didn’t.</p>
<p>Was it because he’d understood everything I’d wanted to ask? Or is it…</p>`,
            5: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Auction ✕ Seat Change / Year 2 Volume 1.05</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kiyotaka Ayanokōji SS — 2nd Year Volume 1</p>

<p>"Auction ✕ Seat Change" (駆け引き✕席替えで, Kakehiki ✕ Sekigae), labelled 2nd Year Volume 1.05, is a short story released as the appendix booklet for Monthly Comic Alive February 2022 issue.</p>
<p>In the aftermath of the Unanimous Vote Special Exam, Kiyotaka reflects on how we often take things for granted until they're gone. This notion applies not only to people but also to material possessions, like a desk left empty after a student's expulsion. The emptiness serves as a reminder of events that transpired shortly after the school's opening ceremony.</p>
<p>In April, Chabashira informs the students that, now that they've entered their second year, they must change their seats. Some students are excited about this change, while others were less enthusiastic. Kiyotaka had initially assumed they would keep the same seats for all three years, but that was not the case.</p>
<p>Chabashira reveals a new seating method involving a table with 40 seats arranged in 5 columns and 8 rows. One seat in the back will remain empty due to there being only 39 students. Kiyotaka was intrigued by the term "unpopular" used by Chabashira, as well as the "pr" abbreviation next to each seat number. It was revealed that each seat had a starting price in private points displayed next to it, with seats near the window or corridor being more expensive, and prices decreasing further into the room. This unique seating arrangement introduces a competitive aspect to seat selection, with students needing to spend private points to secure their desired spots.</p>
<p>Following Chabashira's explanation of the seat selection process, it became clear that bids will begin with seat 1, and the student with the highest bid at that time will secure the seat. If no one bids on a seat, a second round will occur, with the seat's price reduced by half. There will be no third round. Students who haven't chosen a seat by then will enter a lottery for the remaining seats without any cost. Kiyotaka ponders the advantages and disadvantages of bidding in the first or second round. Waiting for the second round might be cheaper, but many students could have the same idea, leading to fierce competition. Bidding in the first round could secure a seat early but could also be risky depending on external factors.</p>
<p>Chabashira emphasizes that once a seat is chosen, it cannot be changed. Kiyotaka inquires about Suzune's seat preference, to which she responds that she won't spend private points on a seat. The auction begins with the first seat, priced at 45,000 private points. No students bid on it initially, likely due to its high cost. Kiyotaka realizes that while affordability is crucial, being close to friends might be even more important. He observes Sudō's desire to sit next to Suzune, regardless of the seat's price. Since Suzune doesn't intend to spend money on a seat, Sudō's only hope is the random assignment.</p>
<p>During the auction, the first seat, despite its proximity to the window, generated no interest from the students. Maezono asked Chabashira if they could consult with their friends before bidding, but her request was denied since pre-reserving seats would defeat the purpose of the auction. However, she allowed them to communicate through text messages. Many girls began texting immediately, with the boys following suit later. Unfortunately, no one placed a bid for the first seat within the allotted time, prompting Chabashira to move on to the next seat.</p>
<p>As the auction for the second seat began, Haruka messaged the entire Ayanokōji Group, proposing that they sit together. Keisei agreed to the idea, and Haruka suggested a group of six seats in the lower left corner, avoiding those attached to the window and the back row. Akito had a different preference but decided to go along with his friends. No one opposed the plan, and Haruka offered to purchase seat 15, the most expensive seat in their proposed group. However, Kiyotaka believed it would be challenging to realize their plan since other groups also wanted to sit together.</p>
<p>During the auction, seats 5, 6, and 7 were overlooked, but when seat 8 was up for bidding, four students—Sotumura, Okitani, Miyamoto, and Onodera—raised their hands. Chabashira encouraged them to place their highest bids, and after the bidding ended, Miyamoto secured seat 8 by paying 100,001 private points. Following Miyamoto's victory, a group of girls successfully claimed seats 10 to 12, and Keisei easily obtained seat 13 for 4,500 points, one of the Ayanokōji group's targets. Akito secured the next seat.</p>
<p>When the bidding for seat 15 began, Haruka and Ike both raised their hands, with Haruka winning the seat for 30,000 points. This left Kiyotaka and Sakura as the last ones to secure their seats.</p>
<p>The professor then secured seat 16 for himself, while Mii-chan got seat 19 without any competition since there were no bids for seats 17 and 18. The bidding for the cheapest seat, number 20, started at 1,000 points. Kiyotaka speculated that, if points were scarce, some students might prefer to wait for random seat assignments rather than pay even 1,000 points. Surprisingly, Hirata was the only one who desired seat 20, which raised the value of nearby seats.</p>
<p>In the auction for seat 21, Kushida unexpectedly raised her hand. Some girls had initially planned to compete with her but refrained from doing so, having previously decided on their seats through text messages. Kiyotaka observed that with the two most popular students sitting in the middle, the value of seats in the center of the class might change. Since middle seats were less popular initially, randomly assigning them could lead to class complaints, something Hirata wouldn't allow. This way, both Hirata and Kushida contributed to class harmony, and it appeared that Mii-chan had anticipated Hirata's actions by choosing seat 19 in advance.</p>
<p>Continuing with the auction, seat 22 was the next to be auctioned, and Kiyotaka raised his hand to bid. Ike also raised his hand, eager to sit behind Kushida. Despite Shinohara's disapproving look, Ike remained unfazed and declared that he wouldn't lose to Kiyotaka. This made it challenging for Kiyotaka to place a high bid, as it could be misinterpreted. Eventually, Kiyotaka offered 10,500 private points for seat 22, which initially cost 2,500 points. However, Ike won the seat with a bid of 30,000 points.</p>
<p>Sakura, panicked by this unexpected turn, sought guidance from Haruka through messages. Haruka advised her to stick to the plan. Although Kiyotaka couldn't secure seat 22, Sakura decided to bid for the next available seat, which was directly behind Ike. Since nobody else bid for it, Sakura obtained seat 23.</p>
<p>Kōenji claimed seat 24, leaving Kiyotaka unsure about his choice. He could sit next to Sakura but would be separated from the other members of their group. His friends offered to help cover the points needed, but he declined, emphasizing the importance of saving those points for interclass competition.</p>
<p>While contemplating his options, Kiyotaka remembered that Karuizawa had asked about his seat choice, and they had agreed to keep their relationship a secret. A message from Karuizawa appeared on his phone, as she likely noticed he was trying to sit closer to his group. She asked for his seat information, and Kiyotaka replied that he didn't want a central seat. He suggested that seat 40 would be acceptable, and Karuizawa agreed with his choice.</p>
<p>The first round of the auction concluded, and the second round began. Interestingly, the seats near the window, which were initially unappealing, now seemed to gain popularity. Chabashira allowed about 5 seconds for bidding on each seat before moving to the next one. Kiyotaka had a strategy to raise his hand at the 4-second mark to avoid competitors. However, this strategy failed for seat 5, initially priced at 20,000 private points but sold for 70,000 points, and for seat 6, priced at 254,000 points but sold for 80,000 points. Despite Kiyotaka's bid of 100,000 points for seat 7, Ijūin outbid him with 115,000 points.</p>
<p>Kiyotaka apologized to his group for not securing a seat, but they reassured him that it was okay, considering Kushida's unexpected choice. In the current situation, he couldn't sit with his group even if he wanted to. Therefore, he asked for their input to choose a seat he wouldn't regret later, and the group unanimously agreed.</p>
<p>Interestingly, no one bid on seat 40, allowing Kiyotaka to easily secure it by paying 20,000 points.</p>
<p>At the end of the second round, only seats 17, 25, 32, and 37 remained unclaimed. Those who had not selected seats included Sudō, Suzune, and Okitani. Chabashira announced that seat 32 would be kept vacant, and the students who had not chosen seats would participate in a lottery to determine their seat assignments. Sudō, Suzune, and Okitani drew their tickets in hopes of securing a preferred seat.</p>
<p>Sudō, filled with anticipation, opened his ticket first but then closed his eyes and clenched his teeth in disappointment. Suzune and Okitani also checked their tickets before handing them to Chabashira. She declared that Suzune would sit in seat 17, Okitani in seat 25, and Sudō in seat 37. Sudō resignedly took his seat, while the others looked on with sympathetic expressions.==Final Seating Chart ==</p>
<p>Note: - At the Bid Price, - Higher than Bid Price, - Half the Bid price, - Not Specified</p>

<h2 class="text-xl font-bold font-serif mt-12 mb-6 border-b border-neutral-700 pb-2">Final Seating Chart</h2>
<div class="overflow-x-auto rounded-lg border border-neutral-700 shadow-lg my-6">
  <table class="w-full border-collapse my-8 border border-neutral-700 text-center font-sans text-sm">
<tbody><tr>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">1
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">(-)
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">9
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">(-)
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">17
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">Suzune Horikita
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">25
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">Kyōsuke Okitani
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">33
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">(-)
</td></tr>
<tr>
<td class="p-3 border border-neutral-700 text-neutral-200 bg-red-950/40 text-red-200">45,000pr
</td>
<td class="p-3 border border-neutral-700 text-neutral-200 bg-emerald-950/40 text-emerald-200">4,500pr
</td>
<td class="p-3 border border-neutral-700 text-neutral-200 bg-neutral-800 text-neutral-400">(Free)
</td>
<td class="p-3 border border-neutral-700 text-neutral-200 bg-neutral-800 text-neutral-400">(Free)
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">6,000pr
</td></tr>
<tr>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">2
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">(-)
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">10
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">(-)
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">18
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">(-)
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">26
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">(-)
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">34
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">(-)
</td></tr>
<tr>
<td class="p-3 border border-neutral-700 text-neutral-200 bg-red-950/40 text-red-200">30,000pr
</td>
<td class="p-3 border border-neutral-700 text-neutral-200 bg-emerald-950/40 text-emerald-200">3,500pr
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">1,500pr
</td>
<td class="p-3 border border-neutral-700 text-neutral-200 bg-emerald-950/40 text-emerald-200">3,500pr
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">7,000pr
</td></tr>
<tr>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">3
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">(-)
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">11
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">(-)
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">19
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">Mei-Yu Wang
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">27
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">(-)
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">35
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">(-)
</td></tr>
<tr>
<td class="p-3 border border-neutral-700 text-neutral-200 bg-red-950/40 text-red-200">32,000 pr
</td>
<td class="p-3 border border-neutral-700 text-neutral-200 bg-emerald-950/40 text-emerald-200">3,000 pr
</td>
<td class="p-3 border border-neutral-700 text-neutral-200 bg-emerald-950/40 text-emerald-200">1,500 pr
</td>
<td class="p-3 border border-neutral-700 text-neutral-200 bg-emerald-950/40 text-emerald-200">3,000 pr
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">9,000 pr
</td></tr>
<tr>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">4
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">(-)
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">12
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200"><span class="new" title="Kayoko Ishikura (page does not exist)" data-uncrawlable-url="L3dpa2kvS2F5b2tvX0lzaGlrdXJhP2FjdGlvbj1lZGl0JnJlZGxpbms9MQ==">Kayoko Ishikura</span>
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">20
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">Yōsuke Hirata
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">28
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">(-)
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">36
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">(-)
</td></tr>
<tr>
<td class="p-3 border border-neutral-700 text-neutral-200 bg-red-950/40 text-red-200">35,000pr
</td>
<td class="p-3 border border-neutral-700 text-neutral-200 bg-emerald-950/40 text-emerald-200">3,000pr
</td>
<td class="p-3 border border-neutral-700 text-neutral-200 bg-emerald-950/40 text-emerald-200">1,000pr
</td>
<td class="p-3 border border-neutral-700 text-neutral-200 bg-emerald-950/40 text-emerald-200">3,000pr
</td>
<td class="p-3 border border-neutral-700 text-neutral-200 bg-red-950/40 text-red-200">12,000pr
</td></tr>
<tr>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">5
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">(-)
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">13
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">Teruhiko Yukimura
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">21
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">Kikyō Kushida
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">29
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">(-)
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">37
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">Ken Sudō
</td></tr>
<tr>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">70,000pr
</td>
<td class="p-3 border border-neutral-700 text-neutral-200 bg-emerald-950/40 text-emerald-200">4,500pr
</td>
<td class="p-3 border border-neutral-700 text-neutral-200 bg-red-950/40 text-red-200">15,000pr
</td>
<td class="p-3 border border-neutral-700 text-neutral-200 bg-red-950/40 text-red-200">45,000pr
</td>
<td class="p-3 border border-neutral-700 text-neutral-200 bg-neutral-800 text-neutral-400">(Free)
</td></tr>
<tr>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">6
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">(-)
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">14
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">Akito Miyake
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">22
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">Kanji Ike
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">30
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">(-)
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">38
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">(-)
</td></tr>
<tr>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">80,000pr
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">6,000pr
</td>
<td class="p-3 border border-neutral-700 text-neutral-200 bg-red-950/40 text-red-200">30,000pr
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">6,000pr
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">20,000pr
</td></tr>
<tr>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">7
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">Wataru Ijūin
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">15
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">Haruka Hasebe
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">23
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">Airi Sakura
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">31
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200"><span class="new" title="Minami (page does not exist)" data-uncrawlable-url="L3dpa2kvTWluYW1pP2FjdGlvbj1lZGl0JnJlZGxpbms9MQ==">Minami</span>
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">39
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">(-)
</td></tr>
<tr>
<td class="p-3 border border-neutral-700 text-neutral-200 bg-red-950/40 text-red-200">115,000pr
</td>
<td class="p-3 border border-neutral-700 text-neutral-200 bg-red-950/40 text-red-200">30,000pr
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">4,000pr
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">10,000pr
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">25,000pr
</td></tr>
<tr>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">8
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">Sōshi Miyamoto
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">16
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">Hideo Sotomura
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">24
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">Rokusuke Kōenji
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">32
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">Vacant due to expulsion
</td>
<td rowspan="2" class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">40
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">Kiyotaka Ayanokōji
</td></tr>
<tr>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">100,001pr
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">65,000pr
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">50,000pr
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">60000pr
</td>
<td class="p-3 border border-neutral-700 bg-neutral-900/40 text-neutral-200">20,000pr
</td></tr>
</tbody></table>
</div>`
        }
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
        inProgress: false,

        customChapters: {
            1: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">What is Reflected in Ichika Amasawa's Eyes</h1>
<p class="text-center text-sm text-gray-500 mb-12">Ichika Amasawa SS — 2nd Year Volume 2</p>

<p>I was wearing my favourite clothing that day while humming a song.</p>
<p>«Will he think I’m cute?»</p>
<p>I’ve been keeping an eye on Karuizawa Kei from Class 2-D for almost 2 weeks.</p>
<p>She’s been going to the café, the karaoke, all over the Keyaki mall really.</p>
<p>Her playmates were the girls from her class, so that time was a waste to me.</p>
<p>Thanks to me overcoming this hardship and hanging on until the very end, finally, this day has come.</p>
<p>Karuizawa was returning straight to the 2nd year dorm today, a bit unusual.</p>
<p>As if it was intuition, I rushed out to the lobby on the first floor and watched her as she went inside her own room.</p>
<p>After waiting for a bit, I took the elevator and arrived a the floor where her room was.</p>
<p>And while I was waiting for her to come out, I stood on standby close to the emergency stairs while holding my breath.</p>
<p>One hour after the school ended, she appeared in the corridor wearing her school uniform.</p>
<p>Looks like she’s ready for her secret date.</p>
<p>My heart was dancing as I confirmed she went to the Ayanokouji-senpai’s floor. I quickly left the 2nd year dorm and returned to my own room.</p>
<p>«Hmm, perfect!»</p>
<p>It was done in a really bothersome order, but now I can change into some cute clothes!</p>
<p>It’d be a waste if I’m not cute enough.</p>
<p>«Ah, yes yes! Can’t forget this.»</p>
<p>I slipped a small, amorous box I’d bought at the convenience store earlier into my pocket.</p>
<p>After finishing changing my clothes, I quickly left the first year dorm.</p>
<p>I wanted so much to go straight to the 2nd year dorm, but I headed towards the Keyaki mall first.</p>
<p>I then quickly threw whatever food ingredients in the shopping cart.</p>
<p>I wasn’t particular with the ingredients I chose.</p>
<p>I picked up vegetables, fresh meat products, things that spoiled easily in general and went to pay.</p>
<p>Then, I once again headed towards the 2nd year dorm.</p>
<p>Luckily, it was at that time Nomura Shuuji also returned so I followed him from behind and got past the auto lock.</p>
<p>I used the emergency stairs and headed for room 401 where Ayanokouji-senpai and Karuizawa were.</p>
<p>My heart was beating fast and I tried to calm myself until I reached the door of his room.</p>
<p>I assumed I would be seen through the peephole on the door so I hid the bag with the fresh ingredients in a dead corner.</p>
<p>Okay! All preparations are done!</p>
<p>I rang the door chime and began the visit without prior notice.</p>
<p>After a lingering silence, I felt senpai through the door.</p>
<p>«Se~npai.»</p>
<p>I called out to him in a sweet voice. He must be watching me at this moment.</p>
<p>His sight must have been anchored to the sight my cute appearance reflected in that little lens.</p>
<p>But that wasn’t enough.</p>
<p>I had to make him know me even more.</p>
<p>For that reason, I have to make him invite me into the room using whatever means.</p>
<p>It’s alright. I can predict all the ways he will try to reject me.</p>
<p>Two arrows, three arrows. No matter how many fire, he will lose the means to fight back.</p>
<p>To get close to a strong opponent, it was necessary to pierce at their weaknesses.</p>
<p>I will thoroughly aim at his few weaknesses.</p>
<p>As I saw the door slowly being opened, I made a big smile.</p>
<p>«It’s me!»</p>
<p>I wonder what face he will welcome me with… I’m looking so forward to that.</p>`,
            2: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">He Who Stands Beside Me</h1>
<p class="text-center text-sm text-gray-500 mb-12">Suzune Horikita SS — 2nd Year Volume 2</p>

<p>«You wish to join the student council?»</p>
<p>When I told him I wanted to join the council, president Nagumo looked surprised at me.</p>
<p>«I wonder, what in the world happened to you for this to happen? I’ll honestly say I somehow don’t want to say yes.»</p>
<p>«So that means you won’t accept me then?»</p>
<p>«That’s not it. I’m just taking the stance of not rejecting anyone who comes to me. If there are any free positions or it’s possible to enter, I’ll let anyone in. I’m also not interested in their motives. Whether it’s for the OAA’s sake, future job prospects or sense of justice, it’s all up to you. But, you are different, Horikita Suzune. I have to insist on a condition for you.»</p>
<p>As Horikita Manabu’s sister, it seems it was necessary for me to complete some kind of task.</p>
<p>«What is that condition?»</p>
<p>I prepare myself to receive it and ask him.</p>
<p>«Tell me the reason why you, at this point in time, want to join the student council.»</p>
<p>It wasn’t something I had imagined, but I can’t refuse still.</p>
<p>Even if I made some stupid lie here, he surely won’t be surprised.</p>
<p>That being said, I can’t mention it was related to Ayanokouji-kun either.</p>
<p>«I had a discord with my brother. And I enrolled into this school to make peace. But ever since I entered, my relationship with my brother never changed. He never would have accepted someone like me who actually never showed any signs of growth. I spent a whole year without being able to have a properly talk with with until the very last moments.»</p>
<p>I answered, feeling my heart beating faster.</p>
<p>And he who listened close by didn’t say anything either.</p>
<p>If it all ended without me able to enter the council, he would surely be disappointed.</p>
<p>I want to avoid that at all costs.</p>
<p>Disappointed? I? Did I want to avoid disappointing him?</p>
<p>My heart was rocked by this feeling I hadn’t realised.</p>
<p>How was he seeing me right now?</p>
<p>I was a bit interested in that.</p>
<p>The fact he wasn’t a normal student was something I knew even before he got that perfect score in maths.</p>
<p>President Nagumo who was speaking in front of me and acknowledged by my brother is certainly an amazing student, no doubt about that… but if compared to Ayanokouji-kun that impressions strangely changes everything.</p>
<p>There was no doubt I unconsciously valued him highly, though.</p>
<p>While a part of me wanted to learn of his true abilities, I realised there was another one who wanted something else.</p>
<p>I wanted him to acknowledge me, that is.</p>
<p>Maybe one of the reasons I went to join the council with a positive attitude was because of that?</p>
<p>…That wasn’t my intention.</p>
<p>I waved away these odd thoughts I had. I had to focus on the things I had to do first.</p>
<p>I had to enter the student council and confirm President Nagumo’s movements.</p>
<p>That was a crucial task.</p>
<p>I took the reins of the feelings that started deviating, and waved away these idle thoughts I had.</p>
<p>«There are no other student council members from the 2nd grade aside for Honami right now so we’ve been troubled by that. Welcome to the Student Council. I’ll have you work hard as a council member from today, Suzune.»</p>
<p>I took his left hand he held out towards me.</p>
<p>«Of course.»</p>
<p>It would never be an amicable relationship.</p>
<p>But, there was certainly things I could learn from him who stood beside my brother.</p>
<p>I will take that experience and once again grow.</p>
<p>By doing so, Ayanokouji-kun will surely acknowledge me.</p>
<p>By that time… we definitely will be right on the doorsteps to Class A.</p>
<p>That was a premonition I couldn’t shake away.</p>`,
            3: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">An Excuse</h1>
<p class="text-center text-sm text-gray-500 mb-12">Hiyori Shiina SS — 2nd Year Volume 2</p>

<p>Me and Albert-kun were waiting quietly on standby right around the corner.</p>
<p>We could hear the voices from the energetic Ishizaki-kun and the calm Ayanokouji-kun from a slight distance.</p>
<p>To create the small group for the special exam which was scheduled to be held on an uninhabited island.</p>
<p>Our first choice of student to invite wasn’t Sakayanagi-san, Ichinose-san or even Horikita-san. I and Ishizaki-kun both shared this sentiment.</p>
<p>Ishizaki-kun’s idea to call out to Ayanokouji and invite him before anyone could was probably right.</p>
<p>Before long, we appeared before Ayanokouji-kun who showed a surprised look at the sight of Albert-kun.</p>
<p>«Good day, Ayanokouji-kun.»</p>
<p>«That’s quite an unusual mix of members you have there.»</p>
<p>«Maybe so.»</p>
<p>Us three usually didn’t move together as a group so Ayanokouji had all the right to think it was strange.</p>
<p>«This isn’t quite the place this, let’s move!»</p>
<p>«Move? To where?»</p>
<p>«Hmm, let’s see… I haven’t really thought of that!»</p>
<p>It was a rushed plan so it was no wonder Ishizaki-kun hadn’t planned anything after this.</p>
<p>I could easily have said something to him, but I decided to not advise him on anything.</p>
<p>«I have a really bad feeling about this so, can I leave now?»</p>
<p>He probably sensed the danger in front of him so he asked if he could go back.</p>
<p>«What’s sup with that, aren’t you free right now? We won’t let you go!»</p>
<p>Our breaths in sync, I and Albert-kun went behind Ayanokouji-kun.</p>
<p>«You won’t let me leave… what?»</p>
<p>«I am sorry Ayanokouji-kun! But we can’t let you leave!»</p>
<p>Albert has holding his flank in a tight grip.</p>
<p>And I secured his other arm to prevent him from escaping.</p>
<p>«Wha…?»</p>
<p>He didn’t expect us to use force so it was no wonder he looked so confused.</p>
<p>But the truth is, even if we invited him with forceful means, I already predicted it would be futile.</p>
<p>He was probably going to join one of the groups made up only by class D students, or he would go solo.</p>
<p>In either case, a person who was likely to be the key to their victory wouldn’t be able to join any other classes that easily.</p>
<p>But even so, I chose to encourage Ishizaki-kun’s plan and accompany him with it.</p>
<p>«We are attracting to much attention here so let’s move on Ishizaki-kun.»</p>
<p>If you want to know why, I only wanted to…</p>
<p>Yes, I only wanted… to meet Ayanokouji-kun.</p>
<p>I decided to cooperate since I wanted an excuse.</p>
<p>I put slightly more force into my embrace.</p>
<p>I was looking forward to the time we would spend together, even for just a second longer—</p>`,
            4: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">What Could Be Seen From That Back</h1>
<p class="text-center text-sm text-gray-500 mb-12">Sakurako Tsubaki SS — 2nd Year Volume 2</p>

<p>If I was asked about what I was best at, I would without hesitation say it was my insight and intuition.</p>
<p>On the way back to the dorms from the Keyaki mall.</p>
<p>I was watching Ayanokouji-senpai’s back disappear inside a convenience store.</p>
<p>I had been silently trailing him until now, but he hadn’t shown any signs of having noticed me.</p>
<p>But, he had definitely noticed me.</p>
<p>His usual mannerism, his behaviour, was like that of a normal high schooler.</p>
<p>He looked just like a normal student you could find anywhere.</p>
<p>I stayed a proper distance from him, and took one lollipop I saw close to me before calling out to him.</p>
<p>But still, there was no need for me to assume that possibility after all I guess.</p>
<p>He didn’t pay any attention to me and just put the necessary stuff into his shopping basket.</p>
<p>Before long, I called out to him right before he was about to pay.</p>
<p>«Excuse me~~?»</p>
<p>If I decided to watch him leave, there won’t be any chances left for today.</p>
<p>«You were Tsubaki, right? Do you need something from me?»</p>
<p>Even when I directed his attention towards me, he didn’t seem surprised at all.</p>
<p>He didn’t bring up the fact I’d watched him in the café as well.</p>
<p>«There’s something I want to speak to you about, so could you wait outside for a moment?»</p>
<p>Buying at least a lollipop was the least I could do to show courtesy towards the shop and not just window shopping.</p>
<p>…I guess? Maybe it was the work of the store clerk after all.</p>
<p>«Thanks for waiting for me.»</p>
<p>I removed the wrapping paper of the lollipop as I started walking. To say the truth, I’m not good at holding conversations.</p>
<p>I wasn’t particularly bad at being with people from the opposite gender. I was just bad at talking.</p>
<p>«So what did you want to talk about?»</p>
<p>He asked me the reason I had contacted him.</p>
<p>«There was something he had to tell you if I happen to meet you now Ayanokouji-senpai.»</p>
<p>For now, I had to buy enough time for Utoumiya-kun to arrive.</p>
<p>«Utoumiya-kun did?»</p>
<p>As if he had read what I was thinking, he accurately asked.</p>
<p>«Guess I was right.»</p>
<p>As expected of him… is that the right way to say it?</p>
<p>«He said he would head over here, at once.»</p>
<p>I can’t dig into his deep psyche just yet.</p>
<p>There is more than enough time, no need for hurrying. Slowly but surely.</p>
<p>And then—</p>`,
            5: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Trial Date</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kei Karuizawa SS — 2nd Year Volume 2</p>

<p>This is a story from just before the second year island survival exam. I, Karuizawa Kei am walking towards Keyaki Mall after school. Keyaki mall is extremely popular with students after school. There are many things to do in Keyaki mall, people come to hang with friends, or to buy things, or get their hair done. Or perhaps, a date with their lover.</p>
<p>Anyway, since no one is allowed to leave the school premises, Keyaki mall is something that we students cannot do without. By the way, I often come here with my friends to hang out.</p>
<p>But— today I am here alone.</p>
<p>It’s not that I have anything in particular that I want to buy.</p>
<p>But there is something that I want to do though.</p>
<p>«Fuuu, I’m a bit nervous.»</p>
<p>I mumble those words as I head towards the mall by the north entrance.</p>
<p>Almost 1 hour has passed since classes have ended and there are already a fairly large amount of students in the mall.</p>
<p>«Right right, it should be all right with this many people here.»</p>
<p>As I look around, I continue walking slightly relieved.</p>
<p>First things first, I head to the general store as planned. The store itself is fairly small but there appears to be about 4 girls inside enjoying themselves while looking around.</p>
<p>Now then.</p>
<p>I wander around the store as I hold my phone. In no time at all I receive a message. It is the signal that all the preparations were complete.</p>
<p>I continue walking around looking at the items for sale as I try to contain the grin forming on my face.</p>
<p>Since new items are released every week, it’s rare to get bored. I especially love the cute accessories. However, I’ve been buying so many recently that all the straps on my phone are now heavier than my phone itself. I have to resist today.</p>
<p>Resist…. Resist… I don’t think I’ll be able to!</p>
<p>«Cute~»</p>
<p>One of the newly arrived straps is so cute.</p>
<p>A strap with an image of cat on a little ribbon.</p>
<p>I send an image of the strap using my phone. As I mumble to myself I slowly move around the store.</p>
<p>Oh so you like these kind of things?</p>
<p>I smile as I receive the reply.</p>
<p>Unexpected?</p>
<p>I reply.</p>
<p>A little.</p>
<p>Is the reply I receive.</p>
<p>My heart will probably skip a beat if I got this from my boyfriend♡</p>
<p>I was thinking about sending such a reply but it’s too embarrassing so I ended up deleting it.</p>
<p>As expected of today’s trial. But I don’t have the courage for that just yet.</p>
<p>I get excited as I receive a picture sent from the other person but when I see it….</p>
<p>I thought you would like something like this instead.</p>
<p>It is a picture of a strap illustrated with skulls and crosses.</p>
<p>No way no way, your sense is really horrible. Only middle school boys would use something like that.</p>
<p>This time my reply is a little mean spirited. Oh well, it’s important that not everything said is just sweet words.</p>
<p>Perhaps now is a good time to tell you what the point of today was.</p>
<p>The truth is, as I wander around the store by myself, there is someone else following a different route but walking with me. I don’t think an explanation is needed at this point but…. That person is my boyfriend Ayanokouji Kiyotaka. He is super cool, smart, and athletic.</p>
<p>“Maybe I’m praising him too much…” I correct myself.</p>
<p>I mean it would be a stretch to say his skills regarding human relationships are good.</p>
<p>Ahem, anyway this is a way to for us to have a trial date. We both set different places to meet up , and decided to browse the shop using different routes.</p>
<p>If other people heard this, they would probably think what’s with that? Most definitely.</p>
<p>However, since the fact that we are dating is a secret, this is a trial to see how enjoyable a date is.</p>
<p>Mahh…. The fact that I am dating Kiyotaka will probably be revealed some time , but for now it’s okay.</p>
<p>What are you going to do now?</p>
<p>Can I look around a little more?</p>
<p>After exchanging these few messages, I continue wandering around the store.</p>
<p>Yup looks like no one has noticed.</p>
<p>I mean that’s obvious since at the most we look like two people who came to the store separately and are looking at different things. Of course, being near each other makes me happy, but at the same time, I ended up thinking about how I want to talk to him directly as expected.</p>
<p>I think that being able to speak to each other, to see each other’s eyes and have our hands touch, that’s the real joy of being on a date.</p>
<p>After leaving the general store, I head to the super market then the bookstore, going from place to place, item to item as I pass the time.</p>
<p>The date was enjoyable but also ended up feeling a little lonely.</p>
<p>I don’t think the trial was a failure but, these mixed emotions….</p>
<p>I guess after all, I really want to go on a proper date with Kiyotaka as soon as possible.</p>
<p>Yup, that’s what I am thinking of once more.</p>
<p>Then —-</p>
<p>On that day around 7 in the evening.</p>
<p>As I am watching the TV, a knock on my door causes me to get up.</p>
<p>“Hmm?”</p>
<p>Not the door bell but a light knock.</p>
<p>I wonder who it is, but I can’t even hear a voice.</p>
<p>I open the front door as I think that it is a little strange…</p>
<p>On the floor in the corridor is a small paper bag with pink patterns on it. I don’t see anyone as I look and right.</p>
<p>As I continue thinking how strange it is, I pick up the bag and enter my room.</p>
<p>This is for me right?</p>
<p>Before opening it, I feel it’s contents from the outside.</p>
<p>«Hmm could this be….»</p>
<p>With something in mind, I open the bag…</p>
<p>Inside is a strap with an image of cat on a little ribbon.</p>
<p>Looking at it, I let out a laugh without thinking.</p>
<p>“He really is a simple when it comes to these kinds of things.”</p>
<p>If he thinks doing these kinds of things will make him popular, well he is mistaken.</p>
<p>I remove all the straps from my phone and attach the little cat, with a smile.</p>
<p>“Something like this isn’t nearly enough for me to be satisfied okay.”</p>
<p>For the rest of the day I pass the time gazing at the strap.</p>`
        }
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
        inProgress: false,

        customChapters: {
            1: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">An Enjoyable Moment</h1>
<p class="text-center text-sm text-gray-500 mb-12">Arisu Sakayanagi SS — 2nd Year Volume 3</p>

<p>The 5th day of the special exam is fast approaching.</p>
<p>The physical and mental stress is generally felt throughout all classes.</p>
<p>As long as they repeatedly throw theirselves into this harsh environment, bad injuries will definitely begin to appear at this stage.</p>
<p>I clearly understand that from watching the people entering and leaving the harbour from the beach I’m at.</p>
<p>«Oh my?»</p>
<p>I notice someone approaching me and my cheeks softens.</p>
<p>Without showing any signs of fatigue, he walks closer to me as usual.</p>
<p>«Good day Ayanokouji-kun. It’s a rather hot day today, isn’t it?»</p>
<p>«How are you?»</p>
<p>He’s the same as always. There are many people who exhibit this kind of calmness. But as expected of him, a mere few days of living on this uninhabited island doesn’t mean a thing to him.</p>
<p>«About as usual, considering it’s me. I’m having Ichinose-san and Shibata-kun do their best so I can’t say it’s been too indulging.»</p>
<p>It doesn’t need to be said but….</p>
<p>If I could move freely, I would gladly have accompanied them…</p>
<p>«I wanted to ask you something, can you still receive the arrival rewards?»</p>
<p>A question regarding the status of the exception that was me, the only one who was considered half-retired.</p>
<p>It probably wasn’t the only reason he came here to me.</p>
<p>I will consider it the appetiser before moving on to the main dish.</p>
<p>«I’m glad to say I’m still being recognised for that as it wasn’t my intention to retire after all.»</p>
<p>Thanks to that, Ichinose-san and Shibata-kun are properly able to receive the arrival rewards.</p>
<p>It’s lower than the other top groups naturally, but that can’t be helped.</p>
<p>«By the way, what affairs do you have for coming to the starting spot today, may I ask?»</p>
<p>«One of them was a waste of effort in the end.»</p>
<p>He replied as he gazed out towards the sea at the task now taking place.</p>
<p>«The last spot was unfortunately taken by Kouenji already.»</p>
<p>That’s regrettable. I would have used my binoculars to spectate if he was participating.</p>
<p>Kouenji’s performances was just a pain for us however.</p>
<p>Even if I left my personal feelings out, I still would have liked to see Ayanokouji-kun do the honours instead.</p>
<p>«He was 4th in the morning, but now he’s in 2nd place it seems. He really is the Wunderkind of Class 2-D if I may say so.»</p>
<p>«We share the same opinion then.»</p>
<p>Kouenji-kun’s talent is unlimited. Ayanokouji-kun is probably feeling the weight of it directly on his skin.</p>
<p>The fact Nanase-san isn’t by him now means there was an empty spot for the girls’ side.</p>
<p>«It should take about 30 mins before the task is over and Nanase-san comes back. Please take a seat. It’s rather refreshing here in the shade.»</p>
<p>It wasn’t a suitable place to entertain guests, but letting him stand there in the sun won’t do.</p>
<p>«How did you know about Nanase?»</p>
<p>«I regularly receive information from all over the island.»</p>
<p>The main group has a transceiver which I use to contact them.</p>
<p>As someone who can’t move her legs, it’s a necessary tool to process information, don’t you think?</p>
<p>«Is that okay with you? I’m your enemy you know?»</p>
<p>«Fufu, I don’t mind.»</p>
<p>Ayanokouji-kun is not in the top 10 as of now. He could still be included in another group later and become a terrifying enemy later, but moving up as soloer is difficult. Furthermore, the amount of damage he has taken from fatigue is hard to guess.</p>
<p>If so, being close to him makes it all more enjoyable am I right?</p>
<p>It’s almost impossible to make time to be alone with him at the school. No need to concern ourselves with others. No need to think too much.</p>
<p>The fact that he doesn’t seem to share that sentiment is a pity.</p>
<p>While my heart is racing thinking about the conversation we are about to have…</p>
<p>I always end up wishing it could last forever. Even for just a moment longer.</p>`,
            2: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Unfathomable</h1>
<p class="text-center text-sm text-gray-500 mb-12">Tsubasa Nanase SS — 2nd Year Volume 3</p>

<p>Data shows that men have better stamina than women.</p>
<p>But as far as I know, there isn’t that big of a difference between me and Ayanokouji-senpai.</p>
<p>That belief stems from the confidence and conviction gained from training ever since I was small.</p>
<p>But I now clearly understand that it was far too naive of me.</p>
<p>Ayanokouji-senpai hasn’t been the least tired these recent days.</p>
<p>He’s always at about 50-60 percent and clears every obstacle like nothing.</p>
<p>He’s easily surpassing me, climbing the towering cliffs.</p>
<p>If this goes on, I won’t manage to follow him.</p>
<p>I have to avoid falling too far back no matter what.</p>
<p>Fearing that everything would end, I forcibly made up my mind.</p>
<p>«What are you doing?»</p>
<p>«Don’t… mind me. I will, catch up to you, at my own pace…!»</p>
<p>If I stopped climbing and fell down from here, that would mean I amounted to just that.</p>
<p>I fervently stretched my arm and grabbed onto the rocky surface.</p>
<p>While my mind was brimming with willpower, my hands were screaming at their limits.</p>
<p>«Retiring will be the least of your worries if you fall from here.»</p>
<p>Whether I retired or not wasn’t that important to me.</p>
<p>It was whether I could catch up to him or not. Everything depended on that.</p>
<p>I focused on my arms and legs when suddenly he came back to me.</p>
<p>«Grab on.»</p>
<p>Seeing how desperate I was, he held out his hand.</p>
<p>«N-no, I won’t have it. Since one of the conditions for following you was that you wouldn’t help me… Don’t mind me and go on, please.»</p>
<p>Even though climbing here was so dangerous, he went down to me without a worry.</p>
<p>He’s always collected and there are so many things I don’t know about it. As expected, this person isn’t normal.</p>
<p>From what he brazenly did during the fight with Housen to this.</p>
<p>«It would leave a bad aftertaste if I went ahead and you hurt yourself. It would be one thing if you asked me for it, but I’m offering this kindness of my own accord. Don’t mind it.»</p>
<p>«But…!»</p>
<p>«We’re wasting time as we speak. Am I right?»</p>
<p>I no longer had any places I could escape to.</p>
<p>The more I resisted, the more I realised how much I wasted his precious time.</p>
<p>«…Yes.»</p>
<p>I couldn’t hide my frustration as I took his hand.</p>
<p>«Senpai… have you ever climbed before?»</p>
<p>«No, this is the first time I’m moving up like this.»</p>
<p>«Is that so…»</p>
<p>He raised me along with my heavy backpack up.</p>
<p>This person really possesses unfathomable abilities after all.</p>
<p>I wonder if I’m even able to cross blades with him…</p>
<p>No, that’s not important.</p>
<p>He’s definitely—definitely a person I have to defeat.</p>
<p>And then I must drag out that person.</p>
<p>That’s why I came to this school in the first place.</p>
<p>It’s the only goal I have.</p>`,
            3: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">A Brief Farewell</h1>
<p class="text-center text-sm text-gray-500 mb-12">Suzune Horikita SS — 2nd Year Volume 3</p>

<p>«Well then, I’ll be leaving.»</p>
<p>I told Ayanokouji-kun as I began to take my leave, while adjusting my hat which shielded me from the sun.</p>
<p>It seems he would be staying at the starting line since he just saw me off.</p>
<p>I had to perform well as someone who was going solo these next two weeks.</p>
<p>The same could be said about Ayanokouji-kun, but I probably didn’t need to worry about him.</p>
<p>«…no need to worry, huh?»</p>
<p>Without even realising, my thought patterns had inadvertently settled on this option</p>
<p>As soon as I had heard the rules for this special exam, I had immediately realised just how difficult it would be to fight solo.</p>
<p>For him though, there weren’t any reasons for concern</p>
<p>I took a swift glance at him.</p>
<p>He was still watching me with a slightly puzzled expression on his face</p>
<p>After watching him score the highest possible marks in that math test and how he had handled Housen, I had realised he was much more than he let on. Was that why?</p>
<p>It was probably a factor, but that wasn’t the complete story by far</p>
<p>That’s because I’ve been watching him from up close this entire year. More than anyone else.</p>
<p>He never panicked and remained calm no matter what. He was a person who would always find the right answer and win regardless of the situation he was in. .</p>
<p>He had flaws obviously. He couldn’t achieve certain goals without revealing some extent of his true abilities. Not to mention, he wasn’t particularly good at communicating either.</p>
<p>But he would shield those weaknesses by using others.</p>
<p>I stopped looking back and took a strong step forward</p>
<p>A new invisible feeling was growing.</p>
<p>It probably wasn’t ‘jealousy’ nor was it ‘admiration’.</p>
<p>I wanted to become someone who could stand shoulder to shoulder with him, I believe. Probably.</p>
<p>But his style was fundamentally different from mine.</p>
<p>Even if I tried to mimic him, it wouldn’t do me any good.</p>
<p>I wanted to become someone who could cover his back, a partner he could rely on….</p>
<p>«As if… I guess that wasn’t like me.»</p>
<p>I had somehow just ended up thinking that way.</p>
<p>«First priority is to fight in the best way only I knew possible»</p>
<p>That’s because the battle on this uninhabited island was by no means going to be easy.</p>`,
            4: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">What Could Be Seen From That Back</h1>
<p class="text-center text-sm text-gray-500 mb-12">Tsubasa Nanase SS — 2nd Year Volume 3</p>

<p>I lie face down on the sand, taking the required position and wait on standby.</p>
<p>It’s the final match for the Beach Flags event.</p>
<p>My opponent is Tokunaga-senpai from the 3rd year. Her timing for the last 2 matches were flawless.</p>
<p>I think I have the advantage regarding power when kicking the sand, but any miss on my part will be lethal. Which means that as long as I don’t make a miss and get slowed down, she is someone I should beat.</p>
<p>The sound of the pistol being fired reverberates throughout the beach.</p>
<p>The same moment the sound reaches my ears, I stand up while turning around.</p>
<p>At about the same time, I feel her take a similar stance and become convinced of my victory.</p>
<p>Taking a small lead from the first moment, I then wholeheartedly went for the flag.</p>
<p>Ayanokouji-senpai is also watching this battle nearby.</p>
<p>While showing too much of my abilities here is a demerit to me, I cannot hold back.</p>
<p>I went all out compared to the two other people in my group.</p>
<p>That’s because I feel like I have to show them my full power at all times.</p>
<p>Before I knew it, the flag is right in front of me and I stretch out my hand to take it.</p>
<p>«Fuu…»</p>
<p>Feeling relieved over securing the win in this final round I breath in and out to calm down.</p>
<p>«What a terrifying 1st year. It’s my loss.»</p>
<p>Tokunaga-senpai, who came in after me, said as reached out her hand for a handshake.</p>
<p>«Thank you so much, Tokunaga-senpai.»</p>
<p>«You know about me?»</p>
<p>«I looked at the OAA app for any upperclassmen I had to be wary of when preparing for this special exam.»</p>
<p>I managed to win since I knew she was athletic and didn’t let my guard down.</p>
<p>I went with Tokunaga-senpai to wash off the sand before receiving the mineral water as reward for participating.</p>
<p>«That was an overwhelming victory.»</p>
<p>While being refreshed by the cold water, Ayanokouji-senpai calls out to me.</p>
<p>«Thank you so much. I managed to win somehow.»</p>
<p>He was thinking about something while staring at me.</p>
<p>I try to not let it bother me and ignore it, but he still continues to stare.</p>
<p>I somehow begin feeling a bit bothered by it or shall I say a bit distracted by it.</p>
<p>I was wearing a swimsuit so I can’t help but feel a bit embarrassed by it.</p>
<p>«H-hey, Ayanokouji-senpai?»</p>
<p>«Hmm?»</p>
<p>«I can’t really relax when you are, staring at me like that…»</p>
<p>I instinctively said.</p>
<p>I have never showed so much of my skin to anybody before so… yeah.</p>
<p>«Whops, you’re right. My bad.»</p>
<p>He apologises and looks another way but I still can’t relax and turn my gaze somewhere else.</p>
<p>I hope I can calm down a bit but…</p>
<p>I am spending a lot of alone time with him during this uninhabited special exam.</p>
<p>Which also means that we, a boy and a girl, are moving around together.</p>
<p>That felt like — a bit of problem to me.</p>
<p>Oh, no no.</p>
<p>If I continue thinking about this, my plan will break down.</p>
<p>Ayanokouji-senpai seems to be talking to Kiriyama-senpai so I’m going to change while I have the chance.</p>
<p>I decide to go and wash these unexpected feelings off me.</p>`
        }
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
        inProgress: false,

        customChapters: {
            1: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Beneath a Scarlet Sky</h1>
<p class="text-center text-sm text-gray-500 mb-12">Hiyori Shiina SS — 2nd Year Volume 4</p>

<p>«Whoa!! We’re finally here!!»</p>
<p>Ishizaki-kun looked at the sea and yelled out after today’s long trek.</p>
<p>«You’re way too loud Ishizaki, be quiet.»</p>
<p>His voice was probably reverberating inside Nishino-san’s ears as she went out to stop him.</p>
<p>«There’s no harm in it right? I’m just yelling after all~ Uoooh! We’re hereeeeeeee!»</p>
<p>«Didn’t you hear me!»</p>
<p>Nishino-san went out to punch Ishizaki-kun since he continued his yelling.</p>
<p>But not even pain could stop him from yelling as he continued his lively act.</p>
<p>Seeing this brought a smile to my face.</p>
<p>I think they make a surprisingly good pair.</p>
<p>I suddenly heard footsteps behind me.</p>
<p>Was it another group whose designated area was the same as us?</p>
<p>I turned around and the person there was—</p>
<p>«Ara? Is that you Ayanokouji-kun?»</p>
<p>I asked before even my mind caught up to reality.</p>
<p>«You look livelier than I expected.»</p>
<p>He closed the distance with the same attitude as always.</p>
<p>«They’ve done their best and we’ve managed to increase our group size to 6.»</p>
<p>Ayanokouji-kun looked at Ishizaki-kun, seemingly satisfied with that explanation.</p>
<p>«Was that your plan all along? To group up with him?»</p>
<p>«Yes. I had several groups in mind and his group was one of them.»</p>
<p>Although I just planned it in order to support Ishizaki-kun’s group which wasn’t doing it, it went much better than I expected, and the points we got increased even further afterwards.</p>
<p>«You look in good health as always, Ayanokouji-kun.»</p>
<p>He wasn’t a person who would strain himself, but this is an exam where nothing is certain.</p>
<p>«Yeah, for now at least.»</p>
<p>«I don’t think I need to worry about you, but please be careful. Just one injury can get you expelled after all.»</p>
<p>«I know.»</p>
<p>Going in solo means you can’t guard yourself from the unexpected.</p>
<p>Even if I wanted to help him, my group is already at its maximum capacity.</p>
<p>«There’s just 3 days left, right?»</p>
<p>I just hope he will be okay until then.</p>
<p>«Yeah.»</p>
<p>I looked at his face as it was bathed in the light of the sunset and started thinking.</p>
<p>Him retiring would be better for my own class.</p>
<p>I know it’s that simple, but I can’t continue these thoughts.</p>
<p>No, I believe I just want to avoid thinking about it.</p>
<p>To me, Ayanokouji-kun is a good reading partner. A good friend.</p>
<p>And… how do I say this?</p>
<p>He has a mysterious charm. He is someone I can’t take my eyes off from.</p>
<p>He makes me want to spend more time with him. As much as possible.</p>
<p>If only we didn’t have to fight, if only we were in the same class,</p>
<p>then this school life would become painted in even more lovely colours.</p>
<p>If only these gentle moments could have lasted forever——</p>`,
            2: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Poker Face</h1>
<p class="text-center text-sm text-gray-500 mb-12">Fūka Kiryūin SS — 2nd Year Volume 4</p>

<p>After arriving at my designated area, I get 1 point from the Arrival Bonus.</p>
<p>Without realising it, my name had appeared on the top 10 due to the points I slowly managed to collect.</p>
<p>«To think Kuronaga’s group has kept the their 10th place all this time. He’s way too devoted to Nagumo.»</p>
<p>Seeing the points of Nagumo’s group which always competed for the top spot, makes me disconcerted.</p>
<p>«What a boring man he is, that Nagumo.»</p>
<p>As someone who likes being alone, I can never come to like his way of fighting although I can acknowledge he has some slivers of strength.</p>
<p>It may seem like he’s doing a full confrontation, but behind that facade you can see his desire to toy with his opponents.</p>
<p>It seems I can’t become interested in a finished product after all.</p>
<p>In that sense, the person worth paying attention to is Kouenji Rokusuke perhaps.</p>
<p>«It would be a lie to say I wasn’t interested in him but——»</p>
<p>As I was gazing at the scenery of this uninhabited island, I happened to see a certain student.</p>
<p>Ayanokouji Kiyotaka. His abilities are unknown, but it’s true he looked like an interesting one.</p>
<p>«You’re pretty late Ayanokouji.»</p>
<p>I already knew he had places in the same group as I based on the GPS search function.</p>
<p>«That seems to be the case.»</p>
<p>Despite our sudden meeting, he wasn’t surprised in the least.</p>
<p>Maybe he did a search previously and was made aware we shared the same table already?</p>
<p>«I believe I had another strong rival competing for the Arrival Bonus. So that was you?»</p>
<p>I tried to pry a bit.</p>
<p>«I wonder about that. Even groups from another table may end up at the same place after all. More importantly, didn’t you say you weren’t interested in the top 10?»</p>
<p>He avoided my light prod and moved the conversation topic towards me.</p>
<p>«This uninhabited island exam has been surprisingly fun so far so I have to say my tension has been running high despite my age.»</p>
<p>Let’s not press him too far now.</p>
<p>Chasing them too far doesn’t always become more fun.</p>
<p>«I plan on continuing at this pace.»</p>
<p>«You won’t aim for the top spot?»</p>
<p>«I will after everyone else has fought for the podium and between themselves. I also want to play along, right?. But if both Nagumo and Kouenji are taking each other out, then that may change everything.»</p>
<p>«I see, Taking each other out. Doesn’t seem like that will happen as of now.»</p>
<p>How much does he know, I wonder?</p>
<p>How admirable, being able to make a poker face up until now must be a talent in itself that is.</p>
<p>«You think Nagumo will leave Kouenji alone at this rate?»</p>
<p>I prodded hoping his poker face would crumble for just a bit.</p>
<p>«In terms of resisting with force, I can’t say it’s certain it will result in Nagumo’s victory. He has probably only observed until now, but it won’t be long before he will make his move. What I want to say is, it’s highly possible we may see Nagumo vs Kouenji before soon. Depending on how it goes, we may witness a situation where one or both of them will struggle with points.»</p>
<p>I neatly explained and he nodded as he understood it all.</p>
<p>«Pulling the rug out from under someone is also important after all.»</p>
<p>I can generally see whether someone is capable or not by speaking to someone once or twice.</p>
<p>«And you won’t aim for the top as well?»</p>
<p>I’ll just ask this once before we leave since I wanted to look at his reactions.</p>
<p>«Unfortunately for me I can’t imagine myself in the top 10 at all.»</p>
<p>«I see, I thought you’d have about the same points as me at least.»</p>
<p>He won’t show me anything here I concluded.</p>
<p>I’ll leave my rating of him for later.</p>
<p>The time until my graduation may have become something I’m looking forward to due to him and Kouenji.</p>`,
            3: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">No Reason to It</h1>
<p class="text-center text-sm text-gray-500 mb-12">Mio Ibuki SS — 2nd Year Volume 4</p>

<p>It was on the 10th day of the uninhabited island exam</p>
<p>This morning, I went to the other tent nearby.</p>
<p>I confirmed that the owner was away before reaching for the backpack inside.</p>
<p>I’m not trying to steal anything. I just want to confirm something.</p>
<p>And I have to look at what’s inside to do so.</p>
<p>But I don’t really want to look. It was a contradiction.</p>
<p>I grabbed the backpack with some hesitation.</p>
<p>«It’s lighter than I expected…»</p>
<p>Seeing how light it was made me even more confident and I checked the content without any lingering feelings.</p>
<p>Clothing, stuff for personal hygiene, food——and a single 500ml bottle of water.</p>
<p>«I knew it.»</p>
<p>As my doubt grew into conviction, the owner of the backpack came back, Ayanokouji.</p>
<p>«What are you doing?»</p>
<p>«!!»</p>
<p>His sudden call startled me so much I think I jumped from the ground.</p>
<p>«Did you look at my tablet? Or is there something else you wanted?»</p>
<p>«‘Course not! I just wanted to… to check if it really was fair, just that.»</p>
<p>I don’t want to be mistaken for a thief so I left the backpack.</p>
<p>Anyway, now that I’ve confirmed it, I need to ask him this directly.</p>
<p>«There’s just a single bottle of drinking water left in your backpack. How the hell is that you having plenty of it, huh?»</p>
<p>This guy wanted to make a fair trade with me yesterday.</p>
<p>He wanted to hand over 2 bottles of water for just some rations.</p>
<p>I lost my cool and couldn’t think then since I wanted water so badly, and he led me into it….</p>
<p>He lied to me.</p>
<p>He never had plenty of water and helped me since I was dehydrated.</p>
<p>«You wanted me to owe you, right? That’s why you helped me?»</p>
<p>If so, that’s way too naive of him. I need to make him realise that.</p>
<p>Or so I thought…</p>
<p>«If you haven’t checked my backpack, you would never have known though.»</p>
<p>«Uh.»</p>
<p>Obviously. If I never went to confirm it, I wouldn’t have known that he was lacking water too.</p>
<p>«In other words, it was supposed to be a fair trade no matter what the truth may be.»</p>
<p>So that’s why I should just spit out a honest ‘Thank you’? I’ll never do that even if someone forced my mouth open.</p>
<p>Like hell I want to.</p>
<p>«I don’t think I can accept that… alright. You get nothing in return then.»</p>
<p>Fine with you? I asked just in case.</p>
<p>«Would you even give me anything even if you owed me something?»</p>
<p>«No way.»</p>
<p>I answered in a blink, no thoughts needed.</p>
<p>There is no reason to it.</p>
<p>Why, I just hate this guy.</p>`,
            4: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Something I Have to Tell You</h1>
<p class="text-center text-sm text-gray-500 mb-12">Honami Ichinose SS — 2nd Year Volume 4</p>

<p>I should have known the last day of this special exam would be important.</p>
<p>As soon as it morning came I left my group and began running inside the forest.</p>
<p><i>I wonder how long I have been running?</i></p>
<p>I couldn’t endure it anymore and ended up using the GPS search this morning.</p>
<p><i>If Ayanokouji-kun is somewhere near I2 today…</i></p>
<p><i>Please let him be somewhere in the south, </i>I wished and looked at the results.</p>
<p>But he was in the northern part of the island.</p>
<p>My intuition told me he was heading for I2 today, on the last day.</p>
<p>The conversation I overheard before still lingered in my ears and I couldn’t stop myself anymore.</p>
<p>«Haa, haa….! Haa, Haa….!»</p>
<p>My breath had become ragged and I soon fell down on my knees.</p>
<p>I’ve been running single-mindedly and desperately so far and I’m now at my limit…</p>
<p>No, I’m already way past that stage I believe.</p>
<p><i>I want to meet him. I have to meet him and tell him.</i></p>
<p>It was the only thing supporting my two legs as I ran.</p>
<p>I just want to lie down on the ground and fall asleep.</p>
<p>I can’t keep these sensation from slowly taking over me.</p>
<p>I can feel my exhaustion slowly disappear as I closed my eyes and throw myself into the darkness.</p>
<p>«No…. I can’t….»</p>
<p>My fingertips moved and I grasp the earth.</p>
<p>I get sand stuck under my fingernails and I awaken from the discomforting sensation.</p>
<p>I can’t stand anymore.</p>
<p>But I can’t allow myself to fall asleep here.</p>
<p>I’d left my precious classmates behind.</p>
<p>You can even say I’ve betrayed them to come this far.</p>
<p><i>For what?</i> I ask myself.</p>
<p>But even then I can’t find a clear answer.</p>
<p><i>Do I want to save Ayanokouji-kun?</i></p>
<p><i>What does it mean to save someone?</i></p>
<p><i>Can someone like me even do that?</i></p>
<p>Even though I don’t know what’s happening. Even though I don’t know anything?</p>
<p><i>‘Please be careful’, is it even that important to say?</i></p>
<p>I now realise my actions have no substance to them.</p>
<p>So why am I covered in sweat, so tired as I run for my life?</p>
<p>It’s a never-ending Q&A.</p>
<p>And then— on the other side of the river,</p>
<p>I find Ayanokouji-kun heading towards I2.</p>
<p>No matter how much I try to raise my voice, nothing comes out.</p>
<p>Exhaustion, surprise or impatience. My voice is blocked by a torrent of feelings.</p>
<p>And despite that, even though I didn’t manage to calm down, I yell out.</p>
<p>«Ayanokouji-kun——!»</p>
<p>The words I manage to squeeze out reached the other side.</p>
<p>«I….I came to meet you!»</p>
<p>Yes. I ran this far for that purpose.</p>
<p>«I’ll be right there!»</p>
<p>Even though I shouldn’t be able to run, no…</p>
<p>Even though I shouldn’t be able to walk anymore.</p>
<p>My feet somehow managed to take a step forward.</p>
<p><i>I just want to meet you.</i></p>
<p>It is the only thing supporting me now.</p>
<p><i>—There’s something I have to tell you.</i></p>`
        }
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
        inProgress: false,

        customChapters: {
            1: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">A Double-sided Favour Repayment</h1>
<p class="text-center text-sm text-gray-500 mb-12">Tsubasa Nanase SS — 2nd Year Volume 4.5</p>

<p>With a sandwich and milk carton in hand, I waited by the cashier trying to calm down my impatience.</p>
<p>That was not due to a slow queue since there weren’t that many students checking out the store today even though it was noon.</p>
<p>No, the reason for that is because I was tailing a 1st year student named Kurachi-kun.</p>
<p>He had gone to the store and bought something that looked like lunch and went to pay, and therefore I did the same.</p>
<p>I don’t know where he was heading for after, but he hadn’t realised he was being tailed, nor was he aware of the person tailing him. Thus I could be more proactive and follow him closely without being noticed.</p>
<p>The reason I was tailing him was because when I used the GPS Search feature to find out who the person trying to attack Ayanokouji-senpai was, his name had appeared.</p>
<p>But according to Ayanokouji-senpai’s hypothesis, there was a good chance Kurachi-kun hadn’t really planned to attack him for real.</p>
<p>But if we look more closely into it, we may discover the person behind it all.</p>
<p>That’s the reason I’ve kept it a secret from Senpai.</p>
<p>If the one I’m tailing was a formidable opponent however, then maybe I wouldn’t be a match for them.</p>
<p>But still—</p>
<p>Even if I had to flee with my tail between my feet, I wouldn’t have minded it at all.</p>
<p>Because if I could leave behind at least something for Ayanokouji-senpai, it would have been worth it.</p>
<p>A small advantage would surely help him tip the scales and help him overcome his trials.</p>
<p>Yes, this is my own decision.</p>
<p>I took out my sandwich and began blending in with the students having lunch here.</p>
<p>Just before biting it, I suddenly remembered that moment during the uninhabited island exam.</p>
<p>When Ayanokouji-senpai told me there was no need to leave the school.</p>
<p>Letting him pamper me would have been an easy decision and I would surely have been able to lead a fun school life.</p>
<p>But that doesn’t sit well with me.</p>
<p>Tailing Kurachi-kun had led me to the upper deck which seemed to be a perfect spot for a light lunch as a huge amount of students were gathered here.</p>
<p>It looked like they were waiting for someone as they were looking around unrestly.</p>
<p>I wonder who they are waiting for? Naturally, it could be some of their friends who I have no connections with whatsoever…</p>
<p>I took a bite and just as I was about to start chewing—</p>
<p>“Nanase.”</p>
<p>A voice from behind startled me as I was so focused on Kurachi-kun in front of me.</p>
<p>Recognising it as Ayanokouji’s voice, I turned around to face him while hiding my surprise.</p>
<p>“Ah, senfai-.”</p>
<p>I started chewing in a hurry in order to calm myself down.</p>
<p>Strange, I couldn’t taste anything.</p>
<p>“Ah, my bad. Shall I come back later?”</p>
<p>He said apologetically, but there’s no way I would have him do that.</p>
<p>“Phease huht waid a bid.”</p>
<p>I continued to chew faster and swallowed the food in my mouth.</p>
<p>“Ehem….err, I’m sorry, you see, the truth is…. I was eating.”</p>
<p>I couldn’t tell him the fact I wsa tailing Kurachi-kun, nor that I was currently observing him right now.</p>
<p>“Eh well, is there something you wanted from me?”</p>
<p>I lost Kurachi-kun from view for a bit, but I endured it for now.</p>
<p>Anyway, I just had to finish this conversation as quickly as possible in a natural way.</p>
<p>“Ah no, it looked like you wanted to say something to me the other day. I kinda wondered about it. It kinda fizzled out when Ninomiya interrupted, you see.”</p>
<p>So that’s how it is… that would certainly have made him curious.</p>
<p>“Ah-”</p>
<p>I’m indeed tailing Kurachi-kun right now.</p>
<p>And I was hesitating whether to consult him about it now or not.</p>
<p>I could have just told it as it was, that I had used the GPS Search, notified him about Kurachi-kun, and asked him what to do about it.</p>
<p>That would definitely have been the right answer I think.</p>
<p>“Sorry, That’s something I’ve already taken care of so can I ask you to forget about it?”</p>
<p>But I’d decided to abandon that route.</p>
<p>The words screaming inside me had perhaps been conveyed to him.</p>
<p>“Sorry for calling out to you so suddenly. I’ll return back inside then. There are so many people here that I can’t relax.” He said, not pursuing the topic.</p>
<p>“Is that so? See you later, Senpai.”</p>
<p>I couldn’t detain him here any longer so I just saw him off.</p>
<p>As I looked at his retreating figure, I apologised to him in my mind.</p>
<p>I’m sorry, Ayanokouji-senpai… I already knew I should have just told you all this upfront.</p>
<p>But since you just would have been that kind Senpai, you would have stopped me saying it was dangerous.</p>
<p>Please give me some time.</p>
<p>I will work hard to leave behind some accomplishments to my name, no matter how small they may be.</p>`,
            2: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">A Slightly Bad Girl</h1>
<p class="text-center text-sm text-gray-500 mb-12">Maya Satō SS — 2nd Year Volume 4.5</p>

<p>The treasure hunt game with Ayanokouji was about to end.</p>
<p>What was it called again? The climax? Well, anyway, it means the end was near.</p>
<p>“Could you open the camera app?”</p>
<p>I followed his directions and turned on his smartphone.</p>
<p>Looking at the photo gallery, I saw pictures of the QR codes we’d found today along with some other ones as small icons, 15 in total.</p>
<p>My heart started beating faster thinking of how I could take a sneak peek at his everyday life.</p>
<p>But, he only had pictures of food and landscapes.</p>
<p>He didn’t have a single photo of Kei-chan in there, which made me happy.</p>
<p>I’m such a bad girl…</p>
<p>“Which should we scan first?” I asked.</p>
<p>I put a lid on my feelings and just showed him some random QR code.</p>
<p>“Just follow your instincts and choose one you think is good.”</p>
<p>“E-eh? You mean I can choose? W-what should I do? What if I choose a bad one?”</p>
<p>The thought of receiving a hefty reward was blown away this very instant.</p>
<p>What if it became my fault we only ended up getting 5000 points?….</p>
<p>Not even covering the participation fee is bad, isn’t it?</p>
<p>What shall I do? What shall I do? This pressure is way too heavy!</p>
<p>“The bad ones should have been removed already. And there is a chance every code has been scanned already as well so there is a chance we just have to try them all.”</p>
<p>Hearing that made me so relieved.</p>
<p>“O-okay!”</p>
<p>I prepared myself, took out my own smartphone and opened the app.</p>
<p>Next is to choose which code to scan.</p>
<p>I slided across them all in order to find one as quickly as possible.</p>
<p>Hmm, this one should be the most difficult to find, perhaps?…</p>
<p>The one Ayanokouji-kun found behind that sofa?</p>
<p>I was perhaps exaggerating a bit, but my hands started shivering as I pointed the phone camera towards the code.</p>
<p>After scanning it, the screen suddenly turns black and—.</p>
<p>“Ah, this one is no good. It says it has been claimed already.”</p>
<p>Which means someone had found this code and scanned it already.</p>
<p>And I thought nobody would find it!</p>
<p>“Don’t worry, just scan the next.”</p>
<p>Holding back the frustration, I hurriedly chose another one.</p>
<p>But this one had been claimed as well.</p>
<p>“And after all we did to find it too! This is irritating!”</p>
<p>Now I just want one of them to work.</p>
<p>My thought patterns did a 180-degree turn, forfeiting the jackpot.</p>
<p>This is the 3rd try. And once again, the screen turned black. As I started to get worried again, smoke started to appear on the screen unlike previous attempts.</p>
<p>“It worked! Look! It looks like a treasure chest!”</p>
<p>A screen that begged you to tap on it.</p>
<p>I thought it felt a bit like a game, but this treasure hunt was certainly a game.</p>
<p>“I wonder how many points it contains?…”</p>
<p>I was so excited and was about to tap on it.</p>
<p>But… What if this one only had 5000 points?</p>
<p>My fingers started becoming heavier as my imagination constructed the worst ending result.</p>
<p>“Y-you do it, A-Ayanokouji-kun!”</p>
<p>I gave him both the smartphones at the same time.</p>
<p>I received them without showing any kind of displeasure on his face while he put his own in his pocket and looked at the screen of mine.</p>
<p>Then he tapped on the treasure chest without hesitation.</p>
<p>“Wah, You’re so daring, Ayanokouji-kun!”</p>
<p>The screen started to flash blue and change.</p>
<p>What appeared on the screen was letters saying 100000 points.</p>
<p>“Ah!! ….Ah~”</p>
<p>I thought maybe we’d won 1 million points, but that was wrong.</p>
<p>There were 5 zeros so 100 000 points. They looked alike, but that was it.</p>
<p>“It seems we didn’t find that rare of a code after all.”</p>
<p>Hmm, but this is no time to get depressed, right?</p>
<p>Since we went into the positives for sure.</p>
<p>“I see~… That’s too bad. But you know, even with the participation fee, we did win 90 000 so that’s more than enough!”</p>
<p>I was so happy that when I looked at his face, I noticed how close we were to one another.</p>
<p>I somehow wanted to avert my eyes, but still thought of it as a little bonus.</p>
<p>“Thanks a lot, Ayanokouji-kun.”</p>
<p>And I’m so sorry Kei-chan. But this is a game so it can’t be helped, right?</p>
<p>“I’m the one who needs to thank you. The one who found this QR code was none other than you, Satou.”</p>
<p>“…Hehe.”</p>
<p>I had such a good time that I ended up thinking I maybe was a bad girl after all, only slightly though.</p>`,
            3: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">To Be the Older One</h1>
<p class="text-center text-sm text-gray-500 mb-12">Fūka Kiryūin SS — 2nd Year Volume 4.5</p>

<p>I watched the sun rays through my sunglasses and became one with nature.</p>
<p>I’ve gone cruising with my parents when I was younger, but never since.</p>
<p>“Spending a holiday like this just relaxing ain’t bad from time to time.”</p>
<p>If I had to raise a complaint, it would be how many students there were at this pool.</p>
<p>That being said, it was just a minor problem.</p>
<p>Let’s just relax for the whole day, shall we?</p>
<p>After I had received the drink I’d ordered, I noticed a change in my surroundings.</p>
<p>The 3rd year students, my classmates in other words, suddenly changed their facial expressions.</p>
<p>They looked in the same direction in unison while conversing with their glances.</p>
<p>That piqued my interest and I followed their cue….and Ayanokouji was standing there.</p>
<p>It seems like he’d just arrived at the pool as he surveyed his surroundings.</p>
<p>But it didn’t seem like he had noticed the stares from the 3rd year students, his facial expression unchanged.</p>
<p>Nah, there’s no way he wouldn’t have noticed stares this obvious.</p>
<p>It’s better to say he’s pretending to not notice.</p>
<p>The 1st years and the 2nd years didn’t seem to have taken any actions whatsoever.</p>
<p>“I see… so that’s what’s going on.”</p>
<p>I had planned to be in my OFF-mode today, but my switch had oddly enough turned ON.</p>
<p>“Looks like you’re in for some trouble, Ayanokouji.”</p>
<p>I couldn’t suppress my curiosity anymore and called out to him from behind.</p>
<p>He noticed me, but he looked the same as always.</p>
<p>“What are you talking about?”</p>
<p>It looked like he was playing the fool, but there’s no way he was.</p>
<p>“I’m talking about the 3rd year students. There’s no way you haven’t noticed them, am I right?”</p>
<p>“I’m not quite sure what you are talking about though.”</p>
<p>“While I’m not taking part in it, I’m still a 3rd year student. I’ve at least heard a bit about it.”</p>
<p>“Are you perhaps talking about the stares in my direction?”</p>
<p>“So you did notice after all.”</p>
<p>“I don’t find it particularly troublesome though. I’m just being watched, that’s it.” He said as if it wasn’t worth paying any attention to, but that’s taking it too lightly.</p>
<p>Since the Student Council President is involved, that means trouble is brewing.</p>
<p>It seems Nagumo has started taking Ayanokouji seriously somehow.</p>
<p>Good grief, Ayanokouji is seriously an interesting man.</p>
<p>Indeed, If we were the same age, I could have observed him for yet another year.</p>
<p>Those feelings had unexpectedly begun to form within me.</p>
<p>That’s just how interesting this man is.</p>`,
            4: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">A Dream I Have Seen Before</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kei Karuizawa SS — 2nd Year Volume 4.5</p>

<p>It was the last day of summer vacation.</p>
<p>It was probably the day where every student across the country would get nostalgic.</p>
<p>I was, just as everyone else, reminiscing about how enjoyable the cruise had been.</p>
<p>“Oww, so today is the last day of summer vacation”</p>
<p>Saying it out loud makes it feel that more real, that summer vacation really has ended.</p>
<p>While it makes me feel melancholic, it doesn’t mean there were no pros at all.</p>
<p>I could meet Kiyotaka face to face everyday and not just by phone or chat.</p>
<p>We could be together the whole time from morning to evening.</p>
<p>If we’d been in different classes, met and begun dating, it would surely have been vexing.</p>
<p>Or maybe not, maybe we wouldn’t even have started dating in the first place, I wonder.</p>
<p>I would have been the same as always, hiding my darkness inside my heart while continuing to don a fake mask.</p>
<p>I really—- realise how happy I am right now.</p>
<p>“So I can tell the others about our relationship tomorrow was it?… I think I’m getting nervous now.”</p>
<p>While our relationship itself wouldn’t change, our surroundings may do.</p>
<p>“There’s no need to tell them if you don’t want to. I won’t take responsibility if you do drop down the social rank after all.” He said, but I don’t want to keep this a secret forever.</p>
<p>I had an awesome boyfriend I wanted to brag about… and what’s more…</p>
<p>My feelings for him had grown so much I couldn’t keep quiet about it anymore.</p>
<p>“I’m definitely going to tell them! If something happens, you will protect me so I’m going to be fine! Right?”</p>
<p>That being said, I was only going to tell my closest friends for starters.</p>
<p>But it’s certain that it would spread throughout the whole school like wildfire.</p>
<p>With a shade of exasperation on his face, he nodded back at me.</p>
<p>Then he sat down next to me and held my hand.</p>
<p>His hand was larger than mine but still pretty and sturdy-looking. No signs of ruggedness whatsoever.</p>
<p>Being held by this hand made me feel so comfortable and safe.</p>
<p>I wished we could stay this way forever.</p>
<p>“Kei.”</p>
<p>I suddenly heard my name being called right by my ear. My heart skipped a beat while getting embarrassed.</p>
<p>Having someone call my name that close is—</p>
<p>I faced Kiyotaka straight on and looked at his face. The face of my beloved was inching ever closer to me.</p>
<p>I was caught off guard. Our second kiss.</p>
<p>Or may not?… I’d already forgotten it but if we include that dream I’d seen before, this was our 3rd… kiss.</p>`,
            5: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Sakayanagi's Unexpected Assessment</h1>
<p class="text-center text-sm text-gray-500 mb-12">Arisu Sakayanagi SS — 2nd Year Volume 4.5</p>

<p>I stood up after seeing Ayanokouji-kun returning back inside the ship, escaping the eyes of the 3rd year students.</p>
<p>Showing himself here has to be a coincidence I think, but that’s also why it was the perfect opportunity to meet each other as well.</p>
<p>But before leaving the scene, I moved my attention to Nanase Tsubasa.</p>
<p>There was a chance there were students from the White Room among the 1st year students, but it seems I can remove her from the list. Ayanokouji-kun seems to trust her as well.</p>
<p>Or, fufu. Though the word trust is overselling it.</p>
<p>Taking the White Room’s environment into account, there is no way Ayanokouji-kun has anything close to those feelings.</p>
<p>Whether she was a White Room student or not, just leaving her close by wouldn’t be a hindrance, he probably thinks. That’s all there is to it.</p>
<p>And in order to get information about the 1st year students, it was a fact you had to get intimate with one.</p>
<p>In that sense, Nanase-san was a crucial piece for him.</p>
<p>Right before passing by her, I checked her figure again.</p>
<p>I could see that she didn’t put her high stats in athleticism in the OAA app to shame with her toned arms and legs.</p>
<p>Those parts representing her femininity were well developed and based on her sitting posture, she must have had a good upbringing.</p>
<p>“Maybe that is why boys would want to keep her close by, rather than due to her abilities.”</p>
<p>Then I took a peek at her lunch.</p>
<p>A sandwich and a carton of milk.</p>
<p>It was a balanced, light and quick meal. A good choice.</p>
<p>You wouldn’t think she was a first year student from looking at her body and how little she ate.</p>
<p>As I figured, she wasn’t just talented in school, but was also blessed with a body from birth.</p>
<p>“You’d better treasure those talents of yours.”</p>
<p>Even though so many want to be talented, that they had Nanase’s body proportions, to many girls, that would be a wish that would never be fulfilled.</p>
<p>…. My thoughts ended up drifting off in a strange direction. How unlike me.</p>
<p>“Well, let’s chase after Ayanokouji-kun now then.”</p>
<p>Based on this situation, I could more or less guess where he had to be now.</p>
<p>Even if I, for some unlikely reason read it wrongly, finding him on this ship itself wouldn’t be so hard if I just made some calls.</p>
<p>I had my own kind of weapons.</p>
<p>In order to get Ayanokouji-kun to become my opponent, this was nothing but a minor inconvenience in the end.</p>`
        }
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
            "Satou Maya & Matsushita Chiaki  : During Standby"
        ],
        characters: ["Kei Karuizawa", "Haruka Hasebe", "Sae Chabashira", "Maya Satō", "Chiaki Matsushita"],
        coverImage: "/assets/y2v5.jpg",
        inProgress: false,

        customChapters: {
            1: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Reading the Mood</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kei Karuizawa SS — 2nd Year Volume 5</p>

<p>It was noon and another special exam had begun.</p>
<p>I was, as usual, focused on acting out my character while scanning my surroundings.</p>
<p>I was especially looking at Horikita-san, everything she said and did.</p>
<p>It was something Kiyotaka had instructed me to do, my one important task.</p>
<p>“This is what I think. Our most ideal opponent for the last exam of the year is class B. In other words, Ichinose’s class. There are 3 reasons why that is. First, unlike Sakayanagi-san or Ryuuen-kun, there is a good chance our fight with them will be fair, a battle between our potentials. Even if the special exam itself turns out to be an irregular one, there is no need for us to worry about getting outwitted by some hidden schemes. Next, they are currently Class B. We would get additional bonus class points due to that and mean we can take the lead and take the initiative. And lastly, their strong stance is just for pretense. Our class C and Ryuuen’s class D are already right behind them. They had a lead over us for some time, but their trajectory has been going downhill. Which is why I think they are the ideal opponent for us, don’t you think?”</p>
<p>Had I been the same as before, I’d never have listened to her seriously, I guess.</p>
<p>I’d never been confident, and it was also a pain to listen to her babbling on and on.</p>
<p>But I was different now.</p>
<p>Kiyotaka believed in me and he expected something from me.</p>
<p>Just by knowing this, my ability to concentrate flew through the roofs.</p>
<p>“If anyone is opposed to this, let me hear what you think. If not, if you all don’t mind selecting class B, vote for them so we can get this done quickly.”</p>
<p>Horikita-san finished her speech swiftly without any dead time.</p>
<p>I knew this was the time to interject, but I had to be patient.</p>
<p>At a time like this, it was standard procedure for Hirata-kun to back her up.</p>
<p>“I agree to this as well, Horikita-san. The bonus points we could get from defeating Sakayanagi’s class A are huge, but it’s hard to think of a more difficult opponent. While we shouldn’t underestimate the bonds and the solid fighting style from Ichinose’s class, her class is in my opinion, the best opponent we can hope for.”</p>
<p>He supported her proposal as if he could read the future one step in advance.</p>
<p>I Immediately, and with a clear purpose in mind, raised my voice without any hesitation.</p>
<p>“Me too, me too. We don’t get any bonus points from Ryuuen-kun’s class so he’s not that tasty, and we can’t just laugh it off if we lost to Sakayanagi-san, I guess.”</p>
<p>I said sounding like an idiot while trying to instill the idea that any class other than class B wouldn’t be tempting enough.</p>
<p>This was something even I could understand, so everyone must have realised what I’d tried to convey.</p>
<p>I saw several students nodding and was relieved.</p>
<p>I got shivers as I felt the whole class getting united.</p>
<p>Horikita-san must have understood this as well as it looked like she had nothing more to say.</p>
<p>There were still a lot of time, so we were free to talk for the rest of it.</p>
<p>Truth is, while I’d have wanted to talk to Kiyotaka, I can’t be a bother to him now.</p>
<p>Reading the mood is a rather important skill. Yes, an important skill.</p>
<p>I stood up from my seat and went to talk to the girls sitting nearby to waste time.</p>
<p>Yes, I only need to repeat this as necessary.</p>
<p>I want to finish this special exam quickly so I can return to the dorms.</p>
<p>And then I can go on a date with Kiyotaka.</p>`,
            2: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Facing Tomorrow</h1>
<p class="text-center text-sm text-gray-500 mb-12">Haruka Hasebe SS — 2nd Year Volume 5</p>

<p>School had ended and the shocking revelation was revealed to us all.</p>
<p>While heading home with Kiyopon, I hurriedly entered the convenience store and went for the fried food displayed by the cashier. I usually didn’t anything this fatty, but the convenience and the calories made me give in. There were no other students here so paying went smoothly.</p>
<p>I returned outside where Kiyopon had been standing and waited.</p>
<p>He looked a bit surprised by croquette in my hand, I think. Feeling embarrassed by it, I tried to cover it up with an excuse.</p>
<p>“You know, I got so into talking with Airi during lunch today, so I never got the chance to eat.”</p>
<p>This was, well, an excuse, but also the truth.</p>
<p>I really did receive a shock today.</p>
<p>To think Kiyopon was dating that Karuizawa-san of all people.</p>
<p>It felt like someone had pulled the carpet from under my feet as he’d never shown any hints of dating anyone ever.</p>
<p>Of course, my reaction can’t hold up a candle to Airi’s.</p>
<p>“Sorry for troubling you.”</p>
<p>I knew what my best friend, Airi, felt about him, and so did he obviously.</p>
<p>“No, that’s not it…”</p>
<p>People are free to love whoever they liked, and I already know that cases of mutual love were in the minority.</p>
<p>But still, I’d hoped Airi and Kiyopon one day would come to love one another.</p>
<p>… Or so I think. But there was one part of me that felt something was off, but that’s all tightly sealed up.</p>
<p>Eventually, I’d finished the list of things I wanted to ask him about.</p>
<p>Are you really dating for real? Who confessed first? When did you start dating? Confirming each and everyone of those points was my goal today.</p>
<p>“Trying to ask something of you now feels like bad timing on my part, but there is something I’d like you, and if possible Airi, to help me with.”</p>
<p>“Help you?”</p>
<p>I’d still only eaten half of my croquette, before he switched to a topic that surprised even me.</p>
<p>“It’s currently being kept under wraps for the time being, but one of the attractions we’re going to do during the school festival has been decided on already.”</p>
<p>“Oh, is that so?”</p>
<p>I’d heard nothing had been decided just yesterday so this was a bit surprising.</p>
<p>“Since we want to avoid any leaks, only Horikita, I and the ones planning it are in the know. So, we’re going to make a maid café.”</p>
<p>“M-maid café? Well, heh…? Why am I not surprised? It’s a bit unexpected though. I never thought a person like Horikita-san would ever acknowledge such an event, you know?”</p>
<p>“She’s probably indifferent towards all proposals, I think. From her unbiased point of view, we simply may have a chance if we go for a maid café and so she accepted it, I guess.”</p>
<p>Well, there are a lot of cute girls in our class, I must admit. We could probably earn a lot form those adults coming to visit the school during the festival but still, something feels a bit… but I can see why it could work.</p>
<p>“I see, I see. So, what’s the reason you are telling me about this?”</p>
<p>“Truth is, after I came to know about this, I was asked to take care of various stuff.”</p>
<p>Kiyopon is going to manage a maid café?</p>
<p>While his very image doesn’t suit at all, I could see the reasoning behind letting him take care of it.</p>
<p>I bet Horikita managed to string him up and pushed the task to him by force.</p>
<p>“She’s quite the girl since she’s able to put you into this situation.”</p>
<p>But since he’s telling me this, it can only mean only thing…</p>
<p>“And so, I was hoping you and Airi could help out in the café?”</p>
<p>Of course, it would boil down to this, I guess.</p>
<p>As for me, the first thing that popped up inside my head when I heard about the maid café was Airi.</p>
<p>She was shy and had no confidence to speak of, but this was a perfect chance for her.</p>
<p>“If you had asked me this before this thing with Karuizawa-san happened, I would have said yes even though I have some qualms about it. I don’t like to wear something like cosplay in front of many people, but I wouldn’t have refused if a friend asked me. Your timing is pretty bad, you know?”</p>
<p>There were no guarantees that Airi would have been able to smile while participating in this festival while being heartbroken.</p>
<p>“It’s a bit troubling that I can’t blame you for it, Kiyopon. I said it before but, I think people are free to love whoever they want and that I can understand there are things you can’t speak about. Airi was also free to fall for you, and you were also free to reject her…”</p>
<p>To tell the truth, I need courage in order to talk to her about this later.</p>
<p>But… yes, this may be something necessary. This was perhaps a steppingstone, a large step towards making her able to smile and move forward.</p>
<p>“I can’t promise you anything. But once she’s calmed down, I will talk to her.”</p>
<p>In fact, if this could become a chance to make her stand up again, I would try talking to her at once.</p>
<p>“You’re okay with it?”</p>
<p>He seemed a bit surprised by my answer, perhaps since he never thought I would accept.</p>
<p>“That girl needs to accept reality sooner or later anyway. And although I don’t know about you, having Karuizawa-san as her opponent doesn’t mean she has to give up, you know? Even though you may be gung-ho about her, there is a chance she can reject you. Right?”</p>
<p>Yes, that’s right. Airi still has a chance.</p>
<p>There is still a year and a half left.</p>
<p>If she can hit a home run with loaded bases at the very end, it would be Airi’s victory.</p>`,
            3: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">A Restless Mind</h1>
<p class="text-center text-sm text-gray-500 mb-12">Sae Chabashira SS — 2nd Year Volume 5</p>

<p>I was preparing for the special exam tomorrow.</p>
<p>I went to the staff room do the final checks on the equipment I’d use tomorrow.</p>
<p>But no matter what I did, I couldn’t stop thinking and this worry wouldn’t quite disappear.</p>
<p>I stood up from my desk in order to calm myself down.</p>
<p>I remembered Satou who visited me yesterday asking for permission to rent a classroom in the special section of the school for the sake of the cultural festival.</p>
<p>A maid café, was it?</p>
<p>Since this was the very first cultural festival of this school, there were many things we still didn’t know.</p>
<p>The teachers were still investigating the most correct attractions to employ.</p>
<p>While heading for the special section, I happened to meet a student heading away from the direction I had planned to visit.</p>
<p>He had this unmotivated expression, but it could be said this was his usual look anyway.</p>
<p>“Did you check up on Satou and the others?”</p>
<p>I asked and Ayanokouji nodded lightly.</p>
<p>“I listened to the program and what they were planning on doing. It’s not a bad idea.”</p>
<p>“That’s for sure. They can’t start to prepare for it unless their proposal has been accepted in the first place.”</p>
<p>“I was going to check up on them since I’m personally a bit curious how it’s going. How are they?”</p>
<p>That was a lie, but also the truth.</p>
<p>If this could serve to distract my thoughts, anything goes.</p>
<p>“Horikita looks like she’s optimistic on their behalf. Seems she thinks they have a winning chance. They are finalizing the last details now.”</p>
<p>No problems on their side. That was relieving to hear, and I had no more reason to visit them.</p>
<p>“I see. Then there’s no reason for me to check up on them anymore.”</p>
<p>“I got caught by them, so it seems trouble is heading my way.”</p>
<p>“In other words?”</p>
<p>“I’ve become their manager as per Horikita’s instructions.”</p>
<p>“You? Oh, that sounds…”</p>
<p>I tried to imagine it in my head, but no matter who many times I tried to picture it, he and maid cafés had no compatibility whatsoever.</p>
<p>By the look he had, I could see that even he agreed with me.</p>
<p>“It will be good for you. Horikita sure do have some interesting ideas.”</p>
<p>I surprisingly began to look forward to how this cultural festival would go.</p>
<p>He looked like he was going to vocalize even more complaints to me.</p>
<p>I tried to guide him a bit as I really hope this festival will become a good memory to him.</p>
<p>“This is a chance to learn about things other than studying so accept your fate, Mr. Maid Café Manager.”</p>
<p>I somehow got more relaxed and did something I usually would never do.</p>
<p>“Ayanokouji… could I have some of your time later?”</p>
<p>Am I ready to confront this special exam?</p>
<p>Or was I confronting it already?</p>
<p>I began imagining it.</p>`,
            4: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">During Standby</h1>
<p class="text-center text-sm text-gray-500 mb-12">Maya Satō & Chiaki Matsushita SS — 2nd Year Volume 5</p>

<p>“Eh? Did you really invite Ayanokouji-kun too?”</p>
<p>School had ended and Satou had walked to a classroom in the special section of the school building in order to meet up with Matsushita, Mii-chan and Maezono.</p>
<p>There she reported to the others about how she had called out to Horikita and Ayanokouji.</p>
<p>“Yes, I remained in the classroom for a bit and since he was there with Horikita-san, I thought, why not just invite him as well, so I just did.”</p>
<p>“You still haven’t given up on him yet? After what you said about just being friends? Lend me some of that courage~”</p>
<p>“N-no, that’s not it. I just thought it would be nice to hear a boy’s opinion, that’s all. I mean…”</p>
<p>“But the truth is?”</p>
<p>Her true feelings were seen right through by Matsushita who made a hand gesture mimicking that of a reporter holding a microphone during an interview.</p>
<p>“S-since… we’re going to show the boys later anyway, I wanted to… show him first, I think.”</p>
<p>Satou embarrassedly blushed while Matsushita grinned like a cat.</p>
<p>“Uuuuu, this is so embarrassing… I can’t do cosplay in front of the boys…”</p>
<p>“Hey, Mii-chan! If you’re going to take this attitude, you won’t be able to hold up during the real deal, you know? If you don’t do your best, Horikita-san may cut you down without hesitation.”</p>
<p>“Uuuu… But you said only Satou needed to talk…”</p>
<p>She hugged her own chest along with the Chinese maid uniform as she trembled like a jelly.</p>
<p>“Your cuteness is to blame, Mii-chan! Oh, it’s almost time so you should go change now. I’ll stand guard in the hallway so rest assured!”, Maezono said before she before she exited the classroom.</p>
<p>While the three remaining girls had lots of thoughts about this, they began to change into these unfamiliar costumes.</p>
<p>“But oh well, this is good practice for Mii-chan as well since showing yourself to the boys will be important, you know. We could get advice on like, how they see us which is going to be important for sure.”</p>
<p>“Right, right? Ayanokouji-kun won’t look at us in a weird way. And he is dependable too.”</p>
<p>“I guess. If we had to choose a boy from our class, it would have to be Ayanokouji-kun or Hirata-kun anyway.”</p>
<p>Mii-chan’s hands stopped for a second when she heard Hirata’s name.</p>
<p>“Oh my, oh my, who is’t didst thee bethink of? Hold not back and just bid us, shall thee?”</p>
<p>“I-m n-not s-saying!”</p>
<p>“Lots of girls are vying for his attention, you know~? Ah, but you’ve been hanging out with Kouenji-kun lately, haven’t you? I saw you guys during summer vacation from time to time. I was so sure you’ve switched targets.”</p>
<p>Maybe she was trying to steer the conversation away from Hirata, but she grabbed onto this topic as she looked a bit too restless talking about Hirata.</p>
<p>“Ehh!? There is nothing between me and Kouenji-kun at all… it’s just that it’s surprisingly easy to talk to him.”</p>
<p>“That’s—- surprising, yeah. So there really is someone on the same wavelength as him.”</p>
<p>“How should I say it, he’s very knowledgeable, and he’s seeing things I can’t see…”</p>
<p>Wang began to talk about the treasure hunt game they participated in on the boat during summer vacation and how Kouenji’s unique way of looking at things had won them a huge reward.</p>
<p>But despite hearing all of this, Matsushita and Satou’s evaluation of Kouenji did not change whatsoever.</p>
<p>“Hey you three! Stop talking and change will you!”</p>
<p>Maezono warned through the door and the three girls made some flustered voices as they resumed changing clothes.</p>`
        }
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
        inProgress: false,

        customChapters: {
            1: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Something That Can’t be Forgiven</h1>
<p class="text-center text-sm text-gray-500 mb-12">Sae Chabashira SS — 2nd Year Volume 6</p>

<p>It was after homeroom had ended and my conversation with Horikita was soon about to end.</p>
<p>“We’re soon out of time. Just let me tell you one last thing, although it may look like I’m meddling too much. The most important thing is what you, Horikita, wants to do with Kushida. Think carefully about this.”</p>
<p>The focus was to make Kushida return to class, but this wasn’t as important now.</p>
<p>I’m not sure how useful my advice would be to her, but at least I hope it may have cleared her thoughts a bit.</p>
<p>“Thank you, teacher. I’ve decided what to do now.”</p>
<p>“Don’t mind it. As your teacher, this is nothing— it’s surely something to be expected after all.”</p>
<p>After sending her off, I walked back to the staff room.</p>
<p>After going down the steps and into the hallway where the staff room was, I heard someone running from behind.</p>
<p>“Don’t run in the hallway…”</p>
<p>“Sa~~~~e-chan. Yah-ho!”</p>
<p>I planned on warning the student, but I knew it was a teacher by instinct.</p>
<p>“Is that you, Chie? How are you going to set an example if even you are running full ahead?”</p>
<p>“Bu~ut, I saw you right ahead!”</p>
<p>“Stop with that Bu~ut! Just call for me like normal.”</p>
<p>There was no need to run up to me this way,</p>
<p>“By the way, you were taking quite a long time talking with Horikita-san.”</p>
<p>“… so you even heard that?”</p>
<p>When in the world did she start?</p>
<p>There was a huge risk of this leaking If Chie heard about Kushida.”</p>
<p>“From when I heard her say thanks to you.”</p>
<p>When it was almost over, in other words.</p>
<p>I can’t exclude the fact it may have been a lie, but it was true I didn’t notice her before either.</p>
<p>“Looks like even the model student Horikita has lots of worries.”</p>
<p>“She’s just a child, right? But that’s not what I wanted to say.”</p>
<p>She smiled as she walked right beside me. Her eyes weren’t laughing.</p>
<p>“Why have you gotten closer to your students now?”</p>
<p>“There’s nothing weird for a homeroom teacher, is it?”</p>
<p>“It is. You are not that kind of a teacher. You have never been until now, have you?”</p>
<p>“That may be true.”</p>
<p>“I won’t acknowledge it. There is no way Sae-chan would ever act like a teacher.”</p>
<p>“… I know.”</p>
<p>I replied, but my reply never reached her.</p>`,
            2: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Complicated Feelings</h1>
<p class="text-center text-sm text-gray-500 mb-12">Arisu Sakayanagi SS — 2nd Year Volume 6</p>

<p>I was having a good time chatting with Ayanokouji-kun who excused himself from joining the sport festival and was absent.</p>
<p>I always had to be careful about what others until now, and today was the only chance I had where nobody could interfere.</p>
<p>“You were just observing, but even made me come here and visit you. You are not planning on doing anything during the festival either, right? … I see.”</p>
<p>I pieced together all the scattered hints he had been giving me during our conversation.</p>
<p>“In other words—Eh”</p>
<p>Suddenly, he gently grabbed my shoulders and pushed me back.</p>
<p>Usually, this amount of strength was nothing to most people, but since my body was rather weak and I hadn’t expected it, I fell backwards in a daze.</p>
<p>It didn’t hurt of course. I just fell back from where I sat on the bed.</p>
<p>I should have been seeing his face right now, but my eyes were spinning while looking at the ceiling.</p>
<p>Before I managed to sort out the situation, Ayanokouji-kun began mounting me.</p>
<p>He had his hands on both sides of my head leaving me without any way to escape.</p>
<p>“E-excuse me?”</p>
<p>I didn’t look like he had succumbed to his primal desires.</p>
<p>It should have been impossible, but somehow the possibility was within my calculations.</p>
<p>My thoughts were all scrambled and that hindered me from coming to an answer.</p>
<p>“My school life is founded on this plan I have. The fact you would come here today, would show interest in and eventually reach the answer as within possibility.”</p>
<p>As if he were making fun of me, he reached his conclusion against this situation.</p>
<p>“You will be hindrance if you told anyone else about this.”</p>
<p>“You think I… would leak this?”</p>
<p>I wasn’t so naïve that I didn’t understand how much of a bother that could be to him.</p>
<p>I thought we both understood that…</p>
<p>“The chances aren’t zero. You may try to blackmail me by saying you’d expose it unless I agreed to have a match with you. I’d have no other options in that case.”</p>
<p>“I see, that’s certainly true… But, couldn’t I just reveal the truth about the White Room instead?”</p>
<p>His true goal was hidden.</p>
<p>That was definitely true, but I still haven’t managed to calm myself enough right now to think about it.</p>
<p>While my mind was working, trying to calm down my thoughts, I continued to talk to him.</p>
<p>“Shall we start the special lesson?”</p>
<p>I saw his eyes as he muttered this and finally understood his goal.</p>
<p>I couldn’t help but laugh, close my eyes and wait for the lesson.</p>
<p>If this was his goal, I won’t mind.</p>
<p>With these complicated feelings, I acknowledged that I would be used by him.</p>
<p>But, do remember this, Ayanokouji-kun.</p>
<p>If you are going to use me—I’m going to use you until the very end.</p>`,
            3: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">That’s What I Believe In</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kayano Onodera SS — 2nd Year Volume 6</p>

<p>A hit with unbelievable power brushed against Housen-kun’s racket.</p>
<p>His rage was being transformed and brought into the game itself, my ideal form of sportsmanship.</p>
<p>The scattering sweat sparkled like gemstones.</p>
<p>“HELL YEEEAAAAAAAAAAAHH!!”</p>
<p>Seeing Sudou yelling from his very core, I couldn’t help but frolicking in this victory.</p>
<p>“We did it! We did it!”</p>
<p>Housen-kun, who we had been playing with, looked frustrated and smashed his racket to the ground.</p>
<p>“We won Onodera! All thanks to you!”</p>
<p>Sudou ran towards me, and I raised my hand for a high-five but was met with air instead.</p>
<p>I was embraced with both of his hands around me in a hug.</p>
<p>“W-w-wha,, wha-wha!?”</p>
<p>A happiness followed by a surge of panic.</p>
<p>But I was the only one flustered as Sudou just looked all happy and excited.</p>
<p>He was starting to squeeze harder, so I tried to pull out.</p>
<p>“Wai-, ouch, it hurts Sudou-kun!”</p>
<p>He finally noticed my distress and now he was the only flustered.</p>
<p>“M-my bad!”</p>
<p>We were trailing due to my injury, but turned that into victory, never giving up until the very end.</p>
<p>Our beliefs and tenacity beat Housen-kun’s by a mile.</p>
<p>“Congratulations! You won all your events, Sudou-kun.”</p>
<p>“Yeah, thanks a lot Onodera. If not for you, we’d have lost this match for sure.”</p>
<p>“That’s not true. I was probably a hindrance…”</p>
<p>“Could have been a fluke, but when you got hurt and I just snapped, I thought we’d lose this. But you were the one to call me back.”</p>
<p>His eyes looking straight at me felt like they were sucking my in.</p>
<p>“I see, then we… are a pretty good combo, right?”</p>
<p>“Of course! Easy to work with and rely on. Yeah, you are the best Onodera. Ah, maybe Suzune was watching me from somewhere too?”</p>
<p>His eyes that I felt I could watch for eternity withdrew from me and scanned the area around the gymnasium.</p>
<p>“Suzune…right?”</p>
<p>I muttered. He reacted like a dog at that name and suddenly looked questionably at me.</p>
<p>“Eh? Where? Where is she!?”</p>
<p>“Ah, eh well, sorry, looks like it was another person.”</p>
<p>“Shit. I see, maybe she’s on the field then…”</p>
<p>I hate losing and that lit the fighting spirit within me ablaze.</p>
<p>Yes, I have to admit it.</p>
<p>I’m, interested in Sudou-kun.</p>
<p>I can catch up and show some results, no matter how far ahead he is.</p>
<p>That’s the sportsmanship that I believe in.</p>
<p>“Let’s eat on our way next time after clubs, okay?”</p>
<p>“Eh? Ah, sure I guess. More importantly, help me look for Suzune. Where are you, Suzune.”</p>
<p>“Hahaha, absolutely not.”</p>`,
            4: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">The Truth is, I’ve Always</h1>
<p class="text-center text-sm text-gray-500 mb-12">Ichika Amasawa SS — 2nd Year Volume 6</p>

<p>As I entered Senpai’s room, I began searching with conviction.</p>
<p>But as expected of him. He had cleaned it all in that short amount of time.</p>
<p>But I that wasn’t my true goal. My true goal was to check if this room was being wiretapped or not. It did look too clean for it to not be wiretapped. Had he already made a move, I thought but…</p>
<p>“They should just ignore me and enjoy their school life. I highly recommend it.”</p>
<p>To him who was fully enjoying his freedom, I, who was White Room student was just a nuisance.</p>
<p>I know that.</p>
<p>“Yes, I agree as well. I think I should do that too but…”</p>
<p>That’s why I want do expose Takuya and let them fight it out ASAP.</p>
<p>If he could observe Ayanokouji-senpai from at close, touch him, feel him, he would understand.</p>
<p>But Senpai wouldn’t bite. No emotions at all as he was just waiting for me to leave.</p>
<p>I wanted to upset him so I face my butt in his direction.</p>
<p>From this angle, that and that could be seen and I wondered if that would work.</p>
<p>“Drawn in by my underwear? How pervy.”</p>
<p>I am the one showing him so what the heck am I saying, right?</p>
<p>“Sorry, I’m more worried about what else you may be doing if I take my eyes off you.”</p>
<p>Clever, but uninteresting.</p>
<p>Our conversation would naturally return to just discussing daily topics, so I moved the topic back.</p>
<p>I turned around and got closer to him, but he didn’t even raise an eyebrow.</p>
<p>“I think they may have gone on a rampage by now? I feel like they have gotten their methods and goals all wrong. Instead of returning to the White Room, they are more focused on expelling you.”</p>
<p>“What a bothersome topic.”</p>
<p>It didn’t show on his face, but it was probably true that he thought it was a nuisance.</p>
<p>“That may be true for you, yeah. I have been thinking this for a while, but how about I just reveal them to you and just let you do your thing?”</p>
<p>But didn’t even bother getting to know. His premise was that I was untrustworthy and he didn’t want to listen to unnecessary information from me.</p>
<p>He didn’t answer my proposal as he read his opponents one, two steps ahead.</p>
<p>The truth is, I want to be by his side.</p>
<p>Even if I’m a nuisance, just being close to the person you look up to. But…</p>
<p>There is no guarantee that my school life could go on forever.</p>`
        }
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
            "Kei Karuizawa : Behind the Scenes"
        ],
        characters: ["Hiyori Shiina", "Kikyō Kushida", "Suzune Horikita", "Sae Chabashira", "Kei Karuizawa"],
        coverImage: "/assets/y2v7.jpg",
        inProgress: false,

        customChapters: {
            1: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Sprouting Feelings</h1>
<p class="text-center text-sm text-gray-500 mb-12">Hiyori Shiina SS — 2nd Year Volume 7</p>

<p>Everyone in our class was doing their very best working on the Kimono Café for the school festival.</p>
<p>Ryuuen-kun had warned that those who tried skipping would get punished and that seems to have worked, I guess.</p>
<p>I was the cashier so I didn’t have a lot of things to actually do.</p>
<p>And that is why, as per usual, I read another book I had borrowed.</p>
<p>Then a student entered the classroom with a casual and light stride.</p>
<p>It was Ayanokouji-kun.</p>
<p>He, was the one Karuizawa Kei-san was dating.</p>
<p>I wanted to hide myself somehow and hid behind my own book.</p>
<p>I should have known. My curiosity won out in the end and I took a quick peek.</p>
<p>Ayanokouji-kun looked as if he had witnessed something unusual and walked towards me.</p>
<p>“… Good day.”</p>
<p>I couldn’t ignore him, so I said that.</p>
<p>I’m not sure I managed to act like usual.</p>
<p>“Long time no see. I hear you haven’t turned up at the library lately?”</p>
<p>“That’s not true. It’s a bit, I mean, I’m there at a different time now.”</p>
<p>It was my sense of thoughtfulness to avoid meeting with Ayanokouji-kun, who also loved reading.</p>
<p>Seeing someone like me talking with her boyfriend may make any girl worried, I think.</p>
<p>“So, you are going to work at the store as well?”</p>
<p>“I am just working at the cashier. I’m not especially good at talking with people… nor with walking around. I have practiced carrying the trays with food, but that didn’t go well.”</p>
<p>I thought I was going to do better to be honest…</p>
<p>“By the way, Ibuki-san is also participating.”</p>
<p>“Ibuki? But she’s not the kind of person who would ever wear that outfit, right?”</p>
<p>“It seems she made a bet with Ryuuen-kun to be completely exempted from the student festival.”</p>
<p>“And she lost.”</p>
<p>Ibuki was kinda cute when she stamped her feet in frustration.</p>
<p>It was really fun to talk with Ayanokouji-kun like this after all.</p>
<p>I… wanted to meet him at the library again.</p>
<p>That feeling grew within me like a sprout.</p>
<p>…It should be fine… right?</p>
<p>“I will be at the library again later, so please do come.”</p>
<p>She shouldn’t become angry with me if I meet him as just a friend, right? Surely…</p>`,
            2: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Way to Survival</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kikyō Kushida SS — 2nd Year Volume 7</p>

<p>It had been 10 minutes since all the girls working as maids started worrying about what was happening right outside the classroom.</p>
<p>That was naturally due to the the insane amount of customers waiting in the hallway.</p>
<p>I had a little bit of extra time on my hand and went out to check.</p>
<p>Having a queue was something worth celebrating, but Ayanokouji-kun didn’t look happy at all as he looked at the same scenery as me.</p>
<p>“This is bad. We’re starting to see customers tired of waiting and they are leaving.”</p>
<p>That’s right. Even though we had so many customers, we couldn’t service all of them.</p>
<p>The people waiting in front must have waited close to 30 minutes already.</p>
<p>Think.</p>
<p>Ayanokouji-kun and I were not the only ones worried about when this queue would collapse.</p>
<p>The girls working inside the maid café must be worried sick as well.</p>
<p>In that case I had to do something.</p>
<p>I know very well how difficult it is to overwrite bad impressions or your own image, but I also have no other options but to take the challenge.</p>
<p>“Ayanokouji-kun, can I leave for a bit? I have a plan.”</p>
<p>“What are you planning on doing?”</p>
<p>“The guests waiting are bored, but they all show strong interest in the maid café. But they are getting hungry and it’s not surprising they are starting to leave.”</p>
<p>“You’re right.”</p>
<p>The quickest method to keep them here is…</p>
<p>Is the department store food sampling plan!</p>
<p>Baiting them with small pieces of food and pressuring them to make a purchase with smiles and coercion.</p>
<p>I was going to reproduce phenomena by force.</p>
<p>I grabbed a small bag with cookies from the souvenir corner and walked towards the people waiting in front.</p>
<p>“I’m sorry for the wait!”</p>
<p>I politely took a cookie and presented them to each customer while keeping a low profile.</p>
<p>And I repeated this until I reached the end of the queue, scattering feed all over.</p>
<p>All I had to do now was to stick close to them and watch.</p>
<p>If someone was about to leave I would use glances and gestures to appeal to them and convey how bad it would be for me if they left.</p>
<p>I can contribute to the class as well as make my classmates feel indebted to me, an important technique.</p>
<p>It was like killing two birds with one stone.</p>
<p>That’s my weapon. A strategy to avoid expulsion and to emphasize my own presence at the same time.</p>`,
            3: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">The Dream I Will Forget After Awakening</h1>
<p class="text-center text-sm text-gray-500 mb-12">Suzune Horikita SS — 2nd Year Volume 7</p>

<p>It had been 10 minutes since all the girls working as maids started worrying about what was happening right outside the classroom.</p>
<p>That was naturally due to the the insane amount of customers waiting in the hallway.</p>
<p>I had a little bit of extra time on my hand and went out to check.</p>
<p>Having a queue was something worth celebrating, but Ayanokouji-kun didn’t look happy at all as he looked at the same scenery as me.</p>
<p>“This is bad. We’re starting to see customers tired of waiting and they are leaving.”</p>
<p>That’s right. Even though we had so many customers, we couldn’t service all of them.</p>
<p>The people waiting in front must have waited close to 30 minutes already.</p>
<p>Think.</p>
<p>Ayanokouji-kun and I were not the only ones worried about when this queue would collapse.</p>
<p>The girls working inside the maid café must be worried sick as well.</p>
<p>In that case I had to do something.</p>
<p>I know very well how difficult it is to overwrite bad impressions or your own image, but I also have no other options but to take the challenge.</p>
<p>“Ayanokouji-kun, can I leave for a bit? I have a plan.”</p>
<p>“What are you planning on doing?”</p>
<p>“The guests waiting are bored, but they all show strong interest in the maid café. But they are getting hungry and it’s not surprising they are starting to leave.”</p>
<p>“You’re right.”</p>
<p>The quickest method to keep them here is…</p>
<p>Is the department store food sampling plan!</p>
<p>Baiting them with small pieces of food and pressuring them to make a purchase with smiles and coercion.</p>
<p>I was going to reproduce phenomena by force.</p>
<p>I grabbed a small bag with cookies from the souvenir corner and walked towards the people waiting in front.</p>
<p>“I’m sorry for the wait!”</p>
<p>I politely took a cookie and presented them to each customer while keeping a low profile.</p>
<p>And I repeated this until I reached the end of the queue, scattering feed all over.</p>
<p>All I had to do now was to stick close to them and watch.</p>
<p>If someone was about to leave I would use glances and gestures to appeal to them and convey how bad it would be for me if they left.</p>
<p>I can contribute to the class as well as make my classmates feel indebted to me, an important technique.</p>
<p>It was like killing two birds with one stone.</p>
<p>That’s my weapon. A strategy to avoid expulsion and to emphasize my own presence at the same time.</p>`,
            4: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">An Experience I Want to Forget</h1>
<p class="text-center text-sm text-gray-500 mb-12">Sae Chabashira SS — 2nd Year Volume 7</p>

<p>I was looking into the mirror inside the changing room while letting slip a sigh I can only believe was the longest of my entire life.</p>
<p>“I-I’m going to look like this in front of people? Really…?”</p>
<p>I was looking in the mirror in aghast at my appearance that didn’t fit me at all.</p>
<p>As a teacher, I have only worn suits, or jerseys thus far. And now, suddenly a maid uniform?</p>
<p>“This is bad… I’m getting dizzy.”</p>
<p>I feel like I’m about to faint just by imagining the fate that is waiting for me. I should pretend to be sick… no, my opponent is that Ayanokouji. It won’t be that simple. I can’t help them as their homeroom teacher, but just like how clergymen have to follow the rules, I have a duty to respond to my students’ requests.</p>
<p>Ayanokouji has already paid the private points.</p>
<p>“―I just have to do it.”</p>
<p>I steeled myself as their teacher and vigorously exited the changing room.</p>
<p>I sprinted all the way to the first floor of the special section of the scho—of course I couldn’t.</p>
<p>I wanted to run so bad, but a teacher should be a model for others to follow so I walked.</p>
<p>I walked… but my steps quickened somehow. It was obvious to me how the students and the visitors were staring at me as I went.</p>
<p>“What is she doing at that age?”</p>
<p>“That person, eh? Wait a bit…”</p>
<p>‘I don’t hear anything’ I continued to pretend while the words repeatedly reverberated inside my head.</p>
<p>Please, anyone! Just kill me already!</p>
<p>I frantically arrived in front of the maid café. The way felt like it was over 5 times longer than I remember.</p>
<p>“I-I’m here Ayanokouji. H-hurry up and let me in!”</p>
<p>The queue outside the café was pretty long which should have been a good thing.</p>
<p>But to me, this was hell.</p>
<p>“Thank you for waiting.”</p>
<p>Ayanokouji welcomed me by the entrance and let me inside.</p>
<p>“So, what should I do now…eh?”</p>
<p>“You don’t have to do anything. Please just stand there.”</p>
<p>“W-what?”</p>
<p>“Haven’t I said this before? You don’t have to do anything. Alright, We’ll be in your care.” He said and went to the hallway leaving me behind.</p>
<p>Am I… just going to…stand here in silence?</p>
<p>I glanced around the classroom in fear while observing how all the students and visitors were looking back at me without reservations.</p>
<p>…Aaahh… don’t think, me…</p>
<p>Please, let me crawl inside a hole somewhere…</p>`,
            5: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Behind the Scenes</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kei Karuizawa SS — 2nd Year Volume 7</p>

<p>It was after school, just after sharing the news with the class that the maid café had been chosen as the class project and Kei had come to my room to hang out.</p>
<p>"...You know, I had something I wanted to try doing for our class project."</p>
<p>"Really? You should've proposed it."</p>
<p>According to the policy established by Horikita, those whose ideas were accepted would be rewarded according to their sales.</p>
<p>It wasn't a bad idea to suggest just for the sake of it, if Kei wanted private points.</p>
<p>"I know, but…"</p>
<p>Although she had something that she wanted to try, there was no sign of her answering right away.</p>
<p>For a while, all I did was wait for her in silence as I wondered why the answer didn't come.</p>
<p>"It’s embarrassing."</p>
<p>"Is it something embarrassing?"</p>
<p>"N-No, it's not like that."</p>
<p>Kei hurriedly waved her hands in the air to deny whatever she was thinking at the moment.</p>
<p>"It's just… my idea is childish."</p>
<p>"That's what a cultural festival should be about, right?"</p>
<p>It was unclear what other classes would be doing, but for class 3-A, it would be a haunted house and a maze. In that sense, even if her idea was a bit childish, there should not be a problem.</p>
<p>"Though it depends on the budget, there is still a possibility your idea may happen."</p>
<p>The class would continually seek any ideal project with a low budget that could generate revenue.</p>
<p>"Hmm…"</p>
<p>"Anyway, let's hear it for now."</p>
<p>Even for long periods when it was just the two of us, it didn't matter what we chatted about.</p>
<p>"Kiyotaka, you like books, don't you?"</p>
<p>Suddenly, she asked me a question that seemed irrelevant.</p>
<p>"Huh? Yeah, I do."</p>
<p>I never hated reading. Because during the times when conversations weren't allowed, reading books was the only thing that I could do.</p>
<p>"Do you like fairy tales?"</p>
<p>"Fairy tales?"</p>
<p>I liked books, but her statement was unexpected.</p>
<p>"I have read them."</p>
<p>"Ah, as expected even Kiyotaka is the same."</p>
<p>Kei looked a bit surprised.</p>
<p>"What kind of person do you think I am?"</p>
<p>"Look, you usually don't smile at all. You don't strike me as someone who reads fairy tales."</p>
<p>"That's very rude."</p>
<p>"What fairy tales have you read?"</p>
<p>"What does this have to do with the class project?"</p>
<p>"Just tell me about it come on ~"</p>
<p>Apparently, she was more interested in the fairy tales I had read.</p>
<p>"Let's see…" I thought back to the times when I was much younger. "First, there's a 'Flying Classroom'."</p>
<p>"...Eh?"</p>
<p>"I also read The Secret Garden and The Happy Prince."</p>
<p>"....."</p>
<p>In front of me, Kei fell into silence.</p>
<p>"What's wrong?"</p>
<p>"Huh? What's wrong with you?"</p>
<p>Another strange silence fell between us once more.</p>
<p>"Huh?"</p>
<p>Did I say something weird? All of those should be fairy tales.</p>
<p>"Are they really fairy tales?"</p>
<p>"Yeah, they are called children's literature."</p>
<p>I explained while having no idea why Kei seemed confused.</p>
<p>"Your answer is completely different from what I imagined…"</p>
<p>"What did you imagine?"</p>
<p>"Well, normally people will say something like The Three Little Pigs or Little Red Riding Hood."</p>
<p>I see, I've definitely heard those titles before.</p>
<p>"I never read them."</p>
<p>"EEEEEEEHHHH?"</p>
<p>"Is it that surprising?"</p>
<p>I thought it was a bit rude.</p>
<p>"How do I put this, hmm, it turns out that Kiyotaka is Kiyotaka after all."</p>
<p>"Then, let's get back to the original topic. How is the fairy tale related to the festival's project?"</p>
<p>"That's… I've always wanted to do a play or something like that."</p>
<p>"A play? That's not a bad proposal."</p>
<p>"Really?"</p>
<p>"Sure, it may not be realistic because we've already gone through a bit of preparation for the festival, but ignoring the fact that it would be accepted or not, that's not a bad proposal."</p>
<p>In fact, if Kei had the image of cultural festivals having plays, then it would be worth reconsidering.</p>
<p>"What kind of fairy tale did you want to perform?"</p>
<p>I was also somewhat interested.</p>
<p>"Since I'm a girl, something like Cinderella or Beauty and the Beast I think."</p>
<p>Both of those were fairy tales that girls seemed to like.</p>
<p>"But…" After saying that, she was silent for a moment. "The play I wanted to do the most was Sleeping Beauty."</p>
<p>"Sleeping beauty…"</p>
<p>I remembered the title, but unfortunately, I never read it.</p>
<p>"What kind of story is it?"</p>
<p>"Huh? You don't know that too? And you call yourself a book lover?"</p>
<p>"Sorry about that."</p>
<p>It might have broken my heart a little.</p>
<p>Listening to Kei stammeringly explain the story, I somehow managed to put the pieces together.</p>
<p>A daughter born to royalty was put into a long slumber by a witch's curse, and eventually, some prince showed up and kissed her.</p>
<p>She woke up and they lived happily ever after.</p>
<p>Well, that sounded like the classic fairy tale.</p>
<p>"I didn't like it that much when I was little, but somehow, it overlapped with myself. My heart had also been asleep for a long time, but Kiyotaka woke me up from that sleep…"</p>
<p>Feeling fascinated by the fantasy, she went on;</p>
<p>"I'd play the princess, and Kiyotaka would play the prince. Wouldn't it be great to do a play like that?"</p>
<p>"...I see."</p>
<p>After listening, I understood.</p>
<p>"You were right not to bring it up. If you tell the classmates about your casting choice, not only would they laugh, or maybe stones would be thrown."</p>
<p>"I-I know! That's why I didn't bring it up."</p>
<p>Having proper self-control was very helpful. Although her point of view regarding the play was good, it was too self-serving in more ways than one.</p>
<p>"My prince is a bit mean, isn't he?"</p>
<p>I didn't want to be told that.</p>
<p>"Will you wake me up with a kiss if I fall asleep again?"</p>
<p>"Is one kiss enough?"</p>
<p>"Hmm, who knows? Maybe I need ten kisses, or maybe a hundred ~"</p>
<p>Having read that as a sign from Kei, I kissed her as a response. Then she smiled.</p>
<p>"As I thought, I don't really need to be in a fairy tale."</p>
<p>"Why so suddenly?"</p>
<p>"Right now, reality is good enough for me."</p>
<p>Kei happily leaned against me, before closing her eyes as if she was sleeping.</p>`
        }
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
            "Sae Chabashira : Confused and Resolute",
            "Suzune Horikita : Inside the Changing Room",
            "Maya Satō : At the corner of the Front Stage"
        ],
        characters: ["Miki Yamamura", "Kikyō Kushida", "Sae Chabashira", "Suzune Horikita", "Maya Satō"],
        coverImage: "/assets/y2v8.jpg",
        inProgress: false,

        customChapters: {
            1: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">A Subtle Change</h1>
<p class="text-center text-sm text-gray-500 mb-12">Miki Yamamura SS — 2nd Year Volume 8</p>

<p>Early in the morning, the second-years were enjoying themselves with a snowball fight.</p>
<p>I couldn't hide the confusion in my heart as I blended into the light. I was supposed to live a low key, quiet, solitary life. But he, as a matter of course, found the inconspicuous me and approached me.</p>
<p>“It's so lively.”</p>
<p>I took the initiative to say hello...This is also a change in itself.</p>
<p>“Well, it does look fun for sure.”</p>
<p>Ayanokōji-kun replied while glancing at my bare hands.</p>
<p>“Hoo...”</p>
<p>My heart started beating faster and I purposely exhaled hot air into my hands.</p>
<p>“Did you forget your gloves again?”</p>
<p>“Yes.”</p>
<p>After answering, I couldn't bear the nervousness of lying and confessed immediately.</p>
<p>“I'm sorry, I'm just kidding. I'm carrying them with me.” Without thinking about it, I had already blurted it out.</p>
<p>“I didn’t realise you were a comedian.”</p>
<p>Ayanokōji-kun spoke with his unchanging attitude, without a smile on his face.</p>
<p>“Sure enough… does it not suit my style?”</p>
<p>After asking back uneasily, he shook his head in denial.</p>
<p>“No, it's fine, isn't it? It's good to form a group and then slowly develop a bond.”</p>
<p>That's great... The confusion in my mind wasn't an illusion.</p>
<p>“I… feel the same way. My presence is weak and I am rarely noticed no matter what I do. But Kushida-san, Nishino-san, Amikura-san and everyone in the group watched me and saw me as a companion. Thanks to this group, not only the girls, but the boys as well. It was a completely different experience from what I thought it would be like before.”</p>
<p>I said that much at once. It was as if I had said all the things that had been in my heart until now.</p>
<p>“What I thought would be a long school trip is coming to an end today.” It's been a long school trip.</p>
<p>A school trip to investigate the enemy.</p>
<p>But now… I’m questioning whether I still feel that way,,,</p>`,
            2: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">A Certain Lapse of Judgment</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kikyō Kushida SS — 2nd Year Volume 8</p>

<p>Ryūen took the initiative to take a shot at me, only to have it backfire. Right after finishing the conversation however...</p>
<p>“Why... to come to my rescue? It's not good for Ayanokōji-kun, right?”</p>
<p>Ayanokōji-kun obviously would not want to be targeted on purpose by Ryūen-kun.</p>
<p>“There are benefits. You are an indispensable talent in the class. Even if I didn't come here, I don't think Ryūen would be planning to expose you, but I don't know how he'll act afterwards. You should figure out a way to seal his mouth for good.”</p>
<p>“...That’s, well...”</p>
<p>I certainly reflect on how superficial and rash I am. But why can't I restrain my emotions at this moment? My past failures have led me to this situation, which has done nothing but put a huge burden on me.</p>
<p>If I were exposed, only I would be in trouble. However, the class will also lose a hand that can contribute to the class.</p>
<p>“I must guard my place. I obviously acted for this reason, but...”</p>
<p>“You are no match for Ryūen. If you voluntarily got into a battle you couldn't handle and blew yourself up, then I'd be troubled. That's why I just stepped in”</p>
<p>What a humiliating word to make me feel doubly humiliated. But... it's true.</p>
<p>It's been a long time since I had that first impression of “just an insignificant student” for Ayanokōji-kun.</p>
<p>“At least at this stage, I don't think Ryūen is a strong enemy.”</p>
<p>The person standing side by side with me said what I couldn't possibly say, as naturally as the weather today.</p>
<p>It's not surprising that such a statement would be laughed at, since it's clearly something that can't be done.</p>
<p>“H-Huh? What is this...”</p>
<p>My brain can't keep up with my understanding, so I'm doing my best just to reply like this. But it's shameful and annoying to see myself in such a confused state.</p>
<p>“Anyway, you don't have to take any risks now. Cherish yourself as you are.”</p>
<p>“What an unpleasant thing to say. Does the class need my strength so much?”</p>
<p>My heart felt like it was grabbed by a chirp, and I felt like I was blushing badly. Cold sweat? My heart rate also seemed to have increased strangely.</p>
<p>“That's also another reason.”</p>
<p>“Another?”</p>
<p>“I feel like I can get along well with Kushida who speaks her mind.”</p>
<p>Ha...? Is he, stupid?</p>
<p>“Don't be like that. Someone who knows my nature can't really think like that, right?”</p>
<p>I don't want to hear words that will confuse me even more mentally. It's clear that I don't want to hear those words, but I want him to say more. This contradiction was destroying my brain.</p>
<p>“There's no such thing. I really quite like it.”</p>
<p>“What is this... Where exactly is the seriousness? Ayanokōji-kun, I can't believe it.”</p>
<p>I wanted to reply with a smile, but I couldn't. Why? Why? Why? I couldn't play the usual me.</p>
<p>“It's true. There are people in this world who would feel more comfortable with your nature”</p>
<p>“This kind of thing———”</p>
<p>My brain, completely froze. I couldn't look directly at the man in front of me and fled to the wall.</p>
<p>That way I can't see him.</p>
<p>No, no, no! What am I doing?! I need to calm down, there is definitely something wrong with this! This is not… I couldn’t be… falling for him?</p>
<p>Impossible. Impossible. Impossible, impossible... Impossible!</p>
<p>By the way, if I think about it, didn’t Ayanokōji-kun touch my breasts? No, instead of saying he touched my breasts I should say I forced him to touch them. At that time, I could not think of any other method other than this one, and there was nothing I could do about it.</p>
<p>Hmm? Wait a minute. Strange. Calmly think about it, if he wanted to, couldn’t Ayanokōji-kun easily break free of my grip?</p>
<p>Whether it's the fingerprints on the uniform or whatever, I can't remember what I said at that time, but he should know that this poses no threat, right?</p>
<p>“What's going on?”</p>
<p>He wore a harmless expression. Is he actually just thinking “lucky, I can touch her boobs” or something like that?</p>
<p>Ha! Isn't that shameless? Wait a minute. Wait... Wait a minute. Calm down, calm down. Hoo~ha~, hoo~ha~.</p>
<p>Put the boob thing aside for now. It's the other feelings that are the big problem. I'm in love with someone else ? Ha———? This kind of thing is not possible, right.</p>
<p>Falling in love as a student or something like that won't do any good for the future. So I'm not going to like anyone here.</p>
<p>The only thing that matters is myself. For the sake of my own happiness, there may be times when I have to get married in the future, but at most, that's all. If I judge that it is best for me to live by myself, then of course I will do so. So, there is absolutely no way I could have such feelings for him.</p>
<p>Recently, I have become weaker because my weaknesses have been exposed to the people around me. It just happened that at this time, I was slightly touched by Ayanokōji-kun's attitude.</p>
<p>“It's okay, it's okay…”</p>
<p>Calm down. Think about it calmly first. So far, I have resolutely played the role of my gentle self to anyone.</p>
<p>In the end, who is Ayanokōji-kun? Wait a second… Ayanokōji-kun is waiting behind me, he should have noticed my abnormality.</p>
<p>So I'm going to turn around and answer him with a smile, saying that I'm fine although I'm feeling a little sick. That's the usual me all the time. I turn around with my mind made up.</p>
<p>“I'm just a little dizzy, but I'm fine! It’s oka-!”</p>
<p>The moment I turned around and saw Ayanokōji-kun’s face, I paused.</p>
<p>“Are you really okay?”</p>
<p>Because objectively speaking, I made a rather strange sound, so Ayanokōji- kun naturally asked.</p>
<p>Don't look over here! No, no, I'm still shaking !</p>
<p>Confused, haunted. This- this is impossible. I’m absolutely haunted!!!</p>`,
            3: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Confused and Resolute</h1>
<p class="text-center text-sm text-gray-500 mb-12">Sae Chabashira SS — 2nd Year Volume 8</p>

<p>“I’m going back to my room! Bye!”</p>
<p>After shouting loudly to the extent of causing a nuisance to the hotel, Chie left unhappily. As a teacher, I was shocked to see her acting like this.</p>
<p>“I'm sorry for what happened earlier.As she said, as if she was complaining, probably because she was a little drunk.”</p>
<p>If she hadn't been drunk, she wouldn't have let anyone see her like this, right?</p>
<p>“It's okay, it's just a joke after drinking, I'll put a deaf ear to it.”</p>
<p>Horikita said something unlike a student.</p>
<p>“You're really strict, Horikita”</p>
<p>“You're a little concerned, aren't you, sensei?”</p>
<p>“To be honest, it's impossible not to think about it. Your class is so different from the one I took three years ago.”</p>
<p>Of course, the students are not the only ones to blame for what happened in the last class. It is also the responsibility of the class teacher who was not motivated to move up to Class A. In other words, it means that it is inseparable from my inaction. At that time, if I had harboured the same enthusiasm as I do now, there might have been some possibilities.</p>
<p>No... That's a bit of an exaggeration. Even excluding my own reasons, the class is growing beyond belief now. Even excluding my own reasons, the class is now growing beyond imagination. The main reason for this… is undoubtedly the presence of Ayanokōji Kiyotaka.</p>
<p>“I don't know if Ayanokōji-kun is a Joker, however I can't deny that he is strong as a fellow classmate. But I don't plan to have any scruples about it.”</p>
<p>As if reading my heart, my heart beat a little faster.</p>
<p>“Since this card is assigned to your class, you should use it to fight, shouldn't you? After all, we're aiming for Class A.”</p>
<p>“Yes. That's my intention, too.”</p>
<p>The sense of unfairness caused by overuse of powerful cards. I can't let that make me waver and hold back. It would be too rude to the students of other classes who are serious about the class competition.</p>
<p>“Okay... I'm going to go find Chie, if I leave her alone she might drink until dawn.”</p>
<p>Even so, I can't treat the matter of Chie casually.If you ignore her easily, she may act beyond the teacher's limits.</p>
<p>Then again, I have to re-examine myself at the same time.</p>`,
            4: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Inside the Changing Room</h1>
<p class="text-center text-sm text-gray-500 mb-12">Suzune Horikita SS — 2nd Year Volume 8</p>

<p>Kushida-san and I went back to the locker room to cool off.</p>
<p>“You're really tough, Horikita-san. Well, if I had persisted in that situation, I would have won.”</p>
<p>“That's an illusion. If we had kept going, you'd be the first one to fall, right?”</p>
<p>It doesn't matter if you win or lose, it's when you get provoked by Kushida-san that you lose.</p>
<p>Just now, when both of us were finally on the verge of “dying”, Ichinose-san stopped us. Otherwise, I don't know what would have happened.</p>
<p>Of course, It was me who won in the end. Ichinose-san, who had resolved the fight, was called by Ando-san, from her class, as she was leaving.</p>
<p>“Here, Horikita-san. This is cold water.”</p>
<p>Kushida-san, who had wrapped her body in a towel, said so and handed me the cold mineral water bottle.</p>
<p>“It's rare for you to be so understanding.”</p>
<p>“No, that's not true. I always care about others, don't I?”</p>
<p>She added with a cheerful smile.</p>
<p>“The walls have ears too, so I hope you'll be careful about what you say.”</p>
<p>That's true. I have to think about that, because I've been treating Kushida-san the way she really is.</p>
<p>“And then again, Horikita-san must be very thirsty right now, right? After all that time in the bath.”</p>
<p>“Eh? Well, of course———”</p>
<p>“Uh-huh. If our match hadn't been interrupted, you would have forfeited by now. I still have a lot of room to spare, so please hydrate yourself as soon as possible~”</p>
<p>It's a trap. Kushida-san didn't have her own mineral water in her hands. That is to say, the match is not over yet.</p>
<p>“What a bore. Hydration is another matter, but the bathing endurance race is a draw, right?”</p>
<p>“That's fine. Please, I'll drink after Horikita-san finishes her drink.”</p>
<p>She acted like she was possessed by Ibuki-san. I was a little dissatisfied. But then again, drinking now always feels like I'm being led by the nose.</p>
<p>“You're the one who should drink it before you get dehydrated. I'll get my own share.”</p>
<p>I excused myself from the mineral water bottle, and Kushida-san didn't take it either. As a result, neither of us drank water where we could see each other.</p>
<p>Finally, both of us left the large bath and I went to a deserted place to have a wonderful drink.</p>`,
            5: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">At the corner of the Front Stage</h1>
<p class="text-center text-sm text-gray-500 mb-12">Maya Satō SS — 2nd Year Volume 8</p>

<p>The second night of the school trip. After dinner, I had to fulfill my promise to take a public bath with Sudou.</p>
<p>“There is still a bit of time left.”</p>
<p>But there wasn't enough time for me to go back to my room and rest.</p>
<p>So, I took a walk around the hotel to pass the time.</p>
<p>I was walking from the cafeteria to the lobby. Nomura, a boy from Ryuuen's class, brushed past me with a grim look on his face.</p>
<p>What kind of trouble was he in? Thinking this, I walked in the direction Nomura came from.</p>
<p>I didn't have to walk long before I saw Satou, who had the same grim expression, leaning against the wall.</p>
<p>“What are you doing here?”</p>
<p>“Eh? A-Ayanokōji-kun...... What a coincidence.”</p>
<p>She gave off a feeling that she didn't want to meet me here. But then she immediately pretended to smile calmly and approached me.</p>
<p>“Could it be that Ayanokōji-kun ran into Nomura-kun?”</p>
<p>“Yeah. I'm a little concerned by his appearance.”</p>
<p>“I see......”</p>
<p>“Did something happen?”</p>
<p>Then, Satou didn't answer with a puzzled look on her face.</p>
<p>The main culprit for this dignified atmosphere is probably in the question I raised.</p>
<p>A guess flashed through my head that she had done something to arouse resentment...</p>
<p>“He said, if I don't have a boyfriend, I should go out with him.”</p>
<p>I had already gotten the information that the 'topic of love would increase during the school trip'. It seems that not only Sudou, but similar incidents have happened in many places.</p>
<p>“I see.”</p>
<p>What should I say?</p>
<p>At least, I couldn't say anything unkind in this situation.</p>
<p>During the course of my school life, my understanding of love became more and more sophisticated.</p>
<p>“I often hung out with guys on my days off. One of them was Nomura-kun....It started about six months ago.”</p>
<p>Perhaps feeling compelled to say something in the face of my silence, Satou continued.</p>
<p>“Then------he began to care about me.”</p>
<p>“Is that so.”</p>
<p>Since Satou once said she liked me, it's understandable that it's inevitably a little awkward to talk about this now. But for her, this is a good opportunity to start a new relationship.</p>
<p>At least it would be possible to determine what had happened between Nomura and Satou.</p>
<p>If the other party does not want to start the conversation in depth. I should also respect that and not ask too much.</p>
<p>“I might be in the way.”</p>
<p>After answering this, I decided to leave.</p>
<p>“W-wait a minute. If it's convenient...Can I take a moment of your time? If you are okay with it, Ayanokōji-kun...”</p>
<p>I have less than 10 minutes before my appointment with Sudou. But he won't complain too much if I'm little late, right?</p>
<p>I'll just send him a message to go into the bath first.</p>
<p>“Is it okay for me to stay here?”</p>
<p>“Yeah. It's not a serious topic.”</p>
<p>After that, Satou looked like she was hesitant to say anything again.</p>
<p>Is there something she can't talk about?</p>
<p>I watched her silently from the sidelines, not urging her on.</p>
<p>“Actually.....”</p>
<p>After about a minute of silence.</p>
<p>Satou, who had collected her thoughts, spoke up.</p>
<p>“Just now Nomura-kun called me out. The one who...... was here and said something to me.”</p>
<p>Flow-wise, what happened next I can surmise without explanation.</p>
<p>I don't know much about Nomura, but at least his behavior is not bad.</p>
<p>Judging from the values on OAA, he is slightly less capable. But his appearance should get an average rating.</p>
<p>Assuming Satou is not dissatisfied with his ability, the only thing left is whether he is to her liking or not.</p>
<p>“Seeing your gloomy face, did you reserve your answer? Or is it a rejection?”</p>
<p>At this point in the conversation, I couldn't help but speak up.</p>
<p>Even if it is a bit in-depth, it is more natural to ask about the situation at this time.</p>
<p>“...But eh.”</p>
<p>Satou pouted and whispered. She just looked up and met my eyes, and then immediately looked away.</p>
<p>“I still... I like you...Ayanokōji-kun.”</p>
<p>It's not like I didn't notice, but I didn't expect her to speak up again.</p>
<p>No, it can be interpreted as the situation of the moment, and go along with it.</p>
<p>“Of course, I didn't mean to get in the way of Kei-chan. Although there is no..... But it's like......My feelings will not easily change....Something like that....”</p>
<p>The one you like is already with someone else.</p>
<p>The arrows of love that are scattered around are crossing each other's minds every day, and it's not just now.</p>
<p>This is not an uncommon sight, as you can see by living a school life.</p>
<p>“So ------I said sorry to him and rejected him.”</p>
<p>“Is that so?”</p>
<p>“Some of the girls in our class have been confessed to many times. But, the feeling of regret for him was even stronger. This is the so-called guilt, right......”</p>
<p>The one who speaks up and refuses also has to spend energy as well as bear the mental burden.</p>
<p>I know it well.</p>
<p>“Nomura-kun said we should play together next time, but I didn't show my usual confidence.”</p>
<p>For the confessor, failure does not mean the end.</p>
<p>Tomorrow and the day after tomorrow, we will continue to live in school. There are countless opportunities to meet.</p>
<p>“Ugh...! No, no, no, this is not okay.”</p>
<p>Satou held her head and shook it vigorously from side to side.</p>
<p>“Let's put it this way! Let's say it's Ayanokōji-kun's fault!”</p>
<p>“Huh?”</p>
<p>“Because that's how it is? I fell in love with Ayanokōji-kun, which caused the current situation. Otherwise, I might have dated Nomura-kun.”</p>
<p>“I see....”</p>
<p>Is that really a possibility? Maybe.</p>
<p>In this way, if Sato can move forward bravely, I will accept this statement for the time being.</p>
<p>“Speaking of which, I didn't expect to be seen by Ayanokōji-kun.”</p>
<p>“That's--- I'm sorry”</p>
<p>“It's okay, it was just a coincidence.”</p>
<p>As soon as she finished speaking, Sato showed an embarrassed and shy expression, and patted my arm lightly.</p>
<p>“You're not talking to Kei-chan, so she's very upset right now. I suggest you contact her before you get scolded. Then...bye! Ah! So embarrassing!”</p>
<p>Saying that, Satou left the scene as if if she was running away, as fast as she could.</p>
<p>After that, I had an appointment to meet with Sudou, so I will wait until later to contact Kei.</p>
<p>After parting ways with Satou, I decided to go to the public bath.</p>`
        }
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
            "Yuki Himeno : A Boy I Don’t Really Understand",
            "Honami Ichinose : Jealousy",
            "Kikyō Kushida : Like Hell I’d Join",
            "Honami Ichinose : I Must Move Forward"
        ],
        characters: ["Yuki Himeno", "Honami Ichinose", "Kikyō Kushida"],
        coverImage: "/assets/y2v9.jpg",
        inProgress: false,

        customChapters: {
            1: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">A Boy I Don’t Really Understand</h1>
<p class="text-center text-sm text-gray-500 mb-12">Yuki Himeno SS — 2nd Year Volume 9</p>

<p>On the night when I was doing karaoke with Kanzaki-kun, I was stuck around in Keyaki Mall until late. Ayanokōji-kun, who was passing the time in a similar fashion, called out to me.</p>
<p>“Huh! …I was in a daze. I was going to the general store and making my way to the front of the movie theater for no reason?”</p>
<p>I answered why I had remained in the mall until late at night, and mentioned whatever came to my mind.</p>
<p>“Since we’re both here, if you’d like, do you want to head back together?”</p>
<p>I couldn’t say that I understood my classmates, but Ayanokōji-kun was even more of an unknown.</p>
<p>That was why I thought it would be good to understand what kind of person he was, even if only a bit.</p>
<p>Talking to people certainly wasn’t my forte, and I didn't like it either. I couldn’t count how many times I felt annoyed when doing so.</p>
<p>But before I knew it, I was having a lively conversation with the boy by my side.</p>
<p>It wasn’t like I was attracted to him as a member of the opposite sex, I just got the feeling that our wavelengths or something matched.</p>
<p>But I didn’t really know the reason. He was just a boy that was hard to understand.</p>
<p>“I realized that I couldn't do anything compared to what I had imagined. I had this groundless confidence that I was doing something amazing by picking up that Ichinose-san was in danger, unlike those around me who failed to notice. I feel like I was humbled.”</p>
<p>I would've been angry if someone else had said something like that to me, but his words genuinely stuck with me.</p>
<p>“I’m sorry for saying something so negative.”</p>
<p>“That isn’t something you need to apologize for. Rather, what you said was correct.”</p>
<p>While I thought it would be better to be more honest with myself beside him, I was still scared.</p>
<p>Someone like that wouldn’t be me though. I felt like I would become a different existence entirely.</p>
<p>“I thought it would be easier to do something amazing… Taking action is difficult.”</p>
<p>“Everyone feels that way. Even Ichinose and I find it difficult to take action.”</p>
<p>“We’re currently looking for the correct way forward. But as is, I’m losing faith that continuing with Kanzaki-kun and Hamaguchi-kun would make things better.”</p>
<p>“Being hesitant isn’t a bad thing. However, it's not a problem that can be solved if you do nothing.”</p>
<p>That’s true. It’s valid reasoning, but…</p>
<p>I didn’t know if the efforts we were putting in to change the class were moving in the right direction.</p>
<p>“Yes, but… even though I started moving to save the class, I can't help but feel like invisible gears are slowly starting to go away.”</p>
<p>What I was feeling was that the situation would get even worse than it was then.</p>
<p>I wanted to think that it wasn’t going to be like that, but I didn’t have the evidence I needed to feel at ease.</p>
<p>I hope that my anxiety is just due to me overthinking.</p>`,
            2: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Jealousy</h1>
<p class="text-center text-sm text-gray-500 mb-12">Honami Ichinose SS — 2nd Year Volume 9</p>

<p>Ah, I was nervous.</p>
<p>I had left Ayanokōji-kun and Mako-chan under the excuse of getting some water.</p>
<p>Recently, I had gotten used to the 30-minute course and was sweating enough to get a sense of satisfaction, but now…</p>
<p>Strange sweat and a high heart rate.</p>
<p>This wasn’t normal.</p>
<p>It wasn’t a sudden illness or whatever. It was clear that it was because of the two of them.</p>
<p>“Mako-chan had said something odd…”</p>
<p>I tried not to remember in order to stabilize my breathing, but it was a pointless endeavor.</p>
<p>I couldn’t help but think back to what had happened earlier.</p>
<p>“I mean, you’re kind of nice Honami-chan.”</p>
<p>Mako-chan had whispered those words after glancing at both me and Ayanokōji-kun.</p>
<p>“It’s probably nothing out of the norm, but did you notice you’re dressed pretty boldly?”</p>
<p>“...!?”</p>
<p>I had been too busy thinking about other things to be concerned about my own appearance.</p>
<p>I thought I’d just work out at the gym like I usually did and enjoy peace.</p>
<p>“So you didn’t notice, Honami-chan?”</p>
<p>“What is it…?”</p>
<p>“Oh, well, it’s just that wearing that kind of outfit can be embarrassing when you’re not used to it, right?”</p>
<p>“I see?”</p>
<p>Mako-chan carefully conveyed her feelings.</p>
<p>She likely thought that being direct about it would make it easier, but it had the opposite effect.</p>
<p>Due to her gentle meddling, I now wanted to hide forever.</p>
<p>That’s why, for the past 30 minutes, I had solely been focusing on running on the treadmill.</p>
<p>However, this was the situation that I currently found myself in.</p>
<p>“Ugh… It’s so embarrassing.”</p>
<p>I wanted to change out of this outfit immediately, but I couldn’t.</p>
<p>If I put on a modest shirt just because I was sweating a little, my intentions would be revealed.</p>
<p>If the other person was naive enough, it could be different, but Ayanokōji-kun would certainly realize it.</p>
<p>I suddenly found my throat dry.</p>
<p>It may have only been a reason to escape, but I decided to hydrate myself.</p>
<p>“I’ve calmed down a bit.”</p>
<p>Drinking some cold water helped me regain my composure.</p>
<p>“...Right. Let’s do this.”</p>
<p>I just needed to focus on my gym training, and everything would be okay.</p>
<p>However, as I returned to the crowded gym, my feet grew heavy.</p>
<p>As I looked in the distance, Ayanokōji-kun and Mako-chan seemed to be having fun.</p>
<p>“...It seems like their chat is taking off.”</p>
<p>I didn’t know what they were talking about, but their conversation continued smoothly.</p>
<p>Mako-chan’s attitude was identical to when talking to a classmate.</p>
<p>Was it because of the time she was together with Ayanokōji-kun during the school trip.</p>
<p>They seemed to be getting along well.</p>
<p>Even though it was good for my friends to get along, I couldn't calm myself as my heart felt uneasy.</p>
<p>It felt like some sort of vile emotion was clinging to me.</p>
<p>My feet, which should’ve felt heavy, were light again.</p>
<p>The feeling of being chained had vanished.</p>
<p>Rather, I wanted to quickly get rid of this uneasiness in my chest.</p>
<p>I couldn’t think of anything else.</p>
<p>“I guess I’m a little weird after all, er, but I'll get through this today.”</p>
<p>I took a deep breath as if to push myself forward.</p>
<p>And then, I decided to go back to the two of them as my usual self.</p>`,
            3: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Like Hell I’d Join</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kikyō Kushida SS — 2nd Year Volume 9</p>

<p>I thought I had just been called out to the hallway, but she wanted me to join the student council?</p>
<p>And to top it off, with Horikita as the student council president, I’d be working under her? Don’t joke with me.</p>
<p>No matter what merits were present, I couldn’t accept.</p>
<p>Just as I was about to firmly turn her down, I felt a weird presence behind my back.</p>
<p>“Well, it’s settled. If you join the student council, Kushida-senpai, even if there are people who dislike you, they won't be able to get their hands on you~”</p>
<p>The one who was clinging to me was the first-year Amasawa.</p>
<p>She was one of the people I hated so much to the point of wanting to murder her. She was the last person I wanted to be around in that instance.</p>
<p>Horikita also considered Amasawa as an obstacle to this meeting and was trying to get rid of her.</p>
<p>“It wasn’t anyone in particular. If I had to choose, I'd say Kushida-senpai.”</p>
<p>“Me? O-Oh, I see. What kind of business is it?”</p>
<p>“Huh? What could it be~? What do you think I want?”</p>
<p>This woman. She absolutely came out here just to mess with me. I seriously want to murder her.</p>
<p>But since I couldn’t take any action at this point, I had to endure this with a calm mind.</p>
<p>Besides, Ayanokōji-kun was here.</p>
<p>No no, it didn’t matter if he was here or not…</p>
<p>I felt an incomprehensible emotion for an instant, so I pushed it down and forced it away.</p>
<p>While Amasawa continued to participate in the conversation, I continued thinking of a way to get out of this.</p>
<p>“I'm sorry, I can't live up to your expectations. The student council isn’t for me...”</p>
<p>“Why don't you just join the student council instead of saying that?”</p>
<p>Again, Amasawa interfered by saying such a thing.</p>
<p>Furthermore, she clung to me, touched my body without permission, and got further carried away.</p>
<p>She even touched my cheeks, but, knowing there were other people there, I had to keep smiling.</p>
<p>“Kushida-senpai is kinda pretty, has a kinda nice figure, and is kinda smart, right?”</p>
<p>I couldn’t do this anymore, I was at my limit.</p>
<p>“Hey, you know... If we're going to keep talking, can we change the location, please?”</p>
<p>If we didn’t change locations, it might’ve resulted in me ending Amasawa’s life immediately.</p>
<p>After my desperate plea, Horikita seemed to understand and agreed.</p>
<p>Oh my god, why do I have to spend my time around people I hate?</p>
<p>I absolutely won't join the student council.</p>
<p>Let’s just get this over with so I can go home, I vowed that to myself while I continued building up stress.</p>`,
            4: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">I Must Move Forward</h1>
<p class="text-center text-sm text-gray-500 mb-12">Honami Ichinose SS — 2nd Year Volume 9</p>

<p>On the night when I was doing karaoke with Kanzaki-kun, I was stuck around in Keyaki Mall until late. Ayanokōji-kun, who was passing the time in a similar fashion, called out to me.</p>
<p>“Huh! …I was in a daze. I was going to the general store and making my way to the front of the movie theater for no reason?”</p>
<p>I answered why I had remained in the mall until late at night, and mentioned whatever came to my mind.</p>
<p>“Since we’re both here, if you’d like, do you want to head back together?”</p>
<p>I couldn’t say that I understood my classmates, but Ayanokōji-kun was even more of an unknown.</p>
<p>That was why I thought it would be good to understand what kind of person he was, even if only a bit.</p>
<p>Talking to people certainly wasn’t my forte, and I didn't like it either. I couldn’t count how many times I felt annoyed when doing so.</p>
<p>But before I knew it, I was having a lively conversation with the boy by my side.</p>
<p>It wasn’t like I was attracted to him as a member of the opposite sex, I just got the feeling that our wavelengths or something matched.</p>
<p>But I didn’t really know the reason. He was just a boy that was hard to understand.</p>
<p>“I realized that I couldn't do anything compared to what I had imagined. I had this groundless confidence that I was doing something amazing by picking up that Ichinose-san was in danger, unlike those around me who failed to notice. I feel like I was humbled.”</p>
<p>I would've been angry if someone else had said something like that to me, but his words genuinely stuck with me.</p>
<p>“I’m sorry for saying something so negative.”</p>
<p>“That isn’t something you need to apologize for. Rather, what you said was correct.”</p>
<p>While I thought it would be better to be more honest with myself beside him, I was still scared.</p>
<p>Someone like that wouldn’t be me though. I felt like I would become a different existence entirely.</p>
<p>“I thought it would be easier to do something amazing… Taking action is difficult.”</p>
<p>“Everyone feels that way. Even Ichinose and I find it difficult to take action.”</p>
<p>“We’re currently looking for the correct way forward. But as is, I’m losing faith that continuing with Kanzaki-kun and Hamaguchi-kun would make things better.”</p>
<p>“Being hesitant isn’t a bad thing. However, it's not a problem that can be solved if you do nothing.”</p>
<p>That’s true. It’s valid reasoning, but…</p>
<p>I didn’t know if the efforts we were putting in to change the class were moving in the right direction.</p>
<p>“Yes, but… even though I started moving to save the class, I can't help but feel like invisible gears are slowly starting to go away.”</p>
<p>What I was feeling was that the situation would get even worse than it was then.</p>
<p>I wanted to think that it wasn’t going to be like that, but I didn’t have the evidence I needed to feel at ease.</p>
<p>I hope that my anxiety is just due to me overthinking.</p>`
        }
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
