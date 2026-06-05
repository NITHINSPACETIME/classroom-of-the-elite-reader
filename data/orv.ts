export interface OrvVolumeData {
  id: string;
  volumeNumber: string;
  title: string;
  partName: string;
  chaptersRange: string;
  releaseDate: string;
  coverImage: string;
  synopsis: string;
  startChapter: number;
  endChapter: number;
  isSideStory?: boolean;
  type: "main" | "cont" | "side";
}

export const orvVolumes: OrvVolumeData[] = [
  {
    id: "orv-part1",
    volumeNumber: "1",
    title: "Part 1: The Beginning of the End",
    partName: "Episodes 1 to 23",
    chaptersRange: "Chapters 1 - 99",
    releaseDate: "December 2018",
    coverImage: "/assets/orv/covers/orv.webp",
    synopsis: "Kim Dokja is an ordinary contractor whose sole hobby is reading his favorite webnovel 'Ways of Survival'. When the novel suddenly becomes reality, he finds himself as the only reader who knows the end of the world. Armed with this knowledge, he begins his journey to survive the first scenarios alongside Yoo Joonghyuk.",
    startChapter: 1,
    endChapter: 99,
    type: "main"
  },
  {
    id: "orv-part2",
    volumeNumber: "2",
    title: "Part 2: The Constellation Banquets",
    partName: "Episodes 24 to 53",
    chaptersRange: "Chapters 100 - 284",
    releaseDate: "2019",
    coverImage: "/assets/orv/covers/orv.webp",
    synopsis: "Moving past the preliminary scenarios, Dokja enters the dome of Seoul and begins interacting directly with the powerful entities of the Star Stream: the Constellations. He builds the 'Kim Dokja's Company' nebula, enters the Gourmet Association, and begins altering the original stream of fate.",
    startChapter: 100,
    endChapter: 284,
    type: "main"
  },
  {
    id: "orv-part3",
    volumeNumber: "3",
    title: "Part 3: The Demon Realm",
    partName: "Episodes 54 to 70",
    chaptersRange: "Chapters 285 - 372",
    releaseDate: "2019",
    coverImage: "/assets/orv/covers/orv.webp",
    synopsis: "Banished to the 73rd Demon Realm, Kim Dokja must survive without the direct aid of his nebula companions. He becomes the new Demon King of Salvation, interacts with Outer Gods, and rallies the local citizens of the industrial complexes to prepare for the massive Gigantomachia scenario.",
    startChapter: 285,
    endChapter: 372,
    type: "main"
  },
  {
    id: "orv-part4",
    volumeNumber: "4",
    title: "Part 4: The Great War of Saints and Demons",
    partName: "Episodes 71 to 92",
    chaptersRange: "Chapters 373 - 486",
    releaseDate: "2019",
    coverImage: "/assets/orv/covers/orv.webp",
    synopsis: "The colossal conflict between the absolute alignments of Good and Evil descends. Dokja and his nebula participate in the Great War of Saints and Demons, facing the ultimate trials of the Star Stream, attempting to save both regression-weary companions and the world-line itself.",
    startChapter: 373,
    endChapter: 486,
    type: "main"
  },
  {
    id: "orv-part5",
    volumeNumber: "5",
    title: "Part 5: The Final Scenario & Epilogue",
    partName: "Episodes 93 to 99 & Epilogue",
    chaptersRange: "Chapters 487 - 551",
    releaseDate: "February 2020",
    coverImage: "/assets/orv/covers/orv.webp",
    synopsis: "The final scenarios approach as the nebula reaches the end of all stories: the 'Oldest Dream'. Dokja must make the ultimate choice to witness the conclusion of the story. In the aftermath of the epilogue, his companions seek a way to write a new beginning to bring back their lost king.",
    startChapter: 487,
    endChapter: 551,
    type: "main"
  },
  {
    id: "orv-cont",
    volumeNumber: "6",
    title: "Sequel: The Continuation Stories",
    partName: "Side Stories / Sequel Arc",
    chaptersRange: "Chapters 553 - 1024",
    releaseDate: "2023 - Present",
    coverImage: "/assets/orv/covers/cont.webp",
    synopsis: "The official continuation and side stories of Omniscient Reader's Viewpoint. Following the events of the main story, the nebula and new characters navigate the vast, rebuilt world-lines and remnants of the Star Stream to piece together the fragments of the Oldest Dream.",
    startChapter: 553,
    endChapter: 1024,
    type: "cont"
  },
  {
    id: "orv-side",
    volumeNumber: "7",
    title: "One-Shots: Special Side Tales",
    partName: "Anthology One-Shots",
    chaptersRange: "Chapters 1 - 5",
    releaseDate: "Special Edition",
    coverImage: "/assets/orv/covers/side.webp",
    synopsis: "A curated anthology of special one-shots and character backstories from the ORV universe, expanding on the lore, secondary characters, and hidden histories of the world-lines.",
    startChapter: 1,
    endChapter: 5,
    type: "side",
    isSideStory: true
  }
];
