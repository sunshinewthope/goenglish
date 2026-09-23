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
