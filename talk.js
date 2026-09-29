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
  ],
  replies: [
    { e: "Fair enough. That one's going fast.", k: "그럴 만해요. 그거 빨리 나가더라고요.",
      n: "going fast = 빨리 팔리고 있다." },
    { e: "Oh, he's my bias wrecker! I keep going back and forth.",
      k: "아, 저한텐 차애예요! 계속 왔다 갔다 해요.",
      n: "bias wrecker = 최애를 흔드는 멤버. go back and forth = 마음이 왔다 갔다 하다." },
    { e: "Honestly? Great choice. That man works so hard.",
      k: "솔직히요? 잘 고르셨어요. 그 사람 진짜 열심히 하잖아요.",
      n: "Honestly? 를 끝을 올려 말하고 잠깐 쉬었다가 이어 갑니다." },
    { e: "Aw, that's sweet. How long have you stanned him?",
      k: "아, 좋네요. 얼마나 좋아하셨어요?",
      n: "stan 이 동사로 쓰입니다. '덕질하다'에 가까워요." },
    { e: "Nice. You getting the photocard set too?",
      k: "좋네요. 포토카드 세트도 사세요?",
      n: "Are 를 통째로 빼고 You getting ~? 으로 묻습니다. 구어에서 아주 흔해요." }
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
  ],
  replies: [
    { e: "Sure, go ahead. I'll be right here.", k: "그럼요, 다녀오세요. 여기 있을게요.",
      n: "go ahead = 그렇게 하세요. right here = 바로 여기." },
    { e: "Yeah, I got you.", k: "네, 제가 봐 드릴게요.",
      n: "I got you = 내가 맡을게. 짧아서 놓치기 쉽습니다. '널 잡았다'가 아니에요." },
    { e: "Of course! You want me to grab you a water while you're up?",
      k: "그럼요! 가는 김에 물 좀 사다 드릴까요?",
      n: "되묻습니다. while you're up = 일어난 김에. Do 를 빼고 You want ~? 로 묻습니다." },
    { e: "Sure, but hurry — they might start letting people in.",
      k: "네, 근데 서두르세요. 곧 입장 시작할 수도 있어요.",
      n: "letting people in = 사람들을 들여보내다." },
    { e: "Yeah, no worries. Take your time.", k: "네, 괜찮아요. 천천히 다녀오세요.",
      n: "no worries 와 take your time 이 붙어 한 덩어리로 들립니다." }
  ]
},

"What time do the doors open?": {
  where: "공연장 앞에서",
  lines: [
    { w: "me", e: "Do you know what time the doors open?", k: "입장 몇 시부터인지 아세요?" },
    { w: "them", e: "Seven, I think. But they sometimes let us in early.", k: "일곱 시일 거예요. 가끔 일찍 열어주기도 해요." },
    { w: "me", e: "Good to know. Thanks.", k: "알아두면 좋겠네요. 고마워요." }
  ],
  replies: [
    { e: "Seven, I think. But they sometimes let us in early.",
      k: "일곱 시일 거예요. 근데 가끔 일찍 열어주기도 해요.",
      n: "I think 를 뒤에 붙여 '~일 걸요'로 씁니다." },
    { e: "Doors at seven, show at eight.", k: "입장 일곱 시, 공연 여덟 시요.",
      n: "동사 없이 툭툭 끊어 말합니다. doors 만으로 '입장'을 뜻해요." },
    { e: "It said seven thirty on the ticket, but who knows.",
      k: "표에는 일곱 시 반이라고 돼 있던데, 모르죠 뭐.",
      n: "who knows = 누가 알겠어요, 즉 '확실치 않다'." },
    { e: "Not for another two hours, unfortunately.",
      k: "아쉽지만 두 시간은 더 있어야 해요.",
      n: "★ 시각 대신 남은 시간으로 답합니다. not for another ~ = 앞으로 ~는 더." },
    { e: "Uh, hold on, let me check my ticket... yeah, seven.",
      k: "어, 잠깐만요, 표 좀 볼게요… 네, 일곱 시요.",
      n: "망설이는 소리와 혼잣말이 섞입니다. 끝의 답만 잡으면 됩니다." }
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
  ],
  replies: [
    { e: "No way, that's amazing. Worth it though, right?",
      k: "세상에, 대단하네요. 그래도 올 만하죠?",
      n: "No way = 말도 안 돼(놀람). 거절이 아닙니다." },
    { e: "Wait, seriously? That's got to be, what, thirteen hours?",
      k: "잠깐, 진짜요? 그럼 한 열세 시간 걸리나요?",
      n: "what 이 문장 가운데 끼어 '음, 그러니까' 정도로 쓰입니다." },
    { e: "That is commitment. Respect.", k: "진짜 대단하세요. 존경합니다.",
      n: "Respect. 한 단어로 감탄을 끝냅니다. commitment = 쏟아부은 정성." },
    { e: "Oh my god, that's so far! How was the flight?",
      k: "세상에, 엄청 머네요! 비행은 어땠어요?",
      n: "감탄하고 바로 질문이 붙습니다. 대답을 준비해 두세요." },
    { e: "Same energy — I drove eight hours to get here.",
      k: "저도 비슷해요. 여덟 시간 운전해서 왔어요.",
      n: "Same energy = 나도 그 정도로 열심이다. 요즘 많이 쓰는 말이에요." }
  ]
},

"Could you take a photo of me?": {
  where: "공연장 간판 앞에서",
  lines: [
    { w: "me", e: "Could you take a photo of me? Just here is fine.", k: "사진 좀 찍어 주실 수 있어요? 여기서 찍으면 돼요." },
    { w: "them", e: "Of course. Say cheese!", k: "그럼요. 하나 둘 셋!" },
    { w: "me", e: "That's perfect, thank you so much.", k: "잘 나왔어요, 정말 고맙습니다." }
  ],
  replies: [
    { e: "Of course. Say cheese!", k: "그럼요. 하나 둘 셋!",
      n: "사진 찍을 때 Say cheese! 가 '하나 둘 셋'입니다." },
    { e: "Sure! You want the sign in the shot?", k: "네! 간판도 같이 넣을까요?",
      n: "in the shot = 사진 안에. 되물으니 Yes, please 로 답하면 됩니다." },
    { e: "Yeah, no problem. Portrait or landscape?", k: "네, 문제없어요. 세로로요, 가로로요?",
      n: "★ portrait = 세로, landscape = 가로. 사진 이야기에서만 이 뜻입니다." },
    { e: "Happy to. Want me to take a couple?", k: "기꺼이요. 몇 장 찍어 드릴까요?",
      n: "Happy to = 기꺼이 해 드릴게요. a couple = 두어 장." },
    { e: "Sure thing. Ready? Three, two, one...", k: "네. 준비되셨어요? 셋, 둘, 하나…",
      n: "Sure thing = 그럼요. 숫자를 거꾸로 셉니다." }
  ]
},

"Can I get a picture with you?": {
  where: "같은 최애인 걸 알게 됐을 때",
  lines: [
    { w: "them", e: "Your outfit is so cute! Is that handmade?", k: "옷 너무 예뻐요! 직접 만드신 거예요?" },
    { w: "me", e: "Thank you! Can I get a picture with you?", k: "고마워요! 같이 사진 찍어도 될까요?" },
    { w: "them", e: "Yes, please! Let's do it.", k: "네, 좋아요! 찍어요." }
  ],
  replies: [
    { e: "Yes, please! Let's do it.", k: "네, 좋아요! 찍어요.",
      n: "Let's do it = 하죠. 가볍게 승낙하는 말." },
    { e: "Aw, of course! Come here.", k: "아, 그럼요! 이리 오세요.",
      n: "Aw 는 흐뭇할 때 내는 소리. Come here 가 '컴미어'처럼 붙습니다." },
    { e: "Sure! You wanna use your phone or mine?", k: "네! 그쪽 폰으로 할까요, 제 걸로 할까요?",
      n: "wanna = want to. Do you 가 통째로 빠졌습니다." },
    { e: "Absolutely. Let's get the lights in the background.",
      k: "당연하죠. 뒤에 조명 나오게 찍어요.",
      n: "Absolutely = 물론이죠. in the background = 배경에." },
    { e: "Yes! And let's swap accounts after, so I can send it.",
      k: "네! 끝나고 계정 교환해요, 보내 드리게요.",
      n: "swap accounts = 에스엔에스 계정을 주고받다. so I can ~ = 그래야 ~할 수 있으니." }
  ]
},

"Nice lightstick!": {
  where: "입장 줄에서 앞사람에게",
  lines: [
    { w: "me", e: "Nice lightstick! Did you decorate it yourself?", k: "응원봉 멋지네요! 직접 꾸미신 거예요?" },
    { w: "them", e: "I did! Took me way too long, honestly.", k: "네! 솔직히 시간 엄청 걸렸어요." },
    { w: "me", e: "It was worth it. It looks great.", k: "그럴 만했어요. 정말 예뻐요." }
  ],
  replies: [
    { e: "I did! Took me way too long, honestly.", k: "네! 솔직히 시간 엄청 걸렸어요.",
      n: "It 을 빼고 Took me ~ 로 시작합니다. way too long = 너무 오래." },
    { e: "Thanks! I got the stickers off Etsy.", k: "고마워요! 스티커는 엣시에서 샀어요.",
      n: "★ off + 가게 이름 = 거기서 샀다. from 대신 off 를 씁니다." },
    { e: "Oh, this? My friend made it for me.", k: "아, 이거요? 친구가 만들어 줬어요.",
      n: "Oh, this? 로 되물으며 시작하는 말버릇." },
    { e: "Yours is cute too! Where'd you get it?", k: "그쪽 것도 예뻐요! 어디서 사셨어요?",
      n: "Where'd = Where did. '웨어드'처럼 한 덩어리로 들립니다." },
    { e: "Honestly I just slapped some stickers on it.", k: "솔직히 그냥 스티커만 막 붙인 거예요.",
      n: "slap on = 대충 붙이다. 겸손하게 넘기는 말투예요." }
  ]
},

"Is there a fanchant for this one?": {
  where: "다음 곡이 시작되기 직전",
  lines: [
    { w: "me", e: "Is there a fanchant for this one?", k: "이 곡 응원법 있어요?" },
    { w: "them", e: "Yeah, but it's just the chorus. Follow me, you'll get it.", k: "네, 근데 후렴만이에요. 따라 하시면 금방 돼요." },
    { w: "me", e: "Okay, I'll try!", k: "좋아요, 해볼게요!" }
  ],
  replies: [
    { e: "Yeah, but it's just the chorus. Follow me, you'll get it.",
      k: "네, 근데 후렴만이에요. 따라 하시면 금방 돼요.",
      n: "you'll get it = 금방 하실 수 있어요. '받을 거예요'가 아닙니다." },
    { e: "There is, but honestly nobody does it anymore.",
      k: "있긴 한데, 솔직히 이제 아무도 안 해요.",
      n: "There is 로 짧게 받고 but 으로 뒤집습니다." },
    { e: "Just his name, over and over. You'll pick it up.",
      k: "그냥 이름만 계속 불러요. 금방 따라 하실 거예요.",
      n: "pick it up = 듣다 보면 익히게 되다." },
    { e: "Oh for sure. It kicks in right after the drop.",
      k: "당연히 있죠. 드롭 끝나고 바로 들어가요.",
      n: "kick in = 시작되다. drop = 곡에서 확 터지는 부분." },
    { e: "Honestly, just scream. That's basically it.",
      k: "솔직히 그냥 소리 지르면 돼요. 그게 다예요.",
      n: "That's basically it = 사실상 그게 전부예요." }
  ]
},

"That was incredible.": {
  where: "공연이 끝나고 나오면서",
  lines: [
    { w: "them", e: "So? What did you think?", k: "어때요? 어땠어요?" },
    { w: "me", e: "That was incredible. I'm still shaking.", k: "정말 최고였어요. 아직도 떨려요." },
    { w: "them", e: "Right? The encore especially.", k: "그쵸? 특히 앙코르가요." }
  ],
  replies: [
    { e: "Right? The encore especially.", k: "그쵸? 특히 앙코르가요.",
      n: "Right? 는 '그렇죠?'라는 맞장구입니다. 되묻는 게 아니에요." },
    { e: "I know, I'm still not over it.", k: "그러니까요, 아직도 여운이 안 가셔요.",
      n: "★ I know 는 '알아'가 아니라 '내 말이'라는 맞장구. not over it = 아직 헤어나오지 못했다." },
    { e: "Dude, when he came down the ramp? I lost it.",
      k: "와, 그 사람 경사로로 내려올 때요? 저 완전 넘어갔어요.",
      n: "Dude 는 성별 상관없이 씁니다. lost it = 정신을 놓았다(좋은 뜻)." },
    { e: "Best one I've been to, and I've been to a few.",
      k: "제가 가본 중에 최고예요, 꽤 가봤는데도요.",
      n: "앞에 That was 가 생략됐습니다. a few = 꽤 여러 번." },
    { e: "Worth every penny. I'd do it all again tomorrow.",
      k: "돈 하나도 안 아까워요. 내일 또 하라고 해도 해요.",
      n: "Worth every penny = 값어치를 다 했다." }
  ]
},

"My voice is gone.": {
  where: "공연 끝나고 목이 쉬었을 때",
  lines: [
    { w: "them", e: "You okay? You sound rough.", k: "괜찮아요? 목소리가 안 좋은데요." },
    { w: "me", e: "My voice is gone. Totally worth it though.", k: "목이 다 쉬었어요. 그래도 하나도 안 아까워요." },
    { w: "them", e: "Same here. Worth every second.", k: "저도요. 일 초도 안 아까워요." }
  ],
  replies: [
    { e: "Same here. Worth every second.", k: "저도요. 일 초도 안 아까워요.",
      n: "Same here = 저도 마찬가지예요." },
    { e: "Mine too. I'm gonna regret this at work tomorrow.",
      k: "저도요. 내일 회사에서 후회할 거예요.",
      n: "gonna = going to. at work = 직장에서." },
    { e: "Tell me about it. I can barely talk.",
      k: "말도 마세요. 말도 잘 안 나와요.",
      n: "★ Tell me about it = '나도 그래'. 말해 달라는 뜻이 아닙니다." },
    { e: "Here, I've got a spare water if you want it.",
      k: "여기요, 물 하나 남는데 드릴까요?",
      n: "spare = 여분의. if you want it 이 뒤에 흘러갑니다." },
    { e: "Honey and lemon tomorrow, trust me.", k: "내일 꿀이랑 레몬 드세요, 진짜로요.",
      n: "동사 없이 명사만 던지고 trust me 로 마무리합니다." }
  ]
},

"Are you going tomorrow too?": {
  where: "공연장을 나서며 헤어질 때",
  lines: [
    { w: "me", e: "Are you going tomorrow too?", k: "내일도 오세요?" },
    { w: "them", e: "I wish. I only got tickets for tonight.", k: "가고 싶죠. 오늘 표만 구했어요." },
    { w: "me", e: "Ah, that's too bad. Well, it was great meeting you.", k: "아, 아쉽네요. 그래도 만나서 반가웠어요." }
  ],
  replies: [
    { e: "I wish. I only got tickets for tonight.", k: "가고 싶죠. 오늘 표만 구했어요.",
      n: "★ I wish. 두 글자로 '그러고 싶은데 못 한다'는 뜻을 다 담습니다." },
    { e: "Yep, night two! Are you?", k: "네, 둘째 날도요! 그쪽도요?",
      n: "night two = 이틀째 공연. 바로 되물으니 대답을 준비하세요." },
    { e: "Nah, I'm flying out in the morning.", k: "아뇨, 아침에 비행기 타요.",
      n: "Nah = No 를 편하게 한 말. fly out = 비행기로 떠나다." },
    { e: "I'm trying to! Still looking for a resale ticket.",
      k: "가려고요! 아직 양도 표 찾고 있어요.",
      n: "I'm trying to 뒤가 생략됐습니다. resale ticket = 되파는 표." },
    { e: "Depends how my voice holds up, honestly.",
      k: "솔직히 목이 버텨주느냐에 달렸어요.",
      n: "It 이 빠진 Depends ~. hold up = 버티다." }
  ]
},

"Are they doing an encore?": {
  where: "본 공연이 끝난 듯한데 불이 안 켜질 때",
  lines: [
    { w: "me", e: "Are they doing an encore?", k: "앙코르 해요?" },
    { w: "them", e: "Always. Don't leave yet!", k: "늘 해요. 아직 가지 마세요!" },
    { w: "me", e: "Good, I wasn't going to.", k: "다행이다, 안 가려고 했어요." }
  ],
  replies: [
    { e: "Always. Don't leave yet!", k: "늘 해요. 아직 가지 마세요!",
      n: "Always. 한 단어로 '당연하죠'를 대신합니다." },
    { e: "Usually two or three songs. Stay put.", k: "보통 두세 곡 해요. 그대로 계세요.",
      n: "★ Stay put = 그 자리에 있어요. 움직이지 말라는 뜻." },
    { e: "The lights are still down, so yeah.", k: "불이 아직 안 켜졌으니까 하겠죠.",
      n: "lights are down = 조명이 꺼져 있다. 공연이 안 끝났다는 신호예요." },
    { e: "I hope so. My feet say no but my heart says yes.", k: "그러길 바라요. 발은 싫다는데 마음은 좋다네요.",
      n: "농담입니다. 다리가 아프지만 더 보고 싶다는 뜻." },
    { e: "Not sure, this venue has a curfew.", k: "모르겠어요, 여긴 마감 시간이 있어서요.",
      n: "curfew = 공연장이 반드시 끝내야 하는 시각." }
  ]
},

"Can you see okay from here?": {
  where: "자리에 앉으며 옆사람에게",
  lines: [
    { w: "me", e: "Can you see okay from here?", k: "여기서 잘 보이세요?" },
    { w: "them", e: "Yeah, surprisingly good actually.", k: "네, 의외로 잘 보여요." },
    { w: "me", e: "Oh, that's a relief.", k: "아, 다행이네요." }
  ],
  replies: [
    { e: "Yeah, surprisingly good actually.", k: "네, 의외로 잘 보여요.",
      n: "surprisingly good = 생각보다 좋다." },
    { e: "The screen helps. The stage is tiny from here.", k: "화면 덕분에요. 무대는 여기서 아주 작아요.",
      n: "The screen = 대형 화면. helps = 도움이 된다." },
    { e: "Not really, but I'm short. You'll be fine.", k: "잘은 아니고요, 제가 작아서요. 그쪽은 괜찮을 거예요.",
      n: "Not really = 그렇진 않아요. 부드러운 부정입니다." },
    { e: "Once everyone stands up, we'll see.", k: "다들 일어나면 그때 봐야죠.",
      n: "Once ~ = ~하고 나면. we'll see = 두고 봐야 안다." },
    { e: "Perfect view. Best seats I've had.", k: "완전 잘 보여요. 제일 좋은 자리예요.",
      n: "동사 없이 Perfect view. 로 끊습니다." }
  ]
},

"I'm so nervous!": {
  where: "불이 꺼지기 직전",
  lines: [
    { w: "them", e: "Any second now...", k: "이제 곧 시작해요…" },
    { w: "me", e: "I'm so nervous! Why am I nervous?", k: "너무 떨려요! 제가 왜 떨리죠?" },
    { w: "them", e: "Me too! It's normal, honestly.", k: "저도요! 원래 그래요, 진짜." }
  ],
  replies: [
    { e: "Me too! It's normal, honestly.", k: "저도요! 원래 그래요, 진짜.",
      n: "It's normal = 다들 그래요." },
    { e: "Right? My hands are literally shaking.", k: "그쵸? 손이 진짜 떨려요.",
      n: "literally 는 강조로 씁니다. '말 그대로'보다 '진짜'에 가까워요." },
    { e: "Wait till he comes out. You'll lose it.", k: "나오면 보세요. 정신 못 차리실걸요.",
      n: "lose it = 정신을 놓다(좋은 뜻)." },
    { e: "Deep breaths! We waited long enough for this.", k: "숨 크게 쉬세요! 이만큼 기다렸잖아요.",
      n: "Deep breaths = 심호흡하세요. 동사 없이 명사만 던집니다." },
    { e: "Same. I've been like this since this morning.", k: "저도요. 아침부터 이래요.",
      n: "like this = 이런 상태로. since ~ = ~부터 계속." }
  ]
},

"What's your Instagram?": {
  where: "헤어지기 직전",
  lines: [
    { w: "me", e: "Before you go — what's your Instagram?", k: "가시기 전에, 인스타 뭐예요?" },
    { w: "them", e: "Oh yes! Here, let me just type it in.", k: "아 맞다! 여기요, 제가 칠게요." },
    { w: "me", e: "Perfect. I'll follow you now.", k: "좋아요. 지금 팔로우할게요." }
  ],
  replies: [
    { e: "Oh yes! Here, let me just type it in.", k: "아 맞다! 여기요, 제가 칠게요.",
      n: "type it in = 직접 입력하다. 폰을 건네받는 상황이에요." },
    { e: "It's my name with an underscore. I'll spell it.", k: "제 이름에 밑줄이요. 철자 불러 드릴게요.",
      n: "★ underscore = 밑줄 기호(_). spell it = 철자를 불러 주다." },
    { e: "I don't really use it. TikTok?", k: "인스타는 잘 안 써요. 틱톡은요?",
      n: "don't really use = 거의 안 쓴다. 다른 걸 되묻습니다." },
    { e: "Just search my handle — it's on my lightstick!", k: "제 아이디로 검색하세요. 응원봉에 적혀 있어요!",
      n: "handle = 계정 아이디." },
    { e: "Scan mine, it's quicker.", k: "제 큐알 찍으세요, 그게 빨라요.",
      n: "Scan mine = 내 큐알 코드를 찍어라. 뒤가 생략됐습니다." }
  ]
},

"I'll tag you in the photo.": {
  where: "같이 사진을 찍고 나서",
  lines: [
    { w: "me", e: "That came out great. I'll tag you in the photo.", k: "잘 나왔네요. 사진에 태그할게요." },
    { w: "them", e: "Yes please! Send it to me too if you can.", k: "네 좋아요! 가능하면 저한테도 보내 주세요." },
    { w: "me", e: "Will do.", k: "그럴게요." }
  ],
  replies: [
    { e: "Yes please! Send it to me too if you can.", k: "네 좋아요! 가능하면 저한테도 보내 주세요.",
      n: "if you can = 가능하면. 부담 주지 않는 부탁입니다." },
    { e: "Aw, thank you! I'll tag you back.", k: "아, 고마워요! 저도 태그할게요.",
      n: "tag you back = 나도 답으로 태그하다." },
    { e: "Actually, could you not? I'm a bit shy.", k: "아, 안 하시면 안 될까요? 제가 좀 부끄러워서요.",
      n: "★ could you not? 은 정중한 거절입니다." },
    { e: "Please do! That one's going on my story.", k: "꼭 해 주세요! 그거 스토리에 올릴 거예요.",
      n: "going on my story = 스토리에 올릴 것." },
    { e: "Only if I look okay in it!", k: "제가 잘 나왔을 때만요!",
      n: "농담입니다. Only if ~ = ~할 때만." }
  ]
},

"Let's find each other after.": {
  where: "공연이 시작되기 직전",
  lines: [
    { w: "me", e: "Let's find each other after. I wanna hear what you thought.", k: "끝나고 만나요. 어땠는지 듣고 싶어요." },
    { w: "them", e: "Definitely. I'll be by the merch stand.", k: "그래요. 굿즈 부스 쪽에 있을게요." },
    { w: "me", e: "See you there!", k: "거기서 봐요!" }
  ],
  replies: [
    { e: "Definitely. I'll be by the merch stand.", k: "그래요. 굿즈 부스 쪽에 있을게요.",
      n: "Definitely = 당연하죠. by ~ = ~ 근처에." },
    { e: "Yes! Same spot, by the doors?", k: "좋아요! 같은 자리, 문 쪽에서요?",
      n: "Same spot = 같은 자리. 장소를 되묻습니다." },
    { e: "If we can find each other in this crowd!", k: "이 사람들 틈에서 찾을 수만 있다면요!",
      n: "crowd = 인파. 반쯤 농담으로 받는 말." },
    { e: "I might head off straight after, sorry.", k: "저는 끝나고 바로 갈 것 같아요, 죄송해요.",
      n: "★ 부드러운 거절. head off = 떠나다. straight after = 끝나자마자." },
    { e: "Text me when it's done. Signal's awful inside.", k: "끝나면 문자 주세요. 안에선 신호가 안 터져요.",
      n: "Signal = 휴대폰 신호. awful = 형편없다." }
  ]
},

"Can I squeeze past?": {
  where: "공연장 안, 사람들 사이를 빠져나갈 때",
  lines: [
    { w: "me", e: "Sorry, can I squeeze past?", k: "죄송한데 좀 지나가도 될까요?" },
    { w: "them", e: "Yeah, go ahead.", k: "네, 지나가세요." },
    { w: "me", e: "Thanks!", k: "고마워요!" }
  ],
  replies: [
    { e: "Yeah, go ahead.", k: "네, 지나가세요.", n: "go ahead = 그렇게 하세요. 아주 짧게 넘어갑니다." },
    { e: "Sure, watch your step — it's sticky.", k: "네, 발밑 조심하세요. 끈적해요.",
      n: "watch your step = 발밑 조심. 공연장 바닥 이야기예요." },
    { e: "Of course. You coming back?", k: "그럼요. 다시 오세요?",
      n: "Are 가 빠진 You coming back? 자리를 비워둘지 묻는 겁니다." },
    { e: "Hang on, let me move first.", k: "잠깐만요, 제가 먼저 비킬게요.",
      n: "Hang on = 잠깐만요. let me ~ = 제가 ~할게요." },
    { e: "No problem, there's a gap on your left.", k: "괜찮아요, 왼쪽에 틈 있어요.",
      n: "gap = 틈. 어디로 가라고 알려 주는 겁니다." }
  ]
},

"Do you mind if I sit here?": {
  where: "빈자리를 보고",
  lines: [
    { w: "me", e: "Do you mind if I sit here?", k: "여기 앉아도 될까요?" },
    { w: "them", e: "Not at all, go ahead.", k: "그럼요, 앉으세요." },
    { w: "me", e: "Thank you.", k: "고맙습니다." }
  ],
  replies: [
    { e: "Not at all, go ahead.", k: "그럼요, 앉으세요.",
      n: "★ mind 로 물으면 Not at all(전혀 아니에요) 이 허락입니다. 헷갈리기 쉬워요." },
    { e: "Go for it. Nobody's sitting there.", k: "앉으세요. 아무도 안 앉아요.",
      n: "Go for it = 그렇게 하세요." },
    { e: "Actually my friend's coming back, sorry.", k: "아, 친구가 올 거라서요, 죄송해요.",
      n: "★ 이건 거절입니다. Actually 로 시작하면 미안한 말이 옵니다." },
    { e: "Please do. I could use the company.", k: "그럼요. 같이 있으면 좋죠.",
      n: "Please do = 그렇게 하세요. could use = ~하면 좋겠다." },
    { e: "Sure, but they might move us for standing.", k: "네, 근데 스탠딩 때문에 자리 옮기라 할 수도 있어요.",
      n: "move us = 우리를 옮기게 하다." }
  ]
},

"How did you get tickets?": {
  where: "줄에서 옆사람과",
  lines: [
    { w: "me", e: "How did you get tickets? I heard they sold out fast.", k: "표 어떻게 구하셨어요? 금방 매진됐다던데." },
    { w: "them", e: "Pure luck. I was in the queue for two hours.", k: "운이죠. 대기열에 두 시간 있었어요." },
    { w: "me", e: "Wow, respect.", k: "와, 대단하세요." }
  ],
  replies: [
    { e: "Pure luck. I was in the queue for two hours.", k: "순전히 운이죠. 대기열에 두 시간 있었어요.",
      n: "Pure luck = 순전히 운. queue = 온라인 대기열." },
    { e: "Fan club presale. Worth the membership, honestly.", k: "팬클럽 선예매요. 회비 값 하네요, 솔직히.",
      n: "presale = 선예매. Worth the ~ = ~한 값어치를 하다." },
    { e: "My friend got them. I just paid her back.", k: "친구가 구해줬어요. 저는 돈만 보냈고요.",
      n: "pay someone back = 돈을 갚다." },
    { e: "Resale, like a week ago. Cost me way too much.", k: "일주일쯤 전에 양도로요. 돈 엄청 썼어요.",
      n: "Cost me way too much = 돈이 너무 많이 들었다." },
    { e: "Honestly? I still don't know how I got in.", k: "솔직히요? 아직도 어떻게 됐는지 몰라요.",
      n: "got in = (예매에) 성공했다. 농담조입니다." }
  ]
},

"Do you know the setlist?": {
  where: "공연 시작 전",
  lines: [
    { w: "me", e: "Do you know the setlist?", k: "셋리스트 아세요?" },
    { w: "them", e: "It's online, but I'm avoiding it.", k: "인터넷에 있는데, 저는 일부러 안 봐요." },
    { w: "me", e: "Fair. I'd rather be surprised too.", k: "그러네요. 저도 모르고 보는 게 낫겠어요." }
  ],
  replies: [
    { e: "It's online, but I'm avoiding it.", k: "인터넷에 있는데, 저는 일부러 안 봐요.",
      n: "avoiding it = 일부러 안 보는 중. 스포일러 이야기예요." },
    { e: "Roughly. Same as the last stop, I think.", k: "대충요. 지난 공연이랑 같을 거예요.",
      n: "Roughly = 대충. stop = 투어의 한 도시." },
    { e: "No spoilers! I don't wanna know.", k: "스포 금지! 알고 싶지 않아요.",
      n: "spoilers = 미리 아는 것. wanna = want to." },
    { e: "Yeah, he opens with the new one.", k: "네, 신곡으로 시작해요.",
      n: "open with ~ = ~로 시작하다. the new one = 신곡." },
    { e: "There's a thread about it, hold on.", k: "관련 글이 있어요, 잠깐만요.",
      n: "thread = 에스엔에스에 올라온 글타래." }
  ]
},

"Is the opening act on yet?": {
  where: "늦게 들어오면서",
  lines: [
    { w: "me", e: "Is the opening act on yet?", k: "오프닝 시작했어요?" },
    { w: "them", e: "Just finished, actually. You didn't miss much.", k: "방금 끝났어요. 크게 놓친 건 없어요." },
    { w: "me", e: "Oh good. I got stuck in traffic.", k: "다행이네요. 길이 막혀서요." }
  ],
  replies: [
    { e: "Just finished, actually. You didn't miss much.", k: "방금 끝났어요. 크게 놓친 건 없어요.",
      n: "didn't miss much = 놓친 게 별로 없다. 위로하는 말이에요." },
    { e: "About halfway through. They're good!", k: "반쯤 했어요. 잘하던데요!",
      n: "halfway through = 절반쯤 진행된." },
    { e: "Not yet. Should be any minute now.", k: "아직이요. 곧 시작할 거예요.",
      n: "any minute now = 금방, 곧." },
    { e: "There isn't one tonight, just him.", k: "오늘은 없어요, 그분만 해요.",
      n: "There isn't one = 그런 건 없다." },
    { e: "Yeah, they're on now. Can't you hear?", k: "네, 지금 하고 있어요. 안 들리세요?",
      n: "they're on = 무대에 올라 있다. Can't you hear? 는 가벼운 농담." }
  ]
},

"Is there a bag check?": {
  where: "입장 전, 큰 가방을 들고",
  lines: [
    { w: "me", e: "Is there a bag check? My bag's too big.", k: "짐 맡기는 데 있어요? 가방이 너무 커서요." },
    { w: "them", e: "Yeah, round the side. Five pounds, I think.", k: "네, 옆쪽에요. 5파운드일 거예요." },
    { w: "me", e: "Great, thanks.", k: "잘됐네요, 고마워요." }
  ],
  replies: [
    { e: "Yeah, round the side. Five pounds, I think.", k: "네, 옆쪽에요. 5파운드일 거예요.",
      n: "round the side = 건물 옆쪽으로 돌아서." },
    { e: "There is, but the line's massive right now.", k: "있긴 한데, 지금 줄이 엄청 길어요.",
      n: "massive = 엄청난. 영국에서 특히 자주 씁니다." },
    { e: "No, but they might let that size through.", k: "없는데, 그 크기는 그냥 들여보내 줄 수도 있어요.",
      n: "let ~ through = 통과시켜 주다." },
    { e: "Ask the steward in the yellow vest.", k: "노란 조끼 입은 안내 요원한테 물어보세요.",
      n: "steward = 안내 요원. vest = 조끼." },
    { e: "Yep, it's cash only though. Heads up.", k: "네, 근데 현금만 받아요. 참고하세요.",
      n: "Heads up = 미리 알아두세요." }
  ]
},

/* ---------- 가볍게 말 섞기 ---------- */

"Where are you from?": {
  where: "줄에서 옆사람과",
  lines: [
    { w: "me", e: "So where are you from?", k: "어디서 오셨어요?" },
    { w: "them", e: "I'm from Manchester. Drove down this morning.", k: "맨체스터에서요. 오늘 아침에 운전해서 왔어요." },
    { w: "me", e: "That's a long drive!", k: "멀리서 오셨네요!" }
  ],
  replies: [
    { e: "I'm from Manchester. Drove down this morning.", k: "맨체스터에서요. 오늘 아침에 운전해서 왔어요.",
      n: "I 를 빼고 Drove down ~ 으로 이어 갑니다. drove down = 차로 내려왔다." },
    { e: "Originally Brazil, but I live here now.", k: "원래는 브라질인데, 지금은 여기 살아요.",
      n: "Originally = 원래는. 두 군데를 함께 말하는 흔한 방식입니다." },
    { e: "Just outside the city, like twenty minutes out.",
      k: "시 바로 바깥쪽이요, 한 이십 분 거리요.",
      n: "like 는 뜻 없이 '한, 대략'. out = 떨어진." },
    { e: "All over, honestly. I move around a lot for work.",
      k: "여기저기요. 일 때문에 많이 옮겨 다녀요.",
      n: "All over = 여러 곳. 한 군데로 답하지 않는 경우입니다." },
    { e: "Here, born and raised. You?", k: "여기요, 나고 자랐어요. 그쪽은요?",
      n: "born and raised = 나고 자랐다. You? 한 마디로 되묻습니다." }
  ]
},

"I'm from Korea.": {
  where: "어디서 왔냐는 물음에",
  lines: [
    { w: "them", e: "Where are you from, if you don't mind me asking?", k: "실례가 안 된다면, 어디서 오셨어요?" },
    { w: "me", e: "I'm from Korea. I flew in two days ago.", k: "한국에서 왔어요. 이틀 전에 도착했어요." },
    { w: "them", e: "That's such a long way. Welcome!", k: "정말 멀리서 오셨네요. 환영해요!" }
  ],
  replies: [
    { e: "That's such a long way. Welcome!", k: "정말 멀리서 오셨네요. 환영해요!",
      n: "such a long way = 정말 먼 길." },
    { e: "Oh, cool! I've always wanted to go to Korea.",
      k: "오, 멋져요! 저도 한국 꼭 가보고 싶었어요.",
      n: "I've always wanted to ~ = 늘 ~하고 싶었다. 아주 자주 돌아옵니다." },
    { e: "No kidding? How's the jet lag treating you?",
      k: "정말요? 시차는 좀 어떠세요?",
      n: "★ No kidding? = 진짜요? How's it treating you = 좀 어때요?" },
    { e: "Whereabouts in Korea?", k: "한국 어디쯤이요?",
      n: "whereabouts = where 를 좀 더 부드럽게. 한 마디로 되묻습니다." },
    { e: "That's awesome. My cousin teaches English in Busan.",
      k: "멋지네요. 제 사촌이 부산에서 영어 가르쳐요.",
      n: "자기 이야기로 넘어갑니다. 대화가 이어지는 흔한 방식이에요." }
  ]
},

"Is this your first time here?": {
  where: "공연장에서 처음 만난 사람과",
  lines: [
    { w: "me", e: "Is this your first time here?", k: "여기 처음이세요?" },
    { w: "them", e: "No, third time actually. I come every tour.", k: "아뇨, 사실 세 번째예요. 투어마다 와요." },
    { w: "me", e: "That's amazing. It's my first.", k: "대단하네요. 저는 처음이에요." }
  ],
  replies: [
    { e: "No, third time actually. I come every tour.", k: "아뇨, 사실 세 번째예요. 투어마다 와요.",
      n: "actually 는 '사실은'. 앞말을 살짝 고칠 때 붙습니다." },
    { e: "First time at this venue, but I've seen him before.",
      k: "이 공연장은 처음인데, 공연은 본 적 있어요.",
      n: "venue = 공연장. It's my 가 앞에서 생략됐습니다." },
    { e: "Yeah! Can you tell?", k: "네! 티 나요?",
      n: "★ Can you tell? = 티 나요? tell 이 '알아차리다'입니다." },
    { e: "Nope, I've lost count at this point.", k: "아뇨, 이제 몇 번인지 세다 말았어요.",
      n: "lost count = 세다 말았다. at this point = 이쯤 되니." },
    { e: "Mm-hmm. Dragged my sister along this time.",
      k: "네. 이번엔 동생까지 끌고 왔어요.",
      n: "Mm-hmm 이 Yes 입니다. drag along = 데리고 오다." }
  ]
},

"How long are you staying?": {
  where: "여행 이야기가 나왔을 때",
  lines: [
    { w: "them", e: "How long are you staying?", k: "얼마나 계세요?" },
    { w: "me", e: "About a week. I fly back on Sunday.", k: "일주일쯤요. 일요일에 돌아가요." },
    { w: "them", e: "Nice, you've got time to look around then.", k: "좋네요, 구경할 시간은 있으시겠어요." }
  ],
  replies: [
    { e: "Nice, you've got time to look around then.", k: "좋네요, 구경할 시간은 있으시겠어요.",
      n: "then 이 문장 끝에 붙어 '그럼'이 됩니다." },
    { e: "Oh nice, so you get a proper look around.",
      k: "좋네요, 그럼 제대로 둘러보시겠어요.",
      n: "proper = 제대로 된. 영국에서 특히 자주 씁니다." },
    { e: "That's not long! You'll have to come back.",
      k: "얼마 안 되네요! 또 오셔야겠어요.",
      n: "You'll have to ~ 는 명령이 아니라 권하는 말입니다." },
    { e: "Lucky. I've gotta work in the morning.",
      k: "부럽네요. 저는 아침에 일해야 해요.",
      n: "Lucky. 한 단어로 부러움을 표현. gotta = got to." },
    { e: "Anything planned, or just the show?", k: "뭐 계획하신 거 있어요, 아니면 공연만요?",
      n: "Do you have 가 통째로 빠졌습니다. 바로 되묻는 말이에요." }
  ]
},

"Any recommendations?": {
  where: "현지 사람에게 물어볼 때",
  lines: [
    { w: "me", e: "I've got a free day tomorrow. Any recommendations?", k: "내일 하루 비는데, 추천해 주실 만한 곳 있어요?" },
    { w: "them", e: "If the weather's nice, go down by the river. It's lovely.", k: "날씨 좋으면 강가 쪽으로 가보세요. 정말 좋아요." },
    { w: "me", e: "I'll check it out. Thanks!", k: "가볼게요. 고마워요!" }
  ],
  replies: [
    { e: "If the weather's nice, go down by the river. It's lovely.",
      k: "날씨 좋으면 강가 쪽으로 가보세요. 정말 좋아요.",
      n: "go down by ~ = ~쪽으로 가보다. lovely = 참 좋다." },
    { e: "Depends what you're into. Museums? Food?",
      k: "뭘 좋아하시느냐에 따라요. 박물관? 음식?",
      n: "★ what you're into = 뭘 좋아하는지. 되물으니 하나 고르면 됩니다." },
    { e: "Honestly, skip the touristy stuff. Just walk around.",
      k: "솔직히 관광지는 건너뛰세요. 그냥 걸어 다니세요.",
      n: "touristy = 관광객스러운(조금 부정적). skip = 건너뛰다." },
    { e: "Ooh, there's a market on Saturdays. You'd love it.",
      k: "아, 토요일마다 장이 서요. 마음에 드실 거예요.",
      n: "You'd = You would. '가보면 좋아하실 거예요'라는 권유." },
    { e: "I'm the worst person to ask, I never go out.",
      k: "저한테 물으면 안 돼요, 저는 밖에 안 다녀서요.",
      n: "the worst person to ask = 물어볼 상대로는 최악. 농담조입니다." }
  ]
},

"It's my first time in this city.": {
  where: "가게나 숙소에서 말이 나왔을 때",
  lines: [
    { w: "them", e: "Are you here on holiday?", k: "여행 오셨어요?" },
    { w: "me", e: "Yes, it's my first time in this city.", k: "네, 이 도시는 처음이에요." },
    { w: "them", e: "Oh, you'll love it. Just watch out for the rain.", k: "아, 마음에 드실 거예요. 비만 조심하세요." }
  ],
  replies: [
    { e: "Oh, you'll love it. Just watch out for the rain.",
      k: "아, 마음에 드실 거예요. 비만 조심하세요.",
      n: "watch out for ~ = ~를 조심하세요." },
    { e: "Welcome! Have you been downtown yet?", k: "환영해요! 시내는 가보셨어요?",
      n: "downtown = 시내. yet = 아직(벌써)." },
    { e: "Oh nice. Don't bother with the tourist buses, by the way.",
      k: "좋네요. 참, 관광버스는 타지 마세요.",
      n: "Don't bother with ~ = ~는 굳이 하지 마세요. by the way = 그런데, 참." },
    { e: "First time? Then you've gotta try the local place on Main.",
      k: "처음이세요? 그럼 메인가에 있는 그 집 꼭 가보셔야 해요.",
      n: "place 가 '가게'입니다. on Main = 메인가에." },
    { e: "Ah, you picked a good week for it.", k: "아, 오신 주를 잘 고르셨네요.",
      n: "picked a good week = 시기를 잘 골랐다. 날씨나 행사를 뜻합니다." }
  ]
},

"Nice talking to you.": {
  where: "이야기를 마치고 헤어질 때",
  lines: [
    { w: "them", e: "Well, I should find my seat. Enjoy the show!", k: "저는 자리 찾아가 볼게요. 공연 재밌게 보세요!" },
    { w: "me", e: "You too. Nice talking to you.", k: "그쪽도요. 이야기 즐거웠어요." },
    { w: "them", e: "Likewise! Maybe see you at the next one.", k: "저도요! 다음 공연에서 또 봬요." }
  ],
  replies: [
    { e: "Likewise! Maybe see you at the next one.", k: "저도요! 다음 공연에서 또 봬요.",
      n: "★ Likewise = 저도 마찬가지예요. 헤어질 때 자주 씁니다." },
    { e: "You too! Enjoy the show.", k: "그쪽도요! 공연 재밌게 보세요.",
      n: "You too 가 '유투'처럼 붙습니다." },
    { e: "Same! Here, let me get your Insta.", k: "저도요! 인스타 알려주세요.",
      n: "let me get your ~ = ~ 알려주세요. Insta = 인스타그램." },
    { e: "Aw, you too. Safe travels back!", k: "아, 그쪽도요. 조심히 돌아가세요!",
      n: "Safe travels = 조심히 가세요. 여행자에게 하는 인사입니다." },
    { e: "Take care! And enjoy the rest of your trip.",
      k: "잘 지내세요! 남은 여행도 즐겁게 보내시고요.",
      n: "Take care = 잘 지내요(헤어질 때). the rest of ~ = 남은 ~." }
  ]
},

/* ---------- 소소한 감상 나누기 ---------- */

"That was lovely.": {
  where: "함께 무언가를 보고 나서",
  lines: [
    { w: "them", e: "What did you think of the opening act?", k: "오프닝 무대 어땠어요?" },
    { w: "me", e: "That was lovely. I didn't know them before.", k: "정말 좋았어요. 전에는 몰랐던 분들인데." },
    { w: "them", e: "Same, I'm gonna look them up later.", k: "저도요, 나중에 찾아봐야겠어요." }
  ],
  replies: [
    { e: "Same, I'm gonna look them up later.", k: "저도요, 나중에 찾아봐야겠어요.",
      n: "look up = 찾아보다. them 이 '엄'처럼 줄어듭니다." },
    { e: "Right? They were way better than I expected.",
      k: "그쵸? 생각보다 훨씬 좋았어요.",
      n: "way better = 훨씬 나은. way 가 강조입니다." },
    { e: "Eh, they were okay. I was there for the main act.",
      k: "음, 그냥 그랬어요. 저는 본 공연 보러 온 거라서요.",
      n: "★ okay 는 칭찬이 아니라 '그저 그렇다'입니다. Eh 는 시큰둥한 소리." },
    { e: "Loved them! Already added them to my playlist.",
      k: "너무 좋았어요! 벌써 재생목록에 넣었어요.",
      n: "I 를 빼고 Loved them! 으로 시작합니다." },
    { e: "To be honest, I missed most of it. I was still in line.",
      k: "솔직히 거의 못 봤어요. 아직 줄 서 있었거든요.",
      n: "missed most of it = 대부분 놓쳤다. in line = 줄 서서." }
  ]
},

"I wasn't expecting that.": {
  where: "생각지 못한 무대를 보고",
  lines: [
    { w: "them", e: "Did you see that dance break?", k: "그 댄스 브레이크 보셨어요?" },
    { w: "me", e: "I wasn't expecting that at all.", k: "전혀 예상 못 했어요." },
    { w: "them", e: "Nobody was. The whole place lost it.", k: "아무도 몰랐죠. 다들 난리 났잖아요." }
  ],
  replies: [
    { e: "Nobody was. The whole place lost it.", k: "아무도 몰랐죠. 다들 난리 났잖아요.",
      n: "the whole place = 공연장 전체. lost it = 난리가 났다." },
    { e: "Right?! I screamed so loud my throat hurts.",
      k: "그쵸?! 너무 크게 소리 질러서 목이 아파요.",
      n: "so ~ that 에서 that 이 빠졌습니다. 구어에서는 거의 안 넣어요." },
    { e: "I actually teared up a little, not gonna lie.",
      k: "솔직히 좀 울컥했어요.",
      n: "★ teared up = 눈물이 핑 돌다. not gonna lie 는 '솔직히'." },
    { e: "Me neither! Did you get it on video?", k: "저도요! 영상 찍으셨어요?",
      n: "★ 부정문에 맞장구칠 때는 Me too 가 아니라 Me neither 입니다." },
    { e: "That's the one everyone's been talking about online.",
      k: "그게 온라인에서 다들 이야기하던 그 장면이에요.",
      n: "the one = 바로 그것. have been -ing = 계속 ~해 왔다." }
  ]
},

"I'm glad we came.": {
  where: "함께 온 사람과 공연 뒤에",
  lines: [
    { w: "them", e: "My feet are killing me.", k: "발이 너무 아파요." },
    { w: "me", e: "Mine too. But I'm glad we came.", k: "저도요. 그래도 오길 잘했어요." },
    { w: "them", e: "Absolutely. I'd do it again tomorrow.", k: "정말요. 내일 또 하라고 해도 하겠어요." }
  ],
  replies: [
    { e: "Absolutely. I'd do it again tomorrow.", k: "정말요. 내일 또 하라고 해도 하겠어요.",
      n: "I'd = I would. 가정해서 말하는 겁니다." },
    { e: "Same. Beats sitting at home, right?", k: "저도요. 집에 있는 것보다 낫죠?",
      n: "★ beats ~ = ~보다 낫다. It 이 앞에서 생략됐습니다." },
    { e: "Me too, even if I can't feel my feet.",
      k: "저도요, 발 감각이 없긴 하지만요.",
      n: "can't feel my feet = 발이 아파 감각이 없다. 과장된 농담이에요." },
    { e: "Yeah. Let's get food before we head back?",
      k: "네. 돌아가기 전에 뭐 먹을까요?",
      n: "head back = 돌아가다. 평서문인데 끝을 올려 제안합니다." },
    { e: "Honestly, best decision we've made all year.",
      k: "솔직히 올해 한 결정 중에 제일 잘한 거예요.",
      n: "It was 가 빠졌습니다. all year = 올해 통틀어." }
  ]
},

"That made my day.": {
  where: "좋은 일이 있고 나서",
  lines: [
    { w: "them", e: "He waved right at our section, did you see?", k: "우리 구역 쪽으로 손 흔들었어요, 보셨어요?" },
    { w: "me", e: "I saw! That made my day.", k: "봤어요! 오늘 그거 하나로 다 됐어요." },
    { w: "them", e: "I'm never washing this shirt again.", k: "이 옷 이제 안 빨 거예요." }
  ],
  replies: [
    { e: "I'm never washing this shirt again.", k: "이 옷 이제 안 빨 거예요.",
      n: "농담입니다. never ~ again = 두 번 다시 ~ 안 한다." },
    { e: "Right? I'm gonna be thinking about that for weeks.",
      k: "그쵸? 몇 주는 그 생각만 할 것 같아요.",
      n: "for weeks = 몇 주 동안. 정확한 수가 아니라 '한참'이라는 뜻." },
    { e: "Honestly, that alone was worth the ticket.",
      k: "솔직히 그것 하나만으로도 표값 했어요.",
      n: "that alone = 그것 하나만으로도. worth the ticket = 표값을 했다." },
    { e: "Oh, he definitely saw us. I'm never recovering.",
      k: "아, 확실히 우릴 봤어요. 저 이제 못 헤어나와요.",
      n: "I'm never recovering = 평생 못 잊겠다는 과장된 농담." },
    { e: "Wait, did you film it? Send it to me!",
      k: "잠깐, 찍으셨어요? 저한테 보내주세요!",
      n: "film 이 동사로 '찍다'. 바로 부탁이 이어집니다." }
  ]
},

"It's better than I thought.": {
  where: "기대가 낮았던 것이 좋았을 때",
  lines: [
    { w: "them", e: "How's the food here? I've heard mixed things.", k: "여기 음식 어때요? 평이 갈리던데." },
    { w: "me", e: "Honestly, it's better than I thought.", k: "솔직히 생각보다 낫네요." },
    { w: "them", e: "Good, I'll get the same then.", k: "잘됐네요, 저도 같은 걸로 할게요." }
  ],
  replies: [
    { e: "Good, I'll get the same then.", k: "잘됐네요, 저도 같은 걸로 할게요.",
      n: "the same = 같은 것. then 이 끝에 붙어 '그럼'." },
    { e: "Oh really? Maybe I'll actually try it then.",
      k: "아 진짜요? 그럼 저도 한번 먹어볼까 봐요.",
      n: "actually 가 '정말로 한번'이라는 뜻으로 들어갑니다." },
    { e: "Huh. Everyone says the opposite, weirdly.",
      k: "음. 이상하게 다들 반대로 말하던데요.",
      n: "Huh 는 뜻 없는 소리. the opposite = 반대로. weirdly = 이상하게도." },
    { e: "Wait till you try the dessert. That's the real reason to come.",
      k: "디저트 드셔보세요. 그것 때문에 오는 거예요.",
      n: "★ Wait till you ~ = ~해 보시면 놀라실 거예요. 기다리라는 말이 아닙니다." },
    { e: "Mm, low bar though. The place next door is rough.",
      k: "음, 근데 기준이 낮아서요. 옆 가게가 형편없거든요.",
      n: "low bar = 기준이 낮다. rough = 형편없다. 농담조로 깎아내리는 말." }
  ]
},

"I needed that.": {
  where: "힘든 뒤에 숨을 돌렸을 때",
  lines: [
    { w: "them", e: "Here, I got you a coffee.", k: "여기요, 커피 사 왔어요." },
    { w: "me", e: "Oh, thank you. I needed that.", k: "아, 고마워요. 마침 필요했어요." },
    { w: "them", e: "Long day, huh?", k: "긴 하루였죠?" }
  ],
  replies: [
    { e: "Long day, huh?", k: "긴 하루였죠?",
      n: "huh? 를 끝에 붙여 '그쵸?'로 만듭니다." },
    { e: "No worries. You looked like you needed it.",
      k: "별말씀을요. 필요해 보이시더라고요.",
      n: "You looked like ~ = ~해 보이셨어요." },
    { e: "Of course. I grabbed you a pastry too.",
      k: "그럼요. 빵도 하나 사 왔어요.",
      n: "grab = 간단히 사다. I grabbed you ~ = 당신 것도 사 왔다." },
    { e: "Don't mention it. Rough morning?", k: "별것 아니에요. 아침이 힘드셨어요?",
      n: "★ Don't mention it = 별말씀을요. '말하지 마'가 아닙니다." },
    { e: "Anytime. You want sugar? I wasn't sure.",
      k: "언제든지요. 설탕 드려요? 몰라서 안 넣었어요.",
      n: "Anytime = 언제든 말씀하세요. Do you 가 빠졌습니다." }
  ]
},

/* ---------- 먹기 ---------- */

"What do you recommend?": {
  where: "메뉴를 못 고르고 있을 때",
  lines: [
    { w: "them", e: "Have you decided, or do you need another minute?", k: "정하셨어요, 아니면 조금 더 보실래요?" },
    { w: "me", e: "I'm not sure yet. What do you recommend?", k: "아직 못 정했어요. 뭐가 맛있어요?" },
    { w: "them", e: "The fish and chips is what we're known for.", k: "피시앤칩스가 저희 대표 메뉴예요." }
  ],
  replies: [
    { e: "The fish and chips is what we're known for.", k: "피시앤칩스가 저희 대표 메뉴예요.",
      n: "what we're known for = 저희가 유명한 것." },
    { e: "Everything's good, honestly. What are you in the mood for?",
      k: "다 맛있어요, 솔직히. 뭐 드시고 싶으세요?",
      n: "★ in the mood for ~ = ~가 당기다. 되물으니 하나 고르면 됩니다." },
    { e: "The special today is the salmon. Comes with a side.",
      k: "오늘 특선은 연어예요. 사이드 하나 같이 나와요.",
      n: "It 을 빼고 Comes with ~ 로 잇습니다. side = 곁들임 음식." },
    { e: "Depends — are you a spice person?", k: "글쎄요, 매운 거 잘 드세요?",
      n: "a spice person = 매운 걸 좋아하는 사람. 이런 식으로 자주 말합니다." },
    { e: "If it's your first time, go with the burger. Can't go wrong.",
      k: "처음이시면 버거 하세요. 실패 없어요.",
      n: "go with = 고르다. Can't go wrong = 실패할 리 없다." }
  ]
},

"Could we get the check?": {
  where: "식사를 마치고",
  lines: [
    { w: "me", e: "Excuse me, could we get the check?", k: "저기요, 계산서 주시겠어요?" },
    { w: "them", e: "Of course. Card or cash?", k: "네. 카드로 하시겠어요, 현금이세요?" },
    { w: "me", e: "Card, please.", k: "카드로 할게요." }
  ],
  replies: [
    { e: "Of course. Card or cash?", k: "네. 카드로 하시겠어요, 현금이세요?",
      n: "Card or cash 가 '카돌캐시'처럼 붙습니다." },
    { e: "Sure, I'll bring that right over.", k: "네, 바로 가져다 드릴게요.",
      n: "right over = 바로 그쪽으로. bring over = 가져다주다." },
    { e: "All together or separate?", k: "같이 계산하세요, 따로 하세요?",
      n: "★ 인원이 여럿일 때 거의 반드시 묻습니다. separate = 따로." },
    { e: "Absolutely. Did you want any dessert first?",
      k: "네. 디저트 먼저 하시겠어요?",
      n: "Did you want ~ 은 과거가 아니라 공손한 현재입니다." },
    { e: "Yep, one sec. It's already on the machine.",
      k: "네, 잠시만요. 이미 단말기에 찍혀 있어요.",
      n: "one sec = 잠깐만요. the machine = 카드 단말기." }
  ]
},

"I'm allergic to nuts.": {
  where: "주문하면서 미리 알릴 때",
  lines: [
    { w: "me", e: "Before I order, I'm allergic to nuts. Is that okay?", k: "주문 전에요, 제가 견과류 알레르기가 있어요. 괜찮을까요?" },
    { w: "them", e: "No problem, I'll let the kitchen know.", k: "문제없어요, 주방에 말해 둘게요." },
    { w: "me", e: "Thank you, I appreciate it.", k: "고맙습니다, 감사해요." }
  ],
  replies: [
    { e: "No problem, I'll let the kitchen know.", k: "문제없어요, 주방에 말해 둘게요.",
      n: "let ~ know = ~에게 알리다." },
    { e: "Thanks for telling me. Is it severe, or just a sensitivity?",
      k: "말씀해 주셔서 고마워요. 심한 편이세요, 아니면 조금 예민한 정도세요?",
      n: "★ severe = 심한. 얼마나 심한지 꼭 되묻습니다. 답을 준비해 두세요." },
    { e: "Okay. I'd steer clear of the desserts, just to be safe.",
      k: "알겠습니다. 안전하게 디저트는 피하시는 게 좋겠어요.",
      n: "steer clear of ~ = ~를 피하다. just to be safe = 혹시 모르니." },
    { e: "Noted. I'll flag it on the order.", k: "알겠습니다. 주문서에 표시해 둘게요.",
      n: "Noted = 알겠습니다(적어뒀습니다). flag = 표시해 두다." },
    { e: "Of course. Anything else we should know about?",
      k: "네. 저희가 알아야 할 다른 것도 있으세요?",
      n: "we should know about = 저희가 알아야 할. 되묻는 말입니다." }
  ]
},

"Table for two, please.": {
  where: "식당에 들어서며",
  lines: [
    { w: "them", e: "Hi there, how many?", k: "안녕하세요, 몇 분이세요?" },
    { w: "me", e: "Table for two, please.", k: "두 명이요." },
    { w: "them", e: "Right this way.", k: "이쪽으로 오세요." }
  ],
  replies: [
    { e: "Right this way.", k: "이쪽으로 오세요.",
      n: "★ 세 단어뿐이라 놓치기 쉽습니다. 따라오라는 뜻이에요." },
    { e: "Sure. Booth or table?", k: "네. 부스요, 테이블이요?",
      n: "booth = 칸막이 자리. 미국 식당에서 꼭 묻습니다." },
    { e: "It'll be about a fifteen-minute wait. That okay?",
      k: "십오 분쯤 기다리셔야 해요. 괜찮으세요?",
      n: "Is 를 빼고 That okay? 로 묻습니다." },
    { e: "Do you have a reservation?", k: "예약하셨어요?",
      n: "예약 여부를 먼저 묻는 경우입니다. No, we don't 로 답하면 돼요." },
    { e: "Go ahead and grab any open table.", k: "빈자리 아무 데나 앉으세요.",
      n: "Go ahead and ~ = 그냥 ~하세요. grab = 잡다, 여기선 '앉다'." }
  ]
},

/* ---------- 사기 ---------- */

"Do you have this in a bigger size?": {
  where: "굿즈 티셔츠를 고르며",
  lines: [
    { w: "me", e: "Do you have this in a bigger size?", k: "이거 더 큰 사이즈 있어요?" },
    { w: "them", e: "Let me check. We might have one left in the back.", k: "확인해 볼게요. 뒤에 하나 남았을 수도 있어요." },
    { w: "me", e: "Thank you, no rush.", k: "고마워요, 천천히 하세요." }
  ],
  replies: [
    { e: "Let me check. We might have one left in the back.",
      k: "확인해 볼게요. 뒤에 하나 남았을 수도 있어요.",
      n: "in the back = 창고에. one left = 하나 남은 것." },
    { e: "What you see is what we've got, sorry.",
      k: "죄송한데, 보이는 게 전부예요.",
      n: "★ What you see is what we've got = 진열된 게 전부다. 자주 쓰는 말이에요." },
    { e: "We're all out of larges, but I can order one in.",
      k: "라지는 다 나갔는데, 주문해 드릴 수는 있어요.",
      n: "all out of ~ = ~가 다 떨어졌다. order in = 들여오다." },
    { e: "Yeah, hang on — what size are you after?",
      k: "네, 잠깐만요. 어떤 사이즈 찾으세요?",
      n: "be after ~ = ~를 찾다. hang on = 잠깐만요." },
    { e: "Should do. Let me look out back real quick.",
      k: "있을 거예요. 뒤에 빨리 가서 볼게요.",
      n: "Should do = 아마 있을 거예요. real quick = 금방." }
  ]
},

"Do you take cards?": {
  where: "계산하기 직전",
  lines: [
    { w: "me", e: "Do you take cards?", k: "카드 되나요?" },
    { w: "them", e: "We do, but there's a two pound minimum.", k: "네, 다만 최소 2파운드부터예요." },
    { w: "me", e: "That's fine, thanks.", k: "괜찮아요, 고맙습니다." }
  ],
  replies: [
    { e: "We do, but there's a two pound minimum.", k: "네, 다만 최소 2파운드부터예요.",
      n: "minimum = 최소 금액. 소액은 카드가 안 될 수 있습니다." },
    { e: "Card only, actually. We don't take cash.",
      k: "사실 카드만 돼요. 현금은 안 받아요.",
      n: "★ 요즘은 반대로 현금을 안 받는 곳이 많습니다." },
    { e: "Yep, tap or insert, whichever.", k: "네, 대시거나 꽂으시거나 편한 대로요.",
      n: "tap = 대다(비접촉). insert = 꽂다. whichever = 아무거나." },
    { e: "Sure. It's gonna ask you about a tip — just hit no if you want.",
      k: "네. 팁 물어볼 텐데, 원하시면 아니요 누르시면 돼요.",
      n: "★ 미국은 단말기가 팁을 묻습니다. hit = 누르다." },
    { e: "We do. Sorry, the machine's been slow today.",
      k: "돼요. 죄송해요, 오늘 단말기가 좀 느리네요.",
      n: "We do 로 짧게 긍정합니다. has been = 계속 그래 왔다." }
  ]
},

"I'm just looking, thanks.": {
  where: "점원이 도움을 물어올 때",
  lines: [
    { w: "them", e: "Hi! Can I help you find anything?", k: "안녕하세요! 찾으시는 것 있으세요?" },
    { w: "me", e: "I'm just looking, thanks.", k: "그냥 구경하는 거예요, 고마워요." },
    { w: "them", e: "No worries, shout if you need me.", k: "괜찮아요, 필요하시면 부르세요." }
  ],
  replies: [
    { e: "No worries, shout if you need me.", k: "괜찮아요, 필요하시면 부르세요.",
      n: "★ shout = 소리치다가 아니라 '부르세요'입니다." },
    { e: "Sure thing. Just so you know, everything's buy one get one.",
      k: "네. 참고로 전부 하나 사면 하나 더예요.",
      n: "Just so you know = 참고로. buy one get one = 1+1." },
    { e: "Take your time. I'll be right over here.",
      k: "천천히 보세요. 저는 여기 있을게요.",
      n: "right over here = 바로 이쪽에." },
    { e: "No problem. Let me know if you wanna try anything on.",
      k: "네. 입어보고 싶으시면 말씀하세요.",
      n: "try on = 입어보다. wanna = want to." },
    { e: "Of course. The sale stuff's all down the back, by the way.",
      k: "네. 참, 세일 상품은 다 안쪽에 있어요.",
      n: "stuff = 물건들. down the back = 안쪽에." }
  ]
},

"Can I try this on?": {
  where: "옷을 골라 들고",
  lines: [
    { w: "me", e: "Can I try this on?", k: "입어 봐도 될까요?" },
    { w: "them", e: "Sure, fitting rooms are just behind you.", k: "그럼요, 탈의실은 바로 뒤에 있어요." },
    { w: "me", e: "Great, thanks.", k: "네, 고맙습니다." }
  ],
  replies: [
    { e: "Sure, fitting rooms are just behind you.", k: "그럼요, 탈의실은 바로 뒤에 있어요.",
      n: "fitting room = 탈의실. 미국에선 dressing room 이라고도 합니다." },
    { e: "Yeah, how many items have you got?", k: "네, 몇 개 들고 계세요?",
      n: "★ 탈의실은 개수를 세는 곳이 많습니다. items = 옷 개수." },
    { e: "Go ahead. The ones on the left are free.",
      k: "그러세요. 왼쪽 칸들이 비어 있어요.",
      n: "★ free 가 '공짜'가 아니라 '비어 있는'입니다." },
    { e: "Of course, I'll unlock one for you.", k: "그럼요, 하나 열어 드릴게요.",
      n: "unlock = 잠금을 풀다. 직원이 열어주는 곳도 있습니다." },
    { e: "Sorry, not that one — it's final sale.",
      k: "죄송한데 그건 안 돼요. 교환·환불 불가 상품이에요.",
      n: "final sale = 교환도 환불도 안 되는 것. 미국 가게에서 자주 봅니다." }
  ]
},

/* ---------- 숙소 ---------- */

"I have a reservation under Kim.": {
  where: "호텔 프런트에서 체크인",
  lines: [
    { w: "them", e: "Good evening. Checking in?", k: "안녕하세요. 체크인이세요?" },
    { w: "me", e: "Yes, I have a reservation under Kim.", k: "네, 김으로 예약했어요." },
    { w: "them", e: "Let me just find that for you. Could I see your passport?", k: "찾아 볼게요. 여권 좀 보여 주시겠어요?" }
  ],
  replies: [
    { e: "Let me just find that for you. Could I see your passport?",
      k: "찾아 볼게요. 여권 좀 보여 주시겠어요?",
      n: "Let me just ~ = 잠깐 ~해 볼게요." },
    { e: "Perfect. And is that spelled K-I-M?", k: "네. 철자가 K-I-M 맞나요?",
      n: "★ 철자를 한 글자씩 부릅니다. 내 이름 철자를 말할 준비를 해 두세요." },
    { e: "I've got you right here. Two nights, king bed?",
      k: "여기 있네요. 이박, 킹 침대 맞으시죠?",
      n: "I've got you = 찾았습니다. 예약 내용을 확인합니다." },
    { e: "Hmm, I'm not seeing it. Do you have the confirmation number?",
      k: "음, 안 보이네요. 예약 번호 있으세요?",
      n: "★ I'm not seeing it = 안 보여요. 예약 번호를 미리 챙겨 두세요." },
    { e: "Great. I'll just need a card on file for incidentals.",
      k: "네. 부대 비용 때문에 카드만 하나 등록할게요.",
      n: "on file = 등록해 두는. incidentals = 부대 비용(미니바 등)." }
  ]
},

"Could I leave my bags here?": {
  where: "체크아웃 뒤 공연 보러 가기 전",
  lines: [
    { w: "me", e: "I've checked out already. Could I leave my bags here?", k: "체크아웃은 했는데요. 짐 좀 맡길 수 있을까요?" },
    { w: "them", e: "Of course. Until what time?", k: "그럼요. 몇 시까지요?" },
    { w: "me", e: "Around eleven tonight, if that's okay.", k: "괜찮으시면 오늘 밤 열한 시쯤이요." }
  ],
  replies: [
    { e: "Of course. Until what time?", k: "그럼요. 몇 시까지요?",
      n: "Until what time 이 한 덩어리로 붙습니다." },
    { e: "Sure, I'll tag them. How many bags?", k: "네, 표 붙여 드릴게요. 가방 몇 개세요?",
      n: "tag = 이름표를 붙이다. 개수를 묻습니다." },
    { e: "No problem, but we close the luggage room at midnight.",
      k: "괜찮은데, 짐 보관실은 자정에 닫아요.",
      n: "★ 시간 제한이 붙습니다. luggage room = 짐 보관실." },
    { e: "Yep, just leave them with the concierge over there.",
      k: "네, 저쪽 컨시어지에 맡기시면 돼요.",
      n: "leave them with ~ = ~에게 맡기다. concierge = 안내 데스크 직원." },
    { e: "We can, but there's a small charge — five dollars a bag.",
      k: "가능한데, 약간 요금이 있어요. 가방당 5달러요.",
      n: "★ 공짜가 아닐 수 있습니다. a bag = 가방 하나당." }
  ]
},

/* ---------- 길 찾기 · 이동 ---------- */

"How do I get to the station?": {
  where: "길에서 지나가는 사람에게",
  lines: [
    { w: "me", e: "Excuse me, how do I get to the station?", k: "실례합니다, 역에 어떻게 가요?" },
    { w: "them", e: "Straight down this road, then left at the lights.", k: "이 길 쭉 가셔서 신호등에서 왼쪽이요." },
    { w: "me", e: "Straight, then left. Got it, thank you.", k: "쭉 가서 왼쪽. 알겠어요, 고맙습니다." }
  ],
  replies: [
    { e: "Straight down this road, then left at the lights.",
      k: "이 길 쭉 가셔서 신호등에서 왼쪽이요.",
      n: "★ the lights = 신호등. 미국은 the light 라고 흔히 말합니다." },
    { e: "You're actually walking away from it. Turn around.",
      k: "지금 반대로 가고 계세요. 돌아가셔야 해요.",
      n: "walking away from it = 그곳에서 멀어지는 중. Turn around = 돌아서세요." },
    { e: "It's like a ten-minute walk. Or you could grab the bus.",
      k: "한 십 분 걸어요. 아니면 버스 타셔도 되고요.",
      n: "grab the bus = 버스를 타다. like = 한, 대략." },
    { e: "Sorry, I'm not from here either. Try the map on your phone.",
      k: "죄송해요, 저도 여기 사람이 아니에요. 폰 지도 보세요.",
      n: "either = 저도 마찬가지로(아니다). 부정문 뒤에 붙습니다." },
    { e: "Two blocks up, you'll see it on your right. Can't miss it.",
      k: "두 블록 올라가시면 오른쪽에 보여요. 바로 찾으실 거예요.",
      n: "★ blocks 로 거리를 셉니다. up = 위쪽으로." }
  ]
},

"Does this bus go to the airport?": {
  where: "버스에 올라타며 기사에게",
  lines: [
    { w: "me", e: "Does this bus go to the airport?", k: "이 버스 공항 가나요?" },
    { w: "them", e: "It does, but you'll want the express. It's the next one.", k: "가긴 해요, 근데 급행 타시는 게 나아요. 다음 거예요." },
    { w: "me", e: "Ah, I'll wait then. Thanks.", k: "아, 그럼 기다릴게요. 고마워요." }
  ],
  replies: [
    { e: "It does, but you'll want the express. It's the next one.",
      k: "가긴 해요, 근데 급행 타시는 게 나아요. 다음 거예요.",
      n: "★ you'll want ~ = ~하시는 게 좋아요. 조언하는 말입니다." },
    { e: "Not this one. You need the 300, across the street.",
      k: "이건 아니에요. 길 건너서 300번 타셔야 해요.",
      n: "across the street = 길 건너. 번호를 숫자로만 말합니다." },
    { e: "Sure does. Exact change only, though.",
      k: "그럼요. 근데 잔돈은 안 거슬러 줘요.",
      n: "★ Sure does = 네 맞아요. exact change only = 정확한 금액만 받는다." },
    { e: "Yeah, last stop. I'll shout when we get there.",
      k: "네, 종점이에요. 도착하면 알려 드릴게요.",
      n: "last stop = 종점. shout = 여기선 '말해 주다'." },
    { e: "It goes near it. You'll have to walk about ten minutes.",
      k: "근처까지 가요. 십 분쯤 걸으셔야 해요.",
      n: "near it = 근처까지. 공항까지 바로는 안 간다는 뜻입니다." }
  ]
},

"Is this seat taken?": {
  where: "기차나 대기실에서",
  lines: [
    { w: "me", e: "Excuse me, is this seat taken?", k: "실례지만 여기 자리 있나요?" },
    { w: "them", e: "No, go ahead. Let me move my bag.", k: "아뇨, 앉으세요. 가방 치울게요." },
    { w: "me", e: "Thanks a lot.", k: "고맙습니다." }
  ],
  replies: [
    { e: "No, go ahead. Let me move my bag.", k: "아뇨, 앉으세요. 가방 치울게요.",
      n: "★ No 로 시작하지만 '앉으세요'라는 뜻입니다. '자리 있냐'는 물음의 답이라서요." },
    { e: "Sorry, my friend's just gone to the restroom.",
      k: "죄송해요, 친구가 화장실 갔어요.",
      n: "★ 이건 거절입니다. has just gone = 방금 갔다." },
    { e: "All yours.", k: "앉으세요.",
      n: "★ 두 단어뿐입니다. All yours = 다 쓰세요, 즉 '앉으세요'." },
    { e: "Help yourself.", k: "그러세요.",
      n: "Help yourself = 마음대로 하세요. 음식에도 자리에도 씁니다." },
    { e: "Go for it. I'm getting off at the next stop anyway.",
      k: "앉으세요. 저 어차피 다음 정거장에서 내려요.",
      n: "Go for it = 그렇게 하세요. get off = 내리다." }
  ]
},

/* ---------- 문제가 생겼을 때 ---------- */

"Sorry, I didn't catch that.": {
  where: "상대 말을 놓쳤을 때",
  lines: [
    { w: "them", e: "The doors open at half six round the side entrance.", k: "옆문 쪽으로 6시 반에 입장 시작해요." },
    { w: "me", e: "Sorry, I didn't catch that. Half six?", k: "죄송해요, 못 알아들었어요. 6시 반이요?" },
    { w: "them", e: "Yeah, half six. Round the side.", k: "네, 6시 반이요. 옆쪽으로요." }
  ],
  replies: [
    { e: "Yeah, half six. Round the side.", k: "네, 6시 반이요. 옆쪽으로요.",
      n: "★ half six = 6시 반(영국식). 5시 반이 아닙니다." },
    { e: "Six thirty. Sorry, I talk too fast.", k: "6시 30분이요. 죄송해요, 제가 말이 빨라서요.",
      n: "이번엔 또박또박 다시 말해 줍니다. 다행인 경우예요." },
    { e: "Ah sorry — six... thirty. The side entrance.",
      k: "아 죄송해요. 여섯… 시 삼십 분이요. 옆문으로요.",
      n: "숫자를 끊어서 다시 말해 줍니다. side entrance = 옆문." },
    { e: "Which part? The time or where to go?", k: "어느 부분이요? 시간이요, 어디로 가는지요?",
      n: "★ 되묻습니다. The time, please 라고 답하면 됩니다." },
    { e: "No worries. Doors, six thirty. Entrance, round the side.",
      k: "괜찮아요. 입장 6시 30분. 입구는 옆쪽으로요.",
      n: "토막토막 끊어 다시 말해 줍니다. 알아듣기 제일 쉬운 경우예요." }
  ]
},

"Could you speak a little slower?": {
  where: "말이 너무 빠를 때",
  lines: [
    { w: "them", e: "You'llwannaheadroundthebackandqueuethere.", k: "(빠르게) 뒤쪽으로 돌아가서 거기 줄 서시면 돼요." },
    { w: "me", e: "Sorry, could you speak a little slower?", k: "죄송한데, 조금만 천천히 말해 주실 수 있어요?" },
    { w: "them", e: "Sorry! Go around the back, and queue there.", k: "미안해요! 뒤쪽으로 돌아가서, 거기 줄 서세요." }
  ],
  replies: [
    { e: "Sorry! Go around the back, and line up there.",
      k: "미안해요! 뒤쪽으로 돌아가서, 거기 줄 서세요.",
      n: "line up = 줄 서다(미국). 영국은 queue 를 씁니다." },
    { e: "Oh, sure. You. Need. To go. Around. The back.",
      k: "아, 네. 뒤쪽으로. 돌아가시면. 돼요.",
      n: "지나치게 또박또박 끊어 말해 줍니다. 좋은 뜻이에요." },
    { e: "My bad. Head round the back and wait there.",
      k: "제 잘못이에요. 뒤쪽으로 가서 기다리세요.",
      n: "★ My bad = 내 잘못이야. head = 가다." },
    { e: "Sure. Do you speak Spanish, by any chance?",
      k: "네. 혹시 스페인어 하세요?",
      n: "by any chance = 혹시. 다른 언어로 도우려는 겁니다." },
    { e: "Of course. Here, let me just show you instead.",
      k: "그럼요. 자, 그냥 제가 보여 드릴게요.",
      n: "instead = 대신에. 말 대신 직접 데려다줍니다." }
  ]
},

/* ---------- 잘 안 들리는 말 ---------- */

/* ---------- 미술관 · 박물관 ---------- */

"Two adults, please.": {
  where: "매표소에서",
  lines: [
    { w: "them", e: "Hi, how many?", k: "안녕하세요, 몇 분이세요?" },
    { w: "me", e: "Two adults, please.", k: "어른 두 장 주세요." },
    { w: "them", e: "That's thirty. Any concessions?", k: "30입니다. 할인 대상 있으세요?" }
  ],
  replies: [
    { e: "That's thirty. Any concessions?", k: "30입니다. 할인 대상 있으세요?",
      n: "★ concessions = 학생·노인 등 할인 대상(영국). 없으면 No, just full price." },
    { e: "Sure. Would you like the special exhibition too?", k: "네. 특별전도 하시겠어요?",
      n: "따로 돈을 받는 전시를 권합니다. 원치 않으면 Just the main one." },
    { e: "Two adults. Would you like a guide book with that?", k: "어른 두 장이요. 안내 책자도 하시겠어요?",
      n: "guide book = 도록. 사지 않아도 됩니다." },
    { e: "And is that just for today, or the annual pass?", k: "오늘만이요, 아니면 연간권이요?",
      n: "annual pass = 연간 이용권. 여행자는 Just today." }
  ]
},

"Is there a student discount?": {
  where: "표를 사며",
  lines: [
    { w: "me", e: "Is there a student discount?", k: "학생 할인 있어요?" },
    { w: "them", e: "There is. Do you have your student card?", k: "있어요. 학생증 있으세요?" },
    { w: "me", e: "Yes, here you go.", k: "네, 여기요." }
  ],
  replies: [
    { e: "There is. Do you have your student card?", k: "있어요. 학생증 있으세요?",
      n: "★ 증명서를 보여 줘야 합니다. 없으면 할인이 안 돼요." },
    { e: "Not for students, but we do teachers.", k: "학생은 없는데, 교사 할인은 있어요.",
      n: "★ we do ~ = ~는 해 드려요. 교사 할인을 하는 곳이 꽤 있습니다." },
    { e: "Only for UK students, I'm afraid.", k: "아쉽지만 영국 학생만요.",
      n: "나라를 따지는 경우도 있습니다." },
    { e: "There's no discount, but under-eighteens are free.", k: "할인은 없는데, 18세 미만은 무료예요.",
      n: "under-eighteens = 18세 미만. 나이로 나누는 곳이 많습니다." }
  ]
},

"Where do I leave my bag?": {
  where: "큰 가방을 들고 입구에서",
  lines: [
    { w: "me", e: "Where do I leave my bag? It's too big, isn't it?", k: "가방은 어디에 맡겨요? 너무 크죠?" },
    { w: "them", e: "Cloakroom's just there, on the left. It's free.", k: "물품 보관소가 바로 저기 왼쪽이요. 무료예요." },
    { w: "me", e: "Great, thank you.", k: "좋아요, 고맙습니다." }
  ],
  replies: [
    { e: "Cloakroom's just there, on the left. It's free.", k: "물품 보관소가 바로 저기 왼쪽이요. 무료예요.",
      n: "★ cloakroom = 물품 보관소(영국). 미국은 coat check." },
    { e: "Lockers downstairs. You'll need a pound coin.", k: "아래층 사물함이요. 1파운드 동전이 필요해요.",
      n: "★ 동전을 넣어야 열리는 사물함이 많습니다. 끝나면 돌려받아요." },
    { e: "That size is fine, actually. You can take it in.", k: "그 정도 크기는 괜찮아요. 들고 들어가셔도 돼요.",
      n: "take it in = 들고 들어가다." },
    { e: "Anything bigger than A4 has to go in the cloakroom.", k: "A4보다 큰 건 다 보관소에 맡기셔야 해요.",
      n: "기준을 종이 크기로 말하는 곳이 많습니다." }
  ]
},

"Which way to the exhibition?": {
  where: "들어와서 방향을 찾을 때",
  lines: [
    { w: "me", e: "Which way to the exhibition?", k: "전시는 어느 쪽이에요?" },
    { w: "them", e: "Straight through and up the stairs. Follow the purple signs.", k: "쭉 지나가서 계단 올라가세요. 보라색 표지판 따라가시면 돼요." },
    { w: "me", e: "Purple signs. Thank you.", k: "보라색 표지판이요. 고맙습니다." }
  ],
  replies: [
    { e: "Straight through and up the stairs. Follow the purple signs.", k: "쭉 지나가서 계단 올라가세요. 보라색 표지판 따라가시면 돼요.",
      n: "★ straight through = 쭉 통과해서. 색으로 길을 안내하는 곳이 많습니다." },
    { e: "Which one? We've got three on at the moment.", k: "어느 거요? 지금 세 개 하고 있어요.",
      n: "★ on = 열리고 있는. 전시 이름을 말하면 됩니다." },
    { e: "It starts in room one, then just follow the arrows.", k: "1번 방에서 시작해서, 화살표 따라가시면 돼요.",
      n: "arrows = 화살표. 순서대로 보게 돼 있습니다." },
    { e: "Down to the basement level. The lift's behind you.", k: "지하층으로요. 승강기는 뒤에 있어요.",
      n: "basement level = 지하층." }
  ]
},

"How long does it take to see everything?": {
  where: "시간을 가늠할 때",
  lines: [
    { w: "me", e: "How long does it take to see everything?", k: "다 보려면 얼마나 걸려요?" },
    { w: "them", e: "Properly? A full day. Most people do the highlights in two hours.", k: "제대로요? 하루 종일이요. 보통은 두 시간에 주요 작품만 봐요." },
    { w: "me", e: "I'll do the highlights then.", k: "그럼 주요 작품만 볼게요." }
  ],
  replies: [
    { e: "Properly? A full day. Most people do the highlights in two hours.", k: "제대로요? 하루 종일이요. 보통은 두 시간에 주요 작품만 봐요.",
      n: "★ highlights = 꼭 봐야 할 주요 작품. 시간이 없을 때 쓰는 말." },
    { e: "About ninety minutes if you don't linger.", k: "오래 안 머무르면 한 시간 반쯤이요.",
      n: "★ linger = 오래 머무르다." },
    { e: "Depends how fast you walk! Honestly, two to three hours.", k: "얼마나 빨리 걷느냐에 따라요! 솔직히 두세 시간이요.",
      n: "Depends how ~ = ~에 따라 다르다." },
    { e: "There's a one-hour route marked on the map.", k: "지도에 한 시간짜리 코스가 표시돼 있어요.",
      n: "★ route = 관람 동선. 시간별로 짜 둔 곳이 많습니다." }
  ]
},

"Is this included in the ticket?": {
  where: "특별전 앞에서",
  lines: [
    { w: "me", e: "Is this included in the ticket?", k: "이건 표에 포함된 건가요?" },
    { w: "them", e: "No, that one's separate. It's twelve extra.", k: "아니요, 그건 따로예요. 12 추가입니다." },
    { w: "me", e: "Ah, I see. I'll think about it.", k: "아, 그렇군요. 생각해 볼게요." }
  ],
  replies: [
    { e: "No, that one's separate. It's twelve extra.", k: "아니요, 그건 따로예요. 12 추가입니다.",
      n: "★ separate = 따로. 특별전은 대개 별도 요금입니다." },
    { e: "Yes, everything's included with that ticket.", k: "네, 그 표에 다 포함돼 있어요.",
      n: "everything's included = 전부 포함." },
    { e: "It is, but you need to book a time slot.", k: "포함인데, 시간대를 예약하셔야 해요.",
      n: "포함이어도 예약이 필요한 경우입니다." },
    { e: "That's free for everyone, actually.", k: "사실 그건 누구나 무료예요.",
      n: "for everyone = 모두에게." }
  ]
},

"What time do you close?": {
  where: "늦게 들어와서",
  lines: [
    { w: "me", e: "What time do you close?", k: "몇 시에 닫아요?" },
    { w: "them", e: "Six, but the galleries start closing at half five.", k: "6시요, 근데 전시실은 5시 반부터 닫기 시작해요." },
    { w: "me", e: "Good to know. I'll be quick.", k: "알아두면 좋겠네요. 서두를게요." }
  ],
  replies: [
    { e: "Six, but the galleries start closing at half five.", k: "6시요, 근데 전시실은 5시 반부터 닫기 시작해요.",
      n: "★ 닫는 시각보다 30분 일찍 전시실을 차례로 닫습니다. half five = 5시 반." },
    { e: "Late night tonight — we're open till nine.", k: "오늘은 야간 개장이라 9시까지예요.",
      n: "★ late night = 야간 개장. 주에 하루씩 하는 곳이 많습니다." },
    { e: "Last entry is at five, so you've got time.", k: "마지막 입장이 5시라 시간 있으세요.",
      n: "★ last entry = 마지막 입장 시각." },
    { e: "In twenty minutes, sorry. We're about to announce it.", k: "죄송해요, 이십 분 뒤요. 곧 안내 방송 나가요.",
      n: "about to = 막 ~하려는 참." }
  ]
},

"Is there a lift?": {
  where: "계단이 많을 때",
  lines: [
    { w: "me", e: "Is there a lift? My knee's not great.", k: "승강기 있어요? 무릎이 안 좋아서요." },
    { w: "them", e: "There is, round the corner past the shop.", k: "있어요, 모퉁이 돌아서 가게 지나면 있어요." },
    { w: "me", e: "Thank you, that helps.", k: "고맙습니다, 도움이 되네요." }
  ],
  replies: [
    { e: "There is, round the corner past the shop.", k: "있어요, 모퉁이 돌아서 가게 지나면 있어요.",
      n: "past ~ = ~를 지나서." },
    { e: "Yes — ask a steward and they'll take you.", k: "네, 안내 직원한테 말하면 데려다 줘요.",
      n: "직원이 안내해 주는 경우입니다." },
    { e: "Only to the second floor, I'm afraid. It's an old building.", k: "아쉽지만 2층까지만요. 오래된 건물이라서요.",
      n: "★ 오래된 미술관은 일부 층만 승강기가 갑니다." },
    { e: "There's a ramp as well, if that's easier.", k: "경사로도 있어요, 그게 편하시면요.",
      n: "★ ramp = 경사로. 계단 대신 오를 수 있습니다." }
  ]
},

"Where are the toilets?": {
  where: "화장실을 찾을 때",
  lines: [
    { w: "me", e: "Sorry, where are the toilets?", k: "죄송한데, 화장실이 어디예요?" },
    { w: "them", e: "Down those stairs, past the café.", k: "저 계단 내려가서 카페 지나면 있어요." },
    { w: "me", e: "Thanks very much.", k: "정말 고맙습니다." }
  ],
  replies: [
    { e: "Down those stairs, past the café.", k: "저 계단 내려가서 카페 지나면 있어요.",
      n: "★ toilets(영국) / restroom(미국). 미국에서 toilet 은 변기를 뜻해 어색합니다." },
    { e: "Straight ahead, then it's signposted.", k: "쭉 가시면 표지판 있어요.",
      n: "straight ahead = 앞으로 쭉." },
    { e: "There's one on every floor. Nearest is by the lift.", k: "층마다 있어요. 제일 가까운 건 승강기 옆이요.",
      n: "on every floor = 층마다." },
    { e: "The ones here are closed. Use the ones upstairs.", k: "여기 건 닫혔어요. 위층 걸 쓰세요.",
      n: "The ones = 그것들(화장실). 반복을 피하려고 씁니다." }
  ]
},

"Is there a gift shop?": {
  where: "다 보고 나오면서",
  lines: [
    { w: "me", e: "Is there a gift shop?", k: "기념품 가게 있어요?" },
    { w: "them", e: "By the exit. You'll walk right through it.", k: "출구 쪽이요. 지나가면서 보시게 돼요." },
    { w: "me", e: "Perfect, thanks.", k: "좋네요, 고맙습니다." }
  ],
  replies: [
    { e: "By the exit. You'll walk right through it.", k: "출구 쪽이요. 지나가면서 보시게 돼요.",
      n: "★ walk right through it = 지나갈 수밖에 없다. 출구가 가게를 통과합니다." },
    { e: "Two, actually — books upstairs, souvenirs down here.", k: "사실 두 개예요. 위층은 책, 여기는 기념품이요.",
      n: "souvenirs = 기념품." },
    { e: "It closes fifteen minutes before we do.", k: "저희보다 십오 분 먼저 닫아요.",
      n: "before we do = 우리가 닫기 전에." },
    { e: "Online too, if you'd rather not carry it.", k: "들고 다니기 싫으시면 온라인으로도 돼요.",
      n: "if you'd rather not = 그러고 싶지 않으시면." }
  ]
},

"Could I have a map?": {
  where: "안내 데스크에서",
  lines: [
    { w: "me", e: "Could I have a map?", k: "지도 한 장 주실 수 있어요?" },
    { w: "them", e: "Of course. English one?", k: "그럼요. 영어판으로요?" },
    { w: "me", e: "Yes, please.", k: "네, 부탁드려요." }
  ],
  replies: [
    { e: "Of course. English one?", k: "그럼요. 영어판으로요?",
      n: "언어를 묻습니다. 한국어판이 있는 곳도 있어요." },
    { e: "Here. The must-sees are circled in red.", k: "여기요. 꼭 볼 것들은 빨간 동그라미예요.",
      n: "★ must-sees = 꼭 봐야 할 것. circled = 동그라미 친." },
    { e: "We charge a pound for those now, sorry.", k: "죄송해요, 지금은 1파운드 받아요.",
      n: "★ 무료가 아닌 곳도 있습니다." },
    { e: "There's a QR code on the wall — it's the same map.", k: "벽에 큐알 코드 있어요. 같은 지도예요.",
      n: "종이 대신 폰으로 보는 경우입니다." }
  ]
},

"What's this one about?": {
  where: "작품 앞에서 같이 온 사람에게",
  lines: [
    { w: "them", e: "I've been staring at this for ages.", k: "이거 한참 보고 있어요." },
    { w: "me", e: "What's this one about? I can't work it out.", k: "이 작품은 무슨 내용이에요? 모르겠어요." },
    { w: "them", e: "The label says it's about war. I'd never have guessed.", k: "설명에는 전쟁에 관한 거래요. 전혀 몰랐어요." }
  ],
  replies: [
    { e: "The label says it's about war. I'd never have guessed.", k: "설명에는 전쟁에 관한 거래요. 전혀 몰랐어요.",
      n: "★ label = 작품 옆 설명 카드. I'd never have guessed = 전혀 몰랐다." },
    { e: "No idea, but I like it anyway.", k: "모르겠는데, 그래도 좋아요.",
      n: "anyway = 그래도." },
    { e: "Honestly? I think it's meant to be confusing.", k: "솔직히요? 일부러 헷갈리게 만든 것 같아요.",
      n: "meant to be ~ = 일부러 ~하게 만든." },
    { e: "Let me look it up. The audio guide might explain it.", k: "찾아볼게요. 오디오 가이드에 설명이 있을 거예요.",
      n: "look it up = 찾아보다." }
  ]
},

"Who painted this?": {
  where: "작가가 궁금할 때",
  lines: [
    { w: "me", e: "Who painted this? There's no label.", k: "이거 누가 그렸어요? 설명이 없네요." },
    { w: "them", e: "It's a Turner, I think. Let me check.", k: "터너 작품인 것 같아요. 확인해 볼게요." },
    { w: "me", e: "Thank you.", k: "고맙습니다." }
  ],
  replies: [
    { e: "It's a Turner, I think. Let me check.", k: "터너 작품인 것 같아요. 확인해 볼게요.",
      n: "★ a Turner = 터너의 작품 한 점. 작가 이름을 작품 대신 씁니다." },
    { e: "We don't know, actually. It's unattributed.", k: "사실 몰라요. 작가 미상이에요.",
      n: "★ unattributed = 작가를 모르는. 오래된 작품에 흔합니다." },
    { e: "The label's on the other side of the frame.", k: "설명이 액자 반대쪽에 있어요.",
      n: "frame = 액자." },
    { e: "One of his students, not the master himself.", k: "제자 중 한 명이요, 스승 본인이 아니고요.",
      n: "★ the master = 그 대가 본인. 공방 작품일 때 이렇게 말합니다." }
  ]
},

"Is this the original?": {
  where: "유명한 작품 앞에서",
  lines: [
    { w: "me", e: "Is this the original?", k: "이거 진품이에요?" },
    { w: "them", e: "It is. The one in Paris is the copy, funnily enough.", k: "네. 웃기게도 파리에 있는 게 복제품이에요." },
    { w: "me", e: "Really? I had no idea.", k: "정말요? 전혀 몰랐어요." }
  ],
  replies: [
    { e: "It is. The one in Paris is the copy, funnily enough.", k: "네. 웃기게도 파리에 있는 게 복제품이에요.",
      n: "★ funnily enough = 웃기게도, 공교롭게도." },
    { e: "No, it's a replica. The original's too fragile to travel.", k: "아뇨, 복제품이에요. 진품은 너무 약해서 못 옮겨요.",
      n: "★ replica = 복제품. fragile = 부서지기 쉬운." },
    { e: "Yes — that's why the lighting is so low in here.", k: "네, 그래서 여기 조명이 이렇게 어두운 거예요.",
      n: "진품 보존을 위해 조명을 낮춥니다." },
    { e: "Good question. It's on loan, so only until March.", k: "좋은 질문이에요. 대여 작품이라 3월까지만 있어요.",
      n: "★ on loan = 다른 곳에서 빌려온. 특별전에 흔합니다." }
  ]
},

"I could look at this all day.": {
  where: "마음에 드는 작품 앞에서",
  lines: [
    { w: "them", e: "You've been here a while.", k: "여기 꽤 계시네요." },
    { w: "me", e: "I could look at this all day. The colours are unreal.", k: "이건 하루 종일 봐도 좋겠어요. 색이 말도 안 돼요." },
    { w: "them", e: "It's different up close, isn't it?", k: "가까이서 보면 다르죠?" }
  ],
  replies: [
    { e: "It's different up close, isn't it?", k: "가까이서 보면 다르죠?",
      n: "★ up close = 가까이서. 그림 이야기에 자주 나옵니다." },
    { e: "Photos really don't capture it.", k: "사진으로는 정말 안 담겨요.",
      n: "don't capture it = 담아내지 못한다." },
    { e: "Come back at closing time. Hardly anyone's here.", k: "닫기 직전에 와 보세요. 사람이 거의 없어요.",
      n: "Hardly anyone = 거의 아무도 없다." },
    { e: "Same. I come just for this one.", k: "저도요. 이거 하나 보러 와요.",
      n: "just for this one = 이것 하나 때문에." }
  ]
},

"Where do I buy tickets?": {
  where: "입구에 들어서며",
  lines: [
    { w: "me", e: "Excuse me, where do I buy tickets?", k: "실례합니다, 표는 어디서 사요?" },
    { w: "them", e: "Desk on your right. Or online — it's cheaper.", k: "오른쪽 데스크요. 아니면 온라인이 더 싸요." },
    { w: "me", e: "Oh, I'll check online then. Thanks.", k: "아, 그럼 온라인으로 볼게요. 고맙습니다." }
  ],
  replies: [
    { e: "Desk on your right. Or online — it's cheaper.", k: "오른쪽 데스크요. 아니면 온라인이 더 싸요.",
      n: "★ 온라인이 싸다고 알려 주는 경우가 많습니다. desk = 매표소." },
    { e: "It's free entry. You just walk in.", k: "무료예요. 그냥 들어가시면 돼요.",
      n: "★ free entry = 무료 입장. 영국 국립 박물관은 대개 무료입니다." },
    { e: "Machines by the door, or the queue over there.", k: "문 옆 기계나, 저쪽 줄이요.",
      n: "Machines = 무인 발권기. 동사 없이 명사만 던집니다." },
    { e: "You'll need to book a time slot first.", k: "먼저 시간대를 예약하셔야 해요.",
      n: "★ time slot = 입장 시간대. 요즘은 예약제인 곳이 많습니다." }
  ]
},

"Where can I find the Monet room?": {
  where: "보고 싶은 작가를 찾아",
  lines: [
    { w: "me", e: "Where can I find the Monet room?", k: "모네 전시실이 어디예요?" },
    { w: "them", e: "Second floor, turn left at the top of the stairs.", k: "2층이요, 계단 올라가서 왼쪽이요." },
    { w: "me", e: "Thank you so much.", k: "정말 고맙습니다." }
  ],
  replies: [
    { e: "Second floor, turn left at the top of the stairs.", k: "2층이요, 계단 올라가서 왼쪽이요.",
      n: "at the top of the stairs = 계단 끝에서." },
    { e: "Room twelve. It's on the map, here.", k: "12번 방이요. 지도에 있어요, 여기요.",
      n: "지도를 건네줍니다. Room 번호로 안내하는 곳이 많아요." },
    { e: "They've moved it, actually. It's in the east wing now.", k: "사실 옮겼어요. 지금은 동관에 있어요.",
      n: "★ wing = 건물의 한쪽 동. east wing = 동쪽 건물." },
    { e: "That one's closed for restoration, I'm afraid.", k: "아쉽지만 그 방은 복원 작업으로 닫았어요.",
      n: "★ restoration = 복원. 전시실이 닫히는 흔한 이유입니다." }
  ]
},

"Is photography allowed?": {
  where: "작품 앞에서 폰을 들다가",
  lines: [
    { w: "me", e: "Sorry, is photography allowed?", k: "죄송한데, 사진 찍어도 되나요?" },
    { w: "them", e: "Yes, but no flash please.", k: "네, 다만 플래시는 안 됩니다." },
    { w: "me", e: "Understood, thank you.", k: "알겠습니다, 고맙습니다." }
  ],
  replies: [
    { e: "Yes, but no flash please.", k: "네, 다만 플래시는 안 됩니다.",
      n: "★ 가장 흔한 답입니다. 플래시가 작품을 상하게 해서요." },
    { e: "In this room, yes. Not in the next one.", k: "이 방은 돼요. 다음 방은 안 되고요.",
      n: "방마다 규정이 다른 경우입니다." },
    { e: "For personal use only, not commercial.", k: "개인 소장용만요, 상업용은 안 돼요.",
      n: "★ personal use = 개인적으로 쓰는 것. 에스엔에스는 대개 괜찮습니다." },
    { e: "Sorry, not with the special exhibition.", k: "죄송해요, 특별전은 안 돼요.",
      n: "special exhibition = 특별 전시. 대여 작품이라 금지인 경우가 많아요." }
  ]
},

"Is there an audio guide in English?": {
  where: "안내 데스크에서",
  lines: [
    { w: "me", e: "Is there an audio guide in English?", k: "영어 오디오 가이드 있어요?" },
    { w: "them", e: "There is. It's five pounds, or free on the app.", k: "있어요. 5파운드고요, 앱으로는 무료예요." },
    { w: "me", e: "I'll use the app. Thank you.", k: "앱으로 할게요. 고맙습니다." }
  ],
  replies: [
    { e: "There is. It's five pounds, or free on the app.", k: "있어요. 5파운드고요, 앱으로는 무료예요.",
      n: "★ 요즘은 앱으로 무료인 곳이 많습니다. 이어폰을 챙겨 가세요." },
    { e: "Yes — bring your own headphones though.", k: "네, 다만 이어폰은 직접 가져오셔야 해요.",
      n: "your own = 본인 것. though 가 끝에 붙어 '다만'." },
    { e: "Not for this exhibition, sorry. Just the leaflet.", k: "이 전시는 없어요, 죄송해요. 안내지만 있어요.",
      n: "★ leaflet = 종이 안내지(영국). 미국은 brochure." },
    { e: "There's a QR code by each piece instead.", k: "대신 작품마다 큐알 코드가 있어요.",
      n: "★ piece = 작품 한 점. instead = 대신에." }
  ]
},

"Where's the nearest place to eat?": {
  where: "구경을 마치고 배가 고플 때",
  lines: [
    { w: "me", e: "Where's the nearest place to eat?", k: "제일 가까운 먹을 데가 어디예요?" },
    { w: "them", e: "There's a café downstairs, or loads of places across the road.", k: "아래층에 카페 있고요, 길 건너에 많아요." },
    { w: "me", e: "Across the road sounds good. Thanks.", k: "길 건너가 좋겠네요. 고맙습니다." }
  ],
  replies: [
    { e: "There's a café downstairs, or loads of places across the road.", k: "아래층에 카페 있고요, 길 건너에 많아요.",
      n: "★ loads of = 아주 많은(영국). a lot of 와 같습니다." },
    { e: "The café here's pricey. I'd walk five minutes.", k: "여기 카페는 비싸요. 저라면 오 분 걸어가겠어요.",
      n: "★ pricey = 비싼. I'd = 저라면 ~하겠다, 조언입니다." },
    { e: "Depends what you fancy. Sandwiches or a sit-down?", k: "뭐 드시고 싶으냐에 따라요. 샌드위치요, 앉아서 드실 거예요?",
      n: "★ a sit-down = 앉아서 먹는 제대로 된 식사." },
    { e: "Nothing close, I'm afraid. Nearest is the services.", k: "아쉽지만 가까운 덴 없어요. 제일 가까운 게 휴게소예요.",
      n: "★ services = 고속도로 휴게소(영국). 미국은 rest stop." }
  ]
},

"Sorry, I'd rather not. I'm terrible at photos.": {
  where: "사진을 찍어 달라는 부탁을 받고",
  lines: [
    { w: "them", e: "Excuse me, could you take a photo of us?", k: "실례합니다, 저희 사진 좀 찍어 주실 수 있어요?" },
    { w: "me", e: "Sorry, I'd rather not. I'm terrible at photos.", k: "죄송해요, 사양할게요. 사진을 정말 못 찍어서요." },
    { w: "them", e: "No worries at all! We'll ask someone else.", k: "전혀 괜찮아요! 다른 분한테 부탁할게요." }
  ],
  replies: [
    { e: "No worries at all! We'll ask someone else.", k: "전혀 괜찮아요! 다른 분한테 부탁할게요.",
      n: "★ 거절해도 전혀 기분 나빠하지 않습니다. 편하게 거절하세요." },
    { e: "Oh come on, anyone can press a button!", k: "에이, 누르기만 하면 되는데요!",
      n: "★ Oh come on = 에이, 그러지 마시고. 장난스럽게 조르는 말." },
    { e: "That's okay. Thanks anyway!", k: "괜찮아요. 그래도 고마워요!",
      n: "Thanks anyway = 안 됐어도 고맙다. 거절당했을 때 하는 인사." },
    { e: "Honestly same, I always cut people's heads off.", k: "저도 그래요, 늘 머리를 잘라 먹어요.",
      n: "★ cut people's heads off = 사진에서 머리가 잘리다. 농담입니다." }
  ]
},

"I'll try, but I'm really bad at this.": {
  where: "부탁을 받아들이면서 미리 말해 둘 때",
  lines: [
    { w: "them", e: "Would you mind taking one of us?", k: "저희 사진 한 장 찍어 주실 수 있을까요?" },
    { w: "me", e: "I'll try, but I'm really bad at this.", k: "해볼게요, 근데 제가 정말 못 찍어요." },
    { w: "them", e: "Anything's fine, honestly. Just press the big button.", k: "아무거나 괜찮아요, 진짜로. 큰 버튼만 누르시면 돼요." }
  ],
  replies: [
    { e: "Anything's fine, honestly. Just press the big button.", k: "아무거나 괜찮아요, 진짜로. 큰 버튼만 누르시면 돼요.",
      n: "Anything's fine = 아무거나 괜찮다. 부담을 덜어 주는 말." },
    { e: "Ha, you can't be worse than my husband.", k: "하하, 저희 남편보다 못 찍진 않으실 거예요.",
      n: "★ can't be worse than ~ = ~보다 나쁠 수는 없다. 농담입니다." },
    { e: "Take a few and we'll pick one!", k: "몇 장 찍어 주시면 저희가 고를게요!",
      n: "a few = 몇 장. 여러 장 찍어 주면 좋습니다." },
    { e: "Just get the building behind us, that's all we need.", k: "저희 뒤에 건물만 나오게요, 그거면 돼요.",
      n: "that's all we need = 그것만 되면 된다." }
  ]
},

/* ---------- 최애 자랑하기 ---------- */

"The whole show tells a story.": {
  where: "공연이 끝나고 나오며",
  lines: [
    { w: "them", e: "I wasn't expecting it to be that... put together?", k: "이렇게까지… 짜임새 있을 줄은 몰랐어요." },
    { w: "me", e: "I know. The whole show tells a story — beginning, middle, end.", k: "그쵸. 공연 전체가 하나의 이야기예요. 시작, 중간, 끝이 있어요." },
    { w: "them", e: "That's rare. Most shows are just a list of songs.", k: "드문 일이에요. 보통은 그냥 곡 나열이잖아요." }
  ],
  replies: [
    { e: "That's rare. Most shows are just a list of songs.", k: "드문 일이에요. 보통은 그냥 곡 나열이잖아요.",
      n: "★ a list of songs = 곡을 그냥 늘어놓은 것. 짜임새가 없다는 뜻." },
    { e: "And the pacing! It never drags.", k: "게다가 완급 조절이요! 처지는 데가 없어요.",
      n: "★ pacing = 흐름의 완급. drag = 늘어지다." },
    { e: "By the end I'd forgotten I was standing.", k: "끝날 때쯤엔 서 있는 것도 잊었어요.",
      n: "I'd = I had. 몰입했다는 뜻의 칭찬입니다." },
    { e: "You can tell someone thought about the order.", k: "곡 순서를 누가 고민한 게 보여요.",
      n: "the order = 곡 순서. thought about = 고민했다." }
  ]
},

"Every song has its own concept.": {
  where: "무대 전환을 보며",
  lines: [
    { w: "them", e: "The set changed again! That's the fourth time.", k: "세트가 또 바뀌었어요! 벌써 네 번째예요." },
    { w: "me", e: "Every song has its own concept. And he's singing live through all of it.", k: "곡마다 컨셉이 뚜렷해요. 게다가 전부 라이브로 부르고요." },
    { w: "them", e: "Live and dancing like that. That's the part I can't get over.", k: "라이브로 저렇게 춤까지요. 그게 제일 믿기지 않아요." }
  ],
  replies: [
    { e: "Live and dancing like that. That's the part I can't get over.", k: "라이브로 저렇게 춤까지요. 그게 제일 믿기지 않아요.",
      n: "★ can't get over = 도저히 믿기지 않는다. 좋은 뜻입니다." },
    { e: "The set design alone must have cost a fortune.", k: "무대 세트만 해도 엄청 들었겠어요.",
      n: "★ cost a fortune = 돈이 엄청 들다. alone = ~만 해도." },
    { e: "Each one feels like a different show.", k: "하나하나가 다른 공연 같아요.",
      n: "feels like ~ = ~처럼 느껴진다." },
    { e: "No backing track either. That's all him.", k: "반주에 녹음도 안 깔아요. 다 본인이에요.",
      n: "★ backing track = 미리 녹음해 깔아 두는 소리. That's all him = 전부 본인이 하는 것." }
  ]
},

"He always thanks his dancers and band.": {
  where: "앙코르에서 스태프를 소개할 때",
  lines: [
    { w: "them", e: "He's bringing everyone out on stage.", k: "다 무대로 불러내네요." },
    { w: "me", e: "He always thanks his dancers and band. Every single show.", k: "늘 댄서랑 밴드에게 고마워해요. 매 공연마다요." },
    { w: "them", e: "That says a lot about someone.", k: "그거 보면 사람 됨됨이가 보이죠." }
  ],
  replies: [
    { e: "That says a lot about someone.", k: "그거 보면 사람 됨됨이가 보이죠.",
      n: "★ says a lot about ~ = ~에 대해 많은 걸 말해 준다. 됨됨이를 뜻합니다." },
    { e: "He names them one by one, did you notice?", k: "한 명씩 이름을 부르던데, 보셨어요?",
      n: "one by one = 하나씩. did you notice? = 알아채셨어요?" },
    { e: "The crew look like they actually enjoy working with him.", k: "스태프들이 같이 일하는 걸 정말 즐거워하는 것 같아요.",
      n: "★ crew = 함께 일하는 사람들. look like they ~ = ~해 보인다." },
    { e: "That's why people stay with him for years.", k: "그러니까 사람들이 몇 년씩 같이 하는 거죠.",
      n: "stay with him = 곁에 남다. 오래 함께한다는 뜻." }
  ]
},

"Have you seen Hope on the Street?": {
  where: "줄 서서 콘텐츠 이야기가 나왔을 때",
  lines: [
    { w: "them", e: "I'm quite new. What should I watch first?", k: "저 아직 초보예요. 뭐부터 봐야 해요?" },
    { w: "me", e: "Have you seen Hope on the Street? He goes and learns from street dance masters.", k: "홉 온 더 스트릿 보셨어요? 스트릿 댄스 고수들을 찾아가 배우는 거예요." },
    { w: "them", e: "Wait, he's already that good and he's still learning?", k: "잠깐만요, 이미 그렇게 잘하는데 또 배운다고요?" }
  ],
  replies: [
    { e: "Wait, he's already that good and he's still learning?", k: "잠깐만요, 이미 그렇게 잘하는데 또 배운다고요?",
      n: "★ already that good = 이미 그만큼 잘하는. 감탄하며 되묻는 말." },
    { e: "Adding it to my list right now.", k: "지금 바로 볼 목록에 넣을게요.",
      n: "I'm 이 빠진 Adding it ~. my list = 볼 것 목록." },
    { e: "Oh, that's the one with the different dance styles?", k: "아, 여러 춤 장르 나오는 그거요?",
      n: "★ the one with ~ = ~가 나오는 그거. 제목이 헷갈릴 때 이렇게 짚습니다." },
    { e: "Twice. It's what got me into him, honestly.", k: "두 번 봤어요. 솔직히 그거 보고 빠졌어요.",
      n: "★ got me into him = 그를 좋아하게 만들었다. 입덕 계기를 말하는 표현." }
  ]
},

"The man is a genius.": {
  where: "그 콘텐츠 이야기를 이어가며",
  lines: [
    { w: "them", e: "So he just learns the dance and that's it?", k: "그럼 춤만 배우고 끝이에요?" },
    { w: "me", e: "No — he writes a song for each theme, learns the dance, and turns it into a whole series. The man is a genius.", k: "아뇨. 주제마다 곡을 쓰고, 거기 맞는 춤을 배워서, 그걸 하나의 시리즈로 만들어요. 그 사람 천재예요." },
    { w: "them", e: "Okay, that's actually ridiculous. In a good way.", k: "와, 그건 진짜 말도 안 되네요. 좋은 뜻으로요." }
  ],
  replies: [
    { e: "Okay, that's actually ridiculous. In a good way.", k: "와, 그건 진짜 말도 안 되네요. 좋은 뜻으로요.",
      n: "★ ridiculous 는 원래 '터무니없다'인데, in a good way 를 붙이면 최고의 칭찬이 됩니다." },
    { e: "Most people can do one of those things. Not all four.", k: "보통은 그중 하나만 해도 대단해요. 네 가지를 다는 아니고요.",
      n: "one of those things = 그것들 중 하나. 대단함을 셈으로 보여 줍니다." },
    { e: "And he makes it look like a hobby.", k: "게다가 취미처럼 해내요.",
      n: "makes it look like ~ = ~처럼 보이게 한다. 쉬워 보인다는 칭찬." },
    { e: "Genius is the right word, honestly.", k: "천재라는 말이 딱 맞아요, 정말로.",
      n: "★ is the right word = 그 말이 딱 맞다. 상대 말을 받아 주는 방식." }
  ]
},

"He's even better in person.": {
  where: "무대에 등장한 직후, 옆자리 팬과",
  lines: [
    { w: "them", e: "Oh my god, there he is!", k: "세상에, 나왔다!" },
    { w: "me", e: "He's even better in person. The photos don't do him justice.", k: "실물이 훨씬 낫네요. 사진이 실물을 못 담아요." },
    { w: "them", e: "Right? And he looks so happy to be here.", k: "그쵸? 여기 있는 게 정말 행복해 보여요." }
  ],
  replies: [
    { e: "Right? And he looks so happy to be here.", k: "그쵸? 여기 있는 게 정말 행복해 보여요.",
      n: "★ photos don't do him justice = 사진이 실물만 못하다. 통째로 외워 두면 좋습니다." },
    { e: "I know! The screens don't even capture it.", k: "그러니까요! 화면으로도 다 안 담겨요.",
      n: "capture = 담아내다. I know 는 '내 말이'라는 맞장구." },
    { e: "Wait till he's closer. You'll lose it.", k: "가까이 오면 보세요. 정신 못 차릴걸요.",
      n: "Wait till ~ = ~하면 더 놀라실 거예요." },
    { e: "And he's been on a plane all day! How?", k: "게다가 하루 종일 비행기 탔는데! 어떻게 저래요?",
      n: "How? 한 단어로 감탄을 대신합니다." }
  ]
},

"His dancing is on another level.": {
  where: "댄스 무대가 끝나고",
  lines: [
    { w: "them", e: "Did you see that footwork?", k: "그 발놀림 보셨어요?" },
    { w: "me", e: "His dancing is on another level. Nobody moves like that.", k: "춤이 차원이 달라요. 저렇게 움직이는 사람 없어요." },
    { w: "them", e: "And he makes it look easy, that's the scary part.", k: "게다가 쉬워 보이게 하잖아요, 그게 무서운 거죠." }
  ],
  replies: [
    { e: "And he makes it look easy, that's the scary part.", k: "게다가 쉬워 보이게 하잖아요, 그게 무서운 거죠.",
      n: "★ makes it look easy = 쉬워 보이게 한다. 최고의 칭찬입니다." },
    { e: "He's been dancing since he was a kid, you know.", k: "어릴 때부터 춤췄대요, 아시죠.",
      n: "since he was a kid = 어릴 때부터. 문장 끝의 you know 는 '아시다시피'." },
    { e: "Honestly, he could dance in his sleep.", k: "솔직히 자면서도 출 것 같아요.",
      n: "★ in his sleep = 자면서도. 몸에 완전히 뱄다는 과장된 칭찬." },
    { e: "The control! Not one wasted move.", k: "그 절제력! 버리는 동작이 하나도 없어요.",
      n: "control = 몸을 다루는 절제력. wasted move = 헛된 동작." }
  ]
},

"He works so hard.": {
  where: "공연 중간, 땀에 젖은 모습을 보고",
  lines: [
    { w: "them", e: "He hasn't stopped once.", k: "한 번도 안 쉬었어요." },
    { w: "me", e: "He works so hard. And he's such a professional about it.", k: "정말 열심히 해요. 게다가 아주 프로답고요." },
    { w: "them", e: "Two hours straight and not one mistake.", k: "두 시간 내리 하는데 실수 하나 없어요." }
  ],
  replies: [
    { e: "Two hours straight and not one mistake.", k: "두 시간 내리 하는데 실수 하나 없어요.",
      n: "★ straight = 쉬지 않고 내리. not one = 하나도 없는." },
    { e: "They say he rehearses more than anyone.", k: "누구보다 연습을 많이 한대요.",
      n: "★ They say ~ = ~라고들 해요. rehearse = 연습하다." },
    { e: "He plans everything down to the second.", k: "초 단위까지 다 계획해요.",
      n: "★ down to the second = 초 단위까지. 꼼꼼함을 말하는 표현." },
    { e: "That's why he's lasted this long.", k: "그러니까 이렇게 오래 가는 거죠.",
      n: "lasted = 버텨 왔다. 오래 활동한다는 뜻." }
  ]
},

"He never lets us down.": {
  where: "공연이 끝나고 나오면서",
  lines: [
    { w: "them", e: "I had such high expectations and somehow it was more.", k: "기대를 엄청 했는데 그 이상이었어요." },
    { w: "me", e: "He never lets us down. This show was perfect.", k: "실망시키는 법이 없어요. 이번 공연 완벽했어요." },
    { w: "them", e: "Every single time. I don't know how he does it.", k: "매번 그래요. 어떻게 하는지 모르겠어요." }
  ],
  replies: [
    { e: "Every single time. I don't know how he does it.", k: "매번 그래요. 어떻게 하는지 모르겠어요.",
      n: "★ Every single time = 한 번도 빠짐없이. single 이 강조입니다." },
    { e: "He raises the bar every tour, honestly.", k: "솔직히 투어마다 기준을 높여요.",
      n: "★ raise the bar = 기준을 더 높이다." },
    { e: "That's why I keep coming back.", k: "그래서 계속 오는 거예요.",
      n: "keep coming back = 계속 다시 오다." },
    { e: "Worth every hour of that flight.", k: "비행기 탄 시간이 하나도 안 아까워요.",
      n: "Worth every ~ = ~ 하나하나가 아깝지 않다." }
  ]
},

"He writes his own songs.": {
  where: "곡 이야기가 나왔을 때",
  lines: [
    { w: "them", e: "This track is so different from the last album.", k: "이 곡은 지난 앨범이랑 완전히 다르네요." },
    { w: "me", e: "He writes his own songs, so it changes with him.", k: "곡을 직접 쓰니까, 본인이 변하면 곡도 변하죠." },
    { w: "them", e: "I didn't know that. That explains a lot.", k: "몰랐어요. 그래서 그렇구나." }
  ],
  replies: [
    { e: "I didn't know that. That explains a lot.", k: "몰랐어요. 그래서 그렇구나.",
      n: "★ That explains a lot = 그래서 그랬구나. 이해됐다는 뜻." },
    { e: "Produces a lot of it too, doesn't he?", k: "프로듀싱도 많이 하죠, 그쵸?",
      n: "★ 끝의 doesn't he? 는 '그렇죠?'라는 확인. 앞의 He 가 생략됐습니다." },
    { e: "You can hear it. It sounds like him.", k: "들으면 알아요. 그 사람 느낌이 나요.",
      n: "sounds like him = 그 사람다운 소리가 난다." },
    { e: "And everything he makes is good. No filler.", k: "게다가 만드는 것마다 좋아요. 버릴 게 없어요.",
      n: "★ filler = 채우려고 넣은 곡. No filler = 버릴 곡이 없다." }
  ]
},

"He knows how to own a stage.": {
  where: "무대 연출이 좋았을 때",
  lines: [
    { w: "them", e: "That lighting change was insane.", k: "그 조명 바뀌는 거 미쳤어요." },
    { w: "me", e: "He knows how to own a stage. Every moment is planned.", k: "무대를 장악할 줄 알아요. 순간순간이 다 계획된 거예요." },
    { w: "them", e: "You can tell he's involved in the whole thing.", k: "전부 직접 관여하는 게 보여요." }
  ],
  replies: [
    { e: "You can tell he's involved in the whole thing.", k: "전부 직접 관여하는 게 보여요.",
      n: "★ involved in = ~에 관여하는. the whole thing = 전체." },
    { e: "It's like a film, not just a concert.", k: "공연이 아니라 영화 같아요.",
      n: "It's like ~ = 마치 ~ 같다." },
    { e: "Even the transitions are thought through.", k: "곡 사이 넘어가는 것까지 다 생각해 놨어요.",
      n: "★ transitions = 무대 전환. thought through = 끝까지 생각해 둔." },
    { e: "Nobody does staging like him.", k: "무대 연출은 아무도 못 따라가요.",
      n: "staging = 무대를 꾸미고 짜는 것." }
  ]
},

"He's the whole package.": {
  where: "최애 이야기를 정리하듯",
  lines: [
    { w: "them", e: "So what made him your bias?", k: "그래서 왜 최애가 된 거예요?" },
    { w: "me", e: "Honestly? He's the whole package. Dance, music, everything.", k: "솔직히요? 다 갖췄어요. 춤, 음악, 전부요." },
    { w: "them", e: "Hard to argue with that.", k: "반박할 수가 없네요." }
  ],
  replies: [
    { e: "Hard to argue with that.", k: "반박할 수가 없네요.",
      n: "★ Hard to argue with that = 맞는 말이라 할 말이 없다. It's 가 생략." },
    { e: "Same for me. And he's kind with it.", k: "저도요. 게다가 성격도 좋고요.",
      n: "★ kind with it = 그 와중에 착하기까지. 덧붙이는 말입니다." },
    { e: "See, that's why everyone ends up loving him.", k: "봐요, 그래서 다들 결국 좋아하게 돼요.",
      n: "★ end up -ing = 결국 ~하게 되다." },
    { e: "Fair. Mine's more of a vibe thing, honestly.", k: "그러네요. 저는 그냥 느낌이에요, 솔직히.",
      n: "★ a vibe thing = 설명하기 힘든 느낌. Fair = 그 말 맞네요." }
  ]
},

"You can tell he really cares.": {
  where: "팬들에게 인사하는 모습을 보고",
  lines: [
    { w: "them", e: "He's been talking to us for ten minutes.", k: "벌써 십 분째 우리한테 말하고 있어요." },
    { w: "me", e: "You can tell he really cares. It's not an act.", k: "진심인 게 보여요. 꾸며낸 게 아니에요." },
    { w: "them", e: "That's the bit that gets me, every time.", k: "저는 그 부분에서 매번 울컥해요." }
  ],
  replies: [
    { e: "That's the bit that gets me, every time.", k: "저는 그 부분에서 매번 울컥해요.",
      n: "★ gets me = 마음을 울린다. the bit = 그 부분." },
    { e: "He remembers things fans said years ago.", k: "몇 년 전에 팬들이 한 말도 기억해요.",
      n: "years ago = 몇 년 전에." },
    { e: "It's why this fandom is the way it is.", k: "그래서 이 팬덤이 이런 거예요.",
      n: "the way it is = 지금 이런 모습. 따뜻하다는 뜻입니다." },
    { e: "Don't. I'm already crying.", k: "그만하세요. 저 벌써 울어요.",
      n: "★ Don't. 한 단어로 '그 얘기 하지 마세요'. 감동해서 하는 말." }
  ]
},

/* ---------- 택시 · 차 부르기 ---------- */

"I'd like to return this.": {
  where: "반품 창구에서",
  lines: [
    { w: "me", e: "Hi, I'd like to return this.", k: "안녕하세요, 이거 반품하려고요." },
    { w: "them", e: "No problem. Was there anything wrong with it?", k: "네. 뭐 문제가 있었나요?" },
    { w: "me", e: "No, it just doesn't fit.", k: "아뇨, 그냥 안 맞아서요." }
  ],
  replies: [
    { e: "No problem. Was there anything wrong with it?", k: "네. 뭐 문제가 있었나요?", n: "이유를 묻지만 '그냥 안 맞아서'면 충분합니다." },
    { e: "Sure. Do you have the receipt with you?", k: "네. 영수증 가져오셨어요?", n: "★ 영수증이 없으면 상품권으로만 돌려주는 곳이 많습니다." },
    { e: "Of course. Refund or exchange?", k: "네. 환불이요, 교환이요?", n: "둘 중 하나를 고르면 됩니다." },
    { e: "Is it within twenty-eight days?", k: "구매 후 28일 이내인가요?", n: "★ within ~ days = ~일 이내. 반품 기한이 있습니다." }
  ]
},

"It doesn't fit.": {
  where: "반품 이유를 말할 때",
  lines: [
    { w: "them", e: "Any particular reason for the return?", k: "반품하시는 특별한 이유가 있으세요?" },
    { w: "me", e: "It doesn't fit. It's a bit tight on the shoulders.", k: "안 맞아요. 어깨가 좀 껴요." },
    { w: "them", e: "Ah, that's common with this one. Want to try a larger size?", k: "아, 이건 다들 그러세요. 더 큰 걸로 해보시겠어요?" }
  ],
  replies: [
    { e: "Ah, that's common with this one. Want to try a larger size?", k: "아, 이건 다들 그러세요. 더 큰 걸로 해보시겠어요?",
      n: "★ that's common = 흔한 일이다. 교환을 권합니다." },
    { e: "No worries, that's a valid reason. Card you paid with?", k: "괜찮아요, 정당한 사유예요. 결제하신 카드 주시겠어요?",
      n: "★ 결제한 카드로 돌려줍니다. 그 카드를 가져가세요." },
    { e: "Has it been worn?", k: "입으셨어요?", n: "★ worn = 입은. 입은 옷은 반품이 안 되는 곳도 있습니다." },
    { e: "Happens all the time. Tags still on?", k: "자주 있어요. 택은 그대로 있죠?", n: "★ tags = 상표 택. 떼면 반품이 어려워집니다." }
  ]
},

"Can I exchange it for a bigger size?": {
  where: "교환하고 싶을 때",
  lines: [
    { w: "me", e: "Can I exchange it for a bigger size?", k: "더 큰 사이즈로 교환돼요?" },
    { w: "them", e: "Let me see what we've got. What size do you need?", k: "뭐가 있는지 볼게요. 어떤 사이즈 필요하세요?" },
    { w: "me", e: "A large, please.", k: "라지요." }
  ],
  replies: [
    { e: "Let me see what we've got. What size do you need?", k: "뭐가 있는지 볼게요. 어떤 사이즈 필요하세요?",
      n: "what we've got = 우리가 가진 것." },
    { e: "We're out of large, but I can order it in.", k: "라지는 없는데, 주문해 드릴 수는 있어요.", n: "★ out of ~ = ~가 다 떨어진. order it in = 들여오다." },
    { e: "Sure. Same price, so no extra charge.", k: "네. 같은 값이라 추가 요금 없어요.", n: "no extra charge = 추가 요금 없음." },
    { e: "Exchange only within fourteen days, and you're on day twelve.", k: "교환은 14일 이내인데, 12일째시네요.", n: "you're on day ~ = ~일째다. 아슬아슬한 경우." }
  ]
},

"I bought it yesterday.": {
  where: "언제 샀는지 말할 때",
  lines: [
    { w: "them", e: "When did you buy this?", k: "이거 언제 사셨어요?" },
    { w: "me", e: "I bought it yesterday. Here's the receipt.", k: "어제 샀어요. 영수증 여기 있어요." },
    { w: "them", e: "Perfect, that makes it easy.", k: "좋아요, 그럼 간단해요." }
  ],
  replies: [
    { e: "Perfect, that makes it easy.", k: "좋아요, 그럼 간단해요.", n: "makes it easy = 일을 쉽게 만든다." },
    { e: "Yesterday? Then it's a full refund.", k: "어제요? 그럼 전액 환불됩니다.", n: "★ full refund = 전액 환불." },
    { e: "Was it this branch or another one?", k: "이 지점에서요, 다른 데서요?", n: "★ branch = 지점. 다른 지점 물건도 대개 받아 줍니다." },
    { e: "I'll need to see the card you used.", k: "결제하신 카드를 봐야 해요.", n: "the card you used = 쓰신 카드." }
  ]
},

"How does this machine work?": {
  where: "셀프 계산대 앞에서",
  lines: [
    { w: "me", e: "Sorry, how does this machine work?", k: "죄송한데, 이 기계 어떻게 써요?" },
    { w: "them", e: "Scan the barcode, then put it in the bagging area.", k: "바코드 찍고, 봉투 놓는 곳에 올려두세요." },
    { w: "me", e: "Ah, I see. Thank you.", k: "아, 알겠어요. 고맙습니다." }
  ],
  replies: [
    { e: "Scan the barcode, then put it in the bagging area.", k: "바코드 찍고, 봉투 놓는 곳에 올려두세요.",
      n: "★ bagging area = 봉투 놓는 자리. 여기 무게를 재고 있어서 딴 걸 올리면 오류가 납니다." },
    { e: "Touch the screen first, then pick your language.", k: "먼저 화면을 누르고, 언어를 고르세요.", n: "★ 대개 영어 말고도 고를 수 있습니다." },
    { e: "Card in at the end. It'll tell you when.", k: "마지막에 카드 넣으세요. 알려 줄 거예요.", n: "It'll tell you = 기계가 알려 준다." },
    { e: "Here, let me do the first one for you.", k: "자, 첫 개는 제가 해 드릴게요.", n: "직원이 시범을 보여 줍니다." }
  ]
},

"It's not scanning.": {
  where: "바코드가 안 읽힐 때",
  lines: [
    { w: "me", e: "Excuse me, it's not scanning.", k: "저기요, 안 찍혀요." },
    { w: "them", e: "Let me have a look. I'll key it in manually.", k: "볼게요. 제가 직접 입력할게요." },
    { w: "me", e: "Thank you.", k: "고맙습니다." }
  ],
  replies: [
    { e: "Let me have a look. I'll key it in manually.", k: "볼게요. 제가 직접 입력할게요.",
      n: "★ key it in manually = 번호를 손으로 치다. 흔한 해결법입니다." },
    { e: "Try turning it around — barcode's on the bottom.", k: "돌려서 해보세요. 바코드가 밑에 있어요.", n: "turning it around = 방향을 돌리다." },
    { e: "That one needs approval. One moment.", k: "그건 승인이 필요해요. 잠시만요.", n: "★ needs approval = 직원 승인이 필요한 물건(술·약 등)." },
    { e: "The whole machine's playing up today. Use number four.", k: "오늘 이 기계가 계속 말썽이에요. 4번 쓰세요.", n: "★ playing up = 말썽을 부리다(영국)." }
  ]
},

"Unexpected item in the bagging area.": {
  where: "셀프 계산대가 갑자기 말할 때",
  lines: [
    { w: "them", e: "Unexpected item in the bagging area. Please remove it.", k: "봉투 놓는 곳에 예상치 못한 물건이 있습니다. 치워 주세요." },
    { w: "me", e: "Sorry, that's my own bag. Could you help?", k: "죄송해요, 제 가방이에요. 도와주실 수 있어요?" },
    { w: "them", e: "Ah, put your bag on the floor. I'll reset it.", k: "아, 가방은 바닥에 두세요. 제가 풀어 드릴게요." }
  ],
  replies: [
    { e: "Ah, put your bag on the floor. I'll reset it.", k: "아, 가방은 바닥에 두세요. 제가 풀어 드릴게요.",
      n: "★ 내 가방을 올려두면 이 오류가 납니다. 바닥이나 카트에 두세요." },
    { e: "Press 'I'm using my own bag' next time.", k: "다음엔 '내 가방 사용' 누르세요.", n: "★ 그 버튼이 있습니다. 미리 누르면 오류가 안 나요." },
    { e: "That happens constantly. Ignore it, I'll clear it.", k: "맨날 그래요. 신경 쓰지 마세요, 제가 풀게요.", n: "constantly = 계속. 직원들도 익숙합니다." },
    { e: "Did you scan that one? Let me check.", k: "그거 찍으셨어요? 확인해 볼게요.", n: "안 찍고 올려놓은 경우도 있습니다." }
  ]
},

"Which aisle is the bread in?": {
  where: "마트에서 물건을 찾을 때",
  lines: [
    { w: "me", e: "Excuse me, which aisle is the bread in?", k: "실례합니다, 빵은 몇 번 통로예요?" },
    { w: "them", e: "Aisle six, back wall. Next to the milk.", k: "6번 통로 안쪽 벽이요. 우유 옆이요." },
    { w: "me", e: "Thank you.", k: "고맙습니다." }
  ],
  replies: [
    { e: "Aisle six, back wall. Next to the milk.", k: "6번 통로 안쪽 벽이요. 우유 옆이요.",
      n: "★ aisle 은 '아일'로 읽습니다. s 를 발음하지 않아요." },
    { e: "Bakery's at the front, past the tills.", k: "빵집은 앞쪽, 계산대 지나서요.", n: "★ bakery = 즉석 빵 코너. tills = 계산대(영국)." },
    { e: "I'll show you — I'm heading that way.", k: "보여 드릴게요. 저도 그쪽 가요.", n: "heading that way = 그쪽으로 가는 중." },
    { e: "Which bread? Fresh or packaged?", k: "어떤 빵이요? 즉석이요, 포장된 거요?", n: "packaged = 포장된." }
  ]
},

"Do you sell SIM cards?": {
  where: "도착 첫날 편의점에서",
  lines: [
    { w: "me", e: "Do you sell SIM cards?", k: "유심 파세요?" },
    { w: "them", e: "We do. Tourist ones are behind the counter.", k: "네. 여행자용은 계산대 뒤에 있어요." },
    { w: "me", e: "Could I see them?", k: "좀 볼 수 있을까요?" }
  ],
  replies: [
    { e: "We do. Tourist ones are behind the counter.", k: "네. 여행자용은 계산대 뒤에 있어요.",
      n: "★ behind the counter = 계산대 뒤. 비싼 물건은 거기 둡니다." },
    { e: "Only eSIMs now. Do you have a newer phone?", k: "이제 이심만요. 폰이 최신인가요?", n: "★ eSIM = 꽂지 않는 유심. 요즘 이쪽으로 바뀌고 있습니다." },
    { e: "You'll need your passport for that.", k: "그거 사시려면 여권 필요해요.", n: "★ 신분 확인이 필요한 나라가 많습니다." },
    { e: "Not here, but the phone shop two doors down does.", k: "여긴 없고, 두 집 건너 휴대폰 가게에 있어요.", n: "★ two doors down = 두 집 건너." }
  ]
},

"Do you have this in stock?": {
  where: "진열대에 없을 때",
  lines: [
    { w: "me", e: "Do you have this in stock? I can't see it on the shelf.", k: "이거 재고 있어요? 선반에 안 보여서요." },
    { w: "them", e: "Let me check the system. What size?", k: "전산 확인해 볼게요. 어떤 사이즈요?" },
    { w: "me", e: "Medium, please.", k: "미디엄이요." }
  ],
  replies: [
    { e: "Let me check the system. What size?", k: "전산 확인해 볼게요. 어떤 사이즈요?", n: "the system = 재고 전산." },
    { e: "We've got two left in the stockroom.", k: "창고에 두 개 남았어요.", n: "★ stockroom = 창고. two left = 두 개 남은." },
    { e: "Sold out here, but the other branch has it.", k: "여긴 다 나갔고, 다른 지점엔 있어요.", n: "branch = 지점." },
    { e: "It's discontinued, I'm afraid.", k: "아쉽지만 단종됐어요.", n: "★ discontinued = 더 이상 안 나오는." }
  ]
},

"How much is it to the city centre?": {
  where: "택시에 타기 전에",
  lines: [
    { w: "me", e: "How much is it to the city centre?", k: "시내까지 얼마예요?" },
    { w: "them", e: "About thirty with the meter.", k: "미터기로 30쯤이요." },
    { w: "me", e: "Okay, let's go.", k: "네, 가죠." }
  ],
  replies: [
    { e: "About thirty with the meter.", k: "미터기로 30쯤이요.", n: "★ with the meter = 미터기로 재면. 좋은 신호입니다." },
    { e: "Fifty, fixed price. No meter.", k: "50 고정이요. 미터기는 안 써요.", n: "★ fixed price = 정액. 비싸면 다른 차를 잡으세요." },
    { e: "Depends on traffic. Forty to sixty.", k: "차 막히기 나름이에요. 40에서 60이요.", n: "폭이 넓게 나오면 미터기를 요청하세요." },
    { e: "Cheaper on the app, honestly.", k: "솔직히 앱이 더 싸요.", n: "기사가 솔직히 알려 주는 경우도 있습니다." }
  ]
},

"Could you use the meter, please?": {
  where: "미터기를 안 켤 때",
  lines: [
    { w: "them", e: "Sixty to the centre, okay?", k: "시내까지 60이요, 괜찮죠?" },
    { w: "me", e: "Could you use the meter, please?", k: "미터기 켜 주시겠어요?" },
    { w: "them", e: "Fine, fine. Meter on.", k: "알겠어요. 미터기 켰어요." }
  ],
  replies: [
    { e: "Fine, fine. Meter on.", k: "알겠어요. 미터기 켰어요.", n: "★ 정중히 요청하면 대개 켭니다. Meter on = 켰습니다." },
    { e: "Meter's broken today, sorry.", k: "오늘 미터기가 고장이에요, 죄송해요.", n: "★ 이 말이 나오면 다른 차를 잡는 게 낫습니다." },
    { e: "Of course, that's the law here.", k: "그럼요, 여긴 법이에요.", n: "that's the law = 법으로 정해진 것." },
    { e: "It's already on. Look.", k: "이미 켜져 있어요. 보세요.", n: "already on = 벌써 켜진." }
  ]
},

"Can you drop me here?": {
  where: "목적지 전에 내리고 싶을 때",
  lines: [
    { w: "me", e: "Actually, can you drop me here?", k: "저, 여기서 내려 주실 수 있어요?" },
    { w: "them", e: "Here? Sure, just give me a second to pull over.", k: "여기요? 네, 잠깐 세울게요." },
    { w: "me", e: "Thank you.", k: "고맙습니다." }
  ],
  replies: [
    { e: "Here? Sure, just give me a second to pull over.", k: "여기요? 네, 잠깐 세울게요.", n: "pull over = 길가에 차를 대다." },
    { e: "Can't stop here. Two hundred metres up okay?", k: "여긴 못 세워요. 200미터 위쪽 괜찮으세요?", n: "up = 앞쪽으로. 정차 금지 구간이 있습니다." },
    { e: "No problem. That's twenty-two on the meter.", k: "그럼요. 미터기로 22입니다.", n: "on the meter = 미터기에 찍힌." },
    { e: "Sure, but it's safer on the other side.", k: "네, 근데 반대편이 더 안전해요.", n: "safer = 더 안전한. 내리는 쪽을 챙겨 줍니다." }
  ]
},

"Keep the change.": {
  where: "현금으로 내며",
  lines: [
    { w: "them", e: "That's eighteen fifty.", k: "18달러 50센트입니다." },
    { w: "me", e: "Here's twenty. Keep the change.", k: "20 드릴게요. 잔돈은 괜찮아요." },
    { w: "them", e: "Thank you, that's kind. Have a good night.", k: "고맙습니다. 좋은 밤 되세요." }
  ],
  replies: [
    { e: "Thank you, that's kind. Have a good night.", k: "고맙습니다. 좋은 밤 되세요.", n: "that's kind = 마음 씀씀이가 고맙다." },
    { e: "Cheers! Need a hand with the bags?", k: "고마워요! 짐 도와드릴까요?", n: "★ a hand = 도움. Need a hand? = 도와드릴까요?" },
    { e: "Are you sure? That's a big tip.", k: "정말요? 팁이 많은데요.", n: "Are you sure? = 괜찮으시겠어요?" },
    { e: "Much appreciated. Enjoy the show!", k: "정말 감사합니다. 공연 재밌게 보세요!", n: "★ Much appreciated = 정말 감사합니다. I 가 생략됐습니다." }
  ]
},

"Where's the ticket machine?": {
  where: "역에 들어서서",
  lines: [
    { w: "me", e: "Where's the ticket machine?", k: "발권기가 어디예요?" },
    { w: "them", e: "Just past the barriers, on your right.", k: "개찰구 지나서 오른쪽이요." },
    { w: "me", e: "Thanks.", k: "고맙습니다." }
  ],
  replies: [
    { e: "Just past the barriers, on your right.", k: "개찰구 지나서 오른쪽이요.", n: "★ barriers = 개찰구(영국). 미국은 turnstiles." },
    { e: "Both sides of the hall. The green ones take cards.", k: "홀 양쪽에요. 초록색 기계가 카드 돼요.", n: "take cards = 카드를 받다." },
    { e: "You don't need one — just tap your bank card.", k: "필요 없어요. 그냥 신용카드 대면 돼요.", n: "★ 런던·뉴욕은 표 없이 카드만 대면 됩니다." },
    { e: "Machines are down. Use the app or the window.", k: "기계가 고장이에요. 앱이나 창구를 쓰세요.", n: "★ are down = 고장 났다. window = 매표 창구." }
  ]
},

"Where do I tap my card?": {
  where: "개찰구 앞에서",
  lines: [
    { w: "me", e: "Sorry, where do I tap my card?", k: "죄송한데, 카드 어디에 찍어요?" },
    { w: "them", e: "The yellow circle on top. Just hold it there.", k: "위에 노란 동그라미요. 대고 계시면 돼요." },
    { w: "me", e: "Got it, thank you.", k: "알겠어요, 고맙습니다." }
  ],
  replies: [
    { e: "The yellow circle on top. Just hold it there.", k: "위에 노란 동그라미요. 대고 계시면 돼요.", n: "★ hold it there = 대고 있어라. 바로 떼면 안 읽힐 때가 있어요." },
    { e: "Same card in and out — don't switch.", k: "탈 때랑 내릴 때 같은 카드로요. 바꾸지 마세요.", n: "★ 다른 카드로 찍으면 요금이 두 배로 나옵니다." },
    { e: "You don't tap here, only on the way out.", k: "여긴 안 찍어요, 나갈 때만요.", n: "on the way out = 나갈 때." },
    { e: "Phone works too, if it's set up.", k: "폰도 돼요, 설정돼 있으면요.", n: "set up = 설정이 된." }
  ]
},

"Is there a day pass?": {
  where: "여러 번 탈 예정일 때",
  lines: [
    { w: "me", e: "Is there a day pass?", k: "하루 이용권 있어요?" },
    { w: "them", e: "There is. Ten pounds, unlimited until midnight.", k: "있어요. 10파운드고, 자정까지 무제한이요." },
    { w: "me", e: "I'll take one.", k: "하나 주세요." }
  ],
  replies: [
    { e: "There is. Ten pounds, unlimited until midnight.", k: "있어요. 10파운드고, 자정까지 무제한이요.", n: "★ unlimited = 무제한. 서너 번 탈 거면 이게 쌉니다." },
    { e: "Not worth it unless you're doing four or more trips.", k: "네 번 이상 안 타면 별로예요.", n: "★ Not worth it = 그럴 값어치가 없다. 솔직한 조언입니다." },
    { e: "We do a weekly, but no daily.", k: "주간권은 있는데 일일권은 없어요.", n: "weekly / daily = 주간권 / 일일권." },
    { e: "Tapping caps out automatically, so you don't need one.", k: "카드 찍으면 알아서 상한이 걸려서, 필요 없어요.", n: "★ caps out = 요금 상한에 걸리다. 런던이 이렇습니다." }
  ]
},

"Which line should I take?": {
  where: "노선도 앞에서",
  lines: [
    { w: "me", e: "Which line should I take for the stadium?", k: "경기장 가려면 몇 호선 타야 해요?" },
    { w: "them", e: "The blue one, five stops. No changes.", k: "파란 노선이요, 다섯 정거장. 갈아탈 것 없어요." },
    { w: "me", e: "Blue line, five stops. Thank you.", k: "파란 노선, 다섯 정거장. 고맙습니다." }
  ],
  replies: [
    { e: "The blue one, five stops. No changes.", k: "파란 노선이요, 다섯 정거장. 갈아탈 것 없어요.", n: "★ 노선을 색으로 부르는 도시가 많습니다. No changes = 환승 없음." },
    { e: "Take the Central, then change at Oxford Circus.", k: "센트럴선 타고 옥스퍼드 서커스에서 갈아타세요.", n: "★ 런던은 노선에 이름이 있습니다. change at ~ = ~에서 갈아타다." },
    { e: "Honestly, the bus is quicker at this time.", k: "솔직히 이 시간엔 버스가 더 빨라요.", n: "at this time = 이 시간대에는." },
    { e: "Either works. The red one's less crowded.", k: "둘 다 돼요. 빨간 게 덜 붐벼요.", n: "★ Either works = 어느 쪽이든 된다. crowded = 붐비는." }
  ]
},

"Is this the right side for downtown?": {
  where: "승강장에서 방향이 헷갈릴 때",
  lines: [
    { w: "me", e: "Is this the right side for downtown?", k: "시내 방향이 이쪽 맞아요?" },
    { w: "them", e: "No, you want the other platform. Cross over there.", k: "아뇨, 반대편이요. 저쪽으로 건너가세요." },
    { w: "me", e: "Oh, thank you! I'd have gone the wrong way.", k: "아, 고맙습니다! 반대로 갈 뻔했어요." }
  ],
  replies: [
    { e: "No, you want the other platform. Cross over there.", k: "아뇨, 반대편이요. 저쪽으로 건너가세요.", n: "★ you want ~ = ~로 가셔야 해요. cross over = 건너가다." },
    { e: "Yeah, this is it. Northbound.", k: "네, 여기 맞아요. 북쪽 방향이요.", n: "★ northbound = 북쪽행. 방향을 이렇게 표시합니다." },
    { e: "Check the board — it changes depending on the train.", k: "전광판 보세요. 열차마다 달라요.", n: "depending on ~ = ~에 따라." },
    { e: "It is, but this one's the slow train.", k: "맞긴 한데, 이건 완행이에요.", n: "slow train = 완행. 급행은 fast 나 express." }
  ]
},

"Can I pay with a card on the bus?": {
  where: "버스에 올라타며",
  lines: [
    { w: "me", e: "Can I pay with a card on the bus?", k: "버스에서 카드로 낼 수 있어요?" },
    { w: "them", e: "Card only, actually. No cash.", k: "사실 카드만 돼요. 현금은 안 받아요." },
    { w: "me", e: "Oh, that's easy then.", k: "아, 그럼 편하네요." }
  ],
  replies: [
    { e: "Card only, actually. No cash.", k: "사실 카드만 돼요. 현금은 안 받아요.", n: "★ 런던 버스가 이렇습니다. 현금을 아예 안 받아요." },
    { e: "Cash only on this route, sorry.", k: "이 노선은 현금만요, 죄송해요.", n: "route = 노선. 반대 경우도 있습니다." },
    { e: "Yes, but exact change if you pay cash.", k: "네, 근데 현금이면 딱 맞게 내셔야 해요.", n: "★ exact change = 정확한 금액. 잔돈을 안 거슬러 줍니다." },
    { e: "Tap on the reader by the driver.", k: "기사님 옆 단말기에 대세요.", n: "reader = 카드 단말기." }
  ]
},

"I need to get off at the next stop.": {
  where: "사람이 많아 문 쪽으로 가며",
  lines: [
    { w: "me", e: "Excuse me, I need to get off at the next stop.", k: "실례합니다, 다음 정거장에서 내려야 해요." },
    { w: "them", e: "No problem, let me move out of your way.", k: "그럼요, 비켜 드릴게요." },
    { w: "me", e: "Thank you.", k: "고맙습니다." }
  ],
  replies: [
    { e: "No problem, let me move out of your way.", k: "그럼요, 비켜 드릴게요.", n: "★ move out of your way = 길을 비켜 주다." },
    { e: "Me too. Follow me through.", k: "저도요. 따라오세요.", n: "through = 사람들 사이로 빠져나가는 것." },
    { e: "Did you press the bell?", k: "벨 누르셨어요?", n: "★ 버스는 벨을 눌러야 섭니다. bell = 하차 벨." },
    { e: "This one? Or the one after?", k: "이번이요? 아니면 그다음이요?", n: "the one after = 그다음 것." }
  ]
},

"Does this train stop at every station?": {
  where: "급행인지 확인할 때",
  lines: [
    { w: "me", e: "Does this train stop at every station?", k: "이 열차 모든 역에 서요?" },
    { w: "them", e: "No, it's the express. It skips the next four.", k: "아뇨, 급행이에요. 다음 네 역은 건너뛰어요." },
    { w: "me", e: "Ah, I'd better get off then.", k: "아, 그럼 내리는 게 낫겠네요." }
  ],
  replies: [
    { e: "No, it's the express. It skips the next four.", k: "아뇨, 급행이에요. 다음 네 역은 건너뛰어요.", n: "★ express = 급행. skips = 건너뛴다." },
    { e: "Yes, this one's the local.", k: "네, 이건 완행이에요.", n: "★ local = 모든 역에 서는 완행. 느리다는 뜻이 아닙니다." },
    { e: "All stops until the river, then it goes fast.", k: "강까지는 다 서고, 그다음부터 빨라져요.", n: "All stops = 모든 역에 정차." },
    { e: "Where are you going? I'll tell you if it stops.", k: "어디 가세요? 서는지 알려 드릴게요.", n: "친절하게 되묻는 경우입니다." }
  ]
},

"How many stops is it?": {
  where: "몇 정거장인지 세어 두고 싶을 때",
  lines: [
    { w: "me", e: "How many stops is it to the museum?", k: "박물관까지 몇 정거장이에요?" },
    { w: "them", e: "Three. You'll see the big park on your left.", k: "세 개요. 왼쪽에 큰 공원 보일 거예요." },
    { w: "me", e: "That helps, thank you.", k: "도움이 되네요, 고맙습니다." }
  ],
  replies: [
    { e: "Three. You'll see the big park on your left.", k: "세 개요. 왼쪽에 큰 공원 보일 거예요.", n: "눈에 띄는 것을 알려 주면 내릴 때가 편합니다." },
    { e: "Four, but it's announced. Listen for it.", k: "네 개요, 근데 방송 나와요. 잘 들어 보세요.", n: "★ announced = 안내 방송이 나온다. Listen for it = 귀 기울이세요." },
    { e: "Two more after this one.", k: "이거 다음으로 두 개 더요.", n: "after this one = 이번 것 다음에." },
    { e: "I'm getting off there too. Follow me.", k: "저도 거기서 내려요. 따라오세요.", n: "가장 마음 놓이는 답입니다." }
  ]
},

"Where can I get a taxi?": {
  where: "공항 도착층에서",
  lines: [
    { w: "me", e: "Excuse me, where can I get a taxi?", k: "실례합니다, 택시 어디서 타요?" },
    { w: "them", e: "Head outside and turn left. Follow the signs.", k: "밖으로 나가서 왼쪽이요. 표지판 따라가세요." },
    { w: "me", e: "Thank you.", k: "고맙습니다." }
  ],
  replies: [
    { e: "Head outside and turn left. Follow the signs.", k: "밖으로 나가서 왼쪽이요. 표지판 따라가세요.",
      n: "★ Head = 가다. Go 대신 아주 자주 씁니다." },
    { e: "Down one level, then out door four.", k: "한 층 내려가서 4번 문으로 나가세요.",
      n: "★ down one level = 한 층 아래. 택시 승강장이 아래층인 공항이 많습니다." },
    { e: "There's a queue just past baggage claim.", k: "수하물 찾는 곳 지나면 줄이 있어요.",
      n: "★ baggage claim = 수하물 찾는 곳. past = 지나서." },
    { e: "Official ones only — don't take the ones inside.", k: "정식 택시만 타세요. 안에서 호객하는 건 타지 마시고요.",
      n: "★ 공항 안에서 말 거는 기사는 피하라는 조언입니다." }
  ]
},

"Where's the pickup point for Grab?": {
  where: "앱으로 차를 부르고 나서",
  lines: [
    { w: "me", e: "Where's the pickup point for Grab?", k: "그랩 타는 곳이 어디예요?" },
    { w: "them", e: "Level three, zone B. It's signposted.", k: "3층 B구역이요. 표지판 있어요." },
    { w: "me", e: "Level three, zone B. Got it.", k: "3층 B구역. 알겠어요." }
  ],
  replies: [
    { e: "Level three, zone B. It's signposted.", k: "3층 B구역이요. 표지판 있어요.",
      n: "★ zone = 구역. 앱 차량은 자리가 정해져 있습니다. signposted = 표지판이 있는." },
    { e: "Same as taxis, but the far end.", k: "택시랑 같은 데인데, 맨 끝이요.",
      n: "the far end = 맨 끝. 같은 승강장의 다른 쪽입니다." },
    { e: "Your app should show it. Check the map.", k: "앱에 나올 거예요. 지도 보세요.",
      n: "should show = 나올 거예요. 앱이 알려 준다는 뜻." },
    { e: "Ride-hailing? Carpark two, ground floor.", k: "앱 차량이요? 2주차장 1층이요.",
      n: "★ ride-hailing = 앱으로 부르는 차. 그랩·우버를 통틀어 이렇게 부릅니다." }
  ]
},

"I'm at Terminal 2, door 5.": {
  where: "기사에게 전화로 위치를 알릴 때",
  lines: [
    { w: "them", e: "Hello? Where exactly are you?", k: "여보세요? 정확히 어디 계세요?" },
    { w: "me", e: "I'm at Terminal 2, door 5. Outside, by the pillar.", k: "2터미널 5번 문 앞이에요. 밖에 기둥 옆이요." },
    { w: "them", e: "Okay, stay there. Five minutes.", k: "네, 거기 계세요. 오 분이요." }
  ],
  replies: [
    { e: "Okay, stay there. Five minutes.", k: "네, 거기 계세요. 오 분이요.",
      n: "★ stay there = 그대로 계세요. 움직이면 서로 못 찾습니다." },
    { e: "Door 5? I'm at door 3, can you walk down?", k: "5번 문이요? 저는 3번 문인데, 걸어와 주실 수 있어요?",
      n: "walk down = 그쪽으로 걸어오다." },
    { e: "What colour is your bag? It's busy here.", k: "가방이 무슨 색이에요? 여기 복잡해서요.",
      n: "★ 찾기 쉽게 생김새를 묻습니다. 옷 색을 말해도 됩니다." },
    { e: "I can't stop there. Meet me at the crossing.", k: "거긴 못 세워요. 횡단보도에서 만나요.",
      n: "★ crossing = 횡단보도. 공항은 정차 금지 구간이 많습니다." }
  ]
},

"I think I left something in your car.": {
  where: "내린 뒤 물건이 없는 걸 알고",
  lines: [
    { w: "me", e: "Hi, I think I left something in your car.", k: "안녕하세요, 차에 물건을 두고 내린 것 같아요." },
    { w: "them", e: "Oh no. What was it?", k: "저런. 뭐였어요?" },
    { w: "me", e: "A black bag, on the back seat.", k: "검은 가방이요, 뒷좌석에요." }
  ],
  replies: [
    { e: "Oh no. What was it?", k: "저런. 뭐였어요?",
      n: "물건이 뭔지 먼저 묻습니다. 색과 종류를 말하면 됩니다." },
    { e: "Let me pull over and check the back.", k: "잠깐 세우고 뒷자리 볼게요.",
      n: "★ pull over = 차를 길가에 세우다." },
    { e: "I've got another passenger. I'll come after.", k: "지금 다른 손님이 있어요. 끝나고 갈게요.",
      n: "passenger = 승객. 바로는 못 온다는 뜻." },
    { e: "Nothing back here, sorry. Are you sure it was my car?", k: "여긴 아무것도 없는데요. 제 차 맞으세요?",
      n: "Are you sure ~? = 확실하세요? 차를 잘못 봤을 수도 있습니다." }
  ]
},

"Could you come back for me?": {
  where: "기사에게 돌아와 달라고",
  lines: [
    { w: "me", e: "Could you come back for me? I'm still here.", k: "저한테 다시 와 주실 수 있어요? 아직 여기 있어요." },
    { w: "them", e: "I'm about ten minutes away. Can you wait?", k: "십 분쯤 거리예요. 기다리실 수 있어요?" },
    { w: "me", e: "Yes, I'll wait here.", k: "네, 여기서 기다릴게요." }
  ],
  replies: [
    { e: "I'm about ten minutes away. Can you wait?", k: "십 분쯤 거리예요. 기다리실 수 있어요?",
      n: "★ ten minutes away = 십 분 걸리는 거리." },
    { e: "I'm on the motorway now. I can't turn around.", k: "지금 고속도로예요. 돌릴 수가 없어요.",
      n: "★ motorway = 고속도로(영국). turn around = 차를 돌리다." },
    { e: "Sure, but it'll be on the meter.", k: "네, 근데 요금은 다시 올라가요.",
      n: "★ on the meter = 미터기가 돌아간다. 돈이 든다는 뜻." },
    { e: "Send me your location again.", k: "위치 다시 보내 주세요.",
      n: "앱에서 위치를 다시 공유하면 됩니다." }
  ]
},

"I'll pay extra if you can come back.": {
  where: "돌아와 달라고 부탁하며",
  lines: [
    { w: "them", e: "It's a long way back, to be honest.", k: "솔직히 돌아가기엔 좀 멀어요." },
    { w: "me", e: "I understand. I'll pay extra if you can come back.", k: "알겠어요. 돌아와 주시면 요금 더 드릴게요." },
    { w: "them", e: "Alright, give me fifteen minutes.", k: "알겠어요, 십오 분만 주세요." }
  ],
  replies: [
    { e: "Alright, give me fifteen minutes.", k: "알겠어요, 십오 분만 주세요.",
      n: "give me ~ = ~만큼 시간을 달라." },
    { e: "You don't have to pay. I'll come anyway.", k: "돈 안 주셔도 돼요. 그냥 갈게요.",
      n: "anyway = 그래도, 어쨌든." },
    { e: "Twenty on top of the fare, okay?", k: "요금에 20 더해서요, 괜찮으세요?",
      n: "★ on top of the fare = 요금에 더해서. fare = 교통 요금." },
    { e: "Book me again in the app. Easier that way.", k: "앱에서 다시 부르세요. 그게 편해요.",
      n: "that way = 그렇게 하는 게." }
  ]
},

"This is for you. Thank you so much.": {
  where: "내리면서 팁을 건네며",
  lines: [
    { w: "them", e: "Here you go, that's your bag.", k: "여기요, 가방이요." },
    { w: "me", e: "This is for you. Thank you so much.", k: "이거 받으세요. 정말 고맙습니다." },
    { w: "them", e: "Oh, that's very kind. Safe travels!", k: "아, 감사합니다. 조심히 가세요!" }
  ],
  replies: [
    { e: "Oh, that's very kind. Safe travels!", k: "아, 감사합니다. 조심히 가세요!",
      n: "that's very kind = 마음이 고우시네요. Safe travels = 조심히 가세요." },
    { e: "You didn't have to! Thank you.", k: "안 그러셔도 되는데요! 고맙습니다.",
      n: "★ You didn't have to = 그러실 필요 없었는데요. 고마움의 표현입니다." },
    { e: "Cheers. Have a great trip.", k: "고마워요. 여행 잘하세요.",
      n: "Cheers 는 영국에서 '고마워요'로도 씁니다." },
    { e: "Thank you! Do you want a receipt?", k: "고맙습니다! 영수증 드릴까요?",
      n: "돈 이야기가 끝나면 영수증을 묻기도 합니다." }
  ]
},

"Could you help me lift my bag?": {
  where: "기차에서 선반에 짐을 올릴 때",
  lines: [
    { w: "me", e: "Excuse me, could you help me lift my bag?", k: "실례합니다, 가방 올리는 것 좀 도와주실 수 있어요?" },
    { w: "them", e: "Course! Up on the rack?", k: "그럼요! 선반 위에요?" },
    { w: "me", e: "Yes, please. It's heavier than it looks.", k: "네, 부탁드려요. 보기보다 무거워요." }
  ],
  replies: [
    { e: "Course! Up on the rack?", k: "그럼요! 선반 위에요?",
      n: "★ rack = 기차 짐 선반. Of 가 빠진 Course!" },
    { e: "Here, let me take that side.", k: "자, 제가 이쪽 들게요.",
      n: "take that side = 그쪽을 잡다. 같이 드는 겁니다." },
    { e: "No problem. One, two — up we go.", k: "그럼요. 하나, 둘, 올립니다.",
      n: "★ up we go = 자 올려요. 힘쓸 때 하는 말입니다." },
    { e: "Sure, but there's space underneath too.", k: "네, 근데 아래에도 자리 있어요.",
      n: "underneath = 아래쪽에. 좌석 밑을 말합니다." }
  ]
},

"You're a star, thank you!": {
  where: "도와준 사람에게",
  lines: [
    { w: "them", e: "There you go. All set?", k: "됐습니다. 다 되셨어요?" },
    { w: "me", e: "You're a star, thank you!", k: "정말 멋진 분이세요, 고맙습니다!" },
    { w: "them", e: "Any time. Enjoy your journey.", k: "언제든지요. 즐거운 여행 되세요." }
  ],
  replies: [
    { e: "Any time. Enjoy your journey.", k: "언제든지요. 즐거운 여행 되세요.",
      n: "★ Any time = 언제든 말씀하세요. journey = 여정(영국에서 기차 여행에 자주)." },
    { e: "Ah, it's nothing. Happy to help.", k: "아, 별거 아니에요. 도와드려서 기뻐요.",
      n: "it's nothing = 별것 아니에요." },
    { e: "Don't mention it. Where are you headed?", k: "별말씀을요. 어디까지 가세요?",
      n: "대화가 이어지는 경우. 목적지를 말하면 됩니다." },
    { e: "Ha! I'll take that. Have a good one.", k: "하하! 고맙게 받을게요. 좋은 하루 보내세요.",
      n: "★ I'll take that = 그 칭찬 받을게요. 농담조입니다." }
  ]
},

/* ---------- 입국 심사 ---------- */

"What's the purpose of your visit?": {
  where: "입국 심사대, 첫 질문",
  lines: [
    { w: "them", e: "What's the purpose of your visit?", k: "방문 목적이 뭐예요?" },
    { w: "me", e: "Tourism. I'm here for a concert.", k: "관광이요. 콘서트 보러 왔어요." },
    { w: "them", e: "Okay. How long will you be staying?", k: "알겠습니다. 얼마나 머무르세요?" }
  ],
  replies: [
    { e: "Okay. How long will you be staying?", k: "알겠습니다. 얼마나 머무르세요?", n: "바로 다음 질문이 이어집니다." },
    { e: "A concert? Who are you seeing?", k: "콘서트요? 누구 보러요?", n: "★ Who are you seeing? = 누구 공연 보세요. 가수 이름만 답하면 됩니다." },
    { e: "Business or pleasure?", k: "출장이에요, 여행이에요?", n: "★ pleasure = 여행·놀러 온 것. Pleasure. 한 단어면 됩니다." },
    { e: "And is this your first time in the States?", k: "미국은 처음이세요?", n: "the States = 미국. 미국인들이 자기 나라를 이렇게 부릅니다." }
  ]
},

"How long will you be staying?": {
  where: "입국 심사대",
  lines: [
    { w: "them", e: "How long will you be staying?", k: "얼마나 머무르세요?" },
    { w: "me", e: "Ten days.", k: "열흘이요." },
    { w: "them", e: "And you leave on the fifteenth?", k: "15일에 떠나시고요?" }
  ],
  replies: [
    { e: "And you leave on the fifteenth?", k: "15일에 떠나시고요?", n: "날짜를 확인합니다. Yes 면 됩니다." },
    { e: "Ten days. Do you have your return ticket?", k: "열흘이요. 돌아가는 표 있으세요?", n: "말을 되풀이한 뒤 다음 질문으로 갑니다." },
    { e: "That's a long trip. Taking time off work?", k: "긴 여행이네요. 휴가 내셨어요?", n: "★ time off work = 휴가. Yes, I'm on holiday. 면 됩니다." },
    { e: "Okay. Where will you be staying?", k: "네. 어디서 묵으세요?", n: "다음 질문. 호텔 이름을 준비해 두세요." }
  ]
},

"Where will you be staying?": {
  where: "입국 심사대",
  lines: [
    { w: "them", e: "Where will you be staying?", k: "어디서 묵으세요?" },
    { w: "me", e: "At a hotel in Los Angeles. Here's the booking.", k: "로스앤젤레스 호텔이요. 예약증 여기 있어요." },
    { w: "them", e: "Thank you. Is that the whole ten days?", k: "고맙습니다. 열흘 내내 거기예요?" }
  ],
  replies: [
    { e: "Thank you. Is that the whole ten days?", k: "고맙습니다. 열흘 내내 거기예요?", n: "the whole ten days = 열흘 내내." },
    { e: "What's the address?", k: "주소가 어떻게 돼요?", n: "★ 주소를 그대로 읽어 주거나 화면을 보여 주면 됩니다." },
    { e: "Staying with friends or in a hotel?", k: "친구 집이에요, 호텔이에요?", n: "Are you 가 빠진 물음입니다." },
    { e: "Okay. And who are you traveling with?", k: "네. 누구와 같이 오셨어요?", n: "다음 질문으로 넘어갑니다." }
  ]
},

"Do you have a return ticket?": {
  where: "입국 심사대",
  lines: [
    { w: "them", e: "Do you have a return ticket?", k: "돌아가는 표 있어요?" },
    { w: "me", e: "Yes, I fly back on the fifteenth.", k: "네, 15일에 돌아가요." },
    { w: "them", e: "Can I see it?", k: "보여 주시겠어요?" }
  ],
  replies: [
    { e: "Can I see it?", k: "보여 주시겠어요?", n: "★ 폰에 항공권을 미리 띄워 두면 편합니다." },
    { e: "Good. Which airline?", k: "좋아요. 어느 항공사예요?", n: "항공사 이름만 답하면 됩니다." },
    { e: "That's fine. Enjoy your stay.", k: "됐습니다. 즐겁게 지내세요.", n: "★ Enjoy your stay = 통과됐다는 뜻입니다." },
    { e: "Okay, next question — are you bringing any food?", k: "네, 다음 질문이요. 음식 가져오셨어요?", n: "next question 으로 넘어간다고 알려 줍니다." }
  ]
},

"Who are you traveling with?": {
  where: "입국 심사대",
  lines: [
    { w: "them", e: "Who are you traveling with?", k: "누구와 같이 오셨어요?" },
    { w: "me", e: "I'm traveling alone.", k: "혼자 왔어요." },
    { w: "them", e: "Alone, okay. First time here?", k: "혼자시군요. 여기 처음이세요?" }
  ],
  replies: [
    { e: "Alone, okay. First time here?", k: "혼자시군요. 여기 처음이세요?", n: "Is this your 가 빠진 First time here? 입니다." },
    { e: "Nobody's meeting you here?", k: "여기서 만날 사람은 없고요?", n: "★ meeting you = 마중 나오는. No, nobody. 면 됩니다." },
    { e: "Okay. Do you know anyone in the States?", k: "네. 미국에 아는 사람 있어요?", n: "사실대로 답하면 됩니다." },
    { e: "Brave! Where are you headed first?", k: "대단하시네요! 먼저 어디로 가세요?", n: "headed = 향하는. 가벼운 대화입니다." }
  ]
},

"Have you been to the US before?": {
  where: "입국 심사대",
  lines: [
    { w: "them", e: "Have you been to the US before?", k: "미국에 와 본 적 있어요?" },
    { w: "me", e: "No, this is my first time.", k: "아뇨, 이번이 처음이에요." },
    { w: "them", e: "Welcome. Look at the camera for me.", k: "환영합니다. 카메라 봐 주세요." }
  ],
  replies: [
    { e: "Welcome. Look at the camera for me.", k: "환영합니다. 카메라 봐 주세요.", n: "★ 사진을 찍습니다. for me 는 부탁을 부드럽게 하는 말." },
    { e: "First time. What made you choose LA?", k: "처음이시군요. 왜 엘에이를 고르셨어요?", n: "★ What made you ~ = 왜 ~하게 됐나요." },
    { e: "Okay. Both index fingers on the scanner, please.", k: "네. 양쪽 검지를 기계에 올려 주세요.", n: "★ index finger = 검지. 지문을 찍습니다." },
    { e: "Not even for a layover?", k: "경유로도요?", n: "★ layover = 경유. 환승만 했어도 왔다고 칩니다." }
  ]
},

"What do you do for work?": {
  where: "입국 심사대",
  lines: [
    { w: "them", e: "What do you do for work?", k: "직업이 뭐예요?" },
    { w: "me", e: "I'm a teacher.", k: "교사예요." },
    { w: "them", e: "Nice. And you're back at work after this?", k: "좋네요. 돌아가서 다시 일하시고요?" }
  ],
  replies: [
    { e: "Nice. And you're back at work after this?", k: "좋네요. 돌아가서 다시 일하시고요?", n: "★ 돌아갈 이유가 있는지 확인하는 질문입니다. Yes 면 됩니다." },
    { e: "What do you teach?", k: "뭘 가르치세요?", n: "과목만 답하면 됩니다." },
    { e: "Okay. Who's paying for the trip?", k: "네. 여행 비용은 누가 내세요?", n: "★ Myself. 한 단어면 충분합니다." },
    { e: "Got it. How much cash are you carrying?", k: "알겠습니다. 현금은 얼마나 갖고 계세요?", n: "다음 질문으로 넘어갑니다." }
  ]
},

"Are you bringing any food?": {
  where: "입국 심사대",
  lines: [
    { w: "them", e: "Are you bringing any food?", k: "음식 가져오셨어요?" },
    { w: "me", e: "Just some snacks. No fruit or meat.", k: "과자만요. 과일이나 고기는 없어요." },
    { w: "them", e: "That's fine. Snacks are okay.", k: "괜찮습니다. 과자는 됩니다." }
  ],
  replies: [
    { e: "That's fine. Snacks are okay.", k: "괜찮습니다. 과자는 됩니다.", n: "포장된 과자는 대개 문제없습니다." },
    { e: "What kind of snacks?", k: "어떤 과자요?", n: "★ 보여 주는 게 제일 빠릅니다." },
    { e: "Any seeds, plants or nuts?", k: "씨앗이나 식물, 견과류는요?", n: "★ 씨앗·식물은 반입이 까다롭습니다. 없으면 No." },
    { e: "Okay. Please put your bag on the belt.", k: "네. 가방을 벨트에 올려 주세요.", n: "belt = 검색대 컨베이어. 가방을 검사합니다." }
  ]
},

"How much cash are you carrying?": {
  where: "입국 심사대",
  lines: [
    { w: "them", e: "How much cash are you carrying?", k: "현금 얼마나 갖고 계세요?" },
    { w: "me", e: "About five hundred dollars.", k: "500달러쯤이요." },
    { w: "them", e: "That's fine. Anything over ten thousand has to be declared.", k: "괜찮습니다. 만 달러가 넘으면 신고하셔야 해요." }
  ],
  replies: [
    { e: "That's fine. Anything over ten thousand has to be declared.", k: "괜찮습니다. 만 달러가 넘으면 신고하셔야 해요.",
      n: "★ declared = 신고된. 만 달러가 기준입니다." },
    { e: "Dollars or won?", k: "달러예요, 원이에요?", n: "화폐 단위를 확인합니다." },
    { e: "Including cards?", k: "카드 포함해서요?", n: "Including ~ = ~를 포함해서. 현금만 물은 거면 No, just cash." },
    { e: "Okay, you're all set. Welcome to the United States.", k: "네, 다 됐습니다. 미국에 오신 걸 환영합니다.",
      n: "★ you're all set = 끝났습니다. 통과된 겁니다." }
  ]
},

"I'm here for a concert.": {
  where: "목적을 좀 더 구체적으로 말할 때",
  lines: [
    { w: "them", e: "Business or pleasure?", k: "출장이에요, 여행이에요?" },
    { w: "me", e: "Pleasure. I'm here for a concert.", k: "여행이요. 콘서트 보러 왔어요." },
    { w: "them", e: "Anyone I'd know?", k: "제가 알 만한 사람이에요?" }
  ],
  replies: [
    { e: "Anyone I'd know?", k: "제가 알 만한 사람이에요?", n: "★ 가벼운 농담입니다. 가수 이름만 말하면 돼요." },
    { e: "Nice. Where's the show?", k: "좋네요. 공연은 어디서 해요?", n: "도시나 공연장 이름을 답하면 됩니다." },
    { e: "You came all this way for a concert?", k: "콘서트 하나 보러 이 먼 데까지 오셨어요?", n: "★ all this way = 이 먼 곳까지. 놀라는 말이지 의심이 아닙니다." },
    { e: "Got it. Enjoy the show.", k: "알겠습니다. 공연 재밌게 보세요.", n: "통과입니다." }
  ]
},

"I'm traveling alone.": {
  where: "혼자 왔다고 답할 때",
  lines: [
    { w: "them", e: "Are you traveling with anyone today?", k: "오늘 같이 오신 분 있어요?" },
    { w: "me", e: "No, I'm traveling alone.", k: "아뇨, 혼자 왔어요." },
    { w: "them", e: "Okay. Step forward, please.", k: "네. 앞으로 나와 주세요." }
  ],
  replies: [
    { e: "Okay. Step forward, please.", k: "네. 앞으로 나와 주세요.", n: "★ Step forward = 앞으로 오세요. 심사대에서 자주 듣습니다." },
    { e: "Alone? That's brave for a first trip.", k: "혼자요? 첫 여행에 대단하시네요.", n: "가벼운 칭찬입니다." },
    { e: "And you're meeting no one here?", k: "여기서 만날 사람도 없고요?", n: "meeting no one = 만날 사람이 없다." },
    { e: "Understood. Next window, please.", k: "알겠습니다. 다음 창구로 가세요.", n: "window = 창구." }
  ]
},

"Here's my hotel booking.": {
  where: "예약증을 보여 주며",
  lines: [
    { w: "them", e: "Do you have the address of where you're staying?", k: "묵으실 곳 주소 있으세요?" },
    { w: "me", e: "Yes, here's my hotel booking.", k: "네, 숙소 예약증이에요." },
    { w: "them", e: "Perfect. That's all I need.", k: "좋습니다. 그거면 됐어요." }
  ],
  replies: [
    { e: "Perfect. That's all I need.", k: "좋습니다. 그거면 됐어요.", n: "★ That's all I need = 더 필요 없습니다. 끝났다는 뜻." },
    { e: "Can you read it out for me?", k: "읽어 주시겠어요?", n: "★ read it out = 소리 내어 읽다. 주소를 천천히 읽으면 됩니다." },
    { e: "Is that the only place you're staying?", k: "거기 한 곳만 묵으세요?", n: "the only place = 유일한 곳." },
    { e: "Thanks. Put your passport on the scanner.", k: "고맙습니다. 여권을 기계에 올려 주세요.", n: "scanner = 판독기." }
  ]
},

/* ---------- 먹기 (더함) ---------- */

"Is the tip included?": {
  where: "계산서를 받아 들고",
  lines: [
    { w: "me", e: "Sorry, is the tip included?", k: "죄송한데, 팁이 포함돼 있나요?" },
    { w: "them", e: "It's not, so whatever you think is fair.", k: "아니요, 알아서 주시면 돼요." },
    { w: "me", e: "Got it, thank you.", k: "알겠어요, 고맙습니다." }
  ],
  replies: [
    { e: "It's not, so whatever you think is fair.", k: "아니요, 알아서 주시면 돼요.",
      n: "★ whatever you think is fair = 적당하다고 생각하시는 만큼. 미국은 보통 18~20%." },
    { e: "There's an eighteen percent service charge already.", k: "18퍼센트 서비스 요금이 이미 들어가 있어요.",
      n: "★ service charge 가 있으면 팁을 또 줄 필요 없습니다." },
    { e: "For parties of six or more, yes. Not for two.", k: "여섯 명 이상이면 포함이고요, 두 분은 아니에요.",
      n: "★ party = 여기선 일행. 인원에 따라 자동으로 붙는 곳이 있습니다." },
    { e: "Not included, but the machine will ask you.", k: "포함은 아닌데, 단말기가 물어볼 거예요.",
      n: "카드 단말기가 팁 비율을 물어봅니다. 원하는 걸 누르면 됩니다." }
  ]
},

"Do I pay now or later?": {
  where: "주문을 마치고",
  lines: [
    { w: "me", e: "Do I pay now or later?", k: "지금 계산해요, 나중에 해요?" },
    { w: "them", e: "Now, please. Then I'll bring it over.", k: "지금이요. 그다음에 갖다 드릴게요." },
    { w: "me", e: "Okay, card please.", k: "네, 카드로 할게요." }
  ],
  replies: [
    { e: "Now, please. Then I'll bring it over.", k: "지금이요. 그다음에 갖다 드릴게요.",
      n: "bring it over = 자리로 갖다주다. 카페에서 흔한 방식입니다." },
    { e: "At the end, we'll bring the check to your table.", k: "마지막에요, 계산서를 자리로 갖다 드려요.",
      n: "★ check = 계산서(미국). 영국은 bill." },
    { e: "Whenever you like. No rush.", k: "편하실 때요. 안 급해요.", n: "Whenever you like = 언제든 편하실 때." },
    { e: "Up at the counter when you're done.", k: "다 드시고 계산대에서 하시면 돼요.",
      n: "★ up at the counter = 계산대에서. Pay 가 앞에서 생략됐습니다." }
  ]
},

"Do you have iced coffee?": {
  where: "카페에서",
  lines: [
    { w: "me", e: "Do you have iced coffee?", k: "아이스커피 있어요?" },
    { w: "them", e: "We do — iced americano or iced latte?", k: "있어요. 아이스 아메리카노요, 아이스 라떼요?" },
    { w: "me", e: "Iced americano, please.", k: "아이스 아메리카노로 주세요." }
  ],
  replies: [
    { e: "We do — iced americano or iced latte?", k: "있어요. 아이스 아메리카노요, 아이스 라떼요?",
      n: "We do 로 짧게 긍정한 뒤 바로 고르라고 합니다." },
    { e: "We don't, sorry. Only hot.", k: "죄송해요, 없어요. 따뜻한 것만요.",
      n: "★ 유럽 카페엔 아이스커피가 없는 곳이 많습니다." },
    { e: "We've got cold brew, if that works?", k: "콜드브루는 있는데, 괜찮으세요?",
      n: "★ cold brew = 찬물로 오래 내린 커피. 아이스커피와 조금 다릅니다." },
    { e: "Sure. Regular or large?", k: "네. 보통이요, 큰 거요?",
      n: "★ regular = 보통 크기. 미국에선 small 대신 이렇게 씁니다." }
  ]
},

"Could I get some cold water?": {
  where: "미지근한 물이 나왔을 때",
  lines: [
    { w: "me", e: "Could I get some cold water, with ice if you have it?", k: "시원한 물 좀 주실 수 있어요? 얼음 있으면 얼음도요." },
    { w: "them", e: "Of course. I'll bring a jug with ice.", k: "그럼요. 얼음 넣어서 갖다 드릴게요." },
    { w: "me", e: "Thank you.", k: "고맙습니다." }
  ],
  replies: [
    { e: "Of course. I'll bring a jug with ice.", k: "그럼요. 얼음 넣어서 갖다 드릴게요.",
      n: "jug = 물병. with ice = 얼음 넣어서." },
    { e: "We don't do ice, sorry. It'll be chilled though.", k: "죄송해요, 얼음은 없어요. 차갑게는 해드려요.",
      n: "★ chilled = 차게 식힌. 유럽은 얼음을 잘 안 줍니다." },
    { e: "Still or sparkling? And ice in both?", k: "생수요, 탄산수요? 둘 다 얼음 넣을까요?",
      n: "still = 탄산 없는 물, sparkling = 탄산수." },
    { e: "Sure, tap water okay?", k: "네, 수돗물 괜찮으세요?",
      n: "★ tap water 는 공짜입니다. 병물은 돈을 받아요." }
  ]
},

"I dropped my fork.": {
  where: "포크를 바닥에 떨어뜨리고",
  lines: [
    { w: "me", e: "Sorry, I dropped my fork. Could I get another one?", k: "죄송한데, 포크를 떨어뜨렸어요. 하나 더 주실 수 있어요?" },
    { w: "them", e: "No problem, I'll grab you a clean one.", k: "괜찮아요, 깨끗한 걸로 갖다 드릴게요." },
    { w: "me", e: "Thank you.", k: "고맙습니다." }
  ],
  replies: [
    { e: "No problem, I'll grab you a clean one.", k: "괜찮아요, 깨끗한 걸로 갖다 드릴게요.",
      n: "grab you ~ = ~를 가져다 드리다." },
    { e: "Happens all the time. Leave it, I'll get it.", k: "자주 있는 일이에요. 두세요, 제가 치울게요.",
      n: "★ Leave it = 그냥 두세요. 줍지 말라는 뜻입니다." },
    { e: "Sure — anything else while I'm here?", k: "네. 온 김에 더 필요한 건요?",
      n: "while I'm here = 온 김에." },
    { e: "Of course. Knife too, or just the fork?", k: "그럼요. 나이프도요, 포크만요?",
      n: "둘 다 필요하면 Both, please." }
  ]
},

"There's no toilet paper.": {
  where: "화장실에서 나와 직원에게",
  lines: [
    { w: "me", e: "Excuse me, there's no toilet paper in the ladies'.", k: "죄송한데, 여자 화장실에 휴지가 없어요." },
    { w: "them", e: "Oh, thanks for telling me. I'll sort it now.", k: "아, 알려 주셔서 고마워요. 지금 채울게요." },
    { w: "me", e: "Thanks.", k: "고마워요." }
  ],
  replies: [
    { e: "Oh, thanks for telling me. I'll sort it now.", k: "아, 알려 주셔서 고마워요. 지금 채울게요.",
      n: "★ sort it = 처리하다(영국). 미국은 take care of it." },
    { e: "There's a spare roll under the sink.", k: "세면대 아래에 여분 한 롤 있어요.",
      n: "★ roll = 휴지 한 개. under the sink = 세면대 아래." },
    { e: "Sorry about that. Try the one upstairs for now.", k: "죄송해요. 지금은 위층 화장실 쓰세요.",
      n: "for now = 지금으로선." },
    { e: "I'll get someone on it right away.", k: "바로 사람 보낼게요.",
      n: "get someone on it = 누굴 시켜 처리하게 하다." }
  ]
},

"I've forgotten the safe code.": {
  where: "금고가 안 열려 프런트에 전화",
  lines: [
    { w: "me", e: "Sorry, I've forgotten the safe code. Can you help?", k: "죄송한데, 금고 비밀번호를 잊어버렸어요. 도와주실 수 있나요?" },
    { w: "them", e: "No problem, that happens a lot. I'll send someone up.", k: "괜찮아요, 자주 있는 일이에요. 사람 올려 보낼게요." },
    { w: "me", e: "Thank you. Room 402.", k: "고맙습니다. 402호예요." }
  ],
  replies: [
    { e: "No problem, that happens a lot. I'll send someone up.", k: "괜찮아요, 자주 있는 일이에요. 사람 올려 보낼게요.",
      n: "★ that happens a lot = 흔한 일이에요. 민망해하지 않아도 됩니다." },
    { e: "Of course. We have a master key for the safes.", k: "그럼요. 금고 마스터 키가 있어요.",
      n: "master key = 모든 금고를 여는 열쇠. 직원이 직접 열어 줍니다." },
    { e: "Sure. I'll need to see your ID first, though.", k: "네. 다만 신분증부터 확인해야 해요.",
      n: "★ 신분증을 반드시 확인합니다. 여권을 준비해 두세요." },
    { e: "Someone'll be up in ten minutes. Will you be in?", k: "십 분 안에 올라갈 거예요. 방에 계실 거죠?",
      n: "★ Will you be in? = 방에 계실 건가요? in 만으로 '안에 있다'가 됩니다." }
  ]
},

"Could I borrow a bottle opener?": {
  where: "와인을 사 와서 프런트에",
  lines: [
    { w: "me", e: "Could I borrow a bottle opener?", k: "병따개 좀 빌릴 수 있을까요?" },
    { w: "them", e: "Is it wine? You'll want a corkscrew.", k: "와인이세요? 그럼 코르크 스크루가 필요하실 거예요." },
    { w: "me", e: "Yes, wine. That's the one.", k: "네, 와인이요. 그거 맞아요." }
  ],
  replies: [
    { e: "Is it wine? You'll want a corkscrew.", k: "와인이세요? 그럼 코르크 스크루가 필요하실 거예요.",
      n: "★ corkscrew = 와인 따개. bottle opener 는 병맥주용입니다." },
    { e: "Sure, there should be one in the minibar drawer.", k: "네, 미니바 서랍에 하나 있을 거예요.",
      n: "drawer = 서랍. 방에 이미 있는 경우가 많아요." },
    { e: "Of course. I'll bring it up — what room are you in?", k: "그럼요. 올려 드릴게요. 몇 호실이세요?",
      n: "what room are you in = 몇 호실이세요." },
    { e: "We do, but I'll have to open it down here. Hotel policy.", k: "있는데, 여기서 제가 열어 드려야 해요. 호텔 규정이라서요.",
      n: "Hotel policy = 호텔 규정. 안 된다고 할 때 붙는 말." }
  ]
},

"Could I borrow a phone charger?": {
  where: "충전기를 두고 왔을 때",
  lines: [
    { w: "me", e: "Could I borrow a phone charger? I left mine at home.", k: "휴대폰 충전기 좀 빌릴 수 있을까요? 집에 두고 왔어요." },
    { w: "them", e: "What type? We've got a box of ones guests left behind.", k: "어떤 거요? 손님들이 두고 간 충전기가 한 상자 있어요." },
    { w: "me", e: "USB-C, if you have one.", k: "C타입이요, 있으시면요." }
  ],
  replies: [
    { e: "What type? We've got a box of ones guests left behind.", k: "어떤 거요? 손님들이 두고 간 충전기가 한 상자 있어요.",
      n: "★ left behind = 두고 간. 프런트에 분실 충전기가 모여 있습니다." },
    { e: "We can lend you one, but we'll need a deposit.", k: "빌려 드릴 순 있는데, 보증금을 받아요.",
      n: "★ deposit = 보증금. 돌려줄 때 받아 갑니다." },
    { e: "Sorry, we don't lend those. There's a shop next door.", k: "죄송해요, 그건 안 빌려드려요. 옆에 가게 있어요.",
      n: "next door = 바로 옆. 거절하며 대안을 줍니다." },
    { e: "Sure. Just drop it back at checkout.", k: "네. 체크아웃할 때 돌려주시면 돼요.",
      n: "drop it back = 돌려주다. 가볍게 말할 때 씁니다." }
  ]
},

"Is there any extra charge for that?": {
  where: "업그레이드해 준다는 말을 듣고",
  lines: [
    { w: "them", e: "Good news — we've upgraded you to a sea view room.", k: "좋은 소식이에요. 바다 전망 방으로 올려 드렸어요." },
    { w: "me", e: "Oh, thank you! Is there any extra charge for that?", k: "아, 고맙습니다! 추가 요금이 있나요?" },
    { w: "them", e: "None at all, it's complimentary.", k: "전혀 없어요, 무료입니다." }
  ],
  replies: [
    { e: "None at all, it's complimentary.", k: "전혀 없어요, 무료입니다.",
      n: "★ complimentary = 무료. free 보다 호텔에서 더 자주 씁니다. 칭찬이 아니에요." },
    { e: "No charge. We were overbooked, so it's on us.", k: "요금 없어요. 예약이 초과돼서 저희가 부담해요.",
      n: "★ on us = 저희가 냅니다. overbooked = 예약이 넘친." },
    { e: "It's thirty a night, but I can do twenty for you.", k: "하루 30인데, 20에 해 드릴게요.",
      n: "★ 돈을 받는 경우입니다. a night = 하루당. 거절해도 됩니다." },
    { e: "Just the resort fee, same as before.", k: "리조트 요금만요, 원래랑 같아요.",
      n: "resort fee = 숙박료와 별도로 붙는 시설 이용료." }
  ]
},

"Is cut fruit allowed in the room?": {
  where: "과일을 사 들고 들어오며",
  lines: [
    { w: "me", e: "I saw the sign about durian. Is cut fruit allowed in the room?", k: "두리안 안내문 봤는데요. 손질한 과일은 방에 가져가도 되나요?" },
    { w: "them", e: "Cut is fine. It's the whole ones that smell.", k: "손질한 건 괜찮아요. 통째로 있는 게 냄새가 나서요." },
    { w: "me", e: "Good to know. Thank you.", k: "알아두면 좋겠네요. 고맙습니다." }
  ],
  replies: [
    { e: "Cut is fine. It's the whole ones that smell.", k: "손질한 건 괜찮아요. 통째로 있는 게 냄새가 나서요.",
      n: "★ whole ones = 통째인 것. cut = 잘라 놓은." },
    { e: "As long as it's sealed, no problem.", k: "밀봉만 돼 있으면 괜찮아요.",
      n: "★ As long as ~ = ~하기만 하면. sealed = 밀봉된." },
    { e: "Any durian's a no, sorry. Even cut.", k: "두리안은 안 돼요, 죄송해요. 잘라도요.",
      n: "★ a no = 안 된다. 명사처럼 씁니다." },
    { e: "In the room, yes. Not in the lobby or the lift.", k: "방에서는 돼요. 로비나 승강기에서는 안 되고요.",
      n: "장소마다 규정이 다른 경우입니다." }
  ]
},

"I'd like to order room service.": {
  where: "방에서 전화로",
  lines: [
    { w: "me", e: "Hi, I'd like to order room service.", k: "안녕하세요, 룸서비스 시키고 싶은데요." },
    { w: "them", e: "Certainly. What room are you calling from?", k: "네. 몇 호실에서 거셨어요?" },
    { w: "me", e: "Room 402. Could I get the club sandwich?", k: "402호요. 클럽 샌드위치 하나 주세요." }
  ],
  replies: [
    { e: "Certainly. What room are you calling from?", k: "네. 몇 호실에서 거셨어요?",
      n: "★ calling from = 어디서 전화하는지. 방 번호를 먼저 묻습니다." },
    { e: "Of course. The kitchen closes at eleven, just so you know.", k: "네. 참고로 주방은 11시에 닫아요.",
      n: "just so you know = 참고로 알려드리면." },
    { e: "Sure. There's a ten percent service charge on top.", k: "네. 서비스 요금 10퍼센트가 추가됩니다.",
      n: "★ on top = 위에 더해서. 룸서비스는 대개 추가 요금이 붙습니다." },
    { e: "Yes — it'll be about forty minutes tonight.", k: "네, 오늘은 사십 분쯤 걸려요.",
      n: "it'll be = 걸릴 거예요. 소요 시간을 알려 줍니다." }
  ]
},

"Could I change rooms?": {
  where: "방에 문제가 있어 프런트에",
  lines: [
    { w: "me", e: "There's a smell in my room. Could I change rooms?", k: "방에서 냄새가 나요. 방을 바꿀 수 있을까요?" },
    { w: "them", e: "I'm sorry about that. Let me see what we have.", k: "죄송합니다. 남은 방이 있는지 볼게요." },
    { w: "me", e: "Thank you, I'd really appreciate it.", k: "고맙습니다, 정말 감사해요." }
  ],
  replies: [
    { e: "I'm sorry about that. Let me see what we have.", k: "죄송합니다. 남은 방이 있는지 볼게요.",
      n: "Let me see what we have = 뭐가 남았는지 보겠다." },
    { e: "Of course. Would a higher floor suit you?", k: "그럼요. 높은 층은 어떠세요?",
      n: "★ suit you = 괜찮으시겠어요. 취향을 묻는 정중한 말." },
    { e: "We're fully booked tonight, but I can send maintenance.", k: "오늘은 만실이라서요, 대신 정비 직원을 보낼게요.",
      n: "★ maintenance = 시설 정비 직원. 방 대신 수리로 해결합니다." },
    { e: "Certainly. I'll have someone help with your bags.", k: "네. 짐 옮기는 것도 도와드릴게요.",
      n: "have someone help = 누굴 시켜 돕게 하다." }
  ]
},

"I need to see a doctor.": {
  where: "몸이 많이 안 좋아 숙소 프런트에",
  lines: [
    { w: "me", e: "I'm not well. I need to see a doctor.", k: "몸이 안 좋아요. 의사를 봐야 할 것 같아요." },
    { w: "them", e: "There's a walk-in clinic ten minutes away. Shall I call you a taxi?", k: "십 분 거리에 예약 없이 가는 병원이 있어요. 택시 불러 드릴까요?" },
    { w: "me", e: "Yes, please. Thank you.", k: "네, 부탁드려요. 고맙습니다." }
  ],
  replies: [
    { e: "There's a walk-in clinic ten minutes away. Shall I call you a taxi?", k: "십 분 거리에 예약 없이 가는 병원이 있어요. 택시 불러 드릴까요?",
      n: "★ walk-in clinic = 예약 없이 가는 병원. 여행자에게 가장 현실적인 곳입니다." },
    { e: "Do you have travel insurance? Bring the details.", k: "여행자 보험 있으세요? 서류 챙겨 가세요.",
      n: "★ travel insurance = 여행자 보험. 진료비가 비싸니 꼭 챙기세요." },
    { e: "How bad is it? We can call a doctor to the room.", k: "많이 안 좋으세요? 방으로 의사를 부를 수도 있어요.",
      n: "call a doctor to the room = 왕진을 부르다. 큰 호텔은 됩니다." },
    { e: "A&E is your best bet at this hour.", k: "이 시간엔 응급실이 제일 나아요.",
      n: "★ A&E = 응급실(영국). 미국은 ER. 밤에는 여기로 갑니다." }
  ]
},

"Where's the first aid room?": {
  where: "공연장에서 몸이 안 좋을 때",
  lines: [
    { w: "me", e: "Excuse me, where's the first aid room?", k: "실례합니다, 의무실이 어디예요?" },
    { w: "them", e: "Behind section C. Do you need someone to walk you?", k: "C구역 뒤쪽이요. 같이 가 드릴까요?" },
    { w: "me", e: "Yes, please. I feel a bit faint.", k: "네, 부탁해요. 좀 어지러워요." }
  ],
  replies: [
    { e: "Behind section C. Do you need someone to walk you?", k: "C구역 뒤쪽이요. 같이 가 드릴까요?",
      n: "★ walk you = 데려다 주다. 몸이 안 좋아 보이면 이렇게 묻습니다." },
    { e: "Stay there, I'll radio the medics.", k: "거기 계세요, 의료진 무전으로 부를게요.",
      n: "★ medics = 의료진. radio = 무전으로 부르다." },
    { e: "By the main entrance. Are you okay to walk?", k: "정문 옆이요. 걸으실 수 있겠어요?",
      n: "Are you okay to ~ = ~할 수 있으시겠어요." },
    { e: "Follow me. It's quicker if I take you.", k: "따라오세요. 제가 데려다 드리는 게 빨라요.",
      n: "quicker if I take you = 제가 데려가는 게 더 빠르다." }
  ]
},

"I have a headache.": {
  where: "증상을 말할 때",
  lines: [
    { w: "them", e: "What seems to be the problem?", k: "어디가 안 좋으세요?" },
    { w: "me", e: "I have a headache and I feel dizzy.", k: "머리가 아프고 어지러워요." },
    { w: "them", e: "How long has that been going on?", k: "그게 얼마나 됐어요?" }
  ],
  replies: [
    { e: "How long has that been going on?", k: "그게 얼마나 됐어요?",
      n: "★ going on = 계속되는 중. Since this morning. 처럼 답하면 됩니다." },
    { e: "Have you eaten today? Had enough water?", k: "오늘 뭐 드셨어요? 물은 충분히 드셨고요?",
      n: "Had 앞의 Have you 가 생략됐습니다." },
    { e: "Any fever? Let me take your temperature.", k: "열은요? 체온 재 볼게요.",
      n: "★ take your temperature = 체온을 재다. fever = 열." },
    { e: "Sit down here. I'll get you some water.", k: "여기 앉으세요. 물 갖다 드릴게요.",
      n: "Sit down here = 여기 앉으세요." }
  ]
},

"Do you have anything for a cold?": {
  where: "약국에서",
  lines: [
    { w: "me", e: "Do you have anything for a cold?", k: "감기약 있어요?" },
    { w: "them", e: "Is it a sore throat, or more of a cough?", k: "목이 아프세요, 기침 쪽이세요?" },
    { w: "me", e: "Mostly a sore throat.", k: "주로 목이 아파요." }
  ],
  replies: [
    { e: "Is it a sore throat, or more of a cough?", k: "목이 아프세요, 기침 쪽이세요?",
      n: "★ sore throat = 목 아픔, cough = 기침. 증상을 나눠 묻습니다." },
    { e: "This one works, but it'll make you drowsy.", k: "이게 잘 듣는데, 졸려요.",
      n: "★ drowsy = 졸린. 약 설명에 반드시 나오는 말입니다." },
    { e: "Are you taking anything else at the moment?", k: "지금 드시는 다른 약 있으세요?",
      n: "약 충돌을 확인합니다. 없으면 No, nothing." },
    { e: "Two a day, after food. Not on an empty stomach.", k: "하루 두 번, 식후에요. 빈속에는 드시지 마세요.",
      n: "★ on an empty stomach = 빈속에. 복용법에 자주 나옵니다." }
  ]
},

"I'm allergic to penicillin.": {
  where: "진료를 받으며",
  lines: [
    { w: "them", e: "Any allergies I should know about?", k: "알레르기 있으세요?" },
    { w: "me", e: "Yes, I'm allergic to penicillin.", k: "네, 페니실린 알레르기가 있어요." },
    { w: "them", e: "Good to know. I'll prescribe something else.", k: "알려 주셔서 다행이에요. 다른 걸로 처방할게요." }
  ],
  replies: [
    { e: "Good to know. I'll prescribe something else.", k: "알려 주셔서 다행이에요. 다른 걸로 처방할게요.",
      n: "★ prescribe = 처방하다. 반드시 미리 말해야 하는 정보입니다." },
    { e: "How do you react to it?", k: "어떤 반응이 나오세요?",
      n: "react = 반응하다. A rash.(발진) 처럼 답하면 됩니다." },
    { e: "I'll put that on your file.", k: "기록에 적어 둘게요.",
      n: "put on your file = 진료 기록에 남기다." },
    { e: "Anything else? Food, latex, anything?", k: "다른 건요? 음식, 라텍스, 뭐든지요.",
      n: "latex = 고무 장갑 재질. 병원에서 꼭 묻습니다." }
  ]
},

"Could you call an ambulance?": {
  where: "누군가 쓰러졌을 때",
  lines: [
    { w: "me", e: "Someone's collapsed. Could you call an ambulance?", k: "사람이 쓰러졌어요. 구급차 좀 불러 주세요." },
    { w: "them", e: "Calling now. Is the person breathing?", k: "지금 부를게요. 숨은 쉬고 있어요?" },
    { w: "me", e: "Yes, but she's not responding.", k: "네, 근데 반응이 없어요." }
  ],
  replies: [
    { e: "Calling now. Is the person breathing?", k: "지금 부를게요. 숨은 쉬고 있어요?",
      n: "★ breathing = 숨 쉬는. 전화로 가장 먼저 묻는 것입니다." },
    { e: "Stay on the line. What's your exact location?", k: "끊지 마세요. 정확한 위치가 어디예요?",
      n: "★ Stay on the line = 전화 끊지 마세요. exact location = 정확한 위치." },
    { e: "Already done. They're two minutes out.", k: "이미 불렀어요. 이 분이면 와요.",
      n: "two minutes out = 이 분 거리." },
    { e: "Don't move them. Help is coming.", k: "움직이지 마세요. 곧 와요.",
      n: "Don't move them = 환자를 옮기지 마세요. 중요한 지시입니다." }
  ]
},

"My bag was stolen.": {
  where: "도난을 신고할 때",
  lines: [
    { w: "me", e: "My bag was stolen. It had my wallet in it.", k: "가방을 도둑맞았어요. 지갑이 들어 있었어요." },
    { w: "them", e: "I'm sorry. You'll need a police report for insurance.", k: "안됐네요. 보험 때문에 경찰 신고서가 필요할 거예요." },
    { w: "me", e: "Where do I get that?", k: "그건 어디서 받아요?" }
  ],
  replies: [
    { e: "I'm sorry. You'll need a police report for insurance.", k: "안됐네요. 보험 때문에 경찰 신고서가 필요할 거예요.",
      n: "★ police report = 도난 신고서. 보험 청구에 반드시 필요합니다." },
    { e: "Did you see who took it? Any description?", k: "누가 가져갔는지 보셨어요? 인상착의라도요?",
      n: "description = 생김새 설명." },
    { e: "Cancel your cards first. That's the urgent bit.", k: "카드부터 정지시키세요. 그게 급해요.",
      n: "★ Cancel your cards = 카드를 정지시키다. the urgent bit = 급한 부분." },
    { e: "Let's check lost property first — sometimes it's just moved.", k: "먼저 분실물부터 보죠. 그냥 옮겨진 경우도 있어요.",
      n: "도난이 아닐 가능성도 확인합니다." }
  ]
},

"I've lost my passport.": {
  where: "여권을 잃고 도움을 청할 때",
  lines: [
    { w: "me", e: "I've lost my passport. What should I do?", k: "여권을 잃어버렸어요. 어떻게 해야 하죠?" },
    { w: "them", e: "Contact your embassy right away. Do you have a copy?", k: "바로 대사관에 연락하세요. 사본 있으세요?" },
    { w: "me", e: "Yes, I have a photo on my phone.", k: "네, 폰에 사진 있어요." }
  ],
  replies: [
    { e: "Contact your embassy right away. Do you have a copy?", k: "바로 대사관에 연락하세요. 사본 있으세요?",
      n: "★ embassy = 대사관. 사본이 있으면 재발급이 훨씬 빠릅니다." },
    { e: "That photo will help a lot. Report it to the police too.", k: "그 사진이 큰 도움이 돼요. 경찰에도 신고하세요.",
      n: "Report it = 신고하다." },
    { e: "The Korean embassy is in the city centre. I'll write the address.", k: "한국 대사관은 시내에 있어요. 주소 적어 드릴게요.",
      n: "city centre = 시내(영국 철자). 미국은 downtown." },
    { e: "Don't panic. This happens more than you'd think.", k: "너무 걱정 마세요. 생각보다 자주 있는 일이에요.",
      n: "★ Don't panic = 당황하지 마세요. more than you'd think = 생각보다 자주." }
  ]
},

"Could you say that again?": {
  where: "못 알아들었을 때",
  lines: [
    { w: "them", e: "It's just past the roundabout on your right.", k: "회전교차로 지나서 오른쪽이에요." },
    { w: "me", e: "Sorry, could you say that again?", k: "죄송한데, 다시 말씀해 주실 수 있어요?" },
    { w: "them", e: "Course. Past the roundabout, then right.", k: "그럼요. 회전교차로 지나서, 오른쪽이요." }
  ],
  replies: [
    { e: "Course. Past the roundabout, then right.", k: "그럼요. 회전교차로 지나서, 오른쪽이요.", n: "★ roundabout = 회전교차로(영국). 다시 말할 땐 짧게 끊어 줍니다." },
    { e: "Sorry, I speak too fast. Past. The. Roundabout.", k: "죄송해요, 제가 말이 빨라서. 회전. 교차로. 지나서.", n: "일부러 또박또박 끊어 말해 줍니다." },
    { e: "Which bit? The street name?", k: "어느 부분이요? 길 이름이요?", n: "★ bit = 부분. 되물으니 어느 부분인지 말하면 됩니다." }
  ]
},

"I don't speak much English.": {
  where: "말이 빨라 따라가기 힘들 때",
  lines: [
    { w: "me", e: "Sorry, I don't speak much English.", k: "죄송해요, 영어를 잘 못해요." },
    { w: "them", e: "That's okay! I'll slow down.", k: "괜찮아요! 천천히 말할게요." },
    { w: "me", e: "Thank you, that helps.", k: "고마워요, 도움이 돼요." }
  ],
  replies: [
    { e: "That's okay! I'll slow down.", k: "괜찮아요! 천천히 말할게요.", n: "slow down = 천천히 말하다." },
    { e: "You're doing great. Take your time.", k: "잘하고 계세요. 천천히 하세요.", n: "You're doing great = 잘하고 있어요." },
    { e: "No worries — shall we use a translator app?", k: "괜찮아요. 번역 앱 쓸까요?", n: "★ shall we ~? = ~할까요? 제안하는 말입니다." }
  ]
},

"I think there's been a mistake.": {
  where: "계산서가 이상할 때",
  lines: [
    { w: "me", e: "Sorry, I think there's been a mistake with the bill.", k: "죄송한데, 계산서가 잘못된 것 같아요." },
    { w: "them", e: "Let me take a look... ah, you're right. Apologies.", k: "볼게요… 아, 맞네요. 죄송합니다." },
    { w: "me", e: "No problem at all.", k: "괜찮아요." }
  ],
  replies: [
    { e: "Let me take a look... ah, you're right. Apologies.", k: "볼게요… 아, 맞네요. 죄송합니다.", n: "★ Apologies = 죄송합니다. I 가 빠진 정중한 사과." },
    { e: "What seems to be the problem?", k: "어떤 점이 문제신가요?", n: "★ What seems to be ~ = 무엇이 문제인지 정중히 묻는 말." },
    { e: "Oh no, sorry — that table's order went on yours.", k: "아이고, 죄송해요. 저 테이블 주문이 손님 것에 들어갔네요.", n: "went on yours = 손님 계산서에 올라갔다." }
  ]
},

"This isn't what I ordered.": {
  where: "다른 음식이 나왔을 때",
  lines: [
    { w: "me", e: "Sorry, this isn't what I ordered.", k: "죄송한데, 제가 주문한 게 아니에요." },
    { w: "them", e: "Oh no! What did you order?", k: "어머! 뭘 주문하셨어요?" },
    { w: "me", e: "The chicken, not the fish.", k: "생선이 아니라 닭이요." }
  ],
  replies: [
    { e: "Oh no! What did you order?", k: "어머! 뭘 주문하셨어요?", n: "Oh no! 로 놀라며 바로 되묻습니다." },
    { e: "I'm so sorry. I'll get that changed right away.", k: "정말 죄송합니다. 바로 바꿔 드릴게요.", n: "right away = 즉시." },
    { e: "Let me check the ticket — hang on.", k: "주문서 확인할게요. 잠시만요.", n: "★ ticket = 여기선 주방 주문서." }
  ]
},

"I lost my wallet.": {
  where: "지갑을 잃어버리고 직원에게",
  lines: [
    { w: "me", e: "Excuse me, I lost my wallet. Has anyone handed one in?", k: "실례합니다, 지갑을 잃어버렸어요. 누가 맡기고 갔나요?" },
    { w: "them", e: "Let me check lost property. What does it look like?", k: "분실물 확인해 볼게요. 어떻게 생겼어요?" },
    { w: "me", e: "Brown, with a blue card inside.", k: "갈색이고, 안에 파란 카드가 있어요." }
  ],
  replies: [
    { e: "Let me check lost property. What does it look like?", k: "분실물 확인해 볼게요. 어떻게 생겼어요?", n: "★ lost property = 분실물 보관소(영국). 미국은 lost and found." },
    { e: "Nothing's been handed in yet. Leave your number?", k: "아직 들어온 건 없어요. 연락처 남기시겠어요?", n: "handed in = 맡겨진. Leave your number? 앞이 생략됐습니다." },
    { e: "Have you retraced your steps? Where were you last?", k: "왔던 길 되짚어 보셨어요? 마지막으로 어디 계셨어요?", n: "★ retrace your steps = 왔던 길을 되짚다." }
  ]
},

"My phone died.": {
  where: "배터리가 나갔을 때",
  lines: [
    { w: "me", e: "My phone died. Is there anywhere to charge it?", k: "폰 배터리가 나갔어요. 충전할 데 있어요?" },
    { w: "them", e: "There's a socket by the bar. Help yourself.", k: "바 옆에 콘센트 있어요. 쓰세요." },
    { w: "me", e: "You're a lifesaver.", k: "정말 고마워요." }
  ],
  replies: [
    { e: "There's a socket by the bar. Help yourself.", k: "바 옆에 콘센트 있어요. 쓰세요.", n: "★ socket = 콘센트(영국). 미국은 outlet." },
    { e: "I've got a power bank you can borrow.", k: "보조 배터리 있어요, 빌려 드릴게요.", n: "power bank = 보조 배터리." },
    { e: "Sorry, we don't allow charging. Fire rules.", k: "죄송해요, 충전은 안 돼요. 소방 규정이라서요.", n: "Fire rules = 소방 규정." }
  ]
},

"I missed my train.": {
  where: "기차를 놓치고 창구에서",
  lines: [
    { w: "me", e: "I missed my train. Can I use this ticket on the next one?", k: "기차를 놓쳤어요. 이 표로 다음 차 탈 수 있어요?" },
    { w: "them", e: "Normally no, but I'll let it slide.", k: "원래는 안 되는데, 이번엔 봐 드릴게요." },
    { w: "me", e: "Thank you so much.", k: "정말 고맙습니다." }
  ],
  replies: [
    { e: "Normally no, but I'll let it slide.", k: "원래는 안 되는데, 이번엔 봐 드릴게요.", n: "★ let it slide = 눈감아 주다." },
    { e: "You'll need to buy a new one, I'm afraid.", k: "아쉽지만 새로 사셔야 해요.", n: "I'm afraid 로 거절을 부드럽게." },
    { e: "Next one's in twenty. Just hop on, it's fine.", k: "다음 차가 이십 분 뒤예요. 그냥 타세요, 괜찮아요.", n: "hop on = 올라타다." }
  ]
},

"Is there a pharmacy nearby?": {
  where: "약이 필요할 때",
  lines: [
    { w: "me", e: "Is there a pharmacy nearby?", k: "근처에 약국 있어요?" },
    { w: "them", e: "There's a Boots two streets down.", k: "두 블록 내려가면 부츠 있어요." },
    { w: "me", e: "Is it open this late?", k: "이 시간에도 열어요?" }
  ],
  replies: [
    { e: "There's a Boots two streets down.", k: "두 블록 내려가면 부츠 있어요.", n: "★ Boots 는 영국의 약국 체인. 미국은 CVS, Walgreens." },
    { e: "The one on the corner, but it shuts at six.", k: "모퉁이에 있는데, 6시에 닫아요.", n: "shuts = 닫는다. closes 와 같습니다." },
    { e: "Nearest is by the station. Ten-minute walk.", k: "제일 가까운 건 역 옆이요. 걸어서 십 분이요.", n: "The 가 빠진 Nearest is ~." }
  ]
},

"I don't feel well.": {
  where: "몸이 안 좋을 때",
  lines: [
    { w: "me", e: "Sorry, I don't feel well. Is there somewhere I can sit?", k: "죄송해요, 몸이 안 좋아요. 앉을 데 있을까요?" },
    { w: "them", e: "Come with me, there's a quiet room.", k: "따라오세요, 조용한 방이 있어요." },
    { w: "me", e: "Thank you, I just need a minute.", k: "고마워요, 잠깐이면 괜찮아질 거예요." }
  ],
  replies: [
    { e: "Come with me, there's a quiet room.", k: "따라오세요, 조용한 방이 있어요.", n: "quiet room = 공연장의 안정실." },
    { e: "Do you need medical? I can call someone.", k: "의료진 필요하세요? 불러 드릴 수 있어요.", n: "★ medical = 의료진. 공연장에서 이렇게 줄여 씁니다." },
    { e: "Sit here. I'll get you some water.", k: "여기 앉으세요. 물 갖다 드릴게요.", n: "get you ~ = ~를 갖다 드리다." }
  ]
},

"Could you help me?": {
  where: "도움이 필요할 때",
  lines: [
    { w: "me", e: "Sorry, could you help me for a second?", k: "죄송한데, 잠깐 도와주실 수 있어요?" },
    { w: "them", e: "Sure, what's up?", k: "네, 무슨 일이세요?" },
    { w: "me", e: "I can't work out which door to use.", k: "어느 문으로 들어가야 할지 모르겠어요." }
  ],
  replies: [
    { e: "Sure, what's up?", k: "네, 무슨 일이세요?", n: "★ What's up? = 무슨 일이세요? 인사로도 쓰이지만 여기선 용건을 묻는 말." },
    { e: "Of course. What do you need?", k: "그럼요. 뭐가 필요하세요?", n: "What do you need? 로 바로 용건을 묻습니다." },
    { e: "I'll try! I'm not from here, mind.", k: "해볼게요! 저도 여기 사람은 아니지만요.", n: "★ 끝의 mind 는 '참고로'라는 덧붙임입니다." }
  ]
},

"This is so good.": {
  where: "음식이나 공연이 좋을 때",
  lines: [
    { w: "them", e: "Well? What do you think?", k: "어때요? 어떠세요?" },
    { w: "me", e: "This is so good.", k: "이거 진짜 맛있어요." },
    { w: "them", e: "Told you! I come here every week.", k: "제가 말했죠! 저 매주 와요." }
  ],
  replies: [
    { e: "Told you! I come here every week.", k: "제가 말했죠! 저 매주 와요.", n: "★ I 가 빠진 Told you! = 내 말이 맞죠." },
    { e: "Right? Wait till you try the dessert.", k: "그쵸? 디저트도 드셔 보세요.", n: "Wait till you ~ = ~해 보시면 더 놀라실 거예요." },
    { e: "Glad you like it. It's my favourite too.", k: "마음에 드신다니 좋네요. 저도 제일 좋아해요.", n: "I'm 이 빠진 Glad you like it." }
  ]
},

"I could stay here all day.": {
  where: "좋은 곳에 앉아서",
  lines: [
    { w: "them", e: "Shall we head off?", k: "이제 갈까요?" },
    { w: "me", e: "Honestly, I could stay here all day.", k: "솔직히 하루 종일 있어도 좋겠어요." },
    { w: "them", e: "Same. Five more minutes then.", k: "저도요. 그럼 오 분만 더요." }
  ],
  replies: [
    { e: "Same. Five more minutes then.", k: "저도요. 그럼 오 분만 더요.", n: "Five more minutes = 오 분만 더." },
    { e: "We've got time. No rush at all.", k: "시간 있어요. 전혀 안 급해요.", n: "No rush at all = 전혀 안 급하다." },
    { e: "Me too, but the show starts at eight!", k: "저도요, 근데 공연이 여덟 시예요!", n: "현실을 일깨우는 말." }
  ]
},

"Worth the walk.": {
  where: "한참 걸어 도착해서",
  lines: [
    { w: "them", e: "That was further than I thought.", k: "생각보다 멀었네요." },
    { w: "me", e: "Worth the walk, though.", k: "그래도 걸어온 보람 있네요." },
    { w: "them", e: "Definitely. Look at that view.", k: "정말요. 저 경치 좀 봐요." }
  ],
  replies: [
    { e: "Definitely. Look at that view.", k: "정말요. 저 경치 좀 봐요.", n: "Definitely = 정말 그래요." },
    { e: "My legs disagree, but yeah.", k: "제 다리는 반대지만, 그렇긴 하네요.", n: "★ My legs disagree = 다리는 동의 안 한다. 농담입니다." },
    { e: "Told you it'd be worth it.", k: "그럴 만하다고 했잖아요.", n: "it'd = it would." }
  ]
},

"The view is amazing.": {
  where: "전망 좋은 곳에서",
  lines: [
    { w: "me", e: "The view is amazing.", k: "경치가 정말 좋네요." },
    { w: "them", e: "Isn't it? Even better at sunset.", k: "그쵸? 해질 때가 더 좋아요." },
    { w: "me", e: "I might come back for that.", k: "그거 보러 다시 와야겠어요." }
  ],
  replies: [
    { e: "Isn't it? Even better at sunset.", k: "그쵸? 해질 때가 더 좋아요.", n: "★ Isn't it? = 그렇죠? 동의를 구하는 맞장구." },
    { e: "You should see it from the top floor.", k: "꼭대기 층에서 보셔야 해요.", n: "You should see ~ = 꼭 보셔야 해요." },
    { e: "Gets busy later, so you timed it well.", k: "이따 붐벼요, 시간 잘 맞춰 오셨네요.", n: "timed it well = 때를 잘 맞췄다." }
  ]
},

"It's quieter than I expected.": {
  where: "생각보다 한산할 때",
  lines: [
    { w: "me", e: "It's quieter than I expected.", k: "생각보다 조용하네요." },
    { w: "them", e: "Midweek. Come Saturday and it's mayhem.", k: "주중이라서요. 토요일에 오면 난리도 아니에요." },
    { w: "me", e: "I'll stick to midweek then.", k: "그럼 주중에 와야겠네요." }
  ],
  replies: [
    { e: "Midweek. Come Saturday and it's mayhem.", k: "주중이라서요. 토요일에 오면 난리도 아니에요.", n: "★ mayhem = 아수라장. midweek = 주중." },
    { e: "Give it an hour. It fills up fast.", k: "한 시간만 기다려 보세요. 금방 찹니다.", n: "fills up = 사람이 차다." },
    { e: "Lucky. Usually you can't move in here.", k: "운 좋으시네요. 보통은 움직이지도 못해요.", n: "can't move = 사람이 너무 많다." }
  ]
},

"That's a shame.": {
  where: "아쉬운 소식을 들었을 때",
  lines: [
    { w: "them", e: "The rooftop's closed for the winter.", k: "옥상은 겨울이라 닫았어요." },
    { w: "me", e: "Oh, that's a shame.", k: "아, 아쉽네요." },
    { w: "them", e: "I know. It reopens in April, though.", k: "그러니까요. 4월에 다시 열긴 해요." }
  ],
  replies: [
    { e: "I know. It reopens in April, though.", k: "그러니까요. 4월에 다시 열긴 해요.", n: "★ I know = 그러니까요. 맞장구입니다." },
    { e: "Isn't it? Everyone says the same.", k: "그쵸? 다들 그러세요.", n: "the same = 같은 말." },
    { e: "There's a terrace downstairs if that helps.", k: "아래층에 테라스는 있어요, 도움이 될지 모르겠지만.", n: "if that helps = 도움이 된다면." }
  ]
},

"It's a bit much for me.": {
  where: "양이나 값이 부담스러울 때",
  lines: [
    { w: "them", e: "Shall we get the sharing platter?", k: "모둠 요리 시킬까요?" },
    { w: "me", e: "It's a bit much for me, honestly.", k: "솔직히 저한테는 좀 과해요." },
    { w: "them", e: "Fair enough. Let's just get starters.", k: "그럴 만해요. 그럼 전채만 시켜요." }
  ],
  replies: [
    { e: "Fair enough. Let's just get starters.", k: "그럴 만해요. 그럼 전채만 시켜요.", n: "★ starters = 전채(영국). 미국은 appetizers." },
    { e: "Same, actually. Shall we split one?", k: "사실 저도요. 하나 나눠 먹을까요?", n: "split = 나누다." },
    { e: "No worries. Order whatever you fancy.", k: "괜찮아요. 드시고 싶은 걸로 시키세요.", n: "★ whatever you fancy = 마음에 드는 아무거나(영국)." }
  ]
},

"Not bad at all.": {
  where: "기대보다 괜찮을 때",
  lines: [
    { w: "them", e: "Sorry, it's a bit of a basic place.", k: "죄송해요, 좀 소박한 곳이라." },
    { w: "me", e: "Not bad at all, actually.", k: "사실 전혀 나쁘지 않은데요." },
    { w: "them", e: "Right? Cheap and cheerful.", k: "그쵸? 싸고 좋아요." }
  ],
  replies: [
    { e: "Right? Cheap and cheerful.", k: "그쵸? 싸고 좋아요.", n: "★ cheap and cheerful = 값싸고 괜찮은. 통째로 쓰는 말입니다." },
    { e: "Glad you think so. I was worried.", k: "그렇게 봐주시니 다행이에요. 걱정했거든요.", n: "I was worried = 걱정했어요." },
    { e: "Wait for the food before you decide!", k: "음식 나오고 판단하세요!", n: "before you decide = 판단하기 전에." }
  ]
},

"Do you have an English menu?": {
  where: "메뉴를 받아 들고",
  lines: [
    { w: "me", e: "Do you have an English menu?", k: "영어 메뉴 있어요?" },
    { w: "them", e: "We do — one moment, I'll grab one.", k: "있어요. 잠시만요, 가져다 드릴게요." },
    { w: "me", e: "Thank you.", k: "고맙습니다." }
  ],
  replies: [
    { e: "We do — one moment, I'll grab one.", k: "있어요. 잠시만요, 가져다 드릴게요.", n: "We do 로 짧게 긍정. grab = 가져오다." },
    { e: "There's a QR code on the table with translations.", k: "탁자에 큐알 코드 있어요, 번역돼 있어요.", n: "translations = 번역된 것." },
    { e: "Not printed, but I can talk you through it.", k: "인쇄된 건 없는데, 제가 설명해 드릴게요.", n: "★ talk you through = 차근차근 설명해 주다." }
  ]
},

"What's in this?": {
  where: "재료가 궁금할 때",
  lines: [
    { w: "me", e: "Sorry, what's in this one?", k: "죄송한데, 이건 뭐가 들어가요?" },
    { w: "them", e: "Chicken, cream and a bit of garlic.", k: "닭고기, 크림, 마늘 조금이요." },
    { w: "me", e: "Sounds good. I'll take it.", k: "맛있겠네요. 그걸로 할게요." }
  ],
  replies: [
    { e: "Chicken, cream and a bit of garlic.", k: "닭고기, 크림, 마늘 조금이요.", n: "a bit of = 약간의." },
    { e: "Mostly veg. Any allergies I should know about?", k: "주로 채소예요. 알레르기 있으세요?", n: "★ veg = vegetables 줄임말. 알레르기를 되묻습니다." },
    { e: "Let me double-check with the kitchen.", k: "주방에 다시 확인해 볼게요.", n: "double-check = 한 번 더 확인하다." }
  ]
},

"Is this spicy?": {
  where: "매운 걸 못 먹을 때",
  lines: [
    { w: "me", e: "Is this spicy?", k: "이거 매워요?" },
    { w: "them", e: "A little kick, nothing crazy.", k: "살짝 매워요, 심하진 않아요." },
    { w: "me", e: "I can handle a little.", k: "조금은 괜찮아요." }
  ],
  replies: [
    { e: "A little kick, nothing crazy.", k: "살짝 매워요, 심하진 않아요.", n: "★ kick = 매운 맛. nothing crazy = 심하지 않다." },
    { e: "Very. I'd go for something else, honestly.", k: "많이요. 솔직히 다른 걸 고르시는 게 나아요.", n: "go for ~ = ~를 고르다." },
    { e: "Not at all. We can add chilli if you want.", k: "전혀요. 원하시면 고추 넣어 드려요.", n: "chilli = 고추. add = 넣다." }
  ]
},

"I'll have the same.": {
  where: "같이 온 사람과 주문할 때",
  lines: [
    { w: "them", e: "And for you?", k: "손님은요?" },
    { w: "me", e: "I'll have the same, please.", k: "같은 걸로 주세요." },
    { w: "them", e: "Two of those then. Anything to drink?", k: "그럼 두 개요. 음료는요?" }
  ],
  replies: [
    { e: "Two of those then. Anything to drink?", k: "그럼 두 개요. 음료는요?", n: "Two of those = 그거 두 개. then = 그럼." },
    { e: "Good choice. Same size?", k: "잘 고르셨어요. 같은 크기로요?", n: "Same size? 만으로 묻습니다." },
    { e: "Sorry, that was our last one. Something else?", k: "죄송해요, 그게 마지막이었어요. 다른 걸로 하시겠어요?", n: "our last one = 마지막 남은 것." }
  ]
},

"Could I get this without onions?": {
  where: "빼고 싶은 재료가 있을 때",
  lines: [
    { w: "me", e: "Could I get this without onions?", k: "이거 양파 빼고 주실 수 있어요?" },
    { w: "them", e: "No problem, I'll make a note.", k: "문제없어요, 적어 둘게요." },
    { w: "me", e: "Thanks a lot.", k: "정말 고맙습니다." }
  ],
  replies: [
    { e: "No problem, I'll make a note.", k: "문제없어요, 적어 둘게요.", n: "make a note = 메모해 두다." },
    { e: "It comes mixed in, I'm afraid. Sorry.", k: "아쉽지만 섞여서 나와요. 죄송해요.", n: "★ comes mixed in = 이미 섞여 조리된다." },
    { e: "Sure. Anything else you'd like left out?", k: "네. 더 빼드릴 거 있으세요?", n: "left out = 빼다." }
  ]
},

"Just water is fine.": {
  where: "음료를 권할 때",
  lines: [
    { w: "them", e: "Can I get you something to drink?", k: "음료 드릴까요?" },
    { w: "me", e: "Just water is fine, thanks.", k: "물이면 괜찮아요, 고맙습니다." },
    { w: "them", e: "Still or sparkling?", k: "그냥 물이요, 탄산수요?" }
  ],
  replies: [
    { e: "Still or sparkling?", k: "그냥 물이요, 탄산수요?", n: "★ still = 탄산 없는 물, sparkling = 탄산수. 반드시 묻습니다." },
    { e: "Tap water okay?", k: "수돗물 괜찮으세요?", n: "★ tap water = 수돗물. 유럽에선 공짜로 줍니다." },
    { e: "Sure, I'll bring a jug for the table.", k: "네, 한 병 갖다 드릴게요.", n: "jug = 물병. for the table = 테이블용으로." }
  ]
},

"Could I get a to-go box?": {
  where: "남은 음식을 싸 갈 때",
  lines: [
    { w: "me", e: "Could I get a to-go box?", k: "포장 용기 하나 주실 수 있어요?" },
    { w: "them", e: "Of course. I'll box it up for you.", k: "그럼요. 담아 드릴게요." },
    { w: "me", e: "That's great, thanks.", k: "좋아요, 고맙습니다." }
  ],
  replies: [
    { e: "Of course. I'll box it up for you.", k: "그럼요. 담아 드릴게요.", n: "box it up = 담아 주다." },
    { e: "Sure — we call it a doggy bag here!", k: "네, 여기선 도기백이라고 해요!", n: "★ doggy bag = 남은 음식 포장. 개와 상관없습니다." },
    { e: "Yep, there's a small charge for the container.", k: "네, 용기 값이 조금 있어요.", n: "container = 용기." }
  ]
},

"That was delicious.": {
  where: "식사를 마치고 나가며",
  lines: [
    { w: "them", e: "How was everything?", k: "식사는 어떠셨어요?" },
    { w: "me", e: "That was delicious. Really.", k: "정말 맛있었어요. 진심으로요." },
    { w: "them", e: "So glad to hear it. Come back soon!", k: "그렇게 말씀해 주시니 기쁘네요. 또 오세요!" }
  ],
  replies: [
    { e: "So glad to hear it. Come back soon!", k: "그렇게 말씀해 주시니 기쁘네요. 또 오세요!", n: "I'm 이 빠진 So glad to hear it." },
    { e: "I'll pass that on to the chef.", k: "주방장에게 전할게요.", n: "★ pass on = 전해 주다." },
    { e: "That's lovely, thank you. Which was your favourite?", k: "감사합니다. 어떤 게 제일 좋으셨어요?", n: "favourite = 제일 좋아하는 것(영국식 철자)." }
  ]
},

"How much is this?": {
  where: "가격표가 없을 때",
  lines: [
    { w: "me", e: "Excuse me, how much is this?", k: "실례합니다, 이거 얼마예요?" },
    { w: "them", e: "That one's fifteen, but it's two for twenty-five.", k: "그건 15인데, 두 개면 25예요." },
    { w: "me", e: "Oh, I'll take two then.", k: "아, 그럼 두 개 할게요." }
  ],
  replies: [
    { e: "That one's fifteen, but it's two for twenty-five.", k: "그건 15인데, 두 개면 25예요.", n: "★ two for twenty-five = 두 개에 25. 묶음 할인입니다." },
    { e: "Let me scan it — the label's come off.", k: "찍어 볼게요. 가격표가 떨어졌네요.", n: "come off = 떨어지다." },
    { e: "Twelve, down from twenty. It's in the sale.", k: "20에서 내려서 12예요. 세일 상품이에요.", n: "down from ~ = ~에서 내린." }
  ]
},

"Could I get a bag?": {
  where: "계산하면서",
  lines: [
    { w: "me", e: "Could I get a bag, please?", k: "봉투 하나 주실 수 있어요?" },
    { w: "them", e: "Sure, that's twenty p.", k: "네, 20펜스예요." },
    { w: "me", e: "That's fine.", k: "괜찮아요." }
  ],
  replies: [
    { e: "Sure, that's twenty p.", k: "네, 20펜스예요.", n: "★ p = 펜스(영국 동전). 봉투는 대개 유료입니다." },
    { e: "Paper or plastic?", k: "종이요, 비닐이요?", n: "미국 마트에서 늘 묻는 말입니다." },
    { e: "We've only got the big ones, is that okay?", k: "큰 것밖에 없는데 괜찮으세요?", n: "the big ones = 큰 것들." }
  ]
},

"Is this on sale?": {
  where: "세일 표시가 애매할 때",
  lines: [
    { w: "me", e: "Is this on sale?", k: "이거 세일하는 거예요?" },
    { w: "them", e: "It is — thirty percent off at the till.", k: "네, 계산대에서 30퍼센트 빠져요." },
    { w: "me", e: "Brilliant.", k: "잘됐네요." }
  ],
  replies: [
    { e: "It is — thirty percent off at the till.", k: "네, 계산대에서 30퍼센트 빠져요.", n: "★ till = 계산대(영국). 미국은 register." },
    { e: "Only the ones with the red tag, sorry.", k: "빨간 표 붙은 것만요, 죄송해요.", n: "tag = 가격표." },
    { e: "Sale ended yesterday, I'm afraid.", k: "아쉽지만 세일은 어제 끝났어요.", n: "I'm afraid 로 나쁜 소식을 부드럽게." }
  ]
},

"I'll take it.": {
  where: "사기로 마음먹었을 때",
  lines: [
    { w: "them", e: "How's that one looking?", k: "그거 어떠세요?" },
    { w: "me", e: "Yeah, I'll take it.", k: "네, 이걸로 할게요." },
    { w: "them", e: "Lovely. I'll ring that up for you.", k: "좋아요. 계산해 드릴게요." }
  ],
  replies: [
    { e: "Lovely. I'll ring that up for you.", k: "좋아요. 계산해 드릴게요.", n: "★ ring up = 계산하다. 옛날 금전등록기에서 온 말." },
    { e: "Great choice. Want me to keep the hanger?", k: "잘 고르셨어요. 옷걸이는 빼 드릴까요?", n: "hanger = 옷걸이." },
    { e: "Perfect. Paying by card?", k: "좋아요. 카드로 하세요?", n: "Are you 가 빠진 Paying by card?" }
  ]
},

"Could I get a receipt?": {
  where: "계산 후",
  lines: [
    { w: "me", e: "Could I get a receipt?", k: "영수증 주실 수 있어요?" },
    { w: "them", e: "Printed or emailed?", k: "종이요, 이메일이요?" },
    { w: "me", e: "Printed, please.", k: "종이로 주세요." }
  ],
  replies: [
    { e: "Printed or emailed?", k: "종이요, 이메일이요?", n: "요즘 가게에서 자주 묻습니다." },
    { e: "It's in the bag already.", k: "봉투에 이미 넣었어요.", n: "already = 이미." },
    { e: "Course. Keep it for the tax refund.", k: "그럼요. 세금 환급받으려면 잘 보관하세요.", n: "★ tax refund = 세금 환급. 여행자에게 중요합니다." }
  ]
},

"Can I return this?": {
  where: "환불하러 가서",
  lines: [
    { w: "me", e: "Can I return this? It doesn't fit.", k: "이거 환불돼요? 안 맞아서요." },
    { w: "them", e: "Do you have the receipt?", k: "영수증 있으세요?" },
    { w: "me", e: "Yes, here it is.", k: "네, 여기요." }
  ],
  replies: [
    { e: "Do you have the receipt?", k: "영수증 있으세요?", n: "환불의 첫 질문입니다. 영수증을 챙기세요." },
    { e: "We can exchange, but no refunds on sale items.", k: "교환은 되는데, 세일 상품은 환불이 안 돼요.", n: "★ exchange = 교환, refund = 환불. 둘은 다릅니다." },
    { e: "Sure. It'll go back on the same card.", k: "네. 같은 카드로 돌아갑니다.", n: "go back on ~ = ~로 환급되다." }
  ]
},

"Is this the right way to the museum?": {
  where: "걷다가 방향이 맞는지 확인할 때",
  lines: [
    { w: "me", e: "Sorry, is this the right way to the museum?", k: "죄송한데, 박물관 이쪽 방향 맞아요?" },
    { w: "them", e: "Yep, keep going, it's on the left.", k: "네, 쭉 가시면 왼쪽에 있어요." },
    { w: "me", e: "Great, thanks.", k: "잘됐네요, 고맙습니다." }
  ],
  replies: [
    { e: "Yep, keep going, it's on the left.", k: "네, 쭉 가시면 왼쪽에 있어요.", n: "keep going = 계속 가세요." },
    { e: "You've gone a bit far. It's back that way.", k: "좀 지나치셨어요. 저쪽으로 돌아가셔야 해요.", n: "gone a bit far = 조금 지나쳤다." },
    { e: "It is, but the entrance is round the back.", k: "맞는데, 입구는 뒤쪽이에요.", n: "round the back = 뒤로 돌아서." }
  ]
},

"Which platform is it?": {
  where: "기차역 전광판 앞에서",
  lines: [
    { w: "me", e: "Excuse me, which platform is it for Oxford?", k: "실례합니다, 옥스퍼드행은 몇 번 승강장이에요?" },
    { w: "them", e: "Platform four, but it changes sometimes.", k: "4번이요, 근데 가끔 바뀌어요." },
    { w: "me", e: "I'll keep an eye on the board. Thanks.", k: "전광판 계속 볼게요. 고맙습니다." }
  ],
  replies: [
    { e: "Platform four, but it changes sometimes.", k: "4번이요, 근데 가끔 바뀌어요.", n: "platform = 승강장. 영국 기차역에서 늘 씁니다." },
    { e: "It's not up yet. Check the board in ten.", k: "아직 안 떴어요. 십 분 뒤에 전광판 보세요.", n: "★ not up yet = 아직 안 떴다. in ten = 십 분 뒤에." },
    { e: "Nine, right at the end. You'll have to hurry.", k: "9번이요, 맨 끝에요. 서두르셔야 해요.", n: "right at the end = 맨 끝에." }
  ]
},

"Where do I transfer?": {
  where: "지하철에서 갈아탈 곳을 물을 때",
  lines: [
    { w: "me", e: "Where do I transfer for the airport?", k: "공항 가려면 어디서 갈아타요?" },
    { w: "them", e: "Change at King's Cross, then take the blue line.", k: "킹스크로스에서 갈아타고 파란 노선 타세요." },
    { w: "me", e: "King's Cross, blue line. Got it.", k: "킹스크로스, 파란 노선. 알겠어요." }
  ],
  replies: [
    { e: "Change at King's Cross, then take the blue line.", k: "킹스크로스에서 갈아타고 파란 노선 타세요.", n: "★ 영국은 transfer 대신 change 를 씁니다." },
    { e: "You don't — this one goes straight there.", k: "안 갈아타셔도 돼요. 이게 바로 가요.", n: "You don't 뒤가 생략됐습니다. straight there = 바로 그곳까지." },
    { e: "Two more stops, then follow the signs.", k: "두 정거장 더 가서 표지판 따라가세요.", n: "stops = 정거장. 동사 없이 시작합니다." }
  ]
},

"How long does it take?": {
  where: "가는 데 걸리는 시간을 물을 때",
  lines: [
    { w: "me", e: "How long does it take to get there?", k: "거기까지 얼마나 걸려요?" },
    { w: "them", e: "Half an hour, give or take.", k: "삼십 분쯤이요." },
    { w: "me", e: "That's fine. Thanks.", k: "괜찮네요. 고맙습니다." }
  ],
  replies: [
    { e: "Half an hour, give or take.", k: "삼십 분쯤이요.", n: "★ give or take = 대략. 앞뒤로 조금 차이 난다는 뜻." },
    { e: "Depends on traffic. Could be twenty, could be an hour.", k: "차 막히기 나름이에요. 이십 분일 수도, 한 시간일 수도.", n: "Depends on ~ = ~에 달렸다." },
    { e: "Not long at all — fifteen minutes tops.", k: "얼마 안 걸려요. 길어야 십오 분이요.", n: "★ tops = 최대로 잡아서." }
  ]
},

"Is it walking distance?": {
  where: "걸어갈 만한지 물을 때",
  lines: [
    { w: "me", e: "Is it walking distance from here?", k: "여기서 걸어갈 만한 거리예요?" },
    { w: "them", e: "Easily. Ten minutes, straight down.", k: "그럼요. 십 분, 쭉 내려가시면 돼요." },
    { w: "me", e: "I'll walk then. Cheers.", k: "그럼 걸어갈게요. 고마워요." }
  ],
  replies: [
    { e: "Easily. Ten minutes, straight down.", k: "그럼요. 십 분, 쭉 내려가시면 돼요.", n: "Easily = 당연히 가능해요. 한 단어로 답합니다." },
    { e: "You could, but it's uphill the whole way.", k: "걸을 순 있는데, 계속 오르막이에요.", n: "uphill = 오르막. the whole way = 내내." },
    { e: "I wouldn't. Grab a bus, it's much easier.", k: "저라면 안 걸어요. 버스 타세요, 훨씬 편해요.", n: "★ I wouldn't = 저라면 안 그러겠어요. 조언하는 말." }
  ]
},

"Could you show me on the map?": {
  where: "말로 들어선 잘 모르겠을 때",
  lines: [
    { w: "me", e: "Sorry, could you show me on the map?", k: "죄송한데, 지도에서 짚어 주실 수 있어요?" },
    { w: "them", e: "Sure, hand it over. We're here, you want here.", k: "그럼요, 줘 보세요. 여기가 지금 자리고, 여기로 가시면 돼요." },
    { w: "me", e: "Oh, that's much clearer. Thank you.", k: "아, 훨씬 명확하네요. 고맙습니다." }
  ],
  replies: [
    { e: "Sure, hand it over. We're here, you want here.", k: "그럼요, 줘 보세요. 여기가 지금 자리고, 여기로 가시면 돼요.", n: "hand it over = 이리 줘 보세요. you want here = 여기로 가셔야 해요." },
    { e: "Let me just put it in your phone instead.", k: "그냥 폰에 찍어 드릴게요.", n: "instead = 대신에. 지도 대신 폰을 씁니다." },
    { e: "I can't read maps either, honestly. Let's ask someone.", k: "솔직히 저도 지도를 못 봐요. 누구한테 물어봐요.", n: "either = 저도 마찬가지로 못한다." }
  ]
},

"Could you let me know when we get there?": {
  where: "버스에서 기사나 옆사람에게",
  lines: [
    { w: "me", e: "Could you let me know when we get there?", k: "도착하면 알려 주실 수 있어요?" },
    { w: "them", e: "Course. I'll give you a shout.", k: "그럼요. 불러 드릴게요." },
    { w: "me", e: "That's really kind, thank you.", k: "정말 감사해요." }
  ],
  replies: [
    { e: "Course. I'll give you a shout.", k: "그럼요. 불러 드릴게요.", n: "★ Of 가 빠진 Course. give a shout = 불러 주다." },
    { e: "Sure, it's about six stops. Sit tight.", k: "네, 여섯 정거장쯤이요. 편히 계세요.", n: "★ Sit tight = 가만히 계세요." },
    { e: "I'm getting off before you, sorry. Ask the driver.", k: "제가 먼저 내려서요, 죄송해요. 기사님한테 물어보세요.", n: "getting off = 내리다." }
  ]
},

"One ticket to Oxford, please.": {
  where: "매표소에서",
  lines: [
    { w: "me", e: "One ticket to Oxford, please.", k: "옥스퍼드 표 한 장 주세요." },
    { w: "them", e: "Single or return?", k: "편도예요, 왕복이에요?" },
    { w: "me", e: "Return, please.", k: "왕복으로 주세요." }
  ],
  replies: [
    { e: "Single or return?", k: "편도예요, 왕복이에요?", n: "★ single = 편도, return = 왕복 (영국). 미국은 one-way, round-trip." },
    { e: "Sure. Any railcard?", k: "네. 할인 카드 있으세요?", n: "railcard = 기차 할인 카드. 없으면 No 하면 됩니다." },
    { e: "Next one's in forty minutes, is that okay?", k: "다음 차가 사십 분 뒤인데 괜찮으세요?", n: "Next one = 다음 기차." }
  ]
},

"What time is the last train?": {
  where: "늦은 시간 역에서",
  lines: [
    { w: "me", e: "What time is the last train back?", k: "돌아가는 막차가 몇 시예요?" },
    { w: "them", e: "Quarter past eleven off platform two.", k: "11시 15분, 2번 승강장에서요." },
    { w: "me", e: "Good, I've got time.", k: "다행이다, 시간 있네요." }
  ],
  replies: [
    { e: "Quarter past eleven off platform two.", k: "11시 15분, 2번 승강장에서요.", n: "★ quarter past eleven = 11시 15분. quarter to 면 15분 전입니다." },
    { e: "You've just missed it, I'm afraid.", k: "아쉽지만 방금 놓치셨어요.", n: "★ I'm afraid 는 나쁜 소식을 부드럽게 전하는 말." },
    { e: "Half twelve on weekends, earlier on Sundays.", k: "주말엔 12시 반, 일요일은 더 일러요.", n: "half twelve = 12시 반 (영국)." }
  ]
},

"Which exit should I take?": {
  where: "역 안에서 출구를 찾을 때",
  lines: [
    { w: "me", e: "Which exit should I take for the arena?", k: "공연장 가려면 몇 번 출구로 나가요?" },
    { w: "them", e: "Exit C. Just follow the crowd, honestly.", k: "C 출구요. 솔직히 사람들 따라가시면 돼요." },
    { w: "me", e: "Ha, fair enough. Thanks.", k: "하하, 그러네요. 고맙습니다." }
  ],
  replies: [
    { e: "Exit C. Just follow the crowd, honestly.", k: "C 출구요. 솔직히 사람들 따라가시면 돼요.", n: "follow the crowd = 사람들 따라가다." },
    { e: "Any of them, they all come out the same side.", k: "아무 데나요, 다 같은 쪽으로 나와요.", n: "come out = (출구가) 나오다." },
    { e: "Take the one signposted for the stadium.", k: "경기장이라고 써 있는 쪽으로 나가세요.", n: "signposted = 표지판이 붙은." }
  ]
},

"I think I'm lost.": {
  where: "길을 잃고 누군가에게",
  lines: [
    { w: "me", e: "Sorry to bother you — I think I'm lost.", k: "죄송한데, 길을 잃은 것 같아요." },
    { w: "them", e: "No bother. Where are you trying to get to?", k: "괜찮아요. 어디 가시려고요?" },
    { w: "me", e: "The arena. I came out the wrong exit.", k: "공연장이요. 출구를 잘못 나왔어요." }
  ],
  replies: [
    { e: "No bother. Where are you trying to get to?", k: "괜찮아요. 어디 가시려고요?", n: "trying to get to = 가려고 하는 곳." },
    { e: "Happens to everyone here. What's the address?", k: "여기선 다들 그래요. 주소가 어떻게 돼요?", n: "Happens to everyone = 다들 그래요. It 이 빠졌습니다." },
    { e: "Show me on your phone and I'll point you.", k: "폰으로 보여 주시면 방향 알려 드릴게요.", n: "point you = 방향을 가리켜 주다." }
  ]
},

"What time is check-out?": {
  where: "체크인하면서 미리 확인",
  lines: [
    { w: "me", e: "What time is check-out?", k: "체크아웃 몇 시예요?" },
    { w: "them", e: "Eleven, but you can leave bags after.", k: "11시요, 그 뒤에도 짐은 맡기실 수 있어요." },
    { w: "me", e: "That's useful, thanks.", k: "유용하네요, 고맙습니다." }
  ],
  replies: [
    { e: "Eleven, but you can leave bags after.", k: "11시요, 그 뒤에도 짐은 맡기실 수 있어요.", n: "leave bags = 짐을 맡기다." },
    { e: "Ten thirty, I'm afraid. It's quite early here.", k: "아쉽지만 10시 30분이요. 여긴 좀 일러요." , n: "quite early = 꽤 이른." },
    { e: "Midday. Late check-out's ten pounds if you want it.", k: "정오요. 늦은 체크아웃은 10파운드예요.", n: "★ Midday = 정오. late check-out = 연장 퇴실." }
  ]
},

"Is breakfast included?": {
  where: "프런트에서",
  lines: [
    { w: "me", e: "Is breakfast included?", k: "조식 포함인가요?" },
    { w: "them", e: "It is, seven to ten in the room downstairs.", k: "네, 7시부터 10시까지 아래층에서요." },
    { w: "me", e: "Lovely, thank you.", k: "좋네요, 고맙습니다." }
  ],
  replies: [
    { e: "It is, seven to ten in the room downstairs.", k: "네, 7시부터 10시까지 아래층에서요.", n: "It is 로 짧게 긍정합니다. downstairs = 아래층." },
    { e: "Not on this rate, but it's eight pounds extra.", k: "이 요금엔 안 들어가요, 8파운드 추가예요.", n: "★ rate = 요금제. extra = 추가로." },
    { e: "Yes — continental only, though. No hot food.", k: "네, 근데 간단한 것만요. 따뜻한 음식은 없어요.", n: "continental = 빵·커피 정도의 간단한 조식." }
  ]
},

"Could I get an extra towel?": {
  where: "프런트에 전화해서",
  lines: [
    { w: "me", e: "Could I get an extra towel, please?", k: "수건 하나 더 주실 수 있어요?" },
    { w: "them", e: "Of course. I'll send one up.", k: "그럼요. 올려 보내 드릴게요." },
    { w: "me", e: "Thank you.", k: "고맙습니다." }
  ],
  replies: [
    { e: "Of course. I'll send one up.", k: "그럼요. 올려 보내 드릴게요.", n: "★ send up = 위층으로 올려 보내다." },
    { e: "Sure, there should be spares in the wardrobe too.", k: "네, 옷장에도 여분이 있을 거예요.", n: "spares = 여분. wardrobe = 옷장." },
    { e: "No problem. Room number?", k: "네. 방 번호가요?", n: "동사 없이 Room number? 만으로 묻습니다." }
  ]
},

"The wifi isn't working.": {
  where: "인터넷이 안 될 때",
  lines: [
    { w: "me", e: "Sorry, the wifi isn't working in my room.", k: "죄송한데, 방에서 와이파이가 안 돼요." },
    { w: "them", e: "Try reconnecting — the password changed today.", k: "다시 연결해 보세요. 오늘 비밀번호가 바뀌었어요." },
    { w: "me", e: "Ah, that explains it.", k: "아, 그래서였군요." }
  ],
  replies: [
    { e: "Try reconnecting — the password changed today.", k: "다시 연결해 보세요. 오늘 비밀번호가 바뀌었어요.", n: "reconnecting = 다시 연결하기." },
    { e: "It's been patchy all day. I'll report it.", k: "하루 종일 들쭉날쭉했어요. 알려 둘게요.", n: "★ patchy = 되다 말다 하는. report it = 신고하다." },
    { e: "Which floor? The third one's always weak.", k: "몇 층이세요? 3층이 늘 약해요.", n: "weak = (신호가) 약한." }
  ]
},

"The room is a bit cold.": {
  where: "방이 추울 때",
  lines: [
    { w: "me", e: "The room is a bit cold. Is there a heater?", k: "방이 좀 추운데요. 난방기 있어요?" },
    { w: "them", e: "There's a dial by the window. Turn it right.", k: "창가에 조절기가 있어요. 오른쪽으로 돌리세요." },
    { w: "me", e: "I'll try that, thanks.", k: "해볼게요, 고맙습니다." }
  ],
  replies: [
    { e: "There's a dial by the window. Turn it right.", k: "창가에 조절기가 있어요. 오른쪽으로 돌리세요.", n: "dial = 돌리는 조절기." },
    { e: "I'll bring up an extra duvet.", k: "이불 하나 더 갖다 드릴게요.", n: "★ duvet = 두툼한 이불. 영국에서 흔한 말입니다." },
    { e: "Sorry about that — the heating comes on at six.", k: "죄송해요. 난방은 6시에 들어와요.", n: "comes on = 켜지다." }
  ]
},

"Is a late check-out possible?": {
  where: "하루 더 쓰고 싶을 때",
  lines: [
    { w: "me", e: "Is a late check-out possible?", k: "늦은 체크아웃 가능할까요?" },
    { w: "them", e: "Until two, yes. There's a small charge.", k: "2시까지는 가능해요. 약간의 요금이 있고요." },
    { w: "me", e: "That works. Let's do that.", k: "괜찮네요. 그렇게 할게요." }
  ],
  replies: [
    { e: "Until two, yes. There's a small charge.", k: "2시까지는 가능해요. 약간의 요금이 있고요.", n: "a small charge = 소액 요금." },
    { e: "Not today, sorry — we're fully booked.", k: "오늘은 안 돼요, 죄송해요. 예약이 꽉 찼어요.", n: "fully booked = 예약이 다 찬." },
    { e: "Let me check with housekeeping and call you back.", k: "객실 정비팀에 물어보고 다시 연락드릴게요.", n: "housekeeping = 객실 정비. call you back = 다시 전화하다." }
  ]
},

"Could you call a taxi for me?": {
  where: "나가기 전에 프런트에서",
  lines: [
    { w: "me", e: "Could you call a taxi for me?", k: "택시 좀 불러 주실 수 있어요?" },
    { w: "them", e: "Certainly. Where are you headed?", k: "물론이죠. 어디로 가세요?" },
    { w: "me", e: "The arena, please.", k: "공연장이요." }
  ],
  replies: [
    { e: "Certainly. Where are you headed?", k: "물론이죠. 어디로 가세요?", n: "★ headed = 향하는. Where are you headed? = 어디 가세요?" },
    { e: "Sure, it'll be about ten minutes. Wait in the lobby.", k: "네, 십 분쯤 걸려요. 로비에서 기다리세요.", n: "lobby = 로비." },
    { e: "An app would be quicker at this hour, honestly.", k: "솔직히 이 시간엔 앱이 더 빨라요.", n: "at this hour = 이 시간대에는." }
  ]
},

"Which floor is it on?": {
  where: "시설 위치를 물을 때",
  lines: [
    { w: "me", e: "Which floor is it on?", k: "몇 층에 있어요?" },
    { w: "them", e: "Second floor. Lift's just round the corner.", k: "2층이요. 승강기는 저 모퉁이 돌면 있어요." },
    { w: "me", e: "Thanks very much.", k: "정말 고맙습니다." }
  ],
  replies: [
    { e: "Second floor. Lift's just round the corner.", k: "2층이요. 승강기는 저 모퉁이 돌면 있어요.", n: "★ lift = 승강기(영국). 미국은 elevator." },
    { e: "Ground floor, actually — same as reception.", k: "사실 1층이요. 프런트랑 같은 층이에요.", n: "★ ground floor 가 영국의 1층입니다. first floor 는 2층이에요." },
    { e: "Top floor. Worth it for the view.", k: "꼭대기 층이요. 전망 때문에 올라갈 만해요.", n: "Worth it = 그럴 만한 값어치가 있다." }
  ]
},

"There you go.": {
  where: "직원이 문제를 해결해 주고",
  lines: [
    { w: "them", e: "There you go. All sorted.", k: "됐습니다. 다 처리됐어요." },
    { w: "me", e: "Oh, that was quick. Thank you.", k: "아, 빠르네요. 고맙습니다." },
    { w: "them", e: "No problem. Anything else?", k: "별말씀을요. 더 필요한 거 있으세요?" }
  ],
  replies: [
    { e: "No problem. Anything else?", k: "별말씀을요. 더 필요한 거 있으세요?", n: "Anything else 가 한 덩어리로 붙습니다." },
    { e: "Happy to help. Have a good one.", k: "도와드려서 기뻐요. 좋은 하루 보내세요.", n: "Happy to help = 도움이 됐다니 좋네요." },
    { e: "That's what I'm here for.", k: "그러라고 있는 거죠.", n: "겸손하게 받는 말. 직역하면 어색하니 통째로 외우세요." }
  ]
},

"Go ahead.": {
  where: "좁은 문 앞에서 서로 양보할 때",
  lines: [
    { w: "me", e: "Oh, sorry — after you.", k: "아, 죄송해요. 먼저 가세요." },
    { w: "them", e: "No, go ahead.", k: "아니에요, 먼저 가세요." },
    { w: "me", e: "Thanks.", k: "고마워요." }
  ],
  replies: [
    { e: "No, go ahead.", k: "아니에요, 먼저 가세요.", n: "★ No 로 시작하지만 양보하는 말입니다." },
    { e: "Please, after you. I'm not in a rush.", k: "먼저 가세요. 저는 안 급해요.", n: "after you = 먼저 가세요. in a rush = 급한." },
    { e: "We'll be here all day! You first.", k: "이러다 하루 종일 가겠어요! 먼저 가세요.", n: "서로 양보할 때 하는 농담입니다." }
  ]
},

"Never mind.": {
  where: "말하려다 그만둘 때",
  lines: [
    { w: "me", e: "Sorry, could I ask — actually, never mind.", k: "저기, 뭐 좀 여쭤볼게요. 아, 아니에요." },
    { w: "them", e: "You sure? It's no trouble.", k: "괜찮으세요? 어렵지 않은데요." },
    { w: "me", e: "Yeah, I figured it out. Thanks anyway.", k: "네, 알아냈어요. 그래도 고마워요." }
  ],
  replies: [
    { e: "You sure? It's no trouble.", k: "괜찮으세요? 어렵지 않은데요.", n: "Are 가 빠진 You sure? no trouble = 번거롭지 않다." },
    { e: "Okay, but shout if you need anything.", k: "네, 필요하시면 부르세요.", n: "shout = 부르세요. 소리치라는 게 아닙니다." },
    { e: "No worries. Changed your mind?", k: "괜찮아요. 마음 바뀌셨어요?", n: "Changed your mind? 앞의 Have you 가 빠졌습니다." }
  ]
},

"No worries.": {
  where: "상대가 실수로 부딪히고 사과할 때",
  lines: [
    { w: "them", e: "Oh gosh, I'm so sorry!", k: "어머, 정말 죄송해요!" },
    { w: "me", e: "No worries, you're fine.", k: "괜찮아요, 신경 쓰지 마세요." },
    { w: "them", e: "Thanks, it's so packed in here.", k: "고마워요, 여기 사람이 너무 많네요." }
  ],
  replies: [
    { e: "Thanks, it's so packed in here.", k: "고마워요, 여기 사람이 너무 많네요.", n: "packed = 꽉 찬. 공연장에서 자주 씁니다." },
    { e: "Still, sorry — I didn't see you there.", k: "그래도 죄송해요. 못 봤어요.", n: "Still = 그래도. 한 번 더 사과하는 말." },
    { e: "You're too nice. I nearly took you out!", k: "너무 좋게 봐주시네요. 하마터면 넘어뜨릴 뻔했어요!", n: "take someone out = 여기선 '넘어뜨리다'. 농담입니다." }
  ]
},

"I'm all right, thanks.": {
  where: "권하는 것을 사양할 때",
  lines: [
    { w: "them", e: "Can I get you another drink?", k: "음료 하나 더 드릴까요?" },
    { w: "me", e: "I'm all right, thanks.", k: "괜찮아요, 고맙습니다." },
    { w: "them", e: "No problem. Just the bill then?", k: "네. 그럼 계산서만 드릴까요?" }
  ],
  replies: [
    { e: "No problem. Just the bill then?", k: "네. 그럼 계산서만 드릴까요?", n: "bill = 계산서(영국). 미국은 check 를 씁니다." },
    { e: "Sure. Let me know if you change your mind.", k: "네. 마음 바뀌시면 말씀하세요.", n: "change your mind = 마음이 바뀌다." },
    { e: "Okay! Water's free if you want some.", k: "네! 물은 공짜니까 필요하면 말씀하세요.", n: "free = 공짜. 사양해도 물은 권하는 경우가 많아요." }
  ]
},

"It's on me.": {
  where: "계산하려는 친구를 말리며",
  lines: [
    { w: "them", e: "Let me get this one.", k: "이번엔 제가 낼게요." },
    { w: "me", e: "No, it's on me. You got the tickets.", k: "아니에요, 제가 낼게요. 표는 그쪽이 샀잖아요." },
    { w: "them", e: "Fine, but I'm buying the next round.", k: "알겠어요, 근데 다음은 제가 살게요." }
  ],
  replies: [
    { e: "Fine, but I'm buying the next round.", k: "알겠어요, 근데 다음은 제가 살게요.", n: "next round = 다음 차례. 술집에서 온 말이지만 널리 씁니다." },
    { e: "Are you sure? That's really kind.", k: "정말요? 정말 고마워요.", n: "That's really kind = 마음이 참 곱네요." },
    { e: "Absolutely not, we're splitting it.", k: "절대 안 돼요, 반씩 내요.", n: "★ split = 나눠 내다. 강하게 거절하는 농담조입니다." }
  ]
},

"I'm gonna grab a coffee.": {
  where: "줄에서 잠깐 빠지며",
  lines: [
    { w: "me", e: "I'm gonna grab a coffee. Want one?", k: "커피 좀 사 올게요. 드실래요?" },
    { w: "them", e: "Ooh, yes please. Just a flat white.", k: "오, 좋아요. 플랫화이트 하나요." },
    { w: "me", e: "Got it. Back in five.", k: "알겠어요. 오 분이면 와요." }
  ],
  replies: [
    { e: "Ooh, yes please. Just a flat white.", k: "오, 좋아요. 플랫화이트 하나요.", n: "flat white = 우유 커피의 한 종류. 영국·호주에서 흔합니다." },
    { e: "I'm good, thanks. I've had three already.", k: "저는 괜찮아요. 벌써 세 잔 마셨어요.", n: "★ I'm good = 됐어요(사양). '나는 착하다'가 아닙니다." },
    { e: "Only if you let me pay you back.", k: "돈 드릴 수 있으면요.", n: "Only if ~ = ~해야만. pay you back = 돈을 갚다." }
  ]
},

"Do you want me to wait?": {
  where: "상대가 뭔가를 하러 갈 때",
  lines: [
    { w: "them", e: "I just need to pop to the loo.", k: "화장실만 잠깐 다녀올게요." },
    { w: "me", e: "Do you want me to wait?", k: "기다릴까요?" },
    { w: "them", e: "Would you? I'll be two minutes.", k: "그래 주실래요? 금방 와요." }
  ],
  replies: [
    { e: "Would you? I'll be two minutes.", k: "그래 주실래요? 금방 와요.", n: "★ Would you? 만으로 '그래 주시겠어요?'가 됩니다." },
    { e: "No need, I'll find you inside.", k: "괜찮아요, 안에서 찾을게요.", n: "No need = 그럴 필요 없어요." },
    { e: "If you don't mind! I hate losing people.", k: "괜찮으시면요! 사람 놓치는 거 싫어서요.", n: "losing people = 일행을 놓치는 것." }
  ]
},

"Do you live around here?": {
  where: "현지 사람과 이야기하다가",
  lines: [
    { w: "me", e: "Do you live around here?", k: "이 근처 사세요?" },
    { w: "them", e: "About twenty minutes out, yeah.", k: "이십 분쯤 떨어진 곳에요." },
    { w: "me", e: "Nice. You must know all the good spots.", k: "좋네요. 좋은 데 많이 아시겠어요." }
  ],
  replies: [
    { e: "About twenty minutes out, yeah.", k: "이십 분쯤 떨어진 곳에요.", n: "out = 중심에서 떨어진." },
    { e: "Born and raised. Never left!", k: "나고 자랐어요. 한 번도 안 떠났죠!", n: "Born and raised = 나고 자랐다." },
    { e: "No, I'm visiting too, actually.", k: "아뇨, 사실 저도 놀러 온 거예요.", n: "visiting = 방문 중인. 같은 처지라는 뜻." }
  ]
},

"Have a good one.": {
  where: "가게를 나서며",
  lines: [
    { w: "them", e: "That's you all done.", k: "다 됐습니다." },
    { w: "me", e: "Thanks. Have a good one.", k: "고맙습니다. 좋은 하루 보내세요." },
    { w: "them", e: "You too, take care.", k: "그쪽도요, 잘 가세요." }
  ],
  replies: [
    { e: "You too, take care.", k: "그쪽도요, 잘 가세요.", n: "take care = 잘 지내세요. 헤어질 때 인사입니다." },
    { e: "Cheers, you as well!", k: "고마워요, 그쪽도요!", n: "★ Cheers 는 영국에서 '고마워요'로도 씁니다. 건배가 아니에요." },
    { e: "Thanks! Enjoy the rest of your day.", k: "고마워요! 남은 하루 잘 보내세요.", n: "the rest of your day = 남은 하루." }
  ]
},

"Enjoy your trip.": {
  where: "여행 이야기를 마치고 헤어질 때",
  lines: [
    { w: "them", e: "Right, my bus is here. Nice chatting!", k: "아, 버스 왔네요. 이야기 즐거웠어요!" },
    { w: "me", e: "You too. Enjoy your trip.", k: "저도요. 여행 잘하세요." },
    { w: "them", e: "Thanks! Safe travels to you too.", k: "고마워요! 그쪽도 조심히 다니세요." }
  ],
  replies: [
    { e: "Thanks! Safe travels to you too.", k: "고마워요! 그쪽도 조심히 다니세요.", n: "Safe travels = 조심히 가세요." },
    { e: "Will do! Hope the show's amazing.", k: "그럴게요! 공연 멋지길 바라요.", n: "Will do = 그럴게요. I 가 빠졌습니다." },
    { e: "Cheers. Maybe see you around!", k: "고마워요. 또 봬요!", n: "see you around = 또 봐요(막연하게)." }
  ]
},

"Is this seat 12?": {
  where: "좌석을 찾으며",
  lines: [
    { w: "me", e: "Sorry, is this seat 12?", k: "죄송한데, 여기가 12번 자리예요?" },
    { w: "them", e: "Let's see... yeah, you're right here.", k: "어디 보자… 네, 바로 여기예요." },
    { w: "me", e: "Perfect, thank you.", k: "좋아요, 고맙습니다." }
  ],
  replies: [
    { e: "Let's see... yeah, you're right here.", k: "어디 보자… 네, 바로 여기예요.", n: "Let's see = 어디 보자. 혼잣말처럼 나옵니다." },
    { e: "No, 12's one row back.", k: "아뇨, 12번은 한 줄 뒤예요.", n: "one row back = 한 줄 뒤. 12's = 12 is." },
    { e: "I think so? The numbers are tiny.", k: "아마도요? 번호가 너무 작아서요.", n: "끝을 올려 말하면 확신이 없다는 뜻입니다." }
  ]
},

"I've been waiting years for this.": {
  where: "공연 시작을 기다리며",
  lines: [
    { w: "them", e: "You look emotional already!", k: "벌써 울컥하신 것 같아요!" },
    { w: "me", e: "I've been waiting years for this.", k: "이걸 몇 년을 기다렸어요." },
    { w: "them", e: "Then tonight's going to hit different.", k: "그럼 오늘 밤은 특별하겠네요." }
  ],
  replies: [
    { e: "Then tonight's going to hit different.", k: "그럼 오늘 밤은 특별하겠네요.", n: "★ hit different = 느낌이 다르다. 요즘 말입니다." },
    { e: "Same, I had tickets in 2020 and it got cancelled.", k: "저도요, 2020년에 표 샀는데 취소됐어요.", n: "got cancelled = 취소됐다." },
    { e: "Then you deserve a good spot. Come stand here.", k: "그럼 좋은 자리에 계셔야죠. 여기 서세요.", n: "deserve = ~할 자격이 있다." }
  ]
},

"Do you want me to take one of you?": {
  where: "누가 혼자 사진을 찍고 있을 때",
  lines: [
    { w: "me", e: "Do you want me to take one of you?", k: "제가 찍어 드릴까요?" },
    { w: "them", e: "Would you? That's so kind!", k: "그래 주실래요? 정말 친절하시네요!" },
    { w: "me", e: "Of course. Say when.", k: "그럼요. 준비되면 말씀하세요." }
  ],
  replies: [
    { e: "Would you? That's so kind!", k: "그래 주실래요? 정말 친절하시네요!", n: "That's so kind = 정말 친절하시네요." },
    { e: "Oh, yes please! Get the sign behind me.", k: "아, 좋아요! 뒤에 간판 나오게 찍어 주세요.", n: "get ~ = 사진에 ~를 넣다." },
    { e: "I'm okay, thanks — but could we do a selfie?", k: "괜찮아요, 고마워요. 근데 같이 셀카 찍을래요?", n: "★ 사양하면서 다른 제안을 합니다." }
  ]
},

"Where did you get that?": {
  where: "남이 든 굿즈를 보고",
  lines: [
    { w: "me", e: "That's gorgeous — where did you get that?", k: "그거 예쁘네요. 어디서 사셨어요?" },
    { w: "them", e: "The stand by the entrance. They still had some.", k: "입구 쪽 부스요. 아직 남아 있었어요." },
    { w: "me", e: "I'll run over now. Thanks!", k: "지금 가봐야겠어요. 고마워요!" }
  ],
  replies: [
    { e: "The stand by the entrance. They still had some.", k: "입구 쪽 부스요. 아직 남아 있었어요.", n: "stand = 판매 부스. by ~ = ~ 옆에." },
    { e: "Online, sadly. It's not at the venue.", k: "아쉽게도 인터넷이요. 여기선 안 팔아요.", n: "sadly 를 끼워 아쉬움을 나타냅니다." },
    { e: "A friend made it for me, actually.", k: "사실 친구가 만들어 줬어요.", n: "made it for me = 나를 위해 만들어 줬다." }
  ]
},

"I can't believe I'm here.": {
  where: "불이 꺼지고 함성이 터질 때",
  lines: [
    { w: "them", e: "Here we go!", k: "시작한다!" },
    { w: "me", e: "I can't believe I'm here.", k: "제가 여기 있다는 게 안 믿겨요." },
    { w: "them", e: "Believe it! Now scream with me.", k: "믿으세요! 이제 같이 소리 질러요." }
  ],
  replies: [
    { e: "Believe it! Now scream with me.", k: "믿으세요! 이제 같이 소리 질러요.", n: "Believe it! 로 되받는 말장난입니다." },
    { e: "Neither can I, and I live here!", k: "저도요, 저는 여기 사는데도요!", n: "★ Neither can I = 저도 안 믿겨요. 부정에 맞장구치는 말." },
    { e: "Soak it up. It goes so fast.", k: "마음껏 느끼세요. 금방 지나가요.", n: "soak it up = 흠뻑 느끼다." }
  ]
},

"You all set?": {
  where: "계산대에서 점원이",
  lines: [
    { w: "them", e: "You all set?", k: "다 되셨어요?" },
    { w: "me", e: "Yes, that's everything.", k: "네, 그게 다예요." },
    { w: "them", e: "Great, that's twelve fifty.", k: "네, 12달러 50센트입니다." }
  ],
  replies: [
    { e: "Great, that's twelve fifty.", k: "네, 12달러 50센트입니다.",
      n: "★ twelve fifty = 12달러 50센트. 달러·센트를 붙여 말합니다." },
    { e: "Perfect. Card or cash?", k: "네. 카드로요, 현금으로요?",
      n: "Card or cash 가 한 덩어리로 붙습니다." },
    { e: "Cool. Any bags today?", k: "네. 봉투 필요하세요?",
      n: "Any bags? 만으로 '봉투 드릴까요'가 됩니다." },
    { e: "Alright, just this then?", k: "알겠습니다, 이것만요?",
      n: "then 이 끝에 붙어 '그럼'. 확인하는 말이에요." },
    { e: "Sure thing. Do you have a rewards card?", k: "네. 적립 카드 있으세요?",
      n: "rewards card = 적립 카드. 미국 가게에서 꼭 묻습니다." }
  ]
},

"Are you good?": {
  where: "직원이 지나가며",
  lines: [
    { w: "them", e: "Are you good?", k: "괜찮으세요?" },
    { w: "me", e: "Yes, we're good, thanks.", k: "네, 괜찮아요, 고맙습니다." },
    { w: "them", e: "Alright, just wave if you need me.", k: "네, 필요하시면 손 들어 주세요." }
  ],
  replies: [
    { e: "Alright, just wave if you need me.", k: "네, 필요하시면 손 들어 주세요.",
      n: "wave = 손을 흔들다. 직원을 부르는 방법입니다." },
    { e: "Cool. I'll check back in a bit.", k: "네. 조금 뒤에 다시 올게요.",
      n: "check back = 다시 와서 확인하다. in a bit = 조금 뒤에." },
    { e: "Okay! More water coming up.", k: "네! 물 더 갖다 드릴게요.",
      n: "coming up = 곧 나갑니다. 주문 받을 때도 씁니다." },
    { e: "No worries. Enjoy!", k: "알겠습니다. 맛있게 드세요!",
      n: "Enjoy! 한 단어로 '맛있게 드세요'가 됩니다." },
    { e: "Sure. Can I take any of these?", k: "네. 이것들 좀 치워도 될까요?",
      n: "take = 여기선 '빈 접시를 치우다'." }
  ]
},

"How's it going?": {
  where: "가게에 들어서자마자",
  lines: [
    { w: "them", e: "Hey, how's it going?", k: "안녕하세요, 어서 오세요." },
    { w: "me", e: "Good, thanks. How about you?", k: "좋아요, 고마워요. 그쪽은요?" },
    { w: "them", e: "Can't complain! What can I do for you?", k: "괜찮아요! 뭘 도와드릴까요?" }
  ],
  replies: [
    { e: "Can't complain! What can I do for you?", k: "괜찮아요! 뭘 도와드릴까요?",
      n: "★ Can't complain = 나쁘지 않아요. 불평하는 말이 아닙니다." },
    { e: "Not bad, thanks for asking.", k: "괜찮아요, 물어봐 주셔서 고마워요.",
      n: "Not bad 는 '괜찮다'는 긍정입니다." },
    { e: "Busy day! But good. You looking for anything?", k: "바쁜 날이네요! 그래도 좋아요. 찾으시는 거 있으세요?",
      n: "Are 가 빠진 You looking for ~? 입니다." },
    { e: "Living the dream. What can I get started for you?", k: "잘 지내죠 뭐. 뭐 준비해 드릴까요?",
      n: "★ Living the dream 은 농담조로 '그럭저럭'이라는 뜻이에요." },
    { e: "All good! Take your time, have a look around.", k: "좋아요! 천천히 둘러보세요.",
      n: "have a look around = 둘러보다." }
  ]
},

"Here you go.": {
  where: "물건을 건네받으며",
  lines: [
    { w: "them", e: "Here you go.", k: "여기 있습니다." },
    { w: "me", e: "Thanks so much.", k: "정말 고맙습니다." },
    { w: "them", e: "You're welcome. Have a good one.", k: "천만에요. 좋은 하루 보내세요." }
  ],
  replies: [
    { e: "You're welcome. Have a good one.", k: "천만에요. 좋은 하루 보내세요.",
      n: "★ Have a good one = 좋은 하루 보내세요. day 를 one 으로 바꿔 말합니다." },
    { e: "No problem at all. Enjoy!", k: "별말씀을요. 맛있게 드세요!",
      n: "No problem at all = 전혀 문제없어요." },
    { e: "Of course. Careful, it's hot.", k: "그럼요. 조심하세요, 뜨거워요.",
      n: "Careful 한 단어로 주의를 줍니다." },
    { e: "You got it. Next!", k: "네. 다음 분!",
      n: "★ You got it = 알겠습니다, 네. 붙잡았다는 뜻이 아닙니다." },
    { e: "There you are. Need a receipt?", k: "여기요. 영수증 드릴까요?",
      n: "There you are 도 '여기 있습니다'입니다." }
  ]
},

"Take your time.": {
  where: "메뉴를 못 고르고 있을 때",
  lines: [
    { w: "me", e: "Sorry, I need another minute.", k: "죄송해요, 조금만 더 볼게요." },
    { w: "them", e: "Take your time, no rush.", k: "천천히 하세요, 안 급해요." },
    { w: "me", e: "Thank you.", k: "고맙습니다." }
  ],
  replies: [
    { e: "Take your time, no rush.", k: "천천히 하세요, 안 급해요.",
      n: "no rush = 서두를 것 없어요. 두 마디가 붙어 나옵니다." },
    { e: "Of course. Want me to come back?", k: "그럼요. 이따 다시 올까요?",
      n: "Do you 가 빠진 Want me to ~? 입니다." },
    { e: "No worries at all. I'll give you a minute.", k: "전혀 괜찮아요. 잠시 뒤에 올게요.",
      n: "give you a minute = 시간을 좀 드리다." },
    { e: "Sure. Can I get you a drink meanwhile?", k: "네. 그동안 음료라도 드릴까요?",
      n: "meanwhile = 그동안에." },
    { e: "Take as long as you need.", k: "필요한 만큼 보세요.",
      n: "as long as you need = 필요한 만큼." }
  ]
},

"Hang on a second.": {
  where: "직원이 확인하러 가면서",
  lines: [
    { w: "me", e: "Is this one on sale?", k: "이거 세일하는 거예요?" },
    { w: "them", e: "Hang on a second, let me scan it.", k: "잠깐만요, 찍어 볼게요." },
    { w: "me", e: "Sure, thanks.", k: "네, 고맙습니다." }
  ],
  replies: [
    { e: "Hang on a second, let me scan it.", k: "잠깐만요, 찍어 볼게요.",
      n: "scan = 바코드를 찍다. 값을 확인하는 겁니다." },
    { e: "One sec, I'll ask my manager.", k: "잠시만요, 매니저한테 물어볼게요.",
      n: "One sec = 잠깐만요. second 를 줄인 말." },
    { e: "Bear with me, the system's slow today.", k: "조금만 기다려 주세요, 오늘 전산이 느리네요.",
      n: "★ Bear with me = 조금만 참아 주세요. 곰과 상관없습니다." },
    { e: "Give me two seconds.", k: "금방이요.",
      n: "two seconds 는 정확히 2초가 아니라 '금방'입니다." },
    { e: "Hold on — yeah, it is. Twenty percent off.", k: "잠깐만요. 아, 맞네요. 20퍼센트 할인이에요.",
      n: "off = 할인. twenty percent off = 20퍼센트 깎임." }
  ]
},

"Let me check.": {
  where: "재고를 물었을 때",
  lines: [
    { w: "me", e: "Do you have this in black?", k: "이거 검정색 있어요?" },
    { w: "them", e: "Let me check. Back in a moment.", k: "확인해 볼게요. 금방 올게요." },
    { w: "me", e: "No rush.", k: "천천히 하세요." }
  ],
  replies: [
    { e: "Let me check. Back in a moment.", k: "확인해 볼게요. 금방 올게요.",
      n: "★ I'll be 가 빠진 Back in a moment. 직원이 자리를 뜨면 이 말이었을 겁니다." },
    { e: "Let me check out back for you.", k: "뒤에 가서 확인해 볼게요.",
      n: "out back = 창고 쪽. check out back = 창고를 보다." },
    { e: "I'll have a look. What size?", k: "볼게요. 사이즈가 어떻게 되세요?",
      n: "have a look = 한번 보다. 사이즈를 되묻습니다." },
    { e: "Let me see what we've got.", k: "뭐가 있는지 볼게요.",
      n: "what we've got = 우리가 가진 것." },
    { e: "Checking now... nope, all sold out, sorry.", k: "지금 보는 중… 아, 다 나갔네요, 죄송해요.",
      n: "혼잣말이 섞입니다. sold out = 다 팔림." }
  ]
},

"What can I get you?": {
  where: "카페 계산대 앞",
  lines: [
    { w: "them", e: "Hi! What can I get you?", k: "안녕하세요! 뭐 드릴까요?" },
    { w: "me", e: "Can I get a large iced americano, please?", k: "아이스 아메리카노 라지 하나 주세요." },
    { w: "them", e: "Sure thing. Anything else?", k: "네. 더 필요한 거 있으세요?" }
  ],
  replies: [
    { e: "Sure thing. Anything else?", k: "네. 더 필요한 거 있으세요?",
      n: "Anything else 가 '애니씽엘스'처럼 한 덩어리로 붙습니다." },
    { e: "For here or to go?", k: "여기서 드세요, 가져가세요?",
      n: "★ 네 단어뿐이라 제일 많이 놓칩니다. to go = 포장." },
    { e: "What size? We've got small, medium, large.",
      k: "어떤 사이즈로요? 스몰, 미디엄, 라지 있어요.",
      n: "가게마다 이름이 다릅니다. 크기를 말하면 알아들어요." },
    { e: "Got it. Can I get a name for that?", k: "알겠습니다. 성함이 어떻게 되세요?",
      n: "★ 이름을 묻습니다. 컵에 적으려는 거예요. 짧은 이름을 말하면 편합니다." },
    { e: "Sure. That'll be five twenty at the second window.",
      k: "네. 5달러 20센트고요, 두 번째 창구에서요.",
      n: "★ five twenty = 5달러 20센트. 달러·센트를 붙여 말합니다." }
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
