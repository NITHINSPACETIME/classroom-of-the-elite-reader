
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

import { y3v4Chapters } from './custom/y3v4';

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
    },
    {
        id: "y3v4",
        volumeNumber: "Y3:V4",
        title: "Light Novel 3rd Year Volume 4",
        releaseDateJP: "May 21, 2026",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Prologue: Ibuki Mio's Monologue",
            "Chapter 1: Token Collection Special Exam",
            "Chapter 2: From a Subtle Rift",
            "Chapter 3: The Approaching Tasks",
            "Chapter 4: Nanase and Amasawa's Private Pool Time",
            "Chapter 5: The Candidates",
            "Chapter 6: I'll Do Anything You Want",
            "Chapter 7: Intertwining Strategies",
            "Chapter 8: Fragments of Thought",
            "Epilogue: A Special Existence",
            "Afterword"
        ],
        characters: ["Kiyotaka Ayanokoji", "Mio Ibuki"],
        coverImage: "/assets/y3v4.jpg", 
        customChapters: y3v4Chapters,
        inProgress: false
    }
];

export const shortStories: VolumeData[] = [
    {
        id: "ss-y3-v1",
        volumeNumber: "SS",
        title: "Short Stories: Volume 1",
        releaseDateJP: "Mar 25, 2025",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Ibuki Mio : Concern?",
            "Shiraishi Asuka : The Secrets She Harbors",
            "Morishita Ai : Gatling Gun",
            "Shiraishi Asuka : An Extra Pair of Ears",
            "Haruka Hasebe : A Pillar of Support",
            "[Special] Guidebook Short Story: Mock Date",
            "[Special] Guidebook Short Story: Ever Since That Time..."
        ],
        characters: ["Mio Ibuki", "Asuka Shiraishi", "Ai Morishita", "Haruka Hasebe"],
        epubSource: "/books/year3/y3v1.epub",
        coverImage: "/assets/y3v1.jpg"
    },
    {
        id: "ss-y3-v2",
        volumeNumber: "SS",
        title: "Short Stories: Volume 2",
        releaseDateJP: "Jul 25, 2025",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Ichinose Honami : To Love Too Much...",
            "Morishita Ai : Ear Gun",
            "Shiina Hiyori : A Wavering Heart",
            "Shiraishi Asuka : The Voice Hidden Within",
            "Special : The Six First-Year Students"
        ],
        characters: ["Honami Ichinose", "Ai Morishita", "Hiyori Shiina", "Asuka Shiraishi"],
        coverImage: "/assets/y3v2.jpg",
        epubSource: "/books/year3/y3v2.epub"
    },
        {
        id: "ss-y3-v3",
        volumeNumber: "SS",
        title: "Short Stories: Volume 3",
        releaseDateJP: "Nov 25, 2025",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Horikita Suzune : Contradiction?",
            "Morishita Ai : Honour",
            "Shiraishi Asuka : Colourless and Transparent",
            "Shiina Hiyori : Distancing",
            "[Special] : Valentine Festa 2026 - A Certain Conversation on a Certain Day"
        ],
        characters: ["Suzune Horikita", "Kei Karuizawa", "Ai Morishita", "Asuka Shiraishi", "Hiyori Shiina", "Kiyotaka Ayanokōji"],
        coverImage: "/assets/y3v3.jpg",
        inProgress: false,
        customChapters: {
            1: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Contradiction?</h1>
<p class="text-center text-sm text-gray-500 mb-12">Horikita Suzune SS — 3rd Year Volume 3</p>

<p>I continue the conversation with Karuizawa-san regarding the topic of the alliance between Class C and Class D.</p>
<p>"Class D is a unique class. Seeing a wounded Class C, they might’ve sympathised with them. That being said, suddenly taking in a half-destroyed enemy is a difficult thing to do. Forming an alliance without prior coordination shouldn't have been easy..."</p>
<p>"That's true. Hirata-kun and the others were saying the same thing. They were deducing all sorts of things, like maybe they didn't only hand over the win but also private points."</p>
<p>When I mentioned that the contact between Ayanokouji-kun and Ichinose-san had happened early on, Karuizawa-san nodded strongly.</p>
<p>"I see... yeah, I think so too. Or rather, that's definitely it."</p>
<p>For me who’d be seeking certainty, her words served as a reassuring clincher.</p>
<p>With this, I feel more confident about being able to organise my thoughts a little and move forward.</p>
<p>Of course, there is no doubt that I have an additional seed of concern now, though.</p>
<p>"Hey... I know you dodged the question last time, but mind if I overstep and ask something a bit direct?"</p>
<p>She gazed at me with an expression that looks slightly hesitant, almost embarrassed.</p>
<p>"Hm, dodged? What are you talking about?"</p>
<p>Her reply to my question in return was——.</p>
<p>"Do you like Ayanokouji-kun, Horikita-san? Even in this situation where we've become enemies."</p>
<p>Along with those words, my thoughts almost came to a halt for an instant, but at the same time, I recalled an event from a little while ago. The trigger that brought Karuizawa-san and me closer, right after Ayanokouji-kun had transferred classes. The exchange on that bench.</p>
<p>"Eh? T-that’s what you mean by overstep?"</p>
<p>"It’s a pretty important matter to me, after all."</p>
<p>"D-didn't I tell you I've never fallen in love with anyone?"</p>
<p>Just like before, I denied it.</p>
<p>"But you're flustered."</p>
<p>"If you talk whether I like someone or not, a topic that naturally flusters people, of course I'd react that way."</p>
<p>"Then do you like Sudou-kun?"</p>
<p>"Of course not. He’s a dependable classmate."</p>
<p>"See, you answered instantly. Even though it's basically the same question."</p>
<p>"That’s——"</p>
<p>That certainly might be strange.</p>
<p>There is no difference in the fact that Ayanokouji-kun and Sudou-kun are both high school boys.</p>
<p>And yet, a contradiction, however uncertain, is arising in my heart.</p>
<p>"If you're holding back out of consideration for me, you don't need to worry about it, ‘kay."</p>
<p>Consideration? Does that mean something like it's okay if we fall for the same person?</p>
<p>No, in the first place, I don’t even...</p>
<p>Before my thoughts could coalesce, Karuizawa-san continued.</p>
<p>"I don't think falling for the same person is a bad thing… Besides..."</p>
<p>As she was about to continue with ‘Besides‘, her expression clouded for an instant.</p>
<p>"Besides... what?"</p>
<p>Curious about said expression she showed for just that instant, I instinctively asked back.</p>
<p>However, to say that was the correct judgment might be a bit difficult——.</p>`,
            2: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Honour</h1>
<p class="text-center text-sm text-gray-500 mb-12">Morishita Ai SS — 3rd Year Volume 3</p>

<p>The paintballs I fired with such magnificence were destined to hit every enemy, burying an army of thirty with a single gun, but as luck would have it, every single one missed. Even as I ran out of ammo and attempted to hurriedly remove the magazine, I was unable to swap it out successfully.</p>
<p>"This is a defective product, isn't it. At this point, practically speaking, there is no doubt about it."</p>
<p>In the midst of such trouble, it seems Class C showed their pathetic intention to retreat.</p>
<p>Located in the middle ranks, I also decided to begin falling back to avoid being hit.</p>
<p>However, it was at that moment. The opponent must have feared my very existence.</p>
<p>As almost all enemy gun barrels aimed for my frail back.</p>
<p>Normally, I would display movements as swift as Idaten, but due to various circumstances, that wasn't possible.</p>
<p>After only a brief respite, a merciless attack will surely pierce through me.</p>
<p>What must I do to save myself----.</p>
<p>As I fled desperately, what caught my eye was the tissue-paper-thin Yamamura Miki.</p>
<p>I cannot afford to fall here, which means there is only one option available to take.</p>
<p>"Look out, Yamamura Miki...!"</p>
<p>If I grab Yamamura Miki's shoulders and spin her around, she will turn into a shield.</p>
<p>As the entity who protected me, she'll be able to, however slight, leave behind some proof of her existence; in other words, we'll have a win-win relationship.</p>
<p>The moment I put strength into my grip on her shoulders to turn her into a shield, a sharp pain ran through my back.</p>
<p>"Ku...!"</p>
<p>An additional shot, then a second, followed by continued pain in my back.</p>
<p>"Uu...!"</p>
<p>"M-Morishita-san!"</p>
<p>It appears I was just slightly short on time to turn her into a shield...</p>
<p>"It appears... this is the end for me. At the very least, you run..."</p>
<p>"No way, why would you cover for someone like me...!"</p>
<p>"I still had a benevolent heart left in me; that is all. Live on, Yamamura Miki. And, in my place, as an Amazoness... *Slump*."</p>
<p>"Morishita-san... Morishita-san...!"</p>
<p>Well, I suppose this is fine too----.</p>
<p>As the person who risked her own life to cover for her, Yamaura Miki will likely be grateful towards me for the rest of her life.</p>
<p>And I can return to the ship and take it easy.</p>
<p>As a way to go out, it was truly an impeccable, honourable action, wasn't it. Period.</p>
<p>***</p>
<p>Idaten: A reference to Skanda, a Buddhist guardian deity known for running very fast.</p>
<p>"Paper-thin": The raw text uses 薄葉紙 (thin paper/tracing paper) to describe Yamamura, referencing her character trait of having a very thin/weak presence.</p>`,
            3: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Colourless and Transparent</h1>
<p class="text-center text-sm text-gray-500 mb-12">Shiraishi Asuka SS — 3rd Year Volume 3</p>

<p>Inside the two-person tent, for some reason, Hoashi-san was seizaing before me.</p>
<p>"Please allow me to ask you a question!"</p>
<p>Saying so, she bowed her head deeply.</p>
<p>“You sure are acting awfully formal; just what is it that you might want to ask?”</p>
<p>“That is of course… whether there exists a person whom you are interested in, Shiraishi-san!”</p>
<p>I had thought she was acting strangely earlier, but I see, so that’s what this is about.</p>
<p>Realising the reason behind Hoashi-san’s distant attitude, I placed a hand on her shoulder.</p>
<p>"First thing’s first, let’s stop being so stiff, shall we? I much prefer your usual self, Hoashi-san."</p>
<p>"......I-is that so?"</p>
<p>Usually, she is an individual who treats everyone flatly. Her casual way of speaking, regardless of whether the other person is a boy or a girl, is her distinctive feature.</p>
<p>"Yes. Please act as you usually do."</p>
<p>"Well then... Yeah, got it. You see, it’s just that I usually don’t get to talk with you a lot, so.”</p>
<p>Perhaps feeling a little more at ease, the quality of her voice distinctively changed. The tension loosened, and a genuine joy took form of a voice, conveying a warmth that reached my way.</p>
<p>"Why is that? Please feel free to talk to me anytime."</p>
<p>"I mean, Nishikawa-san is always on guard. If I talk to you, she'll immediately cut in between us, right?"</p>
<p>"I think she simply wants to be included, you know."</p>
<p>"Hmm, doesn't look that way to me, though. Even earlier when it was decided I'd be in the same tent as you, she looked at me like I’d wronged her and she’s holding a grudge."</p>
<p>Indeed, she—Ryoko-san—is an individual who directs a unique timbre toward me.</p>
<p>That is precisely why, I suppose, the people around her end up seeing us having a special kind of relationship.</p>
<p>"Well, never mind that. And, and...?"</p>
<p>Perhaps curious about my love life, she completely shelved the matter regarding Ryoko-san and leaned in eagerly.</p>
<p>"Well, yes, I am of course in love. I too am a high school girl in the throes of adolescence, after all. Would you want to know who it is?"</p>
<p>Nodding her head up and down vigorously, Hoashi-san's eyes sparkled.</p>
<p>"I like voices, regardless of whether they are men or women. So the person I'm drawn to is inevitably someone who possesses a very alluring voice... and just recently, I encountered a voice I thought was truly wonderful."</p>
<p>"That certainly narrows the suspects down... could that someone be sitting next to you in class?"</p>
<p>"Fufu. You sure are wicked, Hoashi-san. So you already largely had a mark on who it was, huh."</p>
<p>Just as I tried to continue the conversation, a sound of calm footsteps could be heard near the tent</p>
<p>Immediately after my brain recognised before I did that they belonged to Ayanokouji-kun’s——</p>
<p>"There is something I want to ask of you, Shiraishi; do you have a moment?"</p>
<p>It was an entrance so perfect it was as though he’d he timed it, wasn't’t it.</p>
<p>Lightly excusing myself to Hoashi-san, whose eyes were sparkling even more, I picked up a lantern and leaned out from the tent entrance.</p>
<p>"Good evening, Ayanokouji-kun. What is the matter?"</p>
<p>"I want to talk a little. Can you spare some time?"</p>
<p>"A talk... you say."</p>
<p>Though the late hour does weigh on my mind a bit, I wonder what this could be about.</p>
<p>The impression I hold of him, even now, is colourless and transparent. It is not easy to deduce what lays within based on the quality of his voice.</p>
<p>That is precisely what makes it so very alluring, though.</p>
<p>“Hey, hey. You’d better make sure other boys don’t spot you, okay? It’d be a huge deal if you get caught, after all.”</p>
<p>Due to the contents of the conversation we were just having, her imagination too seems to be running wild.</p>
<p>Now, let’s us enjoy this little night date, shall we.</p>`,
            4: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Distancing</h1>
<p class="text-center text-sm text-gray-500 mb-12">Shiina Hiyori SS — 3rd Year Volume 3</p>

<p>The morning sea had been shining with a dazzling sparkle.</p>
<p>While gazing at that sea alone, I quietly let my thoughts wander.</p>
<p>What do I want to do from here on. How must I proceed.</p>
<p>I want to cherish my time with Ayanokouji-kun.</p>
<p>However, choosing that might not lead the class in a positive direction.</p>
<p>"I am being greedy... aren't I."</p>
<p>Until a short while ago, I thought I might never be able to speak with Ayanokouji-kun again.</p>
<p>Even though I had been thinking that way, now that I have the time to do so, it has become a source of worry.</p>
<p>Since the Uninhabited Island exam began, Ruuen-kun has not asked me for advice even once.</p>
<p>Rather than saying I am not trusted...</p>
<p>It might be more accurate to say it feels like he is walking on eggshells around me.</p>
<p>Ryuun-kun knows how I feel.</p>
<p>Regarding that fact, I do not harbour any opinion of whether that's good or bad, but...</p>
<p>Surely, that is the cause of him keeping his distance.</p>
<p>"What is the right choice to make..."</p>
<p>I ask myself by putting it into words.</p>
<p>All that returns is the faint throbbing of my chest and the gentle sound of the waves.</p>
<p>"I want to see him... don't I."</p>
<p>I want to meet Ayanokouji-kun and talk.</p>
<p>My words and my heart repeatedly murmur the same thing.</p>
<p>We passed each other on the ship, but there was no opportunity to speak.</p>
<p>And speaking was not possible when we disembarked either.</p>
<p>Once the special exam is over, I will go to see him myself.</p>
<p>I resolve myself with a small bit of courage.</p>
<p>\n</p>
<p>Even after that, I continue to walk quietly alone along the seaside.</p>
<p>While carving each step into my memory so as not to forget.</p>
<p>\n</p>
<p>This daily life is by no means guaranteed—</p>
<p>\n</p>
<p>Yes, one never knows when happiness will announce its end, after all--I walk on, strongly aware of that.</p>`,
            5: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">A Certain Conversation on a Certain Day</h1>
<p class="text-center text-sm text-gray-500 mb-12">Valentine Festa 2026 SS — 3rd Year Volume 3</p>

<p>On a certain afternoon during a holiday in June.</p>
<p>I'd headed to the cafe in Keyaki Mall, without any particular plans to meet anyone.</p>
<p>For I'd started to slightly miss having time to myself, having been busy dealing with the changes in my environment ever since transferring. classes.</p>
<p>Since it was still early, the cafe was relatively empty.</p>
<p>Deciding to settle down at a small table meant for two in the back.</p>
<p>For a while after, I merely drank my coffee, spending thirty minutes doing nothing in particular.</p>
<p>As the cafe slowly filled with more people.</p>
<p>Before I knew it, a group of four first-year boys had come and taken the neighbouring seats.</p>
<p>Though I hadn't planned on paying them any mind beyond that, they must have already been getting pretty lively before sitting down, as cheerful laughter erupted from them frequently.</p>
<p>"This school's seriously on another level, ain't it? Like, I was genuinely pumped during the entrance ceremony."</p>
<p>On another level? Are they getting all riled up over academics?</p>
<p>"You're mean Student Council President Horikita, right> The moment I saw her, I was like, 'Where in the world would you find a student council president that cute! Wait, she's right there!' and I was completely thrown. And then I noticed there was nothing but cute girls everywhere I looked, left or right."</p>
<p>The four nodded in agreement.</p>
<p>Apparently, 'on another level' had nothing to do with academics; they were talking about appearances.</p>
<p>Well, that's more like the kind of conversation you'd expect from students——especially from guys.</p>
<p>I picked up my now half-filled coffee cup. Though it had already gone cold, it nevertheless offered a pleasant flavour.</p>
<p>About half the seats were filled. That said, since it was getting close to noon, I suppose leaving in another 30 minutes or so would be proper etiquette as a customer.</p>
<p>After that, I went back to looking at my phone on my lonesome, but, being bothered by the fact that the first-years who had been so rowdy just moments before had gone quiet, I decided to check up on them.</p>
<p>They were huddled together, seemingly whispering about something, but unmistakably buzzing with excitement.</p>
<p>The one thing common among the four of them was their line of sight.</p>
<p>At the end of their gaze, Ichinose was just walking past the front of the cafe.</p>
<p>"It's Ichinose-senpai... She's super cute."</p>
<p>So murmured a remark you'd hear from any ordinary boy.</p>
<p>"She's my absolute number one oshi.... I wanna date her..."</p>
<p>"No way, no way, ain't no chance you could score her."</p>
<p>"No, man, when I greeted her the other day, she gave me this incredibly cute smile."</p>
<p>"To everyone, she does. Being that cute yet kind, it's crazy, dude."</p>
<p>Seems like Ichinose's popularity remains as usual.</p>
<p>Since quitting the student council, I'd thought that her on-campus visibility had markedly declined, but she might still be a step above the rest in terms of fame.</p>
<p>"Um, actually... Ichinose is also my oshi. She's just not of this world..."</p>
<p>"Right!?"</p>
<p>Because they were in the adjacent seats, the boys' conversation came through perfectly clear to me.</p>
<p>They had presumably been keeping it down so as not to be heard by those around them, but as the topic grew more exciting, their volume was gradually rising.</p>
<p>"Like, how should I put it, an angel?"</p>
<p>"An angel, yeah, that's it. She's on the level of angels."</p>
<p>The word 'Angel'.</p>
<p>Indeed, Ichinose's first impression, she who boasted one of the highest profiles in the entire year, might well be exactly that.</p>
<p>She doesn't merely wish to help everyone, but actually extends her hand to do so.</p>
<p>There lay no ulterior motives behind it; merely a strongly embedded, earnest desire to save others.</p>
<p>You couldn't say that the expression 'Angel' truly applies not just to her outward appearance but to her inner self as well.</p>
<p>Of course, it can't be denied that the circumstances of continuing to only do good deeds have become a shackle under the school's system of class competition.</p>
<p>But either way, it seemed the new first-years were getting the exact same impression of Ichinose that I myself had when I first enrolled.</p>
<p>"Like, how do I say this, she's got this mature allure that first-years just don't have, if you know what I mean..."</p>
<p>Though age-wise, they are only two years apart, in the narrow world of students, a two-year difference is certainly significant.</p>
<p>Three of the four boys continued to liven up as they talked about Ichinose.</p>
<p>But what caught my attention was the boy wearing glasses.</p>
<p>Up until now, he had nodded along to a few topics and given brief replies, but had been quite quiet.</p>
<p>Even as they were livening up over Ichinose, he showed no particular change.</p>
<p>"So, Ichinose-senpai's the best third-year, then?"</p>
<p>"No objections!"</p>
<p>"No objectionsss!"</p>
<p>The first years were even doing their own arbitrary rankings.</p>
<p>But here, the glasses boy finally made his move.</p>
<p>If I recall correctly from the OAA, he's Maruo from Class 1-C.</p>
<p>Maruo, who had up until this point neither strongly disagreed nor affirmed, cast a stone.</p>
<p>"...I, kinda feel different, I guess. Ichinose-senpai is certainly cute, but calling her the best? Can't say that shows good taste."</p>
<p>It appears there *was* an objection.</p>
<p>"Feel different? What do you mean you feel different."</p>
<p>One of the boys crossed his arms and questioned his objecting friend.</p>
<p>"My type differs from yours. No, it might even be fair to say you've got nothing in your sockets."</p>
<p>As if he had been waiting for that very moment, he murmured so and slowly raised his slender right arm, pointing his index finger toward the distance with a somewhat unsteady gesture.</p>
<p>At once, all three of the other boys looked toward the place his finger indicated.</p>
<p>With my curiosity piqued, too, I followed suit, solely with my gaze a beat later.</p>
<p>And then——</p>
<p>"*She*'s, the greatest woman in this school... no, the greatest woman that I've ever encountered in my entire life."</p>
<p>He seemed to have the conviction that she was worthy of being called the best.</p>
<p>The girl Maruo had pointed to was, of all people, Hiyori.</p>
<p>She appeared to be in conversation with Kaneda, who was walking beside her, directing a gentle smile his way. Kaneda, on the other hand, also seemed to be thoroughly enjoying his conversation with Hiyori; that was obvious even from this distance.</p>
<p>"Who the hell is that? I mean, she's ridiculously cute, but... talk about a dark horse, dude."</p>
<p>"That's Shiina Hiyori-senpai. She's a third-year like Ichinose-senpai, and she loves books. If we're in a game, you'd definitely raise your surface-level affection with her by visiting the library every day."</p>
<p>"I don't really get that analogy, but it definitely came through loud and clear that you like her..."</p>
<p>"But ain't that guy waking next to her her boyfriend? Looks like the type to like books, after all."</p>
<p>For first-years who didn't know about her relationship with Kaneda, if there is a friend-looking guy nearby, it is natural to come to that suspicion.</p>
<p>In response to that observation, Maruo slapped the table once with his palm.</p>
<p>"Ha ha, you shan't say dumb things. Shiina-senpai is pure and innocent, truly the ultimate and perfect angel. There's no way she'd be swept up in the trivial romances of the mundane world, right?"</p>
<p>Love is blind; there was absolutely no room for doubt, it seems.</p>
<p>"Ain't that just your own personal wish..."</p>
<p>As one boy slightly retorted, another boy chimed in.</p>
<p>"Maruo, I'll admit Shiina-senpai is cute, but you know what they say, right? That girls like that are surprisingly wicked, like, you think she's an angel and turns out she's actually a devil"</p>
<p>A person's outer appearance naturally cannot reveal their inner self.</p>
<p>Even for someone like Ichinose, who projects herself outward with full force, there is not a single piece of evidence to substantiate that her personality and thoughts align perfectly with her true feelings.</p>
<p>On the other hand, if it were a student whose name they didn't even know, those question marks would only grow stronger.</p>
<p>An existence he believed to be pure turned out not to be; if that were the case, would Maruo be deeply hurt?</p>
<p>"...A devil, huh..."</p>
<p>Muttering softly, Maruo quietly closed his eyes.</p>
<p>Then he nodded once, and afterwards repeated the same nodding motion several more times.</p>
<p>"Shiina-senpai as a devil... heh."</p>
<p>Far from getting angry, he wore a smile at having been told she might be a devil for some reason.</p>
<p>"Shiina-senpai as a devil... Fufufu."</p>
<p>"O-oi, Maruo?"</p>
<p>The three of them exchanged looks, seemingly sharing a simultaneous feeling of 'uh-oh'.</p>
<p>"No, I don't think that was a bad retort at all. Shiina-senpai is certainly an angel, no, an archangel, but the idea of what if she's actually a devil instead of an angel was a blind spot. No, it is precisely the act of betraying the readers that births catharsis, perhaps. Fabulous, absolutely fabulous———"</p>
<p>Even after saying "fabulous," he continued to mutter words under his breath, but I couldn't catch them.</p>
<p>"It's no good. Maruo's gone off to another world again."</p>
<p>"Once he gets like this he won't come back for a while, after all..."</p>
<p>Apparently, Maruo's behaviour wasn't particularly strange for him and was a frequent occurrence.</p>
<p>"Normally you'd be dejected, won't you? If someone you liked turned out to be a devil."</p>
<p>"Right?"</p>
<p>"This is precisely what you call a lack of imagination, my friends. I almost wish I could show you guys the devilish version of her I'm picturing. Aah, adorable. The devilish Shiina-senpai... I can see her cheeks going red when I ask her to berate me, desperately racking her brain for words, only for the utterance that comes out falling far from an insult. And to her flustered self, I'd say 'It's okay, you're such a cutie, aren't you?' and pull her into my arms."</p>
<p>"...Jesus."</p>
<p>"I wanna see it, I want to see Shiina-senpai in a devil cosplay just once before I die. I shall make sure to add that to the ranking of things I want to do... I'll have Shiina-senpai become a devil before my eyes, just for my eyes."</p>
<p>"But I kinda get how Maruo feels, if you know what I mean... I want to see Ichinose-senpai in an angel cosplay, too. No, at this point, a devil cosplay would do; I wanna beg her for it."</p>
<p>"Even you too... well, I also..."</p>
<p>He started to deny it, but apparently came to the same conclusion, folding his arms and nodding.</p>
<p>The four of them were each immersed in their own fantasies, imagining Ichinose and Hiyori in angel-and-demon cosplay, seemingly basking in contentment.</p>
<p>I myself am confident that I have deepened my understanding of cosplay to a reasonable extent.</p>
<p>As someone who was involved in running a maid café at last year's culture festival, I couldn't exactly withhold sympathy, I suppose.</p>
<p>Hypothetically, if we could dress both Ichinose and Hiyori in those outfits, angel and devil cosplay might suit them better than imagined.</p>
<p>Of course, whether you cast Ichinose as the angel and Hiyori as the devil, it wouldn't mean that it reflected their inner goodness or wickedness whatsoever; it has no correlation in the slightest.</p>
<p>Which is why even with Ichinose as the demon and Hiyori as the angel, it would naturally work.</p>
<p>Let's see... if we used a tactic where they changed outfits between the morning and the afternoon, showing off both an angel and a devil version of each, the same customers might be inclined to visit twice.</p>
<p>However, in that case, we would have to account for the difference in their body types, so simply swapping the costumes wouldn't work. The issue then becomes whether we could recoup the cost of preparing double the outfits, but——</p>
<p>Well, if we're talking about running a café, we'd surely have secured a few other staff members as well...</p>
<p>And with that, realising I was moving beads on an abacus in my head, I forced my thoughts to stop.</p>
<p>It's unclear if there will even be a cultural festival again this year, and it's hard to imagine the school repeating the exact same special exam and themes, so the chances of us doing a maid cafe again aren't very high right now.</p>
<p>There's little point in continuing these daydreams, so I should stop.</p>
<p>Still, I feel like I haven't quite grasped the true essence of why people are so strongly drawn to cosplay.</p>
<p>A cute member of the opposite sex wearing a cute outfit. I understand that's the appeal, of course.</p>
<p>However, the fact that that's because I don't truly understand it is also certain.</p>
<p>I suppose it might not be a bad idea to deepen my knowledge of cosplay a little more. I wonder if I could ever reach a point where the feeling of "wanting to see someone in a cosplay outfit" wells up inside me as it did for Maruo.</p>
<p>After that, as planned, I left my seat exactly an hour later, having been able to get a fulfilling bit of rest.</p>
<p>One new thing etched into my mind.</p>
<p>To try to understand the appeal of cosplay just a little better.</p>
<p>'Twas a day with such a harvest(?).</p>`
        }
    },
{
        id: "ss-y3-v4",
        volumeNumber: "SS",
        title: "Short Stories: Volume 4",
        releaseDateJP: "May 21, 2026",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Kushida Kikyou : Though Suspicious",
            "Ichinose Honami : Linked Thoughts",
            "Nanase Tsubasa & Amasawa Ichika : Though We Are Connected"
        ],
        characters: ["Kushida Kikyou", "Kiyotaka Ayanokōji", "Honami Ichinose", "Suzune Horikita", "Tsubasa Nanase", "Ichika Amasawa"],
        coverImage: "/assets/y3v4.jpg",
        inProgress: false,
        customChapters: {
            1: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Though Suspicious</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kushida Kikyou SS — 3rd Year Volume 4</p>

<p>I immediately took action to secure a solid standing within Group 3.</p>
<p>All to get along with the girls from the other classes as usual, and to amicably deepen our relationships.</p>
<p>Dinner on the first day of the special exam was the absolute perfect opportunity for this.</p>
<p>However, such plans were instantly shattered by the appearance of a certain man.</p>
<p>“If you don't mind, would you like to eat together.”</p>
<p>The one who called out to me was, of all people… overly dramatic though it may be, Ayanokouji-kun.</p>
<p>A lone boy diving straight into a flock of girls.</p>
<p>Even if he didn't mean anything by it, for me, it was a massive nuisance.</p>
<p>It was especially far from ideal given that Class D was present.</p>
<p>Information had already made its rounds to me too. The certified data that Ichinose Honami, their class leader, harbours feelings for Ayanokouji-kun. The last thing I want is for Amikura, someone close to her, to spread any unnecessary speculations.</p>
<p>Even so, given that he called for me, I, the good girl, played it safe.</p>
<p>I readily accepted, and we eventually distanced ourselves from the other students.</p>
<p>“What are you playing at, Ayanokouji-kun,” I asked, wanting to know the reason he approached me so instantly.</p>
<p>“Didn't you say you wanted to discuss things regarding tomorrow onward?”</p>
<p>This man's words are a heavy mix of truths and lies, so they can't be trusted.</p>
<p>So much so that I wouldn't be surprised even if he were acting solely to undo all my hard work.</p>
<p>“When the hell did I say that... Besides, you don't need my help in the first place, do you. You do realise you’re being a massive pain, right.”</p>
<p>“Is that so? I’d figured you’d be pleased, being able to show your usefulness within the group and satisfying your need for validation, but I suppose I was mistaken.”</p>
<p>He spoke with his usual, unchanging expressionless face.</p>
<p>God, he pisses me off.</p>
<p>He pisses me off, yet for some reason, I find myself unable to fully hate him.</p>
<p>Despite him being the same person during the Unanimous Voting Exam I’d loathed to the point of wanting to murder, that is.</p>
<p>“Don't make me laugh. It would be one thing if it were just you, but do you have any idea how painful it is to be praised in front of Shinohara and the others who know my true colours. They're just mocking me for their amusement.”</p>
<p>Observing his attitude up to this point, I arrived at an answer.</p>
<p>“Well, I do understand why you can't rely on Shinohara-san and Ike-kun...” I muttered with annoyance, acknowledging that it can't be helped that I’d be chosen by process of elimination.</p>
<p>“Still, it looks like you're doing quite well in your new class, Ayanokouji-kun.”</p>
<p>“They had their backs against the wall for Sakayanagi gone, after all. Things probably would've worked out even if it weren't me, I reckon.” [1]</p>
<p>“Yeah right.”</p>
<p>“If you have anything in mind, feel free to ask away.”</p>
<p>“I don't.”</p>
<p>Or so I’d thought, but then one thing that has been bothering me came to mind.</p>
<p>“There's no short of rumors about you right now, after all. Not that I think they're all true, but I've heard plenty of things about you even from Class D.”</p>
<p>That Ichinose Honami harbors romantic feelings for Ayanokouji.</p>
<p>That there might have been some event between the two that had brought them closer.</p>
<p>How trivial. Even as I’d thought of it so, it had been irritating me ever since I found out.</p>
<p>Putting it into words didn't change anything; if anything, it even felt as though it’d added to my burden.</p>
<p>“Even so——”</p>
<p>Thinking about it any further was unpleasant, so I decided to change the subject.</p>
<p>“Having people know the real me is nothing but trouble in general, but I guess having moments where I can speak my mind like this is might be m one saving grace.”</p>
<p>And using that as an excuse to escape, I began to walk away.</p>
<p>“Sorry, but I'm heading back. I don't want to draw any more attention from Shinohara-san and the others for no good reason.”</p>
<p>“Living a double life must be tough.”</p>
<p>Just because it's not his problem, I wish he wouldn't say that so flippantly.</p>
<p>“A bit late for that, don't you think.”</p>
<p>I’ve continued to wear this mask for my own sake.</p>
<p>But lately, I've been wondering.</p>
<p>Just how long is that going to go on for.</p>
<p>Until my life as a student ends? Even after I join the workforce? Even after I get married? Even after I grow old?</p>
<p>I wonder——just how long must I keep wearing this mask——.</p>`,
            2: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Linked Thoughts</h1>
<p class="text-center text-sm text-gray-500 mb-12">Ichinose Honami SS — 3rd Year Volume 4</p>

<p>With the groups announced, I headed toward Group 8 with a faint hope in my heart.</p>
<p>If I ended up in the same group as Ayanokouji-kun... then I'd get to spend three days together with him for this third uninhabited island exam.</p>
<p>But that hope quickly fell flat. That’s because I’d caught sight of Ayanokouji-kun heading toward a different group.</p>
<p>"...It can't be helped, I guess."</p>
<p>This is just one of those things you can't control, no matter how much you hope for it. I got to shift gears right away.</p>
<p>A short while later, I spotted one of the members I'd be grouping with.</p>
<p>Taking care not to startle her as I approached, I called out.</p>
<p>"Looking forward to working with you, Horikita-san."</p>
<p>She turned to look at me, her lips tightening slightly before meeting my eyes.</p>
<p>"I figured there was a decent chance that class leaders would end up in the same group, but to think I'd be paired with you, Ichinose-san."</p>
<p>I wonder if she sees me as someone easy to deal with, rather than a troublesome opponent.</p>
<p>No, actually, her thinking of me that way works out better.</p>
<p>"If this were a straightforward class-versus-class battle, it might have been tricky. But looking at the rules, cooperating as a group will benefit us both, so it's not a bad setup. And if you and I join forces, Horikita-san, we might be able to steer our group to a safe victory."</p>
<p>After that, we discussed the importance of joining hands as allies rather than fighting as enemies, gradually meeting each other halfway. And during that process, we arrived at the one topic we couldn't avoid——</p>
<p>"Getting on the same page about cooperating to aim for first place seems to be going much smoother than I expected, but there is one crucial issue that both you and I need to prioritise."</p>
<p>"How to handle the expulsions———right?"</p>
<p>As Horikita-san nodded, I made it absolutely clear that I wouldn't allow a single expulsion from my class. By declaring that, Horikita-san would naturally show she shared the same stance. That was exactly why, internally, my thoughts were already moving one step further ahead. Assuming Class A and Class D joined hands to solidify our defences, how would Ayanokouji-kun make his move. Once he grasped the rules of this special exam, what kind of method would he employ.</p>
<p>I understood that anticipating this would be the most crucial factor in protecting my classmates.</p>
<p>Who gets assigned to Ayanokouji-kun's group—that is surely what matters most.</p>
<p>Forcing an expulsion from within one's own immediate reach is the most surefire and controllable method.</p>
<p>In that case, all I have to do is link my thoughts to his, and fight in lockstep with him.</p>
<p>Ayanokouji-kun understands me. And I understand Ayanokouji-kun. That is everything.</p>`,
            3: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Though We Are Connected</h1>
<p class="text-center text-sm text-gray-500 mb-12">Nanase Tsubasa & Amasawa Ichika SS — 3rd Year Volume 4</p>

<p>Even after the conversation concluded, there were still about thirty minutes left of their private pool reservation, but as Nanase tried to wrap things up and leave early, Amasawa stopped her.</p>
<p>"We don't get many chances to talk just the two of us, so mind if I ask you a quick question."</p>
<p>"What is it."</p>
<p>Though Nanase didn't think Amasawa would become an ally easily, she put her guard up for a brief moment.</p>
<p>"Nanase-chan, have you ever been confessed to by a boy or dated anyone?"</p>
<p>She stared at Nanase with wide eyes and a devilish smile.</p>
<p>"...Excuse me?"</p>
<p>Ayanokouji, Ishigami, the White Room. There should've been a mountain pile to be curious about, yet the question Amasawa threw her way was completely out of left field; something Nanase hadn't expected at all.</p>
<p>"Well? Well?"</p>
<p>"I have never been in a relationship with a man."</p>
<p>"Wow. So you're completely pure, then."</p>
<p>"We are second-year high school students. Wouldn't those with romantic experience be in the minority?"</p>
<p>"That's not true at all. I'm no expert myself, but some sources have the number around 50%, give or take; one in two people are already experienced. And if you're cute or beautiful, wouldn't those odds go up?"</p>
<p>"50%, give or take... Is that true?"</p>
<p>Having never thought about such things herself, Nanase felt doubtful of the data.</p>
<p>"I was in the White Room my whole life, and ever since I enrolled here I've only had eyes for Ayanokouji-senpai, so I don't have any romantic experience, but it's different for you, right, Nanase-chan?"</p>
<p>It was the kind of conversation ordinary high school girls would have. Yet, amidst it all, Nanase sensed a faint sense of incongruity.</p>
<p>"I see. It is a good question for probing into my past, as well."</p>
<p>If she hadn't grown up in a typical family environment, it wouldn't be strange for her to have zero romantic experience.</p>
<p>"Ah, you're reading way too much into it. I was just asking out of pure curiosity."</p>
<p>"Well... either way, my answer remains the same."</p>
<p>"Then do you at least have a crush on someone? Don't tell me it's Ayanokouji-senpai?"</p>
<p>For a brief moment, a certain someone crossed her mind. But now, she couldn't even recall his smile.</p>
<p>"I do not have feelings for anyone. Now, if you'll excuse me."</p>
<p>Nanase left the private pool as if she were running away.</p>
<p>"She's got a much cuter side to her than I thought."</p>
<p>Seeing Nanase look slightly flustered brought a small sense of delight to Amasawa.</p>`
        }
    }
];
