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
    { e: "Do you want me to wait?", k: "기다릴까요?", n: "Do you want me to ~ 는 ‘제가 ~해 드릴까요’입니다.", h: true },
    { e: "You're all set.", k: "다 되셨어요", n: "★ 계산이나 절차가 끝났다는 말. 짧아서 제일 많이 놓칩니다.", h: true },
    { e: "How are you getting on?", k: "잘 돼 가세요?", n: "★ getting on = 진행되다. 직원이 지나가며 묻는 말입니다.", h: true },
    { e: "Whenever you're ready.", k: "준비되시면 말씀하세요", n: "서두르지 말라는 뜻. 재촉이 아닙니다.", h: true },
    { e: "That's you done.", k: "다 되셨습니다", n: "★ 영국식. 문법이 이상해 보이지만 아주 흔한 말이에요.", h: true }
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
    { e: "I think I'm lost.", k: "길을 잃은 것 같아요", n: "도움을 청하는 첫마디로 좋습니다." },
    { e: "Could you help me lift my bag?", k: "가방 올리는 것 좀 도와주실 수 있어요?", n: "기차 선반에 짐 올릴 때. lift = 들어 올리다." },
    { e: "You're a star, thank you!", k: "정말 멋진 분이세요, 고맙습니다!", n: "★ You're a star = 고마울 때 하는 칭찬. 연예인이라는 뜻이 아닙니다." },
    { e: "Am I going the right way?", k: "이쪽 방향 맞아요?", n: "이미 걷고 있을 때 확인하는 말." },
    { e: "How far is it from here?", k: "여기서 얼마나 멀어요?", n: "거리를 묻는 기본 문장. 시간으로 답이 오는 경우가 많습니다." },
    { e: "Is there a shortcut?", k: "질러가는 길 있어요?", n: "shortcut = 지름길." },
    { e: "Could you write it down?", k: "적어 주실 수 있어요?", n: "★ 지명이 안 들릴 때 가장 확실한 방법입니다." }
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
    { e: "Which floor is it on?", k: "몇 층이에요?" },
    { e: "I've forgotten the safe code.", k: "금고 비밀번호를 잊어버렸어요.", n: "safe = 객실 금고. 직원이 마스터 키로 열어 줍니다." },
    { e: "Could I borrow a bottle opener?", k: "병따개 좀 빌릴 수 있을까요?", n: "와인은 corkscrew(코르크 스크루). 샴페인은 손으로 돌려 여는 거라 따개가 필요 없어요." },
    { e: "Could I borrow a phone charger?", k: "휴대폰 충전기 좀 빌릴 수 있을까요?", n: "프런트에 두고 간 충전기가 모여 있는 경우가 많아요." },
    { e: "Is there any extra charge for that?", k: "그거 추가 요금 있나요?", n: "업그레이드해 준다고 할 때 꼭 물어볼 말. 공짜일 수도, 돈을 받을 수도 있어요." },
    { e: "Is cut fruit allowed in the room?", k: "손질한 과일은 방에 가져가도 되나요?", n: "동남아 숙소는 두리안을 금합니다. 껍질 벗겨 담아온 건 보통 괜찮아요." },
    { e: "I'd like to order room service.", k: "룸서비스 시키고 싶어요.", n: "방 전화로 0번을 누르거나 Room Service 버튼을 누르면 됩니다." },
    { e: "Could I change rooms?", k: "방을 바꿀 수 있을까요?", n: "change rooms 는 늘 복수형입니다. room 하나만 쓰면 어색해요." },
    { e: "Could I have a wake-up call?", k: "모닝콜 좀 해 주실 수 있어요?", n: "★ wake-up call 이 모닝콜입니다. morning call 은 안 통해요." },
    { e: "Is there a laundry service?", k: "세탁 서비스 있어요?", n: "laundry = 빨래. 긴 여행이면 꼭 필요합니다." },
    { e: "Do you have an iron?", k: "다리미 있어요?", n: "공연 갈 옷을 다릴 때. 방에 없으면 빌려줍니다." }
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
    { e: "That was delicious.", k: "정말 맛있었어요", n: "나오면서 한마디 하면 좋습니다." },
    { e: "Is the tip included?", k: "팁이 포함되어 있나요?", n: "★ 미국은 대개 안 들어 있어 15~20% 따로 줍니다. 유럽은 service charge 로 이미 들어간 곳이 많아요." },
    { e: "Do I pay now or later?", k: "지금 계산해요, 나중에 해요?", n: "카페는 먼저, 식당은 나중이 보통인데 가게마다 달라요." },
    { e: "Do you have iced coffee?", k: "아이스커피 있어요?", n: "★ 유럽은 아이스커피가 없는 곳이 많습니다. iced 를 빼면 뜨거운 게 나와요." },
    { e: "Could I get some cold water?", k: "시원한 물 좀 주실 수 있어요?", n: "★ 유럽은 미지근한 물이 기본. with ice 를 붙이면 확실합니다." },
    { e: "I dropped my fork.", k: "포크를 떨어뜨렸어요", n: "이 말만 하면 새로 가져다줍니다. 주워서 쓰지 마세요." },
    { e: "There's no toilet paper.", k: "휴지가 없어요", n: "★ toilet paper 가 화장실 휴지. tissue 는 코 푸는 휴지예요." },
    { e: "Could we sit outside?", k: "밖에 앉아도 될까요?", n: "테라스 자리를 청할 때." },
    { e: "Is there a wait?", k: "기다려야 해요?", n: "★ a wait = 대기 시간. 들어서자마자 묻는 말입니다." }
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
    { e: "Can I return this?", k: "이거 환불돼요?" },
    { e: "I'd like to return this.", k: "이거 반품하려고요", n: "★ 반품 창구에서 먼저 하는 말. return = 물건을 되돌려 주는 것." },
    { e: "It doesn't fit.", k: "안 맞아요", n: "반품 이유로 가장 흔합니다. 이 한마디면 충분해요." },
    { e: "Can I exchange it for a bigger size?", k: "더 큰 사이즈로 교환돼요?", n: "★ exchange = 교환, refund = 환불. 둘은 다릅니다." },
    { e: "I bought it yesterday.", k: "어제 샀어요", n: "산 날짜를 말해 두면 처리가 빨라집니다. 영수증도 같이 내세요." },
    { e: "How does this machine work?", k: "이 기계 어떻게 써요?", n: "★ 셀프 계산대 앞에서. 직원이 옆에 서 있으니 부르면 됩니다." },
    { e: "It's not scanning.", k: "안 찍혀요", n: "★ 바코드가 안 읽힐 때. 직원이 와서 번호를 직접 칩니다." },
    { e: "Unexpected item in the bagging area.", k: "봉투 놓는 곳에 예상치 못한 물건이 있습니다", n: "★ 기계가 하는 말입니다. 봉투 자리에 딴 걸 올려두면 나와요. 놀라지 마세요.", h: true },
    { e: "Which aisle is the bread in?", k: "빵은 몇 번 통로에 있어요?", n: "★ aisle = 진열대 사이 통로. 발음은 '아일'이고 s 는 안 읽습니다." },
    { e: "Do you sell SIM cards?", k: "유심 파세요?", n: "여행 첫날 편의점이나 마트에서. SIM 은 '심'으로 읽습니다." },
    { e: "Do you have this in stock?", k: "이거 재고 있어요?", n: "★ in stock = 재고가 있는. 진열대에 없을 때 물어보세요." }
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
    { e: "Could you help me?", k: "좀 도와주실 수 있어요?", n: "막막할 때 이 한마디로 시작하세요." },
    { e: "I need to see a doctor.", k: "의사를 봐야 할 것 같아요", n: "★ see a doctor = 진료를 받다. 병원에 가고 싶다는 말입니다." },
    { e: "Where's the first aid room?", k: "의무실이 어디예요?", n: "★ first aid room = 의무실. 공연장·공항에 반드시 있습니다. medic 이라고도 해요." },
    { e: "I have a headache.", k: "머리가 아파요", n: "★ 아픈 곳은 I have a ~ 로 말합니다. stomachache(배), toothache(이), sore throat(목)." },
    { e: "Do you have anything for a cold?", k: "감기약 있어요?", n: "약국에서. anything for ~ = ~에 듣는 것." },
    { e: "I'm allergic to penicillin.", k: "페니실린 알레르기가 있어요", n: "★ 진료받을 때 꼭 해야 하는 말. 약 이름만 바꿔 쓰세요." },
    { e: "Could you call an ambulance?", k: "구급차 좀 불러 주세요", n: "★ 응급 상황. 미국·캐나다는 911, 영국·유럽은 112." },
    { e: "My bag was stolen.", k: "가방을 도둑맞았어요", n: "★ was stolen = 도둑맞았다. 잃어버린 것(lost)과 구분해 말해야 합니다. 보험 청구에도 다릅니다." },
    { e: "I've lost my passport.", k: "여권을 잃어버렸어요", n: "★ 가장 큰일. 대사관에 연락해야 합니다. 여권 사본을 미리 찍어 두세요." }
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
    { e: "I needed that.", k: "이게 필요했어요", n: "쉬거나 먹고 나서 한숨 돌릴 때." },
    { e: "That was fun.", k: "재밌었어요", n: "헤어지며 하는 가장 쉬운 마무리." },
    { e: "I'm so full.", k: "배불러요", n: "★ full = 배부른. 식사 뒤에 자주 씁니다." },
    { e: "It's colder than I thought.", k: "생각보다 춥네요", n: "날씨 이야기로 말을 트기 좋습니다." },
    { e: "I'm shattered.", k: "완전 지쳤어요", n: "★ shattered = 기진맥진(영국). 미국은 exhausted." },
    { e: "What a day.", k: "참 긴 하루였네요", n: "★ 좋은 날에도 힘든 날에도 씁니다. 말투로 갈려요." },
    { e: "I could get used to this.", k: "이런 거 익숙해지겠어요", n: "★ get used to = 익숙해지다. 좋은 상황에서 하는 말." }
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
    { e: "Enjoy your trip.", k: "여행 잘하세요" },
    { e: "Sorry, I'd rather not. I'm terrible at photos.", k: "죄송해요, 사양할게요. 사진을 정말 못 찍어서요", n: "★ I'd rather not = 안 하고 싶어요. 가장 부드러운 거절입니다." },
    { e: "I'll try, but I'm really bad at this.", k: "해볼게요, 근데 제가 정말 못 찍어요", n: "미리 말해 두고 찍어 주는 경우. 부담을 덜어 줍니다." },
    { e: "How's your day been?", k: "오늘 어떠셨어요?", n: "말을 트는 가장 흔한 물음." },
    { e: "What brings you here?", k: "여긴 어쩐 일로 오셨어요?", n: "★ What brings you ~ = 무슨 일로 오셨나요. 통째로 외우세요." },
    { e: "Is it always this busy?", k: "늘 이렇게 붐벼요?", n: "현지 사람에게 말 걸기 좋은 물음." },
    { e: "I love your bag.", k: "가방 예쁘네요", n: "★ 칭찬 한마디로 대화가 열립니다. love 는 과장이 아니에요." },
    { e: "Sorry, I didn't get your name.", k: "죄송해요, 이름을 못 들었어요", n: "★ get = 알아듣다. 다시 묻는 가장 자연스러운 말." },
    { e: "I'm Jiyeon, by the way.", k: "참, 저는 지연이에요", n: "★ by the way = 참, 그런데. 이름을 끼워 넣을 때 씁니다." },
    { e: "Mind if I join you?", k: "같이 있어도 될까요?", n: "★ Do you 가 빠진 말. 합석하거나 끼어들 때." },
    { e: "Let's keep in touch.", k: "연락하고 지내요", n: "keep in touch = 연락을 이어가다." }
  ]
},

{
  id: "border", icon: "🛂", name: "입국 심사",
  note: "심사관이 묻는 말입니다. 짧고 사실대로 답하면 됩니다. 묻지 않은 말을 덧붙일 필요 없어요. 숙소 주소와 돌아오는 항공권은 미리 꺼내 두세요.",
  items: [
    { e: "What's the purpose of your visit?", k: "방문 목적이 뭐예요?", n: "가장 먼저 나오는 질문. Tourism. 한 단어면 충분합니다.", h: true },
    { e: "How long will you be staying?", k: "얼마나 머무르세요?", n: "Ten days. 처럼 기간만 답하면 됩니다.", h: true },
    { e: "Where will you be staying?", k: "어디서 묵으세요?", n: "호텔 이름과 도시. 주소를 보여 주면 가장 확실합니다.", h: true },
    { e: "Do you have a return ticket?", k: "돌아가는 표 있어요?", n: "return ticket = 귀국 항공권. 날짜를 말하거나 표를 보여 주세요.", h: true },
    { e: "Who are you traveling with?", k: "누구와 같이 오셨어요?", n: "혼자면 I'm traveling alone.", h: true },
    { e: "Have you been to the US before?", k: "미국에 와 본 적 있어요?", n: "처음이면 No, this is my first time.", h: true },
    { e: "What do you do for work?", k: "직업이 뭐예요?", n: "★ for work 가 붙으면 직업을 묻는 말입니다. 직업 이름만 답하면 돼요.", h: true },
    { e: "Are you bringing any food?", k: "음식 가져오셨어요?", n: "★ 과일·고기·씨앗은 반입 금지. 과자류는 괜찮지만 있으면 있다고 하세요.", h: true },
    { e: "How much cash are you carrying?", k: "현금 얼마나 갖고 계세요?", n: "★ 만 달러가 넘으면 반드시 신고해야 합니다. 그 아래면 대략만 말하면 돼요.", h: true },
    { e: "I'm here for a concert.", k: "콘서트 보러 왔어요", n: "관광 목적을 구체적으로 말할 때. 심사관이 되묻는 일이 줄어듭니다." },
    { e: "I'm traveling alone.", k: "혼자 왔어요", n: "traveling alone = 혼자 여행하는." },
    { e: "Here's my hotel booking.", k: "숙소 예약증이에요", n: "말보다 보여 주는 게 빠릅니다. 폰에 미리 띄워 두세요." },
    { e: "Anything to declare?", k: "신고할 물건 있어요?", n: "★ 세관에서. declare = 신고하다.", h: true },
    { e: "Nothing to declare.", k: "신고할 것 없어요", n: "이 한마디면 통과입니다." },
    { e: "Please step over here.", k: "이쪽으로 오세요", n: "★ 따로 검사하려고 부르는 말. 당황하지 말고 따라가면 됩니다.", h: true },
    { e: "Could you open your bag?", k: "가방 좀 열어 주시겠어요?", n: "가방 검사. 열어 주면 됩니다.", h: true },
    { e: "Take your hat off, please.", k: "모자 벗어 주세요", n: "사진을 찍을 때. 안경도 벗으라고 할 수 있어요.", h: true },
    { e: "I'm just transiting.", k: "환승만 해요", n: "★ transit = 갈아타기. 입국이 아니라는 뜻입니다." },
    { e: "Where's baggage claim?", k: "수하물 찾는 곳이 어디예요?", n: "★ baggage claim = 짐 찾는 곳. 표지판에도 이렇게 써 있습니다." },
    { e: "My luggage didn't arrive.", k: "짐이 안 나왔어요", n: "★ 짐 분실 신고. 수하물표(baggage tag)를 챙겨 두세요." }
  ]
},

{
  id: "ride", icon: "🚕", name: "택시 · 버스 · 지하철",
  note: "타고 다니며 쓰는 말입니다. 택시는 요금과 만나는 자리, 버스·지하철은 카드와 방향이 전부예요.",
  items: [
    { e: "Where can I get a taxi?", k: "택시 어디서 타요?", n: "공항에 내려서 제일 먼저 묻게 되는 말." },
    { e: "Where's the pickup point for Grab?", k: "그랩 타는 곳이 어디예요?", n: "★ pickup point = 차를 타는 지정 장소. 공항은 앱 차량 자리가 따로 있습니다." },
    { e: "I'm at Terminal 2, door 5.", k: "2터미널 5번 문 앞이에요", n: "★ 기사에게는 터미널과 문 번호를 말해야 찾습니다. 건물 이름만으론 못 찾아요." },
    { e: "I think I left something in your car.", k: "차에 물건을 두고 내린 것 같아요", n: "left = 두고 내리다. 앱 안에서 기사에게 바로 연락할 수 있습니다." },
    { e: "Could you come back for me?", k: "저한테 다시 와 주실 수 있어요?", n: "come back for me = 나를 위해 돌아오다." },
    { e: "I'll pay extra if you can come back.", k: "돌아와 주시면 요금 더 드릴게요", n: "★ pay extra = 추가로 내다. 이렇게 말하면 대개 돌아와 줍니다." },
    { e: "This is for you. Thank you so much.", k: "이거 받으세요. 정말 고맙습니다", n: "팁을 건네며. 돈 이야기를 길게 안 해도 이 한마디면 됩니다." },
    { e: "How much is it to the city centre?", k: "시내까지 얼마예요?", n: "★ 타기 전에 묻는 말. 미터기 없는 택시는 먼저 값을 정해야 합니다." },
    { e: "Could you use the meter, please?", k: "미터기 켜 주시겠어요?", n: "★ 바가지를 막는 가장 확실한 한마디. 정중하게 말하면 됩니다." },
    { e: "Can you drop me here?", k: "여기서 내려 주실 수 있어요?", n: "★ drop me = 내려 주다. 목적지 전에 내리고 싶을 때." },
    { e: "Keep the change.", k: "잔돈은 괜찮아요", n: "거스름돈을 팁으로 줄 때. 짧고 자연스럽습니다." },
    { e: "Where's the ticket machine?", k: "발권기가 어디예요?", n: "ticket machine = 무인 발권기. 창구보다 줄이 짧습니다." },
    { e: "Where do I tap my card?", k: "카드 어디에 찍어요?", n: "★ tap = 카드를 대다. 요즘은 교통카드 없이 신용카드를 바로 대는 곳이 많아요." },
    { e: "Is there a day pass?", k: "하루 이용권 있어요?", n: "★ day pass = 1일권. 서너 번 탈 거면 이게 쌉니다." },
    { e: "Which line should I take?", k: "몇 호선 타야 해요?", n: "★ line = 노선. 번호가 아니라 색이나 이름으로 부르는 도시가 많습니다." },
    { e: "Is this the right side for downtown?", k: "시내 방향이 이쪽 맞아요?", n: "★ 승강장을 잘못 서면 반대로 갑니다. 타기 전에 꼭 확인하세요." },
    { e: "Can I pay with a card on the bus?", k: "버스에서 카드로 낼 수 있어요?", n: "현금만 받는 버스도 아직 있습니다. 잔돈을 안 거슬러 주기도 해요." },
    { e: "I need to get off at the next stop.", k: "다음 정거장에서 내려야 해요", n: "★ get off = 내리다. 사람이 많아 길을 비켜 달라 할 때도 씁니다." },
    { e: "Does this train stop at every station?", k: "이 열차 모든 역에 서요?", n: "★ 급행은 몇 정거장을 건너뜁니다. express(급행) / local(완행)." },
    { e: "How many stops is it?", k: "몇 정거장이에요?", n: "stops = 정거장 수. 내릴 때를 가늠하기 좋습니다." }
  ]
},

{
  id: "bias", icon: "💜", name: "최애 자랑하기",
  note: "옆자리 팬과 최애 이야기로 몇 시간도 갑니다. 어려운 말 필요 없어요. 짧게 툭 던지면 상대가 받아 줍니다.",
  items: [
    { e: "He's even better in person.", k: "실물이 훨씬 낫네요", n: "★ in person = 실제로 보면. 직접 보고 나서 하는 말입니다." },
    { e: "His dancing is on another level.", k: "춤이 차원이 달라요", n: "★ on another level = 수준이 다르다. 칭찬으로 아주 자주 씁니다." },
    { e: "He works so hard.", k: "정말 열심히 해요", n: "부지런함을 말하는 가장 쉬운 문장. 뒤에 프로다운 면을 덧붙이기 좋아요." },
    { e: "He never lets us down.", k: "우릴 실망시키는 법이 없어요", n: "★ let someone down = 실망시키다. 내려놓는다는 뜻이 아닙니다." },
    { e: "He writes his own songs.", k: "곡을 직접 써요", n: "★ his own = 자기 자신의. 직접 만든다는 뜻입니다." },
    { e: "He knows how to own a stage.", k: "무대를 장악할 줄 알아요", n: "★ own a stage = 무대를 휘어잡다. 소유가 아닙니다." },
    { e: "He's the whole package.", k: "다 갖췄어요", n: "★ the whole package = 외모·실력·성격 다 갖춘 사람." },
    { e: "You can tell he really cares.", k: "진심인 게 보여요", n: "★ You can tell = 티가 난다, 알 수 있다. cares = 마음을 쓴다." },
    { e: "Have you seen Hope on the Street?", k: "홉 온 더 스트릿 보셨어요?", n: "콘텐츠 이야기를 여는 말. 제목만 바꾸면 무엇에든 쓸 수 있어요." },
    { e: "The man is a genius.", k: "그 사람 천재예요", n: "★ The man = 그 사람(감탄조). He 보다 힘이 실립니다." },
    { e: "The whole show tells a story.", k: "공연 전체가 하나의 이야기예요", n: "기승전결이 있다는 말을 영어로는 이렇게 합니다." },
    { e: "Every song has its own concept.", k: "곡마다 컨셉이 뚜렷해요", n: "★ its own = 저마다의. concept 은 그대로 씁니다." },
    { e: "He always thanks his dancers and band.", k: "늘 댄서와 밴드에게 고마워해요", n: "★ 스태프를 챙기는 사람이라는 칭찬. give credit to 도 같은 뜻이에요." },
    { e: "I've been a fan for years.", k: "몇 년째 팬이에요", n: "for years = 몇 년째. 현재완료로 말합니다." },
    { e: "His voice live is incredible.", k: "라이브 목소리가 정말 좋아요", n: "★ live 는 '라이브'로 읽습니다. 녹음이 아니라는 뜻." },
    { e: "He deserves everything.", k: "다 누릴 자격이 있어요", n: "★ deserve = ~할 자격이 있다. 팬들이 자주 쓰는 말." },
    { e: "I cried, not gonna lie.", k: "솔직히 울었어요", n: "not gonna lie = 솔직히 말하면. 문장 끝에 붙습니다." },
    { e: "That outfit though.", k: "그 옷은 진짜…", n: "★ 끝의 though 가 '그건 진짜'라는 감탄이 됩니다. 요즘 말이에요." },
    { e: "He looked so happy tonight.", k: "오늘 정말 행복해 보였어요", n: "공연 뒤에 나누기 좋은 한마디." },
    { e: "I'm going to have this on repeat.", k: "이거 무한반복할 거예요", n: "★ on repeat = 반복 재생. 노래 이야기에 씁니다." }
  ]
},

{
  id: "museum", icon: "🎟️", name: "미술관 · 영화관 · 박람회",
  note: "표 끊고 들어가서 구경하는 자리라면 어디든 같습니다. 작품 이름만 바꾸면 영화관·박람회에서도 그대로 써요.",
  items: [
    { e: "Where do I buy tickets?", k: "표는 어디서 사요?", n: "온라인 예매가 더 싼 곳이 많으니 미리 확인해 두세요." },
    { e: "Where can I find the Monet room?", k: "모네 전시실이 어디예요?", n: "★ 작가 이름만 바꾸면 됩니다. room 대신 section 이라고도 해요." },
    { e: "Is photography allowed?", k: "사진 찍어도 되나요?", n: "★ 플래시만 금지인 곳이 많습니다. No flash 라는 답이 자주 와요." },
    { e: "Is there an audio guide in English?", k: "영어 오디오 가이드 있어요?", n: "audio guide = 음성 안내기. 대여료를 받는 곳도 있습니다." },
    { e: "Where's the nearest place to eat?", k: "제일 가까운 먹을 데가 어디예요?", n: "★ 고속도로 휴게소는 services(영국) 또는 rest stop(미국)이라고 합니다." },
    { e: "Two adults, please.", k: "어른 두 장 주세요", n: "표 살 때. 인원과 종류만 말하면 됩니다." },
    { e: "Is there a student discount?", k: "학생 할인 있어요?", n: "discount = 할인. 교사·경로 할인도 있으니 물어볼 만합니다." },
    { e: "Where do I leave my bag?", k: "가방은 어디에 맡겨요?", n: "★ 큰 가방은 못 들고 들어갑니다. cloakroom(물품 보관소)을 찾으세요." },
    { e: "Which way to the exhibition?", k: "전시는 어느 쪽이에요?", n: "★ Which way to ~ = ~는 어느 쪽인가요. 동사 없이 짧게 묻는 말." },
    { e: "How long does it take to see everything?", k: "다 보려면 얼마나 걸려요?", n: "시간 계획을 세울 때. 큰 미술관은 하루로도 모자랍니다." },
    { e: "Is this included in the ticket?", k: "이건 표에 포함된 건가요?", n: "★ 특별전은 따로 돈을 받는 경우가 많습니다." },
    { e: "What time do you close?", k: "몇 시에 닫아요?", n: "★ 닫기 30분 전부터 전시실을 차례로 닫습니다." },
    { e: "Is there a lift?", k: "승강기 있어요?", n: "★ lift = 승강기(영국). 미국은 elevator. 오래된 건물엔 없을 수도 있어요." },
    { e: "Where are the toilets?", k: "화장실이 어디예요?", n: "★ toilets(영국) / restroom(미국). 미국에서 toilet 은 변기를 뜻해 어색합니다." },
    { e: "Is there a gift shop?", k: "기념품 가게 있어요?", n: "gift shop = 기념품 가게. 대개 출구 쪽에 있습니다." },
    { e: "Could I have a map?", k: "지도 한 장 주실 수 있어요?", n: "대개 무료입니다. 영어판이 따로 있는 곳도 있어요." },
    { e: "What's this one about?", k: "이 작품은 무슨 내용이에요?", n: "★ What's it about = 무엇에 관한 것인가. 작품·영화·책에 다 씁니다." },
    { e: "Who painted this?", k: "이거 누가 그렸어요?", n: "painted = 그렸다. 조각이면 Who made this?" },
    { e: "Is this the original?", k: "이거 진품이에요?", n: "★ original = 진품. 복제품은 replica 나 copy 라고 합니다." },
    { e: "I could look at this all day.", k: "이건 하루 종일 봐도 좋겠어요", n: "작품 앞에서 감탄할 때. 같이 온 사람에게 하는 말." }
  ]
}

];
