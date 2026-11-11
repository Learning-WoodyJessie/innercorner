/* Library data. Each text has sections (chapters) and verses.
   To add a new text later (Hanuman Chalisa, Lalitha Sahasranamam, Sai Satcharitra…),
   add another entry to LIBRARY with the same shape. */

const FEELINGS = {
  anxious:  {e:"😟", en:"Anxious",  te:"ఆందోళన",   hi:"चिंतित"},
  fear:     {e:"😨", en:"Afraid",   te:"భయం",      hi:"डर"},
  sad:      {e:"😢", en:"Sad",      te:"బాధ",      hi:"दुखी"},
  angry:    {e:"😠", en:"Angry",    te:"కోపం",     hi:"गुस्सा"},
  confused: {e:"😕", en:"Confused", te:"అయోమయం",   hi:"उलझन"},
  stuck:    {e:"🪫", en:"Stuck",    te:"నిరుత్సాహం", hi:"निरुत्साहित"},
  restless: {e:"🌀", en:"Restless", te:"చంచలం",    hi:"बेचैन"},
  grateful: {e:"🙏", en:"Grateful", te:"కృతజ్ఞత",   hi:"कृतज्ञ"}
};

const AREAS = {
  self: {e:"🌱", en:"Personal life",     te:"వ్యక్తిగత జీవితం", hi:"व्यक्तिगत जीवन"},
  work: {e:"💼", en:"Professional life", te:"వృత్తి జీవితం",    hi:"पेशेवर जीवन"}
};

const SPEAKERS = {
  K:{en:"Krishna", te:"శ్రీకృష్ణుడు", hi:"श्रीकृष्ण"},
  A:{en:"Arjuna",  te:"అర్జునుడు",   hi:"अर्जुन"},
  S:{en:"Sanjaya", te:"సంజయుడు",    hi:"संजय"}
};

const GITA_CHAPTERS = [
 {n:"Arjuna Vishada Yoga", en:"Arjuna's despair", te:"అర్జునుని విషాదం", hi:"अर्जुन का विषाद",
  set:"On the battlefield of Kurukshetra, Arjuna sees his own family and teachers in the opposing army and collapses in grief."},
 {n:"Sankhya Yoga", en:"Knowledge of the eternal Self", te:"శాశ్వతమైన ఆత్మ జ్ఞానం", hi:"शाश्वत आत्मा का ज्ञान",
  set:"Arjuna asks Krishna to be his teacher. Krishna begins with the eternal Self and how to act with a steady mind."},
 {n:"Karma Yoga", en:"The path of selfless action", te:"నిష్కామ కర్మ మార్గం", hi:"निष्काम कर्म का मार्ग",
  set:"Arjuna asks: if knowledge is higher, why act at all? Krishna explains action done without selfish attachment."},
 {n:"Jnana Karma Sannyasa Yoga", en:"Knowledge and action", te:"జ్ఞానం మరియు కర్మ", hi:"ज्ञान और कर्म",
  set:"Krishna reveals that this teaching is ancient and that He comes again and again to restore goodness."},
 {n:"Karma Sannyasa Yoga", en:"Acting without attachment", te:"ఆసక్తి లేని కర్మ", hi:"अनासक्त कर्म",
  set:"Arjuna asks: renounce action, or act? Krishna says both reach the goal, but selfless action is the easier road."},
 {n:"Dhyana Yoga", en:"Meditation", te:"ధ్యానం", hi:"ध्यान",
  set:"Krishna teaches meditation: how to sit, how to steady the mind, and why balance in daily life matters."},
 {n:"Jnana Vijnana Yoga", en:"Knowing and realizing God", te:"భగవంతుని తెలుసుకోవడం", hi:"ईश्वर का ज्ञान और अनुभव",
  set:"Krishna explains His own nature: everything in creation rests in Him."},
 {n:"Akshara Brahma Yoga", en:"The imperishable", te:"అక్షర పరబ్రహ్మం", hi:"अक्षर ब्रह्म",
  set:"Arjuna asks what happens at the end of life. Krishna's answer: remember Me always, while doing your duty."},
 {n:"Raja Vidya Raja Guhya Yoga", en:"The royal secret of devotion", te:"రాజవిద్య, రాజరహస్యం", hi:"राजविद्या, राजगुह्य",
  set:"Krishna shares the 'royal secret': simple, sincere devotion is enough."},
 {n:"Vibhuti Yoga", en:"Divine glories", te:"దివ్య విభూతులు", hi:"दिव्य विभूतियाँ",
  set:"Krishna describes His glories: wherever there is excellence, there is a spark of Him."},
 {n:"Vishvarupa Darshana Yoga", en:"The cosmic form", te:"విశ్వరూప దర్శనం", hi:"विश्वरूप दर्शन",
  set:"Arjuna asks to see Krishna's universal form, and is awed and humbled by what he sees."},
 {n:"Bhakti Yoga", en:"The path of devotion", te:"భక్తి మార్గం", hi:"भक्ति मार्ग",
  set:"Which devotee is dearest? Krishna answers with a list of the qualities of a loving heart."},
 {n:"Kshetra Kshetrajna Vibhaga Yoga", en:"The body and the knower", te:"క్షేత్రం, క్షేత్రజ్ఞుడు", hi:"क्षेत्र और क्षेत्रज्ञ",
  set:"Krishna separates the body (the 'field') from the soul that knows it, and lists the marks of true knowledge."},
 {n:"Gunatraya Vibhaga Yoga", en:"The three qualities", te:"మూడు గుణాలు", hi:"तीन गुण",
  set:"Krishna explains the three qualities of nature (sattva, rajas, tamas) that shape every mind."},
 {n:"Purushottama Yoga", en:"The Supreme Person", te:"పురుషోత్తముడు", hi:"पुरुषोत्तम",
  set:"Krishna describes the tree of life with roots above, and the Supreme Person beyond it."},
 {n:"Daivasura Sampad Vibhaga Yoga", en:"Divine and demonic traits", te:"దైవీ, ఆసురీ సంపదలు", hi:"दैवी और आसुरी संपदा",
  set:"Krishna contrasts the qualities that lift us with the ones that pull us down."},
 {n:"Shraddhatraya Vibhaga Yoga", en:"Three kinds of faith", te:"మూడు రకాల శ్రద్ధ", hi:"तीन प्रकार की श्रद्धा",
  set:"Faith, food, worship and even speech each take the colour of the three qualities."},
 {n:"Moksha Sannyasa Yoga", en:"Liberation through surrender", te:"మోక్ష సన్యాసం", hi:"मोक्ष संन्यास",
  set:"Krishna sums up the whole teaching. Arjuna's doubts are gone, and he is ready to act."}
];

/* Verse fields:
   c,v chapter/verse · sp speaker · t title {en,te,hi} · s Sanskrit (Devanagari; Telugu script is generated)
   i Roman transliteration · m meaning {en,te,hi} · w word-by-word [Sanskrit, English]
   x simple explanation · self/family/work in-your-life · try · r reflect · carry · f feelings · a life areas */
const GITA_VERSES = [
 {
  "c": 1,
  "v": 47,
  "sp": "S",
  "ctx": "Arjuna has just finished a long, anguished argument against the war. Across the field he sees his grandfather Bhishma, his teacher Drona, his cousins and friends. The first chapter ends not with a decision but with collapse: he puts down his bow and sits.",
  "kids": "Children understand this scene. You might say: \"Even the best archer in the world once felt too sad to carry on. He didn't pretend. He sat down and let his friend help him.\" Then ask what makes them feel that way.",
  "adults": "Many of us were raised to push through. The Gita takes another view: honest collapse is the beginning of understanding, not the end of strength.",
  "rr": [
   "What signs tell me I am approaching my limit?",
   "Who has been a Krishna to me when I could not go on?"
  ],
  "t": {
   "en": "When the bow drops",
   "te": "విల్లు జారిపడినప్పుడు",
   "hi": "जब धनुष हाथ से छूट गया"
  },
  "s": "एवमुक्त्वार्जुनः सङ्ख्ये रथोपस्थ उपाविशत्।\nविसृज्य सशरं चापं शोकसंविग्नमानसः॥",
  "i": "evam uktvārjunaḥ saṅkhye rathopastha upāviśat\nvisṛjya sa-śaraṃ cāpaṃ śoka-saṃvigna-mānasaḥ",
  "m": {
   "en": "Having said this on the battlefield, Arjuna put down his bow and arrows and sank onto the seat of his chariot, his mind overwhelmed by sorrow.",
   "te": "యుద్ధభూమిలో ఇలా పలికి, దుఃఖంతో కలత చెందిన మనసుతో అర్జునుడు ధనుర్బాణాలను విడిచిపెట్టి రథంలో కూలబడ్డాడు.",
   "hi": "रणभूमि में ऐसा कहकर, शोक से व्याकुल मन वाले अर्जुन धनुष-बाण त्यागकर रथ के पिछले भाग में बैठ गए।"
  },
  "w": [
   [
    "एवम् उक्त्वा",
    "having said this"
   ],
   [
    "सङ्ख्ये",
    "on the battlefield"
   ],
   [
    "विसृज्य",
    "letting go of"
   ],
   [
    "सशरं चापम्",
    "bow and arrows"
   ],
   [
    "शोकसंविग्नमानसः",
    "mind shaken by grief"
   ]
  ],
  "x": "The Gita does not open with an answer. It opens with a capable man who can no longer function, which is why it speaks to so many people. Everything Krishna teaches in the next seventeen chapters is addressed to this moment: what to do when competence runs out and grief takes over.",
  "self": "Breakdowns are rarely sudden. Learn the signs that you are carrying more than you can hold, before you reach the point of putting everything down.",
  "family": "When someone at home goes quiet or withdraws, it may be their version of setting the bow down. Ask before you advise.",
  "work": "Burnout often looks like this: a skilled person who suddenly cannot act. Treat it as information, not weakness, in yourself and in your team.",
  "try": "Name one specific thing that is weighing on you, and say it to someone you trust instead of carrying it alone.",
  "r": "What am I still holding that I would rather put down?",
  "carry": "The teaching begins where coping ends.",
  "f": [
   "sad",
   "confused"
  ],
  "a": [
   "self"
  ]
 },
 {
  "c": 2,
  "v": 3,
  "sp": "K",
  "ctx": "These are Krishna's first words in the Gita. Arjuna, in tears, has refused to fight. Before offering any philosophy, Krishna speaks the way an old friend would: bluntly, and with complete confidence in who Arjuna really is.",
  "kids": "Before a test or a performance, instead of \"Don't worry\", try: \"Remember how nervous you were before swimming lessons, and you did it anyway? That's still you.\"",
  "adults": "Encouragement is sometimes gentle and sometimes direct. Krishna begins directly, and only then explains. Both are forms of care.",
  "rr": [
   "What would I attempt if I trusted my own strength?",
   "Who in my life needs me to believe in them right now?"
  ],
  "t": {
   "en": "Stand up",
   "te": "లే, నిలబడు",
   "hi": "उठो, खड़े हो"
  },
  "s": "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते।\nक्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप॥",
  "i": "klaibyaṃ mā sma gamaḥ pārtha naitat tvayy upapadyate\nkṣudraṃ hṛdaya-daurbalyaṃ tyaktvottiṣṭha parantapa",
  "m": {
   "en": "Do not give in to weakness, Arjuna. It does not suit you. Shake off this small faint-heartedness and stand up, O conqueror of foes.",
   "te": "ఓ పార్థా, పిరికితనానికి లొంగకు; అది నీకు తగదు. ఈ అల్పమైన హృదయ దౌర్బల్యాన్ని విడిచిపెట్టి లేచి నిలబడు, ఓ పరంతపా.",
   "hi": "हे पार्थ, कायरता को मत अपनाओ; यह तुम्हें शोभा नहीं देती। हृदय की इस तुच्छ दुर्बलता को त्यागकर उठ खड़े हो, हे परंतप।"
  },
  "w": [
   [
    "क्लैब्यम्",
    "weakness, giving up"
   ],
   [
    "मा स्म गमः",
    "do not yield to"
   ],
   [
    "क्षुद्रम्",
    "small, petty"
   ],
   [
    "हृदयदौर्बल्यम्",
    "weakness of heart"
   ],
   [
    "उत्तिष्ठ",
    "stand up"
   ]
  ],
  "x": "Klaibya means a loss of nerve, a shrinking back from what one is capable of. Krishna calls it a small weakness of the heart, not a moral failing. His first move is not comfort but recall: you are greater than this moment.",
  "self": "Some hesitation is wisdom; some is fear dressed up as wisdom. Learn to tell them apart before you decide.",
  "family": "When a child or partner says \"I can't\", reminding them of what they have already done often helps more than reassurance.",
  "work": "Good mentors do this: they hold a higher view of you than you hold of yourself, and they say so plainly.",
  "try": "Do the task you have been avoiding for ten minutes, before you have time to talk yourself out of it.",
  "r": "Is my hesitation coming from wisdom, or from fear?",
  "carry": "Uttiṣṭha: stand up.",
  "f": [
   "stuck",
   "fear"
  ],
  "a": [
   "self",
   "work"
  ]
 },
 {
  "c": 2,
  "v": 7,
  "sp": "A",
  "ctx": "Arjuna has argued that fighting would be wrong, yet he cannot settle his own mind. Here he admits it and asks Krishna to teach him. Tradition treats this as the turning point of the Gita: from this verse on, two friends become teacher and student, and the teaching proper begins.",
  "kids": "Praise the question, not only the answer. \"That was a good thing to ask\" teaches children that not knowing is where learning starts.",
  "adults": "Expertise can make it harder to admit confusion. Arjuna was the finest warrior of his age, and his greatness here lies in becoming a student.",
  "rr": [
   "Who could be my teacher in this season of life?",
   "What would change if I approached it as a beginner?"
  ],
  "t": {
   "en": "Please guide me",
   "te": "నాకు మార్గం చూపు",
   "hi": "मेरा मार्गदर्शन करो"
  },
  "s": "कार्पण्यदोषोपहतस्वभावः\nपृच्छामि त्वां धर्मसम्मूढचेताः।\nयच्छ्रेयः स्यान्निश्चितं ब्रूहि तन्मे\nशिष्यस्तेऽहं शाधि मां त्वां प्रपन्नम्॥",
  "i": "kārpaṇya-doṣopahata-svabhāvaḥ\npṛcchāmi tvāṃ dharma-sammūḍha-cetāḥ\nyac chreyaḥ syān niścitaṃ brūhi tan me\nśiṣyas te 'haṃ śādhi māṃ tvāṃ prapannam",
  "m": {
   "en": "My mind is confused about what is right, and weakness has overcome my nature. Tell me clearly what is best for me. I am your student and I come to you for refuge. Please teach me.",
   "te": "దైన్యం నా స్వభావాన్ని కమ్మేసింది, ఏది ధర్మమో తెలియక నా మనసు అయోమయంలో ఉంది. నాకు నిశ్చయంగా ఏది శ్రేయస్కరమో చెప్పు. నేను నీ శిష్యుడిని, నిన్నే శరణు పొందాను, నాకు ఉపదేశించు.",
   "hi": "कायरता के दोष से मेरा स्वभाव दब गया है और धर्म के विषय में मेरा मन मोहित है। जो निश्चित रूप से मेरे लिए कल्याणकारी हो, वह मुझे बताओ। मैं तुम्हारा शिष्य हूँ, तुम्हारी शरण में हूँ, मुझे शिक्षा दो।"
  },
  "w": [
   [
    "धर्मसम्मूढचेताः",
    "mind confused about duty"
   ],
   [
    "पृच्छामि",
    "I ask"
   ],
   [
    "श्रेयः",
    "what is truly good"
   ],
   [
    "शिष्यः",
    "student"
   ],
   [
    "शाधि",
    "teach"
   ]
  ],
  "x": "Everything that follows depends on this admission. While Arjuna was arguing, he could not hear. The moment he says \"I am confused; teach me\", learning becomes possible. The verse is about the humility that comes before any real understanding.",
  "self": "Being a beginner again, at any age, is not a step backwards. It is the only way in.",
  "family": "Ask an elder about something you have quietly wondered about, and listen without correcting.",
  "work": "\"I'm not sure; can you walk me through it?\" builds more trust than pretending to know.",
  "try": "Ask one question today that you have avoided because you felt you should already know the answer.",
  "r": "Where am I pretending to be certain?",
  "carry": "Śiṣyas te 'ham: I am your student.",
  "f": [
   "confused"
  ],
  "a": [
   "self",
   "work"
  ]
 },
 {
  "c": 2,
  "v": 14,
  "sp": "K",
  "kids": "When your child is upset, you might say: \"This feeling is real, and it's visiting. Feelings come and go, like clouds.\" Then stay with them until it passes.",
  "adults": "We tend either to chase good feelings or to run from bad ones. This verse suggests a third way: let both come and go while you remain.",
  "rr": [
   "How did my last difficult season actually end?",
   "What helps me stay steady while a feeling runs its course?"
  ],
  "ctx": "Arjuna is overwhelmed by the pain he expects to feel. Krishna has just explained that the Self is eternal. Now he turns to the feelings themselves: they are real, but they do not last.",
  "t": {
   "en": "Feelings are seasons",
   "te": "భావాలు ఋతువుల వంటివి",
   "hi": "भावनाएँ ऋतुओं जैसी हैं"
  },
  "s": "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत॥",
  "i": "mātrā-sparśās tu kaunteya śītoṣṇa-sukha-duḥkha-dāḥ\nāgamāpāyino 'nityās tāṃs titikṣasva bhārata",
  "m": {
   "en": "When the senses meet the world, they bring cold and heat, pleasure and pain. These come and go; they do not last. Bear them patiently, Arjuna.",
   "te": "ఓ కౌంతేయా, ఇంద్రియాలు విషయాలను తాకినప్పుడు చలి-వేడి, సుఖ-దుఃఖాలు కలుగుతాయి. అవి వస్తూ పోతూ ఉంటాయి, శాశ్వతం కావు. ఓ భారతా, వాటిని ఓర్పుతో సహించు.",
   "hi": "हे कौन्तेय, इन्द्रियों और विषयों के संयोग से सर्दी-गर्मी और सुख-दुःख होते हैं। ये आते-जाते रहते हैं, अनित्य हैं। हे भारत, इन्हें धैर्य से सहन करो।"
  },
  "w": [
   [
    "मात्रास्पर्शाः",
    "the senses touching their objects"
   ],
   [
    "तु",
    "indeed"
   ],
   [
    "कौन्तेय",
    "O son of Kunti (Arjuna)"
   ],
   [
    "शीत",
    "cold"
   ],
   [
    "उष्ण",
    "heat"
   ],
   [
    "सुख",
    "pleasure"
   ],
   [
    "दुःख",
    "pain"
   ],
   [
    "दाः",
    "which give"
   ],
   [
    "आगम",
    "coming"
   ],
   [
    "अपायिनः",
    "going"
   ],
   [
    "अनित्याः",
    "not lasting"
   ],
   [
    "तान्",
    "them"
   ],
   [
    "तितिक्षस्व",
    "bear patiently"
   ],
   [
    "भारत",
    "O descendant of Bharata (Arjuna)"
   ]
  ],
  "x": "Pleasure and pain arrive through contact with the world, and they leave the same way. Krishna is not asking Arjuna to stop feeling. Titikṣā, the word he uses, means patient endurance: feeling fully without being knocked off balance, because you know the feeling is passing through.",
  "self": "A low mood is weather, not climate. Let it be what it is, without building a story on top of it.",
  "family": "When something said at home stings, give it a day before you respond. Most reactions look different by morning.",
  "work": "Praise and criticism both pass. Neither the glowing review nor the harsh one is the whole truth about your work.",
  "try": "When a strong feeling arrives today, name it and add two words: \"I'm anxious, for now.\"",
  "r": "What am I treating as permanent that is only passing through?",
  "carry": "Āgamāpāyinaḥ: they come, and they go.",
  "f": [
   "anxious",
   "sad",
   "angry"
  ],
  "a": [
   "self"
  ]
 },
 {
  "c": 2,
  "v": 20,
  "sp": "K",
  "ctx": "Arjuna grieves for the people who will die in battle. Krishna's first teaching is about what does not die: the Self. A very similar verse appears in the Katha Upanishad (1.2.18), so Krishna is drawing on much older wisdom.",
  "kids": "If a child asks where a grandparent has gone, one gentle way to put it: \"Their body was like a home they lived in. The part of them that loved you is not something that can die.\"",
  "adults": "This verse is often read at funerals, but it matters as much in life's transitions, such as retirement, an empty nest or illness, when we lose roles we thought defined us.",
  "rr": [
   "What of someone I have lost still lives in how I act?",
   "Which role am I most afraid of losing, and why?"
  ],
  "t": {
   "en": "You are more than the body",
   "te": "నీవు శరీరం కంటే మించినవాడివి",
   "hi": "तुम शरीर से बढ़कर हो"
  },
  "s": "न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः।\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे॥",
  "i": "na jāyate mriyate vā kadācin\nnāyaṃ bhūtvā bhavitā vā na bhūyaḥ\najo nityaḥ śāśvato 'yaṃ purāṇo\nna hanyate hanyamāne śarīre",
  "m": {
   "en": "The Self is never born and never dies. It did not come into being and will not cease to be. Unborn, eternal and ancient, it is not destroyed when the body is destroyed.",
   "te": "ఆత్మ ఎప్పుడూ పుట్టదు, ఎప్పుడూ మరణించదు. అది ఒకప్పుడు పుట్టి, ఇక ముందు లేకుండా పోయేది కాదు. అది జన్మ లేనిది, నిత్యమైనది, శాశ్వతమైనది, పురాతనమైనది. శరీరం నశించినా ఆత్మ నశించదు.",
   "hi": "आत्मा न कभी जन्म लेती है, न कभी मरती है। यह न उत्पन्न होकर फिर मिटने वाली है। यह अजन्मा, नित्य, शाश्वत और पुरातन है; शरीर के मारे जाने पर भी यह नहीं मारी जाती।"
  },
  "w": [
   [
    "न जायते",
    "is not born"
   ],
   [
    "म्रियते",
    "dies"
   ],
   [
    "अजः",
    "unborn"
   ],
   [
    "नित्यः",
    "eternal"
   ],
   [
    "न हन्यते",
    "is not destroyed"
   ],
   [
    "शरीरे",
    "when the body (is destroyed)"
   ]
  ],
  "x": "Arjuna's grief rests on the belief that the people he loves will simply cease to exist. Krishna answers with the Gita's central claim about who we are: the Self is not born and does not die. The body changes and ends; the one who lives in it does not.",
  "self": "Beneath every role you play, as child, parent or professional, there is a 'you' that has not changed since childhood. That is what this verse points to.",
  "family": "When you miss someone who has died, the relationship has not ended; it has changed form. Many families find comfort in this verse at such times.",
  "work": "Titles and positions come and go. Your worth does not rise and fall with them.",
  "try": "Sit quietly for two minutes and notice the awareness that is watching your thoughts. It has been there all your life.",
  "r": "Who am I, apart from my roles?",
  "carry": "Na hanyate: it is never destroyed.",
  "f": [
   "sad",
   "fear"
  ],
  "a": [
   "self"
  ]
 },
 {
  "c": 2,
  "v": 47,
  "sp": "K",
  "kids": "After a match or an exam, ask \"Did you give it your best?\" before \"Did you win?\" Children learn what matters from what we ask about.",
  "adults": "Results are shaped by countless things outside our control. When you judge yourself by the quality of your effort, you take braver and better decisions.",
  "rr": [
   "When has fear of the result stopped me from acting?",
   "What would I attempt if the outcome didn't frighten me?"
  ],
  "ctx": "Arjuna refuses to fight because he is afraid of the results: killing his own family, and the sin it would bring. Krishna moves his attention away from outcomes he can't control and onto the action he can.",
  "t": {
   "en": "Do the work, let go of the result",
   "te": "కర్మ చెయ్యి, ఫలితం వదిలెయ్యి",
   "hi": "कर्म करो, फल की चिंता छोड़ो"
  },
  "s": "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
  "i": "karmaṇy evādhikāras te mā phaleṣu kadācana\nmā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi",
  "m": {
   "en": "You have a right to your actions, never to their results. Don't make the result your motive, and don't be attached to doing nothing.",
   "te": "కర్మ చేయడంలోనే నీకు అధికారం ఉంది, దాని ఫలితాలపై ఎప్పుడూ లేదు. ఫలితమే నీ ప్రేరణ కాకూడదు; అలాగని కర్మ మానేయడంపై కూడా ఆసక్తి వద్దు.",
   "hi": "तुम्हारा अधिकार केवल कर्म करने में है, उसके फलों में कभी नहीं। कर्मफल को अपना उद्देश्य मत बनाओ, और कर्म न करने में भी तुम्हारी आसक्ति न हो।"
  },
  "w": [
   [
    "कर्मणि",
    "in action"
   ],
   [
    "एव",
    "only"
   ],
   [
    "अधिकारः",
    "right, claim"
   ],
   [
    "ते",
    "your"
   ],
   [
    "मा",
    "not"
   ],
   [
    "फलेषु",
    "in the results"
   ],
   [
    "कदाचन",
    "ever"
   ],
   [
    "कर्मफल",
    "the result of action"
   ],
   [
    "हेतुः",
    "motive, reason"
   ],
   [
    "भूः",
    "be"
   ],
   [
    "सङ्गः",
    "attachment"
   ],
   [
    "अस्तु",
    "let there be"
   ],
   [
    "अकर्मणि",
    "to inaction"
   ]
  ],
  "x": "The most quoted verse of the Gita, and one of the most misread. It does not say results don't matter. Commentators find four instructions in it: act; don't claim the results as yours; don't let the result be your motive; and don't use this as an excuse to do nothing. The aim is freedom from the anxiety that makes action worse.",
  "self": "Fear of failure is attachment to a result that hasn't happened yet. Bring your attention back to the work in front of you.",
  "family": "Care for your family because it is right, not to be thanked. Gratitude is welcome when it comes, but it can't be the reason.",
  "work": "Prepare fully for the interview or the launch. The decision belongs to others; the quality of your preparation belongs to you.",
  "try": "Pick one task today and do it as well as you can, without checking how it is received.",
  "r": "Which outcome am I trying to control that isn't mine to control?",
  "carry": "The effort is mine. The result is not mine to hold.",
  "f": [
   "anxious",
   "fear",
   "stuck"
  ],
  "a": [
   "work",
   "self"
  ]
 },
 {
  "c": 2,
  "v": 48,
  "sp": "K",
  "ctx": "Straight after 2.47, Krishna explains the attitude behind good action: steadiness. Here he gives one of the Gita's two definitions of yoga. The other, two verses later, is \"skill in action\".",
  "kids": "After a good moment and a bad one alike, take three slow breaths together. The lesson: we are the same person either way.",
  "adults": "Most of us are steady only when things go well. This verse asks for the harder thing: to remain the same in success and in failure.",
  "rr": [
   "What reliably brings me back to steadiness?",
   "Whom do I know who stays even, and what do they do differently?"
  ],
  "t": {
   "en": "Evenness is yoga",
   "te": "సమత్వమే యోగం",
   "hi": "समत्व ही योग है"
  },
  "s": "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।\nसिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥",
  "i": "yoga-sthaḥ kuru karmāṇi saṅgaṃ tyaktvā dhanañjaya\nsiddhy-asiddhyoḥ samo bhūtvā samatvaṃ yoga ucyate",
  "m": {
   "en": "Steady in yoga, do your work, Arjuna, letting go of attachment. Stay the same in success and failure. This evenness of mind is called yoga.",
   "te": "ఓ ధనంజయా, యోగంలో స్థిరంగా ఉండి, ఆసక్తిని విడిచి కర్మలు చేయి. విజయం, అపజయం రెండింటిలోనూ సమంగా ఉండు. ఈ సమత్వమే యోగం అనబడుతుంది.",
   "hi": "हे धनंजय, आसक्ति त्यागकर, योग में स्थित होकर कर्म करो। सफलता और असफलता में समान रहो। यह समभाव ही योग कहलाता है।"
  },
  "w": [
   [
    "योगस्थः",
    "steady in yoga"
   ],
   [
    "कुरु कर्माणि",
    "do your work"
   ],
   [
    "सिद्धि · असिद्धि",
    "success · failure"
   ],
   [
    "समः",
    "even, the same"
   ],
   [
    "समत्वम्",
    "evenness"
   ]
  ],
  "x": "Yoga here has nothing to do with posture. It is samatva, evenness of mind, and Krishna makes it the definition of yoga itself. Evenness is not indifference: it is caring fully about the work while staying steady about how it turns out.",
  "self": "Measure a day by how steady you were, not only by what you achieved.",
  "family": "When a family plan goes wrong, respond as you would if it had gone right. Children learn calm by watching it.",
  "work": "Teams take their cue from the person in charge. Reviewing a loss in the same tone as a win makes it safe to be honest.",
  "try": "After today's biggest win or setback, pause for three breaths before you react or reply.",
  "r": "Did my last success or failure change how I treated people?",
  "carry": "Samatvaṃ yoga ucyate: evenness is yoga.",
  "f": [
   "anxious",
   "angry"
  ],
  "a": [
   "work",
   "self"
  ]
 },
 {
  "c": 2,
  "v": 62,
  "sp": "K",
  "ctx": "Arjuna has asked how a person of steady wisdom behaves. To answer, Krishna also shows how an unsteady mind falls. This verse and the next lay out the whole chain: from a passing thought, to anger, to confusion, to ruin.",
  "kids": "If a child keeps thinking about a toy or a friend's new phone, you might say: \"The more we think about wanting something, the grumpier we can get. Let's think about something else for a while.\"",
  "adults": "Anger rarely comes from nowhere. Traced back, it usually leads to something we wanted and kept rehearsing.",
  "rr": [
   "What did I want just before I last lost my temper?",
   "Which comparisons do I return to most often?"
  ],
  "t": {
   "en": "How anger grows",
   "te": "కోపం ఎలా పుడుతుంది",
   "hi": "क्रोध कैसे जन्म लेता है"
  },
  "s": "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते।\nसङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते॥",
  "i": "dhyāyato viṣayān puṃsaḥ saṅgas teṣūpajāyate\nsaṅgāt sañjāyate kāmaḥ kāmāt krodho 'bhijāyate",
  "m": {
   "en": "When a person keeps thinking about the things of the senses, attachment to them grows. From attachment comes desire, and from desire comes anger.",
   "te": "విషయాలను గురించి ఆలోచిస్తూ ఉండే మనిషికి వాటిపై ఆసక్తి పుడుతుంది. ఆసక్తి నుండి కోరిక పుడుతుంది, కోరిక నుండి కోపం పుడుతుంది.",
   "hi": "विषयों का चिंतन करने वाले मनुष्य की उनमें आसक्ति हो जाती है। आसक्ति से कामना उत्पन्न होती है और कामना से क्रोध उत्पन्न होता है।"
  },
  "w": [
   [
    "ध्यायतः",
    "dwelling on"
   ],
   [
    "विषयान्",
    "things of the senses"
   ],
   [
    "सङ्गः",
    "attachment"
   ],
   [
    "कामः",
    "desire"
   ],
   [
    "क्रोधः",
    "anger"
   ]
  ],
  "x": "With the next verse, this forms what teachers call the 'ladder of fall'. Dwelling on something breeds attachment; attachment becomes desire; blocked desire becomes anger; anger clouds judgement, and the person is ruined. The practical insight is that the chain can be broken at the first rung: the thought we keep returning to.",
  "self": "Much of what upsets us began as something we kept thinking about. Notice the loop early.",
  "family": "Before an old argument starts again, ask what you have been replaying about this person all day.",
  "work": "Replaying a colleague's promotion over and over is the first rung of this ladder. Step off before it becomes resentment.",
  "try": "The next time you feel irritated, ask: what was I wanting just before this?",
  "r": "What thought have I been feeding?",
  "carry": "Catch the thought, and the fire never starts.",
  "f": [
   "angry",
   "restless"
  ],
  "a": [
   "self"
  ]
 },
 {
  "c": 3,
  "v": 8,
  "sp": "K",
  "ctx": "Arjuna is confused: if knowledge is higher than action, why is Krishna pushing him into a terrible battle? Krishna clarifies that no one can live without acting, so the question is how to act well.",
  "kids": "When homework feels too big, agree on just five minutes. Starting is the hardest part, for adults too.",
  "adults": "Overthinking can look like wisdom. Often the most clarifying thing you can do is the next small, concrete action.",
  "rr": [
   "What is the smallest next step I could take today?",
   "Where has thinking replaced doing?"
  ],
  "t": {
   "en": "Action beats inaction",
   "te": "కర్మ చేయడమే మేలు",
   "hi": "अकर्म से कर्म श्रेष्ठ है"
  },
  "s": "नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः।\nशरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः॥",
  "i": "niyataṃ kuru karma tvaṃ karma jyāyo hy akarmaṇaḥ\nśarīra-yātrāpi ca te na prasiddhyed akarmaṇaḥ",
  "m": {
   "en": "Do your duty, for action is better than inaction. Without action, you could not even keep your body going.",
   "te": "నీకు నియమించిన కర్మను చెయ్యి; కర్మ చేయకపోవడం కంటే చేయడమే శ్రేష్ఠం. కర్మ చేయకుండా నీ శరీర యాత్ర కూడా సాగదు.",
   "hi": "तुम अपना नियत कर्म करो, क्योंकि कर्म न करने से कर्म करना श्रेष्ठ है। कर्म न करने से तो तुम्हारी शरीर-यात्रा भी नहीं चल सकती।"
  },
  "w": [
   [
    "नियतम्",
    "your rightful, assigned"
   ],
   [
    "कुरु",
    "do"
   ],
   [
    "ज्यायः",
    "better"
   ],
   [
    "अकर्मणः",
    "than inaction"
   ],
   [
    "शरीरयात्रा",
    "the journey of the body"
   ]
  ],
  "x": "Arjuna wants to withdraw; Krishna points out that withdrawal is impossible. Breathing, eating and caring for others are all action. The real question is not whether to act, but how. Niyataṃ karma means one's rightful work: the duty that is in front of you.",
  "self": "Waiting to feel ready can become a way of never starting. Begin before you feel ready.",
  "family": "Small daily duties, such as a meal, a phone call or a ride to school, are part of dharma too, and often the most important part.",
  "work": "When planning becomes a substitute for doing, ship a small first version.",
  "try": "Start one task you have been postponing before you feel motivated, and notice how motivation follows.",
  "r": "What am I waiting to 'feel ready' for?",
  "carry": "Karma jyāyo hy akarmaṇaḥ: action is better than inaction.",
  "f": [
   "stuck"
  ],
  "a": [
   "work",
   "self"
  ]
 },
 {
  "c": 3,
  "v": 21,
  "sp": "K",
  "ctx": "Krishna explains why even the wise should keep working: others look to them. He goes on to say that he himself, who needs nothing, still acts, because the world would follow if he stopped.",
  "kids": "Let your children see you say sorry, say thank you and keep a promise, and then talk about it with them.",
  "adults": "Influence comes with every role: parent, elder sibling, manager, neighbour. The question is not whether we set an example, but which one.",
  "rr": [
   "What habit of mine would I not want copied?",
   "Who set an example that shaped me?"
  ],
  "t": {
   "en": "Others follow your example",
   "te": "నిన్ను చూసి ఇతరులు నేర్చుకుంటారు",
   "hi": "लोग तुम्हारा अनुसरण करते हैं"
  },
  "s": "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः।\nस यत्प्रमाणं कुरुते लोकस्तदनुवर्तते॥",
  "i": "yad yad ācarati śreṣṭhas tat tad evetaro janaḥ\nsa yat pramāṇaṃ kurute lokas tad anuvartate",
  "m": {
   "en": "Whatever a great person does, others do too. Whatever standard they set, the world follows.",
   "te": "శ్రేష్ఠుడైనవాడు ఏది ఆచరిస్తాడో, ఇతరులు కూడా అదే ఆచరిస్తారు. అతను ఏ ప్రమాణాన్ని నెలకొల్పుతాడో, లోకం దానినే అనుసరిస్తుంది.",
   "hi": "श्रेष्ठ पुरुष जो-जो आचरण करता है, अन्य लोग भी वैसा ही करते हैं। वह जो प्रमाण स्थापित करता है, संसार उसी का अनुसरण करता है।"
  },
  "w": [
   [
    "यत् यत्",
    "whatever"
   ],
   [
    "आचरति",
    "does, practises"
   ],
   [
    "श्रेष्ठः",
    "a leader, a great person"
   ],
   [
    "प्रमाणम्",
    "the standard"
   ],
   [
    "अनुवर्तते",
    "follows"
   ]
  ],
  "x": "Krishna's reason why even the wise should keep working: people learn by watching. Whatever standard a respected person sets, others take as permission. Leadership, in this verse, is simply example.",
  "self": "Live by the standard you would want others to copy.",
  "family": "Children learn how to treat elders, handle stress and apologise by watching us, far more than by listening to us.",
  "work": "If you want a team to be honest, punctual or calm, you have to go first.",
  "try": "Choose one habit you would like your family or team to adopt, and practise it where they can see it today.",
  "r": "What am I teaching by how I live?",
  "carry": "People follow what you do, not what you say.",
  "f": [],
  "a": [
   "self",
   "work"
  ]
 },
 {
  "c": 3,
  "v": 35,
  "sp": "K",
  "ctx": "Arjuna is tempted to drop his duty as a warrior and live like a monk instead. Krishna warns him against taking up someone else's path just because it looks easier or nobler. He repeats this idea near the end, in 18.47.",
  "kids": "Instead of \"Why can't you be more like your cousin?\", ask: \"What do you love doing that is uniquely you?\"",
  "adults": "Midlife often brings this question into focus: how much of my life did I choose, and how much did I borrow?",
  "rr": [
   "Which part of my path feels most like me?",
   "What am I doing only because it looks good to others?"
  ],
  "t": {
   "en": "Walk your own path",
   "te": "నీ దారిలోనే నడువు",
   "hi": "अपना मार्ग अपनाओ"
  },
  "s": "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः॥",
  "i": "śreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣṭhitāt\nsva-dharme nidhanaṃ śreyaḥ para-dharmo bhayāvahaḥ",
  "m": {
   "en": "Better to do your own duty imperfectly than another's duty well. Better even to fall doing your own duty; another's path is full of fear.",
   "te": "ఇతరుల ధర్మాన్ని చక్కగా ఆచరించడం కంటే, లోపాలున్నా తన ధర్మాన్ని ఆచరించడమే మేలు. స్వధర్మంలో మరణించినా శ్రేయస్కరమే; పరధర్మం భయాన్ని కలిగిస్తుంది.",
   "hi": "अच्छी तरह आचरण किए गए दूसरे के धर्म से अपना धर्म, गुणरहित होने पर भी, श्रेष्ठ है। अपने धर्म में मरना भी कल्याणकारी है; दूसरे का धर्म भय देने वाला है।"
  },
  "w": [
   [
    "श्रेयान्",
    "better"
   ],
   [
    "स्वधर्मः",
    "your own duty, your nature"
   ],
   [
    "विगुणः",
    "imperfect"
   ],
   [
    "परधर्मः",
    "another's path"
   ],
   [
    "भयावहः",
    "brings fear"
   ]
  ],
  "x": "Svadharma is often translated as 'one's own duty', but many teachers read it more widely: the path that fits your nature, temperament and circumstances. Krishna's point is that a borrowed life, however impressive, brings fear, because it isn't really yours. An imperfect life that is truly your own is better.",
  "self": "Comparison quietly drains energy from your own path. Your life has its own pace and timing.",
  "family": "Each child has their own nature. Let them grow into their strengths rather than a sibling's or a cousin's.",
  "work": "Choose roles that fit who you are, not only what looks good to others.",
  "try": "Write down three strengths that are genuinely yours, not the ones you think you should have.",
  "r": "Whose life am I measuring mine against?",
  "carry": "Better your own path, imperfectly walked.",
  "f": [
   "confused",
   "fear"
  ],
  "a": [
   "self",
   "work"
  ]
 },
 {
  "c": 4,
  "v": 7,
  "sp": "K",
  "ctx": "Arjuna is puzzled: Krishna says he taught this yoga to the sun god long ago, yet he was born only recently. Krishna explains that he has had many births, and that he takes form whenever goodness is in danger.",
  "kids": "Bedtime stories of the avatars teach this naturally: whenever something goes badly wrong, goodness finds a way back.",
  "adults": "A verse of hope for dark periods. History and personal life both show that renewal tends to follow decline.",
  "rr": [
   "When have I seen goodness return after a dark time?",
   "What in my own life needs restoring?"
  ],
  "t": {
   "en": "Whenever goodness declines",
   "te": "ధర్మానికి హాని కలిగినప్పుడల్లా",
   "hi": "जब-जब धर्म की हानि होती है"
  },
  "s": "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
  "i": "yadā yadā hi dharmasya glānir bhavati bhārata\nabhyutthānam adharmasya tadātmānaṃ sṛjāmy aham",
  "m": {
   "en": "Whenever goodness declines and wrongdoing rises, O Bharata, I bring Myself forth.",
   "te": "ఓ భారతా, ఎప్పుడెప్పుడు ధర్మానికి హాని కలిగి, అధర్మం పెరుగుతుందో, అప్పుడప్పుడు నన్ను నేను సృష్టించుకుంటాను (అవతరిస్తాను).",
   "hi": "हे भारत, जब-जब धर्म की हानि और अधर्म की वृद्धि होती है, तब-तब मैं अपने आप को प्रकट करता हूँ।"
  },
  "w": [
   [
    "यदा यदा",
    "whenever"
   ],
   [
    "धर्मस्य ग्लानिः",
    "decline of goodness"
   ],
   [
    "अभ्युत्थानम्",
    "rise"
   ],
   [
    "अधर्मस्य",
    "of wrongdoing"
   ],
   [
    "सृजामि अहम्",
    "I bring myself forth"
   ]
  ],
  "x": "This is Krishna's promise that goodness is never abandoned. For devotees it explains the avatars, such as Rama and Krishna, who appear in times of crisis. Read more broadly, it says that whenever things decline, something rises to restore the balance.",
  "self": "Even after losing your way, your better self can return. Decline is not final.",
  "family": "In difficult family seasons, remember that what breaks can be set right again.",
  "work": "When standards slip at work, someone has to restore them. Sometimes that person is you.",
  "try": "Do one small, right thing today that no one asked you to do.",
  "r": "Where could I help set something right?",
  "carry": "Whenever goodness falters, it rises again.",
  "f": [
   "anxious",
   "sad",
   "fear"
  ],
  "a": [
   "self"
  ]
 },
 {
  "c": 5,
  "v": 10,
  "sp": "K",
  "ctx": "Arjuna asks again: is it better to renounce action, or to act? Krishna says acting without attachment is the better path, and gives the image of a lotus leaf to show how it works.",
  "kids": "Show your child a photo of water drops on a lotus leaf: \"You can be around people who are grumpy and still stay kind, the way this leaf stays dry.\"",
  "adults": "Leaving the world is not the only path to peace. This verse describes a way of staying in it, clear.",
  "rr": [
   "What would offering my work look like on a busy day?",
   "Which situations stick to me most?"
  ],
  "t": {
   "en": "Like a lotus leaf",
   "te": "తామరాకు మీద నీటిబొట్టులా",
   "hi": "कमल के पत्ते की तरह"
  },
  "s": "ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः।\nलिप्यते न स पापेन पद्मपत्रमिवाम्भसा॥",
  "i": "brahmaṇy ādhāya karmāṇi saṅgaṃ tyaktvā karoti yaḥ\nlipyate na sa pāpena padma-patram ivāmbhasā",
  "m": {
   "en": "One who acts by offering all work to the Divine and giving up attachment is not stained by sin, just as a lotus leaf is not wet by water.",
   "te": "అన్ని కర్మలను భగవంతునికి అర్పించి, ఆసక్తిని విడిచి కర్మ చేసేవానికి, తామరాకుకు నీరు అంటనట్లు, పాపం అంటదు.",
   "hi": "जो सब कर्मों को परमात्मा में अर्पित करके, आसक्ति त्यागकर कर्म करता है, वह पाप से वैसे ही लिप्त नहीं होता जैसे कमल का पत्ता जल से।"
  },
  "w": [
   [
    "ब्रह्मणि आधाय",
    "offering to the Divine"
   ],
   [
    "सङ्गं त्यक्त्वा",
    "giving up attachment"
   ],
   [
    "न लिप्यते",
    "is not stained"
   ],
   [
    "पद्मपत्रम्",
    "a lotus leaf"
   ],
   [
    "अम्भसा",
    "by water"
   ]
  ],
  "x": "The lotus grows in muddy water, yet its leaves stay dry; water simply rolls off them. Krishna uses this image for a person who acts fully in the world but offers the work to something larger than themselves. The engagement is complete; the stain doesn't stick.",
  "self": "You can be fully involved without being entangled. Notice what you absorb that isn't yours.",
  "family": "Be present in family tensions without taking on every mood in the room.",
  "work": "It is possible to work in a high-pressure environment and keep your values intact.",
  "try": "Before a stressful task, say quietly to yourself: \"This is my offering.\" Then do it.",
  "r": "Where am I absorbing negativity that isn't mine?",
  "carry": "In the water, not wet by it.",
  "f": [
   "anxious",
   "restless"
  ],
  "a": [
   "work",
   "self"
  ]
 },
 {
  "c": 6,
  "v": 5,
  "sp": "K",
  "ctx": "Chapter 6 teaches meditation. Before giving any method, Krishna sets the foundation: no one else can lift you. You have to befriend your own mind.",
  "kids": "When a child says \"I'm so stupid\", ask gently: \"Would you say that to your best friend?\" Then help them say it kindly.",
  "adults": "The inner critic often speaks in an old voice: a parent's, a teacher's, a former boss's. Recognising whose voice it is is the first step to changing it.",
  "rr": [
   "Whose voice does my inner critic sound like?",
   "How can I be a better friend to myself this week?"
  ],
  "t": {
   "en": "Be your own friend",
   "te": "నీకు నువ్వే మిత్రుడివి",
   "hi": "स्वयं के मित्र बनो"
  },
  "s": "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
  "i": "uddhared ātmanātmānaṃ nātmānam avasādayet\nātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ",
  "m": {
   "en": "Lift yourself by your own effort; do not let yourself sink. You alone are your own friend, and you alone can be your own enemy.",
   "te": "తనను తానే ఉద్ధరించుకోవాలి, తనను తాను దిగజార్చుకోకూడదు. ఎందుకంటే తనకు తానే బంధువు, తనకు తానే శత్రువు.",
   "hi": "अपने द्वारा अपना उद्धार करो, अपने को नीचे मत गिराओ। क्योंकि मनुष्य स्वयं ही अपना मित्र है और स्वयं ही अपना शत्रु।"
  },
  "w": [
   [
    "उद्धरेत्",
    "lift up"
   ],
   [
    "आत्मना",
    "by yourself"
   ],
   [
    "न अवसादयेत्",
    "do not let sink"
   ],
   [
    "बन्धुः",
    "friend"
   ],
   [
    "रिपुः",
    "enemy"
   ]
  ],
  "x": "Before teaching meditation, Krishna lays the foundation: no one else can do this for you. Your own mind can lift you or pull you down; it can be your closest friend or your worst enemy. Which it becomes depends largely on how you train it.",
  "self": "Notice the voice in your head after a mistake. Would you speak that way to a friend?",
  "family": "Children absorb how we talk about ourselves. Self-respect modelled at home becomes their inner voice.",
  "work": "Own your growth: seek feedback, practise, learn. No manager can do that part for you.",
  "try": "Catch one harsh thought about yourself today and rewrite it the way a good friend would say it.",
  "r": "What do I say to myself when I fail?",
  "carry": "Ātmaiva hy ātmano bandhuḥ: you are your own friend.",
  "f": [
   "sad",
   "stuck"
  ],
  "a": [
   "self"
  ]
 },
 {
  "c": 6,
  "v": 17,
  "sp": "K",
  "ctx": "Having described how to sit for meditation, Krishna warns that yoga is not for one who eats too much or too little, or sleeps too much or too little. This verse gives the positive rule: balance.",
  "kids": "Make a simple balance chart together: sleep, play, food, screens. Let them notice how they feel when one is out of balance.",
  "adults": "Many spiritual efforts falter not for lack of devotion but for lack of sleep. Start with the basics.",
  "rr": [
   "How do I feel when I sleep and eat well?",
   "What one change would help most?"
  ],
  "t": {
   "en": "Balance in daily life",
   "te": "జీవితంలో మితం",
   "hi": "जीवन में संतुलन"
  },
  "s": "युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु।\nयुक्तस्वप्नावबोधस्य योगो भवति दुःखहा॥",
  "i": "yuktāhāra-vihārasya yukta-ceṣṭasya karmasu\nyukta-svapnāvabodhasya yogo bhavati duḥkha-hā",
  "m": {
   "en": "For one who is moderate in eating and recreation, balanced in effort at work, and regular in sleep and waking, yoga removes all sorrow.",
   "te": "మితమైన ఆహార విహారాలు కలిగి, కర్మలలో మితంగా ప్రవర్తిస్తూ, నిద్ర మెలకువలలో క్రమబద్ధంగా ఉండేవానికి యోగం దుఃఖాన్ని నశింపజేస్తుంది.",
   "hi": "जिसका आहार-विहार उचित है, कर्मों में चेष्टा संतुलित है, और सोना-जागना नियमित है, उसके लिए योग दुःखों का नाश करने वाला होता है।"
  },
  "w": [
   [
    "युक्ताहार",
    "balanced eating"
   ],
   [
    "विहार",
    "recreation"
   ],
   [
    "युक्तचेष्टस्य",
    "balanced in effort"
   ],
   [
    "स्वप्न · अवबोध",
    "sleep · waking"
   ],
   [
    "दुःखहा",
    "removes sorrow"
   ]
  ],
  "x": "The Gita's guidance here is strikingly practical: neither starving nor overeating, neither sleeping too much nor too little. Yukta means balanced, fitted to measure. Inner steadiness rests on ordinary habits, and when those are in order, much of our sorrow eases.",
  "self": "Treat sleep, food, work and screens as part of your inner life, not separate from it.",
  "family": "Regular meals together and predictable bedtimes are quiet spiritual practices for the whole household.",
  "work": "Overwork is not dedication. A sustainable pace produces better work over time.",
  "try": "Choose one change for today: an earlier bedtime, a meal without a screen, or a ten-minute walk.",
  "r": "Which part of my routine is most out of balance?",
  "carry": "Balance is the practice.",
  "f": [
   "restless",
   "anxious"
  ],
  "a": [
   "self"
  ]
 },
 {
  "c": 6,
  "v": 35,
  "sp": "K",
  "ctx": "Arjuna objects honestly: the mind is as restless as the wind, so how can anyone control it? Krishna agrees with him, then gives a two-part method.",
  "kids": "The mind is like a puppy that keeps running off. Practise for one minute: breathe, and gently bring the puppy back each time it wanders.",
  "adults": "Krishna's honesty is reassuring: even he says it is hard. Small daily practice beats rare bursts of effort.",
  "rr": [
   "What could I practise for five minutes every day?",
   "What pulls at my attention most, and could I loosen its grip?"
  ],
  "t": {
   "en": "Training the restless mind",
   "te": "చంచల మనసును అదుపు చేయడం",
   "hi": "चंचल मन को साधना"
  },
  "s": "असंशयं महाबाहो मनो दुर्निग्रहं चलम्।\nअभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते॥",
  "i": "asaṃśayaṃ mahā-bāho mano durnigrahaṃ calam\nabhyāsena tu kaunteya vairāgyeṇa ca gṛhyate",
  "m": {
   "en": "Without doubt, the mind is restless and hard to control. But it can be trained through practice and letting go.",
   "te": "ఓ మహాబాహూ, మనసు చంచలమైనది, అదుపు చేయడం కష్టం అనడంలో సందేహం లేదు. కానీ ఓ కౌంతేయా, అభ్యాసం, వైరాగ్యం ద్వారా దానిని వశపరచుకోవచ్చు.",
   "hi": "हे महाबाहो, निःसंदेह मन चंचल है और कठिनता से वश में होता है। परंतु हे कौन्तेय, अभ्यास और वैराग्य से यह वश में होता है।"
  },
  "w": [
   [
    "असंशयम्",
    "without doubt"
   ],
   [
    "मनः",
    "the mind"
   ],
   [
    "चलम्",
    "restless"
   ],
   [
    "अभ्यासेन",
    "by practice"
   ],
   [
    "वैराग्येण",
    "by letting go"
   ],
   [
    "गृह्यते",
    "is held, steadied"
   ]
  ],
  "x": "Arjuna has just said the mind is as hard to hold as the wind. Krishna doesn't argue; he agrees. Then he gives the Gita's two-part method: abhyāsa, steady repeated practice, and vairāgya, a gradual loosening of our grip on what pulls at us. Neither works alone.",
  "self": "A wandering mind is not failure. Noticing and returning is the practice itself.",
  "family": "A few quiet minutes together each day, whether prayer or silence, steadies a whole household.",
  "work": "Focus is trained like a muscle. Short, protected blocks of work without notifications build it.",
  "try": "Sit for five minutes and return to your breath each time your mind wanders. Count the returns, not the wanderings.",
  "r": "When is my mind most restless?",
  "carry": "Abhyāsa and vairāgya: practise, and let go.",
  "f": [
   "restless",
   "anxious"
  ],
  "a": [
   "self",
   "work"
  ]
 },
 {
  "c": 7,
  "v": 7,
  "sp": "K",
  "ctx": "Krishna begins explaining his own nature: a lower nature (earth, water, fire, air, space, mind, intellect and ego) and a higher nature, which is life itself. This verse sums it up: everything rests on him.",
  "kids": "Make a bead necklace together: \"Each bead is different, but one string holds them all. Our family is like that.\"",
  "adults": "Much of the work of later life is noticing threads: the values and loves that have quietly connected decades of experience.",
  "rr": [
   "Who are the unseen threads holding my days together?",
   "Where do I see only the beads, and miss the string?"
  ],
  "t": {
   "en": "Pearls on a thread",
   "te": "దారంలో ముత్యాల్లా",
   "hi": "धागे में मोतियों की तरह"
  },
  "s": "मत्तः परतरं नान्यत्किञ्चिदस्ति धनञ्जय।\nमयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव॥",
  "i": "mattaḥ parataraṃ nānyat kiñcid asti dhanañjaya\nmayi sarvam idaṃ protaṃ sūtre maṇi-gaṇā iva",
  "m": {
   "en": "There is nothing higher than Me, Arjuna. All of this is strung on Me like pearls on a thread.",
   "te": "ఓ ధనంజయా, నాకంటే ఉన్నతమైనది వేరేదీ లేదు. దారంలో ముత్యాలు గుచ్చినట్లు ఈ జగత్తంతా నాలో గుచ్చబడి ఉంది.",
   "hi": "हे धनंजय, मुझसे श्रेष्ठ और कुछ भी नहीं है। यह सम्पूर्ण जगत सूत्र में मणियों की भाँति मुझमें पिरोया हुआ है।"
  },
  "w": [
   [
    "मत्तः परतरम्",
    "higher than Me"
   ],
   [
    "न अन्यत्",
    "nothing else"
   ],
   [
    "प्रोतम्",
    "strung"
   ],
   [
    "सूत्रे",
    "on a thread"
   ],
   [
    "मणिगणाः",
    "pearls"
   ]
  ],
  "x": "We see the pearls, the people, things and events of life, but not the thread that runs through them. Krishna says he is that thread. The image suggests an underlying unity that holds everything together, even when life feels scattered.",
  "self": "When life feels fragmented, look for what connects its parts.",
  "family": "Very different personalities in one family are held together by something shared and unseen.",
  "work": "A diverse team works when there is a common purpose beneath the differences.",
  "try": "Notice one unseen connection today: someone whose work makes your day possible without your noticing.",
  "r": "What thread runs through the different parts of my life?",
  "carry": "Many pearls, one thread.",
  "f": [
   "grateful"
  ],
  "a": [
   "self",
   "work"
  ]
 },
 {
  "c": 8,
  "v": 7,
  "sp": "K",
  "ctx": "Arjuna asks how one can remember God at the moment of death. Krishna's answer: what you remember at the end depends on what you practised all your life. So remember him always, while doing your duty.",
  "kids": "Before school, say a short prayer together, then: \"Now do your best.\" Children learn that faith and effort belong together.",
  "adults": "We often postpone spiritual life for a quieter time. This verse suggests there is no separate time, only how we do what is already here.",
  "rr": [
   "How could a daily task become an offering?",
   "What am I postponing until 'later in life'?"
  ],
  "t": {
   "en": "Remember Me, and do your work",
   "te": "నన్ను స్మరిస్తూ కర్తవ్యం చెయ్యి",
   "hi": "मेरा स्मरण करो और कर्तव्य करो"
  },
  "s": "तस्मात्सर्वेषु कालेषु मामनुस्मर युध्य च।\nमय्यर्पितमनोबुद्धिर्मामेवैष्यस्यसंशयम्॥",
  "i": "tasmāt sarveṣu kāleṣu mām anusmara yudhya ca\nmayy arpita-mano-buddhir mām evaiṣyasy asaṃśayam",
  "m": {
   "en": "Therefore remember Me at all times, and fight (do your duty). With your mind and understanding offered to Me, you will surely come to Me.",
   "te": "కాబట్టి అన్ని కాలాలలోనూ నన్ను స్మరిస్తూ యుద్ధం చెయ్యి (నీ కర్తవ్యం నిర్వర్తించు). మనసు, బుద్ధి నాకు అర్పించినవాడివై నిస్సందేహంగా నన్నే చేరుకుంటావు.",
   "hi": "इसलिए तुम सब समय मेरा स्मरण करो और युद्ध भी करो (अपना कर्तव्य करो)। मुझमें अर्पित मन और बुद्धि से युक्त होकर तुम निःसंदेह मुझे ही प्राप्त होगे।"
  },
  "w": [
   [
    "सर्वेषु कालेषु",
    "at all times"
   ],
   [
    "अनुस्मर",
    "remember"
   ],
   [
    "युध्य च",
    "and fight, act"
   ],
   [
    "अर्पित",
    "offered"
   ],
   [
    "असंशयम्",
    "without doubt"
   ]
  ],
  "x": "Krishna does not ask Arjuna to leave the battlefield to pray. He asks him to remember while he works. What we remember at the end of life, he explains, is what we practised remembering all along. Faith, in this verse, is woven into daily duty, not set apart from it.",
  "self": "What your mind returns to when it is idle is what you are practising.",
  "family": "A short prayer or chant while cooking or driving can become a household rhythm.",
  "work": "Begin the workday with a moment of remembrance, then give the work your full attention.",
  "try": "Choose a cue, such as a doorway or your first cup of tea, and use it to pause and remember, three times today.",
  "r": "What does my mind return to most often?",
  "carry": "Mām anusmara yudhya ca: remember, and act.",
  "f": [
   "anxious",
   "grateful"
  ],
  "a": [
   "work"
  ]
 },
 {
  "c": 9,
  "v": 22,
  "sp": "K",
  "ctx": "Chapter 9 is called the royal secret. Krishna contrasts people who worship for worldly rewards with those whose devotion is undivided, and makes this promise to the second group.",
  "kids": "When a child is worried, pray together and imagine handing the worry over. Then talk about one thing they can do.",
  "adults": "Many of us carry a constant background worry about the future. This verse offers a different posture: diligent, but not alone.",
  "rr": [
   "Where have I been cared for without asking?",
   "What would change if I truly believed I was not alone?"
  ],
  "t": {
   "en": "I carry what you need",
   "te": "నీ యోగక్షేమాలు నేను చూసుకుంటాను",
   "hi": "मैं तुम्हारा योगक्षेम वहन करता हूँ"
  },
  "s": "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
  "i": "ananyāś cintayanto māṃ ye janāḥ paryupāsate\nteṣāṃ nityābhiyuktānāṃ yoga-kṣemaṃ vahāmy aham",
  "m": {
   "en": "Those who worship Me with undivided thought, always devoted, I bring them what they lack and protect what they have.",
   "te": "అనన్యభావంతో నన్నే చింతిస్తూ ఉపాసించే, నిత్యం నాలో నిమగ్నమైన వారి యోగక్షేమాలను నేనే వహిస్తాను.",
   "hi": "जो अनन्य भाव से मेरा चिंतन करते हुए मेरी उपासना करते हैं, उन नित्य मुझमें लगे भक्तों का योगक्षेम मैं स्वयं वहन करता हूँ।"
  },
  "w": [
   [
    "अनन्याः",
    "with no other focus"
   ],
   [
    "चिन्तयन्तः",
    "thinking of"
   ],
   [
    "पर्युपासते",
    "worship"
   ],
   [
    "योगक्षेमम्",
    "gaining what's needed, keeping what's gained"
   ],
   [
    "वहामि",
    "I carry"
   ]
  ],
  "x": "Yoga-kṣema means attaining what you lack and preserving what you have. Krishna promises to carry both for those whose devotion is undivided. (The phrase is familiar in India as the motto of the Life Insurance Corporation.) Trust doesn't replace effort here; it removes the weight of carrying everything alone.",
  "self": "Do your part fully, then set down the anxiety about everything else.",
  "family": "When worries about health or money press on the family, act where you can and entrust the rest.",
  "work": "After you have done the work well, release the outcome. Constant worry adds nothing to it.",
  "try": "Write one worry on paper, do one thing about it, and consciously hand over the rest.",
  "r": "What worry could I hand over today?",
  "carry": "Yoga-kṣemaṃ vahāmy aham: I carry what you need.",
  "f": [
   "anxious",
   "fear"
  ],
  "a": [
   "self"
  ]
 },
 {
  "c": 9,
  "v": 26,
  "sp": "K",
  "kids": "Let your child offer a flower or a little water at the puja, and explain: \"God doesn't need anything big. He loves that you gave it with love.\"",
  "adults": "Many of us hold back because what we have to give feels too small. This verse removes that excuse.",
  "rr": [
   "Do I hold back because my offering feels too small?",
   "What is the spirit behind what I give?"
  ],
  "ctx": "Krishna has just said that people worship many gods hoping for many rewards. Here he says what he actually wants from a devotee: not wealth or elaborate rituals, only love.",
  "t": {
   "en": "A leaf, a flower, a fruit, water",
   "te": "పత్రం, పుష్పం, ఫలం, తోయం",
   "hi": "पत्र, पुष्प, फल, जल"
  },
  "s": "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति।\nतदहं भक्त्युपहृतमश्नामि प्रयतात्मनः॥",
  "i": "patraṃ puṣpaṃ phalaṃ toyaṃ yo me bhaktyā prayacchati\ntad ahaṃ bhakty-upahṛtam aśnāmi prayatātmanaḥ",
  "m": {
   "en": "Whoever offers Me a leaf, a flower, a fruit or water with devotion, I accept that loving offering from a pure heart.",
   "te": "ఎవరైతే భక్తితో నాకు ఒక ఆకు, ఒక పువ్వు, ఒక పండు లేదా కొంచెం నీరు సమర్పిస్తారో, ఆ పవిత్ర హృదయుని భక్తి కానుకను నేను స్వీకరిస్తాను.",
   "hi": "जो कोई भक्ति से मुझे पत्र, पुष्प, फल या जल अर्पित करता है, उस शुद्ध मन वाले भक्त की प्रेमपूर्वक दी गई भेंट को मैं स्वीकार करता हूँ।"
  },
  "w": [
   [
    "पत्रम्",
    "a leaf"
   ],
   [
    "पुष्पम्",
    "a flower"
   ],
   [
    "फलम्",
    "a fruit"
   ],
   [
    "तोयम्",
    "water"
   ],
   [
    "यः",
    "whoever"
   ],
   [
    "मे",
    "to Me"
   ],
   [
    "भक्त्या",
    "with devotion"
   ],
   [
    "प्रयच्छति",
    "offers"
   ],
   [
    "तत्",
    "that (offering)"
   ],
   [
    "अहम्",
    "I"
   ],
   [
    "भक्त्युपहृतम्",
    "offered with love"
   ],
   [
    "अश्नामि",
    "accept (literally, 'partake of')"
   ],
   [
    "प्रयतात्मनः",
    "from one whose heart is pure"
   ]
  ],
  "x": "This is the heart of every puja. Krishna asks for nothing grand: a leaf, a flower, a fruit, a little water. What he accepts is bhakti, the love with which it is given. Size and cost are irrelevant; sincerity is everything.",
  "self": "You already have enough to offer. What matters is the spirit in which you give.",
  "family": "A simple meal made with care is an offering, to the family and through them.",
  "work": "Small acts of genuine care for colleagues often matter more than grand gestures.",
  "try": "Make one simple offering today, a flower, a glass of water or a kind word, given with full attention.",
  "r": "What can I offer with love today?",
  "carry": "Love makes any offering enough.",
  "f": [
   "grateful"
  ],
  "a": [
   "self"
  ]
 },
 {
  "c": 10,
  "v": 20,
  "sp": "K",
  "shift": "Krishna isn't only asking Arjuna to believe God is everywhere. He is changing how Arjuna sees people, and so how he treats them.",
  "situations": [
   {
    "area": "Personal life",
    "title": "See the person, not just the behaviour",
    "situation": "A relative questions a decision you've made, or someone close to you says something that stings. The instinct is to defend yourself, or to pull away.",
    "apply": [
     "Listen to understand before you react.",
     "Respect them even when your opinions differ.",
     "Remember that today's behaviour isn't the whole of who they are."
    ],
    "lesson": "You can honour someone's worth and still say, \"I'm not comfortable with this conversation.\""
   },
   {
    "area": "Professional life",
    "title": "Respect people without dropping accountability",
    "situation": "A colleague keeps missing deadlines, a manager waves away your ideas, or two teams dig in against each other. It's easy to start labelling people as difficult or incompetent.",
    "apply": [
     "Separate a person's worth from one piece of their performance.",
     "Give the same dignity to leadership and to the newest hire.",
     "Still set expectations and make the hard decisions."
    ],
    "script": [
     "You never deliver anything on time.",
     "We've missed the last two deadlines. What's getting in the way, and how can we fix it together?"
    ],
    "lesson": "Krishna teaches Arjuna the unity of all beings, but never tells him to walk away from his responsibility."
   },
   {
    "area": "Teenagers and young people",
    "title": "Empathy without losing yourself",
    "situation": "Someone at school or college is left out of the group because they're different.",
    "apply": [
     "Include them: everyone deserves respect, popular or not, top of the class or not.",
     "Don't confuse self-respect with being better than others.",
     "Notice how often you compare yourself with others."
    ],
    "lesson": "Your worth doesn't depend on other people's approval, and neither does anyone else's."
   },
   {
    "area": "Adults",
    "title": "Move beyond ego and comparison",
    "situation": "Someone has a bigger career, a bigger house, more money or more recognition than you.",
    "apply": [
     "Celebrate their success without shrinking your own journey.",
     "Hold on to this during transitions: a job change, children leaving home, health changing."
    ],
    "lesson": "What you do, what you own and how others see you are not the whole of who you are."
   }
  ],
  "notMean": [
   "Seeing the Divine in everyone doesn't mean tolerating mistreatment or never confronting anyone. Krishna says this on a battlefield, where Arjuna has to stand up to people he loves.",
   [
    "Forgive someone without giving back the same level of trust.",
    "Honour another person's dignity while protecting your own."
   ]
  ],
  "deeperQ": "If the same Divine lives in everyone, why do we still feel jealousy, anger, ego and insecurity? The Gita answers through three ideas: ego (ahaṅkāra), evenness (samatva) and acting without attachment (karma yoga).",
  "related": [
   [
    "2.48",
    "Evenness (samatva): staying steady when people push your buttons"
   ],
   [
    "2.47",
    "Karma yoga: doing your part without needing a particular result"
   ],
   [
    "16.21",
    "Desire, anger and greed: the roots of jealousy and conflict"
   ],
   [
    "13.7",
    "Humility: the first mark of real knowledge, and the cure for ego"
   ]
  ],
  "kids": "\"God lives inside everyone, even the classmate who isn't kind to you. How would you treat God if He came to school as your friend?\"",
  "adults": "Seeing the Divine in a difficult person doesn't mean accepting bad behaviour. It means responding to the person, not only to the behaviour.",
  "rr": [
   "Where do I treat people differently based on status?",
   "Who saw the good in me when I couldn't?"
  ],
  "ctx": "Arjuna has asked how he can think of Krishna, and in which forms. Before listing His glories (the greatest mountain, the greatest river and so on), Krishna starts with the most important one: He is first of all the Self within every being.",
  "t": {
   "en": "I dwell in every heart",
   "te": "అందరి హృదయాల్లో నేనే",
   "hi": "मैं सबके हृदय में हूँ"
  },
  "s": "अहमात्मा गुडाकेश सर्वभूताशयस्थितः।\nअहमादिश्च मध्यं च भूतानामन्त एव च॥",
  "i": "aham ātmā guḍākeśa sarva-bhūtāśaya-sthitaḥ\naham ādiś ca madhyaṃ ca bhūtānām anta eva ca",
  "m": {
   "en": "I am the Self, Arjuna, seated in the heart of all beings. I am their beginning, their middle and their end.",
   "te": "ఓ గుడాకేశా, సర్వ ప్రాణుల హృదయాలలో ఉన్న ఆత్మను నేనే. ప్రాణుల ఆది, మధ్యం, అంతం కూడా నేనే.",
   "hi": "हे गुडाकेश, मैं सब प्राणियों के हृदय में स्थित आत्मा हूँ। मैं ही सब प्राणियों का आदि, मध्य और अंत भी हूँ।"
  },
  "w": [
   [
    "अहम्",
    "I"
   ],
   [
    "आत्मा",
    "the Self, the soul"
   ],
   [
    "गुडाकेश",
    "O Arjuna ('conqueror of sleep')"
   ],
   [
    "सर्व",
    "all"
   ],
   [
    "भूत",
    "beings"
   ],
   [
    "आशय",
    "heart (literally, 'resting place')"
   ],
   [
    "स्थितः",
    "seated, dwelling"
   ],
   [
    "आदिः",
    "the beginning"
   ],
   [
    "च",
    "and"
   ],
   [
    "मध्यम्",
    "the middle"
   ],
   [
    "भूतानाम्",
    "of beings"
   ],
   [
    "अन्तः",
    "the end"
   ],
   [
    "एव च",
    "and also"
   ]
  ],
  "voices": [
   [
    "Sri Ramakrishna Paramahamsa",
    "Compared people to pillowcases of different colours: one beautiful, one plain, one saintly, one wicked, but the same cotton inside each. He taught \"Shiva-jñāne jīva-sevā\": don't merely pity living beings, serve them as Shiva Himself.",
    "https://en.wikipedia.org/wiki/Teachings_of_Ramakrishna"
   ],
   [
    "Swami Vivekananda",
    "Called this practical Vedanta: seeing the One in all is not only for sages in forests and caves, it can be lived in every walk of life, above all by serving the poor and the weak.",
    "https://vivekananda.net/booksbyswami-practicalvedanta-part1"
   ],
   [
    "Sri Ramana Maharshi",
    "Taught that whatever we give to others, we give to ourselves. Once you see there is only one Self, kindness to everyone follows on its own.",
    "https://www.ramanakendradelhi.in/instruction"
   ],
   [
    "Shirdi Sai Baba",
    "His saying \"Sabka Malik Ek\" means one Master over all. He fed people of every faith and treated even animals as his own: whoever feeds the hungry, he taught, feeds him.",
    ""
   ],
   [
    "Isha Upanishad, verse 6",
    "One who sees all beings in the Self, and the Self in all beings, no longer hates anyone.",
    ""
   ],
   [
    "The Gita itself, 6.29–30",
    "Krishna says the yogi sees the Self in all beings and all beings in the Self, and that one who sees Him everywhere is never lost to Him. Different schools explain this differently: Advaita teachers say it is the same Self in all; Vaishnava teachers say every being is a part of Krishna, which is why we feel kinship with all. Both arrive at the same way of treating people.",
    "https://www.wisdomlib.org/hinduism/book/shrimad-bhagavad-gita/d/doc419948.html"
   ]
  ],
  "x": "If the Divine lives in every heart, then every person deserves respect, even the difficult ones.",
  "self": "The Divine is not somewhere far away. This verse places it within you as well.",
  "family": "See past the behaviour of the family member who tests your patience to the person underneath.",
  "work": "Treat the person who cleans the office with the same respect as the person who runs it.",
  "try": "Pick the one person who tests your patience most today. Before you reply to them, pause for one breath and remember: different cover, same cotton inside. Then answer the way you would answer someone you deeply respect.",
  "r": "Whom do I find it hardest to see the Divine in, and what would change if I tried?",
  "carry": "Ahaṃ ātmā: the same Self in every heart.",
  "f": [
   "grateful",
   "angry"
  ],
  "a": [
   "self",
   "work"
  ]
 },
 {
  "c": 11,
  "v": 33,
  "sp": "K",
  "ctx": "Arjuna asked to see Krishna's universal form, and is shown a terrifying vision: the warriors of both armies rushing into Krishna's mouths, as if Time itself were swallowing them. Krishna then tells him to rise and act, as an instrument of what is already unfolding.",
  "kids": "\"When your team wins, you were one important part of it. When it loses, that isn't all on you either.\"",
  "adults": "The weight of feeling solely responsible is exhausting. This verse offers a way to act fully while setting that weight down.",
  "rr": [
   "Whom can I give credit to today?",
   "What would I do differently if the outcome weren't all on me?"
  ],
  "t": {
   "en": "Be the instrument",
   "te": "నిమిత్తమాత్రుడివై ఉండు",
   "hi": "निमित्त मात्र बनो"
  },
  "s": "तस्मात्त्वमुत्तिष्ठ यशो लभस्व\nजित्वा शत्रून्भुङ्क्ष्व राज्यं समृद्धम्।\nमयैवैते निहताः पूर्वमेव\nनिमित्तमात्रं भव सव्यसाचिन्॥",
  "i": "tasmāt tvam uttiṣṭha yaśo labhasva\njitvā śatrūn bhuṅkṣva rājyaṃ samṛddham\nmayaivaite nihatāḥ pūrvam eva\nnimitta-mātraṃ bhava savya-sācin",
  "m": {
   "en": "So rise up and win glory. Conquer your foes and enjoy a thriving kingdom. I have already decided their fate; be merely the instrument, Arjuna.",
   "te": "కాబట్టి లే, కీర్తిని పొందు. శత్రువులను జయించి సమృద్ధమైన రాజ్యాన్ని అనుభవించు. వీరందరూ ఇంతకు ముందే నాచేత సంహరించబడ్డారు. ఓ సవ్యసాచీ, నీవు నిమిత్తమాత్రుడివి మాత్రమే అవ్వు.",
   "hi": "इसलिए तुम उठो और यश प्राप्त करो। शत्रुओं को जीतकर समृद्ध राज्य का भोग करो। ये सब पहले ही मेरे द्वारा मारे जा चुके हैं। हे सव्यसाची, तुम केवल निमित्त मात्र बनो।"
  },
  "w": [
   [
    "उत्तिष्ठ",
    "rise up"
   ],
   [
    "यशः लभस्व",
    "win glory"
   ],
   [
    "निमित्तमात्रम्",
    "merely the instrument"
   ],
   [
    "भव",
    "be"
   ],
   [
    "सव्यसाचिन्",
    "archer who shoots with both hands (Arjuna)"
   ]
  ],
  "x": "Arjuna has seen the universal form and understood that the outcome of the war is already in larger hands. Krishna's instruction is nimitta-mātraṃ bhava: be merely the instrument. It asks for full participation, without the ego of \"I alone made this happen.\"",
  "self": "Freedom comes from seeing yourself as part of something larger, not as the sole author of every outcome.",
  "family": "Parents shape children, but they do not author them. Guide wholeheartedly, then trust.",
  "work": "Lead with humility. Credit the team and the circumstances, not only yourself.",
  "try": "Before an important task today, say quietly: \"Let me be a good instrument.\"",
  "r": "Where am I carrying the weight of being the only doer?",
  "carry": "Nimitta-mātraṃ bhava: be the instrument.",
  "f": [
   "fear",
   "anxious"
  ],
  "a": [
   "work"
  ]
 },
 {
  "c": 12,
  "v": 13,
  "sp": "K",
  "ctx": "Arjuna asks which kind of devotee is best. Krishna answers with a portrait of the devotee who is dear to him, spread across verses 13 to 20. This is the opening line of that portrait.",
  "kids": "When a friend apologises, practise saying \"It's okay, I forgive you\", and talk afterwards about how it felt to say it.",
  "adults": "Of all the qualities listed, forgiveness is usually the hardest, and the one that frees us most.",
  "rr": [
   "Whom am I still holding something against?",
   "Where do 'mine' and 'me' get in the way?"
  ],
  "t": {
   "en": "Who is dear to God",
   "te": "భగవంతునికి ప్రియమైనవారు",
   "hi": "भगवान को प्रिय कौन"
  },
  "s": "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च।\nनिर्ममो निरहङ्कारः समदुःखसुखः क्षमी॥",
  "i": "adveṣṭā sarva-bhūtānāṃ maitraḥ karuṇa eva ca\nnirmamo nirahaṅkāraḥ sama-duḥkha-sukhaḥ kṣamī",
  "m": {
   "en": "One who hates no being, who is friendly and compassionate, free of 'mine' and of ego, even in joy and sorrow, and forgiving, is dear to Me.",
   "te": "ఏ ప్రాణినీ ద్వేషించనివాడు, అందరితో స్నేహంగా, కరుణతో ఉండేవాడు, మమకారం, అహంకారం లేనివాడు, సుఖదుఃఖాలలో సమంగా ఉండేవాడు, క్షమాశీలుడు నాకు ప్రియుడు.",
   "hi": "जो किसी प्राणी से द्वेष नहीं करता, सबका मित्र और दयालु है, ममता और अहंकार से रहित है, सुख-दुःख में सम और क्षमाशील है, वह मुझे प्रिय है।"
  },
  "w": [
   [
    "अद्वेष्टा",
    "without hatred"
   ],
   [
    "मैत्रः",
    "friendly"
   ],
   [
    "करुणः",
    "compassionate"
   ],
   [
    "निरहङ्कारः",
    "without ego"
   ],
   [
    "क्षमी",
    "forgiving"
   ]
  ],
  "x": "Asked which devotee is best, Krishna answers with character, not ritual. The portrait begins with one who hates no being, is friendly and compassionate, free of 'mine' and of ego, even in pleasure and pain, and forgiving. Devotion shows up in how we treat people.",
  "self": "Read the list slowly, as a mirror rather than a test.",
  "family": "Forgiveness keeps families intact. Let small hurts go before they harden.",
  "work": "Be friendly to everyone, including the colleague you don't naturally like.",
  "try": "Forgive one small thing today, even if only in your own heart.",
  "r": "Which of these qualities do I most need now?",
  "carry": "Adveṣṭā sarva-bhūtānām: hating no one.",
  "f": [
   "angry"
  ],
  "a": [
   "self",
   "work"
  ]
 },
 {
  "c": 13,
  "v": 7,
  "sp": "K",
  "note": "Numbered 13.8 in some editions.",
  "ctx": "Krishna is explaining the 'field' (the body and mind) and the 'knower of the field' (the Self). Before describing what is to be known, he lists the qualities that make real knowledge possible, starting with this verse.",
  "kids": "\"Being truly clever isn't only good marks. It's being humble, patient and honest too.\"",
  "adults": "Credentials accumulate with age; these qualities do not, unless we cultivate them.",
  "rr": [
   "Where do I need to be seen or honoured?",
   "What would 'straightforward' look like in my hardest conversation?"
  ],
  "t": {
   "en": "Signs of true knowledge",
   "te": "నిజమైన జ్ఞాన లక్షణాలు",
   "hi": "सच्चे ज्ञान के लक्षण"
  },
  "s": "अमानित्वमदम्भित्वमहिंसा क्षान्तिरार्जवम्।\nआचार्योपासनं शौचं स्थैर्यमात्मविनिग्रहः॥",
  "i": "amānitvam adambhitvam ahiṃsā kṣāntir ārjavam\nācāryopāsanaṃ śaucaṃ sthairyam ātma-vinigrahaḥ",
  "m": {
   "en": "Humility, freedom from pretence, non-violence, patience, honesty, service to the teacher, purity, steadiness and self-control: these are the marks of knowledge.",
   "te": "గర్వం లేకపోవడం, డంబం లేకపోవడం, అహింస, ఓర్పు, సరళత్వం, గురుసేవ, శుచిత్వం, స్థిరత్వం, ఆత్మనిగ్రహం — ఇవే జ్ఞానానికి లక్షణాలు.",
   "hi": "मान का अभाव, दंभ का अभाव, अहिंसा, क्षमा, सरलता, गुरु की सेवा, पवित्रता, स्थिरता और आत्मसंयम — ये ज्ञान के लक्षण हैं।"
  },
  "w": [
   [
    "अमानित्वम्",
    "humility"
   ],
   [
    "अदम्भित्वम्",
    "not showing off"
   ],
   [
    "अहिंसा",
    "non-harming"
   ],
   [
    "क्षान्तिः",
    "patience"
   ],
   [
    "आर्जवम्",
    "honesty, straightness"
   ],
   [
    "स्थैर्यम्",
    "steadiness"
   ]
  ],
  "x": "Krishna's list of what makes knowledge real begins with character: amānitva, freedom from the need to be honoured; adambhitva, not showing off; then non-harm, patience, straightforwardness, respect for one's teacher, purity, steadiness and self-restraint. For the Gita, you know something when it shows in how you live.",
  "self": "Pick one quality from this list and make it your practice for a month.",
  "family": "Admitting a mistake in front of your children teaches humility better than any lesson.",
  "work": "Straightforwardness builds lasting trust. Don't oversell.",
  "try": "Choose one word from this list and practise it deliberately all day.",
  "r": "Which of these qualities comes easiest to me, and which is hardest?",
  "carry": "Knowledge shows in how you live.",
  "f": [],
  "a": [
   "self",
   "work"
  ]
 },
 {
  "c": 14,
  "v": 5,
  "sp": "K",
  "ctx": "Chapter 14 explains how nature works through three qualities. This verse introduces them. The next verses describe how each binds us: sattva through attachment to happiness and knowledge, rajas through restless activity, and tamas through carelessness and sleep.",
  "kids": "Play a game of naming moods: calm and clear, busy and fidgety, sleepy and slow. Talk about what helps you move from one to another.",
  "adults": "Food, company, screens and routine all tilt us one way or another. Noticing the pattern is half the work.",
  "rr": [
   "What reliably moves me towards clarity?",
   "What pulls me into restlessness or heaviness?"
  ],
  "t": {
   "en": "The three qualities",
   "te": "త్రిగుణాలు",
   "hi": "तीन गुण"
  },
  "s": "सत्त्वं रजस्तम इति गुणाः प्रकृतिसम्भवाः।\nनिबध्नन्ति महाबाहो देहे देहिनमव्ययम्॥",
  "i": "sattvaṃ rajas tama iti guṇāḥ prakṛti-sambhavāḥ\nnibadhnanti mahā-bāho dehe dehinam avyayam",
  "m": {
   "en": "Sattva (clarity), rajas (restlessness) and tamas (dullness), the three qualities born of nature, bind the imperishable soul to the body, Arjuna.",
   "te": "ఓ మహాబాహూ, ప్రకృతి నుండి పుట్టిన సత్త్వం, రజస్సు, తమస్సు అనే మూడు గుణాలు నాశనం లేని ఆత్మను శరీరంలో బంధిస్తాయి.",
   "hi": "हे महाबाहो, प्रकृति से उत्पन्न सत्त्व, रज और तम ये तीनों गुण अविनाशी आत्मा को देह में बाँधते हैं।"
  },
  "w": [
   [
    "सत्त्वम्",
    "clarity, goodness"
   ],
   [
    "रजः",
    "passion, restlessness"
   ],
   [
    "तमः",
    "dullness, inertia"
   ],
   [
    "गुणाः",
    "qualities"
   ],
   [
    "निबध्नन्ति",
    "bind"
   ]
  ],
  "x": "Sattva (clarity and calm), rajas (drive and restlessness) and tamas (heaviness and inertia) are the three qualities of nature in the Gita's psychology. Every mood, food and activity leans towards one of them. Knowing them lets you notice your state and choose what will move you towards clarity.",
  "self": "Feeling heavy and unmotivated is tamas. Movement, sunlight or one small task often shifts it.",
  "family": "A calm, uncluttered home and fresh food tend to bring out sattva in everyone.",
  "work": "Rajas fuels ambition, but too much of it ends in burnout. Pair it with clarity.",
  "try": "Three times today, ask: am I in sattva, rajas or tamas right now? What would move me towards clarity?",
  "r": "Which quality has ruled my week?",
  "carry": "Notice the guṇa, then choose.",
  "f": [
   "restless",
   "stuck"
  ],
  "a": [
   "self"
  ]
 },
 {
  "c": 15,
  "v": 7,
  "sp": "K",
  "ctx": "Krishna has described the world as an upside-down fig tree with its roots above. Now he explains where the individual soul fits: it is a part of him that takes on a body, mind and senses.",
  "kids": "\"You are like a little spark from a big fire. That's how precious you are.\"",
  "adults": "Self-respect grounded in this idea does not depend on achievement or approval.",
  "rr": [
   "How would I treat others if I saw them this way?",
   "Where does my sense of worth come from right now?"
  ],
  "t": {
   "en": "A part of the Divine",
   "te": "నాలోని ఒక అంశ",
   "hi": "मेरा ही अंश"
  },
  "s": "ममैवांशो जीवलोके जीवभूतः सनातनः।\nमनःषष्ठानीन्द्रियाणि प्रकृतिस्थानि कर्षति॥",
  "i": "mamaivāṃśo jīva-loke jīva-bhūtaḥ sanātanaḥ\nmanaḥ-ṣaṣṭhānīndriyāṇi prakṛti-sthāni karṣati",
  "m": {
   "en": "An eternal part of Me becomes the living soul in this world. It draws to itself the senses, with the mind as the sixth, which rest in nature.",
   "te": "జీవలోకంలోని జీవుడు నా సనాతనమైన అంశమే. అది ప్రకృతిలో ఉన్న ఇంద్రియాలను, ఆరవదైన మనసును తన వైపుకు ఆకర్షిస్తుంది.",
   "hi": "इस जीवलोक में जीवात्मा मेरा ही सनातन अंश है। वह प्रकृति में स्थित मन सहित छह इन्द्रियों को आकर्षित करता है।"
  },
  "w": [
   [
    "मम एव अंशः",
    "a part of Me"
   ],
   [
    "जीवभूतः",
    "the living being"
   ],
   [
    "सनातनः",
    "eternal"
   ],
   [
    "मनःषष्ठानि",
    "with the mind as sixth"
   ],
   [
    "इन्द्रियाणि",
    "the senses"
   ]
  ],
  "x": "Krishna calls the individual soul an eternal part of himself, a spark of the same fire, which takes on a body, mind and senses for a while. The implication is that every person carries an inborn dignity, whatever their circumstances.",
  "self": "On days when you feel small, remember what you are a part of.",
  "family": "Treat each family member, and yourself, as carrying that same spark.",
  "work": "No honest work is beneath a person's dignity. Do it well, and respect those who do it.",
  "try": "Before you criticise yourself today, pause and remember whose part you are.",
  "r": "Do I treat myself as a spark of the Divine?",
  "carry": "A spark of the same fire.",
  "f": [
   "sad"
  ],
  "a": [
   "self"
  ]
 },
 {
  "c": 16,
  "v": 21,
  "sp": "K",
  "ctx": "Krishna has listed divine qualities (fearlessness, purity, kindness) and destructive ones (pride, anger, cruelty). He closes the chapter by naming the three root traps to avoid.",
  "kids": "Talk about three tricky feelings: wanting too much, getting angry, and not wanting to share. \"When we notice them, they lose their power.\"",
  "adults": "These three rarely announce themselves. They wear respectable clothes: ambition, justified irritation, prudence.",
  "rr": [
   "What usually sets it off?",
   "What respectable name do I give it?"
  ],
  "t": {
   "en": "Three gates to avoid",
   "te": "మూడు నరక ద్వారాలు",
   "hi": "नरक के तीन द्वार"
  },
  "s": "त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः।\nकामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत्॥",
  "i": "tri-vidhaṃ narakasyedaṃ dvāraṃ nāśanam ātmanaḥ\nkāmaḥ krodhas tathā lobhas tasmād etat trayaṃ tyajet",
  "m": {
   "en": "Desire, anger and greed are the three gates to hell that ruin the self. So give up all three.",
   "te": "కామం, క్రోధం, లోభం అనే ఈ మూడు నరక ద్వారాలు మనిషిని నాశనం చేస్తాయి. కాబట్టి ఈ మూడింటినీ విడిచిపెట్టాలి.",
   "hi": "काम, क्रोध और लोभ — ये तीन प्रकार के नरक के द्वार आत्मा का नाश करने वाले हैं। इसलिए इन तीनों को त्याग देना चाहिए।"
  },
  "w": [
   [
    "त्रिविधम्",
    "three kinds"
   ],
   [
    "द्वारम्",
    "gate"
   ],
   [
    "कामः",
    "desire, lust"
   ],
   [
    "क्रोधः",
    "anger"
   ],
   [
    "लोभः",
    "greed"
   ],
   [
    "त्यजेत्",
    "should give up"
   ]
  ],
  "x": "Krishna names three root traps: kāma (craving), krodha (anger) and lobha (greed). He calls them gates because each feels like a way out in the moment, and then closes in around us. Naming them honestly is the first step to stepping back.",
  "self": "Desire itself is not the problem. Desire that runs you is.",
  "family": "Most family conflicts trace back to one of these three. Ask which one is at work.",
  "work": "Greed for credit and anger at setbacks quietly damage teams. Watch for both in yourself.",
  "try": "Notice which of the three pulls at you most today. Just notice, without judging.",
  "r": "Which of the three gates do I stand nearest?",
  "carry": "Kāma, krodha, lobha: know the three gates.",
  "f": [
   "angry",
   "restless"
  ],
  "a": [
   "self"
  ]
 },
 {
  "c": 17,
  "v": 15,
  "sp": "K",
  "ctx": "Chapter 17 describes three kinds of discipline (tapas): of the body, of speech and of the mind. This verse defines discipline of speech.",
  "kids": "Teach three questions to ask before speaking: Is it true? Is it kind? Does it help?",
  "adults": "Much of the harm in families and workplaces comes not from lies but from true things said carelessly.",
  "rr": [
   "Where have my words hurt someone recently?",
   "What have I avoided saying that needs saying, kindly?"
  ],
  "t": {
   "en": "Speak truth, kindly",
   "te": "మాటలో తపస్సు",
   "hi": "वाणी का तप"
  },
  "s": "अनुद्वेगकरं वाक्यं सत्यं प्रियहितं च यत्।\nस्वाध्यायाभ्यसनं चैव वाङ्मयं तप उच्यते॥",
  "i": "anudvega-karaṃ vākyaṃ satyaṃ priya-hitaṃ ca yat\nsvādhyāyābhyasanaṃ caiva vāṅ-mayaṃ tapa ucyate",
  "m": {
   "en": "Words that cause no distress, that are true, pleasant and helpful, together with regular study of sacred texts, are called the discipline of speech.",
   "te": "ఎవరినీ బాధించని, సత్యమైన, ప్రియమైన, హితమైన మాటలు పలకడం, స్వాధ్యాయం (శాస్త్ర పఠనం) అభ్యసించడం వాక్కు తపస్సు అనబడుతుంది.",
   "hi": "जो वाक्य उद्वेग न करने वाला, सत्य, प्रिय और हितकारी हो, तथा स्वाध्याय का अभ्यास — यह वाणी का तप कहलाता है।"
  },
  "w": [
   [
    "अनुद्वेगकरम्",
    "not upsetting"
   ],
   [
    "सत्यम्",
    "true"
   ],
   [
    "प्रियहितम्",
    "pleasant and helpful"
   ],
   [
    "स्वाध्याय",
    "study of scripture"
   ],
   [
    "वाङ्मयं तपः",
    "discipline of speech"
   ]
  ],
  "x": "The Gita's discipline of speech has four tests: words should not cause needless distress, and should be true, pleasant and beneficial. Alongside them comes svādhyāya, regular study of sacred texts. Truth spoken harshly wounds; kindness without truth misleads. Krishna asks for both together, a fitting verse for a puja to Satyanarayana, the Lord of Truth.",
  "self": "Your words to yourself count as speech too.",
  "family": "In a heated moment, ask before speaking: is this true, kind and useful?",
  "work": "Feedback can be honest and useful without being humiliating. That is the craft.",
  "try": "Pass every important sentence today through three filters: true, kind, helpful.",
  "r": "What true and kind thing could I say today?",
  "carry": "Satyaṃ priya-hitam: true, kind and helpful.",
  "f": [
   "angry"
  ],
  "a": [
   "self",
   "work"
  ]
 },
 {
  "c": 18,
  "v": 66,
  "sp": "K",
  "kids": "\"When you're worried, you can give it to God, like handing a heavy bag to a grown-up.\"",
  "adults": "Surrender is often mistaken for passivity. Here it means putting down what was never yours to carry.",
  "rr": [
   "What would trust look like this week?",
   "What am I still trying to carry alone?"
  ],
  "ctx": "Among Krishna's very last instructions. After 17 chapters on action, knowledge, meditation and devotion, he offers the simplest path of all: complete trust in Him. Arjuna has been anxious since the first chapter, and Krishna's closing words are “do not worry”.",
  "t": {
   "en": "Take refuge, do not grieve",
   "te": "శరణు పొందు, బాధపడకు",
   "hi": "शरण में आओ, शोक मत करो"
  },
  "s": "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
  "i": "sarva-dharmān parityajya mām ekaṃ śaraṇaṃ vraja\nahaṃ tvā sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ",
  "m": {
   "en": "Set aside all other duties and take refuge in Me alone. I will free you from all sins. Do not grieve.",
   "te": "అన్ని ధర్మాలనూ విడిచిపెట్టి, నన్ను ఒక్కడినే శరణు పొందు. నేను నిన్ను అన్ని పాపాల నుండి విముక్తుడిని చేస్తాను. దుఃఖించకు.",
   "hi": "सब धर्मों को त्यागकर केवल मेरी शरण में आ जाओ। मैं तुम्हें सब पापों से मुक्त कर दूँगा, शोक मत करो।"
  },
  "w": [
   [
    "सर्व",
    "all"
   ],
   [
    "धर्मान्",
    "duties, paths"
   ],
   [
    "परित्यज्य",
    "setting aside"
   ],
   [
    "माम्",
    "in Me"
   ],
   [
    "एकम्",
    "alone"
   ],
   [
    "शरणम्",
    "refuge"
   ],
   [
    "व्रज",
    "go to, take"
   ],
   [
    "अहम्",
    "I"
   ],
   [
    "त्वा",
    "you"
   ],
   [
    "पापेभ्यः",
    "from sins"
   ],
   [
    "मोक्षयिष्यामि",
    "will set free"
   ],
   [
    "मा",
    "do not"
   ],
   [
    "शुचः",
    "grieve, worry"
   ]
  ],
  "x": "Ramanuja's tradition calls this the charama shloka, the final and supreme verse. Commentators read \"setting aside all dharmas\" differently: Shankara as giving up the sense of being the doer; Ramanuja as complete surrender, relying on grace rather than on one's own efforts. All agree on the comfort of the last words, mā śucaḥ: do not grieve.",
  "self": "Guilt and regret can be set down. They are not yours to carry forever.",
  "family": "In a crisis you cannot fix, surrender is not giving up. It is trusting while you do what you can.",
  "work": "After doing everything within your power, let go and rest.",
  "try": "Tonight, before you sleep, consciously set down one burden.",
  "r": "What burden can I put down?",
  "carry": "Mā śucaḥ: do not grieve.",
  "f": [
   "sad",
   "anxious",
   "fear"
  ],
  "a": [
   "self"
  ]
 },
 {
  "c": 18,
  "v": 78,
  "sp": "S",
  "ctx": "The very last verse of the Gita, spoken by Sanjaya, who has been narrating the whole dialogue to the blind king Dhritarashtra. Having heard it all, he gives his own verdict.",
  "kids": "\"Krishna is wisdom and Arjuna is effort. When they work together, good things happen. So we pray, and we practise.\"",
  "adults": "At any stage of life, ask which you are missing more: guidance, or effort?",
  "rr": [
   "When have wisdom and effort together worked for me?",
   "What am I hoping for without working towards?"
  ],
  "t": {
   "en": "Where wisdom and effort meet",
   "te": "జ్ఞానం, కృషి కలిసిన చోట",
   "hi": "जहाँ ज्ञान और पुरुषार्थ मिलें"
  },
  "s": "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः।\nतत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम॥",
  "i": "yatra yogeśvaraḥ kṛṣṇo yatra pārtho dhanur-dharaḥ\ntatra śrīr vijayo bhūtir dhruvā nītir matir mama",
  "m": {
   "en": "Wherever there is Krishna, the lord of yoga, and Arjuna, the archer, there will be prosperity, victory, well-being and steady righteousness. That is my conviction.",
   "te": "ఎక్కడ యోగేశ్వరుడైన శ్రీకృష్ణుడు ఉంటాడో, ఎక్కడ ధనుర్ధారి అయిన అర్జునుడు ఉంటాడో, అక్కడ సంపద, విజయం, ఐశ్వర్యం, స్థిరమైన నీతి ఉంటాయని నా అభిప్రాయం.",
   "hi": "जहाँ योगेश्वर श्रीकृष्ण हैं और जहाँ धनुर्धारी अर्जुन हैं, वहीं श्री, विजय, विभूति और अचल नीति है — ऐसा मेरा मत है।"
  },
  "w": [
   [
    "योगेश्वरः",
    "lord of yoga"
   ],
   [
    "धनुर्धरः",
    "bearer of the bow"
   ],
   [
    "श्रीः",
    "prosperity"
   ],
   [
    "विजयः",
    "victory"
   ],
   [
    "ध्रुवा नीतिः",
    "steady righteousness"
   ]
  ],
  "x": "Sanjaya's verdict on all he has heard: where Krishna, the master of yoga, and Arjuna, the archer, stand together, there will be prosperity, victory and lasting righteousness. Wisdom without effort remains an idea; effort without wisdom goes in circles. The Gita ends by joining the two.",
  "self": "Pair what you know with what you do.",
  "family": "A good blessing for any home: may wisdom and effort live here together.",
  "work": "Good guidance and hard work, together, are the formula for lasting success.",
  "try": "Pair one prayer or intention today with one concrete action.",
  "r": "Where do I need more guidance, and where more effort?",
  "carry": "Where wisdom and effort meet, there is victory.",
  "f": [
   "grateful"
  ],
  "a": [
   "self",
   "work"
  ]
 }
];

const LIBRARY = {
  gita: {
    name:{en:"Bhagavad Gita",te:"భగవద్గీత",hi:"भगवद्गीता"},
    sectionWord:{en:"Chapter",te:"అధ్యాయం",hi:"अध्याय"},
    sections: GITA_CHAPTERS,
    verses: GITA_VERSES,
    dayOneVerse: "9.26",
    ready: true
  },
  /* Coming later: same shape, so they plug into the same pages and WhatsApp flow. */
  ramakrishna: {name:{en:"Sri Ramakrishna's Teachings",te:"శ్రీ రామకృష్ణ బోధనలు",hi:"श्री रामकृष्ण के उपदेश"}, ready:false},
  sai:      {name:{en:"Sai Satcharitra",te:"సాయి సచ్చరిత్ర",hi:"साई सच्चरित्र"}, ready:false}
};
