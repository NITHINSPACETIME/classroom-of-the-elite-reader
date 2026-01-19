
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
        inProgress: true,
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
        inProgress: true,
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
        inProgress: true,
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
        inProgress: true,
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
        inProgress: true,
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
        inProgress: true,
    }
];
