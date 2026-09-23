/* ==========================================================
   여행·일상 영어 표현
   ----------------------------------------------------------
   e  영어          k  한국어 뜻
   n  덧붙이는 말   (언제 쓰는지, 한국 사람이 헷갈리는 점)
   h  true 면 '듣기 어려운 말' — 뜻보다 소리가 문제인 표현

   고쳐도 됩니다. 줄 끝 쉼표만 빠뜨리지 마세요.
   ========================================================== */

var SETS = [

{
  id: "catch", icon: "👂", name: "잘 안 들리는 말",
  note: "어려운 낱말이 아니라 뭉개져서 안 들리는 말들입니다. 여기부터가 진짜 고비예요.",
  items: [
    { e: "You all set?", k: "다 되셨어요?", n: "계산 직전에 점원이 자주 묻습니다. ‘준비됐냐’는 뜻이에요.", h: true },
    { e: "Are you good?", k: "괜찮으세요? / 더 필요한 거 없으세요?", n: "‘너 착하니’가 아닙니다. 상태를 묻는 말이에요.", h: true },
    { e: "How's it going?", k: "안녕하세요", n: "인사입니다. 길게 대답할 필요 없이 Good, thanks 면 충분해요.", h: true },
    { e: "What can I get you?", k: "뭐 드릴까요?", n: "카페·바에서 주문받을 때. 빠르게 뭉쳐서 들립니다.", h: true },
    { e: "Here you go.", k: "여기 있습니다", n: "물건을 건네줄 때. 받으면 Thanks 하면 됩니다.", h: true },
    { e: "There you go.", k: "됐습니다 / 그렇지", n: "일이 잘 풀렸을 때도, 물건을 줄 때도 씁니다.", h: true },
    { e: "Go ahead.", k: "하세요 / 먼저 가세요", n: "양보하거나 허락할 때. 짧아서 놓치기 쉬워요.", h: true },
    { e: "Never mind.", k: "아니에요, 됐어요", n: "말하려다 그만둘 때. 화난 말이 아닙니다.", h: true },
    { e: "No worries.", k: "괜찮아요", n: "고맙다거나 미안하다는 말에 대한 가벼운 대답.", h: true },
    { e: "Take your time.", k: "천천히 하세요", n: "서두르지 말라는 뜻. 친절한 말이에요.", h: true },
    { e: "Hang on a second.", k: "잠깐만요", n: "전화나 대면에서 잠시 기다려 달라는 말.", h: true },
    { e: "Let me check.", k: "확인해 볼게요", n: "직원이 자리를 뜨면 이 말을 했을 가능성이 큽니다.", h: true },
    { e: "I'm all right, thanks.", k: "괜찮아요 (사양할게요)", n: "권유를 부드럽게 거절하는 말. No 보다 자연스러워요.", h: true },
    { e: "It's on me.", k: "제가 낼게요", n: "밥값을 내겠다는 뜻.", h: true },
    { e: "I'm gonna grab a coffee.", k: "커피 좀 사 올게요", n: "gonna = going to, grab = 간단히 사다·가져오다.", h: true },
    { e: "Do you want me to wait?", k: "기다릴까요?", n: "Do you want me to ~ 는 ‘제가 ~해 드릴까요’입니다.", h: true }
  ]
},

{
  id: "move", icon: "🚌", name: "길 찾기 · 이동",
  note: "물어보는 쪽이라 내가 먼저 말해야 하는 표현들입니다.",
  items: [
    { e: "How do I get to the station?", k: "역에 어떻게 가요?", n: "가장 쓸모 있는 한 문장. 뒤만 바꾸면 다 됩니다." },
    { e: "Is this the right way to the museum?", k: "박물관 이쪽 방향 맞아요?", n: "이미 걷고 있을 때 확인하는 말." },
    { e: "Does this bus go to the airport?", k: "이 버스 공항 가나요?", n: "타기 전에 기사에게." },
    { e: "Which platform is it?", k: "몇 번 승강장이에요?", n: "기차역에서." },
    { e: "Where do I transfer?", k: "어디서 갈아타요?", n: "transfer 가 ‘환승’입니다." },
    { e: "How long does it take?", k: "얼마나 걸려요?", n: "시간을 묻는 기본 문장." },
    { e: "Is it walking distance?", k: "걸어갈 만한 거리예요?", n: "택시를 탈지 말지 정할 때." },
    { e: "Could you show me on the map?", k: "지도에서 보여 주실 수 있어요?", n: "말로 들어도 못 알아들을 때 이게 제일 확실합니다." },
    { e: "Could you let me know when we get there?", k: "도착하면 알려 주실 수 있어요?", n: "버스에서 내릴 곳을 모를 때." },
    { e: "One ticket to Oxford, please.", k: "옥스퍼드 표 한 장 주세요", n: "지명만 바꾸면 됩니다." },
    { e: "What time is the last train?", k: "막차가 몇 시예요?", n: "밤에 돌아다닐 때 꼭 필요." },
    { e: "Is this seat taken?", k: "여기 자리 있나요?", n: "빈자리인지 물을 때." },
    { e: "Which exit should I take?", k: "몇 번 출구로 나가요?", n: "지하철에서." },
    { e: "I think I'm lost.", k: "길을 잃은 것 같아요", n: "도움을 청하는 첫마디로 좋습니다." }
  ]
},

{
  id: "stay", icon: "🛏️", name: "숙소",
  note: "체크인부터 체크아웃까지.",
  items: [
    { e: "I have a reservation under Kim.", k: "김으로 예약했어요", n: "under 다음에 예약자 이름." },
    { e: "What time is check-out?", k: "체크아웃 몇 시예요?" },
    { e: "Could I leave my bags here?", k: "짐 좀 맡길 수 있을까요?", n: "체크인 전이나 체크아웃 후에." },
    { e: "Is breakfast included?", k: "조식 포함인가요?" },
    { e: "Could I get an extra towel?", k: "수건 하나 더 주실 수 있어요?", n: "extra 를 붙이면 ‘하나 더’." },
    { e: "The wifi isn't working.", k: "와이파이가 안 돼요", n: "isn't working 은 고장·작동 안 함 전부에 씁니다." },
    { e: "The room is a bit cold.", k: "방이 좀 추워요", n: "a bit 을 넣으면 부드러워집니다." },
    { e: "Is a late check-out possible?", k: "늦게 나가도 될까요?" },
    { e: "Could you call a taxi for me?", k: "택시 좀 불러 주실 수 있어요?" },
    { e: "Which floor is it on?", k: "몇 층이에요?" }
  ]
},

{
  id: "eat", icon: "🍽️", name: "먹기",
  note: "식당에서 듣는 말과 하는 말.",
  items: [
    { e: "Table for two, please.", k: "두 명이요", n: "들어가면서 바로 이 말이면 됩니다." },
    { e: "Do you have an English menu?", k: "영어 메뉴판 있어요?" },
    { e: "What do you recommend?", k: "뭐가 맛있어요?", n: "직역은 ‘추천해 달라’지만 실제로 이렇게 씁니다." },
    { e: "What's in this?", k: "여기 뭐가 들어가요?", n: "못 먹는 게 있을 때 꼭 필요." },
    { e: "Is this spicy?", k: "이거 매워요?" },
    { e: "I'm allergic to nuts.", k: "견과류 알레르기가 있어요", n: "알레르기가 있으면 반드시 말하세요." },
    { e: "I'll have the same.", k: "저도 같은 걸로 할게요", n: "일행이 주문한 뒤에." },
    { e: "Could I get this without onions?", k: "양파 빼고 주실 수 있어요?", n: "without 다음에 빼고 싶은 것." },
    { e: "Just water is fine.", k: "물이면 돼요", n: "음료를 권할 때." },
    { e: "Could we get the check?", k: "계산서 주세요", n: "영국에서는 check 대신 bill 을 씁니다." },
    { e: "Could I get a to-go box?", k: "포장해 갈 통 주실 수 있어요?", n: "남은 음식을 싸갈 때." },
    { e: "That was delicious.", k: "정말 맛있었어요", n: "나오면서 한마디 하면 좋습니다." }
  ]
},

{
  id: "buy", icon: "🛍️", name: "사기",
  note: "가게에서.",
  items: [
    { e: "I'm just looking, thanks.", k: "그냥 구경하는 거예요", n: "점원이 다가올 때. 이 한마디면 편해집니다." },
    { e: "How much is this?", k: "이거 얼마예요?" },
    { e: "Do you have this in a bigger size?", k: "이거 더 큰 사이즈 있어요?" },
    { e: "Can I try this on?", k: "입어 봐도 돼요?", n: "try on 이 ‘입어 보다·신어 보다’." },
    { e: "Do you take cards?", k: "카드 되나요?" },
    { e: "Could I get a bag?", k: "봉투 하나 주실 수 있어요?", n: "유료인 곳이 많습니다." },
    { e: "Is this on sale?", k: "이거 할인하는 거예요?" },
    { e: "I'll take it.", k: "이걸로 할게요", n: "사겠다고 정했을 때." },
    { e: "Could I get a receipt?", k: "영수증 주실 수 있어요?", n: "환불하려면 꼭 챙기세요." },
    { e: "Can I return this?", k: "이거 환불돼요?" }
  ]
},

{
  id: "trouble", icon: "🆘", name: "문제가 생겼을 때",
  note: "당황하면 말이 안 나옵니다. 이건 외워 두세요.",
  items: [
    { e: "Sorry, I didn't catch that.", k: "죄송해요, 못 알아들었어요", n: "가장 자주 쓸 말. catch 가 ‘알아듣다’." },
    { e: "Could you speak a little slower?", k: "조금만 천천히 말해 주실 수 있어요?", n: "부탁하면 대부분 천천히 해 줍니다." },
    { e: "Could you say that again?", k: "다시 한 번 말해 주실 수 있어요?" },
    { e: "I don't speak much English.", k: "영어를 잘 못해요", n: "먼저 말해 두면 상대가 쉽게 말해 줍니다." },
    { e: "I think there's been a mistake.", k: "뭔가 잘못된 것 같아요", n: "따지지 않고 부드럽게 시작하는 말." },
    { e: "This isn't what I ordered.", k: "제가 주문한 게 아니에요" },
    { e: "I lost my wallet.", k: "지갑을 잃어버렸어요" },
    { e: "My phone died.", k: "휴대폰이 꺼졌어요", n: "died 는 배터리가 다 됐다는 뜻." },
    { e: "I missed my train.", k: "기차를 놓쳤어요" },
    { e: "Is there a pharmacy nearby?", k: "근처에 약국 있어요?", n: "nearby 를 붙이면 ‘근처에’." },
    { e: "I don't feel well.", k: "몸이 안 좋아요" },
    { e: "Could you help me?", k: "좀 도와주실 수 있어요?", n: "막막할 때 이 한마디로 시작하세요." }
  ]
},

{
  id: "feel", icon: "💬", name: "소소한 감상 나누기",
  note: "여행에서 제일 아쉬운 게 이겁니다. 좋았다는 말을 좋았다고만 하게 되죠.",
  items: [
    { e: "That was lovely.", k: "참 좋았어요", n: "음식·공연·풍경 다 됩니다. 영국에서 특히 많이 써요." },
    { e: "This is so good.", k: "이거 진짜 맛있다 / 좋다", n: "먹으면서 가볍게." },
    { e: "I wasn't expecting that.", k: "이럴 줄 몰랐어요", n: "놀랐을 때. 좋은 쪽으로도 나쁜 쪽으로도." },
    { e: "It's better than I thought.", k: "생각보다 좋네요" },
    { e: "I could stay here all day.", k: "여기 하루 종일 있어도 좋겠어요", n: "마음에 쏙 든 곳에서." },
    { e: "Worth the walk.", k: "걸어온 보람이 있네요", n: "힘들게 찾아간 곳에서." },
    { e: "The view is amazing.", k: "경치가 정말 좋네요" },
    { e: "It's quieter than I expected.", k: "생각보다 조용하네요", n: "than I expected 를 붙이면 뭐든 됩니다." },
    { e: "That's a shame.", k: "아쉽네요", n: "부끄럽다는 뜻이 아닙니다. 아쉬울 때 쓰는 말이에요." },
    { e: "It's a bit much for me.", k: "저한테는 좀 과하네요", n: "너무 달거나 비싸거나 시끄러울 때." },
    { e: "I'm glad we came.", k: "오길 잘했어요" },
    { e: "That made my day.", k: "덕분에 기분 좋아졌어요", n: "작은 친절을 받았을 때 하면 아주 좋습니다." },
    { e: "Not bad at all.", k: "꽤 괜찮은데요", n: "‘나쁘지 않다’가 아니라 칭찬입니다." },
    { e: "I needed that.", k: "이게 필요했어요", n: "쉬거나 먹고 나서 한숨 돌릴 때." }
  ]
},

{
  id: "concert", icon: "🎤", name: "콘서트 · 팬들과",
  note: "줄 서서 기다리는 몇 시간이 말 섞기 제일 좋은 때입니다. 다들 같은 이유로 와 있으니까요.",
  items: [
    { e: "Is this the line for merch?", k: "굿즈 줄 여기예요?", n: "merch = 굿즈. 공연장에서 제일 많이 듣는 말 중 하나." },
    { e: "How long have you been waiting?", k: "얼마나 기다리셨어요?", n: "줄에서 말 걸기 가장 자연스러운 첫마디." },
    { e: "Save my spot?", k: "자리 좀 봐 주실래요?", n: "화장실 갈 때. 짧게 이렇게만 해도 통합니다." },
    { e: "What time do the doors open?", k: "입장 몇 시부터예요?", n: "doors open 이 ‘입장 시작’." },
    { e: "Do you know where section B is?", k: "B구역이 어디인지 아세요?" },
    { e: "Is this seat 12?", k: "여기가 12번 자리예요?" },
    { e: "Who's your bias?", k: "최애가 누구예요?", n: "팬들끼리 쓰는 말. 이 한마디면 대화가 열립니다." },
    { e: "He's my bias.", k: "제 최애예요" },
    { e: "I came from Korea for this.", k: "이거 보러 한국에서 왔어요", n: "이 말 하면 다들 반가워합니다." },
    { e: "I've been waiting years for this.", k: "몇 년을 기다렸어요" },
    { e: "Could you take a photo of me?", k: "사진 좀 찍어 주실 수 있어요?" },
    { e: "Do you want me to take one of you?", k: "제가 찍어 드릴까요?", n: "먼저 제안하면 금세 친해집니다." },
    { e: "Can I get a picture with you?", k: "같이 사진 찍어도 될까요?" },
    { e: "Nice lightstick!", k: "응원봉 예쁘네요!", n: "가벼운 칭찬 한마디." },
    { e: "Where did you get that?", k: "그거 어디서 사셨어요?" },
    { e: "Is there a fanchant for this one?", k: "이 곡 응원법 있어요?", n: "fanchant = 응원법." },
    { e: "That was incredible.", k: "진짜 최고였어요", n: "공연 끝나고." },
    { e: "I can't believe I'm here.", k: "여기 있다는 게 안 믿겨요" },
    { e: "My voice is gone.", k: "목이 다 쉬었어요", n: "공연 끝나고 웃으면서." },
    { e: "Are you going tomorrow too?", k: "내일도 가세요?", n: "며칠 공연이면." },
    { e: "Can I squeeze past?", k: "좀 지나가도 될까요?", n: "빽빽한 데서 비집고 나갈 때. squeeze past = 비집고 지나가다." },
    { e: "Do you mind if I sit here?", k: "여기 앉아도 될까요?", n: "mind 로 물으면 ‘아니요’가 허락입니다. Not at all 이 ‘앉으세요’예요." },
    { e: "How did you get tickets?", k: "표 어떻게 구하셨어요?", n: "팬들끼리 반드시 나오는 이야기. 티켓팅 고생담이 돌아옵니다." },
    { e: "Do you know the setlist?", k: "셋리스트 아세요?", n: "setlist = 부를 곡 순서. 미리 도는 경우가 많아요." },
    { e: "Is the opening act on yet?", k: "오프닝 시작했어요?", n: "opening act = 앞 순서 가수. on = 무대에 올라 있다." },
    { e: "Are they doing an encore?", k: "앙코르 해요?", n: "encore 는 ‘앙코르’가 아니라 ‘앙콜’에 가깝게 들립니다." },
    { e: "Can you see okay from here?", k: "여기서 잘 보이세요?", n: "see okay = 잘 보이다. 자리 이야기할 때." },
    { e: "Is there a bag check?", k: "짐 맡기는 데 있어요?", n: "bag check = 짐 보관소. 큰 가방은 못 들고 들어가는 곳이 많아요." },
    { e: "I'm so nervous!", k: "너무 떨려요!", n: "공연 전 팬들이 서로에게 하는 말. 설렘에 가깝습니다." },
    { e: "What's your Instagram?", k: "인스타 뭐예요?", n: "연락처 주고받는 요즘 방식. 헤어지기 직전에 씁니다." },
    { e: "I'll tag you in the photo.", k: "사진에 태그할게요.", n: "tag = 사진에 계정을 걸어 두다." },
    { e: "Let's find each other after.", k: "끝나고 만나요.", n: "find each other = 서로 찾다. after 뒤가 생략됐습니다." }
  ]
},

{
  id: "chat", icon: "🙂", name: "가볍게 말 섞기",
  note: "짧게 주고받는 말. 여행에서 기억에 남는 건 대개 이런 순간입니다.",
  items: [
    { e: "Where are you from?", k: "어디서 오셨어요?" },
    { e: "I'm from Korea.", k: "한국에서 왔어요" },
    { e: "Is this your first time here?", k: "여기 처음이세요?" },
    { e: "How long are you staying?", k: "얼마나 계세요?" },
    { e: "Any recommendations?", k: "추천해 주실 만한 데 있어요?", n: "짧지만 대화가 열리는 말." },
    { e: "Do you live around here?", k: "이 근처 사세요?" },
    { e: "It's my first time in this city.", k: "이 도시는 처음이에요" },
    { e: "Nice talking to you.", k: "이야기 즐거웠어요", n: "헤어질 때." },
    { e: "Have a good one.", k: "좋은 하루 보내세요", n: "Have a good day 의 가벼운 말." },
    { e: "Enjoy your trip.", k: "여행 잘하세요" }
  ]
}

];
