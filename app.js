/* ==========================================================
   가는 길 영어 — 앱 로직
   출퇴근길 한 손 사용이 기준입니다. 타이핑 없이 탭으로만 굴러갑니다.
   기록은 이 기기의 브라우저에만 저장됩니다.
   ========================================================== */
(function () {
  "use strict";

  var KEY = "eng_go_v1";
  var BOX_DAYS = [0, 1, 3, 7, 16, 40];

  /* ---------- 도구 ---------- */
  function $(id) { return document.getElementById(id); }
  function el(t, c, x) { var e = document.createElement(t); if (c) e.className = c; if (x != null) e.textContent = x; return e; }
  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  /* ---------- 사전 ----------
     영어 낱말을 눌러 네이버 영어사전으로 넘깁니다.
     글은 그대로 두고 낱말만 눌리게 감싸는 것이라, 읽는 데 방해가 없습니다. */
  /* ---------- 꾸미기 사진 ----------
     사진은 학습 기록과 같은 칸에 두지 않습니다.
     localStorage 는 5MB 뿐이라 사진이 커지면 기록이 저장 안 되는 일이 생깁니다.
     그래서 사진만 IndexedDB 에 따로 담습니다. */
  var PIC_DB = "enggo_pics", PIC_STORE = "pics";
  var picCache = {};

  function picOpen(cb) {
    try {
      if (!window.indexedDB) { cb(null); return; }
      var rq = indexedDB.open(PIC_DB, 1);
      rq.onupgradeneeded = function () {
        var db = rq.result;
        if (!db.objectStoreNames.contains(PIC_STORE)) db.createObjectStore(PIC_STORE);
      };
      rq.onsuccess = function () { cb(rq.result); };
      rq.onerror = function () { cb(null); };
    } catch (e) { cb(null); }
  }

  function picPut(key, data, cb) {
    picOpen(function (db) {
      if (!db) { cb(false); return; }
      try {
        var tx = db.transaction(PIC_STORE, "readwrite");
        tx.objectStore(PIC_STORE).put(data, key);
        tx.oncomplete = function () { picCache[key] = data; cb(true); };
        tx.onerror = function () { cb(false); };
      } catch (e) { cb(false); }
    });
  }

  function picGet(key, cb) {
    if (picCache[key] !== undefined) { cb(picCache[key]); return; }
    picOpen(function (db) {
      if (!db) { cb(""); return; }
      try {
        var rq = db.transaction(PIC_STORE, "readonly").objectStore(PIC_STORE).get(key);
        rq.onsuccess = function () { picCache[key] = rq.result || ""; cb(picCache[key]); };
        rq.onerror = function () { cb(""); };
      } catch (e) { cb(""); }
    });
  }

  /* 담긴 것은 사진(데이터 글자) 이거나 움짤·동영상(파일 덩어리)입니다.
     어느 쪽이든 화면에 걸 수 있는 주소로 바꿔 돌려줍니다. */
  var picUrls = {};
  function picUse(key, cb) {
    picGet(key, function (v) {
      if (!v) { cb(null); return; }
      if (typeof v === "string") { cb({ url: v, video: false }); return; }
      try {
        if (picUrls[key]) URL.revokeObjectURL(picUrls[key]);
        picUrls[key] = URL.createObjectURL(v);
        cb({ url: picUrls[key], video: /^video\//.test(v.type || "") });
      } catch (e) { cb(null); }
    });
  }

  function picDel(key, cb) {
    picOpen(function (db) {
      if (!db) { cb(false); return; }
      try {
        var tx = db.transaction(PIC_STORE, "readwrite");
        tx.objectStore(PIC_STORE)["delete"](key);
        tx.oncomplete = function () { picCache[key] = ""; cb(true); };
        tx.onerror = function () { cb(false); };
      } catch (e) { cb(false); }
    });
  }

  var DECOS = [
    { k: "bg", ico: "🖼️", t: "바탕 사진", s: "앱 뒤에 깔립니다." },
    { k: "react", ico: "🎉", t: "잘했을 때 뜨는 사진", s: "‘알았어요’를 누를 때 잠깐 떠요." },
    { k: "praise", ico: "🏆", t: "다 했을 때 칭찬 사진", s: "오늘 미션을 마치면 나와요." }
  ];

  function applyBg() {
    var L = $("bg-layer"), old = document.getElementById("bg-video");
    document.documentElement.style.setProperty("--bg-dim", (S.cfg.bgdim || 68) / 100);
    if (old) old.remove();
    picUse("bg", function (p) {
      document.documentElement.classList.toggle("has-bg", !!p);
      L.style.backgroundImage = "";
      if (!p) { L.hidden = true; return; }
      L.hidden = false;
      if (p.video) {
        var v = document.createElement("video");
        v.id = "bg-video"; v.className = "bg-video";
        v.src = p.url; v.autoplay = true; v.loop = true; v.muted = true;
        v.playsInline = true; v.setAttribute("playsinline", "");
        L.insertBefore(v, L.firstChild);
        v.play()["catch"](function () {});
      } else {
        L.style.backgroundImage = "url(" + p.url + ")";
      }
    });
  }

  /* 사진이면 <img>, 동영상이면 <video> 로 걸어 줍니다 */
  function mediaInto(box, p, cls) {
    box.innerHTML = "";
    if (!p) return null;
    var e;
    if (p.video) {
      e = document.createElement("video");
      e.autoplay = true; e.loop = true; e.muted = true;
      e.playsInline = true; e.setAttribute("playsinline", "");
    } else {
      e = document.createElement("img"); e.alt = "";
    }
    e.className = cls || "";
    e.src = p.url;
    box.appendChild(e);
    if (p.video) e.play()["catch"](function () {});
    return e;
  }

  /* 끝 화면의 칭찬 사진. 앞 판이 남아 있지 않게 항상 다시 정합니다. */
  function setPraise(on) {
    var box = $("praise-box"), em = $("done-emoji");
    if (!on) { box.innerHTML = ""; box.hidden = true; em.hidden = false; return; }
    picUse("praise", function (p) {
      if (!p) { box.innerHTML = ""; box.hidden = true; em.hidden = false; return; }
      mediaInto(box, p, "praise-media");
      box.hidden = false; em.hidden = true;
    });
  }

  var reactT = null;
  function showReact() {
    picUse("react", function (p) {
      if (!p) return;
      var box = $("react-pop");
      mediaInto(box, p, "react-media");
      box.hidden = false;
      if (reactT) clearTimeout(reactT);
      reactT = setTimeout(function () { box.hidden = true; box.innerHTML = ""; }, 1600);
    });
  }

  /* ---------- 사전 ---------- */
  var DICT = "https://en.dict.naver.com/#/search?query=";

  /* 줄임말은 사전에서 헛치기 쉬워서 본딧말로 바꿔 찾습니다. */
  var SHORT = { "won't": "will", "can't": "can", "shan't": "shall",
                "gonna": "going to", "wanna": "want to", "gotta": "got to",
                "ain't": "be", "lemme": "let", "gimme": "give", "kinda": "kind of",
                "dunno": "know", "y'all": "you" };

  function dictWord(tok) {
    var w = String(tok).replace(/^[^A-Za-z']+/, "").replace(/[^A-Za-z']+$/, "");
    w = w.replace(/^'+|'+$/g, "");
    if (!/[A-Za-z]/.test(w)) return "";
    var low = w.toLowerCase();
    if (SHORT[low]) return SHORT[low];
    if (/n't$/i.test(w)) return w.slice(0, -3);          // doesn't → does
    w = w.replace(/'(s|m|re|ve|ll|d)$/i, "");            // friend's → friend
    return w || "";
  }

  function wordHtml(text) {
    var parts = String(text == null ? "" : text).split(/(\s+)/), out = "", i;
    for (i = 0; i < parts.length; i++) {
      var p = parts[i];
      if (!p || !p.replace(/\s/g, "")) { out += esc(p); continue; }
      var w = dictWord(p);
      if (!w) { out += esc(p); continue; }
      out += '<a class="w" href="' + DICT + encodeURIComponent(w) +
             '" target="_blank" rel="noopener">' + esc(p) + '</a>';
    }
    return out;
  }

  function today(d) {
    d = d || new Date();
    var m = d.getMonth() + 1, y = d.getDate();
    return d.getFullYear() + "-" + (m < 10 ? "0" : "") + m + "-" + (y < 10 ? "0" : "") + y;
  }
  function addDays(s, n) {
    var p = s.split("-"), d = new Date(+p[0], +p[1] - 1, +p[2]);
    d.setDate(d.getDate() + n); return today(d);
  }
  function daysBetween(a, b) {
    var pa = a.split("-"), pb = b.split("-");
    return Math.round((new Date(+pb[0], +pb[1] - 1, +pb[2]) - new Date(+pa[0], +pa[1] - 1, +pa[2])) / 86400000);
  }
  function pretty(s) {
    var p = s.split("-"), n = ["일","월","화","수","목","금","토"];
    return (+p[1]) + "월 " + (+p[2]) + "일 " + n[new Date(+p[0], +p[1]-1, +p[2]).getDay()] + "요일";
  }
  var tT = null;
  function toast(m) {
    var t = $("toast"); t.textContent = m; t.hidden = false;
    if (tT) clearTimeout(tT);
    tT = setTimeout(function () { t.hidden = true; }, 2300);
  }

  /* ---------- 표현 목록 ---------- */
  var DECK = [], BY_EN = {}, SET_BY_ID = {};
  (function build() {
    for (var i = 0; i < SETS.length; i++) {
      var s = SETS[i];
      SET_BY_ID[s.id] = s;
      for (var j = 0; j < s.items.length; j++) {
        var it = s.items[j];
        if (BY_EN[it.e]) continue;
        var row = { e: it.e, k: it.k, n: it.n || "", h: !!it.h,
                    sid: s.id, sname: s.name, sicon: s.icon };
        DECK.push(row);
        BY_EN[it.e] = row;
      }
    }
  })();

  /* ---------- 저장 ---------- */
  var S = null;

  function fresh() {
    var sets = {};
    SETS.forEach(function (s) { sets[s.id] = true; });
    return { seen: {}, ptr: 0, days: {}, sessions: 0, rewards: [],
             heard: {}, heardDay: {}, listenXp: 0, listenMin: 0, links: [], reads: [], fastPtr: 0,
             cfg: { per: 15, newPer: 5, sets: sets, lmin: 10, lko: 1, lgap: 1, ldir: "auto",
                    news: 1, nnum: 7, nlen: 2, nen: 0, nchain: 1, nrate: 100 },
             theme: "auto", lastBackup: "" };
  }

  function fill() {
    if (!S || typeof S !== "object") S = fresh();
    if (!S.seen) S.seen = {};
    if (typeof S.ptr !== "number") S.ptr = 0;
    if (!S.days) S.days = {};
    if (typeof S.sessions !== "number") S.sessions = 0;
    if (!Array.isArray(S.rewards)) S.rewards = [];
    if (!S.cfg) S.cfg = {};
    if (typeof S.cfg.per !== "number") S.cfg.per = 15;
    if (typeof S.cfg.newPer !== "number") S.cfg.newPer = 5;
    if (!S.cfg.sets) S.cfg.sets = {};
    SETS.forEach(function (s) { if (S.cfg.sets[s.id] == null) S.cfg.sets[s.id] = true; });
    if (!S.heard) S.heard = {};
    if (!S.heardDay) S.heardDay = {};
    if (typeof S.listenXp !== "number") S.listenXp = 0;
    if (typeof S.listenMin !== "number") S.listenMin = 0;
    if (typeof S.cfg.voice !== "string") S.cfg.voice = "";
    if (!Array.isArray(S.links)) S.links = [];
    if (!Array.isArray(S.reads)) S.reads = [];
    if (typeof S.fastPtr !== "number") S.fastPtr = 0;
    if ([82, 68, 50].indexOf(S.cfg.bgdim) < 0) S.cfg.bgdim = 68;
    if ([10, 15, 20].indexOf(S.cfg.lmin) < 0) S.cfg.lmin = 10;
    if (S.cfg.lko !== 0 && S.cfg.lko !== 1) S.cfg.lko = 1;
    if ([0, 1, 2].indexOf(S.cfg.lgap) < 0) S.cfg.lgap = 1;
    if (["auto", "en", "ko"].indexOf(S.cfg.ldir) < 0) S.cfg.ldir = "auto";
    if (S.cfg.ltalk !== 0 && S.cfg.ltalk !== 1) S.cfg.ltalk = 1;
    if (S.cfg.lfast !== 0 && S.cfg.lfast !== 1) S.cfg.lfast = 1;
    if (S.cfg.news !== 0 && S.cfg.news !== 1) S.cfg.news = 1;
    if ([5, 7, 10].indexOf(S.cfg.nnum) < 0) S.cfg.nnum = 7;
    if ([0, 1, 2].indexOf(S.cfg.nlen) < 0) S.cfg.nlen = 2;
    if (S.cfg.nen !== 0 && S.cfg.nen !== 1) S.cfg.nen = 0;
    if (S.cfg.nchain !== 0 && S.cfg.nchain !== 1) S.cfg.nchain = 1;
    if ([85, 100, 115].indexOf(S.cfg.nrate) < 0) S.cfg.nrate = 100;
    if (typeof S.cfg.kvoice !== "string") S.cfg.kvoice = "";
  }

  function load() {
    try { var raw = localStorage.getItem(KEY); S = raw ? JSON.parse(raw) : fresh(); }
    catch (e) { S = fresh(); }
    fill();
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  /* ---------- 셈 ---------- */
  function learnedCount() {
    var n = 0; for (var k in S.seen) if (S.seen.hasOwnProperty(k)) n++; return n;
  }
  function rightCount() {
    var n = 0; for (var k in S.seen) if (S.seen.hasOwnProperty(k)) n += (S.seen[k].right || 0); return n;
  }
  // 듣기만 한 것도 조금은 쌓입니다. 운전한 날이 헛되지 않게.
  function xp() { return learnedCount() * 10 + rightCount() * 5 + (S.listenXp || 0); }
  function floorOf(n) { return 50 * n * (n + 1); }
  function levelBand() {
    var x = xp(), lv = 0;
    while (floorOf(lv + 1) <= x && lv < 80) lv++;
    lv += 1;
    var lo = floorOf(lv - 1), hi = floorOf(lv);
    return { level: lv, into: x - lo, need: hi - lo, xp: x };
  }
  function streak() {
    var n = 0, d = today();
    if (!S.days[d]) d = addDays(d, -1);
    while (S.days[d]) { n++; d = addDays(d, -1); }
    return n;
  }
  function todaySessions() { return (S.days[today()] || 0); }

  /* ---------- 오늘 묶음 만들기 ---------- */
  var SESSION = null, idx = 0, stage = 0, results = null;

  function enabled(row) { return S.cfg.sets[row.sid] !== false; }

  function buildSession() {
    var t = today(), due = [], i;

    for (var k in S.seen) {
      if (!S.seen.hasOwnProperty(k)) continue;
      var r = S.seen[k], row = BY_EN[k];
      if (!row || !enabled(row)) continue;
      if (r.box >= BOX_DAYS.length - 1) continue;
      if (!r.due || r.due <= t) due.push({ e: k, wrong: r.wrong || 0, due: r.due || t });
    }
    due.sort(function (a, b) {
      if (a.wrong !== b.wrong) return b.wrong - a.wrong;
      return a.due < b.due ? -1 : 1;
    });

    var picked = [], seenNow = {};
    var newN = Math.min(S.cfg.newPer, S.cfg.per);
    var p = S.ptr;
    while (picked.length < newN && p < DECK.length) {
      var row2 = DECK[p];
      if (!S.seen[row2.e] && enabled(row2)) { picked.push(row2.e); seenNow[row2.e] = 1; }
      p++;
    }
    var nextPtr = p;

    for (i = 0; i < due.length && picked.length < S.cfg.per; i++) {
      if (!seenNow[due[i].e]) { picked.push(due[i].e); seenNow[due[i].e] = 1; }
    }
    // 아직 자리가 남으면 새 표현을 더 넣는다
    while (picked.length < S.cfg.per && nextPtr < DECK.length) {
      var row3 = DECK[nextPtr];
      if (!S.seen[row3.e] && enabled(row3) && !seenNow[row3.e]) { picked.push(row3.e); seenNow[row3.e] = 1; }
      nextPtr++;
    }

    return { list: shuffle(picked), nextPtr: nextPtr };
  }

  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function record(e, ok) {
    var r = S.seen[e];
    if (!r) r = S.seen[e] = { box: 0, due: "", right: 0, wrong: 0, first: today() };
    if (ok) { r.right++; r.box = Math.min(r.box + 1, BOX_DAYS.length - 1); }
    else { r.wrong++; r.box = 1; }
    r.due = addDays(today(), BOX_DAYS[r.box] || 1);
    r.last = today();
  }

  /* ---------- 소리 ---------- */
  var voice = null, koVoice = null, enVoices = [], koVoices = [], primed = false;

  /* 영어 목소리가 하나도 없으면 한국어 목소리가 영어를 읽습니다.
     그러면 발음이 한국식이 되어 듣기 연습이 되지 않습니다.
     그래서 영어 목소리를 따로 찾아 두고, 없으면 감추지 않고 알립니다. */
  function voiceRank(v) {
    var n = (v.name || ""), s = 0;
    if (/^en[-_]?US/i.test(v.lang || "")) s += 40;
    else if (/^en[-_]?GB/i.test(v.lang || "")) s += 30;
    else s += 10;
    if (/natural|neural|enhanced|premium/i.test(n)) s += 20;
    if (/google/i.test(n)) s += 14;
    if (/siri|samsung/i.test(n)) s += 8;
    if (!v.localService) s += 3;      // 서버 목소리가 대체로 낫습니다
    return s;
  }

  /* 한국어 목소리도 골라 쓸 수 있어야 합니다. 뉴스와 ‘뜻 → 영어’ 를 이 목소리가
     읽는데, 예전에는 기기에 깔린 것 중 맨 처음 것을 그냥 썼습니다. 그러면 대개
     제조사 기본 음성이 잡혀 딱딱하게 들립니다. 구글 음성이 있으면 그쪽이 낫습니다. */
  function koRank(v) {
    var n = (v.name || ""), s = 0;
    if (/natural|neural|enhanced|premium|wavenet/i.test(n)) s += 20;
    if (/google/i.test(n)) s += 14;
    if (/siri/i.test(n)) s += 6;
    if (!v.localService) s += 3;
    return s;
  }

  function pickVoice() {
    if (!("speechSynthesis" in window)) return;
    var vs = speechSynthesis.getVoices() || [], i;
    enVoices = []; koVoices = [];
    for (i = 0; i < vs.length; i++) {
      var l = vs[i].lang || "";
      if (/^ko/i.test(l)) koVoices.push(vs[i]);
      else if (/^en/i.test(l)) enVoices.push(vs[i]);
    }
    enVoices.sort(function (a, b) { return voiceRank(b) - voiceRank(a); });
    koVoices.sort(function (a, b) { return koRank(b) - koRank(a); });

    voice = null;
    if (S && S.cfg && S.cfg.voice) {
      for (i = 0; i < enVoices.length; i++) {
        if (enVoices[i].name === S.cfg.voice) { voice = enVoices[i]; break; }
      }
    }
    if (!voice) voice = enVoices[0] || null;

    koVoice = null;
    if (S && S.cfg && S.cfg.kvoice) {
      for (i = 0; i < koVoices.length; i++) {
        if (koVoices[i].name === S.cfg.kvoice) { koVoice = koVoices[i]; break; }
      }
    }
    if (!koVoice) koVoice = koVoices[0] || null;
  }
  function hasEnVoice() { if (!enVoices.length) pickVoice(); return !!voice; }

  /* 차 블루투스는 소리가 없으면 연결을 재워 버립니다.
     그러면 다음 말의 첫 음절이 잘립니다.
     들리지 않을 만큼 낮은 소리를 계속 흘려보내서 연결을 깨워 둡니다. */
  var actx = null, hum = null;
  function keepOn() {
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!actx) actx = new AC();
      if (actx.state === "suspended") actx.resume();
      if (hum) return;
      var g = actx.createGain();
      g.gain.value = 0.0015;
      hum = actx.createOscillator();
      hum.frequency.value = 40;
      hum.connect(g); g.connect(actx.destination);
      hum.start();
    } catch (e) {}
  }
  function keepOff() {
    try { if (hum) { hum.stop(); hum.disconnect(); hum = null; } } catch (e) {}
    try { if (actx && actx.suspend) actx.suspend(); } catch (e) {}
  }
  if ("speechSynthesis" in window) {
    pickVoice();
    try {
      speechSynthesis.onvoiceschanged = function () {
        pickVoice();
        // 목록이 늦게 도착했으면 보고 있던 화면을 다시 그립니다.
        var me = document.getElementById("view-me");
        if (me && !me.hidden) renderVoices();
      };
    } catch (e) {}
  }
  function prime() {
    if (primed || !("speechSynthesis" in window)) return;
    primed = true;
    try { var u = new SpeechSynthesisUtterance(" "); u.volume = 0; speechSynthesis.speak(u); } catch (e) {}
    pickVoice();
  }
  var warnedNoEn = false;
  function warnNoEnVoice() {
    if (warnedNoEn) return;
    warnedNoEn = true;
    toast("영어 목소리가 없어요. ‘나’에서 넣는 법을 보세요.");
  }

  function say(t, slow) {
    if (!t || !("speechSynthesis" in window)) { toast("이 기기는 소리 읽기를 못 해요."); return; }
    if (!hasEnVoice()) warnNoEnVoice();
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(String(t));
      u.lang = "en-US"; u.rate = slow ? 0.62 : 0.92;
      if (!voice) pickVoice();
      if (voice) { try { u.voice = voice; } catch (e2) {} }
      speechSynthesis.speak(u);
    } catch (e) {}
  }

  /* ==========================================================
     대화 속에서 — 표현을 주고받는 자리에 넣어 봅니다
     ========================================================== */
  var TK = { list: [], i: 0, step: 0, done: false, rec: null, busy: false };

  function hasTalk(e) { return !!(typeof TALK !== "undefined" && TALK[e]); }

  /* 연습할 줄: 그 표현이 들어 있는 내 줄, 없으면 첫 번째 내 줄 */
  function practiceIdx(key, lines) {
    var want = norm(key), i;
    for (i = 0; i < lines.length; i++) {
      if (lines[i].w === "me" && norm(lines[i].e).indexOf(want) >= 0) return i;
    }
    for (i = 0; i < lines.length; i++) if (lines[i].w === "me") return i;
    return -1;
  }

  function norm(s) {
    return String(s == null ? "" : s).toLowerCase()
      .replace(/[^a-z0-9' ]/g, " ").replace(/\s+/g, " ").trim();
  }
  function wordsOf(s) { var a = norm(s).split(" "); return a[0] === "" ? [] : a; }

  /* 말한 것이 얼마나 맞았는지 — 낱말 단위로 넉넉하게 셉니다 */
  function scoreSaid(target, said) {
    var t = wordsOf(target), pool = wordsOf(said), hit = 0, i, j;
    if (!t.length) return 0;
    for (i = 0; i < t.length; i++) {
      j = pool.indexOf(t[i]);
      if (j >= 0) { hit++; pool.splice(j, 1); }
    }
    return hit / t.length;
  }

  function buildTalk(sessionList) {
    var mine = [], other = [], i;
    for (i = 0; i < sessionList.length; i++) {
      if (hasTalk(sessionList[i])) mine.push(sessionList[i]);
    }
    if (mine.length < 4 && typeof TALK !== "undefined") {
      for (var k in TALK) {
        if (!TALK.hasOwnProperty(k)) continue;
        if (mine.indexOf(k) >= 0) continue;
        var row = BY_EN[k];
        if (row && enabled(row)) other.push(k);
      }
      other = shuffle(other);
    }
    return shuffle(mine).slice(0, 4).concat(other).slice(0, 4);
  }

  function talkStart() {
    if (!TK.list.length) { fastStart(); return; }
    TK.i = 0;
    showStage("stage-talk");
    drawTalk();
  }

  function drawTalk() {
    // 찾기에서 대화 하나만 열어 본 경우에는 끝나면 그냥 돌아갑니다
    if (TK.i >= TK.list.length) {
      if (TK.solo) { TK.solo = false; showStage("home"); renderHome(); return; }
      fastStart(); return;
    }
    var key = TK.list[TK.i], t = TALK[key];
    if (!t) { TK.i++; drawTalk(); return; }

    TK.step = 0; TK.done = false;
    TK.pi = practiceIdx(key, t.lines);

    /* 돌아오는 답은 한 가지가 아닙니다.
       replies 가 있으면 그중 하나를 골라 그 자리에 넣습니다.
       할 때마다 달라지고, 끝나면 나머지도 돌려 들을 수 있습니다. */
    TK.replyAt = -1; TK.reply = null; TK.replyIdx = 0;
    if (t.replies && t.replies.length) {
      for (var ri = TK.pi + 1; ri < t.lines.length; ri++) {
        if (t.lines[ri].w === "them") { TK.replyAt = ri; break; }
      }
      if (TK.replyAt >= 0) {
        TK.replyIdx = Math.floor(Math.random() * t.replies.length);
        TK.reply = t.replies[TK.replyIdx];
      }
    }
    $("btn-other-reply").hidden = true;

    $("talk-counter").textContent = (TK.i + 1) + " / " + TK.list.length;
    $("talk-progress").style.width = (TK.i / TK.list.length * 100) + "%";
    $("tk-where").textContent = "📍 " + (t.where || "");
    $("tk-lines").innerHTML = "";
    $("tk-turn").hidden = true;
    $("tk-en").hidden = true;
    $("tk-en").textContent = "";        // 앞 대화의 답이 남아 있지 않게
    $("tk-heard").hidden = true;
    $("tk-heard").textContent = "";
    $("tk-acts").hidden = false;
    $("btn-talk-next").hidden = true;
    $("btn-talk-next").onclick = talkNext;
    setMicLabel("🎤 말해보기");

    stepTalk();
  }

  function addLine(ln, mine, tag) {
    var row = el("div", "tk-line" + (mine ? " mine" : "") + (tag ? " alt" : ""));
    row.appendChild(el("span", "tk-who", mine ? "🙂" : "🧑"));
    var b = el("div", "tk-body");
    if (tag) b.appendChild(el("p", "tk-tag", tag));
    var pe = el("p", "tk-e"); pe.innerHTML = wordHtml(ln.e);
    b.appendChild(pe);
    b.appendChild(el("p", "tk-k", ln.k));
    if (ln.n) b.appendChild(el("p", "tk-n", ln.n));
    row.appendChild(b);
    $("tk-lines").appendChild(row);
    return row;
  }

  /* 한 줄씩 들려주다가, 내 차례에서 멈춥니다 */
  function stepTalk() {
    var t = TALK[TK.list[TK.i]];
    if (!t) return;
    if (TK.step >= t.lines.length) {
      $("btn-talk-next").hidden = false;
      $("btn-talk-next").textContent = (TK.i + 1 >= TK.list.length) ? "다음으로" : "다음 대화";
      if (t.replies && t.replies.length > 1 && TK.replyAt >= 0) $("btn-other-reply").hidden = false;
      return;
    }
    var ln = (TK.step === TK.replyAt && TK.reply) ? TK.reply : t.lines[TK.step];

    if (TK.step === TK.pi && !TK.done) {
      $("tk-turn").hidden = false;
      $("tk-ko").textContent = "“" + ln.k + "”";
      $("tk-en").innerHTML = wordHtml(ln.e);
      window.scrollTo(0, document.body.scrollHeight);
      return;
    }

    addLine(ln, ln.w === "me");
    TK.step++;
    TK.busy = true;
    sayAs(ln.e, ln.w === "me", function () {
      TK.busy = false;
      setTimeout(stepTalk, 260);
    });
  }

  /* 상대와 내 목소리를 높낮이로 구분해 줍니다 */
  function sayAs(text, mine, done) {
    if (!("speechSynthesis" in window)) { done(); return; }
    var fired = false, wd = null;
    function fin() { if (fired) return; fired = true; if (wd) clearTimeout(wd); done(); }
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(String(text));
      u.lang = "en-US"; u.rate = 0.92; u.pitch = mine ? 0.95 : 1.12;
      if (!voice) pickVoice();
      if (voice) { try { u.voice = voice; } catch (e2) {} }
      u.onend = fin; u.onerror = fin;
      wd = setTimeout(fin, 2500 + String(text).length * 110);
      speechSynthesis.speak(u);
    } catch (e) { fin(); }
  }

  function setMicLabel(s) { $("btn-mic").textContent = s; }

  /* 내 차례를 마치고 다음 줄로 */
  function finishTurn() {
    TK.done = true;
    $("tk-en").hidden = false;
    $("tk-acts").hidden = true;
    $("btn-talk-next").hidden = true;   // 남은 줄을 다 들려준 뒤에 다시 냅니다
    TK.doneCount = (TK.doneCount || 0) + 1;
    var t = TALK[TK.list[TK.i]];
    addLine(t.lines[TK.pi], true);
    $("tk-turn").hidden = true;    // 대화 속에 들어갔으니 상자는 접습니다
    TK.step++;
    setTimeout(stepTalk, 300);
  }

  function shadowTurn() {
    if (TK.busy) return;
    var t = TALK[TK.list[TK.i]];
    $("tk-en").hidden = false;
    TK.busy = true;
    // 누르자마자 무엇이 일어나는지 보여 줍니다
    $("tk-heard").hidden = false;
    $("tk-heard").className = "tk-heard half";
    $("tk-heard").textContent = "잘 들어 보세요…";
    sayAs(t.lines[TK.pi].e, true, function () {
      TK.busy = false;
      $("tk-heard").hidden = false;
      $("tk-heard").className = "tk-heard ok";
      $("tk-heard").textContent = "따라 말해 보세요. 되면 다음으로.";
      $("tk-acts").hidden = true;
      $("btn-talk-next").hidden = false;
      $("btn-talk-next").textContent = "따라 했어요";
      $("btn-talk-next").onclick = function () {
        $("btn-talk-next").onclick = talkNext;
        finishTurn();
      };
    });
  }

  /* 마이크로 듣고 맞췄는지 봅니다 */
  function micTurn() {
    if (TK.busy) return;
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { toast("이 브라우저는 마이크로 듣지 못해요. ‘듣고 따라 하기’를 쓰세요."); return; }
    var t = TALK[TK.list[TK.i]], target = t.lines[TK.pi].e;

    try { speechSynthesis.cancel(); } catch (e) {}
    setMicLabel("🔴 듣고 있어요…");
    $("tk-heard").hidden = true;
    TK.micUsed = true;

    var r = new SR(), got = false;
    TK.rec = r;
    r.lang = "en-US"; r.interimResults = false; r.maxAlternatives = 4;

    r.onresult = function (ev) {
      got = true;
      // 첫 후보를 기본으로 둡니다. 아니면 다 틀렸을 때 빈칸이 나옵니다.
      var best = -1, txt = (ev.results[0][0] && ev.results[0][0].transcript) || "", i;
      for (i = 0; i < ev.results[0].length; i++) {
        var alt = ev.results[0][i].transcript;
        var sc = scoreSaid(target, alt);
        if (sc > best) { best = sc; txt = alt; }
      }
      showSaid(txt, Math.max(0, best));
    };
    r.onerror = function (ev) {
      got = true;
      setMicLabel("🎤 다시 말해보기");
      var m = ev.error === "not-allowed" ? "마이크를 쓸 수 없어요. 브라우저에서 허락해 주세요."
            : ev.error === "no-speech" ? "소리가 잡히지 않았어요."
            : ev.error === "network" ? "인터넷이 있어야 알아들어요."
            : "잘 듣지 못했어요.";
      $("tk-heard").hidden = false;
      $("tk-heard").className = "tk-heard no";
      $("tk-heard").textContent = m;
    };
    r.onend = function () {
      TK.rec = null;
      if (!got) {
        setMicLabel("🎤 다시 말해보기");
        $("tk-heard").hidden = false;
        $("tk-heard").className = "tk-heard no";
        $("tk-heard").textContent = "소리가 잡히지 않았어요.";
      }
    };
    try { r.start(); } catch (e) { setMicLabel("🎤 말해보기"); toast("마이크를 열지 못했어요."); }
  }

  function showSaid(txt, sc) {
    var box = $("tk-heard");
    box.hidden = false;
    if (sc >= 0.7) {
      box.className = "tk-heard ok";
      box.textContent = "좋아요! 들린 대로: “" + txt + "”";
      $("tk-en").hidden = false;
      $("tk-acts").hidden = true;
      $("btn-talk-next").hidden = false;
      $("btn-talk-next").textContent = "다음";
      $("btn-talk-next").onclick = function () {
        $("btn-talk-next").onclick = talkNext;
        finishTurn();
      };
      TK.okCount = (TK.okCount || 0) + 1;
    } else if (sc >= 0.45) {
      box.className = "tk-heard half";
      box.textContent = "거의 다 왔어요. 들린 대로: “" + txt + "”";
      setMicLabel("🎤 다시 말해보기");
      $("tk-en").hidden = false;
    } else {
      box.className = "tk-heard no";
      box.textContent = "다르게 들렸어요: “" + txt + "”";
      setMicLabel("🎤 다시 말해보기");
    }
  }

  /* 같은 자리에서 나올 수 있는 다른 답을 하나씩 더 들려줍니다 */
  function otherReply() {
    if (TK.busy) return;
    var t = TALK[TK.list[TK.i]];
    if (!t || !t.replies || !t.replies.length) return;
    TK.replyIdx = (TK.replyIdx + 1) % t.replies.length;
    var r = t.replies[TK.replyIdx];
    addLine(r, false, "이렇게도 대답해요");
    window.scrollTo(0, document.body.scrollHeight);
    TK.busy = true;
    sayAs(r.e, false, function () { TK.busy = false; });
  }

  function talkNext() {
    if (TK.rec) { try { TK.rec.abort(); } catch (e) {} TK.rec = null; }
    TK.i++;
    drawTalk();
  }

  /* ==========================================================
     조금 빠른 말 — 인터뷰에서 나오는 속도
     ========================================================== */
  var FS = { list: [], i: 0, shown: 0 };

  function buildFast() {
    if (typeof FAST === "undefined" || !FAST.length) return [];
    var n = Math.min(2, FAST.length), out = [], p = S.fastPtr || 0, i;
    for (i = 0; i < n; i++) { out.push(FAST[p % FAST.length]); p++; }
    S.fastPtr = p % FAST.length;
    return out;
  }

  function fastStart() {
    FS.list = buildFast();
    if (!FS.list.length) { finish(); return; }
    FS.i = 0;
    showStage("stage-fast");
    drawFast();
  }

  function drawFast() {
    if (FS.i >= FS.list.length) { finish(); return; }
    var f = FS.list[FS.i];
    FS.shown = 0;
    $("fast-counter").textContent = (FS.i + 1) + " / " + FS.list.length;
    $("fast-progress").style.width = (FS.i / FS.list.length * 100) + "%";
    $("fast-en").innerHTML = wordHtml(f.e);
    $("fast-ko").textContent = f.k;
    $("fast-note").textContent = f.n || "";
    $("fast-en").hidden = true;
    $("fast-ko").hidden = true;
    $("fast-note").hidden = true;
    $("fast-reveal").hidden = false;
    $("btn-fast-show").textContent = "글자 보기";
    $("btn-fast-next").hidden = true;
    renderWatchLink();
    say(f.e);
  }

  function fastReveal() {
    var f = FS.list[FS.i];
    FS.shown++;
    if (FS.shown === 1) {
      $("fast-en").hidden = false;
      $("btn-fast-show").textContent = "뜻 보기";
      say(f.e);
    } else {
      $("fast-ko").hidden = false;
      $("fast-note").hidden = !f.n;
      $("fast-reveal").hidden = true;
      $("btn-fast-next").hidden = false;
      $("btn-fast-next").textContent = (FS.i + 1 >= FS.list.length) ? "끝내기" : "다음";
    }
  }

  function renderWatchLink() {
    var a = $("fast-link"), ls = S.links || [];
    if (!ls.length) { a.hidden = true; return; }
    var pick = ls[FS.i % ls.length];
    a.hidden = false;
    a.href = pick.url;
    a.textContent = "▶ " + (pick.name || "세워두고 볼 영상");
  }

  /* ==========================================================
     읽기 — 내가 넣은 지문
     ========================================================== */
  var RD = { id: "", sents: [], i: -1, playing: false, gen: 0 };

  /* 문장으로 쪼갭니다. 약어(Mr. 등) 뒤에서 끊기지 않게 조심합니다. */
  var ABBR = /(?:mr|mrs|ms|dr|prof|st|vs|etc|e\.g|i\.e|jr|sr|no)\.$/i;
  function splitSents(text) {
    var raw = String(text || "").replace(/\s+/g, " ").trim();
    if (!raw) return [];
    var out = [], buf = "", parts = raw.split(/(?<=[.!?])\s+/);
    if (parts.length === 1 && raw.length > 0) parts = raw.split(/([.!?]+\s+)/);
    for (var i = 0; i < parts.length; i++) {
      buf += parts[i];
      var t = buf.trim();
      if (!t) { buf = ""; continue; }
      if (ABBR.test(t)) { buf += " "; continue; }   // 약어면 이어 붙입니다
      out.push(t); buf = "";
    }
    if (buf.trim()) out.push(buf.trim());
    return out.filter(function (s) { return /[A-Za-z]/.test(s); });
  }

  function readById(id) {
    for (var i = 0; i < S.reads.length; i++) if (S.reads[i].id === id) return S.reads[i];
    return null;
  }

  function renderRead() {
    $("read-list-wrap").hidden = !!RD.id;
    $("read-one").hidden = !RD.id;
    if (RD.id) { renderReadOne(); return; }

    var box = $("read-list"); box.innerHTML = "";
    if (!S.reads.length) {
      box.appendChild(emptyBox("아직 넣은 지문이 없어요.",
        "노래 가사, 인터뷰 받아쓴 것, 읽고 싶은 글 아무거나 괜찮아요."));
      return;
    }
    S.reads.slice().reverse().forEach(function (r) {
      var c = el("article", "read-card");
      c.appendChild(el("h3", "rc-t", r.title || "제목 없음"));
      c.appendChild(el("p", "rc-s", splitSents(r.text).length + "문장 · " + pretty(r.at)));
      c.appendChild(el("p", "rc-p", String(r.text).slice(0, 80) + (r.text.length > 80 ? "…" : "")));
      c.onclick = function () {
        RD.id = r.id; renderRead(); window.scrollTo(0, 0);
        backArm(function () { readStop(); RD.id = ""; renderRead(); });
      };
      box.appendChild(c);
    });
  }

  function renderReadOne() {
    var r = readById(RD.id);
    if (!r) { RD.id = ""; renderRead(); return; }
    RD.sents = splitSents(r.text);
    $("read-title").textContent = r.title || "제목 없음";

    var box = $("read-body"); box.innerHTML = "";
    RD.sents.forEach(function (s, i) {
      var row = el("div", "rs"); row.setAttribute("data-i", String(i));
      var en = el("p", "rs-en"); en.innerHTML = wordHtml(s);
      row.appendChild(en);
      var ko = el("p", "rs-ko");
      ko.textContent = (r.tr && r.tr[i]) ? r.tr[i] : "";
      ko.hidden = !ko.textContent;
      row.appendChild(ko);
      var b = el("button", "rs-play", "🔊"); b.type = "button";
      b.onclick = function (ev) { ev.stopPropagation(); readStop(); say(s); markSent(i); };
      row.appendChild(b);
      box.appendChild(row);
    });
    $("btn-read-play").textContent = RD.playing ? "■ 멈추기" : "▶ 처음부터 듣기";
  }

  function markSent(i) {
    [].slice.call(document.querySelectorAll(".rs")).forEach(function (d) {
      d.classList.toggle("on", +d.getAttribute("data-i") === i);
    });
  }

  function readStop() {
    RD.playing = false; RD.gen++;
    try { speechSynthesis.cancel(); } catch (e) {}
    $("btn-read-play").textContent = "▶ 처음부터 듣기";
  }

  function readPlay() {
    if (RD.playing) { readStop(); markSent(-1); return; }
    if (!RD.sents.length) return;
    RD.playing = true; RD.gen++;
    var g = RD.gen, i = 0;
    $("btn-read-play").textContent = "■ 멈추기";
    (function step() {
      if (!RD.playing || g !== RD.gen) return;
      if (i >= RD.sents.length) { readStop(); markSent(-1); return; }
      markSent(i);
      var row = document.querySelector('.rs[data-i="' + i + '"]');
      if (row && row.scrollIntoView) row.scrollIntoView({ block: "center" });
      lisSay(RD.sents[i], 0.92, "en-US", function () {
        if (!RD.playing || g !== RD.gen) return;
        i++;
        setTimeout(step, 420);
      });
    })();
  }

  /* 해석. 크롬에 번역기가 있으면 기기 안에서 돌립니다 — 글이 밖으로 안 나갑니다.
     없으면 파파고로 보낼 수 있는데, 그때는 지문이 네이버로 넘어가므로
     자동으로 열지 않고 물어본 뒤에 엽니다. */
  function withTimeout(p, ms) {
    return new Promise(function (res) {
      var done = false;
      var t = setTimeout(function () { if (!done) { done = true; res(null); } }, ms);
      p.then(function (v) { if (!done) { done = true; clearTimeout(t); res(v); } },
             function () { if (!done) { done = true; clearTimeout(t); res(null); } });
    });
  }

  function getTranslator() {
    if (typeof Translator === "undefined") return Promise.resolve(null);
    return withTimeout(
      Translator.availability({ sourceLanguage: "en", targetLanguage: "ko" })
        .then(function (av) {
          if (!av || av === "unavailable") return null;
          return Translator.create({ sourceLanguage: "en", targetLanguage: "ko" });
        }),
      8000
    );
  }

  function papagoOpen(text) {
    var u = "https://papago.naver.com/?sk=en&tk=ko&st=" + encodeURIComponent(text.slice(0, 900));
    try { window.open(u, "_blank", "noopener"); }
    catch (e) { toast("파파고를 열지 못했어요."); }
  }

  function readTranslate() {
    var r = readById(RD.id);
    if (!r || !RD.sents.length) return;
    var btn = $("btn-read-tr");
    btn.disabled = true; btn.textContent = "뜻을 가져오는 중…";

    getTranslator().then(function (tr) {
      if (!tr) {
        // 번역기가 없을 때. 파파고로 보내면 글이 네이버로 넘어가니,
        // 자동으로 열지 않고 한 번 더 누르게 합니다.
        btn.disabled = false;
        btn.textContent = "🇰🇷 파파고로 보내기";
        btn.onclick = function () {
          if (!window.confirm("이 기기에는 번역 기능이 없어요.\n\n파파고로 보내서 뜻을 볼까요?\n지문이 네이버로 넘어갑니다.")) return;
          papagoOpen(r.text);
        };
        toast("이 기기엔 번역 기능이 없어요. 단추를 한 번 더 누르세요.");
        return;
      }
      r.tr = r.tr || {};
      var i = 0;
      (function next() {
        if (i >= RD.sents.length) {
          save(); renderReadOne();
          btn.disabled = false; btn.textContent = "🇰🇷 뜻 보기";
          toast("뜻을 붙였어요.");
          return;
        }
        if (r.tr[i]) { i++; next(); return; }
        withTimeout(tr.translate(RD.sents[i]), 8000).then(function (out) {
          r.tr[i] = out || "(못 옮겼어요)";
          i++;
          if (i % 3 === 0) renderReadOne();
          next();
        });
      })();
    });
  }

  function saveRead() {
    var t = $("rd-title").value.trim(), x = $("rd-text").value.trim();
    if (!x) { toast("글을 붙여 넣어 주세요."); return; }
    if (x.length > 20000) { toast("너무 길어요. 나눠서 넣어 주세요."); return; }
    S.reads.push({ id: "d" + Date.now(), title: t || "제목 없음", text: x, at: today(), tr: {} });
    var ok = true;
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { ok = false; }
    if (!ok) { S.reads.pop(); save(); toast("담을 자리가 모자라요."); return; }
    $("read-editor").hidden = true;
    $("rd-title").value = ""; $("rd-text").value = "";
    renderRead();
    toast("담았어요.");
  }

  /* ==========================================================
     듣기만 하기 — 운전 중에 쓰는 모드
     화면을 보지도 만지지도 못한다는 전제로 만들었습니다.
     그래서 채점하지 않고, 듣고 따라 말하는 것만 합니다.
     ========================================================== */
  var LIS = { on: false, gen: 0, list: [], i: 0, spoken: 0,
              endAt: 0, tick: null, tm: null, wake: null, ko: false };

  function heardToday(e) { return S.heardDay && S.heardDay[e] === today(); }

  /* 묶음을 돌아가며 한 개씩 뽑아 다시 줄 세웁니다.
     그냥 배운 순서대로 두면 '잘 안 들리는 말' 16개가 통째로 붙어 나와서
     비슷한 말만 계속 듣게 됩니다. */
  function spread(keys) {
    var bySet = {}, order = [], i;
    for (i = 0; i < keys.length; i++) {
      var row = BY_EN[keys[i]];
      if (!row) continue;
      if (!bySet[row.sid]) { bySet[row.sid] = []; order.push(row.sid); }
      bySet[row.sid].push(keys[i]);
    }
    var out = [], moved = true;
    while (moved) {
      moved = false;
      for (i = 0; i < order.length; i++) {
        var arr = bySet[order[i]];
        if (arr.length) { out.push(arr.shift()); moved = true; }
      }
    }
    return out;
  }

  /* 적게 들은 것부터 앞에 세웁니다. 들은 횟수가 같은 것끼리는 섞고요.
     이게 없으면 목록 차례가 날마다 똑같아서, 10분 듣는 동안 앞쪽 스무 개
     남짓만 되풀이해 듣게 됩니다. 뒤에 새로 넣은 표현은 자리가 한참 뒤라
     영영 안 나옵니다. 새 표현은 들은 횟수가 0이니 저절로 맨 앞으로 옵니다. */
  function byFewest(keys) {
    var a = keys.map(function (e) {
      return { e: e, n: (S.heard && S.heard[e]) || 0, r: Math.random() };
    });
    a.sort(function (x, y) { return (x.n - y.n) || (x.r - y.r); });
    return a.map(function (x) { return x.e; });
  }

  /* 들을 차례: 틀린 것 → 복습할 때가 된 것 → 새 것 → 나머지.
     오늘 이미 들은 것은 맨 뒤로 미룹니다.
     그래야 가는 길과 오는 길에 다른 표현이 나옵니다. */
  function buildListen() {
    var t = today(), hard = [], due = [], neu = [], rest = [], later = [];
    DECK.forEach(function (row) {
      if (!enabled(row)) return;
      if (heardToday(row.e)) { later.push(row.e); return; }
      var r = S.seen[row.e];
      if (!r) { neu.push(row.e); return; }
      if ((r.wrong || 0) > 0 && r.box <= 2) { hard.push(row.e); return; }
      if (!r.due || r.due <= t) { due.push(row.e); return; }
      rest.push(row.e);
    });
    /* 듣기는 노출이 목적이라 새 표현을 끊지 않습니다.
       예전에 20개로 끊어 두었더니, 듣기만 하는 동안에는 채점 기록이
       안 쌓여서 표현 전부가 '새 것'으로 분류되고, 그중 20개만 돌았습니다.
       10분이면 같은 스무 개를 세 바퀴 듣게 됩니다.
       어느 묶음이든 비슷한 말이 연달아 나오지 않게 섞어 줄 세웁니다. */
    return withFast(spread(byFewest(hard)).concat(
      spread(byFewest(due)),
      spread(byFewest(neu)),
      spread(byFewest(rest)),
      spread(byFewest(later))
    ));
  }

  /* 조금 빠른 말을 여덟 개마다 하나씩 끼워 넣습니다.
     카드 미션 끝에만 나오면 거의 듣지 못하게 되어서요. */
  var FAST_KEY = "@fast:";
  function withFast(list) {
    if (!S.cfg.lfast || typeof FAST === "undefined" || !FAST.length) return list;
    var out = [], f = Math.floor(Math.random() * FAST.length), i;
    for (i = 0; i < list.length; i++) {
      out.push(list[i]);
      if ((i + 1) % 8 === 0) { out.push(FAST_KEY + (f % FAST.length)); f++; }
    }
    return out;
  }

  /* 오늘 몇 개를 들었는지 — 홈 화면에 보여 줍니다 */
  function heardTodayCount() {
    var n = 0, t = today();
    for (var k in S.heardDay) {
      if (S.heardDay.hasOwnProperty(k) && S.heardDay[k] === t && BY_EN[k]) n++;
    }
    return n;
  }

  function lisSay(text, rate, lang, done) {
    var fired = false, wd = null;
    function fin() { if (fired) return; fired = true; if (wd) clearTimeout(wd); done(); }
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(String(text));
      u.lang = lang; u.rate = rate;
      var v = (lang === "ko-KR") ? koVoice : voice;
      // 목소리 지정이 실패해도 말은 나와야 합니다. 기본 목소리로 읽습니다.
      if (v) { try { u.voice = v; } catch (e2) {} }
      u.onend = fin; u.onerror = fin;
      // onend 가 영영 안 오는 기기가 있습니다. 넉넉히 기다렸다가 그냥 넘어갑니다.
      wd = setTimeout(fin, 2500 + String(text).length * 110);
      speechSynthesis.speak(u);
    } catch (e) { fin(); }
  }

  /* 한 표현을 들려주는 순서를 그대로 적어 둔 것을 차례로 실행합니다. */
  function runSeq(seq, g, done) {
    var k = 0;
    function next() {
      if (!LIS.on || g !== LIS.gen) return;
      if (k >= seq.length) { done(); return; }
      var st = seq[k++];
      if (st.cue != null) $("ls-cue").textContent = st.cue;
      if (st.show != null) $("ls-ko").textContent = st.show;
      if (st.showEn != null) $("ls-en").textContent = st.showEn;
      function after() {
        if (!LIS.on || g !== LIS.gen) return;
        if (st.wait) LIS.tm = setTimeout(next, st.wait); else next();
      }
      if (st.en) { lisSay(st.en, st.echo ? 0.78 : 0.9, "en-US", after); return; }
      if (st.ko) { lisSay(st.ko, 1, "ko-KR", after); return; }
      LIS.tm = setTimeout(next, st.wait || 300);
    }
    next();
  }

  function lisPhrase() {
    if (!LIS.on) return;
    var g = LIS.gen;
    if (LIS.i >= LIS.list.length) LIS.i = 0;       // 다 돌면 처음부터
    var key = LIS.list[LIS.i];
    if (key && key.indexOf(FAST_KEY) === 0) { lisFast(+key.slice(FAST_KEY.length), g); return; }
    var row = BY_EN[key];
    if (!row) { LIS.i++; lisPhrase(); return; }

    $("ls-set").textContent = row.sicon + " " + row.sname;
    $("ls-en").textContent = row.e;
    $("ls-ko").textContent = "";
    $("ls-cue").textContent = "";
    $("ls-count").textContent = (LIS.spoken + 1) + "번째";

    var seq;
    if (S.cfg.ltalk && hasTalk(row.e)) {
      $("ls-set").textContent = "💬 " + row.sname;
      seq = talkSeq(row);
    } else {
      seq = soloSeq(row);
    }

    /* 한 표현에 너무 오래 머물면 그냥 넘깁니다.
       화면이 잠깐 가려져 재생이 끊기면 다음으로 넘기는 코드까지 못 가는데,
       그대로 두면 같은 문장을 되풀이하게 됩니다. */
    var myI = LIS.i;
    if (LIS.guard) clearTimeout(LIS.guard);
    LIS.guard = setTimeout(function () {
      if (!LIS.on || LIS.i !== myI) return;
      S.heardDay[row.e] = today();      // 끝까지 흘러갔으니 들은 것으로 칩니다
      LIS.i++; LIS.tries = 0; LIS.spoken++;
      lisJump();
    }, seqMs(seq) + 7000);

    runSeq(seq, g, function () {
      S.heard[row.e] = (S.heard[row.e] || 0) + 1;
      S.heardDay[row.e] = today();      // 다음 차례엔 뒤로 밀립니다
      S.listenXp = (S.listenXp || 0) + 1;
      LIS.spoken++;
      LIS.i++;
      LIS.tries = 0;
      if (LIS.guard) { clearTimeout(LIS.guard); LIS.guard = null; }
      if (LIS.spoken % 5 === 0) save();
      lisPhrase();
    });
  }

  /* 조금 빠른 말 한 문장. 인터뷰에서 나오는 속도라 한 번 더 들려줍니다. */
  function lisFast(fi, g) {
    var f = (typeof FAST !== "undefined") ? FAST[fi] : null;
    if (!f) { LIS.i++; lisPhrase(); return; }

    $("ls-set").textContent = "🎤 조금 빠른 말";
    $("ls-en").textContent = f.e;
    $("ls-ko").textContent = "";
    $("ls-cue").textContent = "";
    $("ls-count").textContent = (LIS.spoken + 1) + "번째";

    // 리듬은 다른 것들과 같게 — 듣고, 뜻 보고, 틈, 한 번 더
    // 긴 문장이라 만들어 말하긴 어렵습니다. 듣고 따라 말하는 쪽으로만 씁니다.
    var seq = [{ showEn: f.e, en: f.e, wait: 400 }], gap = gapFor(f.e);
    if (LIS.ko) seq.push({ ko: f.k, show: f.k, wait: 350 });
    else seq.push({ show: f.k, wait: 300 });
    if (gap) seq.push({ cue: "따라 말해 보세요", wait: gap });
    seq.push({ cue: "", en: f.e, echo: true, wait: 800 });

    var myI = LIS.i;
    if (LIS.guard) clearTimeout(LIS.guard);
    LIS.guard = setTimeout(function () {
      if (!LIS.on || LIS.i !== myI) return;
      LIS.i++; LIS.tries = 0; LIS.spoken++;
      lisJump();
    }, seqMs(seq) + 7000);

    runSeq(seq, g, function () {
      LIS.spoken++; LIS.i++; LIS.tries = 0;
      if (LIS.guard) { clearTimeout(LIS.guard); LIS.guard = null; }
      lisPhrase();
    });
  }

  /* ── 듣기 리듬 ──────────────────────────────────────────────
     한 번 듣는 동안 줄의 순서는 언제나 똑같습니다.
     예전에는 내 말만 한국어로 시작하고 나머지는 영어로 시작해서
     왔다갔다 했습니다.

       가는 길(영어 → 뜻) :  모든 줄이  영어 → 한국어
       오는 길(뜻 → 영어) :  모든 줄이  한국어 → 영어

     다른 것은 하나뿐입니다 — 내가 할 말에만 틈이 들어갑니다.

       가는 길 내 말 :  영어 → 한국어 → [틈] → 영어 한 번 더
       오는 길 내 말 :  한국어 → [틈] → 영어

     틈은 내가 말해야 하는 문장 길이에 맞춰 잡습니다.
     ─────────────────────────────────────────────────────────── */
  function gapFor(text) {
    if (!S.cfg.lgap) return 0;
    var mul = (S.cfg.lgap === 2 ? 2.2 : 1.4);
    return Math.round(Math.max(3000, String(text || "").length * 130) * mul);
  }

  /* 듣기만 하는 줄 — 상대가 하는 말, 돌아오는 답 */
  function hearLine(seq, e, k, wait) {
    if (LIS.dir === "ko") {
      if (LIS.ko) seq.push({ ko: k, show: k, wait: 300 });
      else seq.push({ show: k, wait: 250 });
      seq.push({ showEn: e, en: e, wait: wait });
    } else {
      seq.push({ showEn: e, en: e, wait: 300 });
      if (LIS.ko) seq.push({ ko: k, show: k, wait: wait });
      else seq.push({ show: k, wait: wait });
    }
  }

  /* 내가 할 말 — 같은 순서에 틈만 더합니다 */
  function speakLine(seq, e, k, wait) {
    var gap = gapFor(e);
    if (LIS.dir === "ko") {
      if (LIS.ko) seq.push({ ko: k, show: k, wait: 300 });
      else seq.push({ show: k, wait: 250 });
      if (gap) seq.push({ cue: "영어로 말해 보세요", wait: gap });
      seq.push({ cue: "", showEn: e, en: e, wait: wait });
    } else {
      seq.push({ showEn: e, en: e, wait: 300 });
      if (LIS.ko) seq.push({ ko: k, show: k, wait: 300 });
      else seq.push({ show: k, wait: 250 });
      if (gap) seq.push({ cue: "따라 말해 보세요", wait: gap });
      seq.push({ cue: "", en: e, echo: true, wait: wait });
    }
  }

  /* 대화가 없는 표현 — 혼자 나오는 한 문장 */
  function soloSeq(row) {
    var seq = [];
    $("ls-en").textContent = "";
    speakLine(seq, row.e, row.k, 900);
    return seq;
  }

  /* 대화가 있는 표현 — 상대 말이 먼저 오고, 내 차례에서 같은 리듬 */
  function talkSeq(row) {
    var t = TALK[row.e];
    var pi = practiceIdx(row.e, t.lines);
    if (pi < 0) pi = 0;
    var mine = t.lines[pi];
    var seq = [], i;

    $("ls-en").textContent = "";

    // 내 차례 전에 상대가 하는 말 — 듣기만 합니다
    for (i = 0; i < pi; i++) {
      seq.push({ cue: "상대가 이렇게 말해요" });
      hearLine(seq, t.lines[i].e, t.lines[i].k, 400);
    }

    // 내가 할 말 — 순서는 위와 같고, 틈만 들어갑니다
    seq.push({ cue: "내가 할 말" });
    speakLine(seq, mine.e, mine.k, 500);

    // 돌아오는 답 하나 — 매번 다른 것이 뽑힙니다
    var rep = null;
    if (t.replies && t.replies.length) rep = t.replies[Math.floor(Math.random() * t.replies.length)];
    else { for (i = pi + 1; i < t.lines.length; i++) if (t.lines[i].w === "them") { rep = t.lines[i]; break; } }
    if (rep) {
      seq.push({ cue: "이런 답이 돌아와요" });
      hearLine(seq, rep.e, rep.k, 800);
    }
    return seq;
  }

  /* 이 차례가 끝까지 가면 대략 얼마나 걸리는지 */
  function seqMs(seq) {
    var t = 0;
    for (var i = 0; i < seq.length; i++) {
      var st = seq[i];
      if (st.en) t += 900 + String(st.en).length * 80;
      if (st.ko) t += 700 + String(st.ko).length * 90;
      t += st.wait || 0;
    }
    return t;
  }

  function lisJump() { LIS.gen++; if (LIS.tm) clearTimeout(LIS.tm); LIS.tm = setTimeout(lisPhrase, 500); }

  /* 듣는 중에 옮기기. d 가 0 이면 지금 것을 다시.
     되돌릴 때는 한 문장씩으론 되돌아간 느낌이 안 나서 다섯씩 뜁니다. */
  function lisSkip(d) {
    if (!LIS.on) return;
    if (LIS.guard) { clearTimeout(LIS.guard); LIS.guard = null; }
    LIS.i += d;
    if (LIS.i < 0) LIS.i = 0;                                  // 맨 앞에서 더 못 갑니다
    if (LIS.i >= LIS.list.length) LIS.i = 0;                   // 끝나면 처음으로
    LIS.spoken = Math.max(0, LIS.spoken + d);
    LIS.tries = 0;
    // 곧 다음 문장이 화면을 덮어쓰니, 안내는 따로 띄웁니다
    if (d < 0) toast("⏪ " + (-d) + "문장 되돌렸어요 · " + (LIS.i + 1) + "번째");
    else if (d > 0) toast("⏭ 다음 · " + (LIS.i + 1) + "번째");
    else toast("↻ 다시");
    lisJump();
  }

  function lisTick() {
    if (!LIS.on) return;
    var left = Math.max(0, LIS.endAt - Date.now());
    var s = Math.round(left / 1000);
    $("ls-time").textContent = Math.floor(s / 60) + ":" + (s % 60 < 10 ? "0" : "") + (s % 60);
    if (left <= 0) listenStop();
  }

  /* 멈춘 자리를 기억해 둡니다. 중간에 내렸다가 다시 타면 이어집니다. */
  function savedSpot() {
    var sp = S.listenAt;
    if (!sp || !sp.list || !sp.list.length) return null;
    if (sp.day !== today()) return null;            // 하루 지나면 새로 짭니다
    if (sp.i <= 0 || sp.i >= sp.list.length) return null;
    return sp;
  }

  /* 묶음 하나만 통째로. 배운 순서 그대로 갑니다. */
  function buildListenSet(sid) {
    var out = [];
    DECK.forEach(function (row) { if (row.sid === sid) out.push(row.e); });
    return out;
  }

  function listenStart(fromStart, sid) {
    if (!("speechSynthesis" in window)) { toast("이 기기는 소리 읽기를 못 해요."); return; }

    var spot = (fromStart || sid) ? null : savedSpot();
    var list = spot ? spot.list : (sid ? buildListenSet(sid) : buildListen());
    var startAt = spot ? spot.i : 0;
    LIS.sid = spot ? (spot.sid || "") : (sid || "");
    if (!list.length) { toast("들을 표현이 없어요. ‘나’에서 묶음을 켜 주세요."); return; }

    prime(); keepOn(); wakeOn();
    if (!koVoice) pickVoice();
    LIS.ko = !!S.cfg.lko && !!koVoice;
    if (S.cfg.lko && !koVoice) toast("한국어 목소리가 없어서 영어만 나옵니다.");

    /* 어느 쪽으로 연습할지. 자동이면 오전은 알아듣기, 오후는 말하기입니다. */
    LIS.dir = S.cfg.ldir === "auto"
      ? (new Date().getHours() < 14 ? "en" : "ko")
      : S.cfg.ldir;
    if (LIS.dir === "ko" && !koVoice) {
      LIS.dir = "en";
      toast("한국어 목소리가 없어서 ‘영어 → 뜻’으로 합니다.");
    }

    LIS.on = true; LIS.gen++; LIS.list = list; LIS.i = startAt; LIS.spoken = startAt; LIS.tries = 0;
    LIS.endAt = Date.now() + S.cfg.lmin * 60000;
    if (spot) toast(startAt + 1 + "번째부터 이어서 들어요.");

    showStage("stage-listen");
    $("ls-set").textContent = "";
    $("ls-en").textContent = "";
    $("ls-ko").textContent = "";
    $("ls-cue").textContent = "곧 시작해요";
    lisTick();
    LIS.tick = setInterval(lisTick, 1000);
    // 블루투스가 깨어날 틈을 주고 시작합니다.
    LIS.tm = setTimeout(lisPhrase, 1200);
  }

  function listenStop(quiet) {
    if (!LIS.on) return;
    LIS.on = false; LIS.gen++;
    if (LIS.tick) { clearInterval(LIS.tick); LIS.tick = null; }
    if (LIS.tm) { clearTimeout(LIS.tm); LIS.tm = null; }
    if (LIS.guard) { clearTimeout(LIS.guard); LIS.guard = null; }
    try { speechSynthesis.cancel(); } catch (e) {}
    keepOff(); wakeOff();

    var used = Math.round((S.cfg.lmin * 60000 - Math.max(0, LIS.endAt - Date.now())) / 60000);
    // 몇 초 듣고 끈 것은 "오늘 했다"로 치지 않습니다.
    if (LIS.spoken >= 10) {
      var t = today();
      S.days[t] = (S.days[t] || 0) + 1;
      S.sessions++;
      S.listenMin = (S.listenMin || 0) + Math.max(1, used);
    }
    // 어디까지 들었는지 남겨 둡니다
    S.listenAt = (LIS.i > 0 && LIS.i < LIS.list.length)
      ? { list: LIS.list, i: LIS.i, day: today(), sid: LIS.sid || "" }
      : null;
    save();

    if (quiet) { showStage("home"); renderHome(); checkRewards(); return; }

    // 제대로 한 판 들었을 때만 칭찬 사진을 냅니다
    setPraise(LIS.spoken >= 10);

    var box = $("done-summary"); box.innerHTML = "";
    var chips = (LIS.spoken >= 10)
      ? [["들은 표현", LIS.spoken + "개"], ["들은 시간", Math.max(1, used) + "분"]]
      : [["들은 표현", LIS.spoken + "개"], ["기록", "안 남았어요"]];
    chips
      .forEach(function (p) {
        var c = el("span", "chip");
        c.appendChild(document.createTextNode(p[0] + " "));
        c.appendChild(el("b", null, p[1]));
        box.appendChild(c);
      });

    showStage("stage-done");
    checkRewards();
  }

  /* 화면 켜 두기 — 이게 없으면 화면이 꺼지면서 소리도 멎습니다.
     막히는 곳이 있어서(앱 안에 끼워 넣어 열 때 등), 안 되면 숨기지 않고 알려 줍니다. */
  function wakeNote(ok) {
    var msg = ok
      ? "화면을 켜 둡니다. 거치대에 두세요."
      : "이 화면은 저절로 꺼질 수 있어요. 폰 설정에서 ‘화면 자동 꺼짐’을 길게 해 두세요.";
    ["ls-warn", "ns-warn"].forEach(function (id) {
      var n = $(id);
      if (!n) return;
      n.textContent = msg;
      n.className = "ls-warn" + (ok ? "" : " bad");
    });
  }
  function wakeOn() {
    try {
      if (!("wakeLock" in navigator)) { wakeNote(false); return; }
      navigator.wakeLock.request("screen").then(function (w) {
        LIS.wake = w;
        wakeNote(true);
        w.addEventListener("release", function () { LIS.wake = null; });
      })["catch"](function () { wakeNote(false); });
    } catch (e) { wakeNote(false); }
  }
  function wakeOff() { try { if (LIS.wake) { LIS.wake.release(); LIS.wake = null; } } catch (e) {} }

  /* ==========================================================
     뉴스 — 가는 길에 먼저 2~3분, 한국어로
     ==========================================================
     신문사 RSS 는 브라우저에서 바로 못 가져옵니다(허용 헤더가 없습니다).
     rss2json 이 중계해 주므로 그것을 씁니다. 받아 온 글은 이 기기 안에만
     두고(localStorage) 어디에도 올리지 않습니다 — 신문 기사이기 때문입니다.
     제목만 들으면 무슨 말인지 모르니 첫 문장을 한두 개 붙여 읽습니다. */
  var NKEY = "eng_go_news";
  /* count 같은 옵션은 열쇠가 있어야 씁니다. 기본값(10꼭지)으로도 넉넉합니다. */
  var N_API = "https://api.rss2json.com/v1/api.json?rss_url=";

  /* 신문사마다 전문의 상태가 많이 다릅니다.
     경향은 사진 설명과 부제가 기사 앞에 그대로 붙어 와서(“…포즈를 취하고
     있다. 청와대사진기자단이재명 대통령이…”) 소리로 들으면 걸립니다.
     연합은 첫 문장이 도중에 잘려 옵니다. 그래서 전문이 기사 첫 문장으로
     바로 시작하는 동아일보와 뉴시스만 씁니다. */
  var NFEEDS = [
    { c: "eco", n: "뉴시스", u: "https://newsis.com/RSS/bank.xml" },      // 금융·증권
    { c: "eco", n: "뉴시스", u: "https://newsis.com/RSS/economy.xml" },
    { c: "eco", n: "동아", u: "https://rss.donga.com/economy.xml" },
    { c: "pol", n: "동아", u: "https://rss.donga.com/politics.xml" },
    { c: "cul", n: "동아", u: "https://rss.donga.com/culture.xml" }
  ];

  /* 같은 경제라도 송이값·치킨값보다 금리·환율·실적이 먼저 나오게 합니다.
     그리고 남의 나라 증시가 몇 퍼센트 올랐다는 마감 시황은 우리 증시
     이야기가 아닙니다. 보고 싶은 건 오늘 우리 증시를 움직인 굵직한 기사입니다. */
  var FOREIGN = /올댓차이나|닛케이|항셍|창업판|상하이종합|선전종합|다우 ?지수|나스닥|S&P ?500|도쿄증시|뉴욕증시|유럽증시|[日中美英]증시|(홍콩|중국|일본|미국|유럽|대만|인도) ?증시/;
  var MKT = [
    [/코스피|코스닥|원[·\/]?달러|한국은행|금융위|금융감독원|거래소|국내 ?증시/g, 8],
    [/증시|주가|상장|공모주|자사주|공매도|배당|시가총액|증권/g, 6],
    [/금리|한국은행|기준금리|연준|연방준비|FOMC|국채|채권|환율|달러|엔화|외환/g, 6],
    [/실적|영업이익|매출|어닝|적자|흑자|인수|합병|유상증자|출자|자본확충/g, 5],
    [/물가|수출|수입|무역수지|경상수지|GDP|성장률|관세|유가|경기|내수|고용/g, 4],
    [/반도체|삼성전자|하이닉스|현대차|이차전지|배터리|조선|방산|바이오|인공지능/g, 3],
    [/부동산|아파트|대출|가계부채|세제|감세|증세|예산|연금/g, 2],
    // 교육과정 모집·행사 공고 같은 홍보성 기사는 증시와 상관이 없습니다
    [/과정 ?개설|수강생|모집|세미나|공모전|아카데미|설명회|이벤트|캠페인|후원|기부|협약|출범식/g, -12]
  ];
  /* 정치는 정치인이 주고받는 말보다 제도가 바뀌는 일과 굵직한 사건을,
     문화는 연예인 소식보다 공연·전시·문학을 앞으로 올립니다.
     빼기 점수가 붙은 낱말은 그런 기사에만 나오는 말들입니다. */
  var POL = [
    [/법안|개정|제정|입법|본회의|통과|발의|의결|예산안|시행령|제도|규제|과징금|집단소송|정책/g, 7],
    [/회담|정상|외교|안보|협정|정전|유엔|한미|방위|국방|북한|파병|관세|수출통제/g, 6],
    [/특검|탄핵|구속|기소|선고|판결|압수수색|국정감사|인사청문|위반/g, 5],
    [/여론조사|통계|지표|하락|상승|포인트/g, 3],
    [/화답|반박|비판|일침|맞불|공세|공방|설전|논평|해명|겨냥|반발|촉구|유감|저격/g, -8],
    [/위문|격려|참석|축사|회동|오찬|만찬|예방|행보|거취|의혹|성추행/g, -6]
  ];
  var CUL = [
    [/공연|무대|콘서트|오페라|뮤지컬|연극|음악회|교향악|오케스트라|발레|국악|협연|리사이틀|초연|내한/g, 8],
    [/전시|미술관|박물관|비엔날레|회고전|특별전|개인전|작품|개막/g, 7],
    [/문학|소설|시집|출판|노벨|수상작|작가|번역|도서|시인/g, 6],
    [/영화제|개봉|감독|주연|배급/g, 5],
    [/예능|방송인|열애|결혼|이혼|근황|심경|폭로|서운|고백|털어놨|눈물|화제|유튜브|인스타|소속사|학폭|사생활/g, -9],
    [/재단|포럼|유치|선정|영예|호평|출범|협약|홍보|이벤트/g, -5]
  ];

  function score(it, rules) {
    var t = it.t + " " + plain(it.d).slice(0, 220), s = 0, i, m;
    for (i = 0; i < rules.length; i++) {
      m = t.match(rules[i][0]);
      if (m) s += rules[i][1] * Math.min(3, m.length);
    }
    return s;
  }
  /* 해외 경제 기사라도 우리와 이어지는 대목이 있으면 봅니다.
     ("中 인프라 161조 집행…韓 건설기계·철강 청신호" 는 우리 증시 이야기입니다.)
     그런 고리가 없는 남의 나라 지표 발표는 내립니다. */
  var ABROAD = /영국|프랑스|독일|유로존|유럽|일본|중국|미국|대만|인도|브라질|G7|OECD|[美中日英獨佛]/;
  var OURS = /韓|한국|국내|코스피|코스닥|원[·\/]?달러|삼성|현대|SK|LG|우리 ?기업/;
  function mktScore(it) {
    var s = score(it, MKT);
    if (FOREIGN.test(it.t)) s -= 30;
    if (ABROAD.test(it.t) && !OURS.test(it.t + " " + plain(it.d).slice(0, 220))) s -= 10;
    return s;
  }
  function polScore(it) {
    // 따옴표로 시작하는 제목은 대개 "누가 뭐라고 했다" 하는 발언 기사입니다
    return score(it, POL) - (/[“”"]/.test(it.t) ? 4 : 0);
  }
  function culScore(it) { return score(it, CUL); }
  var NFEED_EN = { c: "en", n: "BBC", u: "https://feeds.bbci.co.uk/news/business/rss.xml" };
  var CAT_KO = { eco: "경제", pol: "정치", cul: "문화", en: "영어 뉴스" };

  var NEWS = { on: false, gen: 0, items: [], i: 0, tm: null, tick: null,
               startAt: 0, chain: false, busy: false };

  /* ---------- 글 다듬기 ---------- */
  var ENTS = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'",
               nbsp: " ", middot: "·", hellip: "…", rsquo: "’", lsquo: "‘",
               ldquo: "“", rdquo: "”", mdash: "—", ndash: "–" };
  function unent(s) {
    return String(s == null ? "" : s).replace(/&(#x[0-9a-f]+|#[0-9]+|[a-z]+);/gi,
      function (m, b) {
        if (b.charAt(0) === "#") {
          var n = (b.charAt(1) === "x" || b.charAt(1) === "X")
            ? parseInt(b.slice(2), 16) : parseInt(b.slice(1), 10);
          if (!(n > 0) || n > 0x10ffff) return "";
          try { return String.fromCodePoint ? String.fromCodePoint(n) : String.fromCharCode(n); }
          catch (e) { return ""; }
        }
        var k = b.toLowerCase();
        return ENTS.hasOwnProperty(k) ? ENTS[k] : m;
      });
  }
  /* &amp;#13199; 처럼 두 번 싸인 것이 옵니다. 그래서 두 번 풉니다. */
  function plain(s) {
    var t = String(s == null ? "" : s).replace(/<[^>]*>/g, " ");
    t = unent(unent(t)).replace(/[​﻿­]/g, "");
    return t.replace(/\s+/g, " ").trim();
  }

  /* 한국 기사는 마침표 뒤에 띄어쓰기가 없는 데가 많습니다("…있다.30일 …").
     그래서 띄어쓰기가 아니라 마침표로 끊고, 숫자나 약어 속의 점만 지나칩니다. */
  function koSents(t) {
    var out = [], buf = "", i, ch, prev, nx;
    for (i = 0; i < t.length; i++) {
      ch = t.charAt(i); buf += ch;
      if (ch !== "." && ch !== "!" && ch !== "?") continue;
      prev = t.charAt(i - 1); nx = t.charAt(i + 1);
      if (ch === "." && /[0-9]/.test(prev) && /[0-9]/.test(nx)) continue;
      if (ch === "." && /[A-Za-z]/.test(prev) && !/\s/.test(nx) && nx !== "") continue;
      out.push(buf.trim()); buf = "";
    }
    if (buf.trim()) out.push(buf.trim());
    return out;
  }

  /* 기사 첫머리에는 사진 설명과 부제가 붙어 옵니다.
     ("1등급 양양송이. 양양군 제공" / "…1만2500원 올라···생산량 절반 감소")
     눈으로 보면 넘기지만 소리로 들으면 걸립니다.
     그래서 '~다.' 로 끝나는 온전한 문장만 골라 읽습니다. */
  function isSent(s) {
    if (s.length < 16 || s.length > 220) return false;
    if (/제공|사진=|자료사진|무단 ?전재|재배포|저작권|기자$|촬영/.test(s)) return false;
    return /(다|요)[.!?]$/.test(s);
  }
  function leadOf(desc, howMany) {
    if (howMany <= 0) return [];
    var t = plain(desc)
      .replace(/^\([^)]{2,24}\)\s*/, "")                          // (서울=연합뉴스)
      .replace(/^\[[^\]]{1,24}\]\s*[가-힣A-Za-z]{2,10}\s*기자\s*=\s*/, "")  // [서울=뉴시스]김○○ 기자 =
      .replace(/^\[[^\]]{1,24}\]\s*/, "");
    var ss = koSents(t), got = [], i;
    for (i = 0; i < ss.length && got.length < howMany; i++) {
      if (isSent(ss[i])) got.push(ss[i]);
    }
    return got;
  }
  /* 통신사 제목 끝의 (종합)·(2보) 같은 표시는 읽어 봐야 군더더기입니다. */
  function titleOf(t) {
    return plain(t)
      .replace(/^(\[[^\]]{1,14}\]\s*)+/, "")
      .replace(/\s*\((종합|전문|영상|포토|표|그래픽)[0-9]*보?\)\s*$/g, "")
      .replace(/[\s·…]+$/, "").trim();
  }

  /* ---------- 가져오기 ---------- */
  function fetchFeed(f, cb) {
    var done = false, to = null;
    function fin(rows) { if (done) return; done = true; if (to) clearTimeout(to); cb(rows); }
    to = setTimeout(function () { fin([]); }, 13000);
    try {
      fetch(N_API + encodeURIComponent(f.u))
        .then(function (r) { return r.json(); })
        .then(function (d) {
          var out = [];
          ((d && d.items) || []).forEach(function (it) {
            var ti = titleOf(it.title);
            if (!ti) return;
            var when = Date.parse(String(it.pubDate || "").replace(" ", "T") + "Z");
            out.push({ c: f.c, src: f.n, f: f.u, t: ti,
                       d: it.description || it.content || "",
                       at: when || 0 });
          });
          fin(out);
        })["catch"](function () { fin([]); });
    } catch (e) { fin([]); }
  }

  /* 같은 사건을 다룬 기사가 제목만 달리해 여러 꼭지로 들어옵니다.
     ("한화생명, 캐피탈 인수·증권 5000억 증자" 와
      "한화투자증권, 9000억 자본조달 추진" 은 사실 한 이야기입니다.)
     제목 앞부분만 견주면 못 잡습니다. 제목과 첫 문장을 다섯 글자씩 잘라
     그 조각이 얼마나 겹치는지로 봅니다. 한국어는 조사가 붙어 낱말이
     달라 보여도 이렇게 자르면 겹치는 데가 드러납니다. */
  function shingles(s) {
    var t = String(s).replace(/[^가-힣0-9A-Za-z]/g, ""), out = {}, i;
    for (i = 0; i + 4 <= t.length; i++) out[t.substr(i, 4)] = 1;
    return out;
  }
  /* 그냥 견주면 "했다고 밝혔다" 같은 흔한 말투까지 겹쳐서, 아무 상관 없는
     기사끼리도 너덧 개씩 걸립니다. 그래서 여러 기사에 두루 나오는 조각은
     빼고 봅니다. 그날 들어온 기사로 재 보니 이렇게 하면
     같은 이야기는 7개 이상 겹치고 남남인 기사는 4개를 넘지 않았습니다. */
  function rareOnly(list) {
    var df = {}, i, k;
    for (i = 0; i < list.length; i++) {
      for (k in list[i].sh) if (list[i].sh.hasOwnProperty(k)) df[k] = (df[k] || 0) + 1;
    }
    for (i = 0; i < list.length; i++) {
      var r = {};
      for (k in list[i].sh) if (list[i].sh.hasOwnProperty(k) && df[k] < 3) r[k] = 1;
      list[i].sh = r;
    }
  }
  function alike(a, b) {
    var shared = 0, k;
    for (k in a) if (a.hasOwnProperty(k) && b[k]) shared++;
    return shared;
  }

  /* 같은 기사가 두 신문에서 오면 하나만 남깁니다.
     그리고 면마다 보고 싶은 쪽이 달라서 점수를 따로 매깁니다. */
  function pickNews(all, want) {
    var by = { eco: [], pol: [], cul: [] }, rows = [], i;
    all.sort(function (a, b) { return b.at - a.at; });
    all.forEach(function (x) {
      x.lead = leadOf(x.d, 1);
      x.sh = shingles(x.t + " " + (x.lead[0] || "").slice(0, 90));
      rows.push(x);
    });
    rareOnly(rows);                       // 흔한 말투는 견주기에서 빼 둡니다

    var kept = [];
    rows.forEach(function (x) {
      for (var j = 0; j < kept.length; j++) {
        if (alike(x.sh, kept[j].sh) >= 5) return;   // 앞서 넣은 것과 같은 이야기
      }
      kept.push(x);
      // 읽을 전문이 없는 것(인사 발령 같은 토막글)은 뒤로 미룹니다
      var bonus = (x.lead.length ? 4 : -8);
      x.sc = (x.c === "pol" ? polScore(x) : x.c === "cul" ? culScore(x) : mktScore(x)) + bonus;
      if (by[x.c]) by[x.c].push(x);
    });
    ["eco", "pol", "cul"].forEach(function (c) {
      by[c].sort(function (a, b) { return (b.sc - a.sc) || (b.at - a.at); });
    });

    /* 그날 정치·문화에 볼 만한 게 없으면(공방 기사만, 연예 소식만) 빼고
       그 자리를 경제로 채웁니다. 억지로 하나씩 끼워 넣지 않습니다. */
    var nPol = (want >= 6 && by.pol.length && by.pol[0].sc > 4) ? 1 : 0;
    var nCul = (want >= 5 && by.cul.length && by.cul[0].sc > 4) ? 1 : 0;
    var nEco = Math.max(1, want - nPol - nCul);

    /* 그냥 점수 순서대로 뽑으면 '일본 증시 마감·홍콩 증시 마감·중국 증시 마감'
       처럼 거의 같은 이야기가 줄줄이 나옵니다. 두 가지로 막습니다.
       한 신문에서 너무 많이 가져오지 않기, 그리고 시황 기사는 두 개까지. */
    var feeds = {}, nf = 0;
    by.eco.forEach(function (x) { if (!feeds[x.f]) { feeds[x.f] = 1; nf++; } });
    var cap = Math.max(2, Math.ceil(nEco / Math.max(1, nf)));

    var SIHWANG = /증시|지수|마감|개장|코스피|코스닥|환율/;
    var used = {}, nSi = 0, eco = [], spare = [];
    by.eco.forEach(function (x) {
      /* 전문이 있다는 것만으로 4점이 붙으므로, 10점은 '증시와 닿는 낱말이
         적어도 하나는 제대로 있다'는 뜻입니다. 이 선을 못 넘으면 거릅니다. */
      if (x.sc < 10) return;
      var si = SIHWANG.test(x.t);
      if (eco.length >= nEco || (used[x.f] || 0) >= cap || (si && nSi >= 2)) {
        spare.push(x); return;
      }
      used[x.f] = (used[x.f] || 0) + 1;
      if (si) nSi++;
      eco.push(x);
    });
    /* 한 신문 제한에 걸려 밀린 것은 마저 채우되, 자리를 메우려고 시원찮은
       기사까지 끌어오지는 않습니다. 다섯 개를 억지로 채우는 것보다
       괜찮은 네 개를 듣는 편이 낫습니다. */
    for (var j2 = 0; j2 < spare.length && eco.length < nEco; j2++) eco.push(spare[j2]);

    return eco.concat(by.pol.slice(0, nPol)).concat(by.cul.slice(0, nCul));
  }

  function newsCache() {
    try { return JSON.parse(localStorage.getItem(NKEY) || "null"); } catch (e) { return null; }
  }
  function newsLoad(force, cb) {
    var old = newsCache();
    if (!force && old && old.items && old.items.length &&
        Date.now() - (old.at || 0) < 40 * 60000) { cb(old.items, true); return; }

    var feeds = NFEEDS.slice();
    if (S.cfg.nen) feeds.push(NFEED_EN);
    var got = [], left = feeds.length;

    feeds.forEach(function (f) {
      fetchFeed(f, function (rows) {
        got = got.concat(rows);
        if (--left > 0) return;

        var items = pickNews(got.filter(function (x) { return x.c !== "en"; }), S.cfg.nnum);
        if (S.cfg.nen) {
          var en = got.filter(function (x) { return x.c === "en"; });
          en.sort(function (a, b) { return b.at - a.at; });
          if (en[0]) items.push(en[0]);
        }
        if (!items.length) { cb((old && old.items) || [], true); return; }
        try { localStorage.setItem(NKEY, JSON.stringify({ at: Date.now(), items: items })); } catch (e) {}
        cb(items, false);
      });
    });
  }

  /* ---------- 읽어 주기 ---------- */
  /* lisSay 의 기다림은 짧은 영어 문장에 맞춰 둔 것이라 긴 한국어 기사에는 모자랍니다.
     길이에 넉넉히 비례해 기다립니다. 그리고 한 문장씩 따로 읽습니다 —
     긴 글을 한 번에 넘기면 중간에 멎는 기기가 있습니다. */
  /* 기사 제목에는 소리로 읽으면 어색한 기호가 많습니다.
     "닛케이 1.94%↑" 를 그대로 넘기면 화살표를 읽거나 그냥 삼킵니다. */
  function forSpeech(t) {
    return String(t)
      .replace(/([0-9%])\s*↑/g, "$1 상승")
      .replace(/([0-9%])\s*↓/g, "$1 하락")
      .replace(/%p/gi, "퍼센트포인트")
      .replace(/[↑▲]/g, " 상승 ").replace(/[↓▼]/g, " 하락 ")
      .replace(/[…·ㆍ]/g, ", ")
      .replace(/[“”"'‘’]/g, " ")
      .replace(/\s*~\s*/g, " 에서 ")
      .replace(/\s*[|·]\s*/g, ", ")
      .replace(/\s+/g, " ").trim();
  }

  function nSay(text, lang, done) {
    var fired = false, wd = null;
    function fin() { if (fired) return; fired = true; if (wd) clearTimeout(wd); done(); }
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(lang === "ko-KR" ? forSpeech(text) : String(text));
      u.lang = lang;
      u.rate = (lang === "ko-KR") ? (S.cfg.nrate || 100) / 100 : 0.9;
      var v = (lang === "ko-KR") ? koVoice : voice;
      if (v) { try { u.voice = v; } catch (e2) {} }
      u.onend = fin; u.onerror = fin;
      wd = setTimeout(fin, 4000 + String(text).length * 320);
      speechSynthesis.speak(u);
    } catch (e) { fin(); }
  }

  function newsSeq(it, sayCat) {
    var seq = [], i;
    if (sayCat) seq.push({ s: CAT_KO[it.c] + "입니다.", l: "ko-KR", w: 450 });
    if (it.c === "en") {
      seq.push({ s: it.t, l: "en-US", w: 600 });
      var es = splitSents(plain(it.d));
      if (es[0]) seq.push({ s: es[0], l: "en-US", w: 500 });
    } else {
      seq.push({ s: it.t + ".", l: "ko-KR", w: 500 });
      var ls = leadOf(it.d, S.cfg.nlen);
      for (i = 0; i < ls.length; i++) seq.push({ s: ls[i], l: "ko-KR", w: 320 });
    }
    seq[seq.length - 1].w = 900;         // 꼭지 사이는 좀 쉬어 갑니다
    return seq;
  }

  function drawNews(it, n) {
    $("ns-cat").textContent = CAT_KO[it.c] + " · " + it.src;
    $("ns-title").textContent = it.t;
    $("ns-lead").textContent = (it.c === "en")
      ? (splitSents(plain(it.d))[0] || "")
      : leadOf(it.d, S.cfg.nlen).join(" ");
    $("ns-count").textContent = n + " / " + NEWS.items.length;
  }

  function newsRun() {
    if (!NEWS.on) return;
    var g = NEWS.gen;
    if (NEWS.i >= NEWS.items.length) { newsEnd(); return; }

    var it = NEWS.items[NEWS.i];
    var prev = NEWS.i > 0 ? NEWS.items[NEWS.i - 1] : null;
    drawNews(it, NEWS.i + 1);

    var seq = newsSeq(it, !prev || prev.c !== it.c), k = 0;
    function step() {
      if (!NEWS.on || g !== NEWS.gen) return;
      if (k >= seq.length) { NEWS.i++; NEWS.tm = setTimeout(newsRun, 200); return; }
      var st = seq[k++];
      nSay(st.s, st.l, function () {
        if (!NEWS.on || g !== NEWS.gen) return;
        NEWS.tm = setTimeout(step, st.w || 300);
      });
    }
    step();
  }

  function newsSkip(d) {
    if (!NEWS.on) return;
    NEWS.gen++;
    if (NEWS.tm) { clearTimeout(NEWS.tm); NEWS.tm = null; }
    try { speechSynthesis.cancel(); } catch (e) {}
    NEWS.i = Math.max(0, Math.min(NEWS.items.length, NEWS.i + d));
    NEWS.tm = setTimeout(newsRun, 400);
  }

  function newsTick() {
    var s = Math.max(0, Math.round((Date.now() - NEWS.startAt) / 1000));
    $("ns-time").textContent = Math.floor(s / 60) + ":" + (s % 60 < 10 ? "0" : "") + (s % 60);
  }

  /* 뉴스가 끝나면 그대로 영어 듣기로 넘어갑니다. 운전 중에 손을 안 대도 되게. */
  function newsEnd() {
    var go = NEWS.chain;
    newsQuiet(go);
    if (go) { listenStart(false); return; }
    showStage("home"); renderHome();
  }
  function newsQuiet(keepSound) {
    NEWS.on = false; NEWS.gen++;
    if (NEWS.tm) { clearTimeout(NEWS.tm); NEWS.tm = null; }
    if (NEWS.tick) { clearInterval(NEWS.tick); NEWS.tick = null; }
    try { speechSynthesis.cancel(); } catch (e) {}
    wakeOff();
    if (!keepSound) keepOff();      // 이어서 들을 때는 블루투스를 깨워 둔 채로
  }
  function newsStop() {
    if (!NEWS.on && !NEWS.busy) return;
    NEWS.busy = false;
    newsQuiet(false);
    showStage("home"); renderHome();
  }

  function newsStart(chain) {
    if (!("speechSynthesis" in window)) { toast("이 기기는 소리 읽기를 못 해요."); return; }
    if (!koVoice) pickVoice();
    if (!koVoice) { toast("한국어 목소리가 없어서 뉴스를 읽지 못해요."); return; }

    prime(); keepOn(); wakeOn();
    NEWS.chain = !!chain;
    NEWS.busy = true;
    NEWS.items = []; NEWS.i = 0;

    showStage("stage-news");
    $("ns-cat").textContent = "";
    $("ns-title").textContent = "뉴스를 가져오는 중이에요";
    $("ns-lead").textContent = "잠깐만요.";
    $("ns-count").textContent = "";
    $("ns-time").textContent = "0:00";

    newsLoad(false, function (items, stale) {
      if (!NEWS.busy) return;                  // 그 사이에 멈췄으면 그만
      if (!items.length) {
        toast("뉴스를 못 가져왔어요.");
        NEWS.busy = false;
        if (chain) { newsQuiet(true); listenStart(false); return; }
        newsQuiet(false); showStage("home"); renderHome();
        return;
      }
      if (stale) toast("저장해 둔 뉴스를 들려줍니다.");
      NEWS.items = items; NEWS.i = 0; NEWS.on = true; NEWS.gen++;
      NEWS.startAt = Date.now();
      newsTick();
      NEWS.tick = setInterval(newsTick, 1000);
      NEWS.tm = setTimeout(newsRun, 900);      // 블루투스가 깨어날 틈
    });
  }

  /* ==========================================================
     화면
     ========================================================== */
  /* ---------- 폰 뒤로가기 ----------
     화면 하나짜리 앱이라, 묶음에 들어가도 브라우저가 보기엔 이동이 없습니다.
     그래서 뒤로가기를 누르면 앱을 통째로 빠져나갑니다.
     안으로 들어갈 때 돌아갈 자리를 하나 만들어 두고, 뒤로가기를 받으면
     그 자리로 돌아옵니다. 자리는 한 번에 하나만 둡니다. */
  var backClose = null, backSkip = false;

  function backArm(close) {
    if (backClose) { backClose = close; return; }   // 이미 있으면 갈아끼우기만
    backClose = close;
    try { history.pushState({ b: 1 }, ""); } catch (e) {}
  }
  function backFire() {                              // 앱 안의 ← 단추가 부릅니다
    if (!backClose) return false;
    try { history.back(); return true; } catch (e) { return false; }
  }
  function backDisarm() {                            // 탭을 옮겨 자리가 무효가 될 때
    if (!backClose) return;
    backClose = null; backSkip = true;
    try { history.back(); } catch (e) { backSkip = false; }
  }
  window.addEventListener("popstate", function () {
    if (backSkip) { backSkip = false; return; }
    var f = backClose; backClose = null;
    if (f) f();
  });

  var VIEWS = ["today", "find", "read", "reward", "me"];
  var STAGES = ["home", "stage-card", "stage-talk", "stage-fast", "stage-listen",
                "stage-news", "stage-done"];

  /* keepBack: 찾기에서 표현을 눌러 '오늘'로 넘어가는 것처럼, 화면은 옮기지만
     돌아갈 자리는 그대로 두어야 할 때 씁니다. 아래 탭을 눌러 옮길 때는 버립니다. */
  function showView(n, keepBack) {
    if (!keepBack) backDisarm();    // 탭을 옮기면 쌓아둔 뒤로가기 자리는 버립니다
    if (NEWS.on || NEWS.busy) { NEWS.busy = false; newsQuiet(false); }
    if (LIS.on) listenStop(true);   // 다른 곳으로 가면 듣기는 멈춥니다
    VIEWS.forEach(function (v) { $("view-" + v).hidden = (v !== n); });
    [].slice.call(document.querySelectorAll(".tab")).forEach(function (t) {
      t.classList.toggle("on", t.getAttribute("data-view") === n);
    });
    if (n === "today") renderHome();
    if (n === "find") renderFind();
    if (n === "read") renderRead(); else readStop();
    if (n === "reward") renderRewards();
    if (n === "me") renderMe();
    window.scrollTo(0, 0);
  }
  function showStage(id) { STAGES.forEach(function (s) { $(s).hidden = (s !== id); }); window.scrollTo(0, 0); }

  /* ---------- 오늘 ---------- */
  function renderHome() {
    var b = levelBand();
    $("lv-num").textContent = "Lv." + b.level;
    $("lv-fill").style.width = (b.need ? b.into / b.need * 100 : 100) + "%";
    $("lv-xp").textContent = b.into + " / " + b.need + " XP";
    var opened = S.rewards.filter(function (r) { return r.opened; }).length;
    $("lv-got").textContent = "보상 " + opened + " / " + S.rewards.length;
    $("lv-next").textContent = "다음 레벨까지 " + Math.max(0, b.need - b.into) + " XP";

    var n = todaySessions();
    var hour = new Date().getHours();
    $("slot-label").textContent = hour < 14 ? "가는 길" : "오는 길";
    $("head-title").textContent = n === 0 ? "오늘 아직 안 했어요"
      : n === 1 ? "한 번 했어요" : (n + "번 했어요");
    var st = streak();
    $("head-sub").textContent = st > 1 ? (st + "일 이어 오는 중이에요") : "하루 두 번이면 충분해요";

    var s = buildSession();
    var newN = 0, revN = 0;
    s.list.forEach(function (e) { if (S.seen[e]) revN++; else newN++; });

    var talkN = s.list.length ? buildTalk(s.list).length : 0;
    var fastN = s.list.length ? Math.min(2, (typeof FAST !== "undefined" ? FAST.length : 0)) : 0;

    $("btn-go").textContent = s.list.length ? "오늘의 미션 시작하기" : "오늘 볼 것을 다 봤어요";
    $("btn-go").disabled = !s.list.length;

    // 무엇을 하는지는 한 줄로만. 화면을 덜 먹게.
    if (s.list.length) {
      var bits = [];
      if (newN) bits.push("새 표현 " + newN);
      if (revN) bits.push("복습 " + revN);
      if (talkN) bits.push("대화 " + talkN);
      if (fastN) bits.push("빠른 말 " + fastN);
      $("go-note").textContent = bits.join(" · ") +
        " · 약 " + Math.max(3, Math.round(s.list.length * 0.6)) + "분";
    } else {
      $("go-note").textContent = "‘찾기’에서 골라 볼 수 있어요";
    }

    var hd = heardTodayCount();
    var dirNow = S.cfg.ldir === "auto" ? (hour < 14 ? "en" : "ko") : S.cfg.ldir;
    var dirTxt = dirNow === "ko" ? "뜻 → 영어" : "영어 → 뜻";
    var spot = savedSpot();
    var spotSet = (spot && spot.sid && SET_BY_ID[spot.sid]) ? SET_BY_ID[spot.sid].name + " · " : "";
    $("listen-note").textContent = spot
      ? (spotSet + "이어서 " + (spot.i + 1) + "번째부터 · " + dirTxt)
      : ("운전할 때 · " + dirTxt +
         (hd ? " — 오늘 들은 " + hd + "개는 뒤로" : " — " + S.cfg.lmin + "분, 손 안 대도 됩니다"));
    $("btn-listen-restart").hidden = !spot;

    $("btn-news").hidden = !S.cfg.news;
    if (S.cfg.news) {
      var cached = newsCache();
      var fresh = cached && cached.at && (Date.now() - cached.at < 40 * 60000);
      $("news-note").textContent =
        (S.cfg.nchain ? "경제 중심 · 끝나면 영어로 이어서" : "경제 중심 · 뉴스만") +
        (fresh ? " — 받아 둔 것이 있어요" : "");
    }

    renderNextReward();
  }

  function renderNextReward() {
    var box = $("next-reward");
    var open = nextRewardProgress();
    if (!open) { box.hidden = true; return; }
    box.hidden = false;
    $("nr-ico").textContent = open.r.kind === "photo" ? "🖼️" : open.r.kind === "link" ? "▶️" : "💌";
    $("nr-name").textContent = open.r.cap || condText(open.r);
    $("nr-left").textContent = condText(open.r) + " · " + open.cur + " / " + open.r.n;
    $("nr-fill").style.width = Math.min(100, open.cur / open.r.n * 100) + "%";
  }

  /* ---------- 카드 ---------- */
  function start() {
    var s = buildSession();
    if (!s.list.length) return;
    SESSION = s; idx = 0; results = { ok: 0, no: 0, newN: 0 };
    S.ptr = Math.max(S.ptr, s.nextPtr);
    // 오늘 볼 표현 중에서 대화를 고릅니다. 카드가 끝나면 이어집니다.
    TK.list = buildTalk(s.list); TK.okCount = 0; TK.doneCount = 0; TK.micUsed = false; TK.solo = false;
    save();
    showStage("stage-card");
    drawCard();
  }

  function cur() { return BY_EN[SESSION.list[idx]]; }

  function drawCard() {
    if (idx >= SESSION.list.length) { talkStart(); return; }   // 카드 다음은 대화
    var row = cur();
    if (!row) { idx++; drawCard(); return; }

    stage = row.h ? 0 : 1;
    $("card-counter").textContent = (idx + 1) + " / " + SESSION.list.length;
    $("card-set").textContent = row.sicon + " " + row.sname;
    $("card-progress").style.width = (idx / SESSION.list.length * 100) + "%";

    $("card-hint").textContent = row.h ? "소리만 듣고 맞혀 보세요" :
      (S.seen[row.e] ? "다시 보는 표현이에요" : "처음 보는 표현이에요");
    $("card-en").innerHTML = wordHtml(row.e);
    $("card-ko").textContent = row.k;
    $("card-note").textContent = row.n;

    applyStage();
    say(row.e);
  }

  function applyStage() {
    var row = cur();
    $("card-en").hidden = stage < 1;
    $("card-ko").hidden = stage < 2;
    $("card-note").hidden = stage < 2 || !row.n;
    $("reveal-wrap").hidden = stage >= 2;
    $("rate-wrap").hidden = stage < 2;
    $("btn-reveal").textContent = stage === 0 ? "글자 보기" : "뜻 보기";
  }

  function reveal() {
    stage = Math.min(2, stage + 1);
    applyStage();
    if (stage === 1) say(cur().e);
  }

  function rate(ok) {
    var row = cur();
    if (!S.seen[row.e]) results.newN++;
    record(row.e, ok);
    if (ok) { results.ok++; showReact(); } else results.no++;
    save();
    idx++;
    drawCard();
  }

  /* 어느 단계에서든 그만둘 때 — 말하던 것, 듣던 것을 모두 멈춥니다 */
  function quitMission() {
    if (TK.rec) { try { TK.rec.abort(); } catch (e) {} TK.rec = null; }
    try { speechSynthesis.cancel(); } catch (e) {}
    TK.busy = false;
    backDisarm();                   // 여기서 끝났으니 돌아갈 자리도 거둡니다
    showStage("home");
    renderHome();
  }

  function finish() {
    var t = today();
    S.days[t] = (S.days[t] || 0) + 1;
    S.sessions++;
    save();

    var box = $("done-summary"); box.innerHTML = "";
    var rows = [["새 표현", results.newN + "개"], ["알았어요", results.ok + "개"], ["몰랐어요", results.no + "개"]];
    if (TK.doneCount) rows.push(["대화", TK.doneCount + "개"]);
    if (TK.micUsed) rows.push(["말해서 맞춘 것", (TK.okCount || 0) + "개"]);
    rows
      .forEach(function (p) {
        var c = el("span", "chip");
        c.appendChild(document.createTextNode(p[0] + " "));
        c.appendChild(el("b", null, p[1]));
        box.appendChild(c);
      });

    setPraise(true);
    showStage("stage-done");
    checkRewards();
  }

  /* ==========================================================
     보상
     ========================================================== */
  function statFor(type) {
    if (type === "level") return levelBand().level;
    if (type === "days") return streak();
    return learnedCount();
  }
  function condText(r) {
    return r.type === "level" ? ("레벨 " + r.n) :
           r.type === "days" ? (r.n + "일 이어서") : ("표현 " + r.n + "개");
  }
  function nextRewardProgress() {
    var best = null;
    S.rewards.forEach(function (r) {
      if (r.opened) return;
      var cur2 = statFor(r.type);
      var ratio = r.n ? cur2 / r.n : 0;
      if (!best || ratio > best.ratio) best = { r: r, cur: cur2, ratio: ratio };
    });
    return best;
  }

  var queue = [];
  function checkRewards() {
    var fresh2 = [];
    S.rewards.forEach(function (r) {
      if (r.opened) return;
      if (statFor(r.type) >= r.n) { r.opened = today(); fresh2.push(r); }
    });
    if (fresh2.length) { save(); queue = queue.concat(fresh2); showUnlock(); }
  }

  function showUnlock() {
    if (!queue.length) { $("unlock").hidden = true; return; }
    var r = queue[0], b = $("unlock-body");
    b.innerHTML = "";
    if (r.kind === "photo" && r.data) {
      var im = new Image(); im.src = r.data; im.alt = r.cap || "보상";
      b.appendChild(im);
    } else if (r.kind === "link" && r.data) {
      b.appendChild(el("div", "big-emoji", "▶️"));
      var a = el("a", null, "열어 보기");
      a.href = r.data; a.target = "_blank"; a.rel = "noopener";
      b.appendChild(a);
    } else {
      b.appendChild(el("div", "note-text", r.cap || "잘하고 있어요"));
    }
    $("unlock-cap").textContent = r.cap || condText(r);
    $("unlock-more").hidden = queue.length < 2;
    $("unlock-more").textContent = "보상 " + (queue.length - 1) + "개가 더 있어요";
    $("unlock").hidden = false;
  }

  function renderRewards() {
    var head = $("reward-head"); head.innerHTML = "";
    var b = levelBand();
    [[("Lv." + b.level), "레벨"], [streak() + "일", "이어서"], [learnedCount() + "개", "익힌 표현"]]
      .forEach(function (p) {
        var d = el("div", "rh");
        d.appendChild(el("div", "rv", p[0]));
        d.appendChild(el("div", "rl", p[1]));
        head.appendChild(d);
      });

    var list = $("reward-list"); list.innerHTML = "";
    if (!S.rewards.length) {
      list.appendChild(emptyBox("아직 보상이 없어요.",
        "아래 ‘보상 만들기’로 내가 보고 싶은 것을 걸어 두세요."));
      return;
    }

    S.rewards.slice().sort(function (x, y) { return statFor(x.type) / x.n < statFor(y.type) / y.n ? 1 : -1; })
      .forEach(function (r) {
        var cur2 = statFor(r.type), pct = Math.min(100, cur2 / r.n * 100);
        var c = el("div", "rw" + (r.opened ? " open" : ""));

        var top = el("div", "rw-top");
        top.appendChild(el("span", "rw-ico", r.opened ? "🎉" : "🔒"));
        var body = el("div");
        body.appendChild(el("div", "rw-cond", condText(r)));
        if (r.cap) body.appendChild(el("div", "rw-cap", r.cap));
        top.appendChild(body);
        var del = el("button", "rw-del", "×");
        del.type = "button";
        del.title = "지우기";
        del.onclick = function () {
          if (!window.confirm("이 보상을 지울까요?")) return;
          S.rewards = S.rewards.filter(function (x) { return x.id !== r.id; });
          save(); renderRewards();
        };
        top.appendChild(del);
        c.appendChild(top);

        if (r.opened) {
          if (r.kind === "photo" && r.data) {
            var im = new Image(); im.src = r.data; im.alt = r.cap || ""; c.appendChild(im);
          } else if (r.kind === "link" && r.data) {
            var a = el("a", null, "열어 보기 ↗");
            a.href = r.data; a.target = "_blank"; a.rel = "noopener";
            c.appendChild(a);
          }
        } else {
          var bar = el("div", "rw-bar"); var sp = el("span");
          sp.style.width = pct + "%"; bar.appendChild(sp); c.appendChild(bar);
          c.appendChild(el("div", "rw-left", cur2 + " / " + r.n));
        }
        list.appendChild(c);
      });
  }

  /* ---------- 보상 만들기 ---------- */
  var draft = { type: "level", kind: "photo", data: "" };

  function openEditor() {
    draft = { type: "level", kind: "photo", data: "" };
    $("rw-n").value = 3;
    $("rw-cap").value = "";
    $("rw-url").value = "";
    $("rw-preview").hidden = true;
    markSeg("#rw-cond", "data-cond", "level");
    markSeg("#rw-kind", "data-kind", "photo");
    kindBlocks();
    unitText();
    $("editor").hidden = false;
  }
  function markSeg(sel, attr, v) {
    [].slice.call(document.querySelectorAll(sel + " button")).forEach(function (b) {
      b.classList.toggle("on", b.getAttribute(attr) === v);
    });
  }
  function unitText() {
    $("rw-unit").textContent = draft.type === "level" ? "레벨이 되면"
      : draft.type === "days" ? "일 이어서 하면" : "개를 익히면";
  }
  function kindBlocks() {
    $("rw-photo").hidden = draft.kind !== "photo";
    $("rw-link").hidden = draft.kind !== "link";
  }

  function shrinkImage(file, cb) {
    var fr = new FileReader();
    fr.onload = function () {
      var img = new Image();
      img.onload = function () {
        var max = 720, w = img.width, h = img.height;
        if (w > h && w > max) { h = Math.round(h * max / w); w = max; }
        else if (h >= w && h > max) { w = Math.round(w * max / h); h = max; }
        var cv = document.createElement("canvas");
        cv.width = w; cv.height = h;
        cv.getContext("2d").drawImage(img, 0, 0, w, h);
        try { cb(cv.toDataURL("image/jpeg", 0.75)); }
        catch (e) { cb(""); }
      };
      img.onerror = function () { cb(""); };
      img.src = String(fr.result);
    };
    fr.onerror = function () { cb(""); };
    fr.readAsDataURL(file);
  }

  function saveReward() {
    var n = parseInt($("rw-n").value, 10);
    if (!n || n < 1) { toast("숫자를 넣어 주세요."); return; }
    var cap = $("rw-cap").value.trim();
    var data = "";
    if (draft.kind === "photo") {
      if (!draft.data) { toast("사진을 골라 주세요."); return; }
      data = draft.data;
    } else if (draft.kind === "link") {
      data = $("rw-url").value.trim();
      if (!/^https?:\/\//i.test(data)) { toast("주소는 http 로 시작해야 해요."); return; }
    } else {
      if (!cap) { toast("한마디를 써 주세요."); return; }
    }

    S.rewards.push({
      id: "r" + Date.now() + Math.floor(Math.random() * 1000),
      type: draft.type, n: n, kind: draft.kind, data: data, cap: cap, opened: ""
    });
    try { save(); } catch (e) {}
    // 용량 초과로 저장이 안 됐는지 확인
    var ok = true;
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { ok = false; }
    if (!ok) {
      S.rewards.pop();
      save();
      toast("사진이 너무 커서 담기지 않았어요. 다른 사진을 써 보세요.");
      return;
    }
    $("editor").hidden = true;
    renderRewards();
    checkRewards();
    toast("보상을 만들었어요.");
  }

  function exportRewards() {
    var pack = { app: "eng-go-rewards", ver: 1, savedAt: new Date().toISOString(), rewards: S.rewards };
    download(JSON.stringify(pack), "보상꾸러미_" + today() + ".json");
    toast("내보냈어요. 친구에게 보내세요.");
  }
  function importRewards(file) {
    if (!file) return;
    var fr = new FileReader();
    fr.onload = function () {
      var p = null;
      try { p = JSON.parse(String(fr.result)); } catch (e) {}
      if (!p || p.app !== "eng-go-rewards" || !Array.isArray(p.rewards)) {
        toast("보상 꾸러미 파일이 아니에요."); return;
      }
      if (!window.confirm("보상 " + p.rewards.length + "개를 더할까요?\n지금 있는 보상은 그대로 둡니다.")) return;
      p.rewards.forEach(function (r) {
        r.id = "r" + Date.now() + Math.floor(Math.random() * 10000);
        r.opened = "";
        S.rewards.push(r);
      });
      var ok = true;
      try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { ok = false; }
      if (!ok) { toast("담기에 너무 커요. 사진이 많은 꾸러미인 것 같아요."); return; }
      save(); renderRewards(); checkRewards();
      toast("보상을 더했어요.");
    };
    fr.readAsText(file);
  }

  /* ==========================================================
     찾기
     ========================================================== */
  var findSet = null;

  function norm(s) {
    return String(s == null ? "" : s).replace(/[\s.,!?'"’]/g, "").toLowerCase();
  }

  function renderFind() {
    var q = $("q").value.trim();
    $("q-clear").hidden = !q;
    var box = $("find-result"); box.innerHTML = "";

    if (!q && !findSet) {
      SETS.forEach(function (s) {
        var got = 0;
        s.items.forEach(function (it) { if (S.seen[it.e]) got++; });
        var b = el("button", "set-card"); b.type = "button";
        b.innerHTML = '<span class="si">' + esc(s.icon) + '</span>' +
          '<div class="sn">' + esc(s.name) + '</div>' +
          '<div class="sd">' + s.items.length + '개 · 익힘 ' + got + '개</div>';
        b.onclick = function () {
          findSet = s.id; renderFind();
          backArm(function () { findSet = null; renderFind(); });
        };
        box.appendChild(b);
      });
      return;
    }

    var hits = [];
    if (q) {
      var nq = norm(q);
      DECK.forEach(function (r) {
        if (norm(r.e).indexOf(nq) >= 0 || norm(r.k).indexOf(nq) >= 0 || norm(r.n).indexOf(nq) >= 0) hits.push(r);
      });
    } else {
      var s2 = SET_BY_ID[findSet];
      var back = el("button", "back-tag", "← 전체 묶음");
      back.type = "button";
      back.onclick = function () {
        if (backFire()) return;              // 쌓아둔 자리가 있으면 그걸로 돌아갑니다
        findSet = null; renderFind();
      };
      box.appendChild(back);
      var h = el("h2", "sec-title", s2.icon + " " + s2.name);
      box.appendChild(h);
      if (s2.note) box.appendChild(el("p", "sec-note", s2.note));
      hits = DECK.filter(function (r) { return r.sid === findSet; });

      // 이 묶음만 통째로 듣기
      var play = el("button", "set-listen"); play.type = "button";
      play.innerHTML = '<span class="sl-ico">🎧</span>' +
        '<span class="sl-t">이 묶음 통째로 듣기</span>' +
        '<span class="sl-s">' + hits.length + '개 · 한 바퀴 약 ' +
        Math.max(1, Math.round(hits.length * 10 / 60)) + '분 · 시간이 남으면 다시 돕니다</span>';
      play.onclick = function () {
        showView("today", true); listenStart(false, findSet);
        backArm(backToFind);
      };
      box.appendChild(play);
    }

    if (!hits.length) { box.appendChild(emptyBox("찾는 표현이 없어요.", "다른 말로 찾아보세요.")); return; }
    hits.forEach(function (r) { box.appendChild(hitCard(r)); });
  }

  /* 찾기에서 표현을 눌러 들어왔을 때, 폰 뒤로가기는 찾던 자리로 돌아옵니다.
     예전에는 showView 가 쌓아 둔 자리를 버리기만 하고 새로 걸지 않아서
     뒤로가기가 앱을 통째로 닫아 버렸습니다.
     findSet 과 찾기 칸의 글자는 그대로 두므로 보던 목록이 그대로 나옵니다. */
  function backToFind() {
    if (TK.rec) { try { TK.rec.abort(); } catch (e) {} TK.rec = null; }
    try { speechSynthesis.cancel(); } catch (e) {}
    TK.busy = false;
    showStage("home");
    showView("find");
    // 묶음 안으로 돌아온 것이라면, 거기서 또 뒤로가기를 눌렀을 때
    // 앱이 닫히지 않게 '전체 묶음'으로 돌아갈 자리를 다시 깔아 둡니다.
    if (findSet) backArm(function () { findSet = null; renderFind(); });
  }

  function hitCard(r) {
    var c = el("article", "hit");
    c.innerHTML = '<div class="hit-en">' + wordHtml(r.e) + '</div>' +
      '<div class="hit-ko">' + esc(r.k) + '</div>' +
      (r.n ? '<div class="hit-note">' + esc(r.n) + '</div>' : '') +
      '<div class="hit-acts">' +
        '<button type="button" data-a="say">🔊 듣기</button>' +
        '<button type="button" data-a="slow">🐢 천천히</button>' +
        (hasTalk(r.e)
          ? '<button type="button" data-a="talk" class="talk">💬 대화' +
            (TALK[r.e].replies ? ' · 답 ' + TALK[r.e].replies.length + '가지' : '') + '</button>'
          : '') +
        '<button type="button" data-a="one" class="go">' +
          (S.seen[r.e] ? "↻ 다시" : "▶ 지금 익히기") + '</button>' +
      '</div>';
    c.addEventListener("click", function (ev) {
      var b = ev.target.closest ? ev.target.closest("button[data-a]") : null;
      if (!b) return;
      var a = b.getAttribute("data-a");
      if (a === "say") say(r.e);
      else if (a === "slow") say(r.e, true);
      else if (a === "talk") {
        TK.list = [r.e]; TK.i = 0; TK.solo = true;
        TK.okCount = 0; TK.doneCount = 0; TK.micUsed = false;
        showView("today", true); showStage("stage-talk"); drawTalk();
        backArm(backToFind);
      }
      else {
        SESSION = { list: [r.e], nextPtr: S.ptr };
        idx = 0; results = { ok: 0, no: 0, newN: 0 };
        showView("today", true); showStage("stage-card"); drawCard();
        backArm(backToFind);
      }
    });
    return c;
  }

  function emptyBox(a, b) {
    var e = el("div", "empty");
    e.innerHTML = esc(a) + "<br>" + esc(b);
    return e;
  }

  /* ==========================================================
     나
     ========================================================== */
  function renderMe() {
    var row = $("stat-row"); row.innerHTML = "";
    var hard = [];
    for (var k in S.seen) {
      if (!S.seen.hasOwnProperty(k)) continue;
      if ((S.seen[k].wrong || 0) > 0 && BY_EN[k]) hard.push({ e: k, w: S.seen[k].wrong });
    }
    hard.sort(function (a, b) { return b.w - a.w; });

    [[learnedCount(), "익힌 표현"], [streak(), "이어서 한 날"], [S.sessions, "지금까지"]]
      .forEach(function (p) {
        var s = el("div", "stat");
        s.appendChild(el("div", "sv", String(p[0])));
        s.appendChild(el("div", "sl", p[1]));
        row.appendChild(s);
      });

    var hl = $("hard-list"); hl.innerHTML = "";
    if (!hard.length) hl.appendChild(el("p", "sec-note", "아직 없어요."));
    else hard.slice(0, 40).forEach(function (x) {
      var r = BY_EN[x.e];
      var b = el("button", "hard-chip"); b.type = "button";
      b.innerHTML = '<span class="he">' + esc(r.e) + '</span><br><span class="hk">' + esc(r.k) + '</span>';
      b.onclick = function () { say(r.e); };
      hl.appendChild(b);
    });

    var st = $("set-toggles"); st.innerHTML = "";
    SETS.forEach(function (s) {
      var on = S.cfg.sets[s.id] !== false;
      var b = el("button", "set-toggle" + (on ? " on" : "")); b.type = "button";
      b.innerHTML = '<span>' + esc(s.icon) + '</span><span>' + esc(s.name) + '</span>' +
        '<span class="mark">' + (on ? "보는 중" : "꺼짐") + '</span>';
      b.onclick = function () { S.cfg.sets[s.id] = !on; save(); renderMe(); };
      st.appendChild(b);
    });

    markSeg("#cfg-per", "data-per", String(S.cfg.per));
    $("per-note").textContent = "한 번에 " + S.cfg.per + "개, 약 " +
      Math.max(3, Math.round(S.cfg.per * 0.6)) + "분 걸려요.";

    renderDeco();
    markSeg("#cfg-bgdim", "data-bgdim", String(S.cfg.bgdim || 68));

    renderLinks();

    voiceTries = 0;        // 나 탭에 들어올 때마다 다시 넉넉히 기다려 봅니다
    renderVoices();
    renderKoVoices();

    markSeg("#cfg-lmin", "data-lmin", String(S.cfg.lmin));
    markSeg("#cfg-lko", "data-lko", String(S.cfg.lko));
    markSeg("#cfg-lgap", "data-lgap", String(S.cfg.lgap));
    markSeg("#cfg-ldir", "data-ldir", S.cfg.ldir);
    markSeg("#cfg-ltalk", "data-ltalk", String(S.cfg.ltalk));
    markSeg("#cfg-lfast", "data-lfast", String(S.cfg.lfast));

    markSeg("#cfg-news", "data-news", String(S.cfg.news));
    markSeg("#cfg-nnum", "data-nnum", String(S.cfg.nnum));
    markSeg("#cfg-nlen", "data-nlen", String(S.cfg.nlen));
    markSeg("#cfg-nen", "data-nen", String(S.cfg.nen));
    markSeg("#cfg-nchain", "data-nchain", String(S.cfg.nchain));
    markSeg("#cfg-nrate", "data-nrate", String(S.cfg.nrate));
    renderNewsNote();

    $("ldir-note").textContent = S.cfg.ldir === "auto"
      ? "오후 2시 전에는 ‘영어 → 뜻’, 그 뒤에는 ‘뜻 → 영어’로 돕니다."
      : S.cfg.ldir === "en"
        ? "영어를 먼저 듣고 뜻을 확인합니다. 알아듣는 연습이에요."
        : "뜻을 먼저 듣고 영어를 말해 본 뒤 답을 듣습니다. 입이 트이는 쪽이에요.";

    $("listen-cfg-note").textContent =
      (S.listenMin ? "지금까지 " + S.listenMin + "분 들었어요. " : "") +
      "오늘 이미 들은 표현은 다음 차례에 뒤로 미룹니다.";

    renderBackup();
  }

  /* 얼마나 걸리는지 미리 셈해 둡니다. 한국어 소리는 대충 1초에 다섯 자입니다.
     차에서 2~3분이 목표라, 설정을 바꿀 때마다 바로 보이게 합니다. */
  function newsMins() {
    var perItem = 26 + S.cfg.nlen * 52;          // 제목 + 전문 글자 수
    var chars = S.cfg.nnum * perItem + (S.cfg.nen ? 90 : 0);
    var sec = Math.round(chars / 5 + S.cfg.nnum * 1.6);
    return Math.max(1, Math.round(sec / 30) / 2);   // 0.5분 단위
  }
  function renderNewsNote() {
    var c = newsCache();
    var when = "";
    if (c && c.at) {
      var m = Math.round((Date.now() - c.at) / 60000);
      when = m < 1 ? " 방금 받아 뒀어요." : m < 60
        ? (" " + m + "분 전에 받아 뒀어요.")
        : (" " + Math.round(m / 60) + "시간 전에 받아 뒀어요.");
    }
    $("news-cfg-note").textContent = S.cfg.news
      ? ("대략 " + newsMins() + "분쯤 걸려요." + when)
      : "뉴스를 끄면 첫 화면에서 단추가 사라집니다.";
  }

  /* 차에서 듣기 전에, 어떤 글이 어떻게 읽힐지 눈으로 확인하는 자리입니다. */
  function newsPreview() {
    var box = $("news-preview");
    box.innerHTML = "";
    box.appendChild(el("p", "sec-note", "받아 오는 중이에요…"));
    newsLoad(true, function (items) {
      box.innerHTML = "";
      if (!items.length) {
        box.appendChild(el("p", "sec-note", "못 가져왔어요. 인터넷을 확인해 주세요."));
        return;
      }
      items.forEach(function (it) {
        var d = el("div", "np-item");
        // 어떤 기준으로 뽑혔는지 나중에 들여다볼 수 있게 점수를 남겨 둡니다
        if (it.sc != null) d.setAttribute("data-sc", it.sc);
        d.appendChild(el("p", "np-cat", CAT_KO[it.c] + " · " + it.src));
        d.appendChild(el("p", "np-title", it.t));
        var lead = (it.c === "en")
          ? (splitSents(plain(it.d))[0] || "")
          : leadOf(it.d, S.cfg.nlen).join(" ");
        if (lead) d.appendChild(el("p", "np-lead", lead));
        else d.appendChild(el("p", "np-lead dim", "(전문이 없어 제목만 읽어요)"));
        box.appendChild(d);
      });
      renderNewsNote();
    });
  }

  /* 영어 목소리 고르기.
     하나도 없으면 고를 것이 아니라 넣는 법을 알려 줘야 합니다. */
  var VOICE_SAMPLE = "What can I get you?";

  /* 기기마다 메뉴 이름과 위치가 제각각입니다.
     특히 갤럭시는 안드로이드 기본과 달라서, 찾아 들어가는 길보다
     설정 검색이 확실합니다. */
  function howToAddVoice() {
    var ua = navigator.userAgent || "";

    if (/Android/i.test(ua)) {
      return ["설정 앱을 열고 맨 위 <b>돋보기</b>를 눌러 <b>텍스트 음성 변환</b>을 찾으세요. 메뉴를 뒤지는 것보다 빠릅니다.",
              "갤럭시는 보통 <b>설정 → 일반</b> 안에 있습니다. 없으면 <b>접근성 → 시각 보조</b>도 보세요.",
              "들어가면 <b>기본 엔진</b>을 <b>Google 음성 서비스</b>로 바꾸세요. 목록에 없으면 Play 스토어에서 먼저 받으세요.",
              "엔진 옆 <b>톱니바퀴 → 음성 데이터 설치 → English (United States)</b> 를 받으세요.",
              "받은 뒤 브라우저를 완전히 껐다 켜야 목록에 뜹니다."];
    }
    if (/iPhone|iPad|iPod/i.test(ua)) {
      return ["설정 → 손쉬운 사용 → 콘텐츠 말하기 → 음성 → English",
              "원하는 목소리 옆 내려받기 단추를 누르세요.",
              "받은 뒤 브라우저를 껐다 켜세요."];
    }
    if (/Mac OS X/i.test(ua)) {
      return ["시스템 설정 → 손쉬운 사용 → 말하기 → 시스템 음성 → 사용자화",
              "English 목소리를 골라 받으세요.",
              "받은 뒤 브라우저를 껐다 켜세요."];
    }
    return ["설정 → 시간 및 언어 → 언어 및 지역 → <b>언어 추가</b>",
            "<b>English (United States)</b> 를 고르고, 다음 화면에서 <b>음성</b> 항목까지 체크해 설치하세요.",
            "설치 뒤 브라우저를 껐다 켜야 목록에 뜹니다."];
  }

  /* 한국어 목소리 고르기. 뉴스와 ‘뜻 → 영어’ 를 이 목소리가 읽습니다.
     기기에 여러 개 깔려 있는 경우가 많은데 그동안 고를 수가 없었습니다. */
  var KO_SAMPLE = "코스피가 사흘 만에 반등했습니다.";

  /* 목소리가 하나뿐이면 고를 것이 없습니다. 대개 제조사 기본 엔진만 켜져
     있어서인데, 엔진을 구글로 바꾸면 훨씬 자연스러운 것이 생깁니다. */
  function howToAddKoVoice() {
    var ua = navigator.userAgent || "";
    if (/Android/i.test(ua)) {
      return ["설정 앱을 열고 맨 위 <b>돋보기</b>에 <b>텍스트 음성 변환</b>을 쳐서 찾으세요.",
              "<b>기본 엔진</b>을 <b>Google 음성 서비스</b>로 바꾸세요. 목록에 없으면 Play 스토어에서 ‘Google 음성 서비스’를 먼저 받으세요.",
              "엔진 옆 <b>톱니바퀴 → 음성 데이터 설치 → 한국어</b> 를 받으세요. 여러 종류가 보이면 다 받아도 됩니다.",
              "받은 뒤 <b>크롬을 완전히 껐다</b> 켜야 목록에 뜹니다. (최근 앱에서 밀어서 종료)"];
    }
    if (/iPhone|iPad|iPod/i.test(ua)) {
      return ["설정 → 손쉬운 사용 → 콘텐츠 말하기 → 음성 → 한국어",
              "<b>고품질</b> 이 붙은 목소리 옆 내려받기 단추를 누르세요.",
              "받은 뒤 브라우저를 껐다 켜세요."];
    }
    return ["윈도우는 기본으로 한국어 목소리가 하나뿐인 경우가 많습니다.",
            "폰에서 들으실 거라면 폰에서 맞추시면 됩니다."];
  }

  function renderKoVoices() {
    var box = $("kovoice-list");
    if (!box) return;
    box.innerHTML = "";

    if (!koVoices.length) {
      box.appendChild(el("p", "sec-note",
        allVoices().length
          ? "이 기기에 한국어 목소리가 없습니다. 뉴스를 읽지 못해요."
          : "아직 목소리 목록이 오지 않았어요. 위 ‘다시 찾기’를 눌러 보세요."));
      return;
    }

    koVoices.forEach(function (v) {
      var on = koVoice && v.name === koVoice.name;
      var b = el("button", "voice-item" + (on ? " on" : "")); b.type = "button";
      b.appendChild(el("span", "vi-n", v.name));
      b.appendChild(el("span", "vi-l", v.lang + (on ? " · 쓰는 중" : "")));
      b.onclick = function () {
        S.cfg.kvoice = v.name; save(); pickVoice(); renderKoVoices();
        nSay(KO_SAMPLE, "ko-KR", function () {});
      };
      box.appendChild(b);
    });
    if (koVoices.length > 1) {
      box.appendChild(el("p", "sec-note",
        "눌러서 들어 보고 마음에 드는 것으로 두세요. 대개 ‘Google’ 이 붙은 쪽이 자연스럽습니다."));
      return;
    }

    // 하나뿐이면 고를 것이 없으니, 늘리는 법을 알려 줍니다
    var one = koVoices[0], isGoogle = /google/i.test(one.name || "");
    var bad = el("div", "voice-none");
    bad.appendChild(el("p", "vn-t", isGoogle
      ? "구글 목소리를 쓰고 있어요."
      : "목소리가 이거 하나뿐이에요."));
    bad.appendChild(el("p", "vn-s", isGoogle
      ? "이 기기에서 고를 수 있는 가장 나은 쪽입니다. 그래도 어색하면 읽는 속도를 ‘천천히’로 바꿔 보세요."
      : "제조사 기본 목소리라 딱딱하게 들릴 수 있어요. 구글 목소리를 넣으면 한결 자연스러워집니다."));

    var again = el("button", "voice-retry", "다시 찾기"); again.type = "button";
    again.onclick = function () { pickVoice(); renderKoVoices(); };
    bad.appendChild(again);

    if (!isGoogle) {
      var how = el("ol", "vn-how");
      howToAddKoVoice().forEach(function (line) {
        var li = el("li");
        li.innerHTML = line;   // <b> 만 씁니다
        how.appendChild(li);
      });
      bad.appendChild(how);
    }
    box.appendChild(bad);
  }

  /* 안드로이드는 getVoices() 가 처음에 빈 배열을 돌려줍니다.
     목록은 조금 뒤에 채워지고 onvoiceschanged 로 알려 줍니다.
     한 번 물어보고 "없다"고 단정하면 멀쩡한 기기에 없다고 하게 됩니다. */
  var voiceTries = 0, voiceTimer = null;

  function allVoices() {
    if (!("speechSynthesis" in window)) return [];
    return speechSynthesis.getVoices() || [];
  }

  function renderVoices() {
    var box = $("voice-list"); box.innerHTML = "";
    if (voiceTimer) { clearTimeout(voiceTimer); voiceTimer = null; }
    pickVoice();
    var all = allVoices();

    // 아직 목록이 안 왔으면 조금 기다렸다가 다시 봅니다. (최대 약 5초)
    if (!all.length && voiceTries < 12) {
      voiceTries++;
      prime();   // 한 번 말을 시키면 목록이 채워지는 기기가 있습니다
      var wait = el("div", "voice-wait");
      wait.appendChild(el("p", "vw-t", "목소리를 찾는 중이에요…"));
      wait.appendChild(el("p", "vw-s", "기기가 목록을 넘겨줄 때까지 잠깐 걸립니다."));
      box.appendChild(wait);
      voiceTimer = setTimeout(function () {
        if (!$("view-me").hidden) renderVoices();
      }, 400);
      return;
    }

    if (!enVoices.length) {
      var bad = el("div", "voice-none");
      bad.appendChild(el("p", "vn-t", "영어 목소리가 없어요."));
      bad.appendChild(el("p", "vn-s", all.length
        ? ("이 기기에 목소리는 " + all.length + "개 있는데 영어가 하나도 없습니다. " +
           "지금은 한국어 목소리가 영어를 읽고 있어서 발음이 한국식으로 들립니다.")
        : "이 브라우저가 목소리 목록을 주지 않습니다. 크롬으로 열어 보시면 될 때가 많아요."));

      var again = el("button", "voice-retry", "다시 찾기"); again.type = "button";
      again.onclick = function () { voiceTries = 0; renderVoices(); };
      bad.appendChild(again);

      var how = el("ol", "vn-how");
      howToAddVoice().forEach(function (line) {
        var li = el("li");
        li.innerHTML = line;   // <b> 만 씁니다
        how.appendChild(li);
      });
      bad.appendChild(how);
      box.appendChild(bad);
      return;
    }

    enVoices.forEach(function (v) {
      var on = voice && v.name === voice.name;
      var b = el("button", "voice-item" + (on ? " on" : "")); b.type = "button";
      var nm = el("span", "vi-n", v.name);
      var lg = el("span", "vi-l", v.lang + (on ? " · 쓰는 중" : ""));
      b.appendChild(nm); b.appendChild(lg);
      b.onclick = function () {
        S.cfg.voice = v.name; save(); pickVoice(); renderVoices();
        say(VOICE_SAMPLE);
      };
      box.appendChild(b);
    });

    var note = el("p", "sec-note", "눌러서 들어 보세요 — “" + VOICE_SAMPLE + "”");
    box.appendChild(note);
  }

  /* 세워두고 볼 영상 — 주소만 담아 둡니다. 영상 자체는 담지 않습니다. */
  var decoPick = "";

  function renderDeco() {
    var box = $("deco-list"); box.innerHTML = "";
    DECOS.forEach(function (d) {
      var row = el("div", "deco-row");
      var ph = el("div", "deco-none", d.ico);
      row.appendChild(ph);

      var body = el("div", "deco-body");
      body.appendChild(el("p", "deco-t", d.t));
      body.appendChild(el("p", "deco-s", d.s));
      row.appendChild(body);

      var acts = el("div", "deco-acts");
      var pick = el("button", null, "고르기"); pick.type = "button";
      pick.onclick = function () { decoPick = d.k; $("deco-file").click(); };
      acts.appendChild(pick);
      row.appendChild(acts);
      box.appendChild(row);

      // 담긴 것이 있으면 미리보기와 지우기를 더합니다
      picUse(d.k, function (p) {
        if (!p) return;
        var box = el("div", "deco-thumb");
        mediaInto(box, p, "deco-media");
        row.replaceChild(box, ph);
        pick.textContent = "바꾸기";
        var del = el("button", "del", "지우기"); del.type = "button";
        del.onclick = function () {
          picDel(d.k, function () {
            renderDeco();
            if (d.k === "bg") applyBg();
            toast("지웠어요.");
          });
        };
        acts.appendChild(del);
      });
    });
  }

  var MOVE_MAX = 12 * 1024 * 1024;   // 움짤·동영상은 12MB 까지

  function decoChosen(file) {
    if (!file || !decoPick) return;
    var key = decoPick;
    var type = file.type || "";
    var moving = /^video\//.test(type) || /gif$/i.test(type);

    function done(ok) {
      if (!ok) { toast("담지 못했어요."); return; }
      renderDeco();
      if (key === "bg") applyBg();
      toast("넣었어요.");
    }

    if (moving) {
      // 움직이는 것은 줄이지 않습니다. 줄이면 첫 장면만 남습니다.
      if (file.size > MOVE_MAX) {
        toast("너무 커요. 12MB 아래로 잘라서 넣어 주세요.");
        return;
      }
      picPut(key, file, done);
      return;
    }
    shrinkImage(file, function (data) {
      if (!data) { toast("사진을 읽지 못했어요."); return; }
      picPut(key, data, done);
    });
  }

  function renderLinks() {
    var box = $("link-list"); box.innerHTML = "";
    if (!S.links.length) {
      box.appendChild(el("p", "sec-note", "아직 없어요. 공식 영상 주소를 넣어 두세요."));
      return;
    }
    S.links.forEach(function (lk, i) {
      var row = el("div", "link-row");
      var a = el("a", "link-a", lk.name || lk.url);
      a.href = lk.url; a.target = "_blank"; a.rel = "noopener";
      row.appendChild(a);
      var x = el("button", "link-x", "지우기"); x.type = "button";
      x.onclick = function () { S.links.splice(i, 1); save(); renderLinks(); };
      row.appendChild(x);
      box.appendChild(row);
    });
  }

  function addLink() {
    var url = $("lk-url").value.trim(), name = $("lk-name").value.trim();
    if (!/^https?:\/\//i.test(url)) { toast("주소는 http 로 시작해야 해요."); return; }
    S.links.push({ url: url, name: name || "영상" });
    save();
    $("lk-url").value = ""; $("lk-name").value = "";
    renderLinks();
    toast("넣었어요.");
  }

  function renderBackup() {
    var box = $("backup-state");
    if (!S.lastBackup) { box.className = "backup-state warn"; box.textContent = "아직 저장한 적이 없어요."; return; }
    var d = daysBetween(S.lastBackup, today());
    box.className = "backup-state " + (d >= 14 ? "warn" : "ok");
    box.textContent = d === 0 ? "오늘 저장했어요." : (pretty(S.lastBackup) + "에 저장 (" + d + "일 지남)");
  }

  function download(text, name) {
    try {
      var blob = new Blob([text], { type: "application/json;charset=utf-8" });
      var url = URL.createObjectURL(blob);
      var a = el("a"); a.href = url; a.download = name;
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    } catch (e) { toast("저장이 안 됐어요."); }
  }

  function backup() {
    download(JSON.stringify({ app: "eng-go", ver: 1, savedAt: new Date().toISOString(),
      learned: learnedCount(), state: S }), "영어기록_" + today() + ".json");
    S.lastBackup = today(); save(); renderBackup();
    toast("저장했어요. 이 파일을 잘 두세요.");
  }

  function restore(file) {
    if (!file) return;
    var fr = new FileReader();
    fr.onload = function () {
      var p = null;
      try { p = JSON.parse(String(fr.result)); } catch (e) {}
      if (!p || p.app !== "eng-go" || !p.state) { toast("이 앱의 기록 파일이 아니에요."); return; }
      if (!window.confirm("저장한 날: " + (p.savedAt || "").slice(0, 10) +
        "\n익힌 표현: " + (p.learned != null ? p.learned : "?") + "개\n\n지금 기록은 지워집니다. 되살릴까요?")) return;
      S = p.state; fill(); save();
      applyTheme(); showView("today");
      toast("되살렸어요.");
    };
    fr.readAsText(file);
  }

  /* ---------- 테마 ---------- */
  function applyTheme() {
    var t = S.theme || "auto";
    if (t === "auto") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", t);
  }

  /* ==========================================================
     연결
     ========================================================== */
  function bind() {
    document.addEventListener("click", prime, { once: true });
    try {
      if (navigator.storage && navigator.storage.persist) {
        document.addEventListener("click", function () { navigator.storage.persist(); }, { once: true });
      }
    } catch (e) {}

    [].slice.call(document.querySelectorAll(".tab")).forEach(function (t) {
      t.onclick = function () { showView(t.getAttribute("data-view")); };
    });
    $("btn-theme").onclick = function () {
      var o = ["auto", "light", "dark"];
      S.theme = o[(o.indexOf(S.theme || "auto") + 1) % o.length];
      applyTheme(); save();
      toast(S.theme === "auto" ? "기기 설정에 맞춤" : S.theme === "light" ? "밝게" : "어둡게");
    };
    $("level-card").onclick = function () { showView("reward"); };

    $("btn-go").onclick = start;
    $("btn-listen").onclick = function () { listenStart(false); };
    $("btn-news").onclick = function () { newsStart(!!S.cfg.nchain); };
    $("btn-ns-next").onclick = function () { newsSkip(1); };
    $("btn-ns-again").onclick = function () { newsSkip(0); };
    $("btn-ns-stop").onclick = function () { newsStop(); };
    $("btn-ns-skip").onclick = function () {
      NEWS.busy = false; newsQuiet(true); listenStart(false);
    };
    $("btn-listen-restart").onclick = function () { S.listenAt = null; save(); listenStart(true); };
    $("btn-listen-stop").onclick = function () { listenStop(); };
    $("btn-ls-prev").onclick = function () { lisSkip(-5); };
    $("btn-ls-again").onclick = function () { lisSkip(0); };
    $("btn-ls-next").onclick = function () { lisSkip(1); };
    $("btn-quit").onclick = function () { quitMission(); };
    $("btn-home").onclick = function () { showStage("home"); renderHome(); };
    $("btn-play").onclick = function () { say(cur().e); };
    $("btn-slow").onclick = function () { say(cur().e, true); };
    $("btn-reveal").onclick = reveal;
    $("btn-ok").onclick = function () { rate(true); };
    $("btn-no").onclick = function () { rate(false); };

    // 대화 속에서
    $("btn-talk-quit").onclick = function () { quitMission(); };
    $("btn-talk-next").onclick = talkNext;
    $("btn-mic").onclick = micTurn;
    $("btn-shadow").onclick = shadowTurn;
    $("btn-other-reply").onclick = otherReply;

    // 조금 빠른 말
    $("btn-fast-quit").onclick = function () { quitMission(); };
    $("btn-fast-play").onclick = function () { say(FS.list[FS.i].e); };
    $("btn-fast-slow").onclick = function () { say(FS.list[FS.i].e, true); };
    $("btn-fast-show").onclick = fastReveal;
    $("btn-fast-next").onclick = function () { FS.i++; drawFast(); };

    $("btn-add-link").onclick = addLink;
    $("btn-news-test").onclick = newsPreview;

    // 읽기
    $("btn-read-new").onclick = function () { $("read-editor").hidden = false; };
    $("rd-cancel").onclick = function () { $("read-editor").hidden = true; };
    $("rd-save").onclick = saveRead;
    $("btn-read-back").onclick = function () {
      if (backFire()) return;
      readStop(); RD.id = ""; renderRead();
    };
    $("btn-read-play").onclick = readPlay;
    $("btn-read-tr").onclick = readTranslate;
    $("btn-read-del").onclick = function () {
      var r = readById(RD.id);
      if (!r) return;
      if (!window.confirm("‘" + (r.title || "제목 없음") + "’ 을 지울까요?")) return;
      readStop();
      S.reads = S.reads.filter(function (x) { return x.id !== RD.id; });
      save(); RD.id = ""; renderRead();
      toast("지웠어요.");
    };

    $("deco-file").onchange = function () { decoChosen(this.files && this.files[0]); this.value = ""; };
    [].slice.call(document.querySelectorAll("#cfg-bgdim button")).forEach(function (b) {
      b.onclick = function () {
        S.cfg.bgdim = +b.getAttribute("data-bgdim");
        save(); applyBg(); renderMe();
      };
    });

    var qt = null;
    $("q").oninput = function () {
      if (qt) clearTimeout(qt);
      qt = setTimeout(function () { findSet = null; renderFind(); }, 150);
    };
    $("q-clear").onclick = function () { $("q").value = ""; findSet = null; renderFind(); };

    $("btn-add-reward").onclick = openEditor;
    $("rw-cancel").onclick = function () { $("editor").hidden = true; };
    $("rw-save").onclick = saveReward;
    [].slice.call(document.querySelectorAll("#rw-cond button")).forEach(function (b) {
      b.onclick = function () { draft.type = b.getAttribute("data-cond"); markSeg("#rw-cond", "data-cond", draft.type); unitText(); };
    });
    [].slice.call(document.querySelectorAll("#rw-kind button")).forEach(function (b) {
      b.onclick = function () { draft.kind = b.getAttribute("data-kind"); markSeg("#rw-kind", "data-kind", draft.kind); kindBlocks(); };
    });
    $("rw-file").onchange = function () {
      var f = this.files && this.files[0];
      if (!f) return;
      shrinkImage(f, function (d) {
        if (!d) { toast("사진을 읽지 못했어요."); return; }
        draft.data = d;
        var p = $("rw-preview"); p.src = d; p.hidden = false;
      });
      this.value = "";
    };
    $("unlock-ok").onclick = function () { queue.shift(); showUnlock(); };

    $("btn-export-reward").onclick = exportRewards;
    $("file-reward").onchange = function () { importRewards(this.files && this.files[0]); this.value = ""; };

    [].slice.call(document.querySelectorAll("#cfg-per button")).forEach(function (b) {
      b.onclick = function () {
        S.cfg.per = +b.getAttribute("data-per");
        S.cfg.newPer = Math.max(3, Math.round(S.cfg.per / 3));
        save(); renderMe();
      };
    });

    [["#cfg-lmin", "data-lmin", "lmin"], ["#cfg-lko", "data-lko", "lko"],
     ["#cfg-lgap", "data-lgap", "lgap"], ["#cfg-ltalk", "data-ltalk", "ltalk"],
     ["#cfg-lfast", "data-lfast", "lfast"], ["#cfg-news", "data-news", "news"],
     ["#cfg-nnum", "data-nnum", "nnum"], ["#cfg-nlen", "data-nlen", "nlen"],
     ["#cfg-nen", "data-nen", "nen"], ["#cfg-nchain", "data-nchain", "nchain"],
     ["#cfg-nrate", "data-nrate", "nrate"]]
      .forEach(function (p) {
        [].slice.call(document.querySelectorAll(p[0] + " button")).forEach(function (b) {
          b.onclick = function () {
            S.cfg[p[2]] = +b.getAttribute(p[1]);
            save(); renderMe();
          };
        });
      });

    [].slice.call(document.querySelectorAll("#cfg-ldir button")).forEach(function (b) {
      b.onclick = function () {
        S.cfg.ldir = b.getAttribute("data-ldir");
        save(); renderMe();
      };
    });

    // 화면이 잠기거나 다른 앱으로 갔다 오면 말이 끊깁니다. 그 표현부터 다시 들려줍니다.
    document.addEventListener("visibilitychange", function () {
      if (!LIS.on) return;
      if (document.visibilityState === "hidden") {
        LIS.gen++;
        try { speechSynthesis.cancel(); } catch (e) {}
      } else {
        keepOn();
        if (!LIS.wake) wakeOn();
        // 같은 표현을 두 번 넘게 되풀이하지 않습니다. 운전 중엔 되풀이보다 넘어가는 게 낫습니다.
        LIS.tries = (LIS.tries || 0) + 1;
        if (LIS.tries > 1) { LIS.i++; LIS.tries = 0; LIS.spoken++; }
        lisJump();
      }
    });

    $("btn-backup").onclick = backup;
    $("file-restore").onchange = function () { restore(this.files && this.files[0]); this.value = ""; };
    $("btn-reset").onclick = function () {
      if (!window.confirm("기록과 보상이 모두 지워집니다. 정말 처음부터 할까요?")) return;
      S = fresh(); save(); applyTheme(); showView("today");
      toast("처음으로 되돌렸어요.");
    };
  }

  /* ---------- 시작 ---------- */
  load();
  applyTheme();
  applyBg();
  bind();
  showView("today");
  checkRewards();

})();
