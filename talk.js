/* ==========================================================
   대화 속에서 · 조금 빠른 말
   ----------------------------------------------------------
   TALK  표현 하나를 짧은 대화 속에 넣은 것입니다.
         열쇠는 phrases.js 의 e 와 글자 하나까지 같아야 합니다.

         where  어떤 자리인지 (화면에 작게 뜹니다)
         lines  주고받는 말. w 가 "me" 면 내가 하는 말입니다.
                "me" 가 여럿이어도 됩니다 — 말을 걸고 끝인사까지 하면
                그게 자연스러우니까요. 연습할 줄은 앱이 알아서 고릅니다.
                (그 표현이 들어 있는 내 줄, 없으면 첫 번째 내 줄)

   FAST  조금 빠른 말. 인터뷰·브이로그에서 나오는 속도입니다.
         특정한 사람이 한 말이 아니라, 그런 자리에서 쓰는 말투로
         새로 쓴 문장입니다. 진짜 목소리는 공식 영상으로 들으세요.

   고쳐도 됩니다. 줄 끝 쉼표만 빠뜨리지 마세요.
   ========================================================== */

var TALK = {

/* ---------- 콘서트 · 팬들과 ---------- */

"Who's your bias?": {
  where: "공연 시작 전, 옆자리 팬과",
  lines: [
    { w: "them", e: "So who's your bias?", k: "그래서 최애가 누구예요?" },
    { w: "me", e: "J-hope. He's been my bias since day one.", k: "제이홉이요. 처음부터 쭉 최애였어요." },
    { w: "them", e: "Oh, good taste. His stage presence is unreal.", k: "오, 보는 눈 있으시네요. 무대 장악력이 장난 아니죠." }
  ],
  replies: [
    { e: "Oh, good taste. His stage presence is unreal.", k: "오, 보는 눈 있으시네요. 무대 장악력이 장난 아니죠.",
      n: "unreal 은 '말도 안 된다'는 칭찬입니다." },
    { e: "Hobi! Obviously. Who else?", k: "호비죠! 당연하죠. 누가 또 있겠어요?",
      n: "Hobi 는 애칭입니다. Who else? 는 되묻는 게 아니라 맞장구예요." },
    { e: "Honestly, I can't pick. I'm an OT7 kind of person.", k: "솔직히 못 고르겠어요. 저는 다 좋아하는 쪽이에요.",
      n: "OT7 은 일곱 명 다 좋아한다는 팬덤 말. I'm a ~ kind of person = 저는 ~하는 사람이에요." },
    { e: "Mine's changed like three times this year, not gonna lie.", k: "저는 올해만 세 번쯤 바뀌었어요, 솔직히.",
      n: "not gonna lie 는 '솔직히'. 문장 끝에 붙어 뭉개집니다. like 도 뜻 없이 들어갑니다." },
    { e: "Same! Did you catch his solo stage last tour?", k: "저도요! 지난 투어 솔로 무대 보셨어요?",
      n: "catch 가 '보다'로 쓰입니다. Did you 가 '디쥬'처럼 붙습니다." }
  ]
},

"He's my bias.": {
  where: "굿즈를 고르다가",
  lines: [
    { w: "them", e: "Are you getting the photocard set?", k: "포토카드 세트 사실 거예요?" },
    { w: "me", e: "Just the J-hope one. He's my bias.", k: "제이홉 것만요. 제 최애예요." },
    { w: "them", e: "Fair enough. That one's going fast.", k: "그럴 만해요. 그거 빨리 나가더라고요." }
  ]
},

"Is this the line for merch?": {
  where: "공연장 앞, 줄이 여러 개일 때",
  lines: [
    { w: "me", e: "Excuse me, is this the line for merch?", k: "실례지만 굿즈 줄이 여기예요?" },
    { w: "them", e: "Yeah, this is it. The entrance line is over there.", k: "네, 여기 맞아요. 입장 줄은 저쪽이에요." },
    { w: "me", e: "Thank you!", k: "고맙습니다!" }
  ],
  replies: [
    { e: "Yeah, this is it. The entrance line is over there.", k: "네, 여기 맞아요. 입장 줄은 저쪽이에요.",
      n: "this is it = 여기 맞아요." },
    { e: "This is the queue for merch, yeah. Back of the line's round the corner though.",
      k: "네, 굿즈 줄 맞아요. 근데 줄 끝은 저 모퉁이 돌아서예요.",
      n: "영국은 line 대신 queue(큐). round the corner = 모퉁이 돌아서. 끝의 though 는 '근데'." },
    { e: "No, love, this is the entry line. Merch is down the side.",
      k: "아니에요, 이건 입장 줄이에요. 굿즈는 옆쪽으로 가셔야 해요.",
      n: "love 는 영국에서 모르는 사람에게 쓰는 친근한 호칭. 애정 표현이 아닙니다." },
    { e: "I think so? I only just got here myself.", k: "아마도요? 저도 방금 왔어요.",
      n: "끝을 올려 말하는 I think so? 는 '확실하진 않은데'. only just = 방금 막." },
    { e: "Yeah, but they're nearly sold out of the tour tees.", k: "네, 근데 투어 티셔츠는 거의 다 팔렸어요.",
      n: "묻지 않은 정보가 딸려 옵니다. tees = T-shirts." }
  ]
},

"How long have you been waiting?": {
  where: "굿즈 줄에서 앞사람에게",
  lines: [
    { w: "me", e: "How long have you been waiting?", k: "얼마나 기다리셨어요?" },
    { w: "them", e: "About three hours. I got here at six.", k: "세 시간쯤요. 여섯 시에 왔어요." },
    { w: "me", e: "Wow. That's dedication.", k: "와. 대단하시네요." }
  ],
  replies: [
    { e: "About three hours. I got here at six.", k: "세 시간쯤요. 여섯 시에 왔어요.",
      n: "got here 가 '가리어'처럼 붙습니다." },
    { e: "Since half five this morning, believe it or not.", k: "오늘 아침 다섯 시 반부터요, 믿기지 않겠지만.",
      n: "★ half five 는 5시 반입니다. 4시 반이 아니에요. 영국식이고 한국 사람이 제일 많이 틀립니다." },
    { e: "Not that long, maybe forty minutes? The queue moved dead quick.",
      k: "그렇게 오래는 아니에요, 한 사십 분? 줄이 엄청 빨리 줄었어요.",
      n: "dead quick 의 dead 는 '엄청'이라는 강조입니다. 죽음과 상관없어요." },
    { e: "Ages. Feels like I've been here forever.", k: "한참이요. 여기 평생 있었던 것 같아요.",
      n: "Ages 는 '아주 오래'. 나이가 아닙니다." },
    { e: "Too long! My legs are killing me.", k: "너무 오래요! 다리가 죽겠어요.",
      n: "~ is killing me = 아파 죽겠다. 아주 자주 씁니다." }
  ]
},

"Save my spot?": {
  where: "줄에서 잠깐 자리를 비울 때",
  lines: [
    { w: "me", e: "I'm gonna run to the bathroom. Save my spot?", k: "화장실 좀 다녀올게요. 자리 좀 봐 주실래요?" },
    { w: "them", e: "Sure, go ahead. I'll be right here.", k: "그럼요, 다녀오세요. 여기 있을게요." },
    { w: "me", e: "You're a lifesaver.", k: "정말 고마워요." }
  ]
},

"What time do the doors open?": {
  where: "공연장 앞에서",
  lines: [
    { w: "me", e: "Do you know what time the doors open?", k: "입장 몇 시부터인지 아세요?" },
    { w: "them", e: "Seven, I think. But they sometimes let us in early.", k: "일곱 시일 거예요. 가끔 일찍 열어주기도 해요." },
    { w: "me", e: "Good to know. Thanks.", k: "알아두면 좋겠네요. 고마워요." }
  ]
},

"Do you know where section B is?": {
  where: "표를 들고 자리를 찾을 때",
  lines: [
    { w: "me", e: "Sorry, do you know where section B is?", k: "죄송한데, B구역이 어디인지 아세요?" },
    { w: "them", e: "Go up these stairs and turn left. You can't miss it.", k: "이 계단 올라가서 왼쪽이요. 바로 보일 거예요." },
    { w: "me", e: "Got it, thanks a lot.", k: "알겠어요, 정말 고마워요." }
  ],
  replies: [
    { e: "Go up these stairs and turn left. You can't miss it.", k: "이 계단 올라가서 왼쪽이요. 바로 보일 거예요.",
      n: "You can't miss it = 못 찾을 리 없어요. 놓치지 말라는 뜻이 아닙니다." },
    { e: "B? That's the other side, mate. All the way round.",
      k: "B요? 그건 반대편이에요. 쭉 돌아가셔야 해요.",
      n: "mate 는 영국에서 모르는 사람에게도 씁니다. all the way round = 빙 돌아서." },
    { e: "Sorry, no idea. I'm in the standing pit myself.",
      k: "죄송해요, 모르겠어요. 저는 스탠딩이라서요.",
      n: "no idea = 전혀 모르겠다. myself 는 '저는요'라는 덧붙임." },
    { e: "Follow the signs for the two hundreds, then it's on your right.",
      k: "200번대 표지판 따라가시면, 오른쪽에 있어요.",
      n: "the two hundreds = 200번대 구역. 숫자를 이렇게 뭉뚱그려 말합니다." },
    { e: "Just ask one of the stewards, they'll sort you out.",
      k: "안내 요원한테 물어보세요, 알아서 해결해 줄 거예요.",
      n: "steward = 공연장 안내 요원. sort you out = 처리해 주다." }
  ]
},

"I came from Korea for this.": {
  where: "옆자리 팬과 이야기하다가",
  lines: [
    { w: "them", e: "Did you travel far to get here?", k: "멀리서 오셨어요?" },
    { w: "me", e: "I came from Korea for this.", k: "이거 보러 한국에서 왔어요." },
    { w: "them", e: "No way, that's amazing. Worth it though, right?", k: "세상에, 대단하네요. 그래도 올 만하죠?" }
  ]
},

"Could you take a photo of me?": {
  where: "공연장 간판 앞에서",
  lines: [
    { w: "me", e: "Could you take a photo of me? Just here is fine.", k: "사진 좀 찍어 주실 수 있어요? 여기서 찍으면 돼요." },
    { w: "them", e: "Of course. Say cheese!", k: "그럼요. 하나 둘 셋!" },
    { w: "me", e: "That's perfect, thank you so much.", k: "잘 나왔어요, 정말 고맙습니다." }
  ]
},

"Can I get a picture with you?": {
  where: "같은 최애인 걸 알게 됐을 때",
  lines: [
    { w: "them", e: "Your outfit is so cute! Is that handmade?", k: "옷 너무 예뻐요! 직접 만드신 거예요?" },
    { w: "me", e: "Thank you! Can I get a picture with you?", k: "고마워요! 같이 사진 찍어도 될까요?" },
    { w: "them", e: "Yes, please! Let's do it.", k: "네, 좋아요! 찍어요." }
  ]
},

"Nice lightstick!": {
  where: "입장 줄에서 앞사람에게",
  lines: [
    { w: "me", e: "Nice lightstick! Did you decorate it yourself?", k: "응원봉 멋지네요! 직접 꾸미신 거예요?" },
    { w: "them", e: "I did! Took me way too long, honestly.", k: "네! 솔직히 시간 엄청 걸렸어요." },
    { w: "me", e: "It was worth it. It looks great.", k: "그럴 만했어요. 정말 예뻐요." }
  ]
},

"Is there a fanchant for this one?": {
  where: "다음 곡이 시작되기 직전",
  lines: [
    { w: "me", e: "Is there a fanchant for this one?", k: "이 곡 응원법 있어요?" },
    { w: "them", e: "Yeah, but it's just the chorus. Follow me, you'll get it.", k: "네, 근데 후렴만이에요. 따라 하시면 금방 돼요." },
    { w: "me", e: "Okay, I'll try!", k: "좋아요, 해볼게요!" }
  ]
},

"That was incredible.": {
  where: "공연이 끝나고 나오면서",
  lines: [
    { w: "them", e: "So? What did you think?", k: "어때요? 어땠어요?" },
    { w: "me", e: "That was incredible. I'm still shaking.", k: "정말 최고였어요. 아직도 떨려요." },
    { w: "them", e: "Right? The encore especially.", k: "그쵸? 특히 앙코르가요." }
  ]
},

"My voice is gone.": {
  where: "공연 끝나고 목이 쉬었을 때",
  lines: [
    { w: "them", e: "You okay? You sound rough.", k: "괜찮아요? 목소리가 안 좋은데요." },
    { w: "me", e: "My voice is gone. Totally worth it though.", k: "목이 다 쉬었어요. 그래도 하나도 안 아까워요." },
    { w: "them", e: "Same here. Worth every second.", k: "저도요. 일 초도 안 아까워요." }
  ]
},

"Are you going tomorrow too?": {
  where: "공연장을 나서며 헤어질 때",
  lines: [
    { w: "me", e: "Are you going tomorrow too?", k: "내일도 오세요?" },
    { w: "them", e: "I wish. I only got tickets for tonight.", k: "가고 싶죠. 오늘 표만 구했어요." },
    { w: "me", e: "Ah, that's too bad. Well, it was great meeting you.", k: "아, 아쉽네요. 그래도 만나서 반가웠어요." }
  ]
},

/* ---------- 가볍게 말 섞기 ---------- */

"Where are you from?": {
  where: "줄에서 옆사람과",
  lines: [
    { w: "me", e: "So where are you from?", k: "어디서 오셨어요?" },
    { w: "them", e: "I'm from Manchester. Drove down this morning.", k: "맨체스터에서요. 오늘 아침에 운전해서 왔어요." },
    { w: "me", e: "That's a long drive!", k: "멀리서 오셨네요!" }
  ]
},

"I'm from Korea.": {
  where: "어디서 왔냐는 물음에",
  lines: [
    { w: "them", e: "Where are you from, if you don't mind me asking?", k: "실례가 안 된다면, 어디서 오셨어요?" },
    { w: "me", e: "I'm from Korea. I flew in two days ago.", k: "한국에서 왔어요. 이틀 전에 도착했어요." },
    { w: "them", e: "That's such a long way. Welcome!", k: "정말 멀리서 오셨네요. 환영해요!" }
  ]
},

"Is this your first time here?": {
  where: "공연장에서 처음 만난 사람과",
  lines: [
    { w: "me", e: "Is this your first time here?", k: "여기 처음이세요?" },
    { w: "them", e: "No, third time actually. I come every tour.", k: "아뇨, 사실 세 번째예요. 투어마다 와요." },
    { w: "me", e: "That's amazing. It's my first.", k: "대단하네요. 저는 처음이에요." }
  ]
},

"How long are you staying?": {
  where: "여행 이야기가 나왔을 때",
  lines: [
    { w: "them", e: "How long are you staying?", k: "얼마나 계세요?" },
    { w: "me", e: "About a week. I fly back on Sunday.", k: "일주일쯤요. 일요일에 돌아가요." },
    { w: "them", e: "Nice, you've got time to look around then.", k: "좋네요, 구경할 시간은 있으시겠어요." }
  ]
},

"Any recommendations?": {
  where: "현지 사람에게 물어볼 때",
  lines: [
    { w: "me", e: "I've got a free day tomorrow. Any recommendations?", k: "내일 하루 비는데, 추천해 주실 만한 곳 있어요?" },
    { w: "them", e: "If the weather's nice, go down by the river. It's lovely.", k: "날씨 좋으면 강가 쪽으로 가보세요. 정말 좋아요." },
    { w: "me", e: "I'll check it out. Thanks!", k: "가볼게요. 고마워요!" }
  ]
},

"It's my first time in this city.": {
  where: "가게나 숙소에서 말이 나왔을 때",
  lines: [
    { w: "them", e: "Are you here on holiday?", k: "여행 오셨어요?" },
    { w: "me", e: "Yes, it's my first time in this city.", k: "네, 이 도시는 처음이에요." },
    { w: "them", e: "Oh, you'll love it. Just watch out for the rain.", k: "아, 마음에 드실 거예요. 비만 조심하세요." }
  ]
},

"Nice talking to you.": {
  where: "이야기를 마치고 헤어질 때",
  lines: [
    { w: "them", e: "Well, I should find my seat. Enjoy the show!", k: "저는 자리 찾아가 볼게요. 공연 재밌게 보세요!" },
    { w: "me", e: "You too. Nice talking to you.", k: "그쪽도요. 이야기 즐거웠어요." },
    { w: "them", e: "Likewise! Maybe see you at the next one.", k: "저도요! 다음 공연에서 또 봬요." }
  ]
},

/* ---------- 소소한 감상 나누기 ---------- */

"That was lovely.": {
  where: "함께 무언가를 보고 나서",
  lines: [
    { w: "them", e: "What did you think of the opening act?", k: "오프닝 무대 어땠어요?" },
    { w: "me", e: "That was lovely. I didn't know them before.", k: "정말 좋았어요. 전에는 몰랐던 분들인데." },
    { w: "them", e: "Same, I'm gonna look them up later.", k: "저도요, 나중에 찾아봐야겠어요." }
  ]
},

"I wasn't expecting that.": {
  where: "생각지 못한 무대를 보고",
  lines: [
    { w: "them", e: "Did you see that dance break?", k: "그 댄스 브레이크 보셨어요?" },
    { w: "me", e: "I wasn't expecting that at all.", k: "전혀 예상 못 했어요." },
    { w: "them", e: "Nobody was. The whole place lost it.", k: "아무도 몰랐죠. 다들 난리 났잖아요." }
  ]
},

"I'm glad we came.": {
  where: "함께 온 사람과 공연 뒤에",
  lines: [
    { w: "them", e: "My feet are killing me.", k: "발이 너무 아파요." },
    { w: "me", e: "Mine too. But I'm glad we came.", k: "저도요. 그래도 오길 잘했어요." },
    { w: "them", e: "Absolutely. I'd do it again tomorrow.", k: "정말요. 내일 또 하라고 해도 하겠어요." }
  ]
},

"That made my day.": {
  where: "좋은 일이 있고 나서",
  lines: [
    { w: "them", e: "He waved right at our section, did you see?", k: "우리 구역 쪽으로 손 흔들었어요, 보셨어요?" },
    { w: "me", e: "I saw! That made my day.", k: "봤어요! 오늘 그거 하나로 다 됐어요." },
    { w: "them", e: "I'm never washing this shirt again.", k: "이 옷 이제 안 빨 거예요." }
  ]
},

"It's better than I thought.": {
  where: "기대가 낮았던 것이 좋았을 때",
  lines: [
    { w: "them", e: "How's the food here? I've heard mixed things.", k: "여기 음식 어때요? 평이 갈리던데." },
    { w: "me", e: "Honestly, it's better than I thought.", k: "솔직히 생각보다 낫네요." },
    { w: "them", e: "Good, I'll get the same then.", k: "잘됐네요, 저도 같은 걸로 할게요." }
  ]
},

"I needed that.": {
  where: "힘든 뒤에 숨을 돌렸을 때",
  lines: [
    { w: "them", e: "Here, I got you a coffee.", k: "여기요, 커피 사 왔어요." },
    { w: "me", e: "Oh, thank you. I needed that.", k: "아, 고마워요. 마침 필요했어요." },
    { w: "them", e: "Long day, huh?", k: "긴 하루였죠?" }
  ]
},

/* ---------- 먹기 ---------- */

"What do you recommend?": {
  where: "메뉴를 못 고르고 있을 때",
  lines: [
    { w: "them", e: "Have you decided, or do you need another minute?", k: "정하셨어요, 아니면 조금 더 보실래요?" },
    { w: "me", e: "I'm not sure yet. What do you recommend?", k: "아직 못 정했어요. 뭐가 맛있어요?" },
    { w: "them", e: "The fish and chips is what we're known for.", k: "피시앤칩스가 저희 대표 메뉴예요." }
  ]
},

"Could we get the check?": {
  where: "식사를 마치고",
  lines: [
    { w: "me", e: "Excuse me, could we get the check?", k: "저기요, 계산서 주시겠어요?" },
    { w: "them", e: "Of course. Card or cash?", k: "네. 카드로 하시겠어요, 현금이세요?" },
    { w: "me", e: "Card, please.", k: "카드로 할게요." }
  ]
},

"I'm allergic to nuts.": {
  where: "주문하면서 미리 알릴 때",
  lines: [
    { w: "me", e: "Before I order, I'm allergic to nuts. Is that okay?", k: "주문 전에요, 제가 견과류 알레르기가 있어요. 괜찮을까요?" },
    { w: "them", e: "No problem, I'll let the kitchen know.", k: "문제없어요, 주방에 말해 둘게요." },
    { w: "me", e: "Thank you, I appreciate it.", k: "고맙습니다, 감사해요." }
  ]
},

"Table for two, please.": {
  where: "식당에 들어서며",
  lines: [
    { w: "them", e: "Hi there, how many?", k: "안녕하세요, 몇 분이세요?" },
    { w: "me", e: "Table for two, please.", k: "두 명이요." },
    { w: "them", e: "Right this way.", k: "이쪽으로 오세요." }
  ]
},

/* ---------- 사기 ---------- */

"Do you have this in a bigger size?": {
  where: "굿즈 티셔츠를 고르며",
  lines: [
    { w: "me", e: "Do you have this in a bigger size?", k: "이거 더 큰 사이즈 있어요?" },
    { w: "them", e: "Let me check. We might have one left in the back.", k: "확인해 볼게요. 뒤에 하나 남았을 수도 있어요." },
    { w: "me", e: "Thank you, no rush.", k: "고마워요, 천천히 하세요." }
  ]
},

"Do you take cards?": {
  where: "계산하기 직전",
  lines: [
    { w: "me", e: "Do you take cards?", k: "카드 되나요?" },
    { w: "them", e: "We do, but there's a two pound minimum.", k: "네, 다만 최소 2파운드부터예요." },
    { w: "me", e: "That's fine, thanks.", k: "괜찮아요, 고맙습니다." }
  ]
},

"I'm just looking, thanks.": {
  where: "점원이 도움을 물어올 때",
  lines: [
    { w: "them", e: "Hi! Can I help you find anything?", k: "안녕하세요! 찾으시는 것 있으세요?" },
    { w: "me", e: "I'm just looking, thanks.", k: "그냥 구경하는 거예요, 고마워요." },
    { w: "them", e: "No worries, shout if you need me.", k: "괜찮아요, 필요하시면 부르세요." }
  ]
},

"Can I try this on?": {
  where: "옷을 골라 들고",
  lines: [
    { w: "me", e: "Can I try this on?", k: "입어 봐도 될까요?" },
    { w: "them", e: "Sure, fitting rooms are just behind you.", k: "그럼요, 탈의실은 바로 뒤에 있어요." },
    { w: "me", e: "Great, thanks.", k: "네, 고맙습니다." }
  ]
},

/* ---------- 숙소 ---------- */

"I have a reservation under Kim.": {
  where: "호텔 프런트에서 체크인",
  lines: [
    { w: "them", e: "Good evening. Checking in?", k: "안녕하세요. 체크인이세요?" },
    { w: "me", e: "Yes, I have a reservation under Kim.", k: "네, 김으로 예약했어요." },
    { w: "them", e: "Let me just find that for you. Could I see your passport?", k: "찾아 볼게요. 여권 좀 보여 주시겠어요?" }
  ]
},

"Could I leave my bags here?": {
  where: "체크아웃 뒤 공연 보러 가기 전",
  lines: [
    { w: "me", e: "I've checked out already. Could I leave my bags here?", k: "체크아웃은 했는데요. 짐 좀 맡길 수 있을까요?" },
    { w: "them", e: "Of course. Until what time?", k: "그럼요. 몇 시까지요?" },
    { w: "me", e: "Around eleven tonight, if that's okay.", k: "괜찮으시면 오늘 밤 열한 시쯤이요." }
  ]
},

/* ---------- 길 찾기 · 이동 ---------- */

"How do I get to the station?": {
  where: "길에서 지나가는 사람에게",
  lines: [
    { w: "me", e: "Excuse me, how do I get to the station?", k: "실례합니다, 역에 어떻게 가요?" },
    { w: "them", e: "Straight down this road, then left at the lights.", k: "이 길 쭉 가셔서 신호등에서 왼쪽이요." },
    { w: "me", e: "Straight, then left. Got it, thank you.", k: "쭉 가서 왼쪽. 알겠어요, 고맙습니다." }
  ]
},

"Does this bus go to the airport?": {
  where: "버스에 올라타며 기사에게",
  lines: [
    { w: "me", e: "Does this bus go to the airport?", k: "이 버스 공항 가나요?" },
    { w: "them", e: "It does, but you'll want the express. It's the next one.", k: "가긴 해요, 근데 급행 타시는 게 나아요. 다음 거예요." },
    { w: "me", e: "Ah, I'll wait then. Thanks.", k: "아, 그럼 기다릴게요. 고마워요." }
  ]
},

"Is this seat taken?": {
  where: "기차나 대기실에서",
  lines: [
    { w: "me", e: "Excuse me, is this seat taken?", k: "실례지만 여기 자리 있나요?" },
    { w: "them", e: "No, go ahead. Let me move my bag.", k: "아뇨, 앉으세요. 가방 치울게요." },
    { w: "me", e: "Thanks a lot.", k: "고맙습니다." }
  ]
},

/* ---------- 문제가 생겼을 때 ---------- */

"Sorry, I didn't catch that.": {
  where: "상대 말을 놓쳤을 때",
  lines: [
    { w: "them", e: "The doors open at half six round the side entrance.", k: "옆문 쪽으로 6시 반에 입장 시작해요." },
    { w: "me", e: "Sorry, I didn't catch that. Half six?", k: "죄송해요, 못 알아들었어요. 6시 반이요?" },
    { w: "them", e: "Yeah, half six. Round the side.", k: "네, 6시 반이요. 옆쪽으로요." }
  ]
},

"Could you speak a little slower?": {
  where: "말이 너무 빠를 때",
  lines: [
    { w: "them", e: "You'llwannaheadroundthebackandqueuethere.", k: "(빠르게) 뒤쪽으로 돌아가서 거기 줄 서시면 돼요." },
    { w: "me", e: "Sorry, could you speak a little slower?", k: "죄송한데, 조금만 천천히 말해 주실 수 있어요?" },
    { w: "them", e: "Sorry! Go around the back, and queue there.", k: "미안해요! 뒤쪽으로 돌아가서, 거기 줄 서세요." }
  ]
},

/* ---------- 잘 안 들리는 말 ---------- */

"What can I get you?": {
  where: "카페 계산대 앞",
  lines: [
    { w: "them", e: "Hi! What can I get you?", k: "안녕하세요! 뭐 드릴까요?" },
    { w: "me", e: "Can I get a large iced americano, please?", k: "아이스 아메리카노 라지 하나 주세요." },
    { w: "them", e: "Sure thing. Anything else?", k: "네. 더 필요한 거 있으세요?" }
  ]
}

};


/* ==========================================================
   조금 빠른 말
   인터뷰·브이로그에서 나오는 속도와 말투로 새로 쓴 문장입니다.
   특정한 사람의 발언이 아닙니다.
   ========================================================== */

var FAST = [
  { e: "I think this album is the most honest thing I've put out.",
    k: "이번 앨범이 제가 낸 것 중에 제일 솔직한 것 같아요.",
    n: "I think 으로 시작해 의견을 눌러 말하는 버릇. put out = 발표하다." },

  { e: "Honestly, I didn't sleep much, but the energy in that room was crazy.",
    k: "솔직히 잠은 별로 못 잤는데, 그 안의 공기가 정말 대단했어요.",
    n: "Honestly 로 시작하는 말이 인터뷰에 정말 자주 나옵니다." },

  { e: "We'd been working on it for about a year, on and off.",
    k: "한 일 년 정도 작업했어요, 쉬었다 하다가요.",
    n: "We'd been = We had been. on and off = 띄엄띄엄." },

  { e: "It's kind of hard to explain, but you just feel it on stage.",
    k: "설명하기가 좀 어려운데, 무대에 서면 그냥 느껴져요.",
    n: "kind of 는 '좀'. 빠르게 말하면 카인다 처럼 들립니다." },

  { e: "The fans were singing so loud I couldn't hear myself.",
    k: "팬들이 너무 크게 불러서 제 목소리가 안 들렸어요.",
    n: "so ~ that 에서 that 이 통째로 빠지는 일이 흔합니다." },

  { e: "To be honest, I was really nervous before the first show.",
    k: "사실 첫 공연 전에는 정말 긴장했어요.",
    n: "To be honest 도 말머리에 붙는 단골입니다." },

  { e: "I wanted to try something I hadn't done before.",
    k: "전에 안 해본 걸 해보고 싶었어요.",
    n: "hadn't done 의 d 소리가 거의 안 들립니다." },

  { e: "That's probably my favorite part of the whole tour.",
    k: "아마 투어 전체에서 제일 좋아하는 부분일 거예요.",
    n: "probably 가 프롭리 처럼 뭉개집니다." },

  { e: "We spent a lot of time on the choreography for that one.",
    k: "그 곡은 안무에 시간을 많이 썼어요.",
    n: "choreography = 안무. 무대 이야기에 계속 나오는 말입니다." },

  { e: "I mean, you never really get used to it.",
    k: "그러니까, 그건 정말 익숙해지지가 않아요.",
    n: "I mean 은 뜻이 거의 없는 말머리. 통째로 흘려들어도 됩니다." },

  { e: "It was one of those moments where you just stop and look around.",
    k: "그냥 멈춰 서서 둘러보게 되는 그런 순간이었어요.",
    n: "one of those moments where ~ 는 통째로 익혀 두면 좋습니다." },

  { e: "We're hoping to come back next year, if everything works out.",
    k: "일이 잘 풀리면 내년에 다시 오고 싶어요.",
    n: "works out = 잘 풀리다." },

  { e: "A lot of people helped me get here, and I don't forget that.",
    k: "여기까지 오는 데 많은 분들이 도와줬고, 저는 그걸 잊지 않아요.",
    n: "get here 가 게리어 처럼 붙어 들립니다." },

  { e: "The response has been way better than we expected.",
    k: "반응이 예상보다 훨씬 좋았어요.",
    n: "way better = 훨씬 낫다. way 가 강조입니다." },

  { e: "I grew up dancing, so that part always feels natural to me.",
    k: "춤추면서 자라서, 그 부분은 늘 자연스럽게 느껴져요.",
    n: "grew up -ing = ~하며 자라다." },

  { e: "There's something about performing live that you can't replace.",
    k: "라이브로 공연하는 데는 뭔가 대신할 수 없는 게 있어요.",
    n: "There's something about ~ that ... 도 통문장으로." },

  { e: "We'll see. I don't want to promise anything yet.",
    k: "지켜봐야죠. 아직 뭘 약속하고 싶진 않아요.",
    n: "We'll see 는 '두고 보자'가 아니라 '아직 모르겠다'입니다." },

  { e: "Thank you for waiting. I know it's been a while.",
    k: "기다려 주셔서 고맙습니다. 오래 걸린 거 알아요.",
    n: "it's been a while = 오랜만이다." }
];
