/* ============================================================
   App code(通常は編集不要)。表示内容は src/data.ts の SITE / PAGES で定義する。
     1. utils            2. templates        3. pages
     4. lightbox         5. page navigation(keyboard / swipe)
     6. quiz             6b. theme           7. backgrounds(section / page / preload)
     8. router           9. cursor dot
   ============================================================ */
import { PAGES, SITE } from "./data";
import type { BgConfig, Img, Interest, LinkItem, Music, PageBg, PeripheralEntry, Quiz, ViewKey, Work } from "./types";

/* ---------- 1. utils ---------- */
/** 必ずある要素を取る($)。無いかもしれない要素は qs を使う */
const $ = <T extends HTMLElement = HTMLElement>(s: string): T => document.querySelector<T>(s)!;
const qs = <T extends HTMLElement = HTMLElement>(s: string): T | null => document.querySelector<T>(s);
const ESC: Record<string, string> = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"};
const esc = (t: unknown): string => String(t ?? "").replace(/[&<>"]/g, c => ESC[c]);
const clamp01 = (n: unknown): number => Math.min(1, Math.max(0, +(n as number)));
const shortUrl = (u: string): string => String(u).replace(/^https?:\/\//, "");
const idle = (fn: () => void): void => { if (window.requestIdleCallback) window.requestIdleCallback(fn); else setTimeout(fn, 200); };
const prefersReducedMotion = (): boolean => matchMedia("(prefers-reduced-motion:reduce)").matches;
const paras = (list?: string | string[]): string => ([] as string[]).concat(list ?? []).map(p => `<p>${esc(p)}</p>`).join("");
const body = document.body;

/* ---------- 2. templates ---------- */
const head = (t: string): string => `<h1>${t}</h1>`;
const link = (url: string | undefined, text: string): string => url ? `<a href="${esc(url)}" target="_blank" rel="noopener">${text}</a>` : text;

const workCard = (w: Work): string => {
  const tag = w.url ? "a" : "div";
  const attrs = w.url ? ` href="${esc(w.url)}" target="_blank" rel="noopener"` : "";
  const tags = (w.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join("");
  return `<${tag} class="card"${attrs} data-k="w:${esc(w.title)}"><span class="sub">${esc(w.date)} / <span class="status">${esc(w.status)}</span></span><h3>${esc(w.title)}</h3><p>${esc(w.description)}</p>${tags}</${tag}>`;
};

/* 角丸の正方形サムネ列。クリックで拡大(data-* を lightbox が読む) */
const pics = (list?: Img[]): string => {
  const imgs = (list || []).filter(x => x && x.src);
  if (!imgs.length) return "";
  const items = imgs.map(x => `<button type="button" class="pic" data-src="${esc(x.full || x.src)}" data-cap="${esc(x.caption ?? x.alt)}" aria-label="${esc(x.alt || "画像")}を拡大"><img src="${esc(x.src)}" alt="${esc(x.alt)}" loading="lazy"></button>`);
  return `<div class="pics">${items.join("")}</div>`;
};

/* Links のサービスロゴ。未設定なら頭文字の仮アイコン */
const logo = (l: LinkItem): string => l.logo
  ? `<i class="ico"><img src="${esc(l.logo)}" alt="" loading="lazy"></i>`
  : `<i class="ico ph" aria-hidden="true">${esc([...String(l.label || "?")][0].toUpperCase())}</i>`;

/* Spotify の通常URL → 埋め込みURL。Spotify 以外は "" */
const spEmbed = (u: string): string => {
  try {
    const x = new URL(u);
    if (x.hostname !== "open.spotify.com") return "";
    let p = x.pathname.replace(/^\/intl-[a-zA-Z-]+/, "");
    if (!p.startsWith("/embed/")) p = "/embed" + p;
    return "https://open.spotify.com" + p + "?utm_source=generator";
  } catch (e) { return ""; }
};
const musicItem = (m: Music): string => {
  const src = spEmbed(m.url), title = esc(m.title || "Spotify");
  return src
    ? `<iframe class="sp" src="${esc(src)}" height="${+(m.height ?? 0) || 352}" title="${title}" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`
    : `<div class="sp-empty"><b>${title}</b><span class="sub">Spotify URL 未設定</span></div>`;
};
const musicSection = (): string =>
  `<section class="blk"><h2 class="sec">My Favorite Musics</h2><div class="music">${(SITE.music || []).map(musicItem).join("")}</div></section>`;

const quizCard = (): string => {
  const Q: Partial<Quiz> = SITE.quiz ?? {};
  const choices = Q.choices ?? [];
  if (!choices.length) return "";
  const buttons = choices.map(c => `<button type="button" class="qbtn" data-q="${esc(c)}">${esc(c)}</button>`).join("");
  return `<div class="card quiz" id="quiz"><h3>${esc(Q.title || "Quiz")}</h3><p>${esc(Q.question)}</p><div class="qopts">${buttons}</div><div class="qmsg" id="qmsg" aria-live="polite"></div></div>`;
};

const interestRow = (i: Interest): string =>
  `<div class="irow" data-k="i:${esc(i.label)}"><div class="itxt"><b>${link(i.url, esc(i.label))}</b><div class="sub">${esc(i.note)}</div></div>${pics(i.images)}</div>`;

const linkRow = (l: LinkItem): string => l.url
  ? `<a class="row" href="${esc(l.url)}" target="_blank" rel="noopener"><span class="lk">${logo(l)}${esc(l.label)}</span><span>${esc(l.handle)}</span></a>`
  : `<div class="row"><span class="lk">${logo(l)}${esc(l.label)}</span><span class="sub">${esc(l.handle)}</span></div>`;

const peripheralEntry = (e: PeripheralEntry): string =>
  `<section class="blk"><h2 class="sec">${esc(e.title)}</h2><div class="irow"><div class="itxt prose">${paras(e.body)}</div>${pics(e.images)}</div></section>`;

/* ---------- 3. pages ---------- */
const VIEWS: Record<ViewKey, () => string> = {
  home: () => {
    const S = SITE, featured = S.works.filter(w => w.featured);
    return `<div class="home stagger"><div class="avatar-wrap" style="--i:0"><div class="avatar">${S.avatarImage ? `<img src="${esc(S.avatarImage)}" alt="">` : esc(S.initial)}</div><div class="bubble" aria-hidden="true"></div></div>
 <h1 class="name" style="--i:1">${esc(S.name)}</h1><div class="phon sub" style="--i:2">${esc(S.phonetic)}</div><p class="intro" style="--i:3">${esc(S.tagline)}</p></div>
 <section class="blk"><h2 class="sec">Selected Works<a class="sub" href="#/works">all works</a></h2><div class="grid">${featured.map(workCard).join("")}</div></section>
 <section class="blk"><h2 class="sec">Discovery</h2><div class="grid">
 <a class="card" href="#/peripheral"><h3>Peripheral</h3><p>${esc(S.peripheral?.blurb || "")}</p></a>
 ${quizCard()}
 <div class="card"><h3>Random</h3><p>サイト内から1つ紹介します。</p><button class="rand" id="rand">Show one</button><div id="disc" aria-live="polite"></div></div></div></section>
 ${musicSection()}`;
  },

  about: () => {
    const a = SITE.about;
    return `<div class="page">${head("About")}<div class="prose">${paras(a.body)}</div>
 <section class="blk"><h2 class="sec">Currently</h2><div class="prose">${paras(a.now)}</div></section>
 <section class="blk"><h2 class="sec">Archive</h2><ul class="tl">${a.timeline.map(t => `<li><span class="sub">${esc(t.date)}</span><span>${esc(t.text)}</span></li>`).join("")}</ul></section></div>`;
  },

  works: () => {
    const tags = [...new Set(SITE.works.flatMap(w => w.tags || []))];
    const filters = tags.map(t => `<button aria-pressed="false" data-t="${esc(t)}">${esc(t)}</button>`).join("");
    return `<div class="page">${head("Works")}<div class="filters" id="flt"><button aria-pressed="true" data-t="">All</button>${filters}</div><div class="grid" id="wg">${SITE.works.map(workCard).join("")}</div></div>`;
  },

  interests: () => {
    const sections = SITE.interests.map(c =>
      `<section class="blk tight"><h2 class="sec">${esc(c.category)}</h2><div class="rows">${c.items.map(interestRow).join("")}</div></section>`);
    return `<div class="page">${head("Interests")}${sections.join("")}</div>`;
  },

  links: () =>
    `<div class="page">${head("Links")}<div class="rows">${SITE.links.map(linkRow).join("")}</div></div>`,

  peripheral: () => {
    const E = SITE.peripheral?.entries ?? [];
    const content = E.length ? E.map(peripheralEntry).join("") : `<div class="prose"><p class="sub">まだ何も置いていません。</p></div>`;
    return `<div class="page">${head("Peripheral")}${content}</div>`;
  }
};

/* ---------- 4. lightbox ---------- */
const lb = $("#lb"), lbImg = $<HTMLImageElement>("#lbimg"), lbCap = $("#lbcap");
let lbList: HTMLElement[] = [], lbIdx = 0, lbFrom: HTMLElement | null = null;

function lbShow(i: number): void {
  lbIdx = (i + lbList.length) % lbList.length;
  const b = lbList[lbIdx];
  lbImg.src = b.dataset.src ?? "";
  lbCap.textContent = b.dataset.cap || "";
  lb.classList.toggle("single", lbList.length < 2);
}
function lbOpen(b: HTMLElement): void {
  lbList = [...b.closest(".pics")!.querySelectorAll<HTMLElement>(".pic")];
  lbFrom = b;
  lb.hidden = false;
  lbShow(lbList.indexOf(b));
  $("#lbclose").focus();
}
function lbClose(): void {
  lb.hidden = true;
  lbImg.removeAttribute("src");
  if (lbFrom) lbFrom.focus({preventScroll: true});
}
/* クリックの振り分け(サムネ → 拡大 / 拡大中のボタン・背景 / クイズ) */
document.addEventListener("click", e => {
  const t = e.target as Element;
  const pic = t.closest<HTMLElement>(".pic");
  if (pic && pic.dataset.src) return lbOpen(pic);
  if (!lb.hidden) {
    if (t.closest("#lbprev")) lbShow(lbIdx - 1);
    else if (t.closest("#lbnext")) lbShow(lbIdx + 1);
    else if (t === lb || t.closest("#lbclose")) lbClose();
    return;
  }
  const qbtn = t.closest<HTMLButtonElement>(".qbtn");
  if (qbtn) quizAnswer(qbtn);
});

/* ---------- 5. page navigation ---------- */
/* 前(-1)/次(+1)のページへ。行き先は表示ではなく現在のURLから計算するので、切り替え中の連打でも順に進む */
const goStep = (d: number): void => {
  const ci = PAGES.findIndex(p => p[0] === pageKey());
  if (ci < 0) { if (d < 0) location.hash = "#/home"; return; } /* 一周の外(Peripheral)は Home へ戻るだけ */
  location.hash = "#/" + PAGES[(ci + d + PAGES.length) % PAGES.length][0];
};

/* keyboard: 拡大中は画像送り / それ以外は ←→ で前後のページ(入力欄・修飾キー併用時は無効) */
document.addEventListener("keydown", e => {
  if (!lb.hidden) {
    if (e.key === "Escape") lbClose();
    if (e.key === "ArrowLeft") lbShow(lbIdx - 1);
    if (e.key === "ArrowRight") lbShow(lbIdx + 1);
    return;
  }
  if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
  if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
  const t = e.target as HTMLElement | null;
  if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
  goStep(e.key === "ArrowLeft" ? -1 : 1);
});

/* swipe(スマホ): 左へ払う=次 / 右へ払う=前。
   画像スライダー・拡大表示中・ピンチ拡大中・画面の両端(OSの戻る操作)・文字選択中は無効 */
(() => {
  const SWIPE = {minDx: 70, maxMs: 700, ratio: 1.8, edge: 24};
  const IGNORE = ".pics,iframe,input,textarea,select,[contenteditable]";
  let x0 = 0, y0 = 0, t0 = 0, ok = false;
  addEventListener("touchstart", e => {
    const t = e.touches[0], vv = window.visualViewport;
    ok = e.touches.length === 1 && lb.hidden
      && !(vv && vv.scale > 1.01)
      && t.clientX > SWIPE.edge && t.clientX < innerWidth - SWIPE.edge
      && !(e.target as Element).closest(IGNORE);
    x0 = t.clientX; y0 = t.clientY; t0 = Date.now();
  }, {passive: true});
  addEventListener("touchend", e => {
    if (!ok) return;
    ok = false;
    const t = e.changedTouches[0], dx = t.clientX - x0, dy = t.clientY - y0;
    if (Date.now() - t0 > SWIPE.maxMs || Math.abs(dx) < SWIPE.minDx || Math.abs(dx) < Math.abs(dy) * SWIPE.ratio || String(getSelection())) return;
    goStep(dx < 0 ? 1 : -1);
  }, {passive: true});
  addEventListener("touchcancel", () => { ok = false; }, {passive: true});
})();

/* ---------- 6. quiz ---------- */
function confetti(x: number, y: number): void {
  if (prefersReducedMotion()) return;
  const cv = document.createElement("canvas"), dpr = devicePixelRatio || 1, W = innerWidth, H = innerHeight;
  const g = cv.getContext("2d");
  if (!g) return;
  cv.width = W * dpr; cv.height = H * dpr;
  cv.style.cssText = "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:60";
  document.body.append(cv);
  g.scale(dpr, dpr);
  const ink = getComputedStyle(document.documentElement).getPropertyValue("--color-ink").trim();
  const colors = ["#A64F38", ink, "#E3A857", "#7C9A7E", "#C98B9B", "#6F8FB5"];
  const pieces = Array.from({length: 110}, () => {
    const a = -Math.PI / 2 + (Math.random() - .5) * Math.PI * 1.1, v = 5 + Math.random() * 9;
    return {x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, w: 5 + Math.random() * 5, h: 3 + Math.random() * 4,
            r: Math.random() * 6.28, vr: (Math.random() - .5) * .4, c: colors[Math.floor(Math.random() * colors.length)], round: Math.random() < .3};
  });
  let frame = 0;
  (function tick() {
    g.clearRect(0, 0, W, H);
    frame++;
    pieces.forEach(p => {
      p.vy += .28; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.r += p.vr;
      g.save();
      g.globalAlpha = Math.max(0, 1 - frame / 120);
      g.translate(p.x, p.y); g.rotate(p.r); g.fillStyle = p.c;
      if (p.round) { g.beginPath(); g.arc(0, 0, p.w / 2, 0, 6.28); g.fill(); }
      else g.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      g.restore();
    });
    if (frame < 120) requestAnimationFrame(tick); else cv.remove();
  })();
}
function quizAnswer(b: HTMLButtonElement): void {
  const Q: Partial<Quiz> = SITE.quiz ?? {}, card = b.closest<HTMLElement>(".quiz")!, msg = card.querySelector("#qmsg")!;
  if (b.dataset.q !== Q.answer) {
    b.disabled = true;
    b.classList.add("ng", "shake");
    msg.textContent = Q.wrong || "ちがうよ～";
    return;
  }
  card.querySelectorAll<HTMLButtonElement>(".qbtn").forEach(x => { x.classList.remove("shake"); if (x !== b) x.disabled = true; });
  b.classList.add("ok");
  card.classList.remove("win"); void card.offsetWidth; card.classList.add("win"); /* アニメーションを再生し直す */
  msg.textContent = (Q.right || "正解！") + (Q.explain ? " " + Q.explain : "");
  const r = b.getBoundingClientRect();
  confetti(r.left + r.width / 2, r.top + r.height / 2);
}

/* ---------- 6b. theme(ライト/ダーク) ---------- */
/* 最初はブラウザの設定どおり。ボタンで切り替えると選択が保存され、次回以降もそれを使う */
const root = document.documentElement;
const darkMq = matchMedia("(prefers-color-scheme:dark)");
const isDark = (): boolean => root.dataset.theme ? root.dataset.theme === "dark" : darkMq.matches;
function syncTheme(): void {
  const dark = isDark();
  $("#theme").setAttribute("aria-checked", String(dark));
  document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]').forEach(m => { m.content = dark ? "#171614" : "#F4F0E8"; m.removeAttribute("media"); });
}
function setTheme(t: "light" | "dark"): void {
  const apply = () => { root.dataset.theme = t; try { localStorage.setItem("theme", t); } catch (e) {} syncTheme(); };
  if (!document.startViewTransition || prefersReducedMotion()) return apply();
  root.dataset.dir = "theme";
  const tr = document.startViewTransition(apply);
  tr.ready.catch(() => {});
  tr.finished.catch(() => {}).then(() => { delete root.dataset.dir; });
}
$("#theme").addEventListener("click", () => setTheme(isDark() ? "light" : "dark"));
darkMq.addEventListener("change", syncTheme);
syncTheme();

/* ---------- 7. backgrounds ---------- */
document.documentElement.style.setProperty("--card-alpha", String(clamp01(SITE.cardOpacity ?? 1)));

/* section: セクション見出しをキーにして sectionBg の画像を敷く */
function applySectionBgs(scope: HTMLElement): void {
  scope.querySelectorAll("section.blk").forEach(sec => {
    const h = sec.querySelector("h2.sec"), title = h && h.firstChild ? (h.firstChild.textContent ?? "").trim() : "";
    const c = (SITE.sectionBg ?? {})[title];
    if (!c || !c.src) return;
    sec.classList.add("hasbg");
    const d = document.createElement("div");
    d.className = "secbg";
    d.setAttribute("aria-hidden", "true");
    d.style.backgroundImage = `url("${String(c.src).replace(/"/g, "%22")}")`;
    d.style.opacity = String(clamp01(c.opacity ?? SITE.sectionBgOpacity ?? .15));
    sec.prepend(d);
    if (c.url) {
      const a = document.createElement("a");
      a.className = "bgurl"; a.href = c.url; a.target = "_blank"; a.rel = "noopener";
      a.textContent = shortUrl(c.url); a.title = c.url;
      sec.append(a);
    }
  });
}

/* page: ページ別・PC/スマホ別。slide=true ならスクロール量に合わせて画像をスライド */
const bgEl = $("#bg"), bgCredit = $<HTMLAnchorElement>("#bgcredit"), bgMq = matchMedia("(max-width:40rem)");
let bgKey: ViewKey = "home", bgSlide = false;

function bgPos(): void {
  const max = document.documentElement.scrollHeight - innerHeight;
  const p = bgSlide && max > 0 ? clamp01(scrollY / max) : 0;
  bgEl.style.backgroundSize = bgSlide ? "100% auto" : "cover";
  bgEl.style.backgroundPosition = bgSlide ? `50% ${p * 100}%` : "50% 50%";
}
function setBg(key: ViewKey): void {
  bgKey = key;
  const B: BgConfig = SITE.bg ?? {}, c: PageBg = B[key] ?? {}, sl = B.slide ?? {}, mobile = bgMq.matches;
  const img = mobile ? c.mobile : c.pc;
  bgSlide = mobile ? !!sl.mobile : sl.pc !== false;
  bgEl.style.backgroundImage = img ? `url(${JSON.stringify(img)})` : "none";
  bgEl.style.opacity = String(c.opacity ?? B.opacity ?? .15);
  bgPos();
  if (img && c.url) { bgCredit.href = c.url; bgCredit.textContent = shortUrl(c.url); bgCredit.hidden = false; }
  else bgCredit.hidden = true;
}
let bgTick = 0;
const bgRequest = (): void => { if (!bgTick) bgTick = requestAnimationFrame(() => { bgTick = 0; bgPos(); }); };
addEventListener("scroll", bgRequest, {passive: true});
addEventListener("resize", bgRequest);
new ResizeObserver(bgRequest).observe(body);

/* preload: 他ページの背景も先に読み込み・デコードして、移動時の読み込み待ちをなくす */
const bgCache = new Map<string, HTMLImageElement>();
function bgPreload(): void {
  const B: BgConfig = SITE.bg ?? {}, side = bgMq.matches ? "mobile" : "pc";
  const keys: ViewKey[] = [bgKey, ...PAGES.map(p => p[0]), "peripheral"];
  const urls = keys.map(k => B[k]?.[side]).filter((u): u is string => !!u);
  Object.values(SITE.sectionBg ?? {}).forEach(c => { if (c && c.src) urls.push(c.src); });
  urls.forEach(u => {
    if (bgCache.has(u)) return;
    const im = new Image();
    im.decoding = "async";
    im.src = u;
    bgCache.set(u, im);
    if (im.decode) im.decode().catch(() => {});
  });
}
const bgPreloadIdle = (): void => idle(bgPreload);
bgMq.addEventListener("change", () => { setBg(bgKey); bgPreloadIdle(); });

/* ---------- 8. router ---------- */
const TITLES = Object.fromEntries([...PAGES, ["peripheral", "Peripheral"]]) as Record<ViewKey, string>;
let curKey: ViewKey | null = null; /* 今表示しているページ */
let goal: string | null = null; /* Randomで選ばれた項目。遷移後にその項目を画面最上部へ出す */

/* 左上/右上のページ送り。一周の外(Peripheral)は「← Home」だけ */
function updatePager(key: ViewKey): void {
  const ci = PAGES.findIndex(p => p[0] === key), ring = ci >= 0;
  const at = (d: number) => PAGES[(ci + d + PAGES.length * 2) % PAGES.length];
  const set = (id: string, pg: readonly [string, string], left: boolean, label: string) => {
    const a = $<HTMLAnchorElement>(id);
    a.href = "#/" + pg[0];
    a.innerHTML = left ? `<i aria-hidden="true">←</i><span>${pg[1]}</span>` : `<span>${pg[1]}</span><i aria-hidden="true">→</i>`;
    a.setAttribute("aria-label", label + ": " + pg[1]);
  };
  ["#pprev2", "#pnext", "#pnext2"].forEach(id => { $(id).hidden = !ring; });
  if (ring) {
    set("#pprev", at(-1), true, "前のページ");
    set("#pprev2", at(-2), true, "2つ前のページ");
    set("#pnext", at(1), false, "次のページ");
    set("#pnext2", at(2), false, "2つ先のページ");
  } else set("#pprev", ["home", "Home"], true, "ホームへ戻る");
}

/* Random で選ばれた項目を画面の最上部へ(ページ末尾の項目でも上端に届くよう下に余白を足す) */
function scrollToGoal(view: HTMLElement): void {
  if (!goal) return;
  const g = goal;
  goal = null;
  const el = [...view.querySelectorAll<HTMLElement>("[data-k]")].find(e => e.dataset.k === g);
  if (!el) return;
  const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
  const top = Math.max(0, el.getBoundingClientRect().top + scrollY - margin);
  const extra = top + innerHeight - document.documentElement.scrollHeight;
  if (extra > 0) view.style.paddingBottom = extra + "px";
  scrollTo(0, top);
}

/* Home: Random */
function bindRandom(): void {
  const btn = qs<HTMLButtonElement>("#rand");
  if (!btn) return;
  btn.onclick = () => {
    const pool: [string, string, string, string][] = [
      ...SITE.works.map((w): [string, string, string, string] => ["Works", w.title, "#/works", "w:" + w.title]),
      ...SITE.interests.flatMap(c => c.items.map((i): [string, string, string, string] => ["Interests", i.label, "#/interests", "i:" + i.label]))
    ];
    const [kind, title, href, key] = pool[Math.floor(Math.random() * pool.length)];
    const box = $("#disc");
    box.innerHTML = `<span class="sub">${esc(kind)}</span><div>${esc(title)}</div><a class="sub" href="${href}" data-go="${esc(key)}">open</a>`;
    box.querySelector<HTMLAnchorElement>("[data-go]")!.onclick = e => { goal = (e.currentTarget as HTMLElement).dataset.go ?? null; };
  };
}

/* Home: アイコンの吹き出し(マウスを乗せるたびにランダム。同じ言葉が続けて出ないようにする) */
function bindAvatar(): void {
  const wrap = qs(".avatar-wrap");
  if (!wrap) return;
  const bubble = wrap.querySelector(".bubble")!, words = SITE.avatarSay || [];
  if (!words.length) return;
  let last = -1, timer = 0;
  const hide = () => { clearTimeout(timer); bubble.classList.remove("show"); };
  const show = (autoHide: boolean) => {
    let i: number;
    do { i = Math.floor(Math.random() * words.length); } while (words.length > 1 && i === last);
    last = i;
    bubble.textContent = words[i];
    clearTimeout(timer);
    bubble.classList.add("show");
    if (autoHide) timer = setTimeout(hide, 1600);
  };
  wrap.addEventListener("pointerenter", e => { if ((e as PointerEvent).pointerType === "mouse") show(false); });
  wrap.addEventListener("pointerleave", hide);
  wrap.addEventListener("click", e => { const pt = (e as PointerEvent).pointerType; if (pt && pt !== "mouse") show(true); }); /* スマホ・ペンはタップで */
}

/* Works: タグ絞り込み */
function bindFilters(): void {
  const bar = qs("#flt");
  if (!bar) return;
  bar.onclick = e => {
    const b = (e.target as Element).closest("button");
    if (!b) return;
    bar.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", String(x === b)));
    const t = b.dataset.t;
    $("#wg").innerHTML = SITE.works.filter(w => !t || (w.tags || []).includes(t)).map(workCard).join("");
  };
}

const pageKey = (): ViewKey => {
  const h = location.hash.replace(/^#\/?/, "") || "home";
  return Object.hasOwn(VIEWS, h) ? (h as ViewKey) : "home";
};

/* enter=true のときだけ、文字などが下からふわっと現れる演出を付ける(初回表示用) */
function route(enter = false): void {
  const key = pageKey();
  const view = $("#view");
  curKey = key;
  view.style.paddingBottom = "";
  view.innerHTML = `<div class="view${enter ? " enter" : ""}">${VIEWS[key]()}</div>`;
  document.title = (key === "home" ? "" : TITLES[key] + " | ") + SITE.name;
  applySectionBgs(view);
  updatePager(key);
  setBg(key);
  bgPreloadIdle();
  scrollTo(0, 0);
  $("#main").focus({preventScroll: true});
  scrollToGoal(view);
  bindRandom();
  bindAvatar();
  bindFilters();
}

/* ページ送りの向き: 一周の中で近い側(2つ先まで)なら next、反対側なら prev、一周の外とのやり取りは none(ふわっと) */
function ringDir(from: ViewKey, to: ViewKey): "next" | "prev" | "none" {
  const n = PAGES.length, fi = PAGES.findIndex(p => p[0] === from), ti = PAGES.findIndex(p => p[0] === to);
  if (fi < 0 || ti < 0 || fi === ti) return "none";
  return (ti - fi + n) % n <= n / 2 ? "next" : "prev";
}

/* 初回表示は演出つき(Homeに直接アクセスしたときも含む)。それ以降のページ送りは View Transition で切り替え、
   終わった後の演出は付けない。非対応・「動きを減らす」設定のときは即座に(非対応ブラウザは演出つきで)切り替える */
function navigate(): void {
  const next = pageKey();
  if (curKey === null || next === curKey) return route();
  if (!document.startViewTransition || prefersReducedMotion()) return route(true);
  root.dataset.dir = ringDir(curKey, next);
  const t = document.startViewTransition(() => route());
  t.ready.catch(() => {}); /* 連打で切り替えが上書きされたときの警告を出さない */
  t.finished.catch(() => {}).then(() => { delete root.dataset.dir; });
}
addEventListener("hashchange", navigate);
$("#copy").textContent = "© " + new Date().getFullYear() + " " + SITE.name;
$("#upd").textContent = "Last updated " + SITE.updated;
route(true);

/* ---------- 9. cursor dot(デスクトップのみ。ネイティブのカーソルは残す) ---------- */
if (matchMedia("(hover:hover) and (pointer:fine)").matches && !prefersReducedMotion()) {
  const dot = $("#cursor");
  let x = 0, y = 0, tx = 0, ty = 0, on = false;
  const loop = (): void => {
    x += (tx - x) * .15; y += (ty - y) * .15;
    dot.style.transform = `translate(${x + 10}px,${y + 10}px)`;
    requestAnimationFrame(loop);
  };
  addEventListener("mousemove", e => {
    tx = e.clientX; ty = e.clientY;
    if (!on) { on = true; dot.style.opacity = "0.6"; x = tx; y = ty; loop(); }
  });
  document.addEventListener("mouseleave", () => { dot.style.opacity = "0"; });
}
