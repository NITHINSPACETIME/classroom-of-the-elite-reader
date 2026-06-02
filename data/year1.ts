
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

export const shortStories: VolumeData[] = [
    {
        id: "ss-y1-v1",
        volumeNumber: "SS",
        title: "Short Stories: Volume 1",
        releaseDateJP: "May 25, 2015",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Horikita Suzune : A Certain Morning In the Swimming Pool",
            "Horikita Suzune : Happy or Unhappy?",
            "Horikita Suzune : A Dream for the Future?",
            "Honami Ichinose : Honami Ichinose's Everyday",
            "Kiyotaka Ayanokōji : Two People with a Bad Relationship"
        ],
        characters: ["Horikita Suzune", "Kiyotaka Ayanokōji", "Honami Ichinose"],
        coverImage: "/assets/y1v1.jpg",
        customChapters: {
            1: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">A Certain Morning In the Swimming Pool</h1>
<p class="text-center text-sm text-gray-500 mb-12">Horikita Suzune SS — Volume 1</p>

Something that happened a certain morning. I heard a deep sigh.
"hah – swim…"
Almost all boys were ecstatic, but only Hondo was dispirited.
"What's wrong?"
"Eh? No, nothing…"
Hondo looked as if he was worried about something.
"Speaking of which, You've always been looking. Don't tell me, you can't swim?"
It's not like I'm an expert, I have an ordinary level. It's only that, you see, there are a lot of things, if I swam."
I didn't understand anything about what Hondo wanted to say.
"I'm not enthusiastic about it. This swimming thing is really boring."
Hondo had returned to his seat very early.
"What's wrong with that guy?"
Ike tilted his head, not understanding him.
"Ah –so it's that. So it's that thing."
Sudo seemed to have understood Hondo's train of thought and broke into laughter.
"What's up?"
"There were also students like Hondo in middle school. He must be worried about that, the size of his lower parts."
"What?"
Sudo's answer was really unexpected.
"It can't be, right?"
"No, those who adopt that attitude are most likely because of that. If it was because of other reasons, his belly will be exposed or he has thick body hair. Does Hondo meet any of these two criteria?"
Indeed, Hondo has a very average body that you can find everywhere.
"Men determine the winner by the size of the lower part. Normally, that part tend to be very big in guys who are ordinarily unrestrained. This is like the thumbnail of yourself for the society. If the lower part of a healthy youngster is small, his evaluation will also suffer changes, isn't that so?"
"Pfhahahahaha! That guy, so his lower parts are small!"
Ike seemed to have understood Hondo's train of thought and laughed heartily. Ah – what an annoying society.
"That guy must be lazing around, look closely"
Sudo said that with a smiling face full of confidently.
Then the swimming class started. Today, Ike and Yamauchi were also excited about the girls' swimsuits.
Sudo looked at the Hondo he though was lazing around, while smiling.
It's because of people like you that even competition swimsuits have been vetoed by the adults, and there is a trend of guys and girls wearing swimsuits with less and less exposure, isn't it?
"Hey, what's Sudo laughing about, is there something funny?"
Kushida, who had finished changing her clothes, showed a face incapable to understand and asked me. As always, I didn't know where I should place my line of sight.
"There's a trivial matter"
"What do you mean by trivial matter?"
Stop, being gazed so cutely is also disturbing. Girl's swimsuits are extraordinarily erotic, I will get excited, you know?
If I said those words, I reckon Kushida would never talk to me again.
"Let's swim! There are a lot of guys resting."
Being vague, I said that while watching those who were just looking around. Kushida also looked around with me with an expression that implied agreement, to the students that were on the second floor.
"Girls have a variety of circumstances, but guys also have a lot too. Don't you they it? Swimming."
There are guys who merely dislike it, and there are guys who are not good at it."
"Although not being good at it, if they gave up at the beginning because of these circumstances, they would never be able to overcome it no matter how long."
Speaking like a teacher, Horikita has come. Well, the appearance of the swimsuits is really too bright.

<img src="/assets/ss/y1v1_ss1_illustration.png" alt="Horikita and Kushida in swimsuits" class="mx-auto my-8 rounded-lg shadow-lg max-w-md" />

In order to not look as if I was excessively looking that, I moved away my gaze without leaving any trace.
"I actually think that we should let them be. The worth of swimming, how should I put it? There are no daily complications for those who don't know how to swim. For those who live in the cities, the necessity of swimming is completely non-existent, isn't it?"
"What if there's an accident? If there's an earthquake, there will also be a tsunami. In order to raise the survival rate by 1%, there's nothing that can't be better than having learned to swim beforehand."
Naturally, it's impossible to deny this survival question once you have come up with this 1% word.
"Ahaha, the relationship between you two continues to be as good as always."
"Not in the slightest."
Horikita neither affirm nor deny. She just hates talking to Kushida.
"Kushida-chan---! Let's do our best together too!"
Ike came jumping when he realized the existence of Kushida.
His mouth said chatting, but in his mind he was thinking about branding the image of Kushida's swimsuit into his retina"
Kushida laughed and started chatting with Ike, not realizing in the slightest his perverted thoughts.
"That's right, what is he laughing about?"
"Eh?"
Horikita looked at Sudo, who was ridiculing Hondo.
"Ah ---No. there are various sorts and varieties. Men also have men's worries."
"I don't quite understand"
"Let's make an analogy. There are women that have complicated feelings about the size of their bust, right?"
She looked at me astonished as if she was saying "what are you talking about all of a sudden?". Being looked like this felt like a torture.
"In other words, men also have similar worries. Please try to empathize in the future."
If I were to put it in more concrete words, there's no doubt that this is sexual harassment. It was hard to say whether I would be beaten by Horikita.
"…so it's like that. So senseless "
"Your ability to grasp ideas is really good"
"After hearing your dirty words, although unwillingly, it was enough to imagine."
"If I was requested to explain that, I will just merely say the facts. Don't treat me like the bad guy."
"Hey, Ayanokouji-kun. Is Ike okay?
"He looks like he has stomachache."
Kushida looked worriedly at him in the distance.
Ike, being the target of the worry, was indeed pressing his stomach, but he didn't look like he was hurting.
In other words, that must be that he gazed too much at Kushida and now he was paying the price.
That guy will never learn, he was always living following his instincts.
Horikita looked at Ike with an unforgiving gaze full of contempt.
Ah –youth.
I thought this even though I did not do anything`,
            2: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Happy or Unhappy?</h1>
<p class="text-center text-sm text-gray-500 mb-12">Horikita Suzune SS — Volume 1</p>

That was something that happened in a certain ordinary day
That happened not long after I enrolled in this school and it could not be said that I was accustomed to the school life yet.
I'm always tense when I get suddenly talked by a classmate, and I'm unable to chat normally.
In short, for me who belongs to the bottom of the class students, it's already exhausting to be able to put a name to a face.
People with high communication skills like Hirata and Kushida have already started to talk to people from the other classes.
"What an annoying reality…"
We both entered this school under the same circumstances, and yet right now we are different as night and day.
Even though I understood everybody have different skills, but at the moment I am regretting it.
In this atmosphere, the resident of my neighboring table spends every day not paying attention to it.
She never arrives late nor has had any absence, has outstanding grades, listens earnestly during classes. She is even fast at entering and leaving the classroom.
However, nobody interacts with her. To put it plainly, she has no friends.
"You look very relaxed, it looks like not having worries is truly great."
"What are you saying all of a sudden?"
Horikita, who was preparing for the next class, looked at me annoyed.
"Nothing. I can't help but think about these things."
"I follow my standards in order to take my studies seriously, you know?"
"I was not saying those things…well, you didn't hear anything. I was wrong."
"Even though you admitting being wrong is a good thing, I feel that I can't accept it."
Horikita believes that she doesn't need friends from the bottom of her heart.
Even if I argued with her, I wouldn't have high odds of success, and there wouldn't be any gain.
"Well, let's study hard today too."
"I've never seen you studying hard once though."
I sighed after hearing her sarcastic remarks.

<p class="text-center text-xl font-bold my-8">1</p>

Next day. I woke up earlier than usual and I arrived 10 minutes before the class meeting began. There weren't many students and the classroom was basically empty.
"I've arrived earlier than Horikita."
After all, since it was this time, I thought she had already arrived to the classroom, but it looks like even the first-rate person is going to arrive late.
"Good morning everyone."
A moment later, Kushida, the class atmosphere mediator, entered the classroom.
The gloomy (I'm exaggerating) classroom suddenly became bright and cheerful.
Even if I only see Kushida in the morning, I still think she is very cute. I would probably feel the same if I saw her in the evening.
I didn't know what was Kushida thinking. When she turned into my direction, our eyes accidentally met.
Normally, I was supposed to greet her by waving my hand, but I subconsciously averted my eyes, typical from a good-for-nothing like me.
Today I was also running continuously at the bottom.
While I was staring blankly at the outside of the window, the class bells rang and the class meeting had started. Even at this time, I still hadn't seen Horikita.
I didn't know if Chabashira-sensei had realized or not that Horikita was not here. She didn't touch on this topic, finished the roll call and left the classroom.
"Is she late? So rare…"
I could only guess…
"Good morning Ayanokouji-kun!
"Waah!?
While I was staring blankly at Horikita's seat, Kushida stealthily appeared in my field of vision.
"Sorry, did I scare you?"
"…A little. Do you need something?"
"Yes. Actually, I'm concerned about something. Can I bother you a little bit?"
Don't say a little, you can take my time as you wish."
"Horikita-san hasn't come… to school, right?"
She looked at the seat beside me.
"It looks like it."
"Not even her bag could be seen there, she didn't come without a doubt."
"What do you want to say by asking this?"
She had some clue so she slowly nodded.
"You see, I saw Horikita-san leaving her room this morning."
"Eh?"
In other words, she certainly came to school this morning?
"It wasn't because she was undisposed that she didn't come?
"It doesn't look like it… thus I was a bit worried. Normally I would be the one to talk to Horikita-san, but I'm hated by her."
"She doesn't hate you, she simply hates human relationships."
I feel like she doesn't particularly hate Kushida. Probably.
If it's okay with you, can I ask you to contact with her?"
So, it's like this, that's why you talked to me.
"Even if you want me to contact her... I don't know Horikita's phone number."
"Eh, it's like that?"
"Yes, I'm very sorry. I guess the rest of people are in the same situation."
"What… what do we do then?"
"Isn't it okay by just leaving her alone?"
"but—"
Kushida is really a gentle person, she's even excessively worried about Horikita.
"I'll go look at her circumstances."
"You say circumstances… isn't the next class starting soon?"
"But doesn't this make people worried? Do you think Horikita would cut classes?"
"This is something… hard to imagine."
She gives the feeling of someone who would even come to class despite catching a cold.
"Although there's not much time left before the first lesson starts, if I run fast I should be able to get back on time."
Kushida, just like Horikita, is a model student that never arrives late nor is absent.
Even if she does this because she's worried about Horikita, it'll still leave a lateness record.
"Ah, wait a moment."
I lifted my heavy waist and slowly stood up.
I can't let Kusada be late, so I can only take a step forward. I'm definitely not pretending to be cool. Really.
"Ayanokouji-kun?"
"In short, I'll go look for Horikita's situation."
"Eh?"
"I can't let Kushida cut classes. And if I run, I am more likely to get back in time for the class. So I'll be right back."
"But, But, this is something I wanted to do on my own accord. I can't request you to do it."
"No problem, Since the lecture go in one ear and out the other anyways."
...Probably.
"I'm sorry… thank you"
"It's nothing. By the way, which is Horikita's room number?
If I had run panically right now, I would end up not knowing where her room is.
I need to ask this.
"Let me think, it's 1201."
Since I've been thanked by Kushida, then this might be something that will score points.
In her heart, my points have probably risen up.
There's approximately 8 minutes until the first class starts.
Running to the dorms needs 2 to 3 minutes, so there's a change to get back on time.

<p class="text-center text-xl font-bold my-8">2</p>

I immediately left the classroom and run like the wind through the corridor.
It looks like it might be a bit motivated.
Feeling slightly embarrassed, I ran through the empty courtyard and I arrived at the dorms entrance. Thanks to the students who were going to class, the 2 elevators were stopped in the first floor. I immediately entered the elevator to go to the 12th floor.
Since I couldn't help but feel anxious, I kept pressing the target floor's button.
"The upper floors are the girl's area…"
I arrived at the corridor of the 12th floor in an instant and looked for room number 1201. Just by thinking this was the place where the girls live, my heart started beating faster. Dangerous, this is not the moment to think about these things. If it's like what Kushida saw, then Horikita should be inside her room.
After arriving at the front of the room, I first caught my breath. Then I pushed the doorbell.
"..."
However, after waiting for a while, I did not hear a response from the room. Have you already left for the school?
No, there is only one path to school. If that was the case, we would've surely run into each other. And she didn't take the other elevator.
She's either not in her room, or perhaps she has collapsed inside.
In order to confirm the situation, I gripped the entrance doorknob.
"Should I knock the door again?"
Even though she's Horikita, she's undoubtedly a girl.
So I pushed the doorbell, then I knocked the door, and waited for a response from inside.
This time I waited a bit longer. But it was the same in the end. No reaction.
"Damn, there's no other way."
Having made a firm resolution about entering the door, I turned the doorknob.
Then the doorknob easily turned around, thus opening the door. Which meant the probability of Horikita being inside was very high.
"Hey Horikita, are you here?"
Since it's one room, by looking inside was enough to find out the situation.
Then--
"Eh…"
Horikita was inside.
She didn't collapse, nor was in pain.
She was in the process of changing her clothes.
She didn't suddenly scream because of the unexpected visitor, but calmly looked at me with a sharp glance.
"...What are you doing?"
She didn't feel ashamed, Horikita stopped her movements and asked me.
This could be considered one of Horikita's ways of being wavered.
Is it because her brain has not recognized that she has been seen naked, that she's not trying to hide?
I was slightly worried about how to respond to her question, being bewildered about where should I look at, while I stared at her soft and glossy skin. After all, I had no choice, right? A girl's naked body is hard to see.
Even if what I'm seeing is similar to what I saw during swimming classes, it's still totally different.
"This, In fact I was requested by Kushida. She wanted to have me look for Horikita's situation. You see, haven't you been persisting on not being late nor absent? Usually you go to school very early. Kushida said that she saw you this morning leaving the room, and yet you didn't arrive at the classroom, she wondered if you had a reason and wanted to come here to look for you. But since a girl coming here would take a lot of take, as a result, I stepped forward and arrived at here.
Not even I would believe that I was reciting my lines so well in order to justify myself.
Even if this was the truth, it wouldn't be acceptable to be linked to being seen while changing clothes.
"Only this?"
"...Only this."
This looks exactly like the final words of a death row prisoner.
I calmly prepared myself for the punishment I was going to happen next.
"I see…"
It looks like she has sort out the things inside her heart. She put on her skirt, buttoned her blouse and became the she that usually wears the school uniform.
"In other words, you came here to see my circumstances because you were worried?"
"That's right. Because it's unnatural that the superior Horikita would be late."
"It can't be helped. Something came up."
Horikita said this while finishing changing her clothes, and picked up her uniform that was on her bed.
"I was planning to go to school wearing these clothes, but some trouble happened."
"Trouble?"
Horikita unfolded her uniform and showed me the right side of the abdomen.
There were a few centimeters of scratch marks. Leaving a hole.
"You know that there's a bookshelf in the entrance? There were protruding nails that hooked my uniform. This is such an embarrassing topic."
That's why there was such a big cut. Sure enough, it was difficult to go to school in this situation.
So she hastily returned to her room and wore her spare uniform.
"Anyway, it's a good thing that you're okay. The time's almost up."
The time on the phone showed that it was not long before the first class started.
If we ran right now we should be barely in time.
I want to escape from Horikita's side… In order to not arrive late, I turned my body.
"Ayanokouji-kun."
I flusteredly wanted to to leave the room , but I was mercilessly called.
"M-may I ask what's the matter?"
"Can you look at me?"
"D-do I must look at you?"
"Even though I can choose to not look at me, but it will make you regret it even more, you know?"
"May I ask what do you need?"
Horrified, I turned around, but I was attacked by the approaching Horikita.
Followed by a knife hand that stabbed on my abdomen.
All the food I ate in the morning came out fiercely.
After I fell down on the spot, she stabbed on my neck with her knife hand.
"Wagu!"
I was knocked on the floor in this way.
"Whatever reason you had, have you prepared yourself to accept the punishment?"
"I-I've never thought things would become like this…!"
Even though I've prepared myself to accept the punishment, but her power is really frightening.
I can't believe this strike was done with that lavish body.
"The fact that I didn't call the police can be considered mercy. However, I wonder why I haven't cooled my temper merely with this."
"I've suffered fairly painful experience. If it's possible, I wish you could stop here…"
I requested horikita in order to not suffer any more attacks.
"...Ah…"
I shouldn't have lifted my head during the moment I was laying on the floor.
It wasn't my intention but I slightly glanced at the white colored existence under the skirt.
Together with what I saw earlier, it was another seducing feeling.
Why did I look when I knew perfectly well that I shouldn't look?
"Wait, this is--"
The back of my head suffered an acute pain. Immediately after that, I lost my consciousness a couple of seconds.
"What if I had died there!"
"No problem. I've been aiming my attacks so that doesn't happen."
She said something that I didn't know if they were apprehensive words.
"I'm really miserable…"
"Can you hurry up and leave my room? I'm troubled because I can't lock the door"
"I wish you could be a little bit more considerate with me…"
"Let me think… If you want to collapse, I ask you to go to the corridor."
"This is absolutely not being considerate!
I crawled to the corridor as if I was kicked out.
"See you then."
Even though this should be obvious, Horikita ignored me, who couldn't exert force to my legs, not being able to run.
I don't need to mention that I was late in the end.
Deep in my heart I sorrowfully determined that I would at least brand the image of Horikita wearing her underwear in my brain.

<img src="/assets/ss/y1v1_ss2_illustration.png" alt="Horikita Suzune" class="mx-auto my-8 rounded-lg shadow-lg max-w-md" />`,
            3: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">A Dream for the Future?</h1>
<p class="text-center text-sm text-gray-500 mb-12">Horikita Suzune SS — Volume 1</p>

"Hey, do you sometimes feel that you are indifferent to no matter what the world becomes?"
"Why are you suddenly asking this? Too bad, I've never been pessimistic about my own life."
"I'm not saying about being pessimistic about one's life… it looks like this has nothing to do with Horikita."
Horikita blatantly adopted a disgusted, or probably an annoyed look, and sighed deeply.
"So, what are you trying to say?"
"I was thinking, what's the meaning of people trying so hard in a meritocracy world?"
"Of course that's for oneself, are you stupid?"
"Going as far as to call me stupid… so specifically, what's this "for oneself" referring to?"
"Isn't this precisely promoting one's inner qualities, and going for jobs that possess a high status in the society?"
Horikita answered this as if it were natural. Of course, it's not like I can't understand her.
The main reason about studying high school, university, or graduate school is to find a better job in the future.
Of course, the dreams one hasn't stopped pursuing since childhood are also included among these. However, those are a small minority, and perhaps there are also ambitious goals that can't be achieved by just trying hard.
"Then Horikita, what do you want to be in the future?"
"I haven't decided it yet, because I am hiding an infinite variety of possibilities."
I don't think there are anyone who can flatter themselves as impressively as her.
Not letting anyone think that was just a speech to conceal the fact she hasn't considered it yet, perhaps it could also be considered one of her strong points.
"What do you want to do in the future… I'm certain that you have not though about it."
"Don't assert for me. Maybe I unexpectedly have a specific goal?"
"…You're right. Although the odds are quite low, I'll ask you for the time being. What do you plan to do in the future? Do you have a planning?"
"I want to become the Prime Minister."
"… I was stupid for asking you."
Horikita made a pose as if she was supporting her forehead, and turned her body around.
"Hey, listen to me. I was joking about becoming the Prime Minister. What I want to become is that, something like a civil servant."
"For someone who wants to avoid troublesome things like you, this is a stable path… but can you become one?"
With this statement, she was clearly lamenting about my lack of ability.
"This civil servant thing, it's something that you can accidentally become one if you want to become one."
"Someone who thinks like this will certainly not be able to become one. I advise you to be a convenience store clerk the rest of your life."
"You are being rude towards all the shop clerks who work at the convenience stores around the country."
"Of course, I will respect those workers who have conviction. It's simply that I think you are self-degenerating yourself. You'll probably become a lazy salesclerk. I believe this is beyond redemption."
"Suddenly I feel like I want to cry."
"If you really have a goal you want to pursue, then you need to take advantage of the time when you are still a student to fully stride forward. Because even if you regret it later, you can't reverse time. Finally, what will appear in front of your eyes will be the unchangeable reality."
"…I will remember that."
Even though we are clearly at the same age, I can't help but to think that I'm being admonished by a teacher.`,
            4: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Honami Ichinose's Everyday</h1>
<p class="text-center text-sm text-gray-500 mb-12">Ichinose Honami SS — Volume 1</p>

"The teacher sure is late"
After the bell has rang, the teacher still hasn't arrived.
Although our teacher often arrived late, she had never been so late like today.
"Could it be that she is sick?"
"If that were the case, shouldn't a substitute teacher come here?"
While all sorts of speculations were being blurted out, the classroom door opened.
"Good morning everyone. Are you in high spirits today too? Fuwa…"
The class meeting in the morning had already started several minutes ago when the teacher arrived at the classroom yawning.
"You look very sleepy, Hoshinomiya-sensei."
"Yeah, I had some things. Yesterday I drank too much…hafu"
"Uwa, you stink of alcohol! You stink of alcohol, teacher!"
Chihiro-chan, who was sitting at the front, lamented while pinching her nose.
"It's nothing, it's nothing. I will probably not smell at noon."
I feel like that's not the issue here… she is a bit of a unpresentable teacher.
However, maybe it was precisely because of this kind of teacher that Class B had this easy-going atmosphere.
"Ah, it's already this time. Today's flow of time has started really early."
I believe that's because you were late. I'm certain that the majority of the students in the class were thinking this.
"I will announce the results of the mock exam done some time ago. After that, I will explain in detail the things that will happen in the future, so listen carefully."
Hoshinomiya-sensei, while relaxing the atmosphere, stuck the results of the mock exam on the blackboard.
Everyone's test scores were there.
In the margin of the passing score, if someone failed the tests during the mid-term exams, they would be expelled immediately.
The results of the tests could also influence the class points and so on.
She explained this unique school system. After the explanation finished, probably due to the influence of the hangover, the teacher said "'I'm feeling nausea" and left.
After waiting for a while, she came back. She had a refreshing look.
"Teacher. Can I ask you some questions?"
I decided to ask her the questions I thought about while she wasn't here.
"Of course, of course. What is it, Ichinose-san?"
"I understand that this school is based on meritocracy, so I also understand that the tests will influence the evaluation of the class later. As a result, I want to ask the results of the other classes. At first I thought we couldn't ask for individual scores, but in reality Class B scores were made public. If it's like that, in order to compete in what it looks like a cram school system to be promoted in this school, they should all be made public."
"You really have good eyes… but unfortunately, Ichinose-san, you got it wrong. Of course, the scores from the other classes are also made public. Not the individual scores, but the average scores.
As she said this, Hoshinomiya-sensei smiled a bit and posted another small piece of paper.
Apart from our Class B, all the average scores from the classes where on it.
"Don't tell me, you can tell me that if it's not heard by other people?"
"Yes. Because there's no rule that states I must tell you this. If you ask me and I can answer, I will tell you, is this kind of feeling."
The way she answered expressionlessly indicated that was very common.
It seems that this school was more complex than what I thought, and I can't say for sure if it was more troublesome.
Not revealing the guidelines of the competition, not telling anything but the necessary and bare minimum information.
It looks like one has to personally get out the answers, asking one by one.
"But, but, we are a very strong class. Even though it's Class B."
The class atmosphere reader, Shibata-kun, said this while comparing the average scores.
Indeed, if we just looked at the results of the mock exam, the average of this class did no vary much from Class A.
The gap was only 2 points approximately. Considering that it was a surprise test, basically there shouldn't be more differences in the disparity between academic skills.
If in order to prepare for the mid-term exams, we considered a good countermeasure, we could probably overtake their score.
After the teacher left the class, the students, who harbored their own ideas, started discussing various topics.
"Returning to our main topic. The other classes below us are really idiots. Class D points have become 0 and their average scores for this mock exam are also very low."
Part of the students expressed agreement to Shibata-kun's opinion.
Only relying on the school's notice, we can't understand too much.
But I believe this idea of mine shouldn't be said right now.
However, the classmates who were looking at the very high average score started to make noise.
"Indeed, maybe right now we can only judge like this. But is it only this and nothing more?"
Having the consciousness to cause a ripple, I threw into it the first stone.
"Ah? Ichinose, what's that?"
"If the class division was really based on academic skills, wouldn't the chances for reversal for the lower classes be non-existent? Even if it all comes down to personal effort, they also have to shoulder a lot of unfavorable circumstances. If all the outstanding people were gathered in Class A, then it basically means we have no chance for reversal. Although there's no need to be pessimistic, it's also not good to be relieved by this result.
"I also have the same feeling. There is a clear difference between Class D and A. However, I don't think it's based solely on academic skills. Actually, Ichinose was first in the entrance exams. If they used grades to determine the classes, she would be undoubtedly in Class A."
"I see… indeed."
"If I am in class B because I have some shortcomings or committed mistakes, then there has to be a lot of students with scores as high as mine that are Class D or C because they have problems too."
In other words, if the academic skills are not what determines the class distribution, but competitiveness, based on the exam results it wouldn't be strange for the lower classes to make a comeback. As long as they have outstanding talents, the students that right now are unable to study, based on the teaching methods, it could also be extended to them.
Although this long battle lasts for 3 years, since currently we still don't know how to increase the class points, we should use this chance and start controlling a bit and try our best at spending less points.
"At present, I don't think there are in this class people who would be expelled due to failing the exams. I believe everybody should study together for the mid-term exams and have as objective the increase in our average score. What do you think?
"I agree! We are also a bit worried… Ichinose-san, can you teach us?"
"Of course."
After answering this, the participants assembled together one after another.
"Wawa. A lot more people than what I expected. Wait a moment."
I counted 15 people. If I am alone, I would really have my hands full…
While thinking about who to request help, I used my gaze to send out a signal requesting help.
"I will assist you."
The one who answered my signal was Kanzaki-kun, with who I haven't had much contact with until now.
"Kanzaki-kun, is that okay?"
"Haha. As someone who has Class A as objective, I need to help with what I can do best."
Being habitually silent, he actually gives a healthy impression, and he is usually alone, calm and well-behaved.
In front of the request of Kanzaki-kun, I accepted it straightforwardly.
Looking at the mock exam scores that were announced, from the fact that he and I have obtained similar scores It can clearly be seen that his academic skills are high. There's nothing to nitpick at him being a tutor.
"Thank you. I appreciate it."
"Thank you. Please take care of me."
After that, we gathered again in order to go to the library.
Even with the cooperation of Kanzaki-kun, 15 people were still too much, first we needed to split the participants into 2 study groups, one at noon and the other after school. The noon participants were 7 people.
Avoiding failing grades are a given, our objective was to overthrow Class A. Our ambitious goal was a bit high.
"Ichinose-san, you had the best grades during the entrance exams, right? And you are very earnest, you are also good at taking care of people… why are you in Class B? I can't imagine the reason."
"Why? I've never thought over those things.
"Don't tell me the school has made a mistake?"
"I don't think the school would make these kind of mistakes. Moreover, right now I like everybody in Class B. Compared with being in Class A, I prefer being in this class more."
Those were my heartfelt words. Meeting by chance and has only passed a couple of months, as far as I'm concerned, everybody in Class B are already my important friends and comrades. I don't want to consider things like being the only one in Class A.
"Ichinose-san… I like you the most!"
Extending her arms, Chihiro-chan hugged me. Treating her like a little sister, I accidentally patted her head. Chihiro-chan didn't look like she hated it, as she closed her eyes looking very comfortable.
"It's great that I am in Class B!"
"Me too me too!"
Mako-chan wanted to hug Chihiro-chan and me so she threw herself at us.
"Let's try to throw ourselves at them too."
"Don't do stupid things. The air in the atmosphere would freeze in an instant."
To the Shibata-kun who wanted to join the circle of girls, Kanzaki-kun grabbed his neck and suppressed him.
"There are really a lot of people…"
The library was more mixed than expected, just by one look one could see many groups studying hard. Judging from the fact that there were not only first years, the exams really had an important existence.
We ensured our seats in an empty space and started reviewing what the teacher taught us. Since they were students with a good foundation, there weren't any problems.
Studying quietly, answering questions from time to time. Suddenly the surroundings started an uproar. It looks like other groups that were far away from us, started a conflict.
I thought it would rapidly quiet down, but I didn't expect the uproar would become louder and louder.
Even though I didn't know what happened, couldn't someone think of a solution?
"Ichinose-san, let's study in another place. I can't concentrate because the guys over there are being too noisy."
At first I wanted to be a bit lenient, but the other students seemed to have reached their limits.
"It's really a big problem."
The concentration from a moment ago seemed as if it was a lie, everybody showed an exhausted expression.
"I'll go to call their attention a bit."
I stood up and prepared to go towards the guys who were arguing.
"W-w-w-wait a minute. It's very dangerous, Ichinose-san. The ones there are Sudo-kun and Yamawaki-kun?"
Although I didn't know Yamawaki-kun, I recall Sudo-kun's name.
I didn't know from where the rumors were spread, but he seemed to have an extremely violent personality.
"I'll go there instead of you."
"It's nothing Kanzaki-kun. Let me handle this."
If Kanzaki-kun went there to mediate, there was a probability that the situation would worsen.
The boys have a high ego, if they were provoked, things would become troublesome.
"Ok, stop, stop!"
I forcibly went in between the two parties in dispute.

<img src="/assets/ss/y1v1_ss4_illustration.png" alt="Ichinose mediating between Sudo and others" class="mx-auto my-8 rounded-lg shadow-lg max-w-md" />

"Who are you? You are unrelated, get lost."
The boy who seemed to want to grab someone looked here with a sharp glare.
Because he was irritated that he had a tense mood and his face was a bit red. This guy was probably Sudo-kun.
As expected from someone with rumors with his name, such a strong pressure, but I couldn't act according to his words.
"Unrelated? Being one of the students using this library, I can't just pretend I haven't seen this disturbance. If you really want to start a fight, can you do it outside?"
A lot of students were troubled because they couldn't concentrate. Other people aside, I also have a lot of friends. I can't pretend that I haven't seen this.
"And you guys too, haven't you provoked him a bit too much? If you want to continue with this, I will have to report this to the school. Even if it's like this, would it be okay for you?"
I warned Yamawaki-kun and the others subjected to Sudo-kun's pressure, and they became silent.
By bringing out the fact that this could influence their points, they would also retreat obediently.
"I-I'm sorry. We don't plan to do that, Ichinose."
Yamawaki-kun seemed to know me and apologized. Being straightforward is really great.
"Let's go. If we keep studying in a place like this, we will get infected by their stupidity."
"Y-yes."
They seemed to hate others thinking they were retreating, so they left behind that last sentence.
It's definitely because of that sort of stuff that the quarrel never ends.
All in all, now Sudo-kun's opponent was not here, so it was settled for the time being.
Even if they still wanted to get angry, I would have to report it to the school, even though I hate doing that.
"If you guys also want to keep studying here, keep it quiet."
I believed they wouldn't do anything over the top, so I only told them that.
Sudo-kun was probably angry, but his friends looked very calm. I'm sure it would be all right.
When I was leaving, a boy appeared in my field of vision for an instant.
Back then I remember I seeing him in front of the staff room …
While thinking that, I went back to my seat. Chihiro-chan's eyes were shining.
"As expected of Ichinose-san. So brave!"
"Really? It was just a very ordinary warning, wasn't it?"
"It was because Yamawaki-kun ran with the tail between his legs once he realized it was Ichinose-san".
"Why is that?"
I have never meet Yamawaki-kun once.
"You see, last time when Class C had a dispute with us, Ichinose-san settled it, right? I'm certain it was because of that. Class C boys are really afraid of you."
"Making Ichinose angry is a very frightening thing."
"Wu, s-so it was like that…"
So I've made the boys afraid of me… as a girl that was like suffering a heavy blow.
Unfortunately, I couldn't get rid of this thing from my head, which led to me being unable to study properly during the entire lunch break.`,
            5: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Two People with a Bad Relationship</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kiyotaka Ayanokōji SS — Volume 1</p>

That happened on a certain day. The upcoming lunch break caused Class D to sink into a chaotic state.
What started it was Ike yelling "I don't have points~".
As a result of having used up the important personal points, everyone was in a shortage of points. Even the anxiety over next day's breakfast continued.
Of course, if one didn't want to have an extravagant lifestyle, there were also free meals to choose from.
But there were things in this world that you didn't want to eat even if they were free.
Especially for those who were used to eating junk food, a healthy meal with potherbs as main dish was insufficient and not delicious enough, and they were very easy to get tired of.
Hirata, who couldn't bear to watch this situation anymore, together with the healing female heroine Kushida Kikyo, implemented a certain plan in the classroom in the weekend.
It was called "bring your bento day".
It meant literally those words, everybody had to prepare their own bento.
I guess the reason was saving food expenses while also being able to interact with the class.
"Did everybody bring their own bento~?"
When the lunch break arrived, Kushida tried to confirm that.
"I brought it! Let's hurry and eat it together, ~Kushida-chan!!"
The high spirited Ike was bouncing vivaciously. He wasn't one of those characters who would usually prepare their bento, but he looked like he woke up early and prepared it in order to get closer to Kushida.
This bring your bento day was not compulsory. After all, they couldn't make everybody participate in it unwillingly, and there were also students who still held great amounts of points. The participants didn't make up half of the class.
"So you have also brought your bento."
Horikita Suzune, who sat beside me, silently took out a small bento box.
"I didn't do it because of this farce…this activity."
Because I saw her bringing bento regularly every day, this was like usual for her.
"Then everybody, let's go to the courtyard."
Hirata and the others took along the participants and left the classroom.
On the other hand, Horikita didn't show that she wanted to chase after them, it looked like she wanted to eat the bento inside the classroom.
"Horikita-san, don't you want to eat together?"
Kushida, who saw this situation, stood in front of her and used her cute hand to prevent Horikita from starting to eat.
"What?"
"Since Horikita-san also made a bento, let's go eat it together."
"Allow me to refuse. I'm not interested."
"Eating with everybody will make it taste better."
"The taste won't change according to the number of people. Now that you know that, can you pull back your hand?"
Horikita didn't plan to listen to Kushida's words and rejected her.
After all, this person never thought about eating bento together with her classmates.
Seeing Kushida being a bit lonely, I decided to lend a helping hand.
Of course, even though I didn't know whether I could succeed or not, I didn't do a frontal attack. After all, even if I did a frontal attack and requested Horikita, she wouldn't agree either.
"Kushida, you also brought your bento?"
"Yes. I put a bit of effort and enthusiasm to do it."
"Although I've not seen Kushida's bento, but compared to Horikita, Kushida is better at cooking."
"Hey~ that's not true. After all, Horikita looks like she is very skilled."
"I don't think she's clumsy, but Kushida seems to be better."
We echoed one another with Horikita in the middle.
"I've not said anything since the very beginning, but an insignificant neighbor sure is acting high-and-mighty."
She glared at me with a sharp gaze. It looked like it somewhat got its results.
"Then are you implying you are better at cooking?"
"I definitely wouldn't know about that. After all, I've never competed with anyone. But it was unexpected since because of that I was considered inferior to her."
"Then why don't you try to prove it? And Kushida also brought a bento."
Normally Kushida didn't particularly bring a bento. So there weren't many opportunities.
"What a boring and obvious provocation."
However, as if she was speechless, Horikita sighed and lowered her head.
…It didn't work?
"But, I can. I can prove it once so you can see it. Only that, can we agree that you will stop bothering me after that?"
She obviously knew it was a provocation and yet she deliberately accepted.
It looks like she didn't want to lose without fighting. Her competitiveness kicked in.
She stopped her wand from opening the bento box, grabbed it and stood up.
My eyes met with Kushida's for an instant, as if we were transmitting the message "it's going smoothly".
Being later than Hirata and the others, we three went together towards the courtyard.
Apart from Class D students, there were a lot of other students congregated there.
"So many people here."
All the benches had people sitting on it, there were no empty seats.
"It's a pity. Since there are no empty spaces, then it can't be helped. Let's compete next time."
"Do you want to run away?"
"If there are no empty spaces, then it can't be helped right? Time is limited and I don't have the time to wait for a seat to become vacant."
As if it was mocking Horikita's words, a bench was vacated.
"...You obviously didn't need to be in such a hurry."
Was it because she was careless that she said what she was thinking? Horikita looked very dissatisfied.
Kushida sat on the bench.
I though Horikita, after seeing Kushida doing that, would sit beside her, but in the end she sat with her back facing Kushida. It must be because she didn't want others to think she got intimate with Kushida.
"Then I'll be going to the dining hall."
There was no problem in following both of them to this place, but unfortunately, I didn't bring a bento.
After all, it would be useless to stay here.
"Wait a moment. If you are not here, who's going to judge?"
"Judge… did you really plan to decide who's better?"
"It was you who proposed that. I just wanted to prove I'm not inferior to her at cooking."
She implied "That's why I came to the courtyard". She was really tough.
"Then hurry up and eat."
On the other hand, Kushida looked very satisfied because she managed to get Horikita to come to the courtyard successfully. She hummed a song while she took out her bento box. That box was so small I couldn't help but wonder if that was enough for a person to eat.
Horikita took out a triangular shaped envelope from her bento.
"Wow, that's awesome, Horikita-san is really formal! It looks like those that are sold in stores!"
It was a sandwich. Originally it should've been wrapped with a plastic film as the envelope, but Horikita used a sandwich shaped packaging with a zipper.
"That wasn't bought from a store, was it?"
"Look closely. It's not something you can buy."
She glared at me with a slightly dissatisfied expression. Of course, I was also aware of how the bento bought in the stores looked like. It was only that she managed to make it look so good that was inevitable for anyone to think like that.
On the other side, how about Kushida? It looks like Horikita was also curious and tried to peek Kushida's.
"It's not like I did it to show other people, so I find it a bit embarrassing."
It seemed that she cared about our gazes, Kushida was hesitating a bit.
"It's okay if you want to admit defeat like this. After all, forfeiting is also a very good reason."
"Uuh~ Then I'll do my best and take it out and show it to you. Please see."
Kushida, being a bit humble, opened the small lid.

<img src="/assets/ss/y1v1_ss5_illustration.png" alt="Horikita and Kushida comparing bentos" class="mx-auto my-8 rounded-lg shadow-lg max-w-md" />

What it could be seen was a delicate and perfect looking bento. It could be considered the standard sausages and fried eggs, and with a bit of vegetables.
If one could make her bring this bento, then one would be looking forward to every day's lunch break.
"It would be better if I could put a bit of extra effort in it."
Even if she said that, considering the dormitory utensils and coupled with the current point shortage situation, this was the highest quality bento.
Especially the cooking skill that was reflected from the heat control shown by the fried egg could be considered the cream of the crop.
"Then, em, examiner Ayanokouji-kun. Please."
She handed her bento box to me. If this scene was seen by Ike, I would definitely be assassinated by him.
Only that she handing her bento like this, what should I eat?
"What do you want to eat?"
In this situation, I really need to choose the fried egg, the thing that shows the cooking skills the best. Kushida handed to me a cute pair of chopsticks. I used them to pick a piece and sent it to my mouth.
"How, does it taste…?"
Using granulated sugar instead of salt as seasoning also deserved praise. It was really delicious.
But I still couldn't let the evaluation be reflected in my expression.
"I more or less have grasped Kushida's ability."
I grabbed a piece of sandwich already ready to be ingested and put it in my mouth.
"…I see."
After eating the sandwich, I closed my eyes.
"How about it, Ayanokouji-kun?"
"Which one is better? Be honest."
"But, that thing. Can I say my honest impressions?"
Of course, both of them nodded. So I replied honestly.
"Your styles and the ingredients you both used are by itself different, it's impossible to compare. If there was one that tasted better or worse, then I could've determined which one was superior, but both of yours were first-class."
So far, I could only say both of them were delicious.
"Excuses… even though I wanted to say that, but it may really be that case."
If they couldn't accept this verdict, then it would be like asking which tasted better, Japanese food or western food.
"It's a pity, Kushida-san, it seems that both parts have lost their fighting spirit."
"Even though I didn't plan to lose to you, ok, let's say it was a draw."
Kushida showed an expression of thinking "it's okay like this", and put her mind at rest.
If I rashly decided the victor here, and also I determined Kushida's victory, Horikita would hate Kushida even more. As a result, it would be impossible for them to become friends.
But then again, although the two of them had opposite personalities, there was no need to doubt about their cooking skills.
Kushida is certainly someone very popular, if Horikita were to have a better attitude, she would also attract interest from the opposite sex.
"That said, Kushida-san. Didn't you have something you wanted to tell me?"
"Eh? By that what are you referring to?"
"If you didn't, then it's okay. I just wanted to confirm that."
However, I wasn't slow to the point of not understanding her words.
Although this Kushida girl was liked by everybody and she also liked them back at the same time. But her attitude towards Horikita was different.
Even though I didn't know the reason, she had a reason to hate Horikita.
I was really curious about the reason why she kept restraining herself and wanting to keep having contact with Horikita.
But after Kushida showed me a smile, she replied with her usual tone.
"There's nothing at all. It's because I just want to have a peaceful relation with Horikita."
Such an ambiguous response.
It looks like Horikita also understood the topic wouldn't make any progress, so she didn't question any further.
The wind blew towards us.
"Ah, it's cherry blossom…"
When they heard my words, the two people turned their heads.
The cherry blossom petals were dancing in the air.
"It's really elegant."
Horikita, who had been maintaining an expressionless face, showed a smile after seeing the cherry blossom.
"It was not in vain of coming purposely to the courtyard."
Maybe I'm the first person who managed to see these two people smiling at the same time.
It would be great if one day these two could shake hands and be in a relationship where they could show a real smile to each other at the same time.
While thinking about this, I also imagined about the school life in the future.

<p class="text-center text-sm text-gray-500 mt-12 italic border-t border-gray-700 pt-4">Note: This short story takes place in Volume 1 or 2, after Kushida reveals to them that she hates Horikita.</p>`
        }
    },
    {
        id: "ss-y1-v2",
        volumeNumber: "SS",
        title: "Short Stories: Volume 2",
        releaseDateJP: "Sep 25, 2015",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Horikita Suzune : Horikita Suzune's Prediction",
            "Airi Sakura : My Own Place",
            "Kiyotaka Ayanokōji : Common Delusion",
            "Special Art Works : Ah, one page of youth"
        ],
        characters: ["Suzune Horikita", "Airi Sakura", "Kiyotaka Ayanokōji"],
        coverImage: "/assets/y1v2.jpg",
        customChapters: {
            1: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Horikita Suzune's Prediction</h1>
<p class="text-center text-sm text-gray-500 mb-12">Suzune Horikita SS — Volume 2</p>

The sound of a bird's chirp from my phone slowly reached my ears.
It was time to wake up. I looked at the clock that was hanged on the wall while I was getting out of bed. I woke up as usual. The habit that the body had developed can't be forgotten. This habit hasn't changed since I entered this school.
With the exception of some special circumstances that made me go to bed late, I have always woken up at 6am.
After that, I slightly arranged my appearance and started preparing breakfast.
Although I don't have much appetite, I've been eating three meals a day, as a result I've a balanced nutrition, to the extent of living a life of having a good diet.
After that, I left the room at 8 o'clock to go to school.
The sequence of actions up to this point has not changed since elementary school.
--Originally, it should've been like this.
The former me went to school alone, studied alone, ate lunch alone, returned home alone.
This is me –Horikita Suzune's life, and at the same time, my nature.
The pitiful gazes that comes from the surroundings considering me as a solitary person are just meddlesome.
No, even an explanation such as meddlesome is wrong.
I can accomplish whatever I do.
Be it studies or sports, I have the confidence that I'm superior than my peers.
And more importantly, it's impossible for me to trust other people.
At first, everybody displayed a good attitude in order to approach me, but they would immediately leave. So I naturally distanced myself from other people. As a result, I never perceived loneliness nor inconvenience.
That's why this situation will inevitably continue. But recently, this has started to change.
Inside me, the tempo of my life has started to change quietly.
I feel that the time I spend being alone has been reducing.
I know what's causing this.
It's because of the resident of my neighboring seat in the classroom.
I casted a glance at Ayanokouji Kiyotaka-kun's seat, who has not arrived at school yet.
I don't know why, but no matter what attitude I adopt towards him, his attitude has never changed.
When we meet for the first time, it couldn't be said that I gave him a good impression. I thought I would be quickly ignored.
When I came back to reality, I realized that the time where I talk to him has increased.
Why is that?
Why?
These questions rush to my mind in quick succession, I'm unable to understand this.
I've never considered Ayanokouji-kun as a friend, never.
Although I don't know what he thinks, I only consider him as a person who sits beside me in the classroom by chance.
However, there is no doubt, my heart has some other ideas.
He has come to the classroom.
He looks like usual, slowly going to his seat while lacking enthusiasm.
During that moment, my classmate Kushida-san talked to Ayanokouji-kun.
"Thank you for the previous Sunday. You've really helped me."
She was talking while having a big smile in her face and waving her hands. These are acrobatics I'm not able to do.
"Let's go play again in the future."
"Oh, oh"
Being treated familiarly, he answered her while looking as if he was thinking that wasn't bad.
In other words, these two went somewhere on Sunday, didn't they?
…Nothing to do with me.
What people do in rest day in whatever place have no impact on my life.
Ayanokouji-kun greeted me with a stiff manner, different to how he treated Kushida-san.
I also used an equally degree of stiff tone to reply him.
And the conversation is over.
"Were you together with Kushida-san during the rest day?
I originally intended to end the conversation a moment ago, but I unconsciously let those words out of my mouth.
It looks like he treated those words as the everyday conversation and didn't look at me.
"She asked for my help because of Sakura. Then I had no choice."
He really treats Kushida-san with a different attitude. Is this due to the difference in the intimacy degree?
"I see."
I couldn't help but answer coldly, as if he was a stranger.
"Is there any pro..blem..."
Did he look at me because he felt my question was unexpected?
After that he looked as if he was startled and he pulled back while shrinking his body.
"W-what happened to you?"
"What do you mean?"
I totally don't understand why he would act like that.
There were no other strange things nearby.
"Ah, you have a very frightening expression"
A very frightening expression? Did I put on that kind of expression?

<img src="/assets/ss/y1v2_ss1_illustration.png" alt="Horikita Suzune" class="mx-auto my-8 rounded-lg shadow-lg max-w-md" />

In addition, nothing happened before that could make my expression change.
But if I have to say it no matter what, it was just that I was a bit dissatisfied at Ayanokouji-kun's treats people differently. That's wrong, there's something more. He's someone who avoids troublesome things, he should dislike those things.
And yet he was called out by Kushida-san during rest days and he even accompanied her proactively. This really puts people in a bad mood.
Even though there shouldn't be big variations of the time spent in conversations, why is that?
"Really? I didn't plan to do that, it's like usual. I was only lamenting that you have become someone who does as one pleases. When I asked you for help I even had an embarrassed face, but when Kushida requests for your help, you easily agreed. I am just calmly analyzing where could the difference be."
Why did I speak so fast? Not even I could believe myself.
These words simply sounded like someone trying to divulge that they were gloomy.
Why is that? It slightly looked as if I couldn't handle my unfathomable heart.
Kushida-san was looking this me far away.
After that, she approached as if she realized something and called Ayanokouji-kun out to the corridor.
I didn't know why my eyes followed these two.
"…don't tell me, I'm treating Ayanokouji-kun as a friend?"
I said that in a low voice, as if to let myself confirm that.
This can't be, right?
There shouldn't be any factor for me to treat him as a friend.
I'm no trying to boast, but I don't even understand clearly what a friend is.
In other words, it's impossible that I can make friends since I can't comprehend this concept.
Perhaps I'm just in a bad mood because of that attitude of his.
Because he is always unmotivated, he's not really the type of person I like.
It has to be this.
By distorting that only answer, my heart could relax a little bit.
I don't need friends.
--The me of that time really though like that.`,
            2: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">My Own Place</h1>
<p class="text-center text-sm text-gray-500 mb-12">Airi Sakura SS — Volume 2</p>

Chabashira-sensei, Class D's homeroom teacher, concluded the class meeting and declared the end of the classes.
Glancing at the students who were talking about how to spend the time after school, I quietly walked out of the classroom.
Whether it's attending school or during weekends, my job always starts at 4 o'clock.
Grabbing my partner with one hand –my digital camera, I prepared to start taking photos and after that, uploading them to my homepage.
This is my daily assignment.
"How should I take the photos today?"
I have to avoid repeating compositions while I update my selfies to the homepage every day, but I can't leave the school grounds, so it's very difficult.
Even so, Koudou Ikusei Advanced High School's campus environments are really abundant.
In the campus there are a shopping center and a cinema, in the gym there is a swimming pool, there are sufficient facilities, so choosing a different place isn't challenging.
…this should've been the case, but I could be seen in those places.
Because in order to avoid those situations, I've kept taking pictures repeating the same places with nobody around.
Behind the teaching block, inside the gym, or the shopping center after the business hours.
But I can't say that there's no problem as long as there are no people.
In places where there are no people, there would be a fairly unique lonely atmosphere.
By taking a picture in a deserted shopping center, it can't be helped that it would give a quiet and lonely feeling.
Since it's rare that I upload photos, I really want it to be those types of pictures that can make people feel happy after seeing them.
Or those that can cure their souls. Even if it sounds extraordinary, those are my thoughts.
"No... I might need to try harder"
Although today was the first time coming to the school's periphery, the landscape was a bit lacking.
Even though it was a good thing that there were no people, it was more boring than what I predicted, it lacked charm.
After that, I discovered a small building like an assembled house.
Since I had a lot of time, I went around the building by following the wall in order to examine the place.
Small and comfortable, built very exquisitely and pleasing to the eye.
There was a warning stuck at the entrance that said "Not allowed to use yet"
I tried to peek through the small window.
Inside, there were those tables used in meetings, folded chairs and a shelf, but I didn't know its use.
Will they use this place to conduct discussions?
I felt as if I was doing a bad thing by peekinginside without permission, so my heart couldn't help but beat faster.
I whispered "I'm very sorry" and I left the building behind.
Even though the landscapes were somewhat lacking, but with the pass of the time, my evaluation also changed.
Especially due to the mysterious atmosphere brought by the sunset, the same place could also feel like a different place.
Hm… it might be difficult doing it here.
Taking a selfie near an assembled house under the light of the sunset. Just by thinking about it feels creepy.
I had no choice but to give up taking pictures, so on the way to the dorms I tried to conduct another search.
When I returned to my room, it was almost 6 pm.
I had taken some pictures, but none of them were satisfactory.
As soon as I returned to my room, I took off my school uniform and I took out my clothes from the wardrobe.
As a last resort when I can't manage to take a satisfying photo.
"Maybe recently my chest has gotten bigger…"
Looking at myself wearing only wearing underwear reflected through the mirror, I couldn't help but feel depressed and sigh. For someone like me who wasn't accustomed to attracting attention, I really hated having an ample chest.
No matter what I'm always conscious about the gazes casted towards me by the boys.Today a guy stared at me with a strange look.
"Ah…"
I can't, I can't. If I think about these things it will affect the pictures.
I told myself "smile, smile", and I revealed a smile.
"Yes. It's okay like this."
After I had regained a bit of self-confidence, I put on my own clothes once again.
Then I used the delay timer mode to shot photos while I made some poses.
No matter when, I always had a lively and cheerful expression, only the seriousness in my eyes would not disappear.
"Even though it was impossible for me to take photos of myself in the past…"

<img src="/assets/ss/y1v2_ss2_illustration.png" alt="Airi Sakura" class="mx-auto my-8 rounded-lg shadow-lg max-w-md" />

Back then I couldn't even see my own smile, let alone taking a picture for others to see.
But now, it feels extremely exciting being immersed in this kind of thing.
I feel really happy when I take photos.
After experiencing this, I realized people's interests really differ a lot.
Having battled for around 30 minutes and having taken the last photo, I turned on the computer to confirm them. Even if I wasn't good at performing these tasks, I still tried hard to learn to do it.
But it was only to the degree of saving and duplicating and adding some decorations.
Even so, the impression will also change all of a sudden by doing that.
"This is fine."
I decided the best photo and I uploaded it directly.
As long as it makes one fan happy, I will be satisfied. Even if there are 100 criticisms, 1 praise is enough to cover them all.
"What should I write down…?
Although uploading a photo was done very fast, updating the contents of the homepage was very time-consuming.
I don't have friends and I don't have anyone to hold a conversation. Being afraid of having eye-contact with others while talking to them, I always lower my head. That's why I was unable to write anything interesting.
But I can't just write a gloomy essay, nor false things. So difficult.
That's why I… will write my own prospect.
I hope tomorrow will be a happy and peaceful day for everybody.
I hope everybody can spend the day with a smile.
I wrote this wish.`,
            3: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Common Delusion</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kiyotaka Ayanokōji SS — Volume 2</p>

Before 9 pm. I stood up from the computer after checking the weather for tomorrow.
Something rarely seen happened, Ike phoned me. A rarely seen situation from someone wouldn't call me once in a month.
"Hey, Ayanokouji, have you woken up?
Those who are sleeping at this time can only be students that has spent the whole night preparing for an exam and the busy staff workers.
"Actually, I'm worrying about what should I have for dessert tonight."
"Don't call me for these things... haven't you had dinner yet?"
I remembered that the dining hall of the dorm closes at 9pm. The remaining options would be only the convenience store.
"Idiot, it's not that, it's the dessert all men desire. Do you understand me?"
The dessert all men desire? …
Is there something that tastes differently because of being of a different gender?
Unfortunately, I've never heard of it.
"Ayanokouji. You are being a more and more boring man."
I was hurt since it was a friend who said this without consideration. Although I know I'm boring, but being said this directly in the face I will still take it to the heart.
"You have just stood up from the computer, right? Then let me provide you with a special dessert."
He sent me something through the chat window of the Internet phone call program based on p2p technology. Inside he pasted a strangely large URL. Is this the dessert?
"Why don't you open it and take a look? It's the best dessert after all."
Still harboring suspicions, I tried to click it, and it showed the contents of the link.
What appeared was the picture of my classmate Sakura Airi in swimsuit. It was hard to believe someone at her same age would possess a body with such a developed chest and a slender waist.
I reckon no matter what type of gentleman they are, their gazes would be glued to the screen.

<img src="/assets/ss/y1v2_ss3_illustration.png" alt="Sakura Airi" class="mx-auto my-8 rounded-lg shadow-lg max-w-md" />

"I found her homepage. This photo was taken during third year of middle school. Can you believe it?"
Unbelievable… even high school student figures pale in comparison to this.
But after seeing this I've finally understood. So by dessert he was referring to this…
"Think about it calmly, isn't this super good? After all, we have a magazine idol in the class! If paired with this picture, you'll have all kinds of delusions."
Even if you said it as if you were bragging about, I'm still unable to understand this type of emotion.
Feeling happy by having a cute girl in the same class and feeling happier when you can meet her… I still don't quite understand the proper state of mind of boys and girls.
Leaving my thoughts aside, Ike was staring alone to the picture in high spirits.
What would Sakura think, if she knew she was being treated as dessert?
I bet it wouldn't be "I'm already used to it" and call it a day.
But let's forget about it… for the moment let's save this picture. Saving this picture is not doing bad things.
While paying attention to not let Ike discover it, I put the picture inside a folder.`,
            4: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Ah, One Page of Youth</h1>
<p class="text-center text-sm text-gray-500 mb-12">Special Art Works — Volume 2</p>

<img src="/assets/ss/y1v2_ss4_illustration.jpg" alt="Girls of Advanced Nurturing High School" class="mx-auto mb-8 rounded-lg shadow-lg max-w-md" />

Koudo Ikusei High school. It's an education facility that has never been seen until now especially set up by Japan, which was lagging behind in the international community, in order to restore its former glory.
This school, founded in order to cultivate excellent young people, has received a lot of interest both at home and abroad.
Due to the facilities being set up far away from the center of the metropolis, it's extremely inconvenient to make contact with the interior of the school. However, in its immense foundation they are so proud of it, occupying an immense area, students can live in the residential area inside the facilities and spend a comfortable life from the moment they enter the school until their graduation. Not to mention the convenience store and the karaoke, cinemas, shopping centers and similar facilities, they all seem like they have formed a street. As a result, they won't feel any inconvenience.
One step further, in order to satisfy the special conditions of the foundation, they guarantee that, after graduation, people can choose to enter any grade school and workplace.
In addition, the school has adopted the S point system. Although they can only be used inside the school, students will receive a huge amount of allowance every month from the school.
Thanks to the school receiving total support from the country, the school fees are exempt. In every possible way.
As a first year male student from Class D who attends this school and receives care from them -- Ayanokouji Kiyotaka.
That's me. My day started in front of this elevator.
I rubbed my drowsy and sleepy eyes while I was waiting the elevator.
Although there were two elevators, the situation in the morning were always extremely chaotic. Due to the fact that the girls living in the upper floors would ride it, it wasn't strange that the elevator was already full when it arrived here.
The closing ceremony of the school term in August was already in front of our eyes. This day came especially late. Although the boys who couldn't wait seemed to had ran through the stairs, I didn't want to waste stamina in doing those meaningless things.
I was playing with my phone while I waited and finally, the right elevator arrived.
"…Wuaaa…"
I realized the atmosphere and the 3 dreadful girls riding together inside the elevator. Facing this unexpected assembly, my body became stiff unconsciously.
"Getting in? Or not?"
As if the options of paradise or hell were pressing in to me, the girl who had her finger on the "close" button of the elevator was Horikita Suzune. If she didn't talk she would be a beautiful girl with long black hair, but her personality is extremely terrible. And she is a completely isolated person.
Not only she doesn't become friends with anyone, she also has a negative attitude towards social communication. But she is well versed in both studies and martial arts, she can complete everything alone. In other words, she has no problems in the survival aspect. She is this kind of girl.
"No, I'm getting in… please allow me to get in."
I rode the elevator a bit awkwardly together with my classmates that were already in it.
"Good morning, Ayanokouji-kun. Ah, your hair in the back is sticking up a bit."
"This is the natural hairstyle that is quite popular these days."
"Ahaha, Ayanokouji-kun, you are so funny."
Only she laughed, the other 2 people behind didn't react at all.
More than that, I felt from behind a "what boring thing is this guy talking about?" kind of cold stare.
It was just like that feeling of going to the school's dining hall alone and being excessively self-conscious thinking that you were receiving the attention from the surrounding people.
The only one who used a cute smile to answer me acting stupidly was Kushida Kikyo. She has short hair and is rumored to be very popular among the first year students. She's a girl who can treat everybody gently. Her studies and physical skills are also pretty good. She has no aspect to criticize. And her chest is well developed. Bigger than Horikita's. In a game she would be the most necessary existence. Only that, Kushida has also a dark side nobody knows.
Being cheerful and gentle is just Kushida's outer appearance, her other side is very frightening. She was capable of telling Horikita and me "I hate you" with a serious expression, without caring about our feelings. I don't know the specific details.
"G-good morning, Ayanokouji-kun…"
There was also another person. The girl that was in a corner behind those 2 people was Sakura Airi. Although she usually wears fake glasses and is extremely shy with strangers, in middle school she had experience as a magazine idol. The boys who know her true identity evaluate her as a real beauty. But she is also extremely shy with strangers when she is not wearing glasses.
When we arrived at the entrance hall, it inevitably became the state of four people going to school together.
First year students all living in the same dormitory building regardless of gender and using the same road to go to school.
"I've never seen this combination before, it's really a strange group."
Not counting Kushida, Horikita and Sakura usually acted alone, but right now they were going together, so that couldn't be a coincidence.
"I got involved by Kushida-san."
"G-getting involved, those words hurt a bit…!"
"What do you mean?"
I sook a proper answer from Sakura since I couldn't grasp the situation.
"This, that, this morning, Kushida-san came to my room to get me… she said she had an important thing to discuss…"
Discuss, although I was waiting for her to continue talking, her volume dropped so low that I couldn't hear her clearly anymore.
"Aren't we going on a trip very soon? That's why I wanted to invite you all to go together."
It seemed that she answered in order to provide assistance to Sakura. I see. After all, going alone while travelling would be very lonely.
The first year students were scheduled to participate in the luxurious cruise trip organized by the school.
I guess Kushida greeted people actively in order to avoid the appearance of isolation inside the class.
"Even so, is it okay to wait in front of other people's door without permission?"
"Yesterday I greeted you when we were returning and you said you were busy so you rejected it... so if it's in the morning then you will have time, right?"
There route between the dormitory and the school is just a few minutes. Even so, in these few minutes they can also discuss things.
Kushida must have realized it so she acted in this way.
"You say trip, but it's just 2 weeks. You say go together, but there are no particular things to do."
"There's no such thing. I've heard that the ship is extremely big and being alone would be lonely. Sakura-san, you should also come and go with my group, ok?"
"I-I'm n-not good at…"
Of course, she also knew about Sakura not being good at interpersonal relationships.
Because of that, Kushida, who could establish a good relationship with anyone, took the initiative and extended her hand towards Sakura.
Only that, just one person was unable to hold that hand.
"Sakura. There are also a lot of people that are easy to handle in Kushida's group. I think it's an opportunity hard to come by."
I slightly covered her by urging Sakura to participate.
"Ayanokouji-kun, you are also going with Sudo-kun and the others, right?"
"Yes. We have already planned some things. After all, going alone would be really lonely."
I was lying. However, if by doing that I could make Sakura's heart feel more relaxed, then it was worth it.
"Although I believe the problem lies in the thought of being alone would be lonely."
I knew it would be like this. Horikita interrupted the conversation without reading the atmosphere.
"Is that so? Isn't everybody going together happier? It's only that, you know?"
"If someone can only keep themselves by staying in the community, then that person's existence is incomplete."
Although Horikita is never interested in other people, she cares about this point a lot.
The situation of this person is not being lonely or isolated, rather considering her arrogance as belief.
"Horikita-san, do you want to go together with us?"
"No."
She immediately rejected Kushida's invitation. Kushida was also used to it and retreated with a smile on her face, but she spoke after that.
"Let's go together, okay?"
"No need…"
In front of the invitation coming from her with a bright smile, Horikita rejected her by turning her back.
"Good~morning, Kikyo-chan. Horikita-san and Sakura-san are also here!"
Bang – as if it was pressing against my back, a lively girl appeared on the scene. Long pink hair fluttering in the wind, she was Class B's student Ichinose Honami.
As a result of the addition of a lively girl, Sakura became even more withered and came a bit closer to me. Having difficulties even when interacting with people of the same gender, she sure has it difficult.
"What, what, this is really a rarely seen combination. What are you talking about? Let me join in."
"You see, isn't the 2-week trip coming soon? After all, it's hard to come by, so we were just discussing about where to go. If it's possible, Honami-chan can also come with us."
"Wa, really? I'll go, I'll go!"
Even though these 2 people belong to different classes, it seems like their relationship is on a first-name basis.
But then again, this girl called Ichinose is special. In this school, due to the special rules with other classes, even if this school is where everybody is assisting, it still has a huge conspiracy.
That is, it's a system where they conduct a ranking to the students and assign them into different classes according to their "strength".
The excellent students are assigned to Class A, the deficient students are sent to class D. After graduation, the ones receiving care are only Class A, so in practice Class D is insignificant.
However, what's complex here is that academic skills ≠ strength. Even though the student's duty is studying, this school doesn't judge the students based on written examination performance. The proof of that is that Horikita, Kushida, and also Sakura's academic skills are by no means low. Although every person has their incomplete parts… me included.
"I also want to chat with Horikita-san and Sakura-san a bit more. I'm really looking forward to it."
It looks like Ichinose is really thinking about interacting with students from another class, her face was filled with excitement.
"I won't be together with all of you."
"Eh, is it like that…? Do you already have plans?"
"No, I'm just not interested."
Even if the other person was Ichinose, Horikita's attitude didn't change. Rather, her rejection was even stronger.
"Ahaha, I see. It really feels like Horikita-san's style. Then if it's possible, if you have time during the trip, don't forget about contacting me. Back then I already wanted to give you my e-mail address."
She was different from Kushida, Ichinose didn't stick to her and immediately retreated. Ichinose took out a memo from her bag and wrote down her e-mail address and handed it to the two people. Sakura, who usually never gets someone to hand over their contact info, was unable to take her eyes off that piece of paper.
"You are really a good person. Isn't it better just to ignore people like me alone?"
"Ignore? It feels like this way of speaking is not suitable for students that want to enjoy youth."
"Don't worry. I don't intend to enjoy youth. In addition, compared to spending a boring time chatting with me, isn't choosing to ignore me a more effective way of time management?"
"It's precisely this. Every time Horikita-san gives me the cold shoulder, it causes people to have no other alternative."
"Haha. Horikita-san is indeed a bit arrogant, but this isn't a bad thing. Although Horikita-san, you have said you don't need youth, but I believe you can't be sure of that. Horikita-san might not want to enjoy youth, but at this very moment, this is youth."
Horikita listened to Ichinose's words in silence.
On the other hand, Sakura, who basically didn't speak and I didn't know whether she had listened to her words, was murmuring softly.
"At this very moment… this is youth…"
Someone who doesn't have many friends has no chance with youth. I guess she was thinking that.
The girl who believed she didn't need it and the girl who thought she had no chance with youth. Even if both of them had different reasons, the conclusion they reached must be similar. Ichinose grabbed Kushida's shoulder and closed the distance with Horikita.
"Right now I'm here, Kikyo-chan is here, Sakura-san is here too. And Horikita-san is also here. Chatting about meaningless things while going to school. In the future we will definitely think this is youth.
"Trying to negate the future events… that won't do. That's something not even god can do."
Horikita stopped refuting Ichinose. Or I should I say she gave up.
Whether it was related or not to her expectations, if youth itself is to be enjoyed, then it couldn't be denied.
Even though I'm the same as Horikita, still not being able to understand the meaning of youth, but I felt I understood it to some extent. The scene in front of my eyes at this moment has to be one page of youth.
How should I put it? I was actually in such an incredible scene.
Looking at it, this was an incredible scene of a boy placed in between four girls. My existence was even more conspicuous than the red ranger in a sentai squad.
"…Really, so behind the times."
Thinking that I shouldn't be there, I stood there quietly.
I felt to some extent that these four people in a not so distant future will become very good friends.
If it will be like that, I can't disturb them now.
Even though I was thinking like this…
Kushida realized I was standing in the original place. This action was transmitted to the remaining 3 people, everybody stopped their footsteps and turned their bodies to look at me.
"What's going on? Ayanokouji-kun. Did you forget to bring something?"
"Eh? Ah, no…"
"We don't have classes today. There shouldn't be any particular thing we need to use."
"Are you… not feeling well…?"
"If I had to say, you've been absent-minded since the beginning, pull yourself together."
Each of the class D girls used their own way to show their worries and talked to me.
Seeing this situation, Ichinose, looking satisfied, showed an even more glittering smile.
"May sickness? Or do you feel excluded?"
"…"
"Ah, did I get it right? It's nothing, Ayanokouji-kun, you are also a page of our youth."
Saying this, she ran towards me, grabbed my wrist, and pulled me softly.
I was planning to stand there and yet I got dragged by Ichinose easily as if I was lacking strength.
"It's okay, it's okay, if you don't hurry up we'll just leave you here~"
Perhaps I inadvertently stepped into that youth. But the distance to the moment I can get the answer is still remote. One year? Two years?
Or maybe the moment I graduate from this school? It was hard to say right now.
However, the day I can clearly feel that this kind of time is a precious and irreplaceable thing, will definitely come.
This premonition –was sprouting in the depths of my heart.

<p class="text-center text-sm text-gray-500 mt-12 italic border-t border-gray-700 pt-4">Note: This short story takes place between Volume 2 and Volume 3. It's a pity that I did got scrapped all the Ichinose lines and the five of them walking together in the anime, since it was a beautiful scene.</p>`
        }
    },
    {
        id: "ss-y1-v3",
        volumeNumber: "SS",
        title: "Short Stories: Volume 3",
        releaseDateJP: "Jan 25, 2016",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Airi Sakura : Things that Sprout",
            "Honami Ichinose : The Circumstances of Honami Ichinose's Test",
            "Kikyō Kushida : The Important Time"
        ],
        characters: ["Airi Sakura", "Honami Ichinose", "Kikyō Kushida"],
        coverImage: "/assets/y1v3.jpg",
        customChapters: {
            1: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Things that Sprout</h1>
<p class="text-center text-sm text-gray-500 mb-12">Airi Sakura SS — Volume 3</p>

After the special exam began, the school life I had in mind had changed drastically.
Is it because of living in the uninhabited island? Or is it because I haven't experienced a cruel life until now?
No, it's nothing like that. Those are trivial things.
I was staring at the guy who was walking ahead of me in the dense forest.
Why? I don't know the answer.
When I realized it, my eyes were already on his body. This has never happened until now.
If I extend my arm I can touch him, that is the distance between us. I tried to extend my arm slightly.
But that's something I'm unable to touch. The distance is so close and yet it's out of reach.
Suddenly, the boy… Ayanokouji-kun, stopped and turned his body.
My pulse accelerated as I retrieved my hand hurriedly. I-I haven't been seen just now, right?
"Let's rest for a bit, since it'll still take quite some time to reach the destination."
He said this gently, as if he had realized I was starting to feel exhausted, and looked for a place we could rest.
Although I was ashamed of my lack of physical strength, him being able to be considerate of me, I felt happy.
Ayanokouji-kun, who was standing there, went to the huge tree he had just seen, tidied it up by removing the dirt and the tree leaves with his hand to the extent one could sit on it, and sat down.
Although he also tidied up a place for me, I couldn't refrain from making a sound.
I wanted to sit beside Ayanokouji-kun, but, I was so embarrassed…
Sitting there was the equivalent to staying inseparably close to him.
Perhaps Ayanokouji-kun planned to sit there comfortably alone. If I insisted on sitting there, wouldn't he be displeased?
After thinking a bit, I was really unable to sit beside him.
I planned to find a suitable place to sit down, but the ground of the surroundings was not leveled, so if I sat down it looked like it would hurt a lot. Uuuu, endure, endure.
In order not to be disliked, I sat down far away from him. My butt hurt so much.
I tried hard to pretend that everything was all right, Ayanokouji-kun kept staring here, he probably had been seen through me.
"You can sit here."
"May I?"
"Of course, you can't rest properly by sitting there."
"Um, um…"
Although it was indeed like that… our s-shoulders would be almost touching.
There was no reason not to feel happy after being called, so I suppressed my happy and nervous mood while I sat beside Ayanokouji-kun.
Ayanokouji-kun's scent drifted into my nose by the wind.
Sakura Airi, this might be most intense moment in your whole life…!

<img src="/assets/ss/y1v3_ss1_illustration.png" alt="Ayanokouji and Sakura" class="mx-auto my-8 rounded-lg shadow-lg max-w-md" />

"Nature is amazing… just by walking a bit we have spent a lot of time."
I said that in order to alleviate my nervousness.
I needed to think about other topics, since I felt that my face had become like an octopus because of how red it was.
"Recalling Koenji's dissatisfied expression, it could be considered that the school has been managing this place properly. If this was a rainforest from overseas, then it would've been even more dangerous."
Ayanokouji-kun stared at the front with a slightly thoughtful expression.
I stared unconsciously at Ayanokouji's face and told him my thoughts.
"At first, I was gloomy when we set off on a trip, since someone like me with no friends wouldn't be able to have fun. I only thought it would be okay by just staying in my room, because it would be like an ordinary day like that. But it turned out like this, being told that this was an exam…"
I was also surprised, this was a huge development. I had never thought I could talk to someone like that.
Why was that? Why could I talk to Ayanokouji-kun like that?
"But now… I believe "it was good that I came here". After all, there weren't many chances for me to talk to Ayanokouji-kun like this…"
I was able to say the words I would never be able say in a normal situation.
"If only this could keep on forever, it would be great –"
Ah, these were my heartfelt words, my feelings at that moment with no falsities.
"I agree."
Although Ayanokouji-kun didn't turn around, he still answered me gently.
Just this short line made my heart feel warm. Ah, so comfortable.
I strongly wished to be able to save the scene and my feelings of this moment.
"Uuuu…what a shame."
"What's up?"
The way I said it would make people be worried. Ayanokouji-kun turned his body to look at me, worried.
"I was thinking that if I had a digital camera right now, I could take the best photo…"
If it was like that, we could've taken a photo together.
"But it wouldn't be that good if I was also photographed in there."
"It's only because Ayanokouji-kun is also in that I believe I could take the best photo…Ah! No! I meant, it's because I don't have any friends to take photos with!"
More than not being improper, it was because I wanted to take a photo with him that I couldn't help but raise my voice.
I got embarrassed and I turned my head away.
Right now I was unable to look at Ayanokouji-kun's face.
Even though this was not something someone like me could ask…
But --oh God, please give me more… of these warm and gentle moments.
I couldn't help but wish that.`,
            2: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">The Circumstances of Honami Ichinose's Test</h1>
<p class="text-center text-sm text-gray-500 mb-12">Honami Ichinose SS — Volume 3</p>

Midsummer in the uninhabited island. Class B students were each playing properly their roles.
It was the second day of that special exam. I stood up feeling satisfied with the hammock I personally made.
"Hey! Yeah Now it's completed!"
I nodded looking towards the tied ropes. Chihiro-chan, who was at the side supervising the progress of the works, looked also very happy.
"As expected from Honami-chan! Thank you!"
"I can help at any time with these kind of jobs, so call me whenever you are troubled."
After saying this, Chihiro-chan showed a carefree smile and linked with my arms. Like this, she looked as cute as a little sister.
In the past, when Chihiro-chan confessed to me, I was afraid our relationship would be affected. But those worries disappeared in the following day, she treated me like usual.
So I took advantage of that moment, opened my heart and talked to her like I used to.
"Ichinose-san is good at everything. Do you have things that you consider you are bad? Like sports and so on."
Ah –ha—even if I know there's no malice, don't just add that last sentence nonchalantly!
"Don't you think being bad at sports and so on is already surprisingly fatal?
Besides, bad… more like bad, that's just not being good at it.
Rather than saying it aloud, it was a small excuse in my heart.
I'm confident my running speed is fairly fast. In contrast, my ability to maintain the equilibrium – known as part of the motor neurons, has its own bad side.
There has happened a lot of times where I threw or kicked a ball, this went very deviated, so I'm mocked in the classroom for this. Uuuuh, I'm so sad.
"It's not like that at all. For me, that side of hers really adds UP her cute points."
For me it was a very embarrassing thing, but Chihiro-chan was very happy.

<img src="/assets/ss/y1v3_ss2_illustration.png" alt="Honami Ichinose" class="mx-auto my-8 rounded-lg shadow-lg max-w-md" />

"Wah, stop it idiot, that's too cold!"
"Wahahaha! Oraora!"
Accompanied by the sound of splashing water in all directions, I could hear the guys shouting while playing with the water.
"Everybody is having a great time."
Watching the scene of their innocent looks, it inevitably causes people to smile. Should I also join them?
"Embarrassing. The boys are just a bunch of brats."
"A-are they?"
Is it because Chihiro-chan has an insensitive side, or because she has a strong conflict with the boys?
"But everybody has done a great job. Even though nobody has previously experienced surviving in an uninhabited island, but they have affronted the exam smoothly and without panicking.
After they revealed the exam, normally people would plunge into chaos, but everybody in the classroom pulled themselves together and calmed down, that was beyond my expectations.
Thanks to everybody, I could also bring out my usual strength and could contribute to the class. Just passing through the exam like this. Firmly holding the points and at the same time, not forgetting about cheerfully enjoying.
"Hey Honami-chan, after this let's go to the seaside. Since it's a rare chance, I really want to go swimming."
"Then let's invite everybody and go together."
"…Honami-chan, if you want it like that, then it's also okay."
Eh, why are you looking into my eyes? And your cheeks feels like they have a feverish tone!
"But I think that… a romantic couple's world is better"
Don't tell me that Chihiro-chan still likes me. Rather, this reply just means she still likes me!? W-w-w-what should I do!?
"Really, I was kidding. You don't need to panic."
Perhaps she saw through my panicking heart, Chihiro-chan said while laughing.
"You're so bad. I was feeling anxious because I had taken your words seriously."
"Because there are still two and a half years left. You don't need to feel anxious. But I'll definitely change Honami-chan's heart before graduation.
"En en, just like that just like –"
After nodding in admiration, I once again reflected calmly what she has said just a moment ago, and them my whole body froze.
"Eh?"`,
            3: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">The Important Time</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kikyō Kushida SS — Volume 3</p>

"Kikyo-chan? Hey, are you okay?
Feeling the sensation of fingers touching my shoulders, I was a bit startled as I turned my head.
There was a slightly worried Shinohara-san.
"Ah!? Sorry, were you calling me?"
My sense of hearing, which was covered by silence, suddenly started picking up sounds. The noisy sounds of the surroundings hit me like a tsunami.
I accidentally dropped the doll that was in my hands on the floor and it bounced a bit.
"What's the matter?"
"Karuizawa-san has proposed to go to the deck, it looks like there's a great scenery."
"I understand. I'll go there once I've bought this."
I believed it was fate, so I bought the dolphin doll the size of the palm of my hand.
After obtaining the dolphin doll, I rendezvoused with the girls in front of the entrance of the shop and went together towards the deck.
The crew members standing in front of the entrance welcomed us with a wide smile in their faces, and helped us open the door.
In order to look at the scenery, most of the students have already gathered at the bow.
"The scenery is awesome! It's incredible!"
Even Karuizawa, who usually never shows any interest in anything other than dressing herself up, couldn't help but sigh. It seems that the scenery is really unique.
She surveyed the ocean with her eyes lit up. The rest of the girls were doing the same.
But I looked at the scenery as if it had nothing to do with me, involuntarily.
It was absolutely not because I had a bad idea about it. Just because I considered that this moment was very important so I didn't want to ruin it.
"It's really an impressive view…"
I switched my mood and answered like this.
"It seems that the boys are in the bow. Let's join them."
Everybody accepted Karuizawa-san's suggestion. Apparently, trying to start occupying places right now would be a bit difficult.
"… Act naturally, naturally."
I whispered in a voice nobody could hear it and proceeded with them towards the deck. After that we treaded into the vacant place the guys from Class D occupied. It seems that Ike-kun and Sudo-kun's group has occupied this place.
The boys who saw us let us into the vacant place without a trace of dislike in their faces.
Then, I saw Ayanokouji-kun for the first time, gazing boringly into the sea. I felt a bit of impatience. The reason was because he saw my hidden part.
In a normal situation, I'd be paying close attention to him and monitor every single move. But his presence is always very low. Normally, He never speaks apart from the bare minimum, so it's difficult to follow him closely.
Only that, every time I see him, I start to remember other things.
"Eh? Where's Horikita-san? Aren't you two together?"
Horikita-san is one of Ayanokouji-kun's few friends. For me that is the most important thing.
"I don't know, I'm not her protective charm… Also, she isn't a person who would fully enjoy a trip, she's probably in her room, I believe?"
There's nobody in the class who loves being alone more than Horikita-san. She probably won't try to enjoy the trip but stay in her room instead.
It also makes things easier, so let's first enjoy the summer vacation.
"I guess so."
After giving him such a short answer, I stood beside Ayanokouji-kun and felt the sea at close range.

<img src="/assets/ss/y1v3_ss3_illustration.png" alt="Kikyo Kushida" class="mx-auto my-8 rounded-lg shadow-lg max-w-md" />

When the ship's broadcast ended, an isle appeared in my field of vision. That's the beach we are about to go, the main attraction of this summer vacation.
Karuizawa-san and the others are probably looking forward to it and they are talking about going for a swim.
This school is different to the normal schools. Even though there are quite a lot of thrilling elements, normal days also exist. The expected everyday also exists. I want to protect them at all costs. I have no choice but to protect them.
For this reason, I… even possessed such a determination.
We were gradually approaching the isle.
My --progressively stronger determination was also gradually approaching.`
        }
    },
    {
        id: "ss-y1-v4",
        volumeNumber: "SS",
        title: "Short Stories: Volume 4",
        releaseDateJP: "May 25, 2016",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Honami Ichinose : In the Cracks between Dream and Reality",
            "Kei Karuizawa : Thin Presence"
        ],
        characters: ["Honami Ichinose", "Kei Karuizawa"],
        coverImage: "/assets/y1v4.jpg",
        customChapters: {
            1: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">In the Cracks between Dream and Reality</h1>
<p class="text-center text-sm text-gray-500 mb-12">Honami Ichinose SS — Volume 4</p>

In front of me, there were a dorayaki and a stromboli.
"I want to eat both!"
The starving me pounced on the two targets with a flying pose.
However, the two escaped at high speed.
"Muu, impressive. Then I won't hold back either!"
I leaped again, even more swiftly. After that, I directly extended my arm.
But the food once again slipped through my hands and increased the distance with me.
"…Then, how about this?"
I gave up on the stromboli and I only extended my arm towards the dorayaki. This time I didn't let it run away and I caught it easily. Just when I was calmly thinking about going for the stromboli, it escaped for the third time and increased the distance with me.
And the dorayaki that was in my hands just a moment ago had slipped away without me realizing it.
"This can only mean---"
When I realized what the food represented, they disappeared and the world dissipated in an instant. After that, I felt the soft ground catching me. Then, I heard the alarm sound I am used to hear coming from near my head.
"Umm~…"

<img src="/assets/ss/y1v4_ss1_illustration.png" alt="Honami Ichinose waking up" class="mx-auto my-8 rounded-lg shadow-lg max-w-md" />

That's right. I used my dizzy head to grasp the situation. Today is the last day of the special exam. Since I arrived at the room earlier than anyone, I ended up falling asleep while I was racking my brains about how to decide the outcome of the battle.
After getting up, I realized the figure of the class D student Ayanokouji-kun, who I didn't know when he arrived, inside the room.
"Go~od mor~ning Ayanokouji-kun. Sorry, my alarm clock must have surprised you."
"No, not at all. It looks like you have slept well."
"Ahahaha, sorry. I completely drowsed off. You are so early, there's still 20 minutes left, you know?"
"You too, since when have you been here?"
"Roughly 1 hour ago. I wanted to stay here calmly. It's noisy staying in the dorms, with friends going in and out of the room.
I wasn't planning to sleep, but I was a bit embarrassed so I ended up saying that.
However, this might be a good thing. The result of this was that I could decide the battle plan.
"And there were also a lot of things I wanted to sort out."
"Did you get results?"
"More or less."
If I chase after 2 rabbits at the same time I will end up getting none. I have firmly established the policies to confront the Rabbit group.
Still, I am rarely together with Ayanokouji-kun alone, so let's investigate him.
Yukimura-kun and Sotomura-kun are easier to read, but Ayanokouji-kun looks like he is in the clouds, he is very hard to read.
I stood up, fixed my hair messed from sleep, and sat beside Ayanokouji-kun.
"Since there's still time until the exam starts, if it doesn't bother you, do you want to have a little chat?"
"It won't trouble me. If you think it's okay, then it's okay for me, Ichinose."
He did not dislike it and agreed to my request.
"Then it's decided. I have something I wanted to ask Ayanokouji-kun. I have already asked all the Class B male students like Kanzaki-kun, but I haven't asked the students from the other classes, so it kept bothering me. Ayanokouji-kun, do you have a strong desire to be promoted to Class A?"
First of all, I need to ascertain his inner heart. What he thinks, for what goal he is taking action, and so on.
I have been questioning myself about the group distribution of this special exam. Being assigned into a group has a certain meaning. For example, Kanzaki-kun was assigned to the Dragon group, and the Dragon group had the names of the representatives of each class. I'm not trying to blow my own trumpet, but normally, shouldn't I be assigned to the Dragon group too?
But the reality didn't go like this. I was very discouraged during a split second, but I immediately pondered about it. It could be that there was another meaning.
There must be some implications in the fact that I was not sent to the Dragon group.
The Ayanokouji-kun in front of me could also be one of the possibilities--`,
            2: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Thin Presence</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kei Karuizawa SS — Volume 4</p>

This was an event that happened not long after the special test started.
I went earlier to the Rabbit group exam room.
"I've come a bit early… but whatever"
Actually I didn't intend to arrive this early, but approximately 10 minutes is still in an acceptable extent.
I only wanted to avoid meeting with Manabe and the other girls.
The reason being "that incident". Reopening old wounds in these unexpected circumstances had disrupted my mood. Standing worried in front of the door of the room was also strange, so I simply entered directly into the room. Eg… I only saw Ayanokouji-kun waiting alone sitting on a chair alone after entering the room. The disgusted expression I adopted in a flash was seen by him, but it didn't matter.
I didn't want to approach him, so I made some distance with him. I chose the furthest place from him and I sat down.
During the period of time after this, I was passing time chatting with my friends with my phone.

<img src="/assets/ss/y1v4_ss2_illustration.png" alt="Kei Karuizawa with phone" class="mx-auto my-8 rounded-lg shadow-lg max-w-md" />

After that, Rino wanted to have a phone call, so we did that.
"Ah, hello Rino. What's the situation over there? This side? Ah--, this side is not just terrible, the situation is at the limit. Even if I'm being separated from Hirata-kun, at least give they should give me some decent guys. This group is really full of malice."
It looked like there were a lot of girls in the group where Rino was allocated, so envious. I was having complicated feelings about thinking that they were in high spirits during my absence. Girls are certainly organisms that gossip behind the people they hate. In order to avoid issues from appearing after the test was finished, I should scout out in advance, in order to control them. This is the most important thing I should really be doing right now. After finishing the phone call with a few words, I inspected the chat log from start to finish to look for suspicious things. En, there shouldn't be any problem. At present my presence is still working.
Ayanokouji-kun, who was clamly waiting in the room, entered my field of vision.
"Ah—right. Are you the Target? It seems that neither Yukimura-kun nor So…-kun are."
This thing was not important. I only asked in order to pass the time. How should I put it, I didn't have any impression of this guy. He was an unremarkable guy in the classroom, but I could still find him from the corners of my memory. Why? Just by thinking a little I arrived at the answer.
Just from appearance alone, Ayanokouji-kun doesn't look bad at all. If he could socialize as well as Hirata-kun, maybe he could become a person whose popularity wouldn't lose to him.
"I'm not"
He answered me briefly. No, totally impossible, he doesn't possess dialogue skills. That's why he is always mixed with old fashioned girls like Horikita-san and Sakura-san.
"Ah, I see. Then it's okay"
"Do you believe me?"
Was it because I was suspicious? Ayanokouji-kun looked at me while saying this.
"Hah? You probably aren't, right?"
I gave a slightly angry reply and he immediately shifted his gaze and stayed silent. You are a man, so embarrassing.
It's useless to keep chatting with him. While thinking this, I took out my phone again.
In the end, besides Hirata-kun, there are no real men in class D.
That's why I can't leave his side.
Looking back right now, this was the first time Ayanokouji-kun and me spend time alone together.
In my three years of school life, he would become the most important and irreplaceable person, but at this very moment I wasn't aware of it.`
        }
    },
    {
        id: "ss-y1-v4.5",
        volumeNumber: "SS",
        title: "Short Stories: Volume 4.5",
        releaseDateJP: "Sep 23, 2016",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Kiyotaka Ayanokōji : Swimsuit Short Story: Honami Ichinose Chapter",
            "Kiyotaka Ayanokōji : Swimsuit Short Story: Kikyō Kushida Chapter",
            "Kiyotaka Ayanokōji : Swimsuit Short Story: Airi Sakura Chapter",
            "Kiyotaka Ayanokōji : Swimsuit Short Story: Suzune Horikita Chapter",
            "Kiyotaka Ayanokōji : Swimsuit Short Story: Kei Karuizawa Chapter"
        ],
        characters: ["Kiyotaka Ayanokōji", "Honami Ichinose", "Kikyō Kushida", "Airi Sakura", "Suzune Horikita", "Kei Karuizawa"],
        coverImage: "/assets/y1v4.5.jpg",
        customChapters: {
            1: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Swimsuit Short Story: Honami Ichinose Chapter</h1>
<p class="text-center text-sm text-gray-500 mb-12">Honami Ichinose SS — Volume 4.5</p>

In the last day of the summer vacation, I came to the swimming pool to enjoy myself. After having lunch, I was resting alone.
I was sitting on a simple bench placed in a corner of the swimming pool, watching attentively at the students who continued to swim without taking a break.
"If you don't mind it, do you want to swim with me?"
The leader of Class B, Ichinose Honami, started a conversation with me, who was resting there.

<img src="/assets/ss/y1v4.5_ss1_illustration.png" alt="Honami Ichinose in swimsuit" class="mx-auto my-8 rounded-lg shadow-lg max-w-md" />

"Did you talk to me because you saw me being alone?"
"Ahaha, it's not like that. I just minded it a bit."
It was an honor to be told this by Ichinose, who was considered cute (probably) in the campus.
-- Of course, I couldn't say these words aloud, so I just thought it in my head.
"I'm not really good at swimming."
"Is that true?"
After answering her, Ichinose looked incredulously at my top, then she watched attentively at my legs.
"You look as if you could swim very fast."
"That's just your misconception. I'm always one of the slowest in class."
I told her that since it was an information that could be obtained by investigating a bit. Ichinose, although she didn't really agree, immediately switched the mood and stretched her lower back.
"Then you don't have to swim. First let's just enter the pool."
"Oh, ok."
Since it was a rare occasion to come here once – I held this idea for the time being. Normally they wouldn't allow entering the pool wearing a top, but today was a special day. We did a warm-up standing side by side and after that, we entered the pool. The ice-cold temperature of the swimming pool was transmitted through my skin.
"Ah~ so comfortable~ "
Ichinose, who immediately emerged, waved me with a smile on her face.
The next moment she splashed me with the water from the pool.
"…Hey"
"Ahahaha!"
Was because I looked weird with my hair wet from the water she poured? Ichinose pointed at me while she split her sides laughing.
Following that, she splashed even more water than the previous time at me.
"Is it okay for you not to offer any resistance?"
"You—"
Being provoked like this, you'd also want to strike back. But when I realized the surroundings looking at me, I became rigid.
"What happened?"
"Ah, nothing…"
How should I put it, this practically looks like lovers playing in the swimming pool.
Even though Ichinose and I don't have that kind of relationship, those who saw us interacting would definitely think like that.
Once I reflected about it, my body felt heavy and I was unable to strike back.
"It's just that I want to do Bloodless Surrender…"
I used an idiom as an excuse. The meaning of Bloodless Surrender is literal. Avoiding a bloody battle when being attacked by opening the city gates.
"I see~ but it's too bad, there will be blood."
Ichinose splashed me water ruthlessly. The water entered my eyes and my nose.
"Geh…"
I deduced it was useless. It was exhausting to only be attacked.
Ichinose probably felt that attacking unilaterally was excessive too. She was awakened a bit by a feeling of guilt and apologized to me with a smile. After that, she told me she was going to the central part of the pool, so I followed her from behind.
Looking at her defenseless back, I absolutely couldn't endure it, gathered a lot of water and splashed her in one go.
"Waaa! Sto- you are so sly!
"I'm really sorry, it looks like I really hate being sprinkled with water. But now we are even, so don't resent me, okay?"
"Haha, I'm not going to resent you. I'll only strike back at you even stronger!"
I'm certain this interaction is already considered by the surroundings as one done by lovers, but only this time I intend not to care about it. If Horikita saw this scene, she would definitely say "you are really a brat" and sigh. But I also want to become a brat once in a while.`,
            2: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Swimsuit Short Story: Kikyō Kushida Chapter</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kikyō Kushida SS — Volume 4.5</p>

That girl was getting a lot of attention from everyone.
"Kikyo-chan, since you still don't have a boyfriend, what do you think about dating me?"
A male student approached the young lady and told her sweet words.
It' looked exactly like a scene of hitting on someone in the beach during summer.
"Ahaha, I might not have a boyfriend yet… but I'm not the type of person who's that popular."
Even though she answered using socially polite words, the truth is, she is very popular among the guys. No matter who they are, she always treats them brightly and gently. This is the speciality of the girl called Kushida Kikyo.
"I'm sorry, Ayanokouji-kun. These situations where I get talked are happening a lot."
Kushida told me this with a bitter smile while looking bewildered.
I was spending with this popular person –Kushida, the last day of the summer vacation. More precisely, we weren't just 2 people, but the group included Ike and Horikita and the others, who had come to play to the swimming pool.
It was just that when I acted alone, I got the opportunity to spend time alone with Kushida by chance. Kushida came at the corner of the pool and sat down. She only introduced her feet in the pool.

<img src="/assets/ss/y1v4.5_ss2_illustration.jpg" alt="Kikyo Kushida in swimsuit" class="mx-auto my-8 rounded-lg shadow-lg max-w-md" />

"Ayanokouji-kun, do you also want to copy me?"
"No, it's okay."
"It's going to be the 2nd term soon~."
"…Yeah."
My answer to these commonly used lines in conversations were extremely short, totally in the line of someone with bad social skills like me.
If my vocabulary were richer, then I could brighten the atmosphere…
Among the girls I'm acquainted with in the school, I'm constantly unable to get rid of my nervousness with Kushida.
Kushida not only hates Horikita, but she also hates me.
Even so, I'm still unable to get rid of the feeling of nervousness. It's probably as simple as I treat her as someone of the opposite sex.
As for whether I like her romantically, I'm unable to deny that this situation isn't one step away from that feeling.
If I were to be confessed by her, I would certainly accept her confession –even though it's not very likely to happen.
"In fact, Kushida, you are very popular."
I didn't intend to say it, but I inadvertently did it.
Although I said it with a low voice, but it still reached Kushida's ears. She looked at me with an incredible expression.
"I'm not popular. Not at all."
"No, you have just been confessed a moment ago."
"That wasn't much a confession as… it was sort of an extension of the greeting?"
So recently, youngsters sneak confessions in their extended greetings. I totally believe I will never be able to say those words with an indifferent face, until the day I die.
"Ayanokouji-kun, you are placed very high in the secret rankings, you must've been confessed, right?"
"There has never been any indication of that."
Who has ranked me so high? I can't imagine it.
"For example, like Horikita."
"Eh?"
"No, I was thinking if you have received Horikita-san's confession."
I believe I had revealed an incredible and difficult to understand expression that came from the bottom of my heart.
"That's impossible. Whether it's her confessing to me, or me confessing to her."
I denied it bluntly. Why would Kushida ask me that?
Sometimes, I don't really understand this Kushida girl.
Kushida immediately detected the changing atmosphere and said this while shaking her head a bit.
"Forget about my previous words. I'm sorry."
"It's not a big deal."
I didn't know why but I was unable to keep looking at Kushida's face when I talked to her.
Until the rest of my friends came to talk to me, Kushida and I watched silently the waving surface of the swimming pool.`,
            3: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Swimsuit Short Story: Airi Sakura Chapter</h1>
<p class="text-center text-sm text-gray-500 mb-12">Airi Sakura SS — Volume 4.5</p>

In the afternoon, even more students gathered in the pool, it was crowded everywhere.
Although we were a group of more than 10 people, when it was crowded, there would inevitably be people who got lost. So we temporarily disbanded and planned to gather again once the place was not that congested.
I believed the timing was perfect, so in order to act alone, I quietly moved away from Horikita and the others.
However, when I was ready to spend the time leisurely, someone pulled my arm.
"A-Ayanokouji-kun."
When I turned my head in order to follow the origin of the sound, Sakura was standing there looking at me concerned.
"There's quite a lot of people..."
"Yeah, let's go to the corner."
Sakura and I are not good at coping with big crowds. If possible, I really didn't want to be in the crowd. Sakura was also unlikely to reject it, so after I got her consent, we began to walk towards the windows of the facility.
"Ah, awa, please wait a moment! ...Puwa!"
After I heard a yelling, I turned around and saw Sakura, who was almost getting swallowed by the crowd.
She desperately extended her hand toward me, but she still looked a bit polite. Since it looked interesting, I observed it for a moment. Even though I obviously didn't move a step, Sakura was more and more away from me.
I believed if I kept doing nothing, it would be impossible to find Sakura later, so I approached her and grabbed her arm.
If Sakura had her skin exposed, her resistance would've been a bit stronger. It was fortunate that she was wearing a jacket.
"T-thank you."
"It was really dangerous."
In order not to get scattered with Sakura, we followed the wall.
"Are you not going to swim?"
"I'll pass. And I'm not good at swimming… and you Ayanokouji-kun, are you not going to swim?"
She felt sorry that I was staying with her and looked cowered. Since there were a lot of people, her wariness was stronger than usual.
"I already swim during classes."
"But……"
"Am I causing you trouble by staying with you?"
"No, it's totally not like that! I'm happy, I'm very happy ..."
I decided to tease Sakura for answering like that.
Of course, I did all this also for her sake.
"Then I'll just go swim a bit."
I called on Sakura to remove her top. Even if we entered the pool wearing that, we wouldn't be reprimanded, but I deliberately did that, in order to cut off Sakura's escape.
"Eeeeh…!?"
"With so many people here, it's not going to be conspicuous. After all, our inconspicuousness had been evaluated with high marks."
"That is, ah, although it's true..."
Sakura also knew her presence was nonexistent.
"but I'm very embarrassed…"
"Nobody is watching."
"A-Ayanokouji-kun is watching…"
So it was like that… this is really strange. Then –I said this while I moved away my gaze.
"I'll try my best not to look at you, is that okay?"
"I-I understand..."
Has she mustered enough courage? I heard sounds of friction of her coat from behind.

<img src="/assets/ss/y1v4.5_ss3_illustration.jpg" alt="Airi Sakura in swimsuit" class="mx-auto my-8 rounded-lg shadow-lg max-w-md" />

Because I wasn't looking, the sound felt very real, it kept resonating in my head, making me almost have strange feelings. This is not okay, this is not okay – I shook my head to get rid of the worries.
"I-it's done…"
"Then… let's go."
"Yes…!"
I did not turn my head and I extended my hand backwards. In order not to get lost, Sakura, showing a slight concern, held my hand.
Facing this kind of strange situation, I couldn't help but laugh a bit.`,
            4: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Swimsuit Short Story: Suzune Horikita Chapter</h1>
<p class="text-center text-sm text-gray-500 mb-12">Suzune Horikita SS — Volume 4.5</p>

The spectacular swimming pool during the summer holiday. Many students had come here in order to refresh themselves.
The scene showed the majority of the students playing, but there was one girl… Horikita Suzune, who was on the diving platform of the starting point, watched perfectly straight at the finishing line, and she slowly jumped into the azure water. That form was excessively beautiful, to the point that I didn't hear any sound. I observed Horikita's swimming form firmly.
She seems like she's planning to go back and forth, since she rapidly turned around at the finishing line.
I was in the starting point, checking the time while waiting for the return of Horikita.
After getting her hand up, Horikita lifted up her head from the water.
"Yo! Well done."
"…"
Horikita looked down at me and sighed slightly. After that, she swam slowly to the ladder and grabbed it.
"Did you see it?"
She asked me while climbed the ladder.

<img src="/assets/ss/y1v4.5_ss4_illustration.png" alt="Suzune Horikita in swimsuit" class="mx-auto my-8 rounded-lg shadow-lg max-w-md" />

"More or less. You are the only one who would swim seriously in the pool during summer vacation."
The majority of the students were sprinkling water, playing with a ball or a float, only thinking about playing happily.
"I didn't come here just to play."
She told me, looking a bit angry.
"What are you doing? What did I do to you?"
"Do you want me to say it? That you threatened me and brought me to the swimming pool?"
"Don't use the word threaten, that sounds unpleasant. I hope you can correct that."
"…Forget about it. There are not many opportunities to practice swimming after all, so this is good too."
It looks like she has used this optimistic way of thinking to stabilize her emotions.
"You were already good at swimming. You shouldn't need to practice."
Horikita has managed to get outstanding grades in swimming and other sport subjects. The school has probably given her full marks. Even so, why isn't she thinking about anything but increasing her skills?
"What's your goal?"
After I asked her, Horikita stayed silent for a moment. She glared at me a moment.
"You are not playing, but you aren't practicing either. What are you doing here?"
Even if you ask me, it's hard for me to answer.
The moment others ask you "what are you doing here", what's the correct way to answer that?
"I'm observing mankind. Just by watching you, Horikita, I'm already not bored."
"…can you not say nauseating things?"
She moved blatantly her line of sight and sighed. It's just that she should already know I was not being serious.
"This is surprisingly interesting. Even though there are a lot of students here, only you are standing out."
Horikita, exuding an aura of "I don't have friends" while swimming in the vast swimming pool. Wrong, it's more accurate to say she was exuding an aura of "I don't need friends".
"How about you also try to swim a bit? It could clear your head."
"Don't use the "cool down your brain" type of excuse to push on the topic."
"Anyways, can you step aside from there? I can't climb up…"
Sorry – I said this while I slightly moved away from the ladder. Horikita climbed through the side of the pool. With her head inclined a bit, she cleaned up the water from her ears. Really, if this person didn't speak, she would be a beauty.
"Right now you were thinking of unnecessary things, weren't you?"
"You are imagining things."
I said this in order to deceive her and looked at her voluntarily.
"Ayanokouji-kun, you have asked me before what's my goal, right?
"Eh? Yeah, What's wrong with that question?"
"… Because I no longer want to experience again sad feelings that I consider unnecessary."
Horikita's real thoughts came out in a split second. This was also the proof that Horikita also realized her weak points.
"Don't worry. You are not a person who would defeated easily."
"Isn't that obvious? I don't need you to tell me that."
Horikita immediately took back to her heart that instant of weakness she showed, and passed over my side.
Probably, the reason I paid attention to Horikita's since I enrolled in this school is --`,
            5: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Swimsuit Short Story: Kei Karuizawa Chapter</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kei Karuizawa SS — Volume 4.5</p>

"Hey, what's so funny?"
During the evening, Karuizawa said this while looking at the students who were returning to the changing rooms. She was sitting near the window, her hair drenched, water droplets falling from her hair to the ground.

<img src="/assets/ss/y1v4.5_ss5_illustration.png" alt="Kei Karuizawa in swimsuit" class="mx-auto my-8 rounded-lg shadow-lg max-w-md" />

The reason of this was because, a moment ago, I pushed Karuizawa, who was unwilling to swim in the pool, to the water.
She looked as if she was going to vomit at any moment while looking at the students with contempt.
"You... Forget about it, it's not really anything, but if I really have to say it, you are also part of those people."
It could be said that Karuizawa had got the most female friends in the class. Weekdays and weekends she probably spent the time meeting with lots of friends to play everywhere.
"Only people like me who can't be in the limelight can look down at groups of people like those"
"Hey, although it might be like this…"
Karuizawa somewhat showed understanding, but she probably couldn't accept my words, so she kept speaking.
"Although I believe everybody thinks in the same way, they would have a negative attitude towards things that are outside of their scope of understanding. That is, what's called their inner perception, maybe? Isn't there some moments where you believe "this is absolutely the truth", right?
Karuizawa voiced this speech, not because she wanted to show off. Having seen her usual attitude, I had never thought that she would make such a reliable speech, so I couldn't help but gasp in admiration to these words.
"What, did I say something strange"?
"No… It's just that I have similar thoughts."
It's just that I never thought Karuizawa and I had these identical thoughts. With her outer appearance and her actions being so different, her inner being was very reliable. I guess that currently nobody apart from Hirata knows about this.
I did not look at her, but I raised a topic – that included her scar.
"I actually think I have a method to solve that"
Wearing a swimsuit does not imply showing the abdomen. Although it would require to pay close attention while changing clothes, that doesn't mean it couldn't be done. In the event someone were to tease Karuizawa, the circumstances would not be the same, but I don't think anybody would pick a quarrel with her while changing clothes.
"It's not only about this issue. I just simply dislike swimming in a public place. And my body would be completely exposed if I wore a swimsuit"
"So is it because you don't have self-confidence?"
My statement was not malicious, but she probably interpreted them as if they were full of malice, so she returned the question to me.
"Don't you know? Nowadays even grade schoolers don't wear school swimsuits."
"Really?"
"Because right now you can wear any type of swimsuit"
In other words, just as bloomers disappeared with the time, school swimsuits were also removed.
"After all, even the trendy top I'm wearing right now is permitted."
However, this also showed that there were lots of suspicious elements.
"…is this because you wanted to see my swimsuit?"
"Don't get the wrong idea. I was just thinking whether or not you had not played to your heart's content"
After being told that by her, I suddenly realized I talked too much.
"Hmpf"
Karuizawa pretended not to hear this and shifted her line of sight to me.
"I feel that, although I'm not very sure, but perhaps it's a good thing to be able to communicate with you right now"
She seemed to be whispering to herself.
"Not only Hirata-kun, right now I still have friends around me. But I have been hiding my real self all the time, that's why, although I am also perplexed, but how should I put it, I feel at easy. If it was like usual, I would have never done this, but my heart wouldn't be able to refrain from thinking that it wouldn't be a bad thing to try to swim a bit, it's really unimaginable."
Even so, Karuizawa still didn't intend to stand up, this was because there was a clear-cut difference between the "things she could do" and the "things she couldn't do".
Karuizawa was shouldering a psychological wound and a physical scar, none of them could be easily cured.
This might be me overestimating my capabilities, but if my existence can bring healing to this person, then as a person, this is something worth being happy.`,
        }
    },
    {
        id: "ss-y1-v5",
        volumeNumber: "SS",
        title: "Short Stories: Volume 5",
        releaseDateJP: "Jan 25, 2017",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Honami Ichinose : Sports Festival: Ichinose's Battle",
            "Kei Karuizawa : The Complex Mind of a Maiden"
        ],
        characters: ["Honami Ichinose", "Kei Karuizawa"],
        coverImage: "/assets/y1v5.jpg",
        customChapters: {
            1: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Sports Festival: Ichinose's Battle</h1>
<p class="text-center text-sm text-gray-500 mb-12">Honami Ichinose SS — Volume 5</p>

It was not too far from the end of the Sports festival. In order to cheer for everyone, I stood in front of my classmates.
"Everybody, do your best, hold on just a little bit more!"
I shouted while I raised my fist, and everybody replied me with energetic shouts and raising their hands.
Looking at everyone, I was convinced we would obtain victory. We had almost the first place of the first years in the bag. But we shouldn't be careless. We need to effectively accumulate points in order to ensure our victory. This is our Class B's true goal. I'm just joking.
"Well, let's go Ichinose. Next it's going to be the mixed three legged race."
"OK!"
Shibata-kun and I went together to the field. No matter who the opponent is, we only need to fight by going all-out. But seeing an unexpected person, I stopped walking for an instant.
"What happened Ichinose?"
"Oh, I have just seen Kikyo-chan. I want to go and greet her."
While saying this, I pointed to two people who were walking in front of us. They were the Class D student Kushida Kikyo-san and Ayanokouji Kiyotaka-kun. Although I didn't tell Shibata-kun, my eyes weren't looking at Kikyo but at Ayanokouji-kun.
During this sports festival, I secretly remembered the results of his competitions. His performance was average. But I sensed something from it.
Having seen his tricks and demeanor in the last exam in the ship, and all of his actions until now, my impression of "ordinary student you can find everywhere" of him began to change.
"Yaho ~Ayanokouji-kun. And Kikyo-chan. It looks like we are all in the same group~"
In the end I still greeted them naturally. Although I subconsciously called out the name of Ayanokouji-kun first, I thought that was not important, and apparently nobody cared about it.
Kikyo-chan looked alternatively at Shibata-kun and me, and said this a bit troubled.
"Wow~ this is really a powerful enemy, you two are actually in the same group ..."
"Although Shibata-kun is awesome, I'm not a big deal, and I haven't got a single first place yet."
Being praised by Kikyo-chan, Shibata-kun was happy and rubbed his nose embarrassed. Kikyo-chan's popularity levels have already spread far outside of Class D.
"Really? That's unexpected?"
It seems that my surroundings believed by mistake that I was good at sports.
But it's simply that they don't have that perception. Even so, I don't plan to take the initiative and say it.
After all, it wouldn't appropriate. But it felt great to be considered a strong opponent.
"I got a second place, the rest were all fourth or fifth place. Originally another girl was supposed to enter the race, but she sprained her leg during the 200-meter race from this morning. It seems that there are quite a lot of wounded people this year. "
So I told them my unremarkable performance.
Ah, the competition is almost going to start, I need to remember that feeling. Although I practiced a couple of times with Shibata-kun, it's a another thing to be display it in the middle of the competition.
"Shibata Jun, can I tie our legs?"
"OK ~"
Having obtained the consent of the already prepared Shibata-kun, I said goodbye to Ayanokouji-kun and them.
"Let's win this, Ichinose."
"Yes. Although Class D have been working very hard, their situation doesn't look very good."
"In fact, we are fighting against Class C. I want to obtain victory in the last event, the relay race."

<img src="/assets/ss/y1v5_ss2_illustration.png" alt="Ichinose Honami in sports festival" class="mx-auto my-8 rounded-lg shadow-lg max-w-md" />

"There's Ryuuen, who is in the first place, but if he falls down, the other classes' morale will increase."
"I don't think Ryuuen would obediently lose."
"I guess so. He's that guy."
However, we won't lose either, we are going to get the first place of the year.
"We must win!"
"Ooh!"
Before the start of the competition, we raised our morale.`,
            2: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">The Complex Mind of a Maiden</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kei Karuizawa SS — Volume 5</p>

"We haven't decided on any tactic, is that okay?"
Having already arranged our cavalry battle position, Shinohara, who was beneath me, muttered these words right before the competition started.
"I don't think there's any problem. In a sports festival, you only have to take it seriously to some extent."
"Eh? Ah, ok. But Karuizawa-san, if you thing this is okay for you---"
"Do I look like that type of motivated person?"
"It's because you opposed Horikita-san's proposal when the class was deciding about the competitions by recommendation, so I was under the impression that…"
"Ah…"
That wasn't my idea. I acted following that guy's orders. Honestly, Horikita-san's proposal about distributing the participants according to their abilities not only made things easier, but also it was a stratagem that ensured the success of the class. It could even be said that this was looking after the students who were unwilling to try hard. It seems that I was ordered by that guy to do some unnecessary things, causing me to be looked with different eyes by other people.
"In short, let's do it at random"
"Roger--"
After saying these words, the cavalry battle began. There shouldn't be anything extraordinary in the school's cavalry battle –these thoughts were immediately subverted.
The reason being Class C quietly advancing forward and unceasingly attacking Class D. The vanguard was Ibuki-san. She was that existence that thrown my class into chaos.
Ibuki-san led the cavalry to do a surprise attack to Horikita-san.
"Shinohara, go! Support Horikita-san!
"Eh? Ro-roger!"
Even though she was surprised at me suddenly issuing an order, the horse still dashed forward.
"Although I'm not interested in winning, I don't want to lose like this…!"
I didn't know whether these words were said to Shinohara, or myself.
In brief, Horikita-san was targeted and leaving her alone would cause a terrible situation.

<img src="/assets/ss/y1v5_ss1_illustration.png" alt="Kei Karuizawa in cavalry battle" class="mx-auto my-8 rounded-lg shadow-lg max-w-md" />

"Stop! I'm sorry, but I can't let you go past here!"
The one who came to block us was Ichinose from Class B. Even though I haven't really interacted with her that much, I thought she was difficult to handle.
"What do we do, Karuizawa-san…?"
Shinohara-san, who was holding the center position of the horse, sook for my instructions.
"We have no choice but to go forward, even though I don't really want to do that"
My physical capabilities are not very outstanding and I don't want to do troublesome things. But—
Right now that guy is probably looking here. Although I don't know why, but I just don't want that guy see me suffering a crushing defeat. That existence that knows about the darkness of my heart. That existence that said he will protect me.
Fortunately, Ichinose's movements are not as difficult to handle as I thought. I can barely deal with her. While dodging her, I issued a specific instruction to Shinohara-san, to keep a suitable distance.
"Why am I trying so hard…?"
This time I was talking to myself. Everybody was trying hard so nobody heard my whisper.
During the summer vacation, I was also involved together with that guy. The same thing happened with this sports festival, making me help him with things I failed to understand. I just kept helping him, not knowing what he was doing or what he wanted to do.
Normally this would be unpleasant. But I don't know why I never like this.
That's certainly because the harm I'm really worried about deep down has not appeared.
The girls from Class C who wanted to look for problems with me haven't come back again. Is this merely a coincidence? No, absolutely not. That guy… Ayanokouji-kun, did something for me.
Just because he let me have this premonition, that I'm obeying him.
"!?"
I barely evaded Ichinose's hand.
"Ah, really, this doesn't look like me!"
The image of Horikita's horse falling entered my field of view. Ah, we are going to lose.
But the only thing I can do right now is to focus on the adversary in front of me.
I was gradually changing.
I was gradually receiving change.
But the unexpected thing was that I don't dislike it.
Right now I'm unable to confront the gradually changing myself.`,
        }
    },
    {
        id: "ss-y1-v6",
        volumeNumber: "SS",
        title: "Short Stories: Volume 6",
        releaseDateJP: "May 25, 2017",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Haruka Hasebe : Perhaps I Can Make Friends",
            "Airi Sakura : The Person I Love",
            "Arisu Sakayanagi : Everyday: Behind the Scenes of the End of Term Exams",
            "Honami Ichinose : Honami Ichinose's Everyday 2"
        ],
        characters: ["Haruka Hasebe", "Airi Sakura", "Arisu Sakayanagi", "Honami Ichinose"],
        coverImage: "/assets/y1v6.jpg",
        customChapters: {
            1: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Perhaps I Can Make Friends</h1>
<p class="text-center text-sm text-gray-500 mb-12">Haruka Hasebe SS — Volume 6</p>

I don't hate going to school.
I believe it went smoothly from elementary school to high school.
But if I were asked whether I liked school or not, I wouldn't be able to answer bluntly that I like it.
When I was young, my chest developed early, so the girl's distinctive feature I embodied was extremely eye-catching. During my childhood I was teased by the boys because of my chest and the girls looked at me with sympathy. My growth became even more remarkable after being promoted to junior high school. As a result, I received even more attention.
Their eyes would unconsciously look towards my chest, this was inevitable. However, after I became aware of their lecherous gazes, my heart gradually became cold.
Because of this, I became someone who basically stopped exercising. I gradually wanted to avoid those gazes.
What happened as a result? Their impression of me naturally became one of a cold and arrogant person and they started to become distant.
I didn't get angry. It was very relaxing so I thought it was okay.
When I became a high school student, I was already used to be a loner. Although I joined Karuizawa-san and Kushida-san's group, I didn't force myself to get close to their circle.

<img src="/assets/ss/y1v6_ss1_illustration.png" alt="Haruka Hasebe leaning against wall" class="mx-auto my-8 rounded-lg shadow-lg max-w-md" />

I originally planned to live like this, not becoming friends with anybody… but the circumstances changed.
I couldn't help but to change.
"I didn't expect that not only we have to take the exams with a partner...but also it has to be with Miyacchi, who isn't good in the same subjects as me."
In addition, I have never heard of students being the ones providing the exam questions.
From their conversations, it looks like the the exams are going to be very difficult this time.
"Who are you waiting for, Hasebe-san?"
Kushida-san looked at me with an startled expression, who was standing there using my phone with one hand.
"Ah, yes. I have some stuff to do, I'm going to a study group now."
"Now that you mention it, you were talking about this with Yukimura-kun and the others."
Being asked by her, there wasn't anything that I needed to hide, so I honestly nodded as a reply.
"Although it must be very hard, but good luck!. If you have any problem, I will come and help you at any time."
"Thanks"
She left after our short exchange ended.
'She's really a good person' - I mumbled these thoughts.
If only everybody were like Kushida-san, things would be very easy.
It it were like this, I could probably blend into Class D a little bit more.
I feel like I'm really not able to get along with Karuizawa-san and Satou-san.
"...It's useless thinking about this"
"Why did you leave earlier?"
Yukimura-kun walked towards me with a slightly angry expression. Miyacchi and Ayanokouji-kun were following behind him.
"You ask me why? It's because I don't want to attract attention. It's a bit inconvenient in the classroom--"
I hate the most being cast lecherous glances by the boys even though I'm wearing a school uniform.
"You don't want others to see you talking to us?"
"It's not like that. I have my own circumstances."
"It would have been very easy to explain it, but I was unable to do so. This was hard to do against someone of opposite sex.
"Don't mind it, Yukimura. Hasebe has always been this kind of person."
Even though I can't ascertain all the situation, these three people have one thing in common.
None of them would use a perverted attitude to look at me. At least, this part deserves to be assessed.
"If we keep standing and chatting here, there will be no empty seats. How about we move first?"
"You're right… It will be very troublesome if the seats were filled. Let's go."
"You should also be careful with your words"
"My way of speaking from earlier provokes resentment. I will reflect upon it."
Although it's unclear whether I can have a smooth relationship with these three people.
However, it looks like this looks interesting.
This is what I think.`,
            2: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">The Person I Love</h1>
<p class="text-center text-sm text-gray-500 mb-12">Airi Sakura SS — Volume 6</p>

I was keeping down the intense heartbeat in my chest while I arrived at the Bunanoki shopping center together with Kiyotaka-kun.
Whenever I see the Kiyotaka-kun walking beside me, my heart feels like it's going to burst out.
This is not a bad thing, but a comfortable pain.
… I should have probable become aware of it.
Right now, I love Ayanokouji Kiyotaka-kun.
"It feels exciting going out with everybody… Ki-Kiyotaka-kun"
"That' right, it doesn't feel bad"
It's thanks to Keisei-kun and the others that I can address Ayanokouji-kun with "Kiyotaka-kun"
Of course, I'm very embarrassed and I'm not doing it properly, and yet…
"Eheheheee…. KIyotaka-kun"
I'm already happy by only being able to call him by his name.
"What's the matter?"
Kiyotaka-kun asked me while showing a baffled expression.
"Eh? What do you mean?"
Not knowing the reason of Kiyotaka-kun's question, I couldn't help but to answer with another question.
"You have called my name, right?"
"…D-did I call you? I-I'm sorry, it's not like that at all!"
I thought I said it in my head, but it looks like I said it aloud carelessly.
After I obtained the cinema ticket from Haruka-san, I looked for the seat numbers and I discovered that my seat was beside Kiyotaka-kun's.
It can't be considered a d-date between both of us, but-but, we sit on adjacent seats. It's great!
"Ayanokouji-kun!"
Just when I was rejoicing, I heard someone calling Kiyotaka-kun from my back. It was a female voice.

<img src="/assets/ss/y1v6_ss2_illustration.png" alt="Airi Sakura pulling Ayanokouji" class="mx-auto my-8 rounded-lg shadow-lg max-w-md" />

"Could it be that you are going to the cinema? Oh! This is for the movie that's a hot topic!"
It was Satou-san… She got very close to Kiyotaka-kun.
I felt a bit of hatred and fear, so I widened my distance from them.
"...It seems so."
"Were you invited by Karuizawa?"
"No. I suggested to go watch a movie in the study group, then Karuizawa-san told me she also wanted to come, so we came together. Since it's a rare opportunity, let's go watch it together"
Why Satou-san has to!? It was a rare chance to go watch a movie together with Kiyotaka-kun! Why, why!?
While I was still confused, Satou-san hugged Kiyotaka-kun's arm.
"Fuaa!?"
Facing this hard to believe scene playing in front of me, my brain started to shake.
After that I couldn't hear my surroundings.
Recently, they have been going out together, looking very intimate, it can't be, it can't be!?
I did my utmost to keep my awareness in order to confirm the truth, so I yelled loudly.
"Ehm, Ki-kiyotaka-kun"
"What's the matter?"
"Kiyotaka-kun… recently, Satou-san and you, have been in good terms..."
Are you two dating? Even though I wanted to ask like this, I couldn't get these words out of my mouth.
I don't have this kind of courage…
"It's a misunderstanding. Satou-san and I have been studying together a couple times because we are a "pair""
"B-but people don't normally walk a-arm in arm?"
"That wasn't arm in arm, but having my arm linked"
"I feel that, if you dislike it you could shake it oft…"
"I understand. I don't think it will be a next time, but I will be careful"
"A-and besides? Before the pairs were set, you also went somehere with Satou-san, right?"
This was the thing I cared the most. I asked with all my might.
"...b-between you two, is there anything…"
Isn't that the omen before a confession? –I couldn't help but to think like this, like erasing myself.
But, what, what if those were confession words?
If Kiyotaka-kun accepted Satou-san's confession, and they are dating each other right now?
If this fact was revealed in front of me, my heart would probably stop beating.
But—
"No"
Kiyotaka-kun made a straightforward assertion.
I'm so glad…I felt relief for the time being.
But I would be lying if I said my heart was not disturbed.
"Are you not convinced?"
"N-no. S-sorry for always asking you weird questions… did I make you uncomfortable…?"
I just keep asking him weird questions, could it be that Kiyotaka-kun hates me?
Even though I'm nothing more than Kiyotaka-kun's friend, I keep asking him unruly questions.
I suddenly started self-loathing myself and I almost started to cry.
But Kiyotaka-kun probably noticed my mood, so he talked to me gently
"Not at all. If there's something you are worried about, you can tell me at any time."
Wuuu, so gentle….
In this kind of situation, it couldn't be helped if he didn't feel happy, but Kiyotaka-kun still treated me like usual.
Whenever I see Kiyotaka-kun like this, I like him even more.
"C-count on me. I will properly keep an eye on Kiyotaka-kun"
This is my first love.
I will like him more and more --I firmly believe this.`,
            3: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Arisu Sakayanagi's Everyday: Behind the Scenes of the End of Term Exams Chapter</h1>
<p class="text-center text-sm text-gray-500 mb-12">Arisu Sakayanagi SS — Volume 6</p>

I have seen it in my dreams. The stage is the sports festival. How many times has it been already?
The majority of the boring and endless time have completely disappeared from my dreams. But only that single act – the one that consisted in the relay race, the final athletic event, slowly but continuously reappears in my dreams.
I keep having the same dream because I want to see that scene again. Or I believe I need to watch it. Apart from this there is no other reason. This is probably because the deep layers of my mind are influencing me.
He was evenly matched with the Student Council President Horikita-san… no, from my point of view, it was an easy battle. From the split second I saw his silhouette, the boring everyday totally changed, like a flower recklessly blossoming.
School roll in Class D, Ayanokouji Kiyotaka-kun. His silhouette was deeply branded in my brain, impossible to get rid of.
I slowly opened my eyes
Calmly, I slightly exhaled a tepid breath. The sunset was gradually sinking down.
It looks like I took a nap in this deserted place.
"I desire to obtain him"
Like a maiden in love, I frequently think about Ayanokouji-kun.
There is no need to understand the reason why he is placed in this school's Class D.
As long as he is in this school, being my enemy, it's enough for me.
"Hehe"
This is so wonderful. This is a miracle.
"You can really sleep in a place like this!"
The one using a surprised voice beside me to start a conversation is Masumi-san from Class A.
She looked dissatisfied at me with her arms crossed.
"How about you also take a nap? It is unexpectedly snug."
"Now it's not the time for taking naps. Why are you looking for me? I want to go back earlier."
"She's still so impatient. I really wish she learns to enjoy the mood."
It looks like if I didn't talk seriously, I guess she would just go back immediately, so I got straight to the point.
"The end term exams are going to start very soon, have you been reviewing properly?"
"I've been properly reviewing. I'm averaging around 60-70."
"If you don't mind it, I can teach you. I can tutor you alone."
"Don't joke about it."
I was being serious, but Masumi-san shook her head with a disgusted expression.
"You don't need to flaunt your academic levels. If you only wanted to tell me this, then I'm going back"
"What was the situation in the classroom after the classes finished?"
"The situation? Very normal. Aren't we just earnestly preparing for the exams?"
"What about them?"
"Katsuragi and the others? They kept complaining about having to battle against Class B. You are aware of this already. If you asked me, I also think it would've been better to choose the easier Class D or Class C as target.
She showed a dissatisfied expression. It looks like she harbors doubts about aiming directly for Class B.
"If we were to lose this direct confrontation, they would almost catch up to our accumulated class points."
"You don't need to worry about it. As long as they can't surpass our points, them catching up is not a menace. Humans, as long as they have hope, they will cling on it. If they don't try to chase after us at all costs, the school life is going to be boring."
Properly speaking, there wouldn't be any problem even if we were surpassed. However, these words will most likely disturb Masumi-san's heart, so I didn't say the aloud.
After all, Class A students all want to do their utmost in order to hold their status.
"I just can't comprehend. I fail to understand what's interesting and what's boring. Keeping Class A status should be the priority. Until now, you have been obstructing Katsuragi and the others, who have different policies than you, and have stirred up a battle within the classroom. But this has also ended. You have wom the faction war. So now it's time to work together."
The untalkative Masumi-san when we first met have recently become more entertaining in conversations.
Although I didn't dislike her previous arrogant attitude, but as a friend, this is indeed better.
"Work together with Katsuragi-san, as it should be."
So long as the Class A's smooth and evasive policies are completed, it can allocate this manpower into other places.
If we could set our eyes on Class B, it should be slightly easier to manage.
"Why do I have to pay attention to these kinds of things? So, excuse me, , can you hurry and state your business?"
"Please be happier. Today I'm going to dialogue with that Katsuragi-kun"
"...with Katsuragi-san?"
Masumi-san looked at an empty place.
"Yes. Since we are going to discuss about working together or not, I think that, as my right hand, you should also participate."
The time was approaching the stipulated half past 5. It was probably the time.
He showed himself 1 minute earlier than the stipulated time. And he also brought another person, Inoue-kun.
"Why have you called us to this kind of place?"
Before Katsuragi-kun opened his mouth, Inoue-kun asked with a slightly rough tone of voice.
It looks like they are maintaining a strong sense of vigilance. It's not surprising given what has happened until now.
"Today, with regard to the end of term exams, I want to consult with you once again."
"Consult? Haven't you already decided the tactics?"
Katsuragi-kun crossed his arms as to imply - right now there's already no need to discuss anything.
"Do you still believe my idea of attacking Class B was a mistake?"
It would be very nice if you could have changed your mind until now.
"Right now I still think that. If it were me, I would aim for Class D or Class C."
Apparently, I didn't obtain the answer I was looking forward to.
"As expected, you are very dull, Katsuragi-kun. So far until now you have always been dull."
"Dull huh. Indeed, I'm just this type of man. I won't deny I have always been pursuing stability. But this has always been the optimal solution in order to achieve victory."
"I wouldn't have any objection if that was the optimal solution."
Even if I said these things to him, it would be to no avail. Being faithful to the basics is a strength, but to me this kind of strength is extremely boring. I already walked past that old path 10 years ago.
"What do you really want to say, Sakayanagi?"
Inoue-kun got angry as if he took it personally.
Looks like he fairly supports Katsuragi-kun, or more correctly, this protection is what he should do as a friend.
"The only one who can satisfy you is that eccentric Ryuuen."
"Maybe. I don't have any interest in people like Ichinose-san and you."
Indeed, Ryuuen is an interesting talented person. There are a lot of similar people like him, but only a very small portion stand out.
He might have been the only person in this school that could've made me feel joy.
Be that as it may, it is already a thing of the past.
Since I have encountered Ayanokouji Kiyotaka-kun, there are nobody in my eyes other than him.
"Your methods will make a lot of people fall into misfortune. this is what I believe."
"Maybe it will"
As long as I can directly defeat him, I have no attachments to Class A
I wouldn't care even if we dropped to Class B --this is what I am thinking right now.
As long as I can defeat him, even "leaving this school" could be regarded as an option.
In that case, this would be counted as misfortune for Katsuragi-kun and class A students.
"I actually want to ask you whether you regret the decision of choosing Class A. But looking at you, I'm definitely unable to get along with you."
"This time Katsuragi-san has conceded, but next time it won't be like this!"
"Then what do you want to do? Do you still want to battle against me?"
"Of course! There's only one leader in Class A and that's Katsuragi-san!"
Compared to the yelling Inoue-kun, Katsuragi-kun calmly said.
"No. There's no need for more battles. I want to withdraw from the contest for the leadership."
"K-Katsuragi-san, are you being serious!?"
Inoue-kun turned his head showing a hard to believe expression, looking very shaken.
"I originally didn't lead the class to this day because I wanted to be the leader, but because I considered, but to propose the most optimal tactics in order to bring benefits to Class A. that's why I adopted these actions. In addition, Sakayanagi, I did only acquiescence the internal strife because I thought you were wrong. But since the class points have dropped down to this point, there needs to be someone to take responsibility"
And the responsibility rested in Katsuragi-kun’s shoulders, who was leading Class A so far.
"Please wait a moment. if it's like this, then Sakayanagi should be the one assuming the responsibility! Because she meaninglessly threw the class into disarray and dragged it down!"
"You can't assess that either. It's a fact that I chose the wrong options."
Katsuragi-kun revealed a regretful expression.
Indeed, entering into defensive stance multiple times gave the enemy to drill a hole.
But the thing that makes him regret the most and unable to extricate himself, that would be that thing that happened in the uninhabited island, that left the biggest impact. Although I did not mention "that contract" here.
"Even though I feel that it's still not enough, if you say that you want to quit the school then it would be another story."
"This conversation is over"
Although the conversation had just started not long ago, Katsuragi-kun already planned to leave.
"From now on I ask you to keep leading Class A following my policies, Katsuragi-kun"
"What did you say?"
"I did really oppose you at choosing the battle tactics. But I believe your management skills made me see you in a new light. If you can act as my right arm, then your position in the class will be immovable. And people like Inoue-kun will also be willing to obey your management."
"What a rare invitation, but allow me to reject it. If I wanted to obey you, there wouldn't have been a collision between you and me. I will take my leave then."
"Who wants to obey you!"
Inoue-kun also said this line. I wanted to establish cooperative relations, but I ended up breaking off the relations with them.
But from now on he will not contradict me and will not give me complaints. Seeing him losing his will of fight
But he will not hit me in the future, give me a comment. It was easy to see from his appearance of having lost his will to fight. It wasn't bad since it saved me some effort.
"Is it okay like this?"
"Since he gave up fighting, I would not attack from behind. Moreover, I only opposed Katsuragi-kun because I wanted to kill some time."
Since now that I have future provisions, I no longer need him anymore.
"Then is my mission over?"
"Indeed, I no longer need you to monitor Katsuragi-kun. You there are still work for you. Next you will have to monitor Ayanokouji-kun"
"By Ayanokouji-kun, you mean that guy from the relay race? Why are you so concerned about that guy from Class D?"
"Are you interested?"
"Not at all. It's your bad habit again."
"Haha, you really understand. He is just like Masumi-san, that lets me feel joy"
The instant I said these words, Masumi-sans grabbed my collar.
After that, she stared at me as if she was facing her mortal enemy.
"I will never approve of someone like you. You really make me want to puke"
"This is really strange. Actually, do you think you have the right to self-proclaim yourself as a good person?"
I picked up the cane that was beside me and pushed to Masumi-san's neck.
"If I wanted, I could immediately bury you, you know?"
"Guu!"
No matter how hard they try to be brave by adopting a mighty appearance, the weak points that were exposed will never disappear.
The girl called Kamuro Masumi is already in my hands.
"After all, you are an outstanding person, please don't make me lose you in this manner."
"...when will you free me?"
"It's hard to say. It depends on my mood. You can only work hard."
Things I'm unable to do. My disadvantageous condition --unable to stand on the ground constantly on the move.
I need Masumi-san to become my legs and work hard for me.
"I hope you die."
Showing this nasty attitude, Masumi-san went back to the dorm.
I watched attentively her rear view, feeling that she was cute.
"It's interesting to tease her once in a while. It would be good if these days were I can laugh happily continue forever."
This all depends on Ayanokouji-kun.
How much has Ayanokouji-kun grown, compared to the him I saw that day? I'm really looking forward to it.
I wish my boring daily live will change.`,
            4: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Honami Ichinose's Everyday 2</h1>
<p class="text-center text-sm text-gray-500 mb-12">Honami Ichinose SS — Volume 6</p>

"Hey Kanzaki-kun. Do you mind if I ask you a question?".
Mid-December. The day the results of the Paper Shuffle were released, I called out to Kanzaki-kun.
"As I thought, everyone in Class A is really smart. We couldn't catch up to them".
"Even though we lost, the difference between us was merely 2 points. There is plenty of room for recovery".
It was due to that narrow margin that the shock of our loss was a huge one too though. But, my class isn't one that would lose heart from just that.
"It's still sketchy, but I understand the ranking of the sports festival too. It wouldn't be wrong to see Class D's coordination as being superior to that of Class C's. There's a high probability that with this result, Class D will begin to rise".
For better or for worse, Class C is a class that is greatly influenced by the movements of Ryuuen-kun. If he makes a single mistake in his strategy, the class will take a step back proportionately as well.
"Someday, I thought they would rise up to Class C, but this is going faster than expected".
"Yeah, for them to rise up during the 1st year was unexpected. There was just that much of a gap, after all".
Class D once lost all of their class points roughly one month after enrollment. Considering that they started from that point, it can be considered a miraculous gain. Class C also stalled significantly too though. However, there's something about Ryuuen-kun too that makes it hard to tell what he's thinking. Sacrificing his class points, there are rumors too that he's making various moves behind the scenes. Just because he's fallen to Class D it doesn't mean it's the end for him.
I cannot afford to let my guard down. Soon after enrollment, I cannot forget the fact that he brought a dangerous bomb over to Class B.
"But, what are you intending on doing with the cooperative relationship we have with Horikita from now on? If they beat Class C, next up is naturally Class B. In other words, their battle against us will begin".
"Ordinarily speaking, that is. But, I want to continue our cooperative relationship and I think we should do so as well".
"In other words, you mean you want to maintain the status quo until we defeat Class A?".
"Yeah. I think it's ideal if we fight against Horikita-san and the others one-on-one at the very end. Each and every time we fight against Sakayanagi-san and Ryuuen-kun and the others, the amount of stamina it consumes is intense after all".
"For better or for worse, Class D is similar to our class. It's easier to set up a strategy against them, is what you mean, huh".
"That is what I mean".
Of course, there are some unpredictable and mysterious elements to Horikita-san's Class D. Unlike Sakayanagi-san and Ryuuen-kun from earlier, even in the absence of an intense yet powerful leader, there should be a reason as to why they're catching up to the upper classes.
No need to even mention Hirata-kun and Kushida-san who are supporting her. I should also assume Ayanokouji-kun to possess a certain degree of ability. Because at the sports festival, I felt that Ayanokouji-kun's relay showed the heights of Class D's potential along with leaving a strong impression of him.
Well.....I already knew from a while ago that Ayanokouji-kun was fast though. When Class D's Sakura Airi-san almost got assaulted, I ran along with him to the scene of the crime. Having participated in the track and field club in the past before, I was confident in my own speed but at that time, his running form and focused breathing made me feel surprise inside me. It may just be that they're not standing out right now, but there could be other students similar to him.
"Sorry but after this, I have plans to meet with someone".
"Heh. Kanzaki-kun, you? That's uncommon".
"I'd like to do what I can to make sure this class rises up to Class A".
"Don't push yourself, ok?".
"Naturally".
Laughing lightly, Kanzaki-kun said that as he left the classroom with his luggage.
"Hey, Ichinose. Can I have a moment?".
After I finished my conversation with Kanzaki-kun, Shibata-kun came close to me.
"What's wrong?".
"No.....what were you talking about with Kanzaki?".
"The future of Class B, I guess. We have to think of a strategy, after all".
During the conversation, it seems Shibata-kun remembered the results of the Paper Shuffle.
"Sorry about the exam. If I had only achieved more marks, we may have been able to win".
"Don't mention it. I'm the same too".
Everyone thinks 'if only I had achieved more marks', it's only natural.
"We've decided to go out and play with everyone after this, but what'll you do?".
Shibata-kun turned back to look and in front of him were Chihiro-chan and Asako-chan's figures.
"That's right. It may be that precisely at times when we've lost, it's a good thing to make merry with everyone".
I consented and decided to call out to everyone left behind in the class. Ultimately, bringing along the members of Class B which had swollen up to 10 people, we headed to Keyaki Mall.
On the way there, we encountered three members of Class A. Sakayanagi-san, Hashimoto-kun and Kamuro-san.
"Good morning, Sakayanagi-san".
It's precisely in times of defeat that I need to keep myself cheerful and optimistic.
"Ara. You're bringing along quite a large crowd of people. It seems quite fun, Ichinose-san".
"No---because we couldn't have our victory celebration I thought we'd have our pity celebration instead".
"So that is the case. To be honest, I was surprised at the passing scores of Class B. If even a single thing had gone wrong, we could have been the ones who lost. Our capabilities were almost equal".
"Thank you. We won't lose next time, you know".
"Yes. I'll be anticipating the next opportunity for our battle. Also, it's good fortune that I was able to meet Ichinose-san here. Truthfully, recently, I have something I'd like to consult Ichinose-san on".
"Consult?".
An unexpected thing came forth from Sakayanagi-san.
"Yes. I'm confronting a problem I cannot solve and I don't know what I should do".
Saying that, she dropped her gaze as she sighed slightly heavily. She's a person who seems like she'd solve everything on her own. That is precisely why this is unexpected.
It was an attitude unlike the Sakayanagi-san who's always brimming with self-confidence. It might be a problem that's just that troublesome.
"And so.....if you wouldn't mind, in the future, would I be able to consult you on that?".
"Umm, are you ok with someone like me?".
"My troubles are something that'll prove difficult to consult with the folks of Class A on. If Ichinose-san doesn't mind then---".
"I don't mind at all. Yeah, I'd like you to contact me anytime. I don't know of how much use I'll be to you though".
"That is fine. I think you'll definitely be of some use to me".
I don't know Sakayanagi-san's contact number. I think it might be better to ask now. Right after I thought that, Sakayanagi-san beams at me and brought out a paper which I believe has her contact number.
"I would feel bad for keeping everyone else waiting by taking up your time. I'll be taking my leave today with this then".
"Ahh, ok. Then I'll send you my contact number later, ok?".
I wonder if she always walks around carrying her contact number in a memorandum. I looked down at the address and number written on that paper and put it inside my pocket. Even as I felt a slight unease, I saw off Sakayanagi-san.
"Hey Ichinose. I think this may be unnecessary but wouldn't it be better for you to be more cautious?".
Saying that, Shibata-san called out to me worriedly. Perhaps Asako-chan and the others are the same too, but it seems like they're cautious about Sakayanagi-san's consultation.
"No need to worry. I'll just be taking her consultation, that's it".
"That may be the case. But it's THAT Sakayanagi, you know?".
I can understand Shibata-kun's worries. But I don't know whether it's a lie or not unless I talk to her. If she really is in trouble I want to help her. I will always do my very best to answer the calls of everyone else no matter who they are. Even if one day, I may end up getting strangled by it all.`,
        }
    },
    {
        id: "ss-y1-v7",
        volumeNumber: "SS",
        title: "Short Stories: Volume 7",
        releaseDateJP: "Oct 25, 2017",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Haruka Hasebe : I, Haruka Hasebe, Don't Plan to Change",
            "Hiyori Shiina : I Wish We Can Become Friends",
            "Airi Sakura : I, Airi Sakura, Have Been Tossed Back and Forth",
            "Sae Chabashira : Invisible Darkness",
            "Mio Ibuki : Ibuki, Ishizaki, Albert, and Shiina's Day"
        ],
        characters: ["Haruka Hasebe", "Hiyori Shiina", "Airi Sakura", "Sae Chabashira", "Mio Ibuki"],
        coverImage: "/assets/y1v7.jpg",
        customChapters: {
            1: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">I, Haruka Hasebe, Don't Plan to Change</h1>
<p class="text-center text-sm text-gray-500 mb-12">Haruka Hasebe SS — Volume 7</p>

After school, the temperature gradually decreased. The Ayanokouji group gathered as usual at the entrance of Keyaki shopping center.
I hurriedly put aside my conversation with Miyacchi and approached Kiyopon.
"Ah, talking about Class C ... I saw it~, president~ you really make people hate you~"
Then I used my elbow to touch his flank.
"What did you see?"
Was it because he didn't realize it, or because he was trying to hide it? Kiyopon's expression didn't change and it was as usual.
"And you ask me what I've seen… it was the scene of Kiyopon having lunch with Shiina from Class C."
I didn't like to beat around the bush, so I launched a frontal attack.
If he was guilty he would show a trace of wavering in his eyes, but despite mentioning Shiina-san's name, Kiyopon's attitude was still the same as usual.
"Airi has been concerned about that all the time, she dropped rice several times while eating."
"Waah, Haruka-chan! We agreed not to say that!"
Airi got angry, her face was blushing.
This frank reaction was really cute, I couldn't help but tease her a bit.
"Is that so? Then what I said earlier didn't count."
Until now, a child that can honesty show her love reaction was very scarce. I really admired her.
Although sometimes there were also girls who showed a calculated love reaction, but I didn't like them.
"Don't tell me you were planning to hurriedly start a romantic relationship before Christmas?"
At this very moment, for the sake of Airi, I had to further interrogate him.
"Kiyotaka, is that true? I had the impression you wouldn't do those vulgar world things…"
"Too naïve, Yukimu, you are too naïve~. Between a man and a woman, it always ends in a romantic emotion in the end. By the way, the term vulgar world is too outdated. Young people nowadays are even more precocious than you imagine."
"What precocious… we are high school first year students."
"You know, high school first year students having their first love is already considered late. When I was in elementary school, some classmates were already in a relationship with middle school students or high school students."
"I-I've never heard of that."
"That's just because Yukimu, you didn't pay attention to your surroundings. There are a lot of girls who have no interest in childish male classmates."
So you boys, you have way too much fantasies about girls. If you want to get a pure and cute girlfriend, you need to pay attention to the surrounding girls like Airi.
"I-I'm sorry, Haruka-chan. That…"
Airi whispered me in a low voice. It looks like she had finally realized I was assisting her.
"Don't worry, don't worry. You need to confirm at all times whether Kiyopon is single. But Airi, you also need to try your best. If he got a girlfriend, then we wouldn't be able to be this blunt, right?"
Digging other people's information, no matter if it was thinking or doing it, Airi would never do it.
"Ok."
Airi nodded with resolution, her face red. Airi being so cute, if it was a normal boy, I guess she would have immediately fallen into the enemy hands. They would normally carry the thought of "let's first go out to see if it works".
Miyachhi and Yukimu had more or less understood the situation, but Kiyopon hadn't become aware of it yet.
I really didn't know what he was thinking.
Forget about it, let's sound him out a bit, with a bit of assist fire.
"…But…"
Until now, I had never been in a relationship with anyone.
But I would be lying if I said I had never had anyone I liked.
When I was in elementary school I had one, in middle school I also had one. They were both 2 years older senpai. Unfortunately, I've never talked to any of them. They were intelligent, handsome, good at sports, those types of all-rounded senpai.
More than liking, using the word longing in order to express my feelings would be more fitting.
I had tried to start a conversation countless of times, but I had never gathered enough courage.
I regretted two times.
That was a past where I couldn't even confirm whether that was love or not.
The next time I harbor these kind of feelings, I don't want to regret it again. I had been thinking like this all the way until now.
… In short, the threshold for me to fall in love was a bit high, or maybe I was basically not interested in ordinary boys. As a living creature, this should be very normal. In brief, my ideal standards were extremely high.
Inside our class, Hirata is the closest to my ideal person. However, I'm pursuing an even higher ideal standard.
Recently, I unexpectedly started to think Kiyopon's qualifications were very good.
Although he was not as good as Yukimu at studies, he also looked like he was not as strong as Miyacchi at fighting.
But –I kept feeling that he was unfathomable.
Probably Yukimu and Miyacchi also started to gradually perceive that.
I remembered my astonishment during the sport festivals. The relay race between Kiyopon and the Student Council President.
Until now, nobody knew Kiyopon could run so fast –because he had a terrible precedent.
If Kiyopon was my ideal man.
At that moment, would I be able to suppress my feelings?
I drove out the bad premonition that floated in my heart.
It was hard to come by forming such an intimate group.
The feeling of wanting to support Airi, who was as cute as a small animal, was also very strong.
And no matter how, this must be me overthinking things.
It was only because Kiyopon was full of mysteries.
I bet that if I was in contact with him a little bit more, I would definitely reach the conclusion of "ah, Kiyopon is also an ordinary boy".
"What's wrong, Haruka-chan?"
"Oh, it's nothing."
I don't plan to change.
I will definitely not change.
Be it the place I'm right now or this feeling. I can't bring whatever unnecessary thing that breaks the equilibrium of this small group.
"I'm sorry, I've disturbed you all because of my keen interest, but
"I'm sorry to disturb you while you got excited by your own account, but there's absolutely no such frivolous thing."
After hearing my conversation with Yukimu, Kiyopon ridiculed us while being unperturbed.
"Is that so? You are not trying to hush up a scandal?"
"Y-you see? Even though I told Haruka-chan that, she didn't believe me!"
Ok. The current situation is fine.
I told my heart this again.
I, Hasebe Haruka, don't plan to change.`,
            2: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">I Wish We Can Become Friends</h1>
<p class="text-center text-sm text-gray-500 mb-12">Hiyori Shiina SS — Volume 7</p>

That day, I went towards the library when the lunch break started.
I had been going to the library several days in a row in order to look for Raymond Chandler's "Farewell, My Lovely". Recently, due to its popularity, it had been hard to borrow that book.
I didn't have anyone I could consider as friend and I had always been alone.
Of course, it's not like I didn't want to make friends, but I had never been good at dealing with people.
"…It's not here."
As soon as I arrived at the mystery novels section, I immediately dropped my shoulders in disappointment.
I'll come back after the classes are finished to check for it, I need to come here before going to the Tea ceremony club.
Although I was quite happy being alone, I also felt loneliness once in a while.
Ryuuen-kun couldn't stand to see me like that so he talked to me, but since there were always a lot of people around him, that made me feel very nervous so I wasn't able to stay together with him.
"Eh?"
There was a book placed in a high place.
Suddenly, I realized that the book didn't match with the classification of the section.
Was the staff member who made a mistake?
"En…"
I extended my hand in order to get it down, but I couldn't reach it.
Incredibly, even though I knew I couldn't reach it, I still tried to do it several times.
"I still can't reach it."
Then, when I was about to arrive at the conclusion that I couldn't reach it.
"I might be doing some unnecessary things…"
A boy said that and helped me draw the book that was classified wrongly.

<img src="/assets/ss/y1v7_ss2_illustration.png" alt="Hiyori Shiina and Ayanokouji in library" class="mx-auto my-8 rounded-lg shadow-lg max-w-md" />

"I recall you are class C's…"
He said that to me and after that, I also remembered him.
"I recall… you are Ayanokouji-kun, right?"
Thinking back, I saw him previously during Ryuuen's introduction.
I remember at that moment they were looking for the person who defeated Ryuuen-kun… that sort of stuff.
Although, as a result, they performed a thorough investigation to Class D, but that has nothing to do with the present situation.
I have never been interested in those things.
"Yeah. For now, I'll give you this."
"Thank you."
I took the book and just in case I confirmed the library card.
As expected, this book should be placed in another section.
"Do you like Bronte's books?"
I opened the book and closed it again. He looked at me as if it was strange.
It looks like he misunderstood me and thought I liked Bronte's books.
"Personally, I neither like nor dislike anything. But the book was in the wrong section, so I just wanted to return it to the right place."
"So it was like that…"
At that moment, I noticed a certain thing.
That was the book Ayanokouji-kun was holding in his hand.
"By the way, the book you have in your hands is... "Farewell, My Lovely" right? It's a masterpiece."
I didn't know why but I thought I'd found a comrade, so I couldn't help but to inquire him.
"I managed to borrow it from a friend today."
"You're very luck then, for some unknown reason, Raymond Chandler is very popular amongst the 2nd-year students and the battle over this book has been continuing for a while. I've also been wanting to read it for a while now, but today I haven't been able to find it here either."
"I'm sorry, I seem to have done something bad. Monopolizing it."
"I don't mind. I've read this book before. And besides, while looking for that book, I was blessed to run into other books. It seems this school's library has a large collection of books. If I were to immerse myself into reading them, I might have graduated before I realized."
"…I see, that might be so"
After that, I unconsciously talked passionately about books with Ayanokouji-kun.
Although I also realized in the middle of the speech that he remained silent, but that was because extremely happy and I did it involuntarily.
Time passed in the blink of an eye.
I felt lonely because the chat was ending and I unknowingly said the words that didn't match my usual self.
"You have probably not eaten lunch yet, right? If it's okay, would you like to have lunch together with me?"
"……Eh"
It was normal to be confused.
After all, not even I expected that I would proactively say those kinds of words.
In addition, there seemed to be a lot of dispute between Class C and Class D.
Even if I also believed I would be rejected, I still continued talking.
"There's no one in Class C who likes reading novels, so I have no one I can talk to"
Therefore, I frankly told him my feelings.
"Wouldn't this cause a lot of problems? Right now Class C is in an uproar by actively looking for someone from Class D, right? I think I'm being counted as one of the many suspects."
"Please don't worry. Last time, I was only helping Ryuuen-kun as a formality. From the start, I was never interested in things like conflicts. Or is it a problem for you to talk to me?"
"No. If there's no problem on your end, I have nothing to say either."
"That's a relief. Because creating cracks between classes over such trivial things makes me unhappy. After all, the best thing is for everybody to live in harmony."
Ayanokouji-kun didn't reveal a disgusted expression, so that made me feel very happy.
"Shall we leave then? Time is flying."
Maybe I can make a friend with similar interests.
A part of me thought these actions were not like me, while the other part was extremely excited towards this development.
I hoped that, in the future, the dispute between classes wouldn't create a crack between us.
I thought this deep in my heart.`,
            3: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">I, Airi Sakura, Have Been Tossed Back and Forth</h1>
<p class="text-center text-sm text-gray-500 mb-12">Airi Sakura SS — Volume 7</p>

"I-I see. So you were not having a date."
Hahaha, great…!
My heart felt at ease, I exhaled in relief.
"But I totally didn't get that impression, and no matter how many times she asked me I wouldn't be able to answer. Honestly, it's really unbearable."
Ever since I saw Kiyotaka-kun and Shiina-san having lunch together, my heart has been beating very fast.
If she was Kiyotaka-kun's girlfriend – my heart would probably stop beating.
"You're very naïve, Airi. You need to confirm it carefully, you know?"
Haruka-chan whispered in my ears in a low voice.
"True, saying Shiina was Kiyopon's girlfriend was going a bit too far, but the probabilities of both liking each other or Kiyopon harboring feelings towards the other part exist."
"Eeeeeeh!?"
B-but, if that were the case, perhaps it could be…
"Right? That's why you need to thoroughly investigate in advance."
"Saying this, Haruka-chan started talking to Kiyotaka-kun.
"But I feel like you looked rather happy back then, weren't you?"
Just like that. Haruka-chan asked the questions I wanted to ask in my place.
"I couldn't show a dislike face either. After all, she is also a first year like me."
Yes, yes. It was just that, right? Because Kiyotaka-kun is very kind-hearted, that's why he couldn't ignore someone if they talked to him.
"Leaving aside the love Haruka said, I'm a bit concerned about the person Class C is looking for. She apologized for eavesdropping me, but Sudo also seemed to discussed with Horikita about being bothered constantly."
Realizing the topic had shifted from love to a more serious topic, I felt relieved.
"Yes. But it should be half true."
"T-that high!?"
"Even if Kiyopon said he couldn't show a disgusted expression, the fact is that he had lunch with a girl, you know? I actually think it's better to be suspect a bit."
"Uuuuh. So it was like that after all…?"

<img src="/assets/ss/y1v7_ss3_illustration.png" alt="Airi Sakura and Haruka Hasebe in winter clothes" class="mx-auto my-8 rounded-lg shadow-lg max-w-md" />

"Ah, aren't you overthinking? Perhaps Kiyopon treats everybody like that."
"Yes, yes. It must be that."
"But~ aren't boys all like that~?"
"R-r-r-really!?"
I, Sakura Airi, am always been tossed back and forth by my own heart.`,
            4: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Invisible Darkness</h1>
<p class="text-center text-sm text-gray-500 mb-12">Sae Chabashira SS — Volume 7</p>

Ayanokouji had contacted with his father.
I was walking in the corridor while my heart was trying to bear with that carefully.
"…What do you mean by you have realized everything?"
Even if I was unclear of the situation, I still showed a calm teacher appearance.
"Chabashira-sensei. I'm saying that everything you've told me are basically lies."
"What are you talking about?"
Not good. I can't treat the boy in front of my eyes as a normal high school student.
"That man has never contacted with you, Chabashira-sensei. Of course, he also didn't have you force me to quit school."
"No, your father asked me for help. In fact, just like what I told you, I've been constantly trying to get you expelled."
Impatience appeared in my heart and Ayanokouji saw through me.
"Stop trying to deceive both of us. Chairman Sakayanagi has told me everything –he told my situation to you the instant my enrollment was decided."
I wanted to hide that truth, but Ayanokouji pointed that out.
In that instant, I relaxed.
"…The chairman told you everything?"
I carelessly asked him the question I had in my mind.
Even if I knew Director General would never act hastily, I still made a mistake.
I felt Ayanokouji in an instant smiled a bit.
"Ayanokouji, were you probing me?"
"Yes. The chairman never told me anything about Chabashira-sensei. But I was certain it was related to you, this has become very clear."
I knew I was going to gradually be dominated here. Even though I only learned about him growing up in a special environment, but what in the world did they do to teach such a strange kid?
I had seen a lot of excellent students during my career. But Ayanokouji was different to them, he was unknown to me.
Ayanokouji revealed his speculations, as if he wanted to unmask all the lies I had told him until now.
What should I do? What should I do in order to use this child?
If only I could step over this obstacle, I could probably be promoted to Class A.
And after that I could finally cover my past.
That's why --- no matter what methods I have to use, I must use Ayanokouji.
As long as I can get ahold of something decisive, I can make Ayanokouji be unable to decline.
I've been fighting with the darkness in my heart every day.`,
            5: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Ibuki, Ishizaki, Albert, and Shiina's Day</h1>
<p class="text-center text-sm text-gray-500 mb-12">Mio Ibuki SS — Volume 7</p>

This happened after the second term ended, in the first day of winter vacation. At the same time, it was two days after that "Incident" happened.
That day for Ibuki Mio was an extremely boring day.
Under the cold air, I looked at my reddened fists while heaving a sigh.
"What am I doing…?"
The breath I exhaled slowly dissipated in front of my eyes.
During the first day of the winter vacation, I didn't know what I was thinking, that I directly went to the boulevard that lead to the school after waking up.
After that I beat up Ryuuen and following that, I should've gone to the dorms in order to warm myself.
I thought this was enough to make me satisfied.
However, I didn't know why but I was still staying in the boulevard.
"Aha. It's so cold."
Being alone, I started to meditate.
About what happened yesterday.
The incident of that moment.
All these disturbances happening in quick succession, I could only believe we were possessed by something.
All the things that happened until now, that event.
Don't tell me I--
No, including Ryuuen, everything that happened was in that man's expectations.
In retrospect, since I entered this school, there hadn't been a peaceful day and there had been a lot of commotions.
Right after being assigned to Class C, Ryuuen Kakeru started to control the class.
Of course, the people in the class didn't acknowledge him at first and defied him.
Ishizaki and Komiya didn't need to be said, even Kaneda didn't acknowledge Ryuuen's attitude of using power to control.
Ryuuen, with that kind of attitude, would naturally be alienated and suppressed by class C.
It even gave people the feeling that abuse would appear inside the class.
However, that guy did a frontal resistance. He didn't even care about the existence of the surveillance cameras and school rules and sent Ishizaki and the others flying --Honestly, I was shocked at that moment.
But Ryuuen had understood from the very beginning. The conflicts within the class couldn't be reported to the school. Because that would be the same to shooting oneself in the foot.
Ryuuen repeated those indiscriminate things multiple times and at the same time he saw through the closest point to the limits of the rules.
In fact, until yesterday, Ryuuen had used a lot of methods to lead class C.
Those thoughts and plots of his brought him "pride".
In his own wishful thinking, he believed he would never lose if there were rule violations.
That incident was bound to happen, that's why it happened.
That defeat had its origins in Class C not being able to stop the student Ryuuen Kakeru.
Although all of this happening to the horrid Ryuuen had nothing to do with me, I didn't know why I felt anger.
I didn't know the reason why I felt anger.
Even if I didn't think about anything, I couldn't wipe this anger out from me.
What is making me feel irritated?
"Ah, really! Don't think about it."
Why do I have to waste the winter holiday's time to ponder over those things?
Before I noticed, the boulevard that led to the school building that was welcoming the winter vacation was overflowing with students wearing casual clothes.
They were probably preparing to go to the Keyaki mall to enjoy the winter vacation.
No matter what, that was unrelated to me. There didn't exist anyone that could be considered my friend.
"Too slow…"
I had already been waiting for 30 minutes. My patience was already at its limit, so I took out my phone to try to urge the other person.
"Yo, Ibuki. I've kept you waiting."
Before I called him, the target approached me.
Ishizaki said that and started a conversation with me. Standing beside him was Albert.
"How long did you want me to wait?"
"I'm sorry. We were also struggling a bit."
"…is that so?"
"Anyways, it could be considered a success. But Ryuuen-san is very mad."
"I guess so. Your injuries have also increased."
Ishizaki must have been hit strongly in the face by him, it looked very painful and he was caressing his reddened face.
However, his face didn't show anger or regret, he looked very cheerful.
"You've been beaten up and yet you look so pleased, are you a masochist?"
"Don't joke around. I'm just very happy, that's all."
Eh…isn't that just being a masochist?
Although I thought that, Ishizaki's eyes were flickering and he looked really satisfied.
"You've been suppressed by Ryuuen until now, shouldn't you be resentful towards him?"
I asked him the doubt I felt with another meaning.
Ishizaki had been regularly blamed for his incompetence under Ryuuen's dictatorship.
Adding punishment to that, the person who got beaten up the most was Ishizaki.
"To tell the truth, regarding that, I'm certainly feeling dissatisfied… but."
"What?"
"Nothing. Now I already acknowledge him, or perhaps I should say I respect him."
Was it because this guy got beaten so many times that his brain become weird? To go as far as to acknowledge that kind to person?
And respect him?
"In my eyes he's just a loser that got too carried away."
"Don't say such things about Ryuuen-san."
Uwa, so disgusting. He probably got beaten up too many times that his brain has become weird.
But from Albert, who was standing behind Ishizaki, I could also feel a similar atmosphere than Ishizaki's coming through his sunglasses.
"…Don't tell me, you also think in the same way?"
I faced Albert to ask him and he nodded slightly his head without saying anything.
"Haa. I can't understand it. What's so good in that guy?"
Even if I asked this, Albertdidn't answer me.
"If you took it seriously, even if the adversary was Ryuuen, you could also win."
If it was a normal quarrel, Albert would have an overwhelming advantage.
Actually, Albert obtained victory in three of the three direct confrontations in the past.
Only that during the time I wasn't aware, those two were constantly repeating the fight, and in the end, Albert became one of Ryuuen's generals. I understood the situation to some extent, but that still was really inconceivable.
However, Ishizaki seemed to understand Albert.
"Albert unexpectedly hates fights."
That must be something that men mutually understand, Ishizaki laughed while poking Albert's flank.
"You have that body and yet you hate fights?"
"Apart from the ones Ryuuen-san instructed him to beat, have you ever seen Albert beating someone?"
"… Probably not. No, but, all the more reason then."
As long as he didn't follow Ryuuen, he wouldn't need to beat anyone.
"Ryuuen-san let him experience what is manliness."
Not knowing why, Ishizaki said those words I failed to understand and slapped Albert's back.
"Aah I see, forget about it. I shouldn't have hoped for a serious reason."
In short, I had understood the situation from Ishizaki's words, so it was time to go back.
Today I had been standing outside for a lot of hours, I was almost frozen to death.
"I'm going back."
I said this, but I didn't know why, Ishizaki peeped at me with a serious face.
I couldn't help but want to kick him flying, but I managed to restrain myself.
"Ibuki, if you don't mind, do you want to come with us for a tea?"
"…What?"
What did this person say just now?
I didn't manage to understand his words, so I stayed stiffly. Ishizaki asked again.
"Let's go drink tea."
Don't tell me this guy was inviting me?
The idiot Ishizaki was inviting me?
The moment I was pondering about this, Ishizaki denied that while being flustered.
"No, I'll say it in advance, I don't have any weird thoughts. I'm very normal, I'm more concerned about Ryuuen-san? Ah, if I say it like that it becomes weirder. In short, it's not like that. And Albert is coming with us."
What kind of explanation was that?
But his words didn't seem to be lies.
Even though Ishizaki was rude and violent (although I don't have the right to say that about others), his personality was very honest.
I understood Albert also wanted to drink tea with me --although I didn't know why he wanted to drink tea with me.
Those kind of things had never happened until now, where did this sudden impulse come from?
Or was it because yesterday's events left them a deep impression?
"If anything happens, I will also knock you down, there's no problem in that."
"I'm telling you I don't have that kind of intention. I'll definitely not have those kinds of thoughts towards you. Definitely not."
Being directly rejected like this, why did it make me feel a bit in a bad mood?
"To sum it up, you will accompany us for a bit. After all, you don't have anything planned for winter vacation, right?"
"…I understand."
Although I was not willing, my schedule for winter holidays was completely in blank.
In addition, since I had been standing outside for so long, my hands were almost frozen.
"If you want to go, then hurry up."
"Albert, do you also want to come?"
Facing Ishizaki, who was inquiring him, Albert calmly nodded his head.
1
During the first day of the winter vacation, there were students everywhere in Keyaki mall.
To the point that I couldn't help but regret that I was too hasty to come here.
"Returning to our main topic, I didn't expect you would stay on our side."
"What are you saying?"
"I'm talking about Ryuuen-san's issue. I thought you hated him."
"Ha? It's clear that I hate him."
What kind of misinterpretation led him to that conclusion?
"Then, why did you contact with us today?"
"That's---"
It was just that it put me in a bad mood that that guy fled without permission.
But Ishizaki and the others would certainly not be able to understand my feelings.
Since I entered this school until now, I had never liked Ryuuen. It was only that I acknowledged his abilities in a certain extent.
That was why I was feeling irritated because of the things that happened in these 2 days.
"Anyways, it has nothing to do with you."
"Well that's true."
It looked like the person who asked didn't plan to inquire any further.
Ishizaki munched the ice cubes while drinking ice coffee with lots of gomme syrup in it.
"Why are you drinking ice coffee during this season?"
"There's nothing bad about that. It's just because it's very cold that's why drinking cold drinks will be more delicious."
Of course, Albert and I ordered hot drinks.
"Anyway, what's going to happen when the third term starts? Iya, really."
Ishizaki took the initiative, and after finishing the drink his body was trembling. It looked like the ice cubes were very cold. He's stupid.
"How I would know those kind of things."
"But… we need to think about that, don't we?"
What exactly did Ishizaki want me to say?
Even if we didn't think about that, it was very clear.
"Even if I think about that, Ryuuen's decision won't change. You are free to fret by your own accord, but you're probably wasting your time."
"Uh…"
I used an intense tone to say the strict words.
I knew it. He probably wanted me to assist him, but it was really a waste of time.
Although I thought they were thinking about indecent things, it was that after all.
"But."
"No buts."
"Ryuuen-san's thing is like this, Class D's--"
"Stop."
I used the most straightforward tone I had used today to stop Ishizaki and glared at him.
"Listen carefully. I forbid any topic related to "them". If you can't respect that, I will be leaving."
Since I told him that, Ishizaki had no choice but to admit defeat.
"I understand. I really understand."
Ishizaki, in a panic, tried to ease my mood.
After all, I didn't know why I had to discuss those things with these two.
"I'm leaving once I've finished this drink."
There was still half of the drink left. I should drink it a bit faster.
"I'm not going to talk about that, do you really hate that topic?"
"I hate that. And after yesterday, the number of people I hate has increased to 2".
That's all.
"Good morning Ibuki-san."
When we were having this tea party without chatting too much, Shiina came to us.
She had her schoolbag and a drink in her hands.
"What?"
When I replied her indistinctly, Shiina smiled and said.
"I started a conversation with you by accident since I was thinking that this combination is a rare sight. Isn't it?"
"Is it? We are frequently together."
"Not true."
I hated being considered by others that "I was always together with Ishizaki", so I replied immediately."
"May I join you?"
In the exams that needed to use the brain, she could be considered Class C's treasure. Together with Kaneda, they had been asked for help by Ryuuen multiple times. But at the same time, she normally didn't have any contact with us.
"There's no problem with her joining, right?"
Because she was a student Ryuuen acknowledged, Ishizaki and Albert easily accepted her.
"Then, excuse me for disturbing."
"Where did you go by wearing the school uniform?"
"I'm from the Tea ceremony club. During winter holidays we also have to continue with the club activities."
"Tea ceremony club… what do you do in there?"
"We do a lot of things. Learning etiquette, how to handle the tools or receiving guidance.
"Ha, so there are still people that want to do those kinds of things."
Ishizaki interrupted his conversation with Shiina, and said that while feeling bored.
Although I was completely unaware of it, from Shiina I heard that there were very few members in the tea ceremony club.
"If you don't mind, do you want to try joining the club?"
"I'm not joining. I hate club activities."
Ishizaki started chewing the remaining half of the ice cubes in the cup.
"I'm changing the topic a bit… actually, I saw Ryuuen-kun this morning."
Shiina also mentioned Ryuuen.
"Since he was wearing the school uniform, I was a bit concerned."
"Don't worry, there's nothing."
"Is that so. I feel at ease after hearing your words."
With these members, if that guy wasn't present, they would naturally mention him.
I was planning to leave silently, but Albert grabbed my shoulder.
"What are you doing, it doesn't matter if I go back. There's also nothing to say."
Facing me, who was saying these words, Albert silently pointed at the drinks.
"…Do you want me to not leave until I've finished the drink?"
It seemed that since I had said I would be leaving after I finished drinking, I had no choice but to do so.
Right now I was a bit in a bad mood, so I planned to just finish it.
"So hot."
"Ara ara, don't force yourself. I remember Ibuki-san can't handle hot food, right?"
"So noisy. Me being able to handle hot food or not has nothing to do with you."
"But we are classmates."
Even if we were classmates, what about it?
Right now, asking for that kind of stuff in Class C was cruel.
"Starting the third term we will drop to Class D. The battle has already ended."
"Not necessarily, we Class C will definitely rise again."
Shiina said with a serious face the words that made people feel uncomfortable.
"What's that? Do you have any basis? Or do you want to lead the class?"
"Of course I will provide assistance to the class. After that, we will gather everybody's strength."
Even though I had thought this child always said things as if she was missing something, but I never expected it would be to such extent.
What Class C lacked the most was unity -- that is, helping each other.
That was something that didn't exist in a Class C that Ryuuen led alone until now.
Even Shiina should have understood those things.
"We may be late by a lot compared to others. But for that reason, from now on we need to help each other in order to be promoted to higher classes, don't you agree?"
"I see. Then do your best. I'm not participating."
I really wanted to leave earlier, but I still hadn't finished the drink yet.
If I had known, I wouldn't have ordered a hot drink and should've chosen a cold drink instead.
"Why are you so irritated? Even if you are usually like this…"
"You too, do you plan to have a fight with me?"
"I don't plan to do that."
"By the way Iwasaki-kun, you look like you've suffered a lot of injuries."
"So you've only realized now. And I'm not called Iwasaki, but Ishizaki."
"Haha, I'm just joking. I remember clearly all the classmate's names."
It looked like the reason Shiina, who usually didn't interact with us, didn't approach us because of Ryuuen not being here.
It was because she saw Ishizaki and Albert's injuries and she was concerned about the specific details.
"How did you get those injuries?"
"Well, some stuff happened."
"Some stuff?"
"Actually, yesterday-- "
I believed Ishizaki would say unnecessary things so I unwillingly joined the conversation.
"Because he had differences with Ryuuen about the policies and had an argument. After that he got beaten up."
It's like that, right? – I glared like this at Ishizaki and he nodded in agreement."
"Difference in policies… that's a rare sight."
Since Ishizaki usually was stuck together with Ryuuen, it was difficult to imagine those things happening.
"Don't tell me you had a fight with Ryuuen-kun?"
That was ridiculing Ryuuen while he was not being here.
Albert realized what I meant, faced Shiina and nodded.
"I think sometimes fighting is good, but please make up as soon as possible. If you need it, I can also help you."
"What can you do?"
"I will request Ryuuen-kun and tell him "please stop fighting""
It seemed that she didn't intend to do anything special and directly convey that to Ryuuen.
With her like that, it was really fortunate that she didn't get beaten by Ryuuen until now.
However, Shiina was not good at sports and disliked violent conducts, so Ryuuen wouldn't take it to the heart.
After all, she had never done anything that went against Ryuuen's policies, as it should be.
"Fu, I've finished my drink. Bye."
"Are you going back now?"
"I've kept company to you to this extent, it should be enough already."
"Ah, by the way, Ibuki-san. I've heard that interesting movies are going to be released soon. If you don't mind, do you want to watch them together?"
"I'm not going."
Even if I wanted to go, I would go alone.
"I see… it's a pity."
I picked up the empty cup and left the seat.
If I continued to frolic with these guys, I was afraid I would get hives.
Moreover--
Right now, I had never been so angry to myself.
That's right.
I had finally realized why I had been so irritated in these past two days.
It wasn't Ryuuen's fault, nor Ishizaki nor Albert's fault. And of course, it wasn't related to the Shiina who appeared by chance.
I couldn't forgive myself.
That was the reason of my irritation.
If I was a bit more reliable, things wouldn't have developed in a way that made Class C be in such a dire situation.
Ryuuen Kakeru wouldn't have made a mistake as the leader.
It was because I arrived at this conclusion.
If I kept staying in that place, I would have continued losing my temper.
That's why I wanted to hurry up and be alone.
"I say, Ibuki."
Ishizaki called me, who wanted to escape.
"What else do you want??"
"Don't you just shoulder everything alone, you should also consult with us."
"Ha--?"
I inadvertently made a dry laugh sound.
"You're kidding. Who would look for you to discuss things? And there's nothing to talk about."
A group of people that normally were very stupid, but why were they so sharp only in times like this?
"Ibuki-san, let's talk again together next time."
Shiina also said that, and the silent Albert stared at me.
That really looked as if those 3 people invited me in order to cheer me up.
In retrospect, no matter if it was Ishizaki or Albert who invited me to drink tea, or Shiina after seeing the group composition, the first member they talked to was always me.
What is this.
I had never hoped for these kind of things.
Not being able to endure that scene, I started walking.
I didn't hope for that kind of warm environment.
I thought today was an extremely boring day and at the same time it was a no way out day.
But, in reality, the "real no way out day" would come just a bit later.`,
        }
    },

    {
        id: "ss-y1-v7.5",
        volumeNumber: "SS",
        title: "Short Stories: Volume 7.5",
        releaseDateJP: "Jan 25, 2018",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Kei Karuizawa : Realised Feelings",
            "Kei Karuizawa : The Cupid Karuizawa",
            "Mio Ibuki : Conflict of the Mind",
            "Kakeru Ryūen : A Sign of Battle",
            "Kei Karuizawa : A New Experience"
        ],
        characters: ["Kei Karuizawa", "Mio Ibuki", "Kakeru Ryūen"],
        coverImage: "/assets/y1v7.5.jpg",
        inProgress: false,

        customChapters: {
            1: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Realised Feelings</h1>
<p class="text-center text-sm text-gray-500 mb-12">Karuizawa Kei SS — Volume 7.5</p>

<p>I have made a big decision. Even I think so myself. I can no longer take back the words I have said.</p>
<p>"I'm going to break up with Yousuke-kun".</p>
<p>That was, for Karuizawa Kei, the greatest extreme, an option that would never have been chosen normally.</p>
<p>"I'm sure everyone in the class will be surprised when the 3rd semester starts".</p>
<p>Feeling restless like that, I silently whispered those words.</p>
<p>"I suppose that's true".</p>
<p>It's very likely that almost immediately, a battle between girls over Yousuke-kun will be expected to begin.</p>
<p>"That guy, do you think he'll go out with someone else?".</p>
<p>"Even if you ask me that, I don't know Yousu.........no, it's not like I know Hirata-kun that well either. But in some places, like Kiyotaka, he can be cool. As long as he's pretending to go out with me, he won't be able to date another girl too, and he might not even be that interested in romance".</p>
<p>Even though it was a lie, we'll still be breaking up. If I mess it up and remain close to him as usual, I'd feel bad for the other girls too. In order to get into the habit from now on, I've decided to no longer call him 'Yousuke-kun' but rather back to 'Hirata-kun'.</p>
<p>"Even though you're going back to calling him Hirata, you're still calling me like this?".</p>
<p>Before I had realized it, I had unconsciously started calling Kiyotaka by his first name. By going back to calling Hirata-kun like that, Kiyotaka threw an obvious question like that at me.</p>
<p>"Ahh........I see. Is it better if I change it back?".</p>
<p>"That's not what I meant. You're free to call me whatever you like".</p>
<p>After saying that, a short pause, then Kiyotaka continued.</p>
<p>"This might be a good opportunity".</p>
<p>Towards being continued to be called by his first name, Kiyotaka did not show any signs of disapproval. And then, a moment that felt like destiny to me, suddenly occurred.</p>
<p>"I'll also just be calling you 'Kei' then".</p>
<p>I'll also just be calling you 'Kei' then. I'll also just be calling you 'Kei' then. I'll also just be calling you 'Kei' then.</p>
<p>Those words reverberated and repeated inside my heart like sacred words.</p>
<p>Hyuruhyuruhyuru~. Just like that, a single arrow fell from the skies. That was, the arrow that was aimed towards Kiyotaka from Satou-san. That arrow was supposed to have flown off somewhere after being released. And that</p>
<p>"Tauwa!".</p>
<p>Of all things, it pierced my heart.</p>
<p>".....tauwa?".</p>
<p>Kiyotaka heard and repeated the mysterious word that flew out of my guts.</p>
<p>"N-n-n-n-nothing! Why is Kiyotaka also calling me by my first name?".</p>
<p>"If one side uses the surname and the other side uses the first name, it wouldn't feel right".</p>
<p>No, no, no. That might be so but! You didn't give any prior notice or anything!</p>
<p>My throbbing, no, soaring heartbeat continued to beat on and on. The sound of that was immense to the point I wondered if Kiyotaka would end up hearing it. And without even minding the panicking me, Kiyotaka continued to talk.</p>
<p>"By the way......just to get things straight. The original proposer that set up the double date was not you, but Satou right?".</p>
<p>As expected, I should say. Kiyotaka was already aware of the double date trick. Desperately suppressing my feelings, I answered the question.</p>
<p>"W-What's that supposed to mean, set up?".</p>
<p>Just in case, I'll try and deceive him.</p>
<p>"Your acting was pretty much spot on but here and there, Satou's actions were strange you see".</p>
<p>"Ahh---....as I thought you realized it? I also thought Satou-san was being suspicious".</p>
<p>My heart had somehow managed to calm down. Fuu, fuu. It should be fine now.</p>
<p>"That's right. I also have a Christmas present for you".</p>
<p>"Ehh? No kidding?".</p>
<p>As I thought that, my heart once again leaped up and soared.</p>
<p>"I lied".</p>
<p>"Huh? You want to get beaten up?".</p>
<p>After the sudden climb came the nosedive, and I glared at Kiyotaka.</p>
<p>Could it be, am I just being teased?</p>
<p>"More precisely, it's just a normal present. I think it may be an unnecessary product for you but".</p>
<p>".....wait, what's up with that pharmacy bag? Are you mocking me?".</p>
<p>Even if he gives me such a thing, I'm not one bit happy. As I thought that, I received it, and checked the contents. The bag is what it is but the truth is the contents were---I was expecting something like that. What came out from inside it was.</p>
<p>"Cold medicine and a receipt........?".</p>
<p>Such fleeting expectations were betrayed simply to the point it was almost disappointing. But, I realized something strange. Why give me this?</p>
<p>"Don't mind the receipt, please throw it away".</p>
<p>But by hearing that, it only made me more unnecessarily curious. I pored over the details on the receipt. And then realized my question.</p>
<p>"Hey, this receipt has 10:55 am on the 23rd written on it though.....".</p>
<p>It's not something that was bought today. Normally cold medicine is something you buy only when you need it right away.</p>
<p>"On my way back after buying it, I saw you and Satou together at Keyaki Mall. That's how I realized that the double date was a set up from a relatively early stage. I had thought your health would have deteriorated, but it seems that prediction was spectacularly off the mark".</p>
<p>"So.....that means the reason you didn't call me out of worry was.....".</p>
<p>Does it mean he wasn't being cold towards me, or had forgotten about me?</p>
<p>"You weren't wearing a mask either, even from a distance I could see that you were healthy".</p>
<p>W-what's that mean? I didn't hear anything about that!</p>
<p>"I-If you're this worried about me.....instead of doing things in a roundabout way like this, do things like visiting me earlier or at least giving me a call. You could have confirmed it that way".</p>
<p>"In such a conspicuous dorm, I can't afford to directly visit your room. Contacting you via phone would be an effective means of doing so, but I also took into account that you'd act tough in that case. Because you hate showing your weakness after all".</p>
<p>What, what, what, what, what is that supposed to mean! I felt the sudden urge to hide my face which was rapidly becoming red.</p>
<p>That day, ever since that incident on the rooftop, that means Kiyotaka's always been worried about me!</p>
<p>Aaaaaaaaaaaaa, mou, aaaaaaaaaa! Inside my heart there was another me who was squealing while running around. There's no more mistaking it. I just have to admit it now. Seriously, seriously, seriously, my heart's seriously been stolen away. The arrow which had pierced my heart. The arrow of love which I could no longer take out. Is this even possible? Is it even fine for me to fall in love with someone who's been partly bullying me? But it's already too late. The power of this arrow is tremendous.</p>
<p>I have, I have towards Kiyotaka-----really, seriously, I've fallen in love with him.</p>`,
            2: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">The Cupid Karuizawa</h1>
<p class="text-center text-sm text-gray-500 mb-12">Karuizawa Kei SS — Volume 7.5</p>

<p>At last it's the 25th, and the double date started. I, in order to faithfully carry out Satou-san's request, in order for a one hit kill, took into my hands the arrow of love. This arrow is a magical arrow which causes anyone it hits to fall in love. Satou-san beside me, in an attempt to get along with Kiyotaka, is coming into contact with him with a sense of distance similar to that of lovers. Looking at those two, I decided to call out to them like a meddlesome lady from the neighborhood.</p>
<p>"Heh....you two are looking pretty good aren't you?".</p>
<p>"R-Really?".</p>
<p>"No matter how you look at it, you guys look like a couple affectionately spending Christmas together, that sort of feeling?".</p>
<p>Firstly I need to tell Kiyotaka that they make a natural matchup. Kiyotaka, who usually thinks of things I wouldn't even be able to comprehend, in regards to romance alone, he doesn't seem like a professional.</p>
<p>He should have no idea how his surroundings view him.</p>
<p>"Hehehe. Isn't it embarrassing, Ayanokouji-kun? They're saying we look like a couple".</p>
<p>".....I suppose so".</p>
<p>Towards those words from Satou-san, Kiyotaka disinterestedly answers. What's 'I suppose so' supposed to mean. Aren't you supposed to be happy deep down inside? Zuzuzu, like that inside me, something dark whispers.</p>
<p>Ahh, no good, no good. The cupid of love does not think such dark thoughts.</p>
<p>"But still, the two of you seriously aren't going out with each other? Could it be the truth is you're already going out~".</p>
<p>Killing my own feelings, I pressed them for an answer vigorously to stir them up.</p>
<p>"N-N-No. Not at all. We still aren't in that kind of relationship!".</p>
<p>Even though she was desperately denying it, Satou-san also checked Kiyotaka's state with a side glance. If he seems happy, it meant it would be material for her to decide that they have chemistry together.</p>
<p>However on the contrary, this blockhead, no matter what's said, never once changed the serious look on his face. He doesn't laugh and neither does he get angry, that makes judgment difficult.</p>
<p>"Really? If you're hiding something you'd better tell me right now, ok?".</p>
<p>Even when I attack repeatedly like that, in response, Kiyotaka gave a reply that was close to outright ignoring us.</p>
<p>I wonder if it was a bad idea to say it in a roundabout manner.</p>
<p>"Speaking of which, Satou-san, you don't have a boyfriend yet right?".</p>
<p>"Y-Yeah".</p>
<p>Since it's come to this, I tried expressing it fairly straightforwardly and yet Kiyotaka still didn't have a good reaction to it. More like, he doesn't even seem to be paying attention to my words. It's almost like he has no awareness that he's on a date. The double date has just begun, maybe we came on too strong with the opening.....</p>
<p>"We'll be enjoying this on our own so the two of you, don't mind us ok?".</p>
<p>For now I decided to leave Satou-san and Kiyotaka to act independently. As I talked with Yousuke-kun, I eavesdropped on the conversation of those two from beside them. By the way, I waited for a fairly long time but the conversation between those two did not start up at all. It may be that Satou-san is also getting nervous, but she did not seem to be able to carve out a topic to discuss. Or it could be that she's expecting the conversation to come from Kiyotaka and is waiting for it. If that's the case it's probably hopeless.</p>
<p>Kiyotaka doesn't seem to have any intention of changing from his usual, sparse self. Ahh mou! That means there's nothing left but for me to do something about it.</p>
<p>I directed a hopeless gaze towards Kiyotaka. And when I did, it seems my feelings were delivered to him as my gaze immediately met Kiyotaka's.</p>
<p>"You're being rather quiet. So does this mean you're going to keep acting quiet?".</p>
<p>"It's not like I'm acting or anything. I'm not used to dates, I just don't understand the lifestyle of those with topics to discuss".</p>
<p>It's probably that sort of thing.</p>
<p>I felt like from our gaze, I was able to read such feelings from Kiyotaka.</p>
<p>"Satou-san, isn't it just that Ayanokouji-kun doesn't know what to talk about?".</p>
<p>The arrow of love I had let loose. If it hits, it's a magical arrow that will cause one to fall in love. This one arrow, one way or another I'll make sure to hit Kiyotaka with it.</p>`,
            3: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Conflict of the Mind</h1>
<p class="text-center text-sm text-gray-500 mb-12">Mio Ibuki SS — Volume 7.5</p>

<p>The 23rd which welcomed the first day of the winter vacation. I came to the movie theater, ignoring the couples who were being festive due to Christmas being at hand. Early in the morning, when I saw off Ryuuen who was intending on quitting school, I was planning on staying in my room for the whole day. But just a while ago, after receiving mail from that idiot Ishizaki, I changed my mind.</p>
<p>"Ryuuen-san changed his mind!".</p>
<p>Along with such a mail, them bragging about how their persuasion had worked was also written. But that's not the case. That guy, Ryuuen had hardened his resolve to quit school. It wasn't a situation where mere persuasion from Ishizaki and the others was going to make him change his mind. In other words........there were other factors besides that.</p>
<p>Something that would make him change his mind. That is probably, something related to Class D's Ayanokouji Kiyotaka. My intuition is telling me that. If I'm in my room, it becomes obvious that I end up anxiously thinking about that, so I desired a time where I could focus on something else entirely.</p>
<p>Remembering that there was a movie I had not seen yet which was almost nearing the end of its screening period, I made reservations for a seat and headed for Keyaki Mall. Just before the screening began, inside the building that was engulfed in darkness, the me who had arrived with that timing, upon reaching my seat, casually rested my arm on the empty armrest. Feeling a sensation of rubbing against cloth, I turned to glance at it.</p>
<p>That was a mistake.</p>
<p>"Geh".</p>
<p>I ended up meeting with the number 1 person I did not want to meet right now in this unexpected place. It was the Ayanokouji who had been occupying my thoughts. He's the man who puts on a dumb face yet is the one manipulating the class from behind the scenes. He's not just smart, he's a surreal existence whose fighting skills are far beyond that of Ryuuen and Albert.</p>
<p>"It's a coincidence, huh".</p>
<p>He calls out to me like that.</p>
<p>I really don't want such a coincidental meeting. I felt nauseous and turned my gaze away. Ahh mou, why do I have to come across Ayanokouji? On top of that, he's also alone.</p>
<p>Back during the summer vacation, I remembered the time when I was trapped with Ayanokouji inside an elevator. Ever since then, I had been dancing in the palm of his head, and remembering that, frustration oozes out of me. Not knowing a thing, writing him off as an idiotic student of Class D. In a sense, this situation is similar to that situation back then.</p>
<p>It feels like the two of us are trapped inside a sealed box. Desperately trying to clear up the darkness, I turned my gaze towards the movie that was being screened. But the contents of it barely came into my mind. I did think about just standing up from my seat and leaving, but that would just make it look like I'm running away from him. That alone, I cannot stand. As soon as the movie ends, I'll leave. I made that resolve. As it stands, without anything happening, such a wish of mine, right after this, would collapse at once.</p>`,
            4: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">A Sign of Battle</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kakeru Ryūen SS — Volume 7.5</p>

<p>At night, the New Year's Eve bell declaring the coming of the New Year rang for the 108th time on the television. Apparently it's to cleanse all worldly desires away and to welcome the new year with a purified body. It's a silly story. People won't lose their worldly desires from a farce like this. The more you suppress it, avarice from the core is something that only swells up. There was an incoming call to me from an unregistered, unfamiliar number. Feeling like killing boredom, without thinking anything, I silently pressed the phone's call button.</p>
<p>"Happy New Year. Were you awake?".</p>
<p>A woman's voice. Naturally, a voice I'm familiar with.</p>
<p>"To think you'd call me this early into the new year, Sakayanagi".</p>
<p>"If you wouldn't mind, may I have a bit of your time from now? I'd like to meet you in person".</p>
<p>"Are you asking me out on a date at a time like this? Kuku, it's not like I won't answer you though. Come directly to my room then".</p>
<p>"Then, in 30 minutes, I shall be waiting by the vending machine outside the dorm".</p>
<p>After ignoring my invitation, she sure is continuing to onesidedly talk.</p>
<p>"Fine, I was free either way".</p>
<p>Having finished our brief conversation, I threw my phone onto my bed. There's no need to honestly respond to her but this time, there are some circumstances. Either way, I already understand the contents of what she wants to say, so after confirming that the promised time has passed, I left my room.</p>
<p>Then, slowly, I left the lobby of the dormitory and immediately headed for the vending machine. As I carefreely arrived at the promised location, that woman immediately called out to me. As always, she was carrying her cane around as she welcomed me.</p>
<p>"You're 10 minutes late. I believe I've given you 30 minutes to prepare though".</p>
<p>She spoke that fact calmly without any happiness or anger.</p>
<p>"Kuku. I could have just ignored you though".</p>
<p>"Well, this is fine".</p>
<p>10 minutes was being too lenient. I should have kept her waiting longer in this cold weather.</p>
<p>"But for a late night date, there are quite a bit of onlookers".</p>
<p>Beside Sakayanagi, the figures of Kitou, Hashimoto and a sleepy-looking Kamuro were there.</p>
<p>"Usually this is something that's done as a pair".</p>
<p>"Fufu. I don't have the courage to meet you so late at night when it's just the two of us".</p>
<p>Having received such words of praise I'm thankful for, I drew closer to Sakayanagi.</p>
<p>However, just by drawing closer to a certain extent, Kitou takes a step forward. It was a silent pressure that was telling me not to come any closer. Is he playing at a knight protecting the princess? Kitou's face doesn't befit that of a knight's.</p>
<p>"It appears you've suffered quite the terrible injury. Even now, it seems there are some scars left behind".</p>
<p>"Are you worried about me?".</p>
<p>"So you're not going to deny your injuries then?".</p>
<p>"Deny? It'll just be strange even if I deny them with this face".</p>
<p>It's been a week since I fought Ayanokouji on that rooftop. The swelling and the bruises have gone down quite a bit, but even so, I haven't made a complete recovery yet. It's obvious these injuries aren't something I'd sustain from falling down a flight of stairs. And I don't know where she got wind of this, but it's nothing particularly surprising.</p>
<p>Looking at either me or Ishizaki who both went out with our faces swollen, anyone would be able to immediately tell.</p>
<p>"For someone who holds pride in fighting, you've lost face, Ryuuen".</p>
<p>Hashimoto says that while laughing. While courteously pointing out where my drive lies.</p>
<p>"Was it alright for you to go about in such a state?".</p>
<p>"I'm grateful for your concern, but I don't want to be told that by someone whose legs are crippled like you".</p>
<p>"Fufu. That may be the case".</p>
<p>Maybe my provocations were fruitless.</p>
<p>As for Sakayanagi, she probably has something else she wants to hear.</p>
<p>"If you wish, I can tell you all about the extent of the condition of my injuries right here and now".</p>
<p>Sakayanagi's two prized bodyguards, Kitou and Hashimoto, each turn their eyes towards me.</p>
<p>"Even though your subordinates are not present, you're rather bullish".</p>
<p>By subordinate, she probably means Ishizaki or Albert and the others.</p>
<p>"Whether they're here or not doesn't matter. If you look at them as part of my forces, they're not here after all".</p>
<p>I took a step forward. Kitou also takes a step forward. Leaving aside Hashimoto, it seems Kitou has taken a fighting stance. Whatever happens, to be able to move immediately, he's warming up for it.</p>
<p>"Let's stop with the dangerous stuff. No one stands to gain anything from fighting in a place like this".</p>
<p>Hashimoto, as though joining in, said that.</p>
<p>"Shall we get down to business then? The reason I called you out at a time like this is because there is something I would like to ask you directly. It's something that's difficult to ask when there are people around".</p>
<p>Late at night between the end of one year and the start of the next, the rules on the school campus are somewhat different from the rules of the outside world. The convenience store that's normally open for 24 hours is also closed, and there are no stores currently open. There's no one that would go outside at a time like this. Either they've gone to bed already or are watching the welcoming of the new year on the television. This is a situation where we can talk about anything we like, in other words.</p>
<p>"You've fallen from your seat as leader of Class C. I've heard word of that".</p>
<p>"I knew you'd try to confirm that".</p>
<p>"Is that true?".</p>
<p>"If it is, what'll you do?".</p>
<p>"That was a rather quick admission. Unlike your injuries, it's not like we were there at the scene watching".</p>
<p>Sakayanagi stares at me with eyes that were searching for the truth. Until I met Sakayanagi, I had onesidedly reached a single conclusion. There's no way she could possibly know about Ayanokouji.</p>
<p>Who I quarreled with, who I was defeated by. I had thought she wouldn't show much interest towards that.</p>
<p>"Did you think I would have put on airs?".</p>
<p>"I wonder. That may be the case indeed".</p>
<p>However, it's still fishy. Sakayanagi's eyes are that of someone who knows something. She had such a look in her eyes. Ayanokouji did not talk in depth about it but did he already attract Sakayanagi's attention?</p>
<p>If so, then when? There's almost no doubt it was before the incident on the rooftop with me. No, if that's the case, then Sakayanagi should have had a strong interest in Ayanokouji since way back.</p>
<p>But up until now, Sakayanagi showed no signs of it and as a matter of fact, she's trying to investigate it like this. From that bizarre contradiction, I arrived at a single answer.</p>
<p>It means there is a possibility that Ayanokouji and her were acquaintances from way back. If that is indeed the case then what Sakayanagi wants to know right now isn't whether or not I lost.</p>
<p>'It's whether or not I lost to Ayanokouji'</p>
<p>It would be that she wants to know the truth regarding that. It's quite an interesting line of reasoning if I do say so myself, or so I thought, but I'll let that problem be for now.</p>
<p>If such an interesting topic were to be dangled in front of me, it'll cause my instincts to throb.</p>
<p>"Even if you lose to someone, will you conceal that fact, Sakayanagi?".</p>
<p>"I don't know, because for me to lose to someone, cannot possibly happen after all".</p>
<p>That's a Sakayanagi-like screwed up response.</p>
<p>"However, if I happened to lose, at such a time, will I honestly acknowledge it or not, you ask?".</p>
<p>"Kukuku. Because you're prideful if nothing else, after all".</p>
<p>"Pride is important, you know. A life without pride would be boring, wouldn't it?".</p>
<p>"A life of showing off your pride, on the contrary, is the pointless one".</p>
<p>"Hey, couldn't you have confirmed something like this over the phone?".</p>
<p>Kamuro, who had been silent up until now and listening to the conversation, joined in.</p>
<p>"The thing about truth is, you won't know until you meet face-to-face. Especially since he's proficient at telling lies. Over the phone, it would have been difficult to ascertain it".</p>
<p>"Ahh, I see. Then at least get it over with quickly".</p>
<p>The small fries Sakayanagi uses also have it tough. Underneath the freezing sky, Kamuro's body slightly trembled.</p>
<p>"After playing the tyrant, in the end you ended up losing to your subordinate and fell from your seat as leader".</p>
<p>Sakayanagi pretends to ponder over it.</p>
<p>"It's a story that's hard to believe, isn't it?".</p>
<p>"If so then what else could it be?".</p>
<p>"That is something I do not know. That is why I have called you out like this".</p>
<p>"If you meet face-to-face with me, you'll begin to see the truth, huh?".</p>
<p>"I wonder".</p>
<p>She's always trying to sound me out. Well, if you ask me, I have no intention of maneuvering around her every single time over Ayanokouji.</p>
<p>"I have no further intention of doing anything else in this school".</p>
<p>"Oi, oi. That's a joke, right? Are you seriously saying that?".</p>
<p>The one who reacted before Sakayanagi, was Hashimoto.</p>
<p>"There is no need to doubt like that. Due to his contract with Katsuragi-kun, every month, he is guaranteed private points. Ultimately, linking up with Class A is an assured pathway for him so even if he drops out now, it won't be an inconvenience".</p>
<p>"Precisely. I'll be observing your petty fights from above".</p>
<p>"However, there's no guarantee it'll continue to go well though. If an event where you lose a large amount of private points were to occur, your rise to Class A will become doubtful".</p>
<p>She gives a courteous preface, no, explanation. The point is, it's a provocation from Sakayanagi saying she can crush me at any time.</p>
<p>"But please be at ease. First of all, I've decided that I will be thoroughly tormenting Class B. Having you and Class C as my playtime opponents will have to be on a different occasion".</p>
<p>"Do as you please".</p>
<p>Just as Ayanokouji's information said, it appears the brunt of Sakayanagi's attack from now will be focused towards Class B. I have no interest in what'll become of Class A or Class B but as a spectator, I'll have them entertain me.</p>
<p>"If you have no intention of starting a fight here, then I'll be taking my leave".</p>
<p>"It was only for a brief while but I had quite a bit of fun. I thank you for your loser's speech".</p>
<p>I turn my back. However, feeling like I'd tell her something, I stopped walking.</p>
<p>"Sakayanagi, you should also remember that you're not a winner who's guaranteed victory".</p>
<p>"If you're going to teach me defeat then I'll welcome it anytime".</p>
<p>I have no further intention of getting involved in the dispute between classes. However, if she were to challenge me as an individual, then I will crush her. If I didn't need to protect my colleagues in Class C, I wouldn't have to rack my brains over Sakayanagi's strategies every single time.</p>`,
            5: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">A New Experience</h1>
<p class="text-center text-sm text-gray-500 mb-12">Karuizawa Kei SS — Volume 7.5</p>

<p>A large and expansive sea. The place I've been left behind on is this uninhabited island.</p>
<p>"Aaah......they're gone.......".</p>
<p>I stared at the passenger ship that's slowly becoming smaller and smaller like it's somebody else's problem. It appears the summer vacation has turned into something unbelievable.</p>
<p>To be honest, I don't know what I should do now. Because I have no idea how I'm going to escape from this uninhabited island, surrounded by 360 degrees of sea. Ships, planes and phones. I don't have anything convenient like that with me. On top of that, because of my swimsuit, it's likely that my body will be chilled once night falls.</p>
<p>But I was neither anxious nor panicking. On the contrary, I thought about how great it would be if this moment would last forever.</p>
<p>Why is that, you ask? That is because of the significance of the presence of the boy sitting next to me. If he's with me, he'll save me no matter what predicament I'm stuck in.</p>
<p>A new experience.</p>
<p>It's because I'm confident of this that I feel no anxiety.</p>
<p>"Hey, Kiyotaka. Where are we? As far as the eye can see, there are only mountains and the sea.......Could it be that we're stranded somewhere absurd? Like Tasmania?".</p>
<p>"Tasmania isn't an uninhabited island, you know? Besides, there's no way it'd be this small".</p>
<p>"I-I see".</p>
<p>"In the first place, we're in Japan. There's that mountain you see in the distance, right? That's Mount Fuji".</p>
<p>"Mount Fuji, you mean THAT Mount Fuji?".</p>
<p>"Then that means we might surprisingly be able to escape this island easily".</p>
<p>"That won't be the case. Because to escape on our own, there's only one way and that's to swim".</p>
<p>It's not an exaggeration, but I don't quite have the strength to swim away. At that moment, a hawk took flight from the island and swiftly flew in the direction of Mount Fuji.</p>
<p>In all likelihood, it'll reach land in no time.</p>
<p>"It must be great having wings, isn't it? Because you could simply fly away like that".</p>
<p>Saying that, I gazed at Kiyotaka.</p>
<p>Eyes looking straightforwardly in the direction of Mount Fuji. And so I decided to ask him a frank question.</p>
<p>"Could it be that.....you're capable of swimming all the way there, Kiyotaka?".</p>
<p>"To be honest with you, there's a high possibility that if I'm on my own, I'd be able to swim all the way to land. Taking into account the probability of survival, it would be a good idea if I were to start swimming now while the sun is still out".</p>
<p>"A-As I thought......you're amazing".</p>
<p>But, Kiyotaka is here right now and he's showing no sign of swimming away.</p>
<p>"Could it be that it's because I'm here?".</p>
<p>"When I think about leaving Kei alone here, it's no longer a viable plan. There may be wild animals in the forest and once night falls, you'd have no way of protecting yourself".</p>
<p>"Sorry, Kiyotaka. I'm always getting in your way".</p>
<p>"That's not true".</p>
<p>"I'm happy you'd say that. But......I want Kiyotaka to survive".</p>
<p>"A plan where I'd be the only survivor can't even be considered a plan. It'll only be worthy of being considered a survival plan if it means both Kei and I can survive".</p>
<p>The inside of my body started getting hotter and hotter.</p>
<p>"Why do you care about me that much?".</p>
<p>I was slightly afraid of hearing the answer, but I boldly tried asking him that.</p>
<p>And when I did, Kiyotaka looked me straight in the eye and answered without any hesitation at all.</p>
<p>"It's because to me, you're a precious partner. This is normal".</p>
<p>As my body grew colder, Kiyotaka hugged me.</p>
<p>A new experience.</p>
<p>Because we were both wearing our swimsuits, our bodies were in close contact with one another.</p>
<p>"N-No. We're not THAT kind of partners.......!".</p>
<p>I tried to get away from him but Kiyotaka wouldn't let me go.</p>
<p>"Then you and I just have to become that kind of partners. Am I wrong?".</p>
<p>".......b-but..........".</p>
<p>Gradually, my resistance weakens. If I could be swept away, then I'd like to be.</p>
<p>"Kei.........".</p>
<p>And when I realized it, Kiyotaka's face is already right there in front of my eyes.</p>
<p>"Kiyotaka.........".</p>
<p>The two of us gaze at one another. The distance between our bodies and our hearts began to shrink.</p>
<p>And then---guu~. Cruelly enough, in my state of starvation, my stomach growled.</p>
<p>"!".</p>
<p>A sound of ruin that seemed as though it could erase the romantic atmosphere in an instant.</p>
<p>But Kiyotaka calmly took in this absurd situation where it wouldn't be strange even if he were to show disgust.</p>
<p>"Eat this, Kei".</p>
<p>The thing he handed to me, I wonder where he procured it from.</p>
<p>"Is this.....an eggplant?".</p>
<p>"It's native to this uninhabited island. It'll help you recover from your hunger if you eat this".</p>
<p>"T-thank you. But why an eggplant......eggplant?".</p>
<p>Fuu~ I began to realize something.</p>
<p>The Mount Fuji I could see in the distance. The hawk that flew away earlier.</p>
<p>And the eggplant.</p>
<p>This is something you'd look forward to on New Year's Day, is what I've heard.</p>
<p>Furthermore, when I thought about the eggplant, the world underwent a massive change. Kiyotaka, who was sitting next to me, was also affected by that change and I could see him fading away.</p>
<p>"Have you noticed? This is your Hatsuyume. What an ideal Hatsuyume, congratulations Kei".</p>
<p>"Hatsuyume.........so, it was a dream after all?".</p>
<p>Kiyotaka beside me faded away even more. What a relief, being stranded on an uninhabited island was just my dream. But that means, that moment was also a dream.</p>
<p>In other words, this romantic atmosphere will also be gone in a while.</p>
<p>That kiss I almost had, all of it will disappear soon.</p>
<p>I reached out to grab Kiyotaka. But Kiyotaka was no longer there beside me.</p>
<p>I could see Kiyotaka swimming ferociously against the tide. I leaped up into the sky and in an instant, the uninhabited island disappeared.</p>
<p>"Aaaaah wait. Wait, my Hatsuyume! My first kiss!".</p>
<p>Even as I screamed out, it was already too late. My consciousness was swiftly pulled back into the real world.</p>
<p>The very next moment, a familiar ceiling appeared before my eyes. A morning no different than the usual, so peaceful that it's almost unbelievable I had been panicking in my dreams.</p>
<p>But, my heart was beating fast.</p>
<p>"No, no......hey dream me, why are you so desperate for a kiss..........!?".</p>
<p>In reality, I always make an effort to stay calm and I won't simply ask for a kiss that easily.</p>
<p>E-Even if it happens to be the boy I love, that's why, umm, I won't be clingy.</p>
<p>But even so, even if it's just in a dream, there are still things that are ok for me to fantasize about and things that aren't. I think this is the craziest dream I've ever had in my life.</p>
<p>How could I have ever imagined this would be what I'd see in my Hatsuyume.</p>
<p>"Hatsuyume, huh.......".</p>
<p>Could my Hatsuyume turn into a Masayume.........no way, right?</p>
<p>Either way, let's keep this super embarrassing dream to myself only.</p>`
        }
    },
    {
        id: "ss-y1-v8",
        volumeNumber: "SS",
        title: "Short Stories: Volume 8",
        releaseDateJP: "May 25, 2018",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Honami Ichinose : Weariness of the Heart",
            "Kei Karuizawa : A Teasing Partner",
            "Nazuna Asahina : That First Year Boy",
            "Arisu Sakayanagi : The True Meaning Is",
            "Arisu Sakayanagi : That Summer Day"
        ],
        characters: ["Honami Ichinose", "Kei Karuizawa", "Nazuna Asahina", "Arisu Sakayanagi"],
        coverImage: "/assets/y1v8.jpg",
        inProgress: false,

        customChapters: {
            1: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Weariness of the Heart</h1>
<p class="text-center text-sm text-gray-500 mb-12">Honami Ichinose SS — Volume 8</p>

<p>"I'm exhausted".</p>
<p>After splitting up with Asako-chan and the others, I leaned on the wide table in the cafeteria with my upper body.</p>
<p>It felt like all the fatigue I had accumulated during the day just faded away.</p>
<p>It'd be great if I fell asleep just like this.</p>
<p>I closed my eyes and thought so.</p>
<p>No, no. If I fall asleep in a place like this, I'd be inconveniencing the others. But my eyelids are already so heavy.</p>
<p>When I tried my best to open them again, Ayanokouji-kun was reflected in my eyes.</p>
<p>At a surprisingly close distance.</p>
<p>I abruptly raised my upper body and called out to him.</p>
<p>"Ayanokouji-kuuuun yaho~".</p>
<p>"You were having a good time".</p>
<p>Apparently he's overheard my conversation with Asako-chan and the others.</p>
<p>"Girls' chats may or may not be their source of power".</p>
<p>Perhaps I have't been sufficiently charged yet, but I just didn't have the strength and had to use the table as a replacement pillow.</p>
<p>Since Ayanokouji-kun had a flabbergasted look on his face, I added.</p>
<p>"Ahh, can't I do this?".</p>
<p>It may have been too rude an attitude to take when speaking to another person...</p>
<p>"It's normal to do something like that when you're tired".</p>
<p>He did seem surprised but he gave his consent.</p>
<p>"Sorry---. For making it slightly uncomfortable".</p>
<p>"It's become quite the difficult group, hasn't it?".</p>
<p>"It was difficult until we formed this current group, is perhaps how I should put it. Girls know very well what they like and dislike, or more like, there are more than a few girls who are willing to say they don't like another girl straight to their face. In that regard, when it comes to personal feelings, aren't they a lot of boys who like to muddy the waters?".</p>
<p>Well, I've heard my fair share of quarrels breaking out over the small details though. If I can hear a variety of things from Ayanokouji-kun, then I'd like to collect information.</p>
<p>"Ryuuen's openly disliked though".</p>
<p>"It's bad to laugh at that but that really couldn't be helped, could it? But isn't Ryuuen-kun tired too? To be disliked by everyone must be tiring".</p>
<p>It would've been just fine if he had connected with others more in order to get along with them.</p>
<p>Even if he turns over a new leaf now, wouldn't it be difficult to make things go well?</p>
<p>"Don't get too fired up".</p>
<p>Perhaps he was being considerate of me, as Ayanokouji-kun quickly got up from his seat.</p>
<p>Doesn't seem like I'll be able to draw information out of him but that can't be helped.</p>
<p>I too, felt like relaxing on my own anyways.</p>
<p>"It's fine, it's fine. Being energetic is about the only thing I have going for me. See you later, Ayanokouji-kun".</p>
<p>Besides, either way all I can do when it comes to an exam like this is to tackle it seriously.</p>
<p>A special exam where I'll have to join hands with people other than my classmates isn't really one I can do anything about.......</p>
<p>How should I put it, if I increase the number of things I have to protect I'll end up being unable to keep up with it all.</p>
<p>Someone who'd normally be my enemy becomes my ally. Something like that means that someday, my enemy now may end up as my ally.</p>
<p>If something like that were to happen, then sooner or later I might just burst.</p>
<p>I thought that while looking at Ayanokouji-kun's back as he went away.</p>
<p>".....so they've climbed up to Class C. Even though all I've heard of are Horikita-san's accomplishments......".</p>
<p>Ayanokouji-kun, who's always positioned perfectly.</p>
<p>Exactly how much influence he exerts is still a complete unknown.</p>
<p>But---there are only a few people who know the fact that I possess a massive sum of points.</p>
<p>Did a student from Class B leak it, or could it be.....Ayanokouji-kun?</p>
<p>I'll have to ascertain that soon enough.</p>
<p>If he happened to be someone superior to Horikita-san then it means that he may be a threat to Class B, which I must protect.</p>`,
            2: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">A Teasing Partner</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kei Karuizawa SS — Volume 8</p>

<p>Soon after the outdoors school began, I received a request from Kiyotaka and committed myself to understanding the girls' group.</p>
<p>And now today, I could see Kiyotaka at last.</p>
<p>Kiyotaka looked at me once.</p>
<p>I immediately understood.</p>
<p>The fact that he's going to be making contact with me now.</p>
<p>And I could feel him sitting behind me.</p>
<p>"hnn---".</p>
<p>I sent him a signal by purring so I could let Kiyotaka know I noticed him without being noticed by my friends and my surroundings to my left and right.</p>
<p>And then I proceeded to unreservedly chat with my friends to my heart's content.</p>
<p>If I do something disruptive, it would cast suspicion on me. Then about three minutes later, I succeeded in going back ahead by saying I had an appointment with another girl.</p>
<p>"So? Finally feel like relying on me on the third day?".</p>
<p>I called out to Kiyotaka, who sat behind me. However, I didn't turn around to look that easily.</p>
<p>At times like this, female spies don't act foolishly.</p>
<p>"That's about right. There's far too little information on the girls".</p>
<p>These days, Horikita-san seems a bit distant too. I'm the only person in the class he can depend on.</p>
<p>I was extremely happy that deep down inside, Kiyotaka relied on me as though clinging to me.......no, no. What's the matter with me? Being delighted that I'm being worked to the bone.</p>
<p>"Well, it can't be helped right? For someone with a communication disorder like you, there are only a few girls you could possibly make contact with".</p>
<p>But I acted bullishly, just a bit, to tease him.</p>
<p>"Then even without my advice, you can overcome this special exam?".</p>
<p>I received that counter punch from him.</p>
<p>I should have taken the advantage but with that one blow, I was left reeling.</p>
<p>"O-Of course. Who do you think I am?".</p>
<p>I made a bluff, but without a doubt, the fact that I was shaken by it must have been conveyed to Kiyotaka.</p>
<p>"I see. Then there's nothing to fear".</p>
<p>I can handle the rest myself? I received that sort of pressure and so I gave in.</p>
<p>If I ever got into a pinch, it's not like I can do anything about it on my own.</p>
<p>"......later, at least analyze my situation to see if there's any danger or not, ok?".</p>
<p>I meekly(?) asked that of him.</p>
<p>"For now, let's hear it starting from the partitioning of the girls' groups".</p>
<p>"Ahh, before we talk about that there's something that's been bugging me".</p>
<p>"Let's keep it brief".</p>
<p>Of course I understand. I don't want anyone to start paying attention to Kiyotaka by messing up.</p>
<p>"It's something pretty important.....or more like, what's going on with that Ryuuen guy?".</p>
<p>"Are you concerned?".</p>
<p>"I mean, yeah. It's become a topic even among the girls. Why that guy stopped being the leader but it doesn't look like anybody knows the truth though".</p>
<p>There's no way I wouldn't be curious about what's going on with the man who did all those horrible things to me.</p>
<p>"Being as meek as a lamb, that expression doesn't quite fit Ryuuen but right now it looks like he's acting quite mature".</p>
<p>"Does that mean your chastisement worked?".</p>
<p>"Chastisement, eh?".</p>
<p>For the foreseeable future, I won't be targeted by that man.</p>
<p>I was truly happy about that.</p>
<p>"Don't worry about Ryuuen. He won't act carelessly. At the very least, I can say that he won't do anything to Kei from now on".</p>
<p>Buu!</p>
<p>A surprise attack. He called me 'Kei'.</p>
<p>Since I'm still not used to him calling me by my first name, I unexpectedly panicked.</p>
<p>But, it's lame panicking over something like being called by your first name.</p>
<p>I stabilized my breathing.</p>
<p>".....sorry, that was nothing".</p>
<p>I gave that excuse and returned to our conversation.</p>
<p>"That didn't seem like nothing, Kei".</p>
<p>He called me by my first name again. Every time, my poor heart takes a giant leap. Then, after a few seconds, it begins beating rapidly.</p>
<p>"I-I'm telling it's nothing".</p>
<p>Calm down, calm down Kei. I'm not a woman who's moved just because she got called by her first name.</p>
<p>I'm a popular gyaru who can easily overcome trivial things like that.</p>
<p>Still, even though he didn't refer to me that way that much up until now, why's he calling me that consecutively?</p>
<p>"Is that true, Kei?".</p>
<p>The 3rd time honestly confirmed to me that I am being teased.</p>
<p>".....hold it right there. You're doing it on purpose!".</p>
<p>I wanted to turn around, but I can't.</p>
<p>Because more important than the fact that our surroundings would notice us is the fact that I'm aware my face is beet red.</p>
<p>"Ahh, mou. Really, I shouldn't have given you permission to call me by my first name..........".</p>
<p>Even though I wanted to see him off while hiding my face, I can't quite do that at the cafeteria.</p>
<p>The pain of having to play the part of the girl slowly eating her meal.</p>
<p>"You're the one who called me out here in the first place though".</p>
<p>"Yeah. That can't be helped".</p>
<p>Can't be helped......is a lie though.</p>
<p>The one who falls in love loses.</p>
<p>I don't know who said it, but I think it's a clever saying.</p>`,
            3: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">That First Year Boy</h1>
<p class="text-center text-sm text-gray-500 mb-12">Nazuna Asahina SS — Volume 8</p>

<p>That meeting took place while I was on my way back to the cafeteria from the toilet.</p>
<p>"Hmm?".</p>
<p>When I passed by that boy, I heard that voice. Could it be that he's talking to me?</p>
<p>As I pondered over whether or not to stop walking, that boy called out to me.</p>
<p>"Ahh, I'm sorry. I just thought I've seen that amulet before a while back. Please don't mind me".</p>
<p>That boy said such a thing. Just as I thought I'd seen him before somewhere, he turned out to be the 1st year that Miyabi talked to a while back.</p>
<p>If I recall, he fought well against Horikita-senpai during the relay.</p>
<p>A pitiful boy who attracted attention because of that, was the impression I somehow had of him.</p>
<p>"This amulet isn't in stock at the school anymore though".</p>
<p>I doubt this is the case but could he be hitting on me while putting on that naive face of his?</p>
<p>"Is that so? By any chance, did you happen to drop this amulet somewhere a while back?".</p>
<p>"Could it be.......you're the one who picked up my amulet?".</p>
<p>"I wonder. I picked it up on my way back during the winter vacation though.....".</p>
<p>I had dropped my amulet somewhere and had given up on it. I felt grateful towards the person who picked it up and so I felt ashamed of having imagined something rude.</p>
<p>"I don't believe I'm mistaken. I see, so it was you".</p>
<p>I went up to the boy and showed him my amulet.</p>
<p>Perhaps it's because he immediately handed it over, since he hadn't realized it.</p>
<p>"This amulet is something I bought in this school. So it's not like I have any strong attachment in particular to it. It's just, how should I put it, it's like my mental support? When I have this in hand I feel really at peace. That's why when I lose it, it feels like an omen that bad things are going to happen and that makes me anxious. That's why I was really happy knowing someone picked it up and handed it over".</p>
<p>Unconsciously, I ended up talking about unrelated things but this should be enough.</p>
<p>"To think the person who picked it up would be you".</p>
<p>This too, might be called a strange, chance meeting. Or more like, it may be something along the lines of destiny.</p>
<p>This amulet protects its owner and at the same time, is the harbinger of destiny.</p>
<p>It's not just about romance but also brings people together.</p>
<p>Perhaps there might just be a meaningful destiny both he and I share.</p>
<p>Maybe that's why I happened to drop the amulet.</p>
<p>Thinking that, I began to feel like cherishing this bizarre and precious destiny.</p>
<p>That's right.</p>
<p>For me, this was how I met Ayanokouji Kiyotaka-kun. The day destiny reared its head.</p>`,
            4: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">The True Meaning Is</h1>
<p class="text-center text-sm text-gray-500 mb-12">Arisu Sakayanagi SS — Volume 8</p>

<p>That boy walking towards me did so while looking away.</p>
<p>I could easily see that he was engaged in a pleasant chat with his friends and thus was neglecting what is in front of him.</p>
<p>At this rate, we will collide.</p>
<p>However, even someone with handicapped legs like me can still adjust my course sufficiently enough considering my positioning.</p>
<p>But there are times when my legs would hurt and it's harder than usual to get them to move.</p>
<p>And that happened to be now.</p>
<p>That is why I had no choice but to choose the option of calling out to him.</p>
<p>"Umm---please look out?".</p>
<p>However my voice was drowned out by the boys' laughter.</p>
<p>Disregarding the fact that I had worked out a measure to avoid them a second time, it was rendered ineffective.</p>
<p>Since it's come to that, I don't feel like coming up with a third proposal.</p>
<p>I made up my mind and braced for the conclusion that would follow shortly after.</p>
<p>Sure enough, the boy did not notice me and his shoulder, with some force, hit me.</p>
<p>I tried to endure it but there was no way it would go swimmingly and all I could manage was to sit down right there as though collapsing.</p>
<p>"Sorry, sorry. Are you ok?".</p>
<p>The name of the boy who noticed me for the first time after running into me was Yamauchi Haruki. A student of Class C.</p>
<p>For the record, I do keep that information in mind but as far as I'm concerned, he's an insignificant existence.</p>
<p>"Yes...no need for concern".</p>
<p>I did not take the hand that was extended to me, rather, I used the wall to slowly get back up.</p>
<p>"Then, umm, I'll be off?".</p>
<p>Yamauchi-kun ended it with a single, non-serious apology.</p>
<p>In a sense, you could say he's a pleasant boy.</p>
<p>"Yes. Please don't concern yourself with me".</p>
<p>As I replied politely like that, Yamauchi-kun immediately returned to chatting with his friends and walked off.</p>
<p>"Really though, Sakayanagi-chan is cute but isn't she clumsy?".</p>
<p>Despite not having taken much distance from me yet, without even knowing that he's being overheard, Yamauchi-kun left behind such words and disappeared.</p>
<p>He probably didn't see all of it, but it appears Ayanokouji-kun too, has been observing my interaction with him.</p>
<p>I ended up letting him see something unsightly.</p>
<p>"Are you alright?".</p>
<p>"Thank you for your concern but it's not a big deal".</p>
<p>"I'll give Yamauchi an earful later".</p>
<p>"It's not like he deliberately did it, I only fell once at most".</p>
<p>However, now that I have fallen once, it also means I have gained the right to make him fall too.</p>
<p>"Well then, please excuse me".</p>
<p>Sooner or later, I'll have to deliver a special gift to him.</p>`,
            5: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">That Summer Day</h1>
<p class="text-center text-sm text-gray-500 mb-12">Arisu Sakayanagi SS — Volume 8</p>

<p>Early February. Just when I could feel the breath of spring. I held a warm can of coffee in my hands. Since the can happens to be very hot, I took out my handkerchief and wrapped it around the can.</p>
<p>"Hey, I want to hear it upfront".</p>
<p>"Ara. What might the matter be?".</p>
<p>While watching me, Masumi-san said so.</p>
<p>"You seem to be carrying around quite a lot of stuff but isn't that brown handkerchief for boys?".</p>
<p>"Does it not suit me?".</p>
<p>"To be honest, no".</p>
<p>"I don't really dislike how Masumi-san's not one to mince words".</p>
<p>I laughed thinly and glanced at the handkerchief. Certainly, it's a very plain and simple one meant for boys that it's hard to say I'd normally be interested in it.</p>
<p>"This is not mine. So it's no surprise it doesn't suit me. Shall I say it's something I borrowed?".</p>
<p>"Borrowing a handkerchief.....what's with that? Isn't that a bit creepy?".</p>
<p>"Fufu. Maybe".</p>
<p>"But you're laughing......".</p>
<p>I first encountered this handkerchief before I enrolled at the Advanced Nurturing High School. Let's go back to when I was a 3rd year in middle school and the summer vacation of that time.</p>
<p>Calling it a summer adventure, I got onto a train alone and travelled to a sea far away. A place I used to visit many times as a child but grew apart from as I grew older. Since I can't swim, it's a place I had no business being at. I used to think that in those days but now that I've enrolled in high school, that's become a fond memory for me.</p>
<p>I realized that there's plenty of value even in simply admiring the rippling waves of the sea. But I realize too that a cripple like me would find it difficult to walk down the beach and so I settled for gazing at it from the paved road along the coast. To protect myself from the blazing summer sun, I made sure to wear a white hat.</p>
<p>However---</p>
<p>"Ahh------".</p>
<p>Not too long after that, along with a breeze, the white hat I had been wearing flew off into the sky. I panicked and reached out but a cripple like myself couldn't possibly reach it and it flew towards the beach.</p>
<p>"......a mischief of the wind, I suppose? There's no other choice then".</p>
<p>That hat is a precious belonging of mine that my father bought for me. I need to go pick it up somehow.</p>
<p>I decided to take a detour down to the beach while bathing directly in the sun's rays that I'm not used to. However, the blazing sun sapped away more of my strength than I had expected.</p>
<p>"Honestly.....I'm no good when it comes to doing anything physical".</p>
<p>Feeling very dizzy, I collapsed as soon as I arrived at a bench with a roof over it near the lighthouse.</p>
<p>Even at this very moment, my hat may be blown further out to sea. That was what I thought but my body simply won't listen to me. Then let's have a short break.</p>
<p>I thought that and decided to cool myself down on the bench. I wonder how much time's passed since then. I felt a cool sensation on my neck and opened my eyes. It would appear I fell asleep.</p>
<p>The fact that I've been walking long distances must be one of the causes of that.</p>
<p>".......this is........".</p>
<p>Both my hat that had flown off and a wet handkerchief that had been placed on my neck were there.</p>
<p>To prevent the hat from flying off again, an unopened bottle of mineral water had been placed on the rim of the hat.</p>
<p>When I looked around, I saw a boy walking away alone. Judging from his physique and his height, he's my age or maybe slightly older. It would appear he's taken appropriate measures to guard against the risk of heatstroke but......that boy left without even seeking any gratitude from me.</p>
<p>For some reason, his retreating back didn't seem familiar to me and so I eliminated that possibility.</p>
<p>Because there's no way 'he' could be here in the outside world.</p>
<p>"I want to see you......Ayanokouji-kun".</p>
<p>I unconsciously whispered that.</p>
<p>I want to see him with my own eyes since I was only able to see him through the glass.</p>
<p>I want to hear his voice.</p>
<p>I want to touch him.</p>
<p>And then I want to break him.</p>
<p>I wonder what this emotion, this urge, filling my heart is. I'm sure the answer to that can only be found in making contact with Ayanokouji-kun.</p>
<p>Please......I hope to meet you again someday.</p>
<p>While looking at that boy's back, I prayed.</p>`
        }
    },
    {
        id: "ss-y1-v9",
        volumeNumber: "SS",
        title: "Short Stories: Volume 9",
        releaseDateJP: "Sep 25, 2018",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Kei Karuizawa : A Special Day for Students",
            "Masumi Kamuro : Kamuro's Intention",
            "Mei-Yu Wang : Reliable Classmates?",
            "Honami Ichinose : The First Gift",
            "Arisu Sakayanagi : Sakayanagi's Preparations",
            "Kiyotaka Ayanokōji : A Small Being"
        ],
        characters: ["Kei Karuizawa", "Masumi Kamuro", "Mei-Yu Wang", "Honami Ichinose", "Arisu Sakayanagi", "Kiyotaka Ayanokōji"],
        coverImage: "/assets/y1v9.jpg",
        inProgress: false,

        customChapters: {
            1: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">A Special Day for Students</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kei Karuizawa SS — Volume 9</p>

<p>February 14th. Underneath the cold winter sky, I came to this place, a slight distance away from the dorm.</p>
<p>An invitation from Kiyotaka via mobile to rendezvous here.</p>
<p>I had desperately been hiding my ever quickening heartbeat from Kiyotaka during our conversation.</p>
<p>To give someone chocolate.</p>
<p>If I were to start counting all the way from childhood, it wouldn't be my first time doing so. But whenever I let my guard down, I can feel my face reddening.</p>
<p>"What day is it today? Alright, 5, 4, 3---".</p>
<p>To conceal my embarrassment, I chose to poke fun at him with such a quiz.</p>
<p>"...that was easier than I expected. On the contrary, it's making me feel like I won't get it right".</p>
<p>"Don't beat around the bush, give me a straight answer, ok?".</p>
<p>It's okay. I just need to be the 'cool me'. It's okay.</p>
<p>"Valen---".</p>
<p>"Alright, correct answer".</p>
<p>I got really embarrassed and even as I covered it up with words, I hit Kiyotaka's head with the box.</p>
<p>"Is this for me?".</p>
<p>"I actually prepared this for Yousuke-kun but that's no longer necessary".</p>
<p>I lied.</p>
<p>The truth is, I bought it a while back while fretting over this and that.</p>
<p>I bought it just before the shop closed so I doubt anyone saw me.</p>
<p>"For Hirata, huh?".</p>
<p>"What? You don't like that?".</p>
<p>"No, I was just thinking that meant you've spent quite a while preparing for Valentine's".</p>
<p>There's no way a phony, transparent lie like that would work against Kiyotaka but that phony lie is the only option I have here, isn't it?</p>
<p>If I told Kiyotaka I bought it for him then......that'd just make me look like a maiden in love!</p>
<p>"I-I'm the thoroughly prepared type. Even though I decided I'd break up with him, there's still the possibility that it may become necessary, no? Well, there's no way someone as romantically inexperienced as you would understand that though".</p>
<p>It's precisely because I know he's romantically inexperienced that I was able to make this my escape route.</p>
<p>But still, surely even Kiyotaka would have had expectations?</p>
<p>After all, he knows today's February 14th.</p>
<p>"I thought you picked this date because you expected to get something from me".</p>
<p>That's why I asked him that.</p>
<p>"Sorry, that didn't cross my mind".</p>
<p>Grr......</p>
<p>He has his usual poker face up and my words came bouncing straight back at me.</p>
<p>Even though I threw them hard at him straight up, he still kept his cool.</p>
<p>"By the way, did you get any from some other girl?".</p>
<p>I think I'll probably be able to hear his answer calmly.</p>
<p>"No, nothing at all".</p>
<p>In other words, this means I'm the first girl in this whole school to give Kiyotaka chocolate.</p>
<p>"Serves you right. Zero Love Interest Man~".</p>
<p>"But is it really okay? If you give me chocolate, it'll stop being zero, you know?".</p>
<p>"That in itself would make you pathetic. You'd be the guy who needed me to hand him a lifeline".</p>
<p>I wish today would end without this being known to anyone else.</p>
<p>And on White Day, I'll be able to monopolize Kiyotaka, won't I?</p>
<p>Just kidding, I mean, this would mean I'm nothing more than a maiden in love.......!</p>
<p>Inside my head, I had fallen into a state of panic.</p>`,
            2: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Kamuro's Intention</h1>
<p class="text-center text-sm text-gray-500 mb-12">Masumi Kamuro SS — Volume 9</p>

<p>I'm in Ayanokouji's room.</p>
<p>For a certain reason.</p>
<p>"Give me something to drink. It's going to take a while".</p>
<p>Ayanokouji began preparing my request for the essentials with a displeased look.</p>
<p>"Then I'll boil some tea or coffee".</p>
<p>After saying that, Ayanokouji began preparing it.</p>
<p>I felt suspicious of how defenseless he seemed.</p>
<p>Sakayanagi told me to keep an eye on this man, Ayanokouji, but to be honest, I have no idea exactly what he's capable of.</p>
<p>"No cocoa?".</p>
<p>"...I've got some".</p>
<p>"Then I'll have some of that".</p>
<p>I once again made another meaningless demand, as though testing him.</p>
<p>"So what did you want to talk about? If it's cold, we could've had this talk in the lobby".</p>
<p>"No one will get in our way here. It's the ideal place for our talk".</p>
<p>"What exactly is it about?".</p>
<p>"Are you, by any chance, being wary?".</p>
<p>"It'd be far stranger for me to not be wary. A girl I'm not familiar with, not to mention a student from our enemy Class A, is in my room after all".</p>
<p>"You're saying Yamauchi from your class is different?".</p>
<p>When I said that, Ayanokouji gave me a glance.</p>
<p>"Are you curious?".</p>
<p>"Not at all".</p>
<p>"I see. Then let's not speak of that matter. It doesn't matter anyway".</p>
<p>Right now, Yamauchi is irrelevant. The important stuff comes now.</p>
<p>"That letter about Ichinose earlier. What do you think?".</p>
<p>A letter that states that Ichinose Honami is a criminal.</p>
<p>"What do you mean by that?".</p>
<p>"Exactly what it sounded like. About her being a criminal. Do you believe it?".</p>
<p>"I haven't a clue. Besides, I'm not interested".</p>
<p>"Even if you aren't interested, surely you've thought about it at least. About whether Ichinose is benevolent or malevolent, I mean".</p>
<p>"You can't just label someone malevolent because they happen to be a criminal. Just like you can't label someone benevolent by virtue of them not being a criminal".</p>
<p>I tried to unsettle him. To confirm whether this man can truly be used or not. That is the mission I've been given.</p>`,
            3: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Reliable Classmates?</h1>
<p class="text-center text-sm text-gray-500 mb-12">Mei-Yu Wang SS — Volume 9</p>

<p>I asked Ayanokouji-kun for advice regarding a certain matter at a cafe corner. But I wasn't able to take the initiative and a long silence followed.</p>
<p>I need to do something about it, I need to do something about it.</p>
<p>That feeling took priority even over the matter I had wanted to get his advice on. I feel bad for Ayanokouji-kun, who's wasting his time on me...</p>
<p>"Umm, you see...umm, it's about Hirata-kun".</p>
<p>I somehow desperately managed to squeeze my voice out. I continued before I end up choking my words back.</p>
<p>"I want you to tell me all about him......".</p>
<p>I think I explained that badly too but there's nothing I can do about it. Because I can't straight up tell him 'I'm in love with Hirata-kun' after all.</p>
<p>"Hirata and I aren't particularly close, you know?".</p>
<p>Even after seeing me panicking, Ayanokouji-kun's tone remained the same as always.</p>
<p>"But Hirata-kun told me Ayanokouji-kun is the most reliable one though?".</p>
<p>"...did he now?".</p>
<p>The impression I had of Ayanokouji-kun was that he's like 'air'. Describing it as 'air' may be somewhat rude but I've got nothing else to go on. He's a boy whose thoughts I find hard to tell after all. Besides, he seems a little scary in a way different from that of Sudou-kun and the others. But---</p>
<p>"Yeah. He says you're the most level-headed one in class. He really sang your praises".</p>
<p>Hirata-kun, who cares more about his classmates than anyone else and who keeps an eye on his classmates more than anyone else, praised Ayanokouji-kun.</p>
<p>I've never seen Hirata-kun talk about a friend that energetically before so that surprised me.</p>
<p>I still don't know the reason for that though but......</p>
<p>"Recently there's been talk that Hirata-kun and Karuizawa-san, umm...broke up, have you heard?".</p>
<p>"Of course".</p>
<p>It's not just Class C but the whole school year that's paying attention to this topic. The calamity that befell Hirata-kun and Karuizawa-san. It was unbelievable for me too.</p>
<p>But I can't take action on my own.</p>
<p>Because I can't possibly confess knowing full well I may be rejected.</p>
<p>"That's why, umm.....".</p>
<p>Let's get some advice. From Ayanokouji-kun, who Hirata-kun referred to as the most reliable one. I'm a coward but...in order to be able to confess.</p>
<p>".....d-does Hirata-kun currently have someone he's interested in?".</p>
<p>Let's take the first step towards overcoming this cowardice. I definitely can't look in the mirror, knowing my face is probably turning red. That's what I thought.</p>`,
            4: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">The First Gift</h1>
<p class="text-center text-sm text-gray-500 mb-12">Honami Ichinose SS — Volume 9</p>

<p>I secretly went to Keyaki Mall that night just as it was about to close.</p>
<p>"Umm.....I wonder which one's popular......".</p>
<p>The chocolate shop. I loitered around inside it. Since it's already late at night, there aren't any other students in the shop.</p>
<p>"As I thought, it's gone...".</p>
<p>There should have been a Valentine's Special corner at this shop but since Valentine's Day is already over, it would seem the corner has been removed.</p>
<p>But still, this shop has plenty of chocolate in stock.</p>
<p>A large variety of chocolates, of different colors and types. The price range goes from several hundred yen up to several thousand yen. The lack of symmetry there is astounding.</p>
<p>Even though they cater mainly to students, they must have sold quite a lot considering the date.</p>
<p>"Are you perhaps looking for Valentine's chocolate?".</p>
<p>When I felt lost, a clerk from the shop called out to me.</p>
<p>"Ahh, yes. I was but.....how could you tell?".</p>
<p>"It's written all over your face. That you want to give some to the boy you like".</p>
<p>"Ehh! That's, umm, that's not the case! But I owe him a lot or maybe I should say he saved me.....as thanks, I was thinking I'd give him some chocolate......".</p>
<p>I've never given anyone anything before in the first place. The first gift since I was born.</p>
<p>It's strange how it ended up being Valentine's chocolate.</p>
<p>"Which one would you recommend?".</p>
<p>"Shouldn't you just go with the one you prefer? It's all about intuition. Intuition".</p>
<p>Intuition, hmm? That might be the case.</p>
<p>Rather than have someone else decide for me, it's obvious the best present would be one I personally think is best.</p>
<p>"Alright then, I'll have this one".</p>
<p>"Thank you. Would you like to attach a message card to this? Something like 'I love you' perhaps?".</p>
<p>"No need, no need!".</p>
<p>If I handed him the present with a message like that attached, he'll surely be confused.</p>
<p>In the first place, I don't even see him that way. That's right. I'm just thanking him.</p>
<p>I'll give him the chocolate I purchased, that's what I thought.</p>`,
            5: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Sakayanagi's Preparations</h1>
<p class="text-center text-sm text-gray-500 mb-12">Arisu Sakayanagi SS — Volume 9</p>

<p>Today's the 7th of February. This is a story from back when I was still playing with the toy known as Ichinose-san.</p>
<p>It was after school, when our class had ended, that I quietly stood up from my seat with my trusty cane in hand.</p>
<p>In my case, I always end up attracting attention when I walk around due to the fact that a cane is an absolute necessity for me.</p>
<p>Being unable to act stealthily can sometimes be a drawback.</p>
<p>"Are you fine today?".</p>
<p>The one who said that to me would be Masumi-san. She's as languid as ever.</p>
<p>"I believe I've gone over this before but I think I'll make contact with him today".</p>
<p>I didn't name 'him' but she should know who I'm referring to.</p>
<p>"Ahh.....Yamauchi, right? Is it ok to leave Ichinose be?".</p>
<p>"Let's say there are two people you despise right in front of you. If you can only get rid of one, what would you do, Masumi-san? You'd get rid of the one you hate more, wouldn't you?".</p>
<p>"Well...I suppose so".</p>
<p>"That's my answer".</p>
<p>Right now, rather than Ichinose-san, I'm far more entranced by Yamauchi-kun.</p>
<p>I didn't say that out loud but I'm sure Masumi-san understands.</p>
<p>"Ahh, I see. I'll be heading back then?".</p>
<p>"Yes. As always, I appreciate your effort".</p>
<p>Having received no orders from me, Masumi-san immediately left the classroom.</p>
<p>On my way to Class C, I spotted a lone male student walking my way.</p>
<p>That male student used to be surrounded by several of his followers until a while ago. But he's since kept a low profile and now he's but a shell of his former self.</p>
<p>"Greetings, Ryuuen-kun".</p>
<p>When I called out to him like that, he looked at me with those fierce eyes of his that haven't changed.</p>
<p>To be honest, I would have liked to call him Dragon Boy but if I did so, we wouldn't even have a conversation so I avoided saying unnecessary words and simply stopped quietly.</p>
<p>After he was dethroned as leader, I came up with several theories of my own. But now they're no longer necessary.</p>
<p>Since he's stepped down from the stage, I can afford to leave him be.</p>
<p>Do not reject one who comes and do not chase one who leaves.</p>
<p>Of course, it's a different story when it comes to Ayanokouji-kun though.</p>
<p>Regardless of whether he has any intention of fighting or not, he must become a sacrifice for the sake of my pride.</p>
<p>"Are you ready for the end of school year exam?".</p>
<p>"And here I was wondering what you'd say. I have no intention of having a casual chat with you".</p>
<p>"Please don't say that. Isn't it difficult studying alone? If you so desire, why not prepare for the test together with us?".</p>
<p>I made a proposal he would never accept.</p>
<p>"Do you really think you can provoke me with something like that?".</p>
<p>It would appear he's interpreted my good intentions as malevolence. Ryuuen-kun began walking again and mercilessly barged up to me.</p>
<p>"So you're leaving me alone to play with Ichinose?".</p>
<p>The rumors that have been spreading seems to have reached his ears as well.</p>
<p>"Speaking of which, she's currently being assailed by rumors an anonymous person spread".</p>
<p>But Ryuuen-kun only kept glaring at me as though he has no interest in that.</p>
<p>Well, let's just say it's my turn for a little while longer.</p>
<p>"If she were a student like you, constantly being badmouthed, then she wouldn't have incurred much damage, no?".</p>
<p>"What's your business with me?".</p>
<p>"There's no reason behind it or anything. I just wanted to have a chat with you. Should I not have?".</p>
<p>"A chat, huh? Then I'll play along and ask you a question too".</p>
<p>"How interesting. What could it be?".</p>
<p>That unexpected reaction from Ryuuen-kun pleased me.</p>
<p>I wonder what sort of question he'll ask me.</p>
<p>"I'm swindling large amounts of private points from you incompetent lot every month thanks to my contract with Katsuragi. Why are you dealing with that?".</p>
<p>It wasn't anything I hadn't expected but at least it's a question that won't bore me.</p>
<p>"Because it doesn't affect us significantly. For Class A, feeding you alone doesn't carry any risk. There's no point in going out of your way to drive you to expulsion. Besides, as long as his contract with you remains intact, Katsuragi-kun will never make a comeback".</p>
<p>"Kuku.......".</p>
<p>For the first time, Ryuuen-kun laughed.</p>
<p>"To think you'd be wary of small fry like Katsuragi".</p>
<p>"It's easy to deal with external enemies but to deal with an ally can be troublesome should a mistake occur. He's an excellent pawn as long as he keeps his head down and allows himself to be used".</p>
<p>It doesn't mean he's afraid of being targeted by me. He's simply trying to provoke me. Getting this sort of reaction from Ryuuen-kun is precisely why I always end up talking to him.</p>
<p>"Please do your best to save up 20 million points while you can".</p>
<p>If he can escape to the safe zone, at least some of his pride would remain intact.</p>
<p>"I'll do just that".</p>
<p>"Ryuuen-kun, may I also ask you a question?".</p>
<p>"If you want to know what a man's like, I can teach you anytime, you know?".</p>
<p>I'm rather pleased by that provocation that fits Ryuuen-kun so.</p>
<p>"There's no need for you to teach me. I too, have my own ideal. Or perhaps you're saying I'm your type?".</p>
<p>If you stab me, I'll stab you right back.</p>
<p>"I have no problem devouring low-quality products, you see".</p>
<p>If you touch a thorn, you'll get pricked.</p>
<p>A person like this really is valuable.</p>
<p>"If you're quite done, I'll be off".</p>
<p>Apparently this beast has truly been defanged. Even though he's someone I needed to be wary of unlike Katsuragi-kun or Ichinose-san.</p>
<p>Either way, it's one less troublesome enemy for me so it's a burden off my back.</p>
<p>I can focus solely on my heart's desire, Ayanokouji-kun.</p>
<p>"Please excuse me then".</p>
<p>But he had already walked off. After splitting up with Ryuuen-kun, I once again headed for my destination, Class C.</p>
<p>Because if my target escapes while I play around, it would've only been a waste of my time.</p>
<p>"Excuse me".</p>
<p>I said as I peered into the classroom.</p>
<p>"Is Yamauchi Haruki-kun here?".</p>
<p>The reply was immediate. From the person himself.</p>
<p>"Ehh, that's me but.....you need something?".</p>
<p>Yamauchi-kun looked at me confusedly. It doesn't seem like he's on his guard at all.</p>
<p>"Would you mind giving me a few moments of your time?".</p>
<p>"O-Of course I'm free.........".</p>
<p>You're going to make me think if you're this stupid.</p>
<p>Well, what I've prepared is a single ticket.</p>
<p>".....this isn't quite the right place so I'll be waiting for you in the corridor by the stairs".</p>
<p>And just like that, I invited Yamauchi-kun.</p>
<p>Heaven or Hell.</p>
<p>I'll hand him a ticket that leads to both.</p>
<p>He's free to choose which one he prefers.</p>`,
            6: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">A Small Being</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kiyotaka Ayanokōji SS — Volume 9</p>

<p>This is an event that happened during the period following the end term exams some time before the results were released.</p>
<p>My plan was to take a stroll to the convenience store before returning home after the last period of school ended.</p>
<p>During my way to the store, I saw the back of a person I knew.</p>
<p>It was Ichinose; 1st year class B. Following her were two girls who I believe were her classmates. I saw them surrounding Ichinose and talking merrily with her.</p>
<p>Depending on the topic of conversation, their walking pace would slow down making it simple to just pass them.</p>
<p>Of course, trying to raise my voice and chasing after them is not something I would do.</p>
<p>It won’t be a problem if only Ichinose was there, but I haven’t had a decent conversation with the other girls before. It would be easier for me to just slip away. While I’m not sure about the other students, Ichinose would definitely call out to me.</p>
<p>I guess I should head back more slowly. Not that I had anything planned once I’m home.</p>
<p>While walking on the road towards the convenience store, I suddenly heard the light footsteps of someone running from behind. Before long, some girls called out to Ichinose and ran past me.</p>
<p>The three girls in front turned around towards the voice. Ichinose naturally noticed me.</p>
<p>She probably noticed how uncomfortable I was from my face since she just flashed a smile. She didn’t call out to me. As expected of a most considerate model student.</p>
<p>After being joined by the girls, Ichinose and her group began talking again, as if nothing had happened.</p>
<p>"Well then… convenience store next".</p>
<p>I watched the backs of Ichinose and her friends for a while before leaving them at the store. After buying all the necessities, I went outside.</p>
<p>It must have only been 2-3 minutes, but I couldn’t see Ichinose and her group anymore.</p>
<p>Let’s go home, I thought as I once again headed towards the dorms.</p>
<p>It was at that precise moment.</p>
<p>"Here, here Ayanokouji-kun!" I heard a voice.</p>
<p>I glanced at the direction where the handwaving came from and among the trees standing a distance away from the road was Ichinose.</p>
<p>"What are you doing over there?".</p>
<p>"Maybe you should come over here then?".</p>
<p>She showed a smile like that of a child playing a prank, as if testing me.</p>
<p>Since she urged me to come closer, I went over towards her.</p>
<p>Yet even after arriving right by her, there wasn’t as if anything had changed either.</p>
<p>"Something?".</p>
<p>"Hmm? No, maybe not after all".</p>
<p>Not following her, I tilted my head which was folIowed by Ichinose lightly laughing.</p>
<p>"I wanted to talk with you a bit, I think".</p>
<p>"Right then… you mean here?"</p>
<p>"Here, come on, sit sit! If we hide here we won’t be seen by others, surprisingly".</p>
<p>No, well she may have a point but…</p>
<p>It was midwinter, naturally it was freezing.</p>
<p>"I was trying to be considerate in my own way you know? I was thinking you didn’t want to talk surrounded by the other girls".</p>
<p>It seems like she managed to piece together quite a bit from my expression earlier.</p>
<p>As expected of Ichinose I must say.</p>
<p>Anyway, wanting to progress the conversation I also sat down.</p>
<p>To think the day had come when I would sit here like this.</p>
<p>I must say, the trees really do shade us from view.</p>
<p>It was also a significant distance from the main road so if we talked quietly, few would even notice.</p>
<p>"Aren’t you cold?".</p>
<p>"It’s fine, it’s fine!". Ichinose laughed.</p>
<p>"Hey, how did your end term exam go?".</p>
<p>"Not bad. The whole class should probably be fine I guess".</p>
<p>"I see. That’s good. We are at the end of our first year so wouldn’t you also hate it if someone were missing?".</p>
<p>"Class B shouldn’t worry right? You are always at the top for the written exams."</p>
<p>"Of course my own class is important to me, but that’s the same for all the other classes too".</p>
<p>She wouldn’t want to lose anyone. Not even her rivals, is what she said.</p>
<p>Normally, people saying that is just saying it for appearances sake. The less rivals there are, the more your own class gains in return.</p>
<p>Ichinose is perhaps an exception. She doesn’t want anyone to drop out from the bottom of her heart.</p>
<p>That’s an ideal.</p>
<p>But that doesn’t mean it’s just lip service. In the event there will be an exam in which someone from Class B or any other class needs to drop out, she will without doubt protect her own class.</p>
<p>She doesn’t want anyone to be expelled, but she will prioritise her own classmates. That’s her position.</p>
<p>"What are you thinking about?".</p>
<p>"Well no… not really. Just haven’t come to grips with this situation yet".</p>
<p>A boy and a girl were hiding in the shades from the leaves while conversing in low voices. This situation.</p>
<p>It would be strange if someone didn’t have some weird thoughts about this.</p>
<p>Thus was my thoughts, but I sorted them out immediately again. Ichinose right in front of me was absolutely not having any thoughts about this.</p>
<p>"By the way, Ayanokouji-kun, Tokyo?".</p>
<p>"Eh?".</p>
<p>"You know, this school has a lot of students from within the Tokyo area, but there’s also students from outside too".</p>
<p>Is that so? That’s news to me.</p>
<p>"Well, within the city I guess".</p>
<p>"I guess? So from one of the 23 wards?".</p>
<p>"Well yeah".</p>
<p>"What middle school?".</p>
<p>"That’s a secret".</p>
<p>"Ah, maybe that was too much? I’m sorry If I made you feel bad".</p>
<p>Maybe she was thinking I was one of those bullied students who was absent from school or something in the past. Thus her apology.</p>
<p>"No it’s fine. It’s just, my classmates warned me to not say too much".</p>
<p>"Ah I see. Just knowing which school someone came from may be too much perhaps?".</p>
<p>She didn’t seem to understand so she managed to convice herself someway or another.</p>
<p>I’m so glad the classes in this school were made to compete with each other.</p>
<p>"By the way Ayanokouji-kun, it’s been quite some time since we first met right? That’s why, eh well, I thought I wanted to ask things friends ask each other… so that’s why, that just now".</p>
<p>"No, that’s alright. There aren’t many people who socialise with me so I was just at a loss".</p>
<p>"Is that so?"</p>
<p>"I’m basically this shady existence in my class after all. No, perhaps I’m really dark after all truth to be said".</p>
<p>I said negatively, but it didn’t seem like Ichinose thought of me like that.</p>
<p>"Rather than dark, aren’t you more calm? Or stoic perhaps?".</p>
<p>"That may be true if you think of it in positive terms maybe? That would rather be nice".</p>
<p>"That’s right! You don’t feel like you are going in the same class as us, more like, you have the feeling of a senpai?".</p>
<p>It seems like she is praising me, is it alright to feel glad then?</p>
<p>"By the way, would it be fine if I came to hang around in your room later?".</p>
<p>"Eh? A-ah, sure…".</p>
<p>It came so sudden, like a flying arrow, so my heart skipped a beat.</p>
<p>"I was wondering how your room was, you know. That’s a promise then!".</p>
<p>Thus I and Ichinose made a promise in a nook by the trees standing along the road.</p>`
        }
    },
    {
        id: "ss-y1-v10",
        volumeNumber: "SS",
        title: "Short Stories: Volume 10",
        releaseDateJP: "Jan 25, 2019",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Honami Ichinose : Apparent Difficulty",
            "Suzune Horikita : Neighbour",
            "Arisu Sakayanagi : Sakayanagi's Strategy",
            "Honami Ichinose : Small Heartbeats"
        ],
        characters: ["Honami Ichinose", "Suzune Horikita", "Arisu Sakayanagi"],
        coverImage: "/assets/y1v10.jpg",
        inProgress: false,

        customChapters: {
            1: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Apparent Difficulty</h1>
<p class="text-center text-sm text-gray-500 mb-12">Honami Ichinose SS — Volume 10</p>

<p>A short distance from the dorms.</p>
<p>I was standing by the shadow of a vending machine letting out a breath of fog.</p>
<p>«It’s still so cold~».</p>
<p>It was morning and time to go to school. A cold morning in March was inviting the coming of spring. I had wanted to talk to a certain person so much this morning so I decided to wait until I could see his back.</p>
<p>It would have been warmer to wait in the lobby but I felt it would have been embarrassing to ambush him. In the end I decided to lay it low hiding instead.</p>
<p>«… Being called out by my other friends would be… a bit».</p>
<p>With this excuse, I had already waited about ten minutes.</p>
<p>Can he come over quickly please? With these thoughts in mind, I felt my pulse steadily rising along with the time ticking away.</p>
<p>U—</p>
<p>If I knew it would be like this, I wished I’d rather contacted him and asked to meet up in the first place.</p>
<p>The thought that I should so suddenly and coincidently call out to him was a mistake. My bad.</p>
<p>Maybe I should stop with the ambushing thing and just do it normally? Well then, where and when should I call out to him then?</p>
<p>But…</p>
<p>I wanted to meet and talk to him today, no matter what.</p>
<p>Remembering the exchange with Nagumo-senpai yesterday, I felt I wanted to overwrite it somehow.</p>
<p>Then in the corner of my line of sight, I discovered my objective walking by. It was Ayanokouji-kun.</p>
<p>«Good morning— Ayanokouji-kun!».</p>
<p>Leaving it up to flow of events I walked closer while greeting.</p>
<p>«Ah. Good morning, Ichinose».</p>
<p>Noticing me voice, he turned around and replied. Despite his blank look on his face, seeing his usual self, I…</p>
<p>I stiffened up.</p>
<p>«Hmm?».</p>
<p>Yahoo—! A greeting pose followed with my body stiffening.</p>
<p>I remembered I hadn’t decided what to talk about at all.</p>
<p>Usually I went with the flow or the mood when I talked with my friends after all.</p>
<p>However, today have been the only day I thought about deciding on a topic beforehand.</p>
<p>But that’s way too late now. Having already called out to him, I just have to make it work somehow.</p>
<p>«What is it?».</p>
<p>Showing some worry from seeing me standing there as if petrified, Ayanokouji-kun called out to me.</p>
<p>As if breaking out of a movement restricting spell, I decided to start with a certain template I’ve been using frequently.</p>
<p>«Yaa, well, it’s cold today, right—?»</p>
<p>The topic being about the recent weather due to this March being unusually cold.</p>
<p>«Sure is».</p>
<p>The weather was somewhat weird, making it easy to mistake that one was living in Snow Country.</p>
<p>«Did you plan to go to school with someone?»</p>
<p>Wanting to confirm it, just in case, I asked him.</p>
<p>«No, not at all. I’m basically alone in the mornings».</p>
<p>That was a relief. If someone was going to just show up impromptu here and now, Ayanokouji-kun would probably be troubled.</p>
<p>«Well then… Want to go together?».</p>
<p>Hearing this Ayanokouji-kun nodded without hesitation.</p>
<p>Ah—that went well.</p>
<p>«………»</p>
<p>Ah— it should have anyway…</p>
<p>The topic, I can’t find anything! Realising how I wasn’t being my usual self, his expression showed how troubled he was.</p>
<p>I felt talking like we usually do was getting harder. There was a strange change going on within myself.</p>
<p>As expected, deciding to talk with him proved to be the right choice after all.</p>
<p>With these firm thoughts in my head, I began walking by his side.</p>`,
            2: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Neighbour</h1>
<p class="text-center text-sm text-gray-500 mb-12">Suzune Horikita SS — Volume 10</p>

<p>He walked past me and stood in front of Kouenji-kun. It seems they were talking about something in low voices. I didn’t hear what they were saying though. I saw him leaving the classroom, seeing his back I felt something I couldn’t express inside me. Before I noticed, I was standing up from my seat and followed after him. Ayanokouji-kun was walking further down the corridor. His walking pace wasn’t especially fast, but it felt like I would never reach it no matter what. Rushing it, I grabbed his hand without thinking. I didn’t have confidence my words alone could stop him somehow. He turned around. His pupils had no colour. But he was someone who didn’t show his emotions at all, black nor white. During the span of one year beside him, I couldn’t see anything.</p>
<p>«Ayanokouji-kun. You… since when and how much did you know?»</p>
<p>So I asked him. What I wanted to know. What I needed to know. He didn’t seem to worry, nor did he change his facial expressions when he answered.</p>
<p>«Haven’t I said it before? I haven’t participated in this special exam in the literal sense».</p>
<p>No matter how much I knocked on his door, the knock coming back was the same as always. That’s why I have been distancing myself slightly from him lately. Since I feared getting closer to him.</p>
<p>«… But…».</p>
<p>I don’t know.</p>
<p>I can’t see the person behind Ayanokouji Kiyotaka-kun.</p>
<p>«I’ll leave then».</p>
<p>After his reply, I didn’t manage to hold him there any further. I could only watch him going farther away.</p>
<p>I felt I managed to grow up a bit during this exam. But in the end, I couldn’t grab his existence itself.</p>
<p>«By the way».</p>
<p>I heard a voice coming from behind me which surprised me before I turned around.</p>
<p>It was my classmate Karuizawa-san.</p>
<p>«…What is it?».</p>
<p>«Nothing. I was just wondering what you were talking about».</p>
<p>«Not much. It seems he isn’t trusting me, that’s all».</p>
<p>«Hmm…»</p>
<p>She then looked at Ayanokouji-kun once just like I did moments earlier.</p>
<p>«It seems like he is trusting you, far more than me».</p>
<p>«What makes you say so?».</p>
<p>Of course I didn’t have any proof.</p>
<p>But, I somehow knew it from seeing Karuizawa’s eyes.</p>
<p>«Since it looks like you are trusting him, perhaps? I can’t seem to trust him no matter what though».</p>
<p>That was the only answer I could come up with. I wonder what she would say after hearing that.</p>
<p>«You cannot trust someone who isn’t trusting you, right?»</p>
<p>«!…»</p>
<p>I flinched from the unexpected, yet precise and obvious words directed at me.</p>
<p>«If I really start to trust him… One day I feel I will witness something scary. I feel like I will be betrayed».</p>
<p>«Ah is that so? I can’t understand since I no longer have anything to fear anymore».</p>
<p>Karuizawa didn’t seem scared at all.</p>
<p>«I thought you were really amazing yesterday. You got a bit of my respect, seeing you take the initiative for the class. But Kiyotaka is a different matter altogether. If you are that scared, your relationship with him will never begin».</p>
<p>Karuizawa answered before returning back and joining her friends.</p>
<p>Her word would remain deep in my heart forever. Together with the existence of an invisible neighbour.</p>`,
            3: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Sakayanagi's Strategy</h1>
<p class="text-center text-sm text-gray-500 mb-12">Arisu Sakayanagi SS — Volume 10</p>

<p>A space for only me and Ayanokouji was spreading before my eyes. He was wearing his usual poker face as always, watching me steadily.</p>
<p>«To think you would even send Kamuro away first, what did you want to talk about?»</p>
<p>It seems like he wanted to finish this conversation as soon as possible, pushing for a quick conclusion. As for me, I’d have liked to talk more leisurely, but seeing as we are enemies, that won’t be possible.</p>
<p>«It’s about this special exam».</p>
<p>«Correct me if I’m wrong, but we decided to fight it out during the next special exam, right?».</p>
<p>«Yes. That was the plan. However… if it’s alright with you, can we settle it during the next one? This is not a fight between classes, but eliminating someone from your own. Since the only thing outsiders can do to influence the results is by giving praising points, you can’t attack at all either… do you mind if we postpone to the next time?».</p>
<p>I wonder how he will answer my self-indulgent suggestion?</p>
<p>After a brief silence, I decided to ask again.</p>
<p>«Won’t you accept, this deal?»</p>
<p>Having reached a conclusion it seems, he replied back.</p>
<p>«It’s up to you».</p>
<p>In other words, we will ignore this special exam and settle it during the next one. That’s something I’m really thankful for.</p>
<p>«Thank you. I was wondering what would happen if you were determined that this special was as good as any. I can thus freely concentrate on the internal matters of class A. It’s just…»</p>
<p>«Just?».</p>
<p>Since we just had delayed our duel, there was a need to remind him of this.</p>
<p>«Since this is a temporary ceasefire, I will certainly need to earn your trust, thus why I say this. During this exam I won’t give you any minus points. In other words, I will definitely not give you any criticism votes».</p>
<p>Yes. There is a need to clearly show that we won’t fight during this exam. I don’t think he will be caught off guard but this is an action meant to instil the sense of rightfulness.</p>
<p>«On the off chance that any involvement of mine with class C results in any harm to you… I don’t mind if we consider that my loss. I’m fine with you rejecting the coming exam too».</p>
<p>«If I get most of the criticism votes this time, there won’t be a next time though».</p>
<p>«Certainly. Anyway, please rest assured, is what I have to say».</p>
<p>In any case, I wonder if that may give him some peace of mind?</p>
<p>However, this means I can freely use «that» without reserve.</p>
<p>I can’t help but looking forward to the results after the exam has ended.</p>
<p>At that time, let’s settle this between us, Ayanokouji-kun.</p>`,
            4: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Small Heartbeats</h1>
<p class="text-center text-sm text-gray-500 mb-12">Honami Ichinose SS — Volume 10</p>

<p>The time crept closer towards midnight. I’ve been hanging around in the rooms of several boys from Class B before, but staying at a boy’s room at this hour was a first for me.</p>
<p>Furthermore, being alone together with a boy like now was obviously something I haven’t experienced yet.</p>
<p>We were done discussing the topic I had to talk about.</p>
<p>I just have to drink this cup of hot chocolate I held in my hands before returning back.</p>
<p>«Hey, Ayanokouji-kun».</p>
<p>I stared at the cup while calling out to him.</p>
<p>«Hmm?»</p>
<p>He replied back with the blank face he always had, or pretty close to it, as I could feel a sense of composure from it.</p>
<p>«Ayanokouji-kun, are you perhaps someone really amazing?».</p>
<p>«What makes you think so? Sorry, but that’s something I’m not aware of».</p>
<p>«That’s even more amazing if so. I mean, Ayanokouji-kun…»</p>
<p>You saved Sakura-san. The actions you took during the special exam aboard the cruiser. How fast you were during the sports festival…</p>
<p>Yes, that’s right. There’s no doubt about it.</p>
<p>This person, Ayanokouji-kun is a very intelligent person.</p>
<p>I can’t come up with an example but… I can’t come up with words to explain how great he seems to be…</p>
<p>Isn’t he a person we should be way, way more cautious of than Horikita-san or Hirata-kun after all?</p>
<p>But if that’s true…</p>
<p>«What is it?».</p>
<p>«No, nothing at all».</p>
<p>I was assaulted with the feeling of something tightening inside me and averted my eyes.</p>
<p>He will surely become a formidable enemy.</p>
<p>And then, we will be unable to spend time and laugh together like this anymore.</p>
<p>I have to remember this fact.</p>
<p>I know. I know that this is inevitable due to the school rules. The fact that we are in separate classes is something we can’t fight. I will prepare myself for that time.</p>
<p>But now, only for now… I want to talk to him just like a normal girl.</p>
<p>«… what’s this, I wonder…».</p>
<p>This, strange feeling.</p>
<p>Even though I was talking to him just recently, just as usual.</p>
<p>For some reason, I could feel my heart beating softly.</p>`
        }
    },
    {
        id: "ss-y1-v11",
        volumeNumber: "SS",
        title: "Short Stories: Volume 11",
        releaseDateJP: "May 25, 2019",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Kei Karuizawa : The First Gift",
            "Arisu Sakayanagi : The Time of Realisation",
            "Kikyō Kushida : A Truly Frightening Person",
            "Arisu Sakayanagi : The Morning of Fulfilment",
            "Kiyotaka Ayanokōji : An Encouragement of Adventure"
        ],
        characters: ["Kei Karuizawa", "Arisu Sakayanagi", "Kikyō Kushida", "Kiyotaka Ayanokōji"],
        coverImage: "/assets/y1v11.jpg",
        inProgress: false,

        customChapters: {
            1: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">The First Gift</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kei Karuizawa SS — Volume 11</p>

<p>There was a little box resting in my hand. It was so light, yet it felt so heavy.</p>
<p>My heart rate was rising like the high tide. It easily surpassed 120 beats per minute.</p>
<p>«So, I’m going to confirm something, fine with you?» I asked.</p>
<p>Trying to conceal my nervousness, I looked at Kiyotaka. But I couldn’t meet his eyes. My gaze flickered around his nose disguising trying to act as if I was looking at him.</p>
<p>I’m confident that I would swoon looking directly in his eyes now.</p>
<p><i>A birthday plus white day gift from Kiyotaka. </i></p>
<p>I neatly unwrapped it so it could be wrapped again later. Then— I opened the cover.</p>
<p>«Wha…What is this!?»</p>
<p>I screamed out my first impression before I knew it.</p>
<p>A heart-shaped necklace shining in gold.</p>
<p>«It’s a necklace.»</p>
<p>«Yeah, even I can see that! A too heavy present, you know!»</p>
<p><i>I mean, isn’t that almost a confession!?</i></p>
<p>N-no, I’ve never been confessed to so I can’t be sure.</p>
<p>But, but, I was sure it was a present way surpassing what friends give each other.</p>
<p>I faintly remember that I said he should return the favour many times back, but that was just meant as a little joke.</p>
<p>«Heavy?»</p>
<p>I wasn’t sure whether to be happy or sad, that idiot was just looking as if he had no clue.</p>
<p>Even if that was intentional that would mean, well in other words, that right? I imagined an unreal situation, but then chased it in the furthest back on my mind.</p>
<p>«B-but you don’t give a necklace to a friend, you know!» I first have to tell him how strange this present was.</p>
<p>«And, and you know? It doesn’t seem to fit me either! This is heart-shaped, you know!»</p>
<p>It was true I didn’t think it would fit me, but that wasn’t the big issue.</p>
<p><i>This was the kind of thing that frequently made girls misunderstand, wasn’t it! Come on, really!</i></p>
<p>«Heart-shaped, you know!»</p>
<p>I thought I perhaps was being confessed to so accept my feelings !</p>
<p><i>«Fuu, fuu»</i> (TN: Sound of huffing and puffing)</p>
<p>My feelings exploded without me realising it, but… that was probably my fault. He probably bought it since I requested a pricy gift in return. Listening to the full details later, I understood. It was something he, who had never gifted a present to a girl, had earnestly chosen.</p>
<p>In other words— it was his first gift.</p>
<p><i>Of course I will receive it.</i></p>
<p>Aah, he got me.</p>
<p>I thought as I was looking at myself, wearing the necklace, in the mirror.</p>
<p>Would a time come when I would wear this and go together with him somewhere? That would definitely be a very enjoyable day.</p>
<p>That I was certain of.</p>`,
            2: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">The Time of Realisation</h1>
<p class="text-center text-sm text-gray-500 mb-12">Arisu Sakayanagi SS — Volume 11</p>

<p>In a multi-purpose room. Me and Ayanokouji-kun would be spending some time alone in here. The teachers started talking among each other so they must be doing the final checks.</p>
<p>The strong beatings in my chest felt pleasant to me. Every time I looked at Ayanokouji-kun in front of me, my whole body felt hot as if not wanting to look away.</p>
<p><i>Fufu, just like a maiden in love, isn’t it?</i></p>
<p>I observed myself as if I was a bystander, while enjoying myself from the bottom of my heart.</p>
<p>Let’s savour this moment by striking some conversation before the match starts. The time he and I was granted together was decisively limited after all.</p>
<p>«Finally… finally this day has come at last. I really couldn’t sleep yesterday so I almost overslept today.»</p>
<p>I earnestly started talking about my morning. I stammered a bit since it was the first time raising my voice for a while alone with him. He looked a bit troubled but replied back.</p>
<p>«I have no recollection of making you wait though. Me meeting you was a coincident in the first place.»</p>
<p>It was easy to think why he would have doubts regarding whether it was a coincident or not.</p>
<p>«You are saying that if you did not enter this school, we would never have met?»</p>
<p>The world is big. True, the fact we met once again may have been close to a coincidence.</p>
<p>«Certainly, the fact we met at this school was a coincidence. However, I’m convinced I would meet you again someday. It was meant to be, yes fate.»</p>
<p>Yes, it was not a coincidence, it was inevitable.</p>
<p>«Fate? That’s quite an abstract thing to say.»</p>
<p>True, there was no logic to that, just some hunch. But… here we were talking to each other, right? Ayanokouji-kun.</p>
<p><i>If this wasn’t fate, what else would you say it was?</i></p>
<p>«It’s because I’m also a maiden.»</p>
<p>But there was probably no need to say more than that.</p>
<p>«If you didn’t enrol at this school, that should only have been a delay of 3 years. I had confidence I could hide my anticipation deep inside my heart without rushing it.</p>
<p>But, I can’t hold it back anymore. inevitably, I felt the days becoming longer knowing you were there by my side. I want to fight, suppressing that feeling have been quite difficult. That’s the extent of my dream.»</p>
<p>A loved one. I was thinking of him as my childhood friend, although selfishly. That’s why I couldn’t stop the overflowing words by my own will. I was talking to him non-stop, as if I was yearning for him, one topic after another. That calm look he gave me and those pupils gave me an even greater pleasure.</p>
<p>«Are you not afraid of waking up from that dream?»</p>
<p>Nothing is as kind as a dream. When you wake up from that dream and return back to reality, that happiness will disappear in a moment. Fighting Ayanokouji-kun and lose, and then despair. Or, winning so easily that all that’s left was disappointment.</p>
<p>I couldn’t overlook the chance that it could happen.</p>
<p><i>But that was fine.</i></p>
<p>«Because dreams are things you are meant to wake up from.»</p>
<p>If I could find an ‘answer’, I will be satisfied with that.</p>
<p>«Normally, I would ask you to… go easy on me but…»</p>
<p>I pierced his elusive pupils.</p>
<p>«Please meet me with all you have.»</p>
<p>He definitely, although just faintly, confirmed by a nod. And at the same time, I could begin to guess what he had in mind. The thing keeping me from enjoying myself to the fullest, its true identity.</p>
<p>«It would be a lie to say that I don’t have any conflicting feelings about this. An inadequate test like this won’t be good enough for us to prove our abilities. Us leaders are limited to how we can influence the outcome, right?»</p>
<p>The main point of this exam was how the difference in abilities between the classes would spell victory or defeat. The leaders’ intervention and the rules for the events are nothing more than accessories. Of course there would be classes that would force their way through, but that was a story for another time.</p>
<p>«That being said, if the leaders’ influence was too large another problem arrives. I think I ought to consider your situation too Ayanokouji-kun. You don’t want your classmates to figure out your real abilities, right?»</p>
<p>This special exam had meaning in that it was simply a secret duel between me and Ayanokouji-kun. It was just an extension of a game, played in secret, unknown to the teachers and other students.</p>
<p>That’s why it was understandable why Ayanokouji-kun was looking so suspicious. No matter how limited our way of fighting may be, it would be fine as long as it was fair for today. Ascertaining anything more or less would be a luxury so it was best left unspoken.</p>
<p>The teachers were approaching. The special exam will start very soon.</p>
<p>«A—lright! The exam will begin soo—n! Back to your seats!»</p>
<p>After hearing what Hoshinomiya-sensei said, me and Ayanokouji returned back to our seats.</p>
<p>I could no longer see his face, but there was no need to be discouraged by that.</p>
<p>Because as long as we were in the same room, I could exchange words with him anytime, as many times as I wanted.</p>
<p>«Best regards, Ayanokouji-kun.»</p>
<p>I sent a greeting in his direction in a voice so low that nobody could hear.</p>
<p>I suppressed the throbbings of my heart—</p>
<p><i>And now, the time my dreams will be realised has come.</i></p>`,
            3: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">A Truly Frightening Person</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kikyō Kushida SS — Volume 11</p>

<p>«Hey, do you have some time?»</p>
<p>I was about to go home when a boy behind me called out. I didn’t even need to turn around, it was that boy again. He was always following that girl around, a really troublesome person.</p>
<p>«What is it, Ayanokouji-kun?»</p>
<p>I made a smile and then slowly returned his gaze. I cannot show any gaps regarding my appearance here in this school corridor, in a public space.</p>
<p>«I see, so you aren’t going to support her this time.»</p>
<p>I was wondering what he was about to say since he ran after me… I felt exasperated inside but still put up my guard.</p>
<p>«Can we talk while walking?»</p>
<p>«That’s fine.»</p>
<p>This boy called Ayanokouji Kiyotaka-kun, his whole existence was like an ungraspable shadow to me.</p>
<p>«Do you have any plans for today?»</p>
<p>«Yes, I’m planning on meeting up with some girls from class B. You think having fun considering what’s happening now is considered bad, don’t you?»</p>
<p>From the first time we met, he was just an unremarkable student. He was somewhat good-looking, but that was it. He wasn’t particularly athletic or smart. Just a normal person.</p>
<p>«No, it’s necessary to take breaks. I think everyone understands that.</p>
<p><i>But— I was far too naive.</i></p>
<p>Maybe this boy, possesses something even greater than what I judged him to. Like what he’s doing now, trying to shake me up pointing out my actions one by one.</p>
<p>«So you do understand it, the reason I’m not doing anything right now? I was thinking it was fine to expel you and assisted Yamauchi with it. What face do you think I should make , what act do you think I can put up to lead the class, after everything was brought to light?»</p>
<p>I was being honest, explaining to him why I couldn’t do anything in my situation.</p>
<p>«You don’t seem to accept that do you? I can see it on your face—»</p>
<p>«Well, yeah.»</p>
<p>As could be expected, there was no way he would accept just from this explanation, right?</p>
<p><i>Even though it should have worked for any other idiot.</i></p>
<p>«I’ll say it now, it’s not that I don’t want to help Horikita-san because she’s the leader now, okay?»</p>
<p>That’s the worst part of it though…</p>
<p>«Is that true?»</p>
<p>He was doubting me, but no way will I ever acknowledge it.</p>
<p>«Really, it’s true.»</p>
<p>But this boy didn’t change his expression.</p>
<p>«Ah, I doubt it.»</p>
<p>«How do I look like to you, I wonder? How about it?»</p>
<p>I wasn’t particularly interested, but he caught my attention.</p>
<p>I want to know what this boy is thinking, what he is feeling.</p>
<p>If I not— I won’t be able to remove that girl.</p>
<p>That’s why it was inevitable for me to, just barely, show a little bit of my inner self, to him.</p>
<p>If I don’t…. I don’t think I can ever win.</p>
<p><i>Surely, this boy must be—— a frightening person.</i></p>`,
            4: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">The Morning of Fulfilment</h1>
<p class="text-center text-sm text-gray-500 mb-12">Arisu Sakayanagi SS — Volume 11</p>

<p>I was deep at sleep.</p>
<p>The appearances of myself when I was young, and of him was repeatedly projected within.</p>
<p>A famous museum of that world. Even the exhibition objects made for an artistic spectacle I think. It was that grandeur, that sweet, and that madly affectionable.</p>
<p>In a sense, that was love.</p>
<p>There are many kinds of love.</p>
<p>Love, charity, affection… love-and-hate.</p>
<p>I think, I feel all of those towards him.</p>
<p>«…3 hours and 36 minutes…»</p>
<p>Each time I wake up, I always check how much time I’ve slept. If I don’t sleep for 7-8 hours, I don’t feel refreshed. That was because I was so excited last night that I couldn’t sleep.</p>
<p>The body pillow I use to support my sleep every day didn’t seem to work that much.</p>
<p>«Fufufu…»</p>
<p>I let out a sweet laughter before I knew it.</p>
<p>I have never experienced becoming this excited before so I couldn’t control my feelings.</p>
<p>The more I tried to hold back the laughter, a smile appeared, so naturally, on my face.</p>
<p>I can’t help it.</p>
<p>I was exposed by the contradiction dwelling within myself right now.</p>
<p>A me that would never lose to anyone.</p>
<p>A him that maybe would teach me defeat.</p>
<p>The conflicting feelings were clashing, going back and forth, neither side yielding.</p>
<p>However, there will definitely be a conclusion.</p>
<p>In other words, superiority and inferiority will be decided.</p>
<p><i>Ah— how beautiful it is.</i></p>
<p>I hugged my body pillow tightly and a pleasant drowsiness came over me.</p>
<p>I was already napping, wanting to enjoy a passionate dance with him.</p>
<p>That dream of mine was being interrupted by the cold sounds of the ringing sounds from my cellphone.</p>
<p>«Was that Masumi…? She’s also a worrywart, right.»</p>
<p>I know. Let’s continue the rest of my dream later tonight.</p>
<p>After I have settled it with him, made it clear as black and white.</p>
<p>At my leisure.</p>`,
            5: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">An Encouragement of Adventure</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kiyotaka Ayanokōji SS — Volume 11</p>

<p>This is what happened on a certain holiday.</p>
<p>A few students gathered in my room.</p>
<p>"VR experience?"</p>
<p>"Yes! VR experience."</p>
<p>Sotomura and Ike showed a cheerful smile, holding something that looks like a helmet. It seems to be the latest game; when you put on this thing to play, you can experience the game in a virtual space.</p>
<p>"It seems like 4 people will play as a team so I want to try."</p>
<p>That's why there are four devices.</p>
<p>"Then why did you look for me and Ayanokōji-kun?"</p>
<p>"If we let Ken play, he will become obsessed and will always want to keep it for himself. If it's you then it won't be like that."</p>
<p>Horikita looked completely uninterested, but I was a little bit interested in playing.</p>
<p>Men are creatures driven by adventurous spirit, aren't they?</p>
<p>"We were called out during our free time because of this boring thing?"</p>
<p>Horikita stood up, staring at Ike.</p>
<p>"I'm not going to take part."</p>
<p>"Wait! This is a game that recommends 4 people, so ah... just play for a while, please!"</p>
<p>"I'm not interested in things such as games."</p>
<p>"Please think about it again!"</p>
<p>The two guys seemed to be repeatedly begging on the ground in prostration.</p>
<p>"How about just listening to them? This could also be for the class."</p>
<p>Trivial interactions like these can also make progress in interpersonal relationships.</p>
<p>"...... Good grief. Only for a while, right? Then I'll head back after."</p>
<p>Like this, Horikita eventually accepted it. She reluctantly put on the device. Sotomura and Ike followed right after.</p>
<p>"There are 12 occupations at the beginning. Choose according to your own preferences. Ah, don't choose the same as the others. I choose the Paladin! It looks very handsome!"</p>
<p>Ike was a Paladin, while Sotomura chose the Elf. From the description, it appears to be a character in defense and recovery. The importance of the defense is not yet clear.</p>
<p>Horikita simply selected the Swordsman, which is the first option, while I picked a job called the Summoner.</p>
<p>After the career selection was over, I felt my consciousness instantly slipped away and my vision is covered with white light, then the sight of the imaginary world came into view.</p>
<p>I have been introduced to mobile games soon after entering school, but compared to those, the quality of this game is not just in the same dimension.</p>
<p>"This is really...... very amazing."</p>
<p>It's no surprise that Horikita couldn't help but gasped.</p>
<p>Despite being imaginary, the realism of it is not far away from an actual world.</p>
<p>There was a smell of trees coming from elsewhere.</p>
<p>I tried to pinch my arm, but there was not really any pain, just only a tiny feeling. This is probably necessary in order to stay connected with reality.</p>
<p>I could confirm that my body, except for the appearance of different clothing, seemed no different.</p>
<p>"It's like the real world."</p>
<p>Horikita said something similar to what I was thinking.</p>
<p>She tried to pull out the sword she was wearing on her waist.</p>
<p>"But I haven't touched this thing once, huh?"</p>
<p>"It seems there is a technical correction, and you can't become stronger without accumulating EXP."</p>
<p>"Even if you say so,——"</p>
<p>Horikita wielded the sword several times with awe and then sheathed it.</p>
<p>"Oh! That's fast! The beginner tutorial is here!"</p>
<p>Ike wielded his shield and sword excitedly, although he was still not used to the movements.</p>
<p>Two wolf-shaped monsters appeared in front of us.</p>
<p>"Are you going to fight this thing?"</p>
<p>"Horikita, you need to fight too. Please, swordsman!"</p>
<p>Ike then put up his shield.</p>
<p>"Wouldn't there be all sort of ethical issues? Like killing animals?"</p>
<p>"It's just a game..."</p>
<p>The monsters pounced on us in an instant.</p>
<p>"Hey! Woah!! Why are you attacking me first! Is there any passive skill that attracts monsters??"</p>
<p>Ike said something that people normally couldn't really understand, and was sent flying back to the ground by the wolves.</p>
<p>"Hurts, it hurts, it's numb and painful! Help me!"</p>
<p>Sotomura hurriedly chant a recovery spell, but it had very little effect.</p>
<p>"Hori...... Horikita and Ayanokōji! Help! Help me!"</p>
<p>Ike desperately asked us for help. But I had no idea what to do. Speaking of my character, what exactly does a summoner do? There seems to be no swords or shields, so I'm not clear how to fight at all.</p>
<p>"I'm leaving it to you, Horikita."</p>
<p>"Me? ....... I'm not doing it.</p>
<p>The swordsman gave up the battle. Or rather, let's say she did not have the spirit to do it in the first place...</p>
<p>"Uwaaa!"</p>
<p>Ike yelled continuously, then Sotomura also screamed.</p>
<p>In a short time their bodies were destroyed and turned into dust.</p>
<p>"What happened?"</p>
<p>"It's probably... being sent somewhere after getting killed?</p>
<p>"Umu...."</p>
<p>The two wolves gradually approached us, who were still struggling to understand the situation.</p>
<p>They were clearly showing their murderous intent to hunt us.</p>
<p>"In short, it can only be fighting..."</p>
<p>I don't know how a summoner fights, so I simply shortened the distance to give one of the wolves a physical blow.</p>
<p>After being punched, the wolf screamed and was sent flying.</p>
<p>There was a clear feeling on my fist, with a sense of excitement and stimulation.</p>
<p>As I avoided the wolf's sharp teeth, I repeated the punches again.</p>
<p>However, unlike in reality, it doesn't seem to do a lot of damage</p>
<p>This occupation is definitely not a melee type.</p>
<p>I couldn't completely avoid the wolf's counter-attack and received a little bit of damage.</p>
<p>An electrical pain, making zapping sounds, ran through my body</p>
<p>"Not good..."</p>
<p>The situation is obviously unfavorable. Am I going to get killed like Ike if this goes on?</p>
<p>"—I guess it can't be helped then."</p>
<p>Horikita sighed while holding up the sword.</p>
<p>Her stance looked unexpectedly well.</p>
<p>"Ha—!"</p>
<p>Horikita shortened the distance, slashed horizontally, and hit the wolf-shaped monster. Does she have a feel for it? She did wipe out the monster with just a stream of movements. It seems that this game is directly related to physical ability in reality. The other wolf, which was licking its teeth at me, turned to Horikita.</p>
<p>It released a murderous intent even stronger than before, probably because its companion had been down.</p>
<p>Horikita, looking as though she's already a swordmaster, put up a flawless stance.</p>
<p>At the same time as the wolf started charging, she also ran up while keeping her distance from it.</p>
<p>"Sword—slash!"</p>
<p>Horikita shouted out the name of the skill, cutting the wolf apart in a single slash.</p>
<p>"......Beautiful"</p>
<p>I clapped my hands and while I stood up, Horikita let out a breath.</p>
<p>"The body moved on its own. I was made to say something weird involuntarily."</p>
<p>It is probably due to the necessary procedure in the game’s programming beforehand to launch the unique kill.</p>
<p>"So how was it? The first RPG experience of your life."</p>
<p>"Well... maybe it’s more interesting than I thought."</p>
<p>Horikita seemed to also be interested in the unknown adventure.</p>
<p>Maybe this game will be popular among us for the time being.</p>
<p>"What about Ike-kun and Sotomura-kun?"</p>
<p>"Who knows......"</p>
<p>With this, our wonderful adventure story was born.</p>`
        }
    },
    {
        id: "ss-y1-v11.5",
        volumeNumber: "SS",
        title: "Short Stories: Volume 11.5",
        releaseDateJP: "Sep 25, 2019",
        releaseDateEN: "-",
        isbnJP: "-",
        isbnEN: "-",
        chapters: [
            "Hiyori Shiina : By Reading Books",
            "Chiaki Matsushita : Mind Games",
            "Arisu Sakayanagi : A Prediction of the Future",
            "Kiyotaka Ayanokōji : The Second Chapter is about to Begin",
            "Kakeru Ryūen : What Became Apparent to Me a Year After",
            "Kei Karuizawa : The Person Who Became Dear to Me",
            "Honami Ichinose : Honami Ichinose’s Spring Vacation - The Final Day -",
            "Kiyotaka Ayanokōji : The First Phone Call / Volume 11.75"
        ],
        characters: ["Hiyori Shiina", "Chiaki Matsushita", "Arisu Sakayanagi", "Kiyotaka Ayanokōji", "Kakeru Ryūen", "Kei Karuizawa", "Honami Ichinose"],
        coverImage: "/assets/y1v11.5.jpg",
        inProgress: false,

        customChapters: {
            1: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">By Reading Books</h1>
<p class="text-center text-sm text-gray-500 mb-12">Hiyori Shiina SS — Volume 11.5</p>

<p>It was at the beginning of the spring vacation. I wore my casual clothes and headed for the Keyaki mall.</p>
<p>«Good day, Ayanokouji-kun»</p>
<p>And there, right in front of me was a student from another class right. I felt this was somewhat unusual as we went to the cafe.</p>
<p>«You are pretty early.»</p>
<p>«There’s no way I can be late since I’m the one inviting after all.</p>
<p>Ayanokouji-kun, who was so intelligent and so mature, was as relaxed as always. I have become fond of him lately for that.</p>
<p>No, perhaps not in the terms of someone of the opposite sex, but it could be said it was him as a person perhaps…</p>
<p>That’s why I end up wanting to meet him like this, whether it was a day off or not. I don’t have much experience going out to play with friends during day offs in the first place.</p>
<p>The main reason is that I haven’t managed to make any close friends, however.</p>
<p>That’s exactly why I don’t want to make them wait for me I think. Thinking that I would trouble him and disappoint him is what I wouldn’t like. Even though I don’t think of him as someone of the opposite sex, I end up doing it in the end. I become happy thinking that I’m the same as other girls experiencing the same thing as well. I wonder what this fluffy feeling I can’t quite define is? I’m looking forward to investigate this during our meeting.</p>
<p>«I am sorry for inviting you so suddenly.»</p>
<p>Even though I contacted him and, somewhat impatiently, said that he would be grateful if we could meet during early April, he didn’t make a troubled face and I even made him change his schedule this sudden.</p>
<p>_______________</p>
<p>«I don’t have anything planned during the spring vacation for that matter so don’t worry about it. Well then—»</p>
<p>«The library finally got some new books yesterday.»</p>
<p>I wanted to speak so much that I failed to suppress my excitement and showed him my bag.</p>
<p>«So that’s why I wanted us to share information as fast as possible.»</p>
<p>Before I knew it, we arrived at the cafe but since spring vacation just started, it was crowded.</p>
<p>«There are more people here than I thought.»</p>
<p>We managed to secure a seat by the window and close to the counter so we decided on that spot.</p>
<p>«We don’t get many chances to meet like this during day offs so it feels so fresh to me.»</p>
<p>«You may be right about that.»</p>
<p>It was almost like a boy and a girl having a date together. No, it was precisely that but I will become more embarrassed by this train of thinking so I decided to stop.</p>
<p>«Well, let us begin… Do you want to look at the books I brought with me?»</p>
<p>I tried to conceal my embarrassment by taking out a book I looked forward to show him. But then I remembered there was something I wanted to talk to him about.</p>
<p>My own class. It was just as important as me being his friend. Even if he ends up disliking me, it was something I had to do.</p>
<p>«Right, before we get excited talking about books, there is something I wanted to talk about, could I take some of your time?»</p>
<p>I brought up, looking directly at his eyes. His eyes looked as if he could see through anything, just as always. I felt that a day would come where we would fight against each other in the future. He would most likely be the most dangerous enemy my class will ever face. While looking him in the eyes, I became even more convinced of that.</p>`,
            2: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Mind Games</h1>
<p class="text-center text-sm text-gray-500 mb-12">Chiaki Matsushita SS — Volume 11.5</p>

<p>I’m chasing Ayanokouji-kun with light steps pondering on where to take a break. And then when I arrived at that corner I had seen him disappear from, I met him. He was facing me.</p>
<p>«Wha!?»</p>
<p>I let out my surprised voice at this unexpected development.</p>
<p>Why. That was obvious, he had noticed that I was tailing him.</p>
<p>«Do you need something from me?»</p>
<p>«Me, what do you mean? …is something I want to say, but it seems like you’ve seen through me already.»</p>
<p>He was inviting me so I can’t feign ignorance as that would just feel like I’m conceding more goals. I’d better just acknowledge it.</p>
<p>«Yes, well you see, I was chasing after you.»</p>
<p>I may have sucked at this, but do people usually notice someone tailing them? Was I seen by him somewhere?</p>
<p>Just as I expected, Ayanokouji-kun in front of me is may not be normal. I became more wary of him.</p>
<p>Now that it has come to this, it’s either sink or swim, let’s make sure. As long as it’s mind games, I don’t think I will lose.</p>
<p>«Why do you think I followed after you?»</p>
<p>I’ll try to lead him with questions to make him tell me to what degree he has noticed me.</p>
<p>«Who knows, I don’t know where to start. More importantly, when did you begin tailing me?»</p>
<p>I wanted to pry some information from him, but he had managed to hand the ball over to me.</p>
<p>«It was just now maybe. So—»</p>
<p>«Just now?»</p>
<p>Ah, dang, he only throws such ambiguous questions. But I have to stay calm. Stay calm. If I let my rhythm get disturbed and say something incoherent, it will be my loss. I wonder if I should just say that I thought him and the chairman meeting as unusual and therefore followed after him? If I say I started to tail him at the cafe, he would most likely ask why.</p>
<p>«Who was it again… right, from when you talked to that new chairman I think?»</p>
<p>Since I’ve managed to keep some space between him and me, I will take the initiative and come back at you.</p>
<p>«So did something happen? You talked with the chairman, right?»</p>
<p>«It seems like ‘e’s planning to remodel Keyaki mall and saw me and asked for opinions. What facilities would make me happy etc. He asked me a few questions about that.»</p>
<p>«Ohhh, so that’s what it was…»</p>
<p>Certainly, there were other adults there when they started conversing so it might just be a coincidence. It seems like there are no links between his true abilities and the Chairman after all.</p>
<p>«So, what about it?»</p>
<p>«It’s not really related to that, you see. There is just something I found interesting.»</p>
<p>The thing with the Chairman wasn’t important to me. It was whether Ayanokouji-kun was being serious or not, only that.</p>
<p>«You know, during the final special exam last semester… wasn’t you the leader, right?»</p>
<p>Since I ended up meeting him like this, I’ll throw every single information I know at him.</p>
<p>«During that flash arithmetic event, the answer you and Kouenji gave was the same.»</p>
<p>It wasn’t a math problem that could be solved by chance.</p>
<p>«I did flash arithmetics during middle school so I’m relatively good at it.»</p>
<p>«I’m the same but, that level of yours can’t explained as being relatively good at it, right? That’s probably at the national level, is what I think.»</p>
<p>«That was just because it was an event I’m good at. In fact, I’ve also participated in national competitions.»</p>
<p>Ayanokouji-kun easily admitted to it.</p>
<p>«…really?»</p>
<p>«Yeah. Since it was an event I’m good at, you may have misunderstood me I think.</p>
<p>It seems plausible that there are persons who are only good at flash arithmetics. But unless you are pretty smart, you won’t be able to solve problems just like that one. And the fact that he didn’t reveal that he was good at it is a problem in itself.</p>
<p>«But you know, why didn’t you just tell us that a bit earlier?»</p>
<p>«That’s true. But, you know my personality, right? I’m not at the position where I can just take the initiative and tell the class about it. I became the leader since I had the protection point after all. What’s more, our opponent was Sakayanagi from class A. Even if I said I was good at it, I was worried since I didn’t know whether they would have believed me or not.»</p>
<p>…I had planned to corner him, but I can’t get a grasp of him. He easily answered my questions like it was the natural thing to do. He didn’t try to excuse himself in some flustered manner either. The are a lot of people that don’t have confidence in themselves. They are unable to declare something since they are can’t say what they want to. There is nothing in our conversation that is weird when comparing it to how he has been until now.</p>
<p>«That… Well, that may be so.»</p>
<p>Oh, no no! I can’t seem to say what I was thinking in my head. Was it because he didn’t lie? No, even if that was the case, there is still something suspicious thing going on. It may change if brought up the cases regarding Hirata-kun and Karuizawa-san. My pace may have been thrown into disorder, but I promised again from the bottom of my heart, yet again, that I would regain my strength for what to come next.</p>`,
            3: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">A Prediction of the Future</h1>
<p class="text-center text-sm text-gray-500 mb-12">Arisu Sakayanagi SS — Volume 11.5</p>

<p>After the the end-of-term ceremony was concluded, all students went to their respective classrooms for some last explanations before I left the classroom at immediately.</p>
<p>That being said, with my impaired feet, I couldn’t move as fast as other people. I eventually reached my goal and waited for that person who seemingly was delayed.</p>
<p>«What are you doing out here, Sakayanagi?»</p>
<p>Mashima, who attended the farewell ceremony for the 3rd years, puzzlingly asked me as he came closer.</p>
<p>«I’ve been waiting for you, Mashima-sensei»</p>
<p>«…For me?»</p>
<p>«Yes. You are about to meet Ayanokouji-kun and Chabashira-sensei in the reception room, am I correct?»</p>
<p>«What do you mean?»</p>
<p>Mashima-sensei wouldn’t admit it, at least on the surface.</p>
<p>But I already know the finer details. From the time I gave Ayanokouji-kun my father’s phone number, I expected this to happen.</p>
<p>«You must have gotten a message from Chairman Sakayanagi to meet Ayanokouji-kun. Chabashira-sensei should be present as well, I presume?»</p>
<p>«How do you know that?»</p>
<p>———————</p>
<p>«I just know more about the situation than both you and Chabashira-sensei, that’s all.»</p>
<p>«Even if that’s true, your name wasn’t mentioned.»</p>
<p>«That’s because I’m taking part on the spur of the moment. Could you I accompany you?»</p>
<p>«I sadly don’t have the permission to do so. It would become a problem were I to take you along.»</p>
<p>«I will just meet up with you later even if we went separately. So why don’t we just go together in the first place? I believe It will save you some time as well.»</p>
<p>Even if I didn’t get his permission to go together with him, I would visit the reception room alone.</p>
<p>In other words, the conclusion would be the same anyway.</p>
<p>«…Fine, since it looks like you already know about the circumstances.»</p>
<p>«Thank you very much.»</p>
<p>I turned around and took a step towards the reception room. He soon caught up to me.</p>
<p>«What in the world are we going to discuss at this meeting?»</p>
<p>«Something very, very interesting.»</p>
<p>I can predict some of the moves the Interim Chairman Tsukishiro may use in the future. I feel my boring days are getting more colourful just by imagining that. Following after Mashima, we walked into the reception room where Ayanokouji-kun is waiting.</p>
<p>To enjoy my time with him. And to enjoy what’s about to come.</p>`,
            4: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">The Second Chapter is about to Begin</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kiyotaka Ayanokōji SS — Volume 11.5</p>

<p>On a certain day during spring vacation, with the second semester just around the corner.</p>
<p>Some cherry blossoms had already begun to bloom, welcoming the change from winter to spring.</p>
<p>“He-y!”</p>
<p>While I looked up at the cherry trees, a girl’s voice rang out to me.</p>
<p>“Here, here! Look here Ayanokouji-kun!”</p>
<p>It was a voice I’ve heard before, I thought when I suddenly was called by name. I soon realised who it was.</p>
<p>Ichinose was sitting under a cherry tree waving her hand at me.</p>
<p>“Did you go to school today?”</p>
<p>She was sitting there in her school uniform, right beneath the tree.</p>
<p>“Yes, I checked out the student council for a bit since the 2nd years said it probably will get busier now.”</p>
<p>“So you decided to do some flower viewing on your way back?”</p>
<p>“That’s it! I think I found the perfect spot.”</p>
<p>Looking right up at the sky and the cherry blossoms intertwined, she narrowed her eyes in a happy smile.</p>
<p>“I’ve never seen such small cherry flowers before. So they really do exist after all.”</p>
<p>This variety of cherries are called Omuro Ariake. Their small height, about 2m-4m, are one of their defining traits.</p>
<p>The school didn’t have those until last year so they must have been moved here from somewhere.</p>
<p>“How about it, Ayanokouji-kun? Want to sit?”</p>
<p>She prompted me to sit down beside where by tapping on the spot beside her. How should I put it, how she is able to carelessly call out to boys just like that is so like her and probably part of the reason she is so popular.</p>
<p>It wasn’t prohibited to move closer to the trees, but there was a warning sign that said we shouldn’t touch them without any reason to.</p>
<p>I didn’t have any excuses to refuse her so I sat down beside her.</p>
<p>“How about we watch them together?”</p>
<p>Thus I also looked straight up as she had.</p>
<p>“Oh-”</p>
<p>They may have been small, but at this range, they left a surprisingly strong impression.</p>
<p>From time to time, a sudden gust of wind would make the pretty cherry petals dance and scatter around. As if it was all but a dream.</p>
<p>“It’s nice to do some flower viewing from time to time, right?”</p>
<p>“Yeah.”</p>
<p>While we both looked up at the cherry blossoms, we talked together about the most casual of things.</p>
<p>The impending battle looming in the distance all but forgotten for just this moment.</p>`,
            5: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">What Became Apparent to Me a Year After</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kakeru Ryūen SS — Volume 11.5</p>

<p>It happened on that day right before the spring break was over.</p>
<p>I dragged myself to the Keyaki mall. Once I defeated Ichinose and managed to return our class back to Class C, I decided to fight with Ayanokouji again.</p>
<p>I have to think up a good strategy or else it won’t work on that guy.</p>
<p>Which is why I seek someone who can become my hands and legs and move according to my will. No matter how insignificant they may be.</p>
<p>There should be several useful pawns in his class that could be easily swayed.</p>
<p>My class on the other hand, has for some reason too many of those who only have muscles for brain.</p>
<p>They are sorta excellent as foot soldiers, but they can’t follow detailed instructions.</p>
<p>And what’s more, my class still has a deeply rooted distrust towards me.</p>
<p>Right now, Ishizaki holds the position as the ruler of the class, but I’m getting bored of his acting skills.</p>
<p>A critical point for me to think over is when to take the reigns from him again.</p>
<p>«Good morning. Are you alone today?»</p>
<p>I sat down at a seat at the Keyaki Mall, waiting for Ibuki and Ishizaki to arrive, when a certain busybody called out to me.</p>
<p>It was Sakayanagi Arisu.</p>
<p>«I can say the same to you, what happened to those bodyguards of yours, Sakayanagi?»</p>
<p>I can’t see Kamuro or Hashimoto here either, those servants of hers… no, maybe I should say familiars?</p>
<p>«Fufu. Even I go out alone sometimes. Congratulations on your comeback victory.»</p>
<p>«Same for you. You beat Suzune’s class I hear.»</p>
<p>«4 wins, 3 losses. It was close of a result despite fighting with a lower class however.»</p>
<p>«But you won so they have just become stepping stones for you in the end.»</p>
<p>A lead of 500 points was too large to lose during a single year. You could safely assume it meant you were safe. Or at least, that’s how lazy people normally thought.</p>
<p>«Empty words coming from you. You mean to say you plan to close the gap in 2 years…no, within this year. At least, you eyes do.»</p>
<p>«Kuku, who knows?»</p>
<p>«How about it? Care for a cup of tea we while discuss the next year together?»</p>
<p>«Together? I have nothing to talk about. And I’m not in the mood either, alright?»</p>
<p>«Oh, really? I was thinking of a little celebration for your comeback. My treat, of course.»</p>
<p>She’s obviously looking down on me, but she’s still watching my every steps. Making sure she doesn’t miss anything.</p>
<p>If I show her even the slightest of strange movements, it would bring her joy beyond compare.</p>
<p>The battle between us has already begun.</p>
<p>Well, I can play with her anytime. We’ll just try to read into what’s hidden behind each other anyway.</p>
<p>I didn’t have any intention of doing that today.</p>
<p>«Later.»</p>
<p>I stood up, looking for another place to go. Seeing me like that, she called out to me again.</p>
<p>«Your aura has certainly changed.»</p>
<p>«What?»</p>
<p>«A year ago, you would look at me with full enmity in your eyes. You surely don’t look like that same person to me.»</p>
<p>I laughed making a sound saying ‘as if’. The same smile appeared on her face.</p>
<p>So, she doesn’t think I’m showering her with all my hostility now, is she? I thought while holding back my laughter.</p>
<p>«The fact that you still are directing it towards me hasn’t changed. But it’s obvious that the ‘colour’ has changed.»</p>
<p>It seems like what she tried to say wasn’t what I had expected.</p>
<p>«I didn’t think you were even worthy of being my opponent right after we entered school, but it’s different now it seems.»</p>
<p>«That’s stupid, Sakayanagi. Aren’t you overestimating yourself a bit, huh? My principle is to win no matter what methods I have to use. I can kick you down to the ground right here, right now if I wanted, you see? And just so you know, I won’t show any mercy to you even if you cry.»</p>
<p>Since neither Hashimoto not Kitou were here, she was just a weak girl who couldn’t even beat a brat.</p>
<p>«As you say, I’d have no chance to win in a physical fight, but that doesn’t mean you’d win either.»</p>
<p>«So you won’t admit a loss from violence just because of your handicap, huh?»</p>
<p>«That’s not the problem. Physical power is also a necessary factor to any fights. I’m just saying that exercising violence against me here wouldn’t led to your victory. A lot of people and survellance cameras are watching us now after all. It won’t just end with a suspension, if you raised a hand against me now. I, who can’t move as I please, I may say. What a third party observer would deem a victory is also an important factor as well.»</p>
<p>«Logically that is. But what if I wanted to use force to claim my victory for my own satisfaction, what then?»</p>
<p>I took a step towards her and lightly raised a clenched fist in a somewhat threatening manner.</p>
<p>I think it would have been a bit cute to see her frightened by this, somewhat charming. But she didn’t fret a single bit, only showing me that unpleasant smile of hers.</p>
<p>She’s way too naive if she thought I wouldn’t hit her for real. But that wasn’t the reason it seems.</p>
<p>She didn’t mind since being hit wasn’t a loss, but instead a step leading to her victory. That’s what her eyes told me.</p>
<p>«You do have intelligence, despite your appearances. I’m just relieved you also can calculate your gains and losses.»</p>
<p>Even if I punched her, she would end up brandishing her mark of the lowest scum onto me.</p>
<p>«I think you, as you are right now, have grown to be worthy of playing with, you know?»</p>
<p>You say I’ve grown during this year?</p>
<p>Lol….you say the most ridiculous things as you please.</p>
<p>«I haven’t changed at all.»</p>
<p>«You sure about that? You’ve changed quite a bit as far as I can see.»</p>
<p>She was still persistent on that despite my denial.</p>
<p>Foolish ideas, I thought…</p>
<p>But, I might have changed a bit.</p>
<p>I thought I didn’t have any room for growth after middle school.</p>
<p>I thought I had matured completely.</p>
<p>And everyone else was my playthings.</p>
<p>I had no empathy towards such things.</p>
<p>«The current you seems to have changed your view compared to how you were a year ago perhaps?»</p>
<p>Right… I’ve changed how I view things.</p>
<p>I decided this school wasn’t much of anything once I took control over Class-C in April.</p>
<p>I was aware that Sakayanagi, who used Katsuragi as her plaything, was pretty smart, but other than that she wasn’t worth taking notice of.</p>
<p>I only thought about how to stave off boredom by crushing Class B or Class D.</p>
<p>It’s laughable now that I think about it.</p>
<p>But anyway, even I was surprised by how much motivation I had towards trying to pull up my class now.</p>
<p>«It seems to me that something big has happened that made you change this much.»</p>
<p>Her attitude and eyes were telling me she was testing me, but I didn’t show her anything and just let it go.</p>
<p>«Fufu, I’m looking forward to— a new war this year too, okay?»</p>
<p>«You’ll end up regretting it.»</p>
<p>I noticed the guys I’d been waiting for, then turned my back and walked away from Sakayanagi.</p>
<p>«Good morning, Ryuuen-san. That was Sakayanagi…right? Did something happen?»</p>
<p>Ishizaki was taking glances back while trying to catch up to me.</p>
<p>«Just some small talk.»</p>
<p>I’d have wasted time and energy trying to explain to these guys anyway.</p>
<p>Even idiots learn in their idiotic ways since he shut his mouth and didn’t pursue the topic.</p>
<p>«Ah, by the way, we met Ayanokouji this morning. He also went to this Keyaki mall.»</p>
<p>«I see.»</p>
<p>At this time of day, the amount of places which could be used was limited.</p>
<p>Meeting up and talking with someone on the 2nd floor should be about it.</p>
<p>Well, I don’t think that would end in just 10 to 20 minutes.</p>
<p>Going out this early must mean that the talk must be somewhat important after all.</p>
<p>I’ll make these guys make the first moves for starters.</p>
<p>«Oh by the way, Ryuuen-san. I suggested a plan to Ayanokouji, but he refused it though. To have him and you in the same class and aim for Class A together…»</p>
<p>«Are you an idiot? No way Ryuuen will say that’s a good idea even if you told him.»</p>
<p>Ibuki was disgusted by it, but what Ishizaki said shouldn’t be overlooked.</p>
<p>It’s true that if we joined forces for real, there would be no enemies left standing in our year.</p>
<p>«Well, that’s impossible.»</p>
<p>«So it was impossible… yeah… sorry for my stupid suggestion.»</p>
<p>«And? Why did you call us today?»</p>
<p>«I wanted to talk about this 2nd year and what follows.»</p>
<p>«What follows?»</p>
<p>«It doesn’t have anything to do with special exams, I will crush Class A this year.»</p>
<p>«…You’re not joking, are you?»</p>
<p>«Sakayanagi won’t show us any openings but if we let Class A steamroll their way, any chances we have will disappear. I’ll drag them back with me and defeat them to smithereens, no matter how stubborn I have to be.»</p>
<p>But well, I need to make sure of the timing and such at least.</p>
<p>«What about Class B?»</p>
<p>«They’ll just self-destruct if we leave them alone. They won’t use any dirty tricks.»</p>
<p>In other words, they aren’t worth paying any attention to.</p>
<p>«Oh yeah, we don’t need to be aware of them, right.»</p>
<p>The only exception may be Kanzaki, but he isn’t worthy of being my opponent at this stage.</p>
<p>Whether he only has the ability to bark or not will become apparent sooner or later.</p>
<p>«That’s right, no need to pay them any attention, but—that’s why we must go out and finish them. To crush them so that they never can rise again.»</p>
<p>And defeating all classes will send him a signal as well.</p>
<p>1</p>
<p>I was waiting for Ayanokouji to leave the café.</p>
<p>If he wasn’t alone, I would have to wait for the next chance even though it was a bother.</p>
<p>«You heard from Ishizaki that I would be here?»</p>
<p>«Yeah, I came here searching for you, even wasting my time to greet you, you hear?»</p>
<p>I looked at his face which lacked any expressions making it hard to figure him out.</p>
<p>«You already do know my contact info I’m sure. Wouldn’t it have been better to contact me then?»</p>
<p>«I thought it was better to speak up face to face to that dull face of yours.»</p>
<p>I don’t know anything about how he feels, but that’s why I can’t evade meeting him straight on.</p>
<p>To conquer him, breaking through that mental iron wall of his is of utmost importance.</p>
<p>Anyway, there is something I must check with him.</p>
<p>«What did you mean by ‘that’?»</p>
<p>Even though I asked vaguely, he immediately understood.</p>
<p>The thing I meant by ‘that’ was his message he made Hiyori tell me.</p>
<p>I’d won 5 to 2 against Ichinose and crushed her during the last special exam of the year</p>
<p>Her mental state as a leader had been shook thoroughly, the pressure to her classmates has continued, and some of her classmates couldn’t join the exam due to stomachaches caused by me.</p>
<p>He knew about my methods and cheekily left a message for me: ‘I’d would have easily managed over 5 wins with a better method’.</p>
<p>That move just made me want to talk to him whether he wanted it or not.</p>
<p>It was as if I was being forced to obediently listen to his preaching from some god’s point of view.</p>
<p>«Just as I said. I’d have done better than you.»</p>
<p>«What methods I use is up to me alone.»</p>
<p>If I’d use any other methods and won 5 times, it would still just be another 5 wins to me.</p>
<p>No difference at all.</p>
<p>«That isn’t definite. If you had to leave the school due to some blunder, I would be sad.»</p>
<p>Some blunder? No way I was going to lose against Ichinose.</p>
<p>I’d just follow this stupid joke of his.</p>
<p>«Kuku, what’s up with this joke? Quite arrogant of you despite losing to Sakayanagi and getting demoted.»</p>
<p>The match between Ayanokouji and Sakayanagi’s classes ended 4 to 3 with Sakayanagi leading her class to victory.</p>
<p>But of course, there is no way he’s inferior to her.</p>
<p>Since the peculiarity of that exam meant that the Keeps was limited in what they could do.</p>
<p>No… if he’d been serious I’d bet he could win any exams.</p>
<p>Which means he wasn’t serious or that someone interfered.</p>
<p>«It’s true our class lost to hers. I have no excuse for that since I was the Keep. Whether Sakayanagi is superior to me or not is for you to find out later.»</p>
<p>«What the heck— you looking down on me?»</p>
<p>He easily acknowledged his loss, but that just irritated me even more.</p>
<p>I came closer and peeked at his eyes which lacked any colours.</p>
<p>«Someone who beat me once can never be be inferior to her.»</p>
<p>«That’s flattering of you, but what if I really didn’t rest on my laurels during the exam?»</p>
<p>«Too bad, I don’t believe it. You didn’t want to fight from the beginning then rather than you getting serious and losing…. or that some kind of accident occurred. That’s a hell lotta easier to believe. I’d believe it if the school wanted to maintain some image and planned for Class A to win anyway.»</p>
<p>His strength isn’t on the level of a 1st year high schooler.</p>
<p>I came to experience that during our fight in the first year with my own body.</p>
<p>I even want to know what kind of life he’s led up until now to become this kind of monster.</p>
<p>«And? What are you going to do now after your comeback, Ryuuen?»</p>
<p>«You don’t get to decide whether I come back or not. I plan to enjoy this nice vacation for a bit longer.»</p>
<p>Now is the best time to make those various moves behind the stages.</p>
<p>«But… If I get bored of this vacation, I’ll crush Ichinose and Sakayanagi to warm up.»</p>
<p>«That’s a big change of heart.»</p>
<p>«Kukuku, certainly. I’m surprised too. I didn’t think I’d get this excited over a chance to take my revenge on you.»</p>
<p>«I see.»</p>
<p>No matter what he replied, there was no use trying to read into his intent.</p>
<p>But what’s clear is that Ayanokouji isn’t an ally of Sakayanagi and Ichinose.</p>
<p>No, it may be that even Suzune isn’t regarded as an ally by him either.</p>
<p>«I’m grateful for that. If you could crush Ichinose and Sakayanagi first, it would be the best I could hope for. I can smoothly aim upwards.»</p>
<p>«I thought you didn’t care about your class at all?»</p>
<p>«It’s a bit different now. That class will be in a good position by the same time next year. Even if I won’t be there anymore.»</p>
<p>«What?»</p>
<p>Even if I won’t be there anymore?</p>
<p>«I may be targeted from now on so it won’t be a surprise if someone managed to expel me. Right?»</p>
<p>That’s a stupid thing to worry about.</p>
<p>«Rest assured. If someone is expelling you, that will be me.»</p>
<p>I can’t think of any others from any classes in any years who can expel him.</p>
<p>I laughed silently due to my own thoughts.</p>
<p>«But—»</p>
<p>I said to him and suddenly closed the distance between us.</p>
<p>Giving him no time for caution, as quick as I could, as fast, directly at him.</p>
<p>«Raaahhh!!»</p>
<p>I aimed for the space right in front of his eyes using my right foot with no hesitation.</p>
<p>But that was the opening move.</p>
<p>Even if you managed to deal with it, it wasn’t that important.</p>
<p>It was just the first strike that came with any fight.</p>
<p>But if he managed to dodge it, that would be his downfall.</p>
<p>I proceeded to kick his head with all the power I could muster with my left foot.</p>
<p>But—</p>
<p>He calmly dodged the kick as if he’d known a second strike would come after the first.</p>
<p>He wasn’t too early or too late.</p>
<p>With just the neccessary movements.</p>
<p>I had thought of a third strike, but the movements he showed dampened my intent and tension released from my muscles.</p>
<p>«Hah, so even a surprise attack like this won’t do anything. What kind of monster are you?»</p>
<p>No matter how this was repeated, he would easily defend against it.</p>
<p>Any fights using force, in other words, brawls, won’t be able to defeat his intricacy.</p>
<p>I have to relentlessly strike at him using some unorthodox methods or strategy or else it won’t work.</p>
<p>«Quite the showman you are.»</p>
<p>He must be telling me to be aware of my time and place, but that’s why I did it.</p>
<p>The fact that a countless amount of cameras were installed here just made it clear I had to do it.</p>
<p>«My heart is howling at me; to devour you.»</p>
<p>If he was even a bit irritated by this surprise attack, I would gladly do it again.</p>
<p>«Not striking back?»</p>
<p>I tried provoking him, but he didn’t move of course.</p>
<p>«I want to avoid any risks from fighting with you here. And it’s not the right time for that.»</p>
<p>«Hah, the mercy of the strong? You saying it makes it seem so much real, this is getting exciting.»</p>
<p>My muscles began to tension again.</p>
<p>Maybe I shall strike him again now, I thought but…</p>
<p>«You have potential. That’s why you should grow up properly, Ryuuen.»</p>
<p>My tension turned into anger once I heard those words. That wasn’t the words used when dealing with an equal opponent, far from it.</p>
<p>Venting my frustration, I punched at those damn walls.</p>
<p>«Grow up properly, you say? When the fuck did you become my teacher?»</p>
<p>«I’m just telling you the truth. But don’t let the carpet get so easily pulled from under you.»</p>
<p>«What?»</p>
<p>«It seems you did some dirty tricks using Ishizaki and the others. It wasn’t a bad idea to use the karaoke to mix in those stuff, but if there were any traces left you would have been finished. You would have been expelled on the spot. Even if you managed to feign ignorance, if something strange had happened during the exam, the school would be suspicious of you, of course. The fact Ichinose didn’t file a complaint was your only saving grace, Ryuuen.»</p>
<p>«I used her good-naturedness in my calculations.»</p>
<p>«If so that was naive of you. You will never be able to catch up to me at this rate.»</p>
<p>«…Look at you.»</p>
<p>He pinpointed out the naivity in my strategy.</p>
<p>«Whether you heed my warning is for you to decide. But— if you remain as you are now, a rematch isn’t even on the table.»</p>
<p>So he’s saying if I wanted to fight with him, I need to grow up?</p>
<p>I’d kill everyone who tries to advise or warn me but…</p>
<p>«I’ll listen to your stupid advice since we’re here right now. But I’ll crush you sooner or later.»</p>
<p>Since he was the only exception I’d acknowledged, I’ll take it as an adult for now.</p>
<p>«That’s the spirit, Ryuuen. Having you crush and expel me doesn’t sound too bad after all.»</p>
<p>2</p>
<p>«Having you crush and expel me doesn’t sound too bad, eh?»</p>
<p>What an idiotic thing to say.</p>
<p>If you so desire it, I’ll expel you.</p>
<p>I usually would have said that straight to him, but even such a bluff wouldn’t work against him.</p>
<p>I’ve always challenged any opponent I’ve met without any fear until now.</p>
<p>Even an opponent such as Albert that I’ve lost to once would be devoured just like a snake and made obedient.</p>
<p>I have confidence that I can discover the winning move against any and all humans.</p>
<p>But he isn’t in the same dimension as those.</p>
<p>Any physical attacks don’t seem to work on him, not even mentioning psychologic ones.</p>
<p>And I don’t even need to say this, but I’ve never seen someone with such a sharp mind before either.</p>
<p>«Makes me laugh when thinking of my old self.»</p>
<p>Someone absurd has slipped into class D.</p>
<p>But there is no need to panic.</p>
<p>What’s important isn’t who is winning right now.</p>
<p>If I’m the victor at the very moment we are graduating in two years, there’s no problem at all.</p>
<p>It doesn’t matter whether we are in class A or Class D or whatever.</p>
<p>Me and Ayanokouji. The hound or the bitch. Who is which? It’s fine, I just need to win.</p>
<p>‘No matter the methods’ I have to use.</p>`,
            6: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">The Person Who Became Dear to Me</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kei Karuizawa SS — Volume 11.5</p>

<p>I finished changing my clothes and grabbed my phone, feeling a bit melancholic.</p>
<p>«Good grief… what is it now?»</p>
<p>I was preparing myself when I suddenly got a call.</p>
<p>An unknown 11-digits phone number that wasn’t in my contact list.</p>
<p>I obviously knew who it was. It was Kiyotaka.</p>
<p>The scene of him and Hiyori-san on that date appeared before my eyes.</p>
<p>He’s free to hang out with whoever, wherever he wants to, of course.</p>
<p>Since our relationship wasn’t anything special after all.</p>
<p>But still…</p>
<p>«Ah, enough! Why do I have to feel so irritated and getting pushed around by someone like him!»</p>
<p>I stopped thinking too deeply about it, dispelled my feelings and prepared to take the call.</p>
<p>I planned to eat out with Ishikura-san and Sonoda-san today. I’m going to have fun today.</p>
<p>«It’s me, sorry for calling you.»</p>
<p>I restrained my voice which was about to burst and calmed myself down.</p>
<p>«It’s fine. What?»</p>
<p>«You sound like you have some complaints though.»</p>
<p>«Not really. Not complaining, just wanted to confirm something with you.»</p>
<p>«That I called you out recently and didn’t get in touch with you later?»</p>
<p>If you understood that, so at least follow up, will you! Whoops, I should keep that to myself…</p>
<p>«You seem to understand then, what? Just wanted to harass me?»</p>
<p>«Could we meet up and talk about that?»</p>
<p>«Eh?»</p>
<p>«Remember the thing I said I would tell you if I remembered it? I just did. Could you come over?»</p>
<p>What’s up with that?… You didn’t contact me after that and now you want to talk with me? And in your room?</p>
<p>«Good grief… You always do it when it pleases you… I guess it’s fine. I’m not taking any responsibilities if someone sees me, okay?»</p>
<p>It will become a problem if I were seen trying to enter a boy’s room alone.</p>
<p>«Don’t worry about that.»</p>
<p>I thought he would have some misgivings about that, but it seems I was wrong.</p>
<p>Well, if he says he isn’t worried, then why should I?</p>
<p>«Got it. Ah, I have something planned by 7pm so I can’t have you take too much time, okay?»</p>
<p>«It will be short. Probably around 10 to 20 minutes.»</p>
<p>«It’s alright for me then. See you later.»</p>
<p>I ended the call and sighed.</p>
<p>I felt relieved the call didn’t turn for the worse.</p>
<p>«Why does my heart have to be pushed around by a guy like him?»</p>
<p>I don’t feel like being toying around by him either, but well, it can’t be helped.</p>
<p>This is a shield to protect myself.</p>
<p>Yes, that’s why it can’t be helped.</p>
<p>«…It wouldn’t be fair otherwise, right.»</p>
<p>1</p>
<p>I began to prepare myself before leaving for his room.</p>
<p>A meal is waiting for me after this. So let’s be done with this quickly, that kind of feeling.</p>
<p>But it was so quiet when I arrived.</p>
<p>He was just looking at me, not delving into any important topics.</p>
<p>«So, what is it?»</p>
<p>Don’t even tell me he has forgotten the matter after I came here?</p>
<p>His answer when I tried to cut through this awkwardness was…</p>
<p>«What do you mean?»</p>
<p>An evasive reply. I became a bit irritated by that.</p>
<p>«What do you mean? Didn’t you just recall what you wanted to say?»</p>
<p>«Now that you say it, yes, I suppose that’s true.»</p>
<p>«……»</p>
<p>I thought he would start talking again, but he became quiet and the silence returned.</p>
<p>«Oh come on, what is it?»</p>
<p>«Well, you don’t need to be so hasty.»</p>
<p>«I’m pretty sure I mentioned it, didn’t I? I’m eating with my friends at 7PM at the Keyaki Mall. Understand?»</p>
<p>«There still a lot of time. It’s going to be fine.»</p>
<p>«Hmm, you kinda give me the goosebumps, you know? The way you just go on and on about nonsense.»</p>
<p>He normally would keep things as short as neccessary, precisely to the point.</p>
<p>That was my usual impression of him.</p>
<p>I thought his usual self was impressive, honestly.</p>
<p>How shall I say it? He was being so calm despite the fact we are the same age. Or rather cool. That part of him was somewhat attractive, so to say.</p>
<p>No, no. I have to be angry now. What up with praising him now?</p>
<p>«…Oh by the way. I have something I need to tell you, okay?»</p>
<p>I didn’t like how he wasn’t himself so I changed the topic.</p>
<p>«Something you need to tell me?»</p>
<p>«Satou-san is suspecting my relationship with you, you know?»</p>
<p>Even if he had the initiative, even I could influence it.</p>
<p>That’s why I sometimes have to start the conversation myself. If not, something bad might occur.</p>
<p>«I thought she might begin to hate me after I rejected her. What suspicions?»</p>
<p>It would be easy to think she would dislike him after that. But his situation is totally different.</p>
<p>He seems like he would need an explanation about romance from A to Z just for him to understand as he’s kind of distant, right?</p>
<p>Unlike any middle schoolers I know of.</p>
<p>That’s what giving me so much stress right now.</p>
<p>«She thinks I might have broken up with Hirata to go out with you. She tried to ask me about it in a roundabout way.»</p>
<p>It was about a boy she liked so of course she would notice something.</p>
<p>And that—I really saw him differently from every other boy.</p>
<p>«I refuted it of course, but I’m not sure how much she believed me.»</p>
<p>I don’t think she would forgive me if she knew we were meeting up with each other like this.</p>
<p>If we had changed positions, I would feel the same.</p>
<p>«I see. I had a similar conversation too.»</p>
<p>«What? Something similar?»</p>
<p>There shouldn’t be anything similar to that as far as I know, except for Satou-san’s case.</p>
<p>«Matsushita was a bit suspicious about you and me. Asked whether we were dating or not.»</p>
<p>Eh? Matsushita? By Matsushita you mean the one from our class?</p>
<p>My mind went into a panic from the sudden mention of her name.</p>
<p>«Wha? What? No way, right? Really? You’re not joking?»</p>
<p>He nodded slightly and talked about the events leading to that but…</p>
<p>You mean, she started suspecting his real abilities during the special exam?</p>
<p>«W-wait a bit! I can’t keep up with this!»</p>
<p>It was bad enough with Satou alone. And now even Matsushita?</p>
<p>I’m getting a headache…</p>
<p>«I think it’s getting really bad, kinda… do you have something up your sleeve?»</p>
<p>It should still be possible to calm down the situation if I just apologised once of twice.</p>
<p>But what he replied back was…</p>
<p>«I think it’s fine to ignore it?»</p>
<p>He chose the worst option with that composed expression of his.</p>
<p>«No, no, that’s no good!— And our relationship… isn’t anything special to begin with either!»</p>
<p>I was the one who had the most to lose if I ignored it!</p>
<p>«Do you dislike others thinking there may be something even when there’s nothing there? Even if, let’s say she spread a rumour, just let her say what she wants, right?»</p>
<p>«What? Just let her say what she wants?…There’s no way I can do that. Tell it straight to her right now, that there is nothing between us!»</p>
<p>Whatever the truth may be, the important thing is how to convey that to the other person.</p>
<p>I want to avoid destroying the peace in my class at all costs.</p>
<p>Does he think it will be fine as long as he protects me with his body?</p>
<p>If he thinks so, he’s wrong. Peace of mind is also important.</p>
<p>«It may have the opposite effect if I tried to explain it to Matsushita now.»</p>
<p>«You should have known that from the start, didn’t you? Why make such a half-assed lie?»</p>
<p>«No matter how I explained it, it wouldn’t change anything. Satou is suspecting there is something between us right? Since she is close to Matsushita, she will eventually tell her that our relationship isn’t normal. No, the possibility that she made a move after being told is pretty high.»</p>
<p>«…You, may be right…»</p>
<p>Rumours of our relationship being spread far and wide, even if it was a lie, would be a total loss for me.</p>
<p>Or perhaps not. There would be a small saving grace. But just a small one, really.</p>
<p>If we truly were going out then, well, I mean, we aren’t so…</p>
<p>«I mean… won’t they think that I broke up with Hirata-kun to date you instead? I’m the one getting troubled if there’s even the slightest chance it spreads to our class, no, our whole school, you know.»</p>
<p>«Why should that worry you?»</p>
<p>He wouldn’t understand me no matter what.</p>
<p>«Listen here—. If such a rumour was was out there, it would affect me from now on.»</p>
<p>What’s going on inside this skull of this love-dead boy?</p>
<p>That’s precisely why he didn’t notice Satou’s and my feelings for him.</p>
<p>«Okay? Being approached by the opposite sex is hard if there is some scent of some other person there, understood?»</p>
<p>I pointed my finger at him.</p>
<p>«So you are saying you want to find a new love and that I’m in the way?»</p>
<p>«…That’s how it is.»</p>
<p>Honestly, I’m not thinking of getting a boyfriend now, but, that’s just how it is.</p>
<p>I seemed to have gotten the message through so I proceeded forward.</p>
<p>I was beginning to think he was pretending dumb after all this.</p>
<p>But since we arrived at this topic, I once again recalled that scene.</p>
<p>Hiyori-san and him discussing happily at the cafe.</p>
<p>«Do you really understand? Right, care to listen?»</p>
<p>Since we ended up here, I have to confirm something.</p>
<p>He called me up saying he had something to discuss, yet made me look at that until the end.</p>
<p>There’s no way I can leave without saying my piece of mind about that.</p>
<p>«You…are you close to this Shiina?»</p>
<p>«Shiina? Ah, you mean Hiyori?»</p>
<p>«Hiyo…»</p>
<p>He easily used her first name instead of her last.</p>
<p>Well… he’s free to call other girls by their first names as he pleases, like me.</p>
<p>Everyone in that group he’s so close to also uses their first name I hear.</p>
<p>But, Shiina-san is well, not like that… not that I care.</p>
<p>«We are certainly rather close. We both like to read books so our hobbies align. How about it?»</p>
<p>S-same hobbies… r-reading books? Isn’t that like, the total opposite from me?…</p>
<p>«Heee? The same hobby? Reading books… heee….heee. So completely different from me?»</p>
<p>I slipped up, saying exactly what I thought.</p>
<p>«And?»</p>
<p>He nonchalantly faced me like he was asking why I wanted to hear about that in the first place.</p>
<p>«…No, I mean… Argh! I forgot what to say!»</p>
<p>I just didn’t have anything else I’d wanted to say for that matter.</p>
<p>Anyway, I tried to squeeze out some words as if to compromise, still worrying.</p>
<p>«If the rumours about you and I were to spread, I mean, it would be harder for you to get closer to Shiina-san, right?»</p>
<p>There was some part of me that wanted him to deny it.</p>
<p>«I see. That’s certainly a possibility.»</p>
<p>But he didn’t deny it, instead he agreed with me in full honesty.</p>
<p>«Not that I care really. You’re free to get close to whoever you want for that matter.»</p>
<p>I turned my back towards him as if trying to run away.</p>
<p>Hey, I can’t do this anymore. My feelings I had tried to hold in was about to burst forth.</p>
<p>«Sorry but, could… we have leave this talk for later? I want to head for Keyaki mall a bit early. There may be some boys from other classes coming too. I’m going to chase away the rumours so I need to get into the mood. I don’t have the time to deal with you.»</p>
<p>I wouldn’t know what else I could have ended up saying to him if I were to stay here.</p>
<p>I don’t know what these depressing feeling are. I just don’t understand.</p>
<p>«Mood?»</p>
<p>«I’m looking for a new boyfriend since I broke up with Hirata-kun. Got a problem?»</p>
<p>It was just a gathering of girls eating together, but I wanted to put on the airs.</p>
<p>«Not at all.»</p>
<p>«…Right? That’s why I’m leaving now.»</p>
<p>He stood up as if trying to chase after me.</p>
<p>«It’s fine.»</p>
<p>Even if he were to see me out, it would just make me feel sick.</p>
<p>«Kei.»</p>
<p>He called me by my name.</p>
<p>Why does my heart have to skip just like that?</p>
<p>«What is it already?»</p>
<p>Why am I the only one being pushed here and there by his words and actions?</p>
<p>«It’s just, if you don’t like it, it’s fine for you to keep looking another way.»</p>
<p>Why am I— the only one…who…</p>
<p>«What?»</p>
<p>«Will you go out with me?»</p>
<p>«Eh?»</p>
<p>I frowned and turned around, not sure I understood.</p>
<p>«What did you say? Or, what is it?»</p>
<p>He was listening to me when I said I didn’t have time, right?</p>
<p>While I was thinking along those lines…</p>
<p>«That’s not what I meant. I asked if, you wanted to go out with me.»</p>
<p>Me going out with him?</p>
<p>«No I mean— I don’t really… under…stand…»</p>
<p>Going out?</p>
<p>Hmm…?</p>
<p>Eh, wait a bit. Wait a bit…?</p>
<p>The way he looked at me, that gaze and presence.</p>
<p>«W-ai, eh, wha, what!? What’s up with that joke, that’s bad taste even for you…!?»</p>
<p>«If it was a joke.»</p>
<p>Yes, if it was a joke, it wasn’t something I’ll ever forgive him for.</p>
<p>Swaying my heart right and left, left and right and saying this after all that.</p>
<p>«B-but—didn’t you mention getting closer to Shiina-san just now!?»</p>
<p>«That was the joke.»</p>
<p>«But—the other day—»</p>
<p>Didn’t you get intimate with Shiina-san recently…!</p>
<p>But Kiyotaka’s next words drowned out what I was about to say.</p>
<p>«That was simply, well. I wanted to test whether you would became jealous or not, I suppose.»</p>
<p>Then… so there really isn’t anything between him and Shiina-san?</p>
<p>In other words, he wanted to see my reaction to watching that?</p>
<p>So—well, Kiyotaka is, in other words, eh…</p>
<p>«If this is a joke, this is the last chance to take it back… You do know that, don’t you?»</p>
<p>If that was his idea of teasing, it would be a huge shame and disgrace on my part.</p>
<p>Our relationship will most likely break apart at once.</p>
<p>I became unable to reply.</p>
<p>No, maybe I had wanted it to be a joke.</p>
<p>Since—if he was serious, that would mean, that I have to answer him too—</p>
<p>«Of course it’s not a joke. May I hear your reply?»</p>
<p>It’s not… a joke?</p>
<p>You mean… you were serious?</p>
<p>So, in other words, Kiyotaka came to like me?</p>
<p>My mind went blank for a second, then it began to overflow.</p>
<p>«…Y, y-y-y-y-y-you are asking that of me!?»</p>
<p>Something inside me broke out and I started panicking, making a quite the commotion.</p>
<p>«As I said earlier, you can look away, reject me, you can do what you wish to.»</p>
<p>«I didn’t say I was going to ignore you! B-but, why!?»</p>
<p>«By ‘why’ you mean?»</p>
<p>«Well, that is, me… I mean… by the way, why today…?»</p>
<p>It was so abrupt. All the frustration built up until now was turned upside down in dramatical fashion.</p>
<p>«I wonder why. I’m not sure I can explain it very well, but there is one thing I can explain. I wanted to stop any other guy from getting you as their girlfriend.»</p>
<p>So my lie had taken form in a most unlikely way inside his heart?</p>
<p>«So you mean— You, you like… like… me?»</p>
<p>I tried putting it into words, trying to confirm it. There’s no way I wasn’t going to.</p>
<p>I wanted to hear his answer directly with my ears.</p>
<p>«Yes, I love Karuizawa Kei.»</p>
<p>I love Karuizawa Kei.</p>
<p>I love Karuizawa Kei.</p>
<p>I love Karuizawa Kei.</p>
<p>W-haaaaaaa!!</p>
<p>His voice was reverberating inside my brain like a ringing bell.</p>
<p>«You answer is?»</p>
<p>A-answer? What’s an answer? What should I say back to someone who said they liked me?</p>
<p>‘I love you too!’ Do I have to say something that embarrasing!?</p>
<p>Eh, eh? If I answer him, wouldn’t our relationship change here and there!?</p>
<p>I wanted to answer, but the panic, the agony, my head just shorted out.</p>
<p>No that’s wrong. I, have to admit it. That I’ve loved Kiyotaka from way back.</p>
<p>But still, I’d had thought our relationship didn’t change, wouldn’t change. But I was wrong.</p>
<p>«—I-I’ll let you go out… with me.»</p>
<p>I answered him as if confessing something.</p>
<p>But, he was somehow calm, didn’t cry, didn’t show a smile, just showing strong will.</p>
<p>«Can I take it as you also liking me?»</p>
<p>But he didn’t seem satisfied or something, like he wanted something else.</p>
<p>«You want me to say it!?»</p>
<p>«Yes, I want you to.»</p>
<p>N-no way. Ah, I haven’t even prepared for any confessions at all!</p>
<p>If I knew it would turn like this, I would have made some more effort and done something!</p>
<p>The only saving grace was that I was planning to go out to eat with some friends. I’m so glad for that…</p>
<p>Being dressed up like this, I mean.</p>
<p>But I have to answer him here.</p>
<p>As a boy and a girl. It was important to answer to the other person’s feelings.</p>
<p>«…Well, you know? I mean, you know—….I, I lik…kinda… kinda, sorta…»</p>
<p>I was so trying to be cool, but the voice I managed was so low I doubt it was audible.</p>
<p>I didn’t like that weakness of mine so I added some words as I continued.</p>
<p>«I also… like… fell for… It’s frustrating but…I-I admit, I admit it!»</p>
<p>Indeed. I looked at his eyes and said it. He then reached out his hands and gently grabbed both of mine.</p>
<p>«W-wait!? D-don’t say you wanted to kiss!?»</p>
<p>«No. I won’t do that. Not yet.»</p>
<p>He won’t do it yet!?</p>
<p>A-ahem. It’s certainly too early, I mean. A kiss now, when my heart isn’t calming down would be…right.</p>
<p>«—Well, if it’s only this…»</p>
<p>As he held me in his arms, I thought he had grown a bit from before.</p>
<p>«Hey, haven’t you gotten a bit taller?»</p>
<p>«I may have.»</p>
<p>From today, he and I started walking on the path of lovers together, unbelievably enough.</p>
<p>How far does this path of happiness stretch on?</p>
<p>Will this path go on forever?…</p>
<p>That’s—</p>`,
            7: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">Honami Ichinose’s Spring Vacation - The Final Day -</h1>
<p class="text-center text-sm text-gray-500 mb-12">Honami Ichinose SS — Volume 11.5</p>

<p>The last day of spring vacation. I met up with Chihiro-chan and Mako-chan and we went to the Keyaki mall together. It felt refreshing since it had been such a long vacation in which I’d often spent thinking alone.</p>
<p>«Honami-chan, are you feeling well? Are you okay?» Mako-chan asked. Since I was usually always acompanied by someone so seeing me shutting myself in my room so often and not seeing each other made her worry.</p>
<p>«No, everything is fine. Sorry for that, even when you invited me so many times. I was thinking about strategies for the second year, you could say. So I just wanted to think about how to proceed from now.»</p>
<p>«That’s well and all but… Honami-chan, don’t think too much by yourself, discuss it with us too, okay?» Chihiro, who had been following the conversation, continued.</p>
<p>The final term exams were already over so that was surely why they were so sensitive right now.</p>
<p>«Yes, I’m relying on you all so if something happens, I’ll definitely talk to you.»</p>
<p>That was my true feelings. But it was also true that I didn’t want to worry them unneccesarily.</p>
<p>Class 1-B was losing big thanks to me during the final exam. I was forced into making a big decision.</p>
<p>But that’s precisely why I need to choose my words carefully. I could easily worry them by what I said and that would be a loss to me.</p>
<p>«Oh, don’t worry, really. I’m hundred percent fine! Spring vacation had me fully charged!»</p>
<p>This spring break had given me new energy. A spring vacation unlike anything before. It was far more remarkable.</p>
<p>It was a bit different from the usual ones where I went out and played with my friends.</p>
<p>Even now, my chest felt hotter by thinking of Ayanokouji-kun and what had transpired on that day.</p>
<p>When I’d revealed my weakness in his room, something that had been weighting on me, just poof, disappeared.</p>
<p>I can still fight.</p>
<p>I felt I once again that I could fight with Sakayanagi-san, Ryuuen-kun and Horikita-san and the others.</p>
<p>Of course, whether we could compete with them we wouldn’t know until we try. But at least I avoided the worst case scenario: losing my will fight even before it happens.</p>
<p>This is without doubt, due to Ayanokouji-kun. I’m not sure I’d be here without him. A treasured friend… a very, a very important…</p>
<p>Somehow, the next words didn’t appear to me.</p>
<p>How should I express it properly? There was a part of me that just refused to think about it.</p>
<p>That’s because there is something I must not forget.</p>
<p>The fact that we are in different classes. It was an unchangeable fact that we couldn’t mingle and meet with each other. Unlike last year where we could cooperate due to our class points being vastly different, the gap had closed.</p>
<p>As Horikita said face to face with me, we had become rivals competing with each other.</p>
<p>In other words, if we end up fighting, we shouldn’t be affected by personal feelings.</p>
<p>What if, what if he and I were in the same class…</p>
<p>Then all my worries would disappear and I could fight without any hesitation.</p>
<p>«Stop stop. Don’t think any further…!»</p>
<p>I shook my head with great vigor in order to calm down the feelings deep within me.</p>
<p>«W-what is it, Honami-chan?»</p>
<p>Mako-chan was surprised by my sudden headshake looked at my worriedly.</p>
<p>«Sorry, sorry. It’s nothing.»</p>
<p>I tend to become too relaxed around my close friends no matter what.</p>
<p>I have to get myself together. It’s the last day of spring vacation after all. My friends were looking forward to meet me so I should stop thinking about this anymore.</p>
<p>I should focus on the first period of our 2nd year for now.</p>
<p>I will have proper time to think about it once the situation has calmed down and I get some time.</p>
<p>We are still Class B, but we have almost no more leeway left.</p>
<p>I intend to follow through with the same goal I had ever since the entrance ceremony last year when we all stood line in line. Standing still is not an option.</p>
<p>—Tomorrow, a new war will come for Class 2-B.</p>`,
            8: `<h1 class="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">The First Phone Call / Volume 11.75</h1>
<p class="text-center text-sm text-gray-500 mb-12">Kiyotaka Ayanokōji SS — Volume 11.5</p>

<p>The spring break was about to end as it was only a single day left.</p>
<p>And even the sun was beginning to set before I noticed it. It was soon bedtime.</p>
<p>I wonder what my classmates are feeling right as they spend this last evening of the break.</p>
<p>The same melancholy as when the weekend ends and Monday begins? Or maybe they are filled with hope for a new year?</p>
<p>If you ask me, I’d say something similar… I was more or less looking forward to going to school next morning.</p>
<p>There was of course a lot of difficulties around each corner.</p>
<p>I don’t need to mention the bet with Horikita, but there was also the high possibility that the first grader from the White Room that Tsukishiro had mentioned had already blended themselves in. The list goes on. A pain in the butt, all of them.</p>
<p>But I’m generally spending my days living as a student at this school.</p>
<p>It’s not a bad thing to spend your holidays as leisurely, but the things that makes me feel the most fulfilled are the stuff that’s expected of students: studying and doing sports.</p>
<p>And above all else—</p>
<p>Something that has changed from last year.</p>
<p>At precisely 10PM in the evening, my phone rang.</p>
<p>I don’t even need to confirm who it is.</p>
<p>Karuizawa Kei.</p>
<p>She was a classmate, and now someone who was more than a friend.</p>
<p>In other words, a call from someone belonging to the category I can describe as my ‘girlfriend’.</p>
<p>Even though we’d been a couple for a few days already, we hadn’t actually met or kept in touch with one another.</p>
<p>It was probably due to the fact that Kei still hadn’t sorted out our relationship yet.</p>
<p>I hadn’t contacted her on my end either and just waited for the spring break to end. But on the last day, meaning today, I received a message at noon saying she wanted to talk by phone at 10PM this evening.</p>
<p>And then, the time has come.</p>
<p>«…Ya-hoo!»</p>
<p>Immediately after receiving the call, I clumsily replied after a short pause.</p>
<p>«Ah.»</p>
<p>«Yikes, that’s blunt.»</p>
<p>«Really? No, perhaps it was.»</p>
<p>If asked whether I believe it sounded like something a boyfriend would say, I’ll definitely say no.</p>
<p>«I was waiting for your call.»</p>
<p>Does this sound boyfriend-like?</p>
<p>I believed it did so I tried saying it.</p>
<p>«Eeeeh!?»</p>
<p>From the other side, a large scream along with the sound of something being toppled over made its way through the phone.</p>
<p>«What happened? Are you alright?»</p>
<p>«I-I’m fine! I just tumbled and fell from by bed. Ow ow…»</p>
<p>Can that be called being ‘fine’?</p>
<p>It seems like she’d calmed herself down after a deep breath after readjusting her position.</p>
<p>«Did you wait for me? For my call?»</p>
<p>«It’s normal for a boyfriend to wait expectantly for a call from his lover, isn’t it?»</p>
<p>«That’s, well, true but… well, it sort of doesn’t sound like anything you’d say at all.»</p>
<p>«I think that counts for both of us.»</p>
<p>We were facing each other for the first time. I as me. She as her.</p>
<p>At times doing something unexpected, other times saying something rash.</p>
<p>It was hard to control it all.</p>
<p>Thus, I decide not to think too much about it.</p>
<p>Am I saying this stuff naturally? What about my actions?</p>
<p>But even those are just the pleasures of love that I will be surrendering myself to.</p>
<p>«Hmm, yes. Perhaps. I still don’t feel like it’s real… we really are dating, aren’t we?»</p>
<p>«Of course we are.»</p>
<p>«… Right, of course. I already knew that but… I thought that, if I asked you about your confession again, you would say that there never was a confession to begin with. That’s why I was a bit late calling you, Kiyotaka.»</p>
<p>It seems that is the reason she never called me before now.</p>
<p>«You know, it would have been fine for you to call me too, don’t you agree?»</p>
<p>«I kinda wanted to wait for that call of yours.»</p>
<p>It was a bit unfair and it was conveyed to her since she still looked a bit glum.</p>
<p>But the conversation soon shifted to the topics of everyday life.</p>
<p>«Ah, have you heard this? I just went out to eat with my friends and—»</p>
<p>It wasn’t a meaningful conversation by any means, but to me it felt so novel and fresh.</p>
<p>Our relationship up until now had been that of the one who uses, and one who was being used. Not that of friends or lovers.</p>
<p>Our names or numbers weren’t stored on either of our phones either. I was usually the one who contacted her, not her.</p>
<p>People would probably say it was a distorted relationship.</p>
<p>But still, that was certainly the only thing connecting both of us.</p>
<p>But that has been muted. Another world was spreading out before my eyes.</p>
<p>«Are you even listening to me?»</p>
<p>She noticed my lack of adequate replies and asked about it.</p>
<p>‘I hear you, I hear you’ was my answer, which satisfied her and she continued talking.</p>
<p>It was a conversation without any real topics.</p>
<p>It had no relation to me.</p>
<p>But still. It was small surprise to me that I thought it was a bit fun.</p>
<p>«And by the way, Kiyotaka. How do I say this, don’t you have anything to share too?»</p>
<p>She wasn’t satisfied by the fact that she was the only one bringing up any topics it seems, thus her request.</p>
<p>Even if you ask me of that, those kind of things are a bit too much for me. Or rather, I’m aware that I’m bad at this.</p>
<p>No, that’s precisely why I had to challenge myself.</p>
<p>«Let’s see…»</p>
<p>I wonder how long I talked for after that?</p>
<p>I’m a bit surprised at how much I talked about all this triffle stuff that I’d never done before.</p>
<p>It was stuff that other people wouldn’t find any interesting.</p>
<p>But Kei was listening, clearly enjoying herself no matter what.</p>
<p>Sometimes she laughed, sometimes she made some quip back at me.</p>
<p>And then the conversation shifted towards the unexpected.</p>
<p>As the sandman was about to unleash his drowsiness upon me, I checked the clock. It was soon 11PM.</p>
<p>Which means we must have talked for about an hour.</p>
<p>It wasn’t a far stretch to say it had been the longest phone call we’ve done by far.</p>
<p>«We should probably end this call soon.»</p>
<p>It would be best to hang up soon, considering what’s laying in store for tomorrow.</p>
<p>«That’s, true.»</p>
<p>She also seemed to understand as she didn’t oppose it.</p>
<p>«See you tomorrow. Good night, Kiyotaka.»</p>
<p>«Good night, Kei.»</p>
<p>We called it quits after calling each others’ names.</p>
<p>«Well, then—». She said at last, but somehow she didn’t end the call.</p>
<p>«What’s up?»</p>
<p>«It’s, I feel it’s a bit hard for me to end it…»</p>
<p>She expressed her reasoning for it.</p>
<p>«…So, can you do it instead?»</p>
<p>«Understood.»</p>
<p>I tapped the button to end the call without hesitation.</p>
<p>«Well then, time to prepare myself before going to bed.»</p>
<p>That was my intention but…</p>
<p>Kei called me again even though we’d ended the call mere seconds ago.</p>
<p>Did she forget to tell me something?</p>
<p>«What’s u——»</p>
<p>«You didn’t even hesitate a bit, did you! Why!»</p>
<p>An ear-splitting scream.</p>
<p>I instinctly held my phone away from my ear, but I could still hear her loud and clear.</p>
<p>«Shouldn’t you, you know, show some hesitation at least!?»</p>
<p>«…I mean, isn’t that normal for ending a call?»</p>
<p>The flow of the conversation went like, we had to prepare for tomorrow so let’s end the call. Both of us should have been on the same paper.</p>
<p>But Kei didn’t seem to like how I ended the call it seems.</p>
<p>«B-but, we had so much fun, didn’t we!»</p>
<p>«Yes. It’s the first time I’d enjoyed myself like this.»</p>
<p>«Then, how do I say this, don’t you feel a little bit sad to see it end as well?»</p>
<p>If she meant that she wanted to talk more and the time permits it, then sure.</p>
<p>«A bit.»</p>
<p>«No way I sense that from you!»</p>
<p>Not accepting my answer, she continued through grinded teeth.</p>
<p>It was good I didn’t put my phone too close to my ear.</p>
<p>I seemed to have hit the nail right on the head as she went on nitpicking everything.</p>
<p>From where that good mood we had earlier had disappeared to, I don’t like this, I don’t like that, even our exciting conversation earlier.</p>
<p>So this is what they call a woman’s heart.</p>
<p>In that case, I’d need some more time to analyse it.</p>
<p>«Huff, puff. … Ah, I feel so refreshed.»</p>
<p>After venting all that and letting it all losse, she seemed to have regained control of her feelings.</p>
<p>«So… what should I do?»</p>
<p>«About what?»</p>
<p>«It’s almost 11:15PM already, you know.»</p>
<p>«Ah…»</p>
<p>Ever since she tried to end the call, the clock never stopped and time continued to chug along.</p>
<p>«Maybe you should end it after all, Kei.»</p>
<p>«Maybe, so.»</p>
<p>Perhaps she was worried about when I was going to end the call, but she somehow objected to that.</p>
<p>«You should end it. Do it properly this time, okay?»</p>
<p>«…Properly?»</p>
<p>I just received an unexpected, unpleasant task.</p>
<p>«That’s right. In a way that won’t rub me the wrong way. Won’t you fulfill this cute wish from your girlfriend?»</p>
<p>She said impishly as if she’d just mounted me and taken the initiative.</p>
<p>«A wish? Cute girlfriend?»</p>
<p>«What? You have some complaints?»</p>
<p>«No, not at all.»</p>
<p>I stood up and headed for my computer.</p>
<p>I might find some clues on the net.</p>
<p>«Just so you know, browsing or anything similar won’t do you any good. I’m listening closely so I’ll know if you do.»</p>
<p>She cornered me as if she’d read my moves.</p>
<p>She sure isn’t some weak girl, I thought in admiration.</p>
<p>In that case the only option for me is to pave out a way with my own strength.</p>
<p>It’s a trial for me who wished for this relationship to begin with.</p>
<p>«—Let’s see.»</p>
<p>I’ll start after a short pause. The reason why I ended the call. Some kind of theory that won’t upset her.</p>
<p>«It’s true I hanged up without hesitation. But, that wasn’t because I thought lightly of you.»</p>
<p>What would be the best words to use in order to bring a call to an end?</p>
<p>I said what I thought out loud.</p>
<p>«It’s a bit sad to end the conversation, true. But that just means we can see each other tomorrow. Don’t you feel the same as well?»</p>
<p>«…Yes. I also want to see you, Kiyotaka…»</p>
<p>It has been some time since the confession.</p>
<p>Naturally, the desire to meet one another would get stronger the time had passed.</p>
<p>«That’s why we should let the time flow. That’s what I think. Taking our time and talk until late at night is fine for me as well. But then today will never end.</p>
<p>«Yes…»</p>
<p>«I want to see you. The reason I didn’t hesitate ending the call is because of those feelings I think.»</p>
<p>«…I see, yes, that’s why…»</p>
<p>«Do you follow me?»</p>
<p>«Well, yeah. I’ll give you a pass for this time.»</p>
<p>She didn’t seem that dissatisfied anymore. I could hear a soft, composed nod through the speaker.</p>
<p>«Since you find it difficult, I’ll end the call for you. Fine with you?»</p>
<p>«Got it. We may not… get the chance to talk tomorrow at school but… I’m looking forward to it.»</p>
<p>«Indeed.»</p>
<p>Following the flow of the conversation, I pressed the button to end the call.</p>
<p>She didn’t call me again, obviously.</p>
<p>Our relationship had changed, but Kei decided to keep it hidden for the time being.</p>
<p>Our chances to talk openly at school will be limited until it goes public.</p>
<p>But stealing glances at each other from time to time should be possible.</p>
<p>At last, the spring break announced its leave, with nothing left undone.</p>
<p>My new school life is starting tomorrow.</p>
<p>If only it could be calm and peaceful.</p>
<p>This wish of mine hasn’t changed even now.</p>
<p>The best would be to leisurely ride down this riverbed in a small boat.</p>
<p>Whether it’s academics, sports or love. There is no knowing where the current will start raging.</p>
<p>That’s——the fun part of school life.</p>`
        }
    }
];
