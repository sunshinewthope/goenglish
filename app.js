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
             heard: {}, heardDay: {}, listenXp: 0, listenMin: 0, links: [], fastPtr: 0,
             cfg: { per: 15, newPer: 5, sets: sets, lmin: 10, lko: 1, lgap: 1, ldir: "auto" },
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
    if (typeof S.fastPtr !== "number") S.fastPtr = 0;
    if ([10, 15, 20].indexOf(S.cfg.lmin) < 0) S.cfg.lmin = 10;
    if (S.cfg.lko !== 0 && S.cfg.lko !== 1) S.cfg.lko = 1;
    if ([0, 1, 2].indexOf(S.cfg.lgap) < 0) S.cfg.lgap = 1;
    if (["auto", "en", "ko"].indexOf(S.cfg.ldir) < 0) S.cfg.ldir = "auto";
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
  var voice = null, koVoice = null, enVoices = [], primed = false;

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

  function pickVoice() {
    if (!("speechSynthesis" in window)) return;
    var vs = speechSynthesis.getVoices() || [], i;
    koVoice = null; enVoices = [];
    for (i = 0; i < vs.length; i++) {
      var l = vs[i].lang || "";
      if (/^ko/i.test(l)) { if (!koVoice) koVoice = vs[i]; }
      else if (/^en/i.test(l)) enVoices.push(vs[i]);
    }
    enVoices.sort(function (a, b) { return voiceRank(b) - voiceRank(a); });

    voice = null;
    if (S && S.cfg && S.cfg.voice) {
      for (i = 0; i < enVoices.length; i++) {
        if (enVoices[i].name === S.cfg.voice) { voice = enVoices[i]; break; }
      }
    }
    if (!voice) voice = enVoices[0] || null;
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
    if (TK.i >= TK.list.length) { fastStart(); return; }
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
    b.appendChild(el("p", "tk-e", ln.e));
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
      $("tk-en").textContent = ln.e;
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
    $("fast-en").textContent = f.e;
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
     듣기만 하기 — 운전 중에 쓰는 모드
     화면을 보지도 만지지도 못한다는 전제로 만들었습니다.
     그래서 채점하지 않고, 듣고 따라 말하는 것만 합니다.
     ========================================================== */
  var LIS = { on: false, gen: 0, list: [], i: 0, spoken: 0,
              endAt: 0, tick: null, tm: null, wake: null, ko: false };

  function heardToday(e) { return S.heardDay && S.heardDay[e] === today(); }

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
    // 새 표현은 배운 순서대로, 한 번에 너무 많이 쏟아지지 않게 끊습니다.
    return shuffle(hard).concat(shuffle(due), neu.slice(0, 20), shuffle(rest), shuffle(later));
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
    var row = BY_EN[LIS.list[LIS.i]];
    if (!row) { LIS.i++; lisPhrase(); return; }

    $("ls-set").textContent = row.sicon + " " + row.sname;
    $("ls-en").textContent = row.e;
    $("ls-ko").textContent = "";
    $("ls-cue").textContent = "";
    $("ls-count").textContent = (LIS.spoken + 1) + "번째";

    var g2 = S.cfg.lgap, mul = (g2 === 2 ? 1.8 : 1.1);
    var gapMs = Math.round(Math.max(1400, row.e.length * 70) * mul);
    var seq;

    if (LIS.dir === "ko") {
      /* 뜻 → 영어. 한국어를 듣고 영어가 입에서 나오게 하는 연습입니다.
         답을 미리 보지 않도록 영어는 말할 때 화면에 냅니다. */
      $("ls-en").textContent = "";
      $("ls-ko").textContent = row.k;
      seq = [{ ko: row.k, wait: 400 }];
      seq.push({ cue: "영어로 말해 보세요",
                 wait: g2 ? Math.round(gapMs * 1.25) : 900 });
      seq.push({ cue: "", showEn: row.e, en: row.e, wait: 500 });
      seq.push({ en: row.e, echo: true, wait: 800 });
    } else {
      /* 영어 → 뜻. 알아듣는 연습입니다. */
      seq = [{ en: row.e, wait: 450 }];
      if (LIS.ko) seq.push({ ko: row.k, show: row.k, wait: 350 });
      else seq.push({ show: row.k, wait: 250 });
      if (g2) seq.push({ cue: "따라 말해 보세요", wait: gapMs });
      seq.push({ cue: "", en: row.e, echo: true, wait: 900 });
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

  /* 듣는 중에 앞뒤로 옮기기. d 가 0 이면 지금 것을 다시. */
  function lisSkip(d) {
    if (!LIS.on) return;
    if (LIS.guard) { clearTimeout(LIS.guard); LIS.guard = null; }
    LIS.i += d;
    if (LIS.i < 0) LIS.i = LIS.list.length - 1;
    if (LIS.i >= LIS.list.length) LIS.i = 0;
    LIS.spoken = Math.max(0, LIS.spoken + d);
    LIS.tries = 0;
    $("ls-cue").textContent = d < 0 ? "앞으로" : d > 0 ? "뒤로" : "다시";
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

  function listenStart(fromStart) {
    if (!("speechSynthesis" in window)) { toast("이 기기는 소리 읽기를 못 해요."); return; }

    var spot = fromStart ? null : savedSpot();
    var list = spot ? spot.list : buildListen();
    var startAt = spot ? spot.i : 0;
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
      ? { list: LIS.list, i: LIS.i, day: today() }
      : null;
    save();

    if (quiet) { showStage("home"); renderHome(); checkRewards(); return; }

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
    $("ls-warn").textContent = ok
      ? "화면을 켜 둡니다. 거치대에 두세요."
      : "이 화면은 저절로 꺼질 수 있어요. 폰 설정에서 ‘화면 자동 꺼짐’을 길게 해 두세요.";
    $("ls-warn").className = "ls-warn" + (ok ? "" : " bad");
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
     화면
     ========================================================== */
  var VIEWS = ["today", "find", "reward", "me"];
  var STAGES = ["home", "stage-card", "stage-talk", "stage-fast", "stage-listen", "stage-done"];

  function showView(n) {
    if (LIS.on) listenStop(true);   // 다른 곳으로 가면 듣기는 멈춥니다
    VIEWS.forEach(function (v) { $("view-" + v).hidden = (v !== n); });
    [].slice.call(document.querySelectorAll(".tab")).forEach(function (t) {
      t.classList.toggle("on", t.getAttribute("data-view") === n);
    });
    if (n === "today") renderHome();
    if (n === "find") renderFind();
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

    var ul = $("plan"); ul.innerHTML = "";
    [["🆕", "새 표현", newN, "처음 보는 말"],
     ["🔁", "복습", revN, "다시 볼 때가 된 말"],
     ["💬", "대화 속에서", talkN, "주고받아 보고, 직접 말해 보기"],
     ["🎤", "조금 빠른 말", fastN, "인터뷰에서 나오는 속도"]]
      .forEach(function (p) {
        if (!p[2]) return;
        var li = el("li");
        li.appendChild(el("span", "pi", p[0]));
        var d = el("div");
        d.appendChild(el("div", "pt", p[1]));
        d.appendChild(el("div", "ps", p[3]));
        li.appendChild(d);
        li.appendChild(el("span", "pn", p[2] + "개"));
        ul.appendChild(li);
      });

    $("btn-go").textContent = s.list.length ? ("시작하기 (" + s.list.length + "개)") : "오늘 볼 것을 다 봤어요";
    $("btn-go").disabled = !s.list.length;
    $("go-note").textContent = s.list.length ? "약 " + Math.max(3, Math.round(s.list.length * 0.6)) + "분" : "‘찾기’에서 골라 볼 수 있어요";

    var hd = heardTodayCount();
    var dirNow = S.cfg.ldir === "auto" ? (hour < 14 ? "en" : "ko") : S.cfg.ldir;
    var dirTxt = dirNow === "ko" ? "뜻 → 영어" : "영어 → 뜻";
    var spot = savedSpot();
    $("listen-note").textContent = spot
      ? ("이어서 " + (spot.i + 1) + "번째부터 · " + dirTxt)
      : ("운전할 때 · " + dirTxt +
         (hd ? " — 오늘 들은 " + hd + "개는 뒤로" : " — " + S.cfg.lmin + "분, 손 안 대도 됩니다"));
    $("btn-listen-restart").hidden = !spot;

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
    TK.list = buildTalk(s.list); TK.okCount = 0; TK.doneCount = 0; TK.micUsed = false;
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
    $("card-en").textContent = row.e;
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
    if (ok) results.ok++; else results.no++;
    save();
    idx++;
    drawCard();
  }

  /* 어느 단계에서든 그만둘 때 — 말하던 것, 듣던 것을 모두 멈춥니다 */
  function quitMission() {
    if (TK.rec) { try { TK.rec.abort(); } catch (e) {} TK.rec = null; }
    try { speechSynthesis.cancel(); } catch (e) {}
    TK.busy = false;
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
        b.onclick = function () { findSet = s.id; renderFind(); };
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
      back.onclick = function () { findSet = null; renderFind(); };
      box.appendChild(back);
      var h = el("h2", "sec-title", s2.icon + " " + s2.name);
      box.appendChild(h);
      if (s2.note) box.appendChild(el("p", "sec-note", s2.note));
      hits = DECK.filter(function (r) { return r.sid === findSet; });
    }

    if (!hits.length) { box.appendChild(emptyBox("찾는 표현이 없어요.", "다른 말로 찾아보세요.")); return; }
    hits.forEach(function (r) { box.appendChild(hitCard(r)); });
  }

  function hitCard(r) {
    var c = el("article", "hit");
    c.innerHTML = '<div class="hit-en">' + esc(r.e) + '</div>' +
      '<div class="hit-ko">' + esc(r.k) + '</div>' +
      (r.n ? '<div class="hit-note">' + esc(r.n) + '</div>' : '') +
      '<div class="hit-acts">' +
        '<button type="button" data-a="say">🔊 듣기</button>' +
        '<button type="button" data-a="slow">🐢 천천히</button>' +
        '<button type="button" data-a="one" class="go">' +
          (S.seen[r.e] ? "↻ 다시" : "▶ 지금 익히기") + '</button>' +
      '</div>';
    c.addEventListener("click", function (ev) {
      var b = ev.target.closest ? ev.target.closest("button[data-a]") : null;
      if (!b) return;
      var a = b.getAttribute("data-a");
      if (a === "say") say(r.e);
      else if (a === "slow") say(r.e, true);
      else {
        SESSION = { list: [r.e], nextPtr: S.ptr };
        idx = 0; results = { ok: 0, no: 0, newN: 0 };
        showView("today"); showStage("stage-card"); drawCard();
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

    renderLinks();

    voiceTries = 0;        // 나 탭에 들어올 때마다 다시 넉넉히 기다려 봅니다
    renderVoices();

    markSeg("#cfg-lmin", "data-lmin", String(S.cfg.lmin));
    markSeg("#cfg-lko", "data-lko", String(S.cfg.lko));
    markSeg("#cfg-lgap", "data-lgap", String(S.cfg.lgap));
    markSeg("#cfg-ldir", "data-ldir", S.cfg.ldir);

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
    $("btn-listen-restart").onclick = function () { S.listenAt = null; save(); listenStart(true); };
    $("btn-listen-stop").onclick = function () { listenStop(); };
    $("btn-ls-prev").onclick = function () { lisSkip(-1); };
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

    [["#cfg-lmin", "data-lmin", "lmin"], ["#cfg-lko", "data-lko", "lko"], ["#cfg-lgap", "data-lgap", "lgap"]]
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
  bind();
  showView("today");
  checkRewards();

})();
