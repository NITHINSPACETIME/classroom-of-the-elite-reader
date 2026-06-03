export interface RezeroVolumeData {
  id: string;
  volumeNumber: string;
  title: string;
  arcId: string;
  releaseDateJP: string;
  releaseDateEN: string;
  isbnJP: string;
  isbnEN: string;
  chapters: string[];
  coverImage: string;
  synopsis: string;
  epubSource?: string;
  customChapters?: Record<number, string>;
  inProgress?: boolean;
  chapterUrls?: string[];
}

export const rezeroVolumes: RezeroVolumeData[] = [
  {
    id: "v1",
    volumeNumber: "1",
    title: "Volume 1",
    arcId: "arc-1",
    releaseDateJP: "January 25, 2014",
    releaseDateEN: "July 19, 2016",
    isbnJP: "978-4-04-066220-6",
    isbnEN: "978-0-316-31530-2",
    coverImage: "/assets/covers/rezero/v1.jpg",
    synopsis: "Subaru Natsuki is suddenly summoned to a fantasy world. With no sign of who summoned him, things become worse when he is attacked. Fortunately, a silver-haired half-elf named Emilia saves him, and Subaru decides to help her recover a stolen insignia.",
    chapters: [
      "Illustrations",
      "Prologue: Waste Heat of the Beginning",
      "Chapter 1: The End of the Beginning",
      "Chapter 2: A Struggle Too Late",
      "Chapter 3: Ending and Beginning",
      "Chapter 4: Fourth Time's the Charm",
      "Chapter 5: Life Started in Another World from Zero",
      "Epilogue: The Moon is Watching"
    ]
  },
  {
    id: "v2",
    volumeNumber: "2",
    title: "Volume 2",
    arcId: "arc-2",
    releaseDateJP: "February 25, 2014",
    releaseDateEN: "November 15, 2016",
    isbnJP: "978-4-04-066309-8",
    isbnEN: "978-0-316-39837-4",
    coverImage: "/assets/covers/rezero/v2.jpg",
    synopsis: "After surviving the trials at the capital, Subaru wakes up in Roswaal's luxurious mansion. He meets the twin maids Rem and Ram, the librarian Beatrice, and decides to work as a butler to stay close to Emilia.",
    chapters: [
      "Illustrations",
      "Prologue: Unseen Hand",
      "Chapter 1: Self-Conscious Feelings",
      "Chapter 2: The Promised Morn Grows Distant",
      "Chapter 3: The Sound of the Chain",
      "Chapter 4: A Deadly Game of Tag",
      "Chapter 5: The Morning He Yearned For",
      "Afterword"
    ]
  },
  {
    id: "v3",
    volumeNumber: "3",
    title: "Volume 3",
    arcId: "arc-2",
    releaseDateJP: "March 25, 2014",
    releaseDateEN: "March 21, 2017",
    isbnJP: "978-4-04-066557-3",
    isbnEN: "978-0-316-39840-4",
    coverImage: "/assets/covers/rezero/v3.jpg",
    synopsis: "The terrifying loop at the mansion intensifies as Subaru is targeted by a mysterious curse and a deadly chain-wielder. To break the tragic curse, Subaru must resolve the misunderstandings within the mansion and venture into the cursed forest.",
    chapters: [
      "Illustrations",
      "Chapter 1: Subaru Natsuki's Restart",
      "Chapter 2: I Cried and Screamed and Will Cry No More",
      "Chapter 3: The Meaning of Courage",
      "Chapter 4: The Demonic Method",
      "Interlude: Rem",
      "Chapter 5: All In",
      "Epilogue: Talking about the Future",
      "Interlude: A Private Chat Under the Moon",
      "Afterword"
    ]
  },
  {
    id: "v4",
    volumeNumber: "4",
    title: "Volume 4",
    arcId: "arc-3",
    releaseDateJP: "June 25, 2014",
    releaseDateEN: "June 20, 2017",
    isbnJP: "978-4-04-066786-7",
    isbnEN: "978-0-316-39842-8",
    coverImage: "/assets/covers/rezero/v4.jpg",
    synopsis: "The Royal Selection is officially declared in the Royal Capital, and Emilia is forced to attend. Subaru insists on accompanying her, leading to an intense clash with the knights and a devastating fallout with Emilia.",
    chapters: [
      "Prologue: The Royal Election Re-ignition",
      "Chapter 1: The Capital's Re-visitation",
      "Chapter 2: Royal Selection Candidates",
      "Chapter 3: The Self-Proclaimed Knight Natsuki Subaru",
      "Chapter 4: The Sound of Rain"
    ],
    inProgress: true
  },
  {
    id: "v5",
    volumeNumber: "5",
    title: "Volume 5",
    arcId: "arc-3",
    releaseDateJP: "October 24, 2014",
    releaseDateEN: "October 31, 2017",
    isbnJP: "978-4-04-067123-9",
    isbnEN: "978-0-316-39845-9",
    coverImage: "/assets/covers/rezero/v5.jpg",
    synopsis: "Left behind in the capital to heal, Subaru receives horrifying news: the Roswaal domain has been invaded. Desperate to protect Emilia and the villagers, Subaru rushes back, only to witness absolute madness.",
    chapters: [
      "Chapter 1: Laziness",
      "Chapter 2: Drive to the Domain",
      "Chapter 3: Unacceptable Reality",
      "Chapter 4: Theater of Madness",
      "Epilogue: Unnamed Chivalry"
    ],
    inProgress: true
  },
  {
    id: "v6",
    volumeNumber: "6",
    title: "Volume 6",
    arcId: "arc-3",
    releaseDateJP: "December 25, 2014",
    releaseDateEN: "February 27, 2018",
    isbnJP: "978-4-04-067181-9",
    isbnEN: "978-0-316-39847-3",
    coverImage: "/assets/covers/rezero/v6.jpg",
    synopsis: "Subaru reaches his absolute lowest point, crushed by repeated failure and despair. Rem stands by him, delivering the legendary 'From Zero' speech. Subaru gathers his resolve and initiates a massive alliance to hunt the dreaded White Whale.",
    chapters: [
      "Chapter 1: From Zero",
      "Chapter 2: Intermission: Rem's Daydream",
      "Chapter 3: The White Whale Hunt",
      "Chapter 4: A Decisive Battle in the Fog",
      "Epilogue: The Return Home"
    ],
    inProgress: true
  },
  {
    id: "v7",
    volumeNumber: "7",
    title: "Volume 7",
    arcId: "arc-3",
    releaseDateJP: "March 25, 2015",
    releaseDateEN: "June 19, 2018",
    isbnJP: "978-4-04-067468-1",
    isbnEN: "978-0-316-39849-7",
    coverImage: "/assets/covers/rezero/v7.jpg",
    synopsis: "The alliance fights desperately against the White Whale, a legendary beast that has terrorized the world for four centuries. With the beast slain, Subaru prepares to lead the army back to the domain to confront the Witch's Cult.",
    chapters: [
      "Chapter 1: Rem",
      "Chapter 2: Intermission: The Crusch Camp",
      "Chapter 3: Decisive Battle against the Cult",
      "Chapter 4: Petelgeuse Romanee-Conti",
      "Epilogue: Starting Life in Another World from Zero"
    ],
    inProgress: true
  },
  {
    id: "v8",
    volumeNumber: "8",
    title: "Volume 8",
    arcId: "arc-3",
    releaseDateJP: "June 25, 2015",
    releaseDateEN: "October 30, 2018",
    isbnJP: "978-4-04-067657-9",
    isbnEN: "978-0-316-39853-4",
    coverImage: "/assets/covers/rezero/v8.jpg",
    synopsis: "Subaru and Julius lead the joint forces in an intricate hunt to eliminate Petelgeuse's 'Fingers' scattered across the forest. But Petelgeuse's authority of Sloth proves to possess a terrifying secret.",
    chapters: [
      "Chapter 1: The Witch's Cult Hunt",
      "Chapter 2: The Sloth's End",
      "Chapter 3: A Battle of Pride",
      "Chapter 4: The Knight's Way",
      "Epilogue: The Day After"
    ],
    inProgress: true
  },
  {
    id: "v9",
    volumeNumber: "9",
    title: "Volume 9",
    arcId: "arc-3",
    releaseDateJP: "September 25, 2015",
    releaseDateEN: "February 19, 2019",
    isbnJP: "978-4-04-067757-6",
    isbnEN: "978-0-316-39855-8",
    coverImage: "/assets/covers/rezero/v9.jpg",
    synopsis: "The final showdown against Petelgeuse Romanee-Conti culminates in a race against time as Subaru tries to save Emilia from a massive explosion. In the aftermath of victory, Subaru realizes the tragic price Rem has paid.",
    chapters: [
      "Chapter 1: A Journey Home",
      "Chapter 2: Intermission: Rem",
      "Chapter 3: The Witch's Cult Hunt Continues",
      "Chapter 4: The Sloth's Final stand",
      "Epilogue: To Emilia"
    ],
    inProgress: true
  },
  {
    id: "v10",
    volumeNumber: "10",
    title: "Volume 10",
    arcId: "arc-4",
    releaseDateJP: "October 24, 2015",
    releaseDateEN: "June 18, 2019",
    isbnJP: "978-4-04-067957-0",
    isbnEN: "978-1-97-535384-1",
    coverImage: "/assets/covers/rezero/v10.jpg",
    synopsis: "Subaru ventures to the mysterious Sanctuary to meet Roswaal and Ram. There, he confronts the Witch of Greed, Echidna, and begins a series of trials that challenge his past, present, and future.",
    chapters: [
      "Chapter 1: The Sanctuary",
      "Chapter 2: The Witch of Greed",
      "Chapter 3: The Sanctuary's Trial",
      "Chapter 4: The Return Home"
    ],
    inProgress: true
  },
  // Arc 4 (Everlasting Contract): Volumes 11 to 15
  ...[11, 12, 13, 14, 15].map((num) => ({
    id: `v${num}`,
    volumeNumber: String(num),
    title: `Volume ${num}`,
    arcId: "arc-4",
    releaseDateJP: num === 11 ? "December 23, 2016" : num === 12 ? "March 25, 2017" : num === 13 ? "June 24, 2017" : num === 14 ? "September 25, 2017" : "December 25, 2017",
    releaseDateEN: num === 11 ? "November 5, 2019" : num === 12 ? "February 25, 2020" : num === 13 ? "June 23, 2020" : num === 14 ? "October 20, 2020" : "March 2, 2021",
    isbnJP: `978-4-04-068779-7-${num}`,
    isbnEN: `978-1-97-533230-3-${num}`,
    coverImage: `/assets/covers/rezero/v${num}.jpg`,
    synopsis: "Subaru faces the colossal Great Rabbit, Roswaal's sinister contract, and Beatrice's tragic isolation. He must bind a new contract of hope to break the infinite cycles of tragedy.",
    chapters: ["Chapter 1: The Great Rabbit", "Chapter 2: Contract of Greed", "Chapter 3: Beatrice", "Chapter 4: Break of Dawn", "Epilogue: Starting Life in Another World"],
    inProgress: true
  })),
  // Arc 5 (Stars that Engrave History): Volumes 16 to 20
  ...[16, 17, 18, 19, 20].map((num) => ({
    id: `v${num}`,
    volumeNumber: String(num),
    title: `Volume ${num}`,
    arcId: "arc-5",
    releaseDateJP: num === 16 ? "March 24, 2018" : num === 17 ? "September 25, 2018" : num === 18 ? "December 25, 2018" : num === 19 ? "March 27, 2019" : "September 25, 2019",
    releaseDateEN: num === 16 ? "June 22, 2021" : num === 17 ? "October 19, 2021" : num === 18 ? "February 22, 2022" : num === 19 ? "June 21, 2022" : "October 18, 2022",
    isbnJP: `978-4-04-069792-5-${num}`,
    isbnEN: `978-1-97-533235-8-${num}`,
    coverImage: `/assets/covers/rezero/v${num}.jpg`,
    synopsis: "Subaru Natsuki accompanies Emilia to the Water Gate City of Pristella. There, the Archbishops of the Witch's Cult launch a massive invasion, forcing an epic coalition of candidate knights to defend the city.",
    chapters: ["Chapter 1: Pristella", "Chapter 2: Water Gate City Crisis", "Chapter 3: The Coalition Forces", "Chapter 4: Stars of History", "Epilogue"],
    inProgress: true
  })),
  // Arc 6 (The Hall of Memories): Volumes 21 to 25
  ...[21, 22, 23, 24, 25].map((num) => ({
    id: `v${num}`,
    volumeNumber: String(num),
    title: `Volume ${num}`,
    arcId: "arc-6",
    releaseDateJP: num === 21 ? "December 25, 2019" : num === 22 ? "March 25, 2020" : num === 23 ? "June 25, 2020" : num === 24 ? "September 25, 2020" : "December 25, 2020",
    releaseDateEN: num === 21 ? "February 21, 2023" : num === 22 ? "June 20, 2023" : num === 23 ? "October 17, 2023" : num === 24 ? "February 20, 2024" : "June 18, 2024",
    isbnJP: `978-4-04-064264-2-${num}`,
    isbnEN: `978-1-97-535384-2-${num}`,
    coverImage: `/assets/covers/rezero/v${num}.jpg`,
    synopsis: "Expedition to the Pleiades Watchtower. Subaru, Beatrice, Emilia, Ram, Julius, and Anastasia journey to the dangerous Sand Dunes to restore Rem's lost memories, facing the legendary sage Shaula.",
    chapters: ["Chapter 1: The Watchtower", "Chapter 2: Sand Dunes Expedition", "Chapter 3: Hall of Memories", "Chapter 4: Trials of the Star", "Epilogue"],
    inProgress: true
  })),
  // Arc 7 (Vincent Vollachia / The Land of the Wolves): Volumes 26 to 33
  ...[26, 27, 28, 29, 30, 31, 32, 33].map((num) => ({
    id: `v${num}`,
    volumeNumber: String(num),
    title: `Volume ${num}`,
    arcId: "arc-7",
    releaseDateJP: num === 26 ? "March 25, 2021" : num === 27 ? "June 25, 2021" : num === 28 ? "September 24, 2021" : num === 29 ? "March 25, 2022" : "September 25, 2022",
    releaseDateEN: num === 26 ? "October 22, 2024" : "February 18, 2025",
    isbnJP: `978-4-04-680324-5-${num}`,
    isbnEN: `978-1-97-539000-0-${num}`,
    coverImage: `/assets/covers/rezero/v${num}.jpg`,
    synopsis: "Subaru and Rem are suddenly teleported to the sacred, militaristic Vollachian Empire. Caught in a brutal coup d'état, Subaru must assist the deposed Emperor Vincent Vollachia to reclaim his throne.",
    chapters: ["Chapter 1: Vollachian Coup", "Chapter 2: Land of the Wolves", "Chapter 3: Emperor's Return", "Chapter 4: Imperial Clashes", "Epilogue"],
    inProgress: true
  })),
  // Arc 8 (Vincent Vollachia / Four Knights of the Apocalypse): Volumes 34 to 38
  ...[34, 35, 36, 37, 38].map((num) => ({
    id: `v${num}`,
    volumeNumber: String(num),
    title: `Volume ${num}`,
    arcId: "arc-8",
    releaseDateJP: "2023 - 2024",
    releaseDateEN: "Coming Soon",
    isbnJP: `978-4-04-682564-3-${num}`,
    isbnEN: `YenPress-TBA-${num}`,
    coverImage: `/assets/covers/rezero/v${num}.jpg`,
    synopsis: "The Great Disaster descends upon the Vollachian Empire as the Undead Army rises. Candidates, imperial generals, and Subaru Natsuki form the ultimate coalition to prevent the end of the world.",
    chapters: ["Chapter 1: The Great Disaster", "Chapter 2: Undead Army Rise", "Chapter 3: Imperial Coalition", "Chapter 4: End of the Apocalypse", "Epilogue"],
    inProgress: true
  })),
  // Arc 9 (The Light of a Nameless Star): Volumes 39 to 43
  ...[39, 40, 41, 42, 43].map((num) => ({
    id: `v${num}`,
    volumeNumber: String(num),
    title: `Volume ${num}`,
    arcId: "arc-9",
    releaseDateJP: num === 39 ? "September 25, 2024" : num === 40 ? "March 24, 2025" : num === 41 ? "June 25, 2025" : num === 42 ? "September 25, 2025" : "December 25, 2025",
    releaseDateEN: "Coming Soon",
    isbnJP: num === 39 ? "978-4-04-683457-3" : num === 40 ? "978-4-04-684074-5" : num === 41 ? "978-4-04-684439-2" : num === 42 ? "978-4-04-684988-5" : "978-4-04-685502-2",
    isbnEN: `YenPress-TBA-${num}`,
    coverImage: `/assets/covers/rezero/v${num}.jpg`,
    synopsis: num === 39 
      ? "With the empire's trials concluded, the candidates return to Lugnica. A new phase of the story begins, illuminating the path of a nameless star in the magical heavens."
      : "The conflict surrounding Aldebaran and the Witch of Greed intensifies. Subaru and the Royal Selection candidates confront the final stages of the Light of the Nameless Star.",
    chapters: ["Chapter 1: The Nameless Star", "Chapter 2: The Witch's Secret", "Chapter 3: Final Reckoning", "Chapter 4: Beyond the Heavens"],
    inProgress: true
  })),
  // Arc 10 (The Land of the Lion Kings): Volumes 44 to 45
  ...[44, 45].map((num) => ({
    id: `v${num}`,
    volumeNumber: String(num),
    title: `Volume ${num}`,
    arcId: "arc-10",
    releaseDateJP: num === 44 ? "March 25, 2026" : "June 25, 2026",
    releaseDateEN: "Coming Soon",
    isbnJP: num === 44 ? "978-4-04-685820-7" : "978-4-04-686000-0",
    isbnEN: `YenPress-TBA-${num}`,
    coverImage: num === 45 ? "/assets/covers/rezero/placeholder.jpg" : `/assets/covers/rezero/v${num}.jpg`,
    synopsis: "Priscilla's death leaves a massive void in the Royal Selection. The focus shifts back to the capital and the Crusch Camp in the legendary Land of the Lion Kings.",
    chapters: ["Chapter 1: Land of the Lion Kings", "Chapter 2: The Royal Selection Resumes", "Chapter 3: Crusch's Camp", "Chapter 4: Starting Zero"],
    inProgress: true
  }))
];
