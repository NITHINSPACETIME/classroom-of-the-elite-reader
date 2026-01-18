export interface Character {
    id: string;
    name: string;
    japaneseName: string;
    currentClass: "A" | "B" | "C" | "D" | "Student Council" | "Teacher";
    classHistory?: Record<string, "A" | "B" | "C" | "D">;
    description: string;
    image: string;
    images?: {
        year1?: string;
        year2?: string;
        year3?: string;
    };
    tags?: string[];
    homeroomClass?: "A" | "B" | "C" | "D";
}

export const characters: Character[] = [
    // Class D 
    {
        id: "kiyotaka-ayanokoji",
        name: "Kiyotaka Ayanokōji",
        japaneseName: "綾小路 清隆",
        currentClass: "D",
        description: "The protagonist of the series. An inconspicuous student who hides his truly exceptional abilities. He prefers to manipulate events from the shadows.",
        image: "/assets/characters/kiyotaka-ayanokoji.jpg",
        images: {
            year1: "/assets/characters/kiyotaka-ayanokoji.jpg",
            year2: "/assets/characters/kiyotaka-ayanokoji-y2.png",
            year3: "/assets/characters/kiyotaka-ayanokoji-y3.png"
        },
        tags: ["Protagonist", "White Room", "Mastermind"]
    },
    {
        id: "suzune-horikita",
        name: "Suzune Horikita",
        japaneseName: "堀北 鈴音",
        currentClass: "D",
        description: "A sharp-tongued and aloof student who aims to reach Class A. She is the sister of the former Student Council President, Manabu Horikita.",
        image: "/assets/characters/suzune-horikita.jpg",
        images: {
            year1: "/assets/characters/suzune-horikita.jpg",
            year2: "/assets/characters/suzune-horikita-y2.png",
            year3: "/assets/characters/suzune-horikita-y3.png"
        },
        tags: ["Leader", "Academic", "Class Representative"]
    },
    {
        id: "kikyo-kushida",
        name: "Kikyō Kushida",
        japaneseName: "櫛田 桔梗",
        currentClass: "D",
        description: "A seemingly cheerful and popular girl who harbors a dark and cynical side. Her goal is to be friends with everyone, but she holds deep grudges.",
        image: "/assets/characters/kikyo-kushida.jpg",
        images: {
            year1: "/assets/characters/kikyo-kushida.jpg",
            year2: "/assets/characters/kikyo-kushida-y2.png",
            year3: "/assets/characters/kikyo-kushida-y3.png"
        },
        tags: ["Two-Faced", "Social"]
    },
    {
        id: "kei-karuizawa",
        name: "Kei Karuizawa",
        japaneseName: "軽井沢 恵",
        currentClass: "D",
        description: "The leader of the girls in Class D. Though she appears fashionable and confident, she carries a traumatic past.",
        image: "/assets/characters/kei-karuizawa.jpg",
        images: {
            year1: "/assets/characters/kei-karuizawa.jpg",
            year2: "/assets/characters/kei-karuizawa-y2.png",
            year3: "/assets/characters/kei-karuizawa-y3.png"
        },
        tags: ["Key Aly", "Leader"]
    },
    {
        id: "yosuke-hirata",
        name: "Yōsuke Hirata",
        japaneseName: "平田 洋介",
        currentClass: "D",
        description: "The leader of the boys in Class D. A pacifist who truly cares for his classmates and strives to maintain harmony.",
        image: "/assets/characters/yosuke-hirata.jpg",
        images: {
            year1: "/assets/characters/yosuke-hirata.jpg",
            year2: "/assets/characters/yosuke-hirata-y2.png",
            year3: "/assets/characters/yosuke-hirata-y3.png"
        },
        tags: ["Leader", "Pacifist", "Class Representative"]
    },
    {
        id: "ken-sudo",
        name: "Ken Sudō",
        japaneseName: "須藤 健",
        currentClass: "D",
        description: "The leader of the 'Three Idiots'. He has great athletic ability but a short temper.",
        image: "/assets/characters/ken-sudo.png",
        images: {
            year1: "/assets/characters/ken-sudo.png",
            year2: "/assets/characters/ken-sudo-y2.png"
        },
        tags: ["Three Idiots", "Athlete"]
    },
    {
        id: "rokusuke-koenji",
        name: "Rokusuke Kōenji",
        japaneseName: "高円寺 六助",
        currentClass: "D",
        description: "A narcissist from a wealthy family with exceptional physical and academic abilities, but zero cooperation.",
        image: "/assets/characters/rokusuke-koenji.png",
        images: {
            year1: "/assets/characters/rokusuke-koenji.png",
            year2: "/assets/characters/rokusuke-koenji-y2.png",
            year3: "/assets/characters/rokusuke-koenji-y3.png"
        },
        tags: ["Eccentric", "Genius"]
    },
    {
        id: "airi-sakura",
        name: "Airi Sakura",
        japaneseName: "佐倉 愛里",
        currentClass: "D",
        description: "A former gravure idol who is extremely shy. She is part of the Ayanokoji Group.",
        image: "/assets/characters/airi-sakura.png",
        images: {
            year1: "/assets/characters/airi-sakura.png",
            year2: "/assets/characters/airi-sakura-y2.png"
        },
        tags: ["Ayanokoji Group", "Shy"]
    },
    {
        id: "teruhiko-yukimura",
        name: "Teruhiko Yukimura",
        japaneseName: "幸村 輝彦",
        currentClass: "D",
        description: "An academically excellent student who struggles with athletics. He forms the Ayanokoji Group.",
        image: "/assets/characters/teruhiko-yukimura.png",
        images: {
            year1: "/assets/characters/teruhiko-yukimura.png",
            year2: "/assets/characters/teruhiko-yukimura-y2.png"
        },
        tags: ["Academic", "Ayanokoji Group"]
    },
    {
        id: "akito-miyake",
        name: "Akito Miyake",
        japaneseName: "三宅 明人",
        currentClass: "D",
        description: "A member of the Archery Club and the Ayanokoji Group. He is calm and reliable.",
        image: "/assets/characters/akito-miyake.png",
        tags: ["Ayanokoji Group", "Archer"]
    },
    {
        id: "haruka-hasebe",
        name: "Haruka Hasebe",
        japaneseName: "長谷部 波瑠加",
        currentClass: "D",
        description: "A girl with a direct personality who becomes part of the Ayanokoji Group.",
        image: "/assets/characters/haruka-hasebe.png",
        images: {
            year1: "/assets/characters/haruka-hasebe.png",
            year2: "/assets/characters/haruka-hasebe-y2.png"
        },
        tags: ["Ayanokoji Group"]
    },
    {
        id: "kanji-ike",
        name: "Kanji Ike",
        japaneseName: "池 寛治",
        currentClass: "D",
        description: "One of the 'Three Idiots'. He is energetic and has good camping skills.",
        image: "/assets/characters/kanji-ike.png",
        tags: ["Three Idiots", "Outdoors"]
    },
    {
        id: "haruki-yamauchi",
        name: "Haruki Yamauchi",
        japaneseName: "山内 春樹",
        currentClass: "D",
        description: "One of the 'Three Idiots' of Class D. He is prone to lying and exaggerating.",
        image: "/assets/characters/haruki-yamauchi.png",
        tags: ["Three Idiots"]
    },
    {
        id: "maya-sato",
        name: "Maya Satō",
        japaneseName: "佐藤 麻耶",
        currentClass: "D",
        description: "A fashionable girl who takes an interest in Ayanokoji.",
        image: "/assets/characters/maya-sato.png",
        images: {
            year1: "/assets/characters/maya-sato.png",
            year2: "/assets/characters/maya-sato-y2.png"
        },
        tags: ["Class D"]
    },
    {
        id: "chiaki-matsushita",
        name: "Chiaki Matsushita",
        japaneseName: "松下 千秋",
        currentClass: "D",
        description: "A student who, like Ayanokoji, hides her true academic abilities.",
        image: "/assets/characters/chiaki-matsushita.png",
        images: {
            year1: "/assets/characters/chiaki-matsushita.png",
            year2: "/assets/characters/chiaki-matsushita-y2.png"
        },
        tags: ["Hidden Ability"]
    },
    {
        id: "hideo-sotomura",
        name: "Hideo Sotomura",
        japaneseName: "外村 秀雄",
        currentClass: "D",
        description: "Nicknamed 'Professor'. He is knowledgeable about various obscure topics.",
        image: "/assets/characters/hideo-sotomura.png",
        tags: ["Class D"]
    },
    {
        id: "soshi-miyamoto",
        name: "Sōshi Miyamoto",
        japaneseName: "宮本 蒼士",
        currentClass: "D",
        description: "A student of Class D.",
        image: "/assets/characters/soshi-miyamoto.png",
        tags: ["Class D"]
    },
    {
        id: "satsuki-shinohara",
        name: "Satsuki Shinohara",
        japaneseName: "篠原 さつき",
        currentClass: "D",
        description: "A member of the girl's group led by Karuizawa. She often takes the initiative in class discussions.",
        image: "/assets/characters/satsuki-shinohara.png",
        images: {
            year1: "/assets/characters/satsuki-shinohara.png",
            year2: "/assets/characters/satsuki-shinohara-y2.png"
        },
        tags: ["Class D"]
    },
    {
        id: "kokoro-inogashira",
        name: "Kokoro Inogashira",
        japaneseName: "井の頭 心",
        currentClass: "D",
        description: "A quiet and timid student.",
        image: "/assets/characters/kokoro-inogashira.jpg",
        tags: ["Class D"]
    },
    {
        id: "nene-mori",
        name: "Nene Mori",
        japaneseName: "森 寧々",
        currentClass: "D",
        description: "A member of the girl's group.",
        image: "/assets/characters/nene-mori.png",
        tags: ["Class D"]
    },
    {
        id: "kayano-onodera",
        name: "Kayano Onodera",
        japaneseName: "小野寺 かや乃",
        currentClass: "D",
        description: "A student who excels in swimming.",
        image: "/assets/characters/kayano-onodera.png",
        tags: ["Athlete"]
    },
    {
        id: "ryotaro-hondo",
        name: "Ryōtarō Hondō",
        japaneseName: "本堂 遼太郎",
        currentClass: "D",
        description: "A somewhat frivolous student.",
        image: "/assets/characters/ryotaro-hondo.jpg",
        tags: ["Class D"]
    },
    {
        id: "mei-yu-wang",
        name: "Mei-Yu Wang",
        japaneseName: "王 美雨",
        currentClass: "D",
        description: "Nicknamed 'Mii-chan'. A sweet girl with high academic ability from China.",
        image: "/assets/characters/mei-yu-wang.png",
        images: {
            year1: "/assets/characters/mei-yu-wang.png",
            year2: "/assets/characters/mei-yu-wang-y2.png"
        },
        tags: ["Academic"]
    },
    {
        id: "kyosuke-ikitani",
        name: "Kyōsuke Okitani",
        japaneseName: "沖谷 京介",
        currentClass: "D",
        description: "A student of Class D.",
        image: "/assets/characters/kyosuke-okitani.jpg",
        tags: ["Class D"]
    },
    {
        id: "wataru-ijuin",
        name: "Wataru Ijūin",
        japaneseName: "伊集院 航",
        currentClass: "D",
        description: "A student of Class D.",
        image: "/assets/characters/wataru-ijuin.png",
        tags: ["Class D"]
    },
    {
        id: "an-maezono",
        name: "An Maezono",
        japaneseName: "前園",
        currentClass: "D",
        description: "A student of Class D.",
        image: "",
        tags: ["Class D"]
    },
    {
        id: "susumu-makida",
        name: "Susumu Makida",
        japaneseName: "牧田 奨",
        currentClass: "D",
        description: "A student of Class D.",
        image: "",
        tags: ["Class D"]
    },
    {
        id: "setsuya-minami",
        name: "Setsuya Minami",
        japaneseName: "南 節也",
        currentClass: "D",
        description: "A student of Class D.",
        image: "",
        tags: ["Class D"]
    },
    {
        id: "hakuo-minami",
        name: "Hakuo Minami",
        japaneseName: "南 伯夫",
        currentClass: "D",
        description: "A student of Class D.",
        image: "",
        tags: ["Class D"]
    },
    {
        id: "sana-azuma",
        name: "Sana Azuma",
        japaneseName: "東 咲菜",
        currentClass: "D",
        description: "A student of Class D.",
        image: "",
        tags: ["Class D"]
    },
    {
        id: "kayoko-ishikura",
        name: "Kayoko Ishikura",
        japaneseName: "石倉 佳世子",
        currentClass: "D",
        description: "A student of Class D.",
        image: "",
        tags: ["Class D"]
    },
    {
        id: "ruri-ichihashi",
        name: "Ruri Ichihashi",
        japaneseName: "市橋 瑠璃",
        currentClass: "D",
        description: "A student of Class D.",
        image: "",
        tags: ["Class D"]
    },
    {
        id: "chiyo-sonoda",
        name: "Chiyo Sonoda",
        japaneseName: "園田 千代",
        currentClass: "D",
        description: "A student of Class D.",
        image: "",
        tags: ["Class D"]
    },
    {
        id: "ryuko-nishimura",
        name: "Ryūko Nishimura",
        japaneseName: "西村 龍子",
        currentClass: "D",
        description: "A student of Class D.",
        image: "",
        tags: ["Class D"]
    },
    {
        id: "onizuka",
        name: "Onizuka",
        japaneseName: "鬼塚",
        currentClass: "D",
        description: "A student of Class D.",
        image: "",
        tags: ["Class D"]
    },
    {
        id: "kikuchi",
        name: "Kikuchi",
        japaneseName: "菊地",
        currentClass: "D",
        description: "A student of Class D.",
        image: "",
        tags: ["Class D"]
    },
    {
        id: "sota-nomura",
        name: "Sōta Nomura",
        japaneseName: "野村 蒼太",
        currentClass: "D",
        description: "A student of Class D.",
        image: "",
        tags: ["Class D"]
    },
    {
        id: "satoru-hosoya",
        name: "Satoru Hosoya",
        japaneseName: "細谷 智",
        currentClass: "D",
        description: "A student of Class D.",
        image: "",
        tags: ["Class D"]
    },
    {
        id: "shigefumi-yabumura",
        name: "Shigefumi Yabumura",
        japaneseName: "藪村 重文",
        currentClass: "D",
        description: "A student of Class D.",
        image: "",
        tags: ["Class D"]
    },
    {
        id: "minami-shino",
        name: "Minami Shino",
        japaneseName: "志野 みなみ",
        currentClass: "D",
        description: "A student of Class D.",
        image: "",
        tags: ["Class D"]
    },

    // Class C 
    {
        id: "kakeru-ryuen",
        name: "Kakeru Ryūen",
        japaneseName: "龍園 翔",
        currentClass: "C",
        description: "The tyrannical leader of Class C. He uses fear, violence, and unconventional tactics to crush his opponents.",
        image: "",
        tags: ["Tyrant", "Strategist"]
    },
    {
        id: "mio-ibuki",
        name: "Mio Ibuki",
        japaneseName: "伊吹 澪",
        currentClass: "C",
        description: "A skilled fighter who prefers solitude. She often clashes with Horikita and reluctantly follows Ryuen.",
        image: "/assets/characters/mio-ibuki.jpg",
        tags: ["Fighter", "Loner"]
    },
    {
        id: "hiyori-shiina",
        name: "Hiyori Shiina",
        japaneseName: "椎名 ひより",
        currentClass: "C",
        description: "A quiet bookworm with surprising insight. She is one of the few people who can have a genuine conversation with Ayanokōji.",
        image: "/assets/characters/hiyori-shiina.jpg",
        tags: ["Bookworm", "Insightful"]
    },

    // Class B 
    {
        id: "honami-ichinose",
        name: "Honami Ichinose",
        japaneseName: "一之瀬 帆波",
        currentClass: "B",
        description: "The unifying leader of Class B. She is admired for her kindness, beauty, and high academic ability.",
        image: "/assets/characters/honami-ichinose.jpg",
        tags: ["Leader", "Trustworthy"]
    },

    // Katsuragi
    {
        id: "kohei-katsuragi",
        name: "Kōhei Katsuragi",
        japaneseName: "葛城 康平",
        currentClass: "B",
        classHistory: { "1": "A", "2": "B" },
        description: "A conservative strategist who values stability. Former leader of the anti-Sakayanagi faction.",
        image: "",
        tags: ["Conservative", "Defense"]
    },

    // Student Council
    {
        id: "manabu-horikita",
        name: "Manabu Horikita",
        japaneseName: "堀北 学",
        currentClass: "Student Council",
        description: "The former Student Council President. A man of strict discipline and immense capability whom Ayanokōji respects.",
        image: "/assets/characters/manabu-horikita.jpg",
        tags: ["President", "Legend"]
    },

    {
        id: "miyabi-nagumo",
        name: "Miyabi Nagumo",
        japaneseName: "南雲 雅",
        currentClass: "Student Council",
        description: "The current Student Council President. He seeks to transform the school into a pure meritocracy.",
        image: "/assets/characters/miyabi-nagumo.jpg",
        tags: ["President", "Antagonist"]
    },

    // Teachers
    {
        id: "sae-chabashira",
        name: "Sae Chabashira",
        japaneseName: "茶柱 佐枝",
        currentClass: "Teacher",
        description: "The homeroom teacher of Class D. She appears unmotivated but harbors a strong desire to reach Class A.",
        image: "/assets/characters/sae-chabashira.png",
        homeroomClass: "D",
        tags: ["Teacher", "Class D", "Year 1", "Year 2", "Year 3"]
    },
    {
        id: "chie-hoshinomiya",
        name: "Chie Hoshinomiya",
        japaneseName: "星之宮 知恵",
        currentClass: "Teacher",
        description: "The homeroom teacher of Class B. A close friend of Chabashira who enjoys teasing her.",
        image: "/assets/characters/chie-hoshinomiya.png",
        homeroomClass: "B",
        tags: ["Teacher", "Class B", "Class D", "Year 1", "Year 2", "Year 3"]
    },
    {
        id: "tomonari-mashima",
        name: "Tomonari Mashima",
        japaneseName: "真嶋 智也",
        currentClass: "Teacher",
        description: "The homeroom teacher of Class A. He is strict, fair, and skilled at teaching.",
        image: "/assets/characters/tomonari-mashima.png",
        homeroomClass: "A",
        tags: ["Teacher", "Class A", "Class D", "Year 1", "Year 2", "Year 3"]
    },
    {
        id: "kazuma-sakagami",
        name: "Kazuma Sakagami",
        japaneseName: "坂上 数馬",
        currentClass: "Teacher",
        description: "The homeroom teacher of Class C. He has a sharp mind and often clashes with Chabashira.",
        image: "/assets/characters/kazuma-sakagami.png",
        homeroomClass: "C",
        tags: ["Teacher", "Class C", "Class D", "Year 1", "Year 2", "Year 3"]
    },
    {
        id: "chairman-sakayanagi",
        name: "Chairman Sakayanagi",
        japaneseName: "坂柳 理事長",
        currentClass: "Teacher",
        description: "The Chairman of Advanced Nurturing High School and Arisu's father.",
        image: "",
        tags: ["Teacher", "Global"]
    },
    {
        id: "satoshi-tsukishiro",
        name: "Satoshi Tsukishiro",
        japaneseName: "月城 理事長代行",
        currentClass: "Teacher",
        description: "The Acting Director sent to replace Chairman Sakayanagi.",
        image: "",
        tags: ["Teacher", "Global"]
    },
    {
        id: "katsunori-shiba",
        name: "Katsunori Shiba",
        japaneseName: "司馬 克典",
        currentClass: "Teacher",
        description: "A teacher loyal to Tsukishiro who often acts behind the scenes.",
        image: "",
        tags: ["Teacher", "Global"]
    }
];

export const getClassColor = (cls: string) => {
    switch (cls) {
        case "A": return "text-red-500 border-red-500/50 bg-red-500/10";
        case "B": return "text-cyan-400 border-cyan-400/50 bg-cyan-400/10";
        case "C": return "text-purple-400 border-purple-400/50 bg-purple-400/10";
        case "D": return "text-blue-400 border-blue-400/50 bg-blue-400/10";
        case "Student Council": return "text-yellow-400 border-yellow-400/50 bg-yellow-400/10";
        case "Teacher": return "text-emerald-400 border-emerald-400/50 bg-emerald-400/10";
        default: return "text-gray-400 border-gray-400/50 bg-gray-400/10";
    }
};

export const getClassGradient = (cls: string) => {
    switch (cls) {
        case "A": return "from-red-900/50 to-transparent";
        case "B": return "from-cyan-900/50 to-transparent";
        case "C": return "from-purple-900/50 to-transparent";
        case "D": return "from-blue-900/50 to-transparent";
        case "Student Council": return "from-yellow-900/50 to-transparent";
        case "Teacher": return "from-emerald-900/50 to-transparent";
        default: return "from-gray-900/50 to-transparent";
    }
};

export const getClassGlow = (cls: string) => {
    switch (cls) {
        case "A": return "group-hover:shadow-[0_0_40px_rgba(220,38,38,0.4)] group-hover:border-red-500/50";
        case "B": return "group-hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] group-hover:border-cyan-500/50";
        case "C": return "group-hover:shadow-[0_0_40px_rgba(192,132,252,0.4)] group-hover:border-purple-500/50";
        case "D": return "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] group-hover:border-blue-500/50";
        case "Student Council": return "group-hover:shadow-[0_0_40px_rgba(234,179,8,0.4)] group-hover:border-yellow-500/50";
        case "Teacher": return "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] group-hover:border-emerald-500/50";
        default: return "group-hover:shadow-[0_0_40px_rgba(156,163,175,0.4)] group-hover:border-gray-500/50";
    }
};
