export interface TbateVolumeData {
  id: string;
  volumeNumber: string;
  title: string;
  releaseDateJP: string;
  releaseDateEN: string;
  coverImage: string;
  synopsis: string;
  chapters: string[];
  inProgress?: boolean;
}

export const tbateVolumes: TbateVolumeData[] = [
  {
    id: "v1",
    volumeNumber: "1",
    title: "Volume 1: Early Years",
    releaseDateJP: "2016-01-22",
    releaseDateEN: "2016-01-22",
    coverImage: "/assets/images/tbate/v1/volume-1-v3.jpg",
    synopsis: "King Grey has unrivaled strength, wealth, and prestige in a world governed by martial ability. However, solitude lingers closely behind those with great power. Beneath the glamorous outer shell of a powerful king lurks the shell of a man, devoid of purpose and desire. Reincarnated into a new world filled with magic and monsters, the king has a second chance to relive his life. Correcting the mistakes of his past will not be his only challenge, however. Underneath the peace and prosperity of the new world is an undercurrent threatening to destroy everything he has worked for, questioning his role and reason for being born again.",
    chapters: ["Prologue", "1. The Light at the End of the Tunnel", "2. The Encyclopedia of Mana Manipulation", "4. My Life Now", "5. Let the Journey Begin", "6. Up the Mountain", "7. How I Wished", "8. Questions", "9. Ones Held Dear", "10. Road Ahead", "11. To and Fro", "12. Meeting", "13. Q & A", "14. What’s to Come", "15. Next Step", "16. Companion", "17. Family", "18. Peaceful", "19. Proclamation", "20. Everybody Wins", "21. For Them"]
  },
  {
    id: "v2",
    volumeNumber: "2",
    title: "Volume 2: New Heights",
    releaseDateJP: "2016-05-12",
    releaseDateEN: "2016-05-12",
    coverImage: "/assets/images/tbate/v2/volume-2-v5.jpg",
    synopsis: "Arthur Leywin's journey to master mana and secure his family's future continues as he ventures into the beast glades and ascends to new heights of magical prowess.",
    chapters: ["22. Royalty", "23. Auction", "24. Aftermath", "25. Partners in Crime", "26. Worth Fighting For", "27. Examination", "28. Changes in Dicathen", "29. Sword and Body", "30. Last Leg", "31. Dire Tombs", "32. Dire Tombs II", "33. Dire Tombs III", "34. Rash Actions and Limits", "35. Precautions", "36. A Son, Brother, and Friend", "37. In the Meantime", "38. Introspection", "39. New Winds", "40. I’m Not That Nice", "41. A Ball", "42. A Ball II"]
  },
  {
    id: "v3",
    volumeNumber: "3",
    title: "Volume 3: Beckoning Fates",
    releaseDateJP: "2016-10-18",
    releaseDateEN: "2016-10-18",
    coverImage: "/assets/images/tbate/v3/volume-3-v1.jpg",
    synopsis: "Arthur enters Xyrus Academy, where he seeks a normal life but is dragged into dark plots and a terrorist attack that threatens his friends and classmates.",
    chapters: ["43. Xyrus Academy", "44. You Dare?", "45. Not Quite as Planned", "46. Wiser than the Wise", "47. Attention", "48. Reminisce", "49. Disciplinary Committee", "50. Classes and Professors", "51. Classes and Professors II", "52. Classes and Professors III", "53. It’s a Pleasure", "55. This is Going to Hurt", "56. Family Gathering", "57. Feelings and Old Memories", "58. First Day on the Job", "59. Confrontation", "60. Romantic Idiot", "61. My Team", "62. Baby Steps", "63. Field Trip", "64. Widow’s Crypt", "65. Widow’s Crypt II", "66. Widow’s Crypt III", "67. Widow’s Crypt IV", "68. Widow’s Crypt V"]
  },
  {
    id: "v4",
    volumeNumber: "4",
    title: "Volume 4: Horizon's Edge",
    releaseDateJP: "2017-05-19",
    releaseDateEN: "2017-05-19",
    coverImage: "/assets/images/tbate/v4/volume-4-v1.jpg",
    synopsis: "The boundaries of Dicathen begin to fracture as ancient threats reveal themselves, pushing Arthur to train harder at the horizon's edge.",
    chapters: ["69. An Unfamiliar Burden", "70. Course of Breakthrough", "71. A Confusing Day", "72. One Fallen", "73. A Will’s Last Breath", "74. Order of Power", "75. Manifest Destinies", "76. Good to See You", "77. Allies?", "78. Meanwhile", "79. Meanwhile II", "80. Meanwhile III", "81. At Last", "82. Benefactor", "83. A Greater Scale", "84. Lineage", "85. Elven Kingdom", "86. Winding Down", "87. A Will’s Unwillingness", "88. A Stroll", "89. A Cursed Blessing", "91. Collapse of Xyrus", "92. Bird’s Cage", "93. Chosen Ones", "94. Arrival", "95. The Calm Before", "96. The Storm", "97. Outcome"]
  },
  {
    id: "v5",
    volumeNumber: "5",
    title: "Volume 5: Convergence",
    releaseDateJP: "2017-11-20",
    releaseDateEN: "2017-11-20",
    coverImage: "/assets/images/tbate/v5/volume-5-v1.jpg",
    synopsis: "War is on the horizon. Dicathen prepares to defend itself against the invasion of Alacrya as separate forces converge on a collision course.",
    chapters: ["98. Floating Castle", "99. Fellow Captive", "100. Intentions", "101. Visitors", "102. Chess Pieces", "103. Peculiar Congregation", "104. The Great Eight", "105. When Ignorance is Bliss", "106. Logic’s Biggest Foe", "107. A Grudging Tolerance", "108. Ones Closest To Gods", "109. Snail’s Pace", "110. The Lost Art", "111. Good Night", "112. Newfound Goal", "113. To Hunt a Prey", "114. Workings of a Single Step", "115. Predator’s Domain", "116. What Lay Within", "117. Steps Forward and Back", "118. The Glass of Water", "119. Bearer of Grim News", "120. Opportunities to Learn", "121. The Last Mentor", "122. Wren Kain IV", "123. Battles in Various Scenarios", "124. Preparations", "125. The Calm of War", "126. Calm of War II", "127. Washed Up Omen", "128. Necessary Resolve", "129. Concealed Burdens", "130. From Princess to Soldier", "131. Reunion", "132. Drawing Closer", "133. Beyond the Door", "134. His Return", "135. A Warrior’s Maiden Heart", "136. As Quickly as He had Appeared", "137. Arrival", "138. To Right My Wrong"]
  },
  {
    id: "v6",
    volumeNumber: "6",
    title: "Volume 6: Transcendence",
    releaseDateJP: "2018-05-25",
    releaseDateEN: "2018-05-25",
    coverImage: "/assets/images/tbate/v6/volume-6-v3.jpg",
    synopsis: "As a newly appointed Lance, Arthur takes the frontline of the war, testing the boundaries of his magic to transcend normal human limits.",
    chapters: ["139. Warring Premonitions", "140. Ultimatum", "141. What War Means For Everyone", "142. Unexpectedly", "143. Numbers Behind Age", "144. Invaluable Allies", "145. From The Balcony", "146. Speech and Statement", "147. Role", "148. First Assignment", "149. A Simple Cook", "150. Rumination", "151. Morning After", "152. Way of Magic", "153. A Normal Soldier", "154. Changing Tides", "155. Why I’m Here", "156. A Lance’s Battle", "157. Pinnacle’s Height", "159. Down Within", "160. Healing Procedure", "161. Why Are You Crying?", "162. Intermission", "163. From Lance to Brother", "164. Old Face", "165. Center of Attention", "166. Meaning", "167. The Confidence To", "168. View from the Sky", "169. A Dwarven Night", "170. Old Roots", "171. Inside the Tavern", "172. Inside the Tavern II", "173. Conducting Business", "174. Mother Earth's Embrace", "175. Appeared", "176. The First Scythe", "177. Greying Glimpse", "178. Strategic Conduct", "179. Landship", "180. Alacryan Glimpse", "181. Gadgets and Magic", "182. Elders’ Assessment", "183. Measuring Magic", "184. Aspect of Unpredictability", "185. Guest Teacher", "186. Beauty in Magic", "187. Offensive Mindset", "188. Dragon Steps", "189. Inside the Vault", "190. Solitary Mindframe", "191. Magical Percentile", "192. Eat, Drink, Be Merry", "193. Broken Seal", "194. Man Behind the Veil"]
  },
  {
    id: "v7",
    volumeNumber: "7",
    title: "Volume 7: Divergence",
    releaseDateJP: "2019-02-22",
    releaseDateEN: "2019-02-22",
    coverImage: "/assets/images/tbate/v7/volume-7-cover-final-1.jpg",
    synopsis: "The war reaches a critical divergence point. Traitors within and overwhelming enemies from without push the defenders of Dicathen to their absolute limits.",
    chapters: ["195. Next Stage", "196. Questioning", "197. Torn", "198. A City Within", "199. Return", "200. Responsibilities", "201. Allocation", "202. Traitor's Request", "203. A Poem", "204. Enemy Territory", "205. Lost Words", "206. Brother’s Consent", "207. Coordination", "208. Enemy Territory II", "209. Deployed", "210. Awaiting the Horde", "211. Awaiting the Horde II", "212. A Promise", "213. Enemy Territory III", "214. Welcoming Gift", "215. Two Versus an Army", "216. Battlefield", "217. Decisions Made", "218. From Leader to Soldier", "219. Army Approaching", "220. The Weight of a Choice", "221. Backtrack", "222. Dim Tunnels", "223. Future’s First Step", "224. In Her Element", "225. Dim Tunnels II", "226. Carried Back", "227. Shared Affliction", "228. Punishable Actions", "229. Above Limitations", "230. Anchor", "231. Field of White", "232. Resounding Horns", "233. Dim Tunnels III", "234. Following Orders", "235. Tainted Blood", "236. Treason", "237. Dim Tunnels IV", "238. Remembrance", "239. Wavering Pillar", "240. Darkening Grey", "241. Expired Arrangement", "242. Hidden in Sand", "243. Passage of Time", "244. Reconciliation", "245. Hope and Trust", "246. Two Loves", "247. On the Surface", "248. Day of Rebirth", "249. Walking Catastrophe", "250. Dear Old Friend", "251. Not Alone", "252. His Name", "253. Gone", "Afterword"]
  },
  {
    id: "v8",
    volumeNumber: "8",
    title: "Volume 8: Ascension",
    releaseDateJP: "2020-07-24",
    releaseDateEN: "2020-07-24",
    coverImage: "/assets/images/tbate/v8/tbate_volume-8_cover.jpg",
    synopsis: "Left for dead, Arthur wakes up in a foreign land. Stripped of his mana core, he must master a new form of power—Aether—to survive the dungeon trials of Alacrya and ascend once more.",
    chapters: ["254. Hello Darkness", "255. The Next Message", "256. Resolve", "257. Left Behind", "258. A Healthy Appetite", "259. Round Two", "260. Victory", "261. The Core", "262. Forbidden Fruit", "263. Law of the Wild", "264. Mother Lode", "265. Purge", "266. A Quiet Strength", "267. The Bridge", "268. The Platform", "269. Cornered", "270. Branch of Destruction", "271. First Ascent", "272. On Guard", "273. Justification", "274. Trading Knowledge", "275. More Than a Weapon", "276. Descent", "277. Back to Basics", "278. Your Name", "279. Being of Aether", "280. The Crystal", "281. Maerin", "282. Blood of the Ancients", "283. The Town Chief", "284. Bow’s Blight", "285. One Step Forward", "286. Price to Pay", "287. The Day of Bestowment", "288. A Social Gathering", "289. The Catch", "290. Once in a Lifetime", "291. Deep Dive", "292. A Mutually Beneficial Partnership", "293. Blending In", "294. Ascension 101", "295. How to Survive", "296. Familial Ascent", "297. Full Circle", "298. Familiar Faces", "299. Fighting Back", "300. The Mirror Room", "301. More to Do", "302. Telling Tales", "303. Missing Pieces", "304. Devil's Deal", "305. The Faintest Hope", "306. Following His Footsteps", "307. God Rune", "308. Unmasked", "309. To Kill or Not to Kill", "310. Tracks", "311. Victory", "312. Feathers in Snow", "313. The Four Clans", "314. Cost Revealed", "315. Uncertain Truths", "316. God Step", "317. The Mountain", "318. Shared Memories", "319. Parting", "320. The Wild Things", "321. Out of Place", "322. Festive Tension", "323. Misdirection", "324. Without Return", "325. Intervention", "Afterword", "Also by TurtleMe"]
  },
  {
    id: "v9",
    volumeNumber: "9",
    title: "Volume 9: Reckoning",
    releaseDateJP: "2022-05-20",
    releaseDateEN: "2022-05-20",
    coverImage: "/assets/images/tbate/v9/edited-background-1.png",
    synopsis: "Arthur Leywin returns to Dicathen. Armed with Aether, he starts the reckoning to reclaim his homeland from the Alacryan forces.",
    chapters: ["322. Echoes and Accusations", "323. Imprisoned", "324. Blood Ties", "325. Painless", "326. Backlash", "327. Enough For Now", "328. Face to Face", "329. A Plea for Help", "330. The High Hall", "331. The Trial", "332. Broken Chains", "333. A Shame", "334. Last Mercy", "335. Haunting Peace", "336. Protection", "337. Layers", "338. A Weapon Against Him", "339. The Central Dominion", "340. Burden and Stakes", "341. Ash and Dust", "342. Duality", "343. Professor Princess", "344. Eyes Locked", "345. Socialite", "346. A Dim Spark", "347. A Stroll With Gods", "348. Melee Enhancement Tactics", "349. Hope and Lies", "350. Colleagues", "351. Minimally Catastrophic", "352. Relic, Revived", "353. Paradigm Shift", "354. Somewhat Teaching", "355. Just His Name", "356. Closure", "357. Blood Relic", "358. Blood Relic II", "359. Potentials", "360. Blood Relic III", "361. The Second Ruin", "362. Fate Intertwined", "363. Results and Attention", "364. Planting Seeds", "365. Unfinished Grudges", "366. Unmerciful Promise", "367. The Victoriad", "368. The Victoriad II", "369. The Victoriad III", "370. A Brief Reprieve", "371. The Victoriad IV", "372. Unsanctioned", "373. The Victoriad Ends", "374. Afterwards", "374.5", "375. Voices", "376. Choices", "377. Time to Go", "378. Last Stand", "379. Right Place, Right Time", "380. A Void Beyond", "Epilogue", "Afterword", "Also by TurtleMe"]
  },
  {
    id: "v10",
    volumeNumber: "10",
    title: "Volume 10: Retribution",
    releaseDateJP: "2023-05-20",
    releaseDateEN: "2023-05-20",
    coverImage: "/assets/images/tbate/v10/cover00440.jpeg",
    synopsis: "The conflict escalates as gods and demi-gods get involved. Arthur seeks retribution for his lost allies while trying to protect his family.",
    chapters: ["Prologue", "381. A Savior’s Burden", "382. Just Out of Reach", "383. Moving On", "384. Winds of Change", "385. Purity", "386. Surfaced Enmity", "387. Long-Worn Shackles", "388. Defending Vildorial", "389. Light and Shadow", "390. Apathy and Ecstasy", "391. Defending Vildorial II", "392. Sovereign’s Quarrel", "393. Beneath Taegrin Caelum", "394. What Makes Home", "395. Preparations", "396. Limitless", "397. A Path Diverged", "398. Descension", "399. The Least of the Scythes", "400. Choices Already Made", "401. Highbloods in Low Places", "402. A Bloodless Exchange", "403. A Match for My Talents", "404. A Battle of Words", "405. Tell Him", "406. Interruptions", "407. Yet Another Step", "408. The Best Choice", "409. Taste of Magic", "410. Good Humor", "411. A Family Affair", "412. The Lie You Believe", "413. False Memories", "414. School in Session", "415. Through Smoke and Spirits", "416. The Third Ruin", "417. One of Mine", "418. Shackles", "419. Black Doors", "420. Black Doors II", "421. One Last Ruin", "422. Through the Djinn’s Eyes", "423. Unexpected Visitor", "424. Changing the Narrative", "425. Amends", "426. Hoping", "427. A Dream Yet to Happen", "Afterword", "Also by TurtleMe"]
  },
  {
    id: "v11",
    volumeNumber: "11",
    title: "Volume 11: Providence",
    releaseDateJP: "2024-05-17",
    releaseDateEN: "2024-05-17",
    coverImage: "/assets/images/tbate/v11/cover.jpeg",
    synopsis: "With the threat of the Asuras looming larger than ever, Arthur searches for a way to secure the providence and survival of the mortal races.",
    chapters: ["1. Opposition", "2. Time", "3. Overdue", "4. Respect and Regards", "5. Fellowship Forged", "6. Entourage", "7. Obscured", "8. Scales of Understanding", "9. A Broken Path", "10. Holding Ground", "11. A Loose Idea", "12. The Message", "13. A Snapped Thread", "14. Horns of Exeges", "15. A Sword Struck", "16. The Truth of Power", "17. Scarred", "18. A Certain State in Time", "19. A Cage Opened", "20. Ripple in Timeline", "21. A Silent and Unmoving Conflict", "22. An Impossible Sight", "23. Changes", "24. Changes II", "25. Amongst the Fallen", "26. Amongst the Fallen II", "27. Amongst the Fallen III", "28. Equivalent Exchange", "29. Remembrance", "30. Collisions", "31. Lady Dawn's Child", "32. King’s Gambit", "33. Abandoned", "34. Not Without Cost", "35. A Plan in Many Parts", "36. A Cage of Light", "37. The Order", "38. Like a Summer Storm", "39. Words Almost Said", "40. Divergence", "41. Manaless", "42. Hunted", "43. Caught", "44. Falling into Place", "45. Reckoning", "46. Beckoning Fates", "47. Cracks in the Ice", "48. Transcendence", "49. Ji-ae", "50. Ascension", "51. Horizon’s Edge", "52. One Last Word", "53. Providence", "Epilogue", "Afterword", "Also by TurtleMe", "2"]
  },
  {
    id: "v12",
    volumeNumber: "12",
    title: "Volume 12: Apotheosis",
    releaseDateJP: "2026-05-19",
    releaseDateEN: "2026-05-19",
    coverImage: "/assets/images/tbate/v12/cover.jpeg",
    synopsis: "In the epic conclusion of the series, Arthur Leywin reaches the apex of his powers, facing the ultimate battle for the fate of both continents.",
    chapters: ["Dedication", "Map of Alacrya", "Map of Dicathen", "1. What was Lost", "2. Grounded", "3. Renegotiation", "4. Hell of a Time", "5. Contingencies", "6. A Great Gathering", "7. Nor a Gift", "8. The Promise", "9. Homecoming", "10. Amateurs", "11. For The Days To Come", "12. An Icy Fist", "13. Us Lessers", "14. Trust", "15. To Be Ready", "16. A Call For Aid", "17. Firm and Lasting Alliances", "18. Long Held Tradition", "19. Restless", "20. Green in the Gray", "21. Aftershocks", "22. The Baying of Hounds", "23. Echoes of the Fallen", "24. People of Alacrya", "25. Upper Hand", "26. My High Sovereign", "27. Curtain Fall", "28. Wounded", "29. Folded Space", "30. Ensuring Justice", "31. Growing Urgency", "32. Atop Their Bones", "33. Crystalline Curtain", "34. Ever His Humble Servant", "35. Ever His Humble Servant II", "36. At the Edge of Nothing", "37. At the Edge of Nothing II", "38. A Soldier, a Shield", "39. Games", "40. Unflinching", "41. Peace In Your Own", "42. Irreversible", "43. The Fall of Epheotus", "44. The Rise of the Relictombs", "45. The Whims of Fate", "46. Unprecedented Times", "47. Celebrations and Revelations", "48. A Wisp of Aether", "Thank you for reading Apotheosis", "Also by TurtleMe", "Acknowledgments"]
  },
];

export const tbateSideStories: TbateVolumeData[] = [
  {
    id: "v8.5",
    volumeNumber: "8.5",
    title: "Volume 8.5: Amongst the Fallen",
    releaseDateJP: "2022-02-11",
    releaseDateEN: "2022-02-11",
    coverImage: "/assets/images/tbate/v8.5/cover.jpeg",
    synopsis: "While Arthur is in Alacrya, the remaining defenders of Dicathen struggle to survive under the rule of the conquerors, telling the tales of those amongst the fallen.",
    chapters: ["ROCK BOTTOM", "NOT A SAFE LIFE", "BUT WHAT FOR?", "THE THREE LANCES", "INDENTURE IN DARV", "OUT OF HIDING", "POOR AND POORER", "NECESSARY RISKS", "NOW MORE THAN EVER", "EXPERIMENTATION AND UNDERSTANDING", "THE SKY ROAD", "HIT AND RUN", "FRIENDS OF FRIENDS", "CHOICES AND CONSEQUENCES", "THE ILLUSION OF SAFETY", "THE FRUITS OF OUR LABOR", "EVENING THE ODDS", "FROM AFAR", "THIS CHANGES EVERYTHING"]
  },
];