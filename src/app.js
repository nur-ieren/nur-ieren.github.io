/* ====== SITE DATA ====== */
const SITE={
  name:"nur_ieren",
  phonetic:"[ˌnuːɐ̯ˈiːʁən]",
  initial:"",
  avatarImage:"./Home/nur.webp",
  avatarSay:["ぬぁ～","ぬぅ～","ぬる～"], /* アイコンにマウスを乗せると、この中からランダムに吹き出しが出る */
  tagline:"僕のいろいろが置かれてるよ",
  updated:"2026.11.27",
  about:{
    body:["バーチャルな超絶ゆったりまったり一般人","目元の名前アクセと髪にかかった北斗七星がトレードマーク？"],
    now:["discordに生息しながら空いた時間でVRChatをしている"],
    timeline:[{date:"2026.10.19",text:"このサイトを作り始める"}]
  },
  works:[
    {id:"tool",title:".conv",description:"画像・音声ファイルの拡張子変換を簡単に行います。",date:"2026",tags:["tool","extension","streamline","python"],image:"",url:"https://github.com/vor-ges/.conv",status:"work in progress",featured:true},
    {id:"bot",title:"vrc-friend-bot",description:"フレンドの平均的なログイン時間を知るのに便利です。",date:"2026",tags:["discord","bot","vrchat","python"],image:"",url:"https://github.com/vor-ges/vrc-friend-bot",status:"release",featured:true},
    {id:"bot",title:"vrc-friend-bot-rs",description:"vrc-friend-botのRust版です。",date:"2026",tags:["discord","bot","vrchat","rust"],image:"",url:"https://github.com/vor-ges/vrc-friend-bot-rs",status:"work in progress",featured:false},
    {id:"Site",title:"nur-ieren.github.io",description:"当サイトのソースコードです。",date:"2026",tags:["site","html","css","javascript"],image:"",url:"https://github.com/nur-ieren/nur-ieren.github.io",status:"release",featured:false},
    {id:"tool",title:"ArmatureSyncControl",description:"同素体アバター間のアーマチュア内のTransform値などの設定を揃えます。",date:"2026",tags:["tool","unity","streamline","c#"],image:"",url:"https://github.com/nur-ieren/ArmatureSyncControl",status:"release",featured:false},
	  {id:"tool",title:"ExpressionMenuRelinker",description:"アバター毎にフォルダ分けされたExpressionMenuを作るのに便利です。",date:"2026",tags:["tool","unity","streamline","c#"],image:"",url:"https://github.com/nur-ieren/ExpresionMenuRelinker",status:"release",featured:false},
	  {id:"tool",title:"MatsPrefsUnifier",description:"liltoon・関連マテリアルの影設定などを揃えます。",date:"2026",tags:["tool","unity","streamline","c#"],image:"",url:"https://github.com/vor-ges/MatsPrefsUnifier",status:"release",featured:true},
	  {id:"tool",title:"MenuToggler",description:"不要なUnityメニューを非表示にします。",date:"2026",tags:["tool","unity","streamline","c#"],image:"",url:"https://github.com/nur-ieren/MenuToggler",status:"release",featured:false},
	  {id:"tool",title:"Openlilavatarutils",description:"lilavatarutilsをアバタールート右クリックから簡単に開きます。",date:"2026",tags:["tool","unity","streamline","c#"],image:"",url:"https://github.com/nur-ieren/Openlilavatarutils",status:"release",featured:false},
	  {id:"tool",title:"ProjectFolderHider",description:"不要なProjectタブ内のフォルダを非表示にします。",date:"2026",tags:["tool","unity","streamline","c#"],image:"",url:"https://github.com/nur-ieren/ProjectFolderHider",status:"release",featured:false},
	  {id:"software",title:"VRChatWindowControl",description:"SteamVR起動中のVRChatウィンドウサイズを制御します。",date:"2026",tags:["software","vrchat","optimization","c#"],image:"",url:"https://github.com/vor-ges/VRChatWindowControl",status:"work in progress",featured:false},
    {id:"tool",title:"WDUnifier",description:"アバター内の全ControllerのWriteDefaultsを一括統一します。",date:"2026",tags:["tool","unity","streamline","c#"],image:"",url:"https://github.com/nur-ieren/WDUnifier",status:"release",featured:false}
  ],
  /* カードの不透明度。1=不透明、0=完全に透明。一括で変わる。 */
  cardOpacity:0.5,
  /* セクション背景画像。キーはセクション見出し。src=画像パス / opacity=透明度(0〜1、省略時はsectionBgOpacity) / url=出典URL(右下に表示・クリックで開く) */
  sectionBgOpacity:0.25,
  sectionBg:{
    "Selected Works":   {src:"", opacity:null, url:""},
    "Discovery":        {src:"", opacity:null, url:""},
    "My Favorite Musics":{src:"", opacity:null, url:""},
    "Currently":        {src:"", opacity:null, url:""},
    "Archive":          {src:"", opacity:null, url:""},
    "Favorites":        {src:"", opacity:null, url:""},
    "Bucket List":      {src:"", opacity:null, url:""}
  },
  /* ページ背景。ページごとにpcとmobileを別々に指定可能。
     opacity: 0〜1 ページ内で省略すると下の共通値を使います。
     url: 画像の出典URL。設定すると画面の右下隅に小さく表示される。
     slide: true にすると、画像を画面の横幅ぴったりに合わせ、スクロールに合わせてスライドさせる。
            ページ最上部で画像の一番上、ページ最下部で画像の一番下が揃う。
            ・画像の縦が「ページの縦」より長い → 画像のほうが速く動く(ページのスクロールが相対的に遅い)
            ・画像の縦が「ページの縦」より短い → 画像のほうが遅く動く(ページのスクロールが相対的に速い)
            ・画像の縦が画面より短い場合は、画面内を上から下へ移動し、余白にはページの地色が見える。
            false なら画像を画面全体に敷き詰めて(cover)中央で固定。 */
  bg:{
    slide:{pc:true, mobile:true},
    opacity:0.4,
    home:     {pc:"./Background/PC_Home.webp", mobile:"./Background/SP_Home.webp", opacity:0.4, url:"https://skeb.jp/@muro_sya/works/183"},
    about:    {pc:"./Background/PC_About.webp", mobile:"./Background/SP_About.webp", opacity:0.4, url:"https://skeb.jp/@nkmf_1122/works/38"},
    interests:{pc:"./Background/PC_Interests.webp", mobile:"./Background/SP_Interests.webp", opacity:0.4, url:"https://skeb.jp/@AraiRacu/works/7"},
    works:    {pc:"./Background/PC_Works.webp", mobile:"./Background/SP_Works.webp", opacity:0.4, url:"https://skeb.jp/@pu_nkn/works/62"},
    links:    {pc:"./Background/PC_Links.webp", mobile:"./Background/SP_Links.webp", opacity:0.4, url:"https://skeb.jp/@7qDappi_zizii/works/121"},
    peripheral:{pc:"./Background/PC_Peripheral.webp", mobile:"./Background/SP_Peripheral.webp", opacity:0.4, url:"https://skeb.jp/@hakoha_moku/works/22"}
  },
  /* Peripheral: ホームのDiscoveryからだけ行けるページ(左右ナビの一周対象外)。
     entries: [{title:"見出し", body:["段落1","段落2"], images:[{src:"サムネ画像", full:"拡大用画像(省略可)", alt:"画像の内容を説明する文", caption:"拡大時に下へ出す文(省略可)"}]}] */
  peripheral:{
    blurb:"利用している周辺機器など。",
    entries:[
      {title:"Mouse", body:["G402","買い替えるなら無線のG502 LIGHTSPEED。"], images:[{src:"", full:"", alt:"", caption:""}]},
      {title:"Keyboard", body:["GLORIOUS GMMK 2 (96%) DE QWERTZ","ドイツ語配列のメカニカル。"], images:[{src:"./Peripheral/keyboard.webp", full:"", alt:"", caption:"ドイツの友達とおそろいで買った。"}]},
      {title:"Sub Keyboard", body:["GoForty Ortho","論理配列や自作キーボード界隈に興味を持ったきっかけの一つ。"], images:[{src:"./Peripheral/Go-Forty.webp",full:"",caption:"26年の正月に買ったGoForty Orthoの写真。"}]},
      {title:"Mic", body:["Yeti Nano","安定した音質をお届け。"], images:[{src:"", full:"", alt:"", caption:""}]},
      {title:"Head Mount Display", body:["Pico 4","Quest 2から移行。安定して通電しないので買い替えを検討している。"], images:[{src:"./Peripheral/vrchat-hmd-trackers-2.webp",full:"",caption:"Pico 4が届いたときの写真。"}]},
      {title:"Full Body Tracker", body:["Pico Motion Tracker","動作にはある程度満足している。\n他のトラッカーも気になっている。"], images:[{src:"./Peripheral/vrchat-hmd-trackers.webp", full:"", alt:"", caption:"Quest2だった頃と、先に買っておいたPico Motion Tracker。"}]},
      {title:"Beatmania Controller", body:["Phoenix wan","専コン → Rainbow Portable 2 → NRC-500 → Phoenix wanの順で乗り換えてきた。"], images:[{src:"./Peripheral/iidx-controller.webp", full:"", alt:"", caption:"三和+D2MV-01-1C3を使用している。"}]}
    ]
  },
  /* Quiz: ホームのDiscoveryに出る由来クイズ。choicesの中でanswerと同じものが正解(押すと紙吹雪)。
     explain は正解したあとに出す一言(空なら出ません)。 */
  quiz:{
    title:"Quiz",
    question:"「nur_ieren」の由来になった言語は？",
    choices:["日本語","English","Deutsch","한국어","Türkçe","Latina"],
    answer:"Deutsch",
    right:"正解！",
    wrong:"ちがうよ〜",
    explain:"より詳しい由来は秘密だよっ"
  },
  /* My Favorite Musics: SpotifyのURL(プレイリスト/アルバム/曲)を貼るだけ。height省略時は352(トラック一覧つき)。曲単体なら152。 */
  music:[
    {title:"Komponenten meines Lebens",url:"https://open.spotify.com/playlist/2ToA6F9DR8IdPF8d75xOsE",height:352},
    {title:"30 MUSIC CHALLENGE",url:"https://open.spotify.com/playlist/2pGmYMEaIxjdGYMHTkHBLg",height:352},
    {title:"Die in deutschen Vorlesungen gehört wordene Musiken",url:"https://open.spotify.com/playlist/4z5P2egxWkh0lnEUA6iztb",height:352},
  ],
  /* interestsの各項目の images:[{src:"サムネ画像",full:"拡大用画像(省略可)",alt:"画像の内容を説明する文",caption:"拡大時に下へ出す文(省略可。省略するとaltを表示)"}] に正方形画像を並べる。クリックで拡大表示。はみ出した分は横スライド。 */
  interests:[
    {category:"Favorites",items:[
		{label:"VRChat",note:"基本自分のフレオンかグルオンが生息地\nVRC名鑑に（当社比）まともな自己紹介あるよ\nFFならぜひフレンドになりたい心持ち〜〜\n陰ながら\（勝手ながら\）フレンドの絵文字制作係を担っています",url:""
    ,images:[{src:"./Interests/vrchat-sign-origin.webp",full:"",caption:"この名前を作ったときに考えた書置き用のサイン。ぬぁぬぅぬる全てに対応している。"},{src:"./Interests/nur_een_buwaa.webp",full:"",caption:"nur_een_buwaa"},{src:"./Interests/MilkRe02.webp",full:"",caption:""},{src:"./Interests/nur_gimon.webp",full:"",caption:"nur_gimon"},{src:"./Interests/nur_gabi.webp",full:"",caption:"nur_gabi"},{src:"./Interests/Eku01.webp",full:"",caption:""},{src:"./Interests/Chiffon07.webp",full:"",caption:""}]},
		{label:"音ゲー / Rhythm games",note:"物理ボタンが好き！\n特にBeatmania iidx！\n1P十段 手首非完全固定 2P初段",url:""
    ,images:[{src:"./Interests/iidx-controller.webp",full:"",caption:"現在使用しているPhoenix wan。三和+D2MV-01-1C3を使用している。"},{src:"./Interests/34ver10dan.webp",full:"",caption:"現状の地力。1P十段 手首非完全固定"}]},
		{label:"カードゲーム / Card games",note:"人生でカードゲームに触れたことがなかった人が\n今年中にポケポケ → シャドバ → 遊戯王といった順番でハマっております\n一概にカードゲームって言っても幅広いね！",url:""
    ,images:[{src:"./Interests/Pokmon TCGP.webp",full:"",caption:""},{src:"./Interests/ShadowverseWB.webp",full:"",caption:"始めて半年の戦績。そこまで熱中してるわけではないけど、めちゃ楽しい。"}]},
		{label:"FPS",note:"フレンドさんとやるならなんでも大歓迎！",url:""
    ,images:[{src:"./Interests/Titanfall2-statistics.webp",full:"",caption:"R-97が最強ってワケ。"}]},
		{label:"折り紙 / Origami",note:"実は７歳くらいからずっとやってるよ\n立体のお花折るのが大好きです！佐藤式がお気に入り！\nTadashi MoriさんとMasahiro Ichikawaさんは我が懐かしの道標...\n弟も折り紙好きで、ポケモンたくさん折ってるっぽい！",url:""
    ,images:[{src:"./Interests/miraiyashoten-rose.webp",full:"",caption:"未来屋書店のカバーを用いて作ったバラ。"},{src:"./Interests/miraiyashoten-rose-2.webp",full:"",caption:""},{src:"./Interests/origami-im-deutschland.webp",full:"",caption:"ドイツ留学中に折って友達に上げた折り紙。4種類折るのは初めてだったので新鮮だった。"}]},
		{label:"外国語 / Foreign languages",note:"English >> Deutsch >>>> 한국어 >>> Türkçe >>> Latīnus\nいろんな言語を幅広く、特にゲルマン語派を中心に楽しんでる〜\n英語とドイツ語は不自由なく話せる程度にまで持っていきたい！",url:""
    ,images:[{src:"./Interests/SDK-Abitur.webp",full:"",caption:"語学留学修了時に頂いたNiveau B1(Allgemeinsprache)の証明書。"}]},
		{label:"言語学 / Linguistics",note:"音韻論、形態論、類型論、方言学、語源学辺りは大好き！\nたまに人工言語界隈にも足を運んだり...？\n言語・語学好きな方とはかなりシナジーがあるかも！",url:""
    ,images:[{src:"",full:"",caption:""}]},
		{label:"自作キーボード / Custom keyboard",note:"キー配列とキーマッピングをずっと触ってるかも\nGoForty Orthoでmato式インスパイアの配列を練り練り中\n次はトラックボール付き無線左右分割カラムスタッガードが欲しい...\nみんなもロウスタッガードQWERTY配列から脱しよう！",url:""
    ,images:[{src:"./Interests/Go-Forty.webp",full:"",caption:"26年の正月に買ったGoForty Orthoの写真。"},{src:"./Interests/Go-Forty-Bind0.webp",full:"",caption:"mato式インスパイアのオリジナル論理配列。"},{src:"./Interests/Go-Forty-Bind1.webp",full:"",caption:"右手親指シフトで子音字の有声化。"},{src:"./Interests/Go-Forty-Bind2.webp",full:"",caption:"左手親指シフトでファンクションキー、数字キー、テンキーなど。"},{src:"./Interests/Go-Forty-Bind3.webp",full:"",caption:"QWERTY配列も使える。"}]}
	]},
    {category:"Bucket List",items:[
		{label:"音楽理論 / Music Theory",note:"いつか自分で音楽作ってみたい〜\nついでに普段聞いてる音楽について詳しく分析できるようになれちゃったりして？",url:""},
		{label:"イラスト / Illustration",note:"ペンタブ自体は持ってる！\nただ幼い頃から絶望的なのでモチベがあったら克服したい雰囲気？",url:""},
		{label:"ダンス / Dance",note:"今のところ機材はPico4とPico Motion Tracker\n部屋の環境は出来から、ダンス関連イベントにも顔出しやすくなるかも？\nでも、両手強く握ったら接続失うんですよ（？）\n新しいHMD & フルトラに変えれればモチベ上がっちゃうかも",url:""},
		{label:"モデリング / Modelling",note:"いつかちょっとした小物作れるくらいにはなりたい...Blenderから逃げｒ",url:""}
	]}
  ],
  links:[
    {label:"GitHub",handle:"@nur-ieren",url:"https://github.com/nur-ieren",logo:"./Links/github-logo.webp"},
    {label:"VRChat",handle:"@nur-",url:"https://vrchat.com/home/user/usr_cd7c4239-44e5-41ab-a28e-11a9a11357b0",logo:"./Links/VRChat Logo Black.webp"},
	  {label:"vrc-meikan",handle:"@nur_ieren",url:"https://vrc-meikan.com/profile/baa76819-ca5d-4151-84d0-ed0fb4140380",logo:"./Links/vrc-meikan.webp"},
    {label:"X(Twitter)",handle:"@nur_ieren",url:"https://x.com/nur_ieren",logo:"./Links/X-logo.webp"},
    {label:"My Skeb requests",handle:"@nur_ieren",url:"https://skeb.jp/@nur_ieren",logo:"./Links/skeb-logo.webp"},
	  {label:"YouTube",handle:"@nur_ieren",url:"https://youtube.com/@nur_ieren",logo:"./Links/Youtube-logo.webp"},
	  {label:"Spotify",handle:"@yy_yy",url:"https://open.spotify.com/user/31iul5uh5th7mbxnqrsp3tu4fjbe",logo:"./Links/spotify-logo.webp"},
	  {label:"SoundCloud",handle:"@nur_ieren",url:"https://soundcloud.com/nur_ieren",logo:"./Links/soundcloud-logo.webp"},
    {label:"osu!",handle:"@ywsk1563",url:"https://osu.ppy.sh/users/21075438",logo:"./Links/Osu!-logo.webp"}
  ]
};
/* ページの並び順 = 左上/右上ボタンで一周する順番(最後の次は最初に戻る) */
const PAGES=[["links","Links"],["works","Works"],["home","Home"],["about","About"],["interests","Interests"]];

/* ============================================================
   App code 表示内容は上の SITE / PAGES で定義する
     1. utils            2. templates        3. pages
     4. lightbox         5. page navigation(keyboard / swipe)
     6. quiz             7. backgrounds(section / page / preload)
     8. router           9. cursor dot
   ============================================================ */

/* ---------- 1. utils ---------- */
const $ = s => document.querySelector(s);
const ESC = {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};
const esc = t => String(t ?? "").replace(/[&<>"]/g, c => ESC[c]);
const clamp01 = n => Math.min(1, Math.max(0, +n));
const shortUrl = u => String(u).replace(/^https?:\/\//, "");
const idle = fn => (window.requestIdleCallback || (f => setTimeout(f, 200)))(fn);
const prefersReducedMotion = () => matchMedia("(prefers-reduced-motion:reduce)").matches;
const paras = list => [].concat(list || []).map(p => `<p>${esc(p)}</p>`).join("");
const body = document.body;

/* ---------- 2. templates ---------- */
const head = t => `<h1>${t}</h1>`;
const link = (url, text) => url ? `<a href="${esc(url)}" target="_blank" rel="noopener">${text}</a>` : text;

const workCard = w => {
  const tag = w.url ? "a" : "div";
  const attrs = w.url ? ` href="${esc(w.url)}" target="_blank" rel="noopener"` : "";
  const tags = (w.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join("");
  return `<${tag} class="card"${attrs} data-k="w:${esc(w.title)}"><span class="sub">${esc(w.date)} / <span class="status">${esc(w.status)}</span></span><h3>${esc(w.title)}</h3><p>${esc(w.description)}</p>${tags}</${tag}>`;
};

/* 角丸の正方形サムネ列。クリックで拡大(data-* を lightbox が読む) */
const pics = list => {
  list = (list || []).filter(x => x && x.src);
  if (!list.length) return "";
  const items = list.map(x => `<button type="button" class="pic" data-src="${esc(x.full || x.src)}" data-cap="${esc(x.caption ?? x.alt)}" aria-label="${esc(x.alt || "画像")}を拡大"><img src="${esc(x.src)}" alt="${esc(x.alt)}" loading="lazy"></button>`);
  return `<div class="pics">${items.join("")}</div>`;
};

/* Links のサービスロゴ。未設定なら頭文字の仮アイコン */
const logo = l => l.logo
  ? `<i class="ico"><img src="${esc(l.logo)}" alt="" loading="lazy"></i>`
  : `<i class="ico ph" aria-hidden="true">${esc([...String(l.label || "?")][0].toUpperCase())}</i>`;

/* Spotify の通常URL → 埋め込みURL。Spotify 以外は "" */
const spEmbed = u => {
  try {
    const x = new URL(u);
    if (x.hostname !== "open.spotify.com") return "";
    let p = x.pathname.replace(/^\/intl-[a-zA-Z-]+/, "");
    if (!p.startsWith("/embed/")) p = "/embed" + p;
    return "https://open.spotify.com" + p + "?utm_source=generator";
  } catch (e) { return ""; }
};
const musicItem = m => {
  const src = spEmbed(m.url), title = esc(m.title || "Spotify");
  return src
    ? `<iframe class="sp" src="${esc(src)}" height="${+m.height || 352}" title="${title}" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`
    : `<div class="sp-empty"><b>${title}</b><span class="sub">Spotify URL 未設定</span></div>`;
};
const musicSection = () =>
  `<section class="blk"><h2 class="sec">My Favorite Musics</h2><div class="music">${(SITE.music || []).map(musicItem).join("")}</div></section>`;

const quizCard = () => {
  const Q = SITE.quiz || {};
  if (!(Q.choices || []).length) return "";
  const buttons = Q.choices.map(c => `<button type="button" class="qbtn" data-q="${esc(c)}">${esc(c)}</button>`).join("");
  return `<div class="card quiz" id="quiz"><h3>${esc(Q.title || "Quiz")}</h3><p>${esc(Q.question)}</p><div class="qopts">${buttons}</div><div class="qmsg" id="qmsg" aria-live="polite"></div></div>`;
};

const interestRow = i =>
  `<div class="irow" data-k="i:${esc(i.label)}"><div class="itxt"><b>${link(i.url, esc(i.label))}</b><div class="sub">${esc(i.note)}</div></div>${pics(i.images)}</div>`;

const linkRow = l => l.url
  ? `<a class="row" href="${esc(l.url)}" target="_blank" rel="noopener"><span class="lk">${logo(l)}${esc(l.label)}</span><span>${esc(l.handle)}</span></a>`
  : `<div class="row"><span class="lk">${logo(l)}${esc(l.label)}</span><span class="sub">${esc(l.handle)}</span></div>`;

const peripheralEntry = e =>
  `<section class="blk"><h2 class="sec">${esc(e.title)}</h2><div class="irow"><div class="itxt prose">${paras(e.body)}</div>${pics(e.images)}</div></section>`;

/* ---------- 3. pages ---------- */
const VIEWS = {
  home: () => {
    const S = SITE, featured = S.works.filter(w => w.featured);
    return `<div class="home stagger"><div class="avatar-wrap" style="--i:0"><div class="avatar">${S.avatarImage ? `<img src="${esc(S.avatarImage)}" alt="">` : esc(S.initial)}</div><div class="bubble" aria-hidden="true"></div></div>
 <h1 class="name" style="--i:1">${esc(S.name)}</h1><div class="phon sub" style="--i:2">${esc(S.phonetic)}</div><p class="intro" style="--i:3">${esc(S.tagline)}</p></div>
 <section class="blk"><h2 class="sec">Selected Works<a class="sub" href="#/works">all works</a></h2><div class="grid">${featured.map(workCard).join("")}</div></section>
 <section class="blk"><h2 class="sec">Discovery</h2><div class="grid">
 <a class="card" href="#/peripheral"><h3>Peripheral</h3><p>${esc((S.peripheral || {}).blurb || "")}</p></a>
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
    const E = (SITE.peripheral || {}).entries || [];
    const content = E.length ? E.map(peripheralEntry).join("") : `<div class="prose"><p class="sub">まだ何も置いていません。</p></div>`;
    return `<div class="page">${head("Peripheral")}${content}</div>`;
  }
};

/* ---------- 4. lightbox ---------- */
const lb = $("#lb"), lbImg = $("#lbimg"), lbCap = $("#lbcap");
let lbList = [], lbIdx = 0, lbFrom = null;

function lbShow(i) {
  lbIdx = (i + lbList.length) % lbList.length;
  const b = lbList[lbIdx];
  lbImg.src = b.dataset.src;
  lbCap.textContent = b.dataset.cap || "";
  lb.classList.toggle("single", lbList.length < 2);
}
function lbOpen(b) {
  lbList = [...b.closest(".pics").querySelectorAll(".pic")];
  lbFrom = b;
  lb.hidden = false;
  lbShow(lbList.indexOf(b));
  $("#lbclose").focus();
}
function lbClose() {
  lb.hidden = true;
  lbImg.removeAttribute("src");
  if (lbFrom) lbFrom.focus({preventScroll: true});
}
/* クリックの振り分け(サムネ → 拡大 / 拡大中のボタン・背景 / クイズ) */
document.addEventListener("click", e => {
  const pic = e.target.closest(".pic");
  if (pic && pic.dataset.src) return lbOpen(pic);
  if (!lb.hidden) {
    if (e.target.closest("#lbprev")) lbShow(lbIdx - 1);
    else if (e.target.closest("#lbnext")) lbShow(lbIdx + 1);
    else if (e.target === lb || e.target.closest("#lbclose")) lbClose();
    return;
  }
  const qbtn = e.target.closest(".qbtn");
  if (qbtn) quizAnswer(qbtn);
});

/* ---------- 5. page navigation ---------- */
/* 前(-1)/次(+1)のページへ。行き先は表示ではなく現在のURLから計算するので、切り替え中の連打でも順に進む */
const goStep = d => {
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
  const t = e.target;
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
    const t = e.touches[0];
    ok = e.touches.length === 1 && lb.hidden
      && !(window.visualViewport && visualViewport.scale > 1.01)
      && t.clientX > SWIPE.edge && t.clientX < innerWidth - SWIPE.edge
      && !e.target.closest(IGNORE);
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
function confetti(x, y) {
  if (prefersReducedMotion()) return;
  const cv = document.createElement("canvas"), dpr = devicePixelRatio || 1, W = innerWidth, H = innerHeight;
  cv.width = W * dpr; cv.height = H * dpr;
  cv.style.cssText = "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:60";
  document.body.append(cv);
  const g = cv.getContext("2d");
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
function quizAnswer(b) {
  const Q = SITE.quiz || {}, card = b.closest(".quiz"), msg = card.querySelector("#qmsg");
  if (b.dataset.q !== Q.answer) {
    b.disabled = true;
    b.classList.add("ng", "shake");
    msg.textContent = Q.wrong || "ちがうよ～";
    return;
  }
  card.querySelectorAll(".qbtn").forEach(x => { x.classList.remove("shake"); if (x !== b) x.disabled = true; });
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
const isDark = () => root.dataset.theme ? root.dataset.theme === "dark" : darkMq.matches;
function syncTheme() {
  const dark = isDark();
  $("#theme").setAttribute("aria-checked", dark);
  document.querySelectorAll('meta[name="theme-color"]').forEach(m => { m.content = dark ? "#171614" : "#F4F0E8"; m.removeAttribute("media"); });
}
function setTheme(t) {
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
document.documentElement.style.setProperty("--card-alpha", clamp01(SITE.cardOpacity ?? 1));

/* section: セクション見出しをキーにして sectionBg の画像を敷く */
function applySectionBgs(root) {
  root.querySelectorAll("section.blk").forEach(sec => {
    const h = sec.querySelector("h2.sec"), title = h && h.firstChild ? h.firstChild.textContent.trim() : "";
    const c = (SITE.sectionBg || {})[title];
    if (!c || !c.src) return;
    sec.classList.add("hasbg");
    const d = document.createElement("div");
    d.className = "secbg";
    d.setAttribute("aria-hidden", "true");
    d.style.backgroundImage = `url("${String(c.src).replace(/"/g, "%22")}")`;
    d.style.opacity = clamp01(c.opacity ?? SITE.sectionBgOpacity ?? .15);
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
const bgEl = $("#bg"), bgCredit = $("#bgcredit"), bgMq = matchMedia("(max-width:40rem)");
let bgKey = "home", bgSlide = false;

function bgPos() {
  const max = document.documentElement.scrollHeight - innerHeight;
  const p = bgSlide && max > 0 ? clamp01(scrollY / max) : 0;
  bgEl.style.backgroundSize = bgSlide ? "100% auto" : "cover";
  bgEl.style.backgroundPosition = bgSlide ? `50% ${p * 100}%` : "50% 50%";
}
function setBg(key) {
  bgKey = key;
  const B = SITE.bg || {}, c = B[key] || {}, sl = B.slide || {}, mobile = bgMq.matches;
  const img = mobile ? c.mobile : c.pc;
  bgSlide = mobile ? !!sl.mobile : sl.pc !== false;
  bgEl.style.backgroundImage = img ? `url(${JSON.stringify(img)})` : "none";
  bgEl.style.opacity = c.opacity ?? B.opacity ?? .15;
  bgPos();
  if (img && c.url) { bgCredit.href = c.url; bgCredit.textContent = shortUrl(c.url); bgCredit.hidden = false; }
  else bgCredit.hidden = true;
}
let bgTick = 0;
const bgRequest = () => { if (!bgTick) bgTick = requestAnimationFrame(() => { bgTick = 0; bgPos(); }); };
addEventListener("scroll", bgRequest, {passive: true});
addEventListener("resize", bgRequest);
new ResizeObserver(bgRequest).observe(body);

/* preload: 他ページの背景も先に読み込み・デコードして、移動時の読み込み待ちをなくす */
const bgCache = new Map();
function bgPreload() {
  const B = SITE.bg || {}, side = bgMq.matches ? "mobile" : "pc";
  const keys = [bgKey, ...PAGES.map(p => p[0]), "peripheral"];
  const urls = keys.map(k => (B[k] || {})[side]).filter(Boolean);
  Object.values(SITE.sectionBg || {}).forEach(c => { if (c && c.src) urls.push(c.src); });
  urls.forEach(u => {
    if (bgCache.has(u)) return;
    const im = new Image();
    im.decoding = "async";
    im.src = u;
    bgCache.set(u, im);
    if (im.decode) im.decode().catch(() => {});
  });
}
const bgPreloadIdle = () => idle(bgPreload);
bgMq.addEventListener("change", () => { setBg(bgKey); bgPreloadIdle(); });

/* ---------- 8. router ---------- */
const TITLES = Object.fromEntries([...PAGES, ["peripheral", "Peripheral"]]);
let curKey = null; /* 今表示しているページ */
let goal = null; /* Randomで選ばれた項目。遷移後にその項目を画面最上部へ出す */

/* 左上/右上のページ送り。一周の外(Peripheral)は「← Home」だけ */
function updatePager(key) {
  const ci = PAGES.findIndex(p => p[0] === key), ring = ci >= 0;
  const at = d => PAGES[(ci + d + PAGES.length * 2) % PAGES.length];
  const set = (id, pg, left, label) => {
    const a = $(id);
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
function scrollToGoal(view) {
  if (!goal) return;
  const g = goal;
  goal = null;
  const el = [...view.querySelectorAll("[data-k]")].find(e => e.dataset.k === g);
  if (!el) return;
  const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
  const top = Math.max(0, el.getBoundingClientRect().top + scrollY - margin);
  const extra = top + innerHeight - document.documentElement.scrollHeight;
  if (extra > 0) view.style.paddingBottom = extra + "px";
  scrollTo(0, top);
}

/* Home: Random */
function bindRandom() {
  const btn = $("#rand");
  if (!btn) return;
  btn.onclick = () => {
    const pool = [
      ...SITE.works.map(w => ["Works", w.title, w.description, "#/works", "w:" + w.title]),
      ...SITE.interests.flatMap(c => c.items.map(i => ["Interests", i.label, i.note, "#/interests", "i:" + i.label]))
    ];
    const [kind, title, text, href, key] = pool[Math.floor(Math.random() * pool.length)];
    const box = $("#disc");
    box.innerHTML = `<span class="sub">${esc(kind)}</span><div>${esc(title)}</div><a class="sub" href="${href}" data-go="${esc(key)}">open</a>`;
    box.querySelector("[data-go]").onclick = e => { goal = e.currentTarget.dataset.go; };
  };
}

/* Home: アイコンの吹き出し(マウスを乗せるたびにランダム。同じ言葉が続けて出ないようにする) */
function bindAvatar() {
  const wrap = $(".avatar-wrap");
  if (!wrap) return;
  const bubble = wrap.querySelector(".bubble"), words = SITE.avatarSay || [];
  if (!words.length) return;
  let last = -1, timer = 0;
  const hide = () => { clearTimeout(timer); bubble.classList.remove("show"); };
  const show = autoHide => {
    let i;
    do { i = Math.floor(Math.random() * words.length); } while (words.length > 1 && i === last);
    last = i;
    bubble.textContent = words[i];
    clearTimeout(timer);
    bubble.classList.add("show");
    if (autoHide) timer = setTimeout(hide, 1600);
  };
  wrap.addEventListener("pointerenter", e => { if (e.pointerType === "mouse") show(false); });
  wrap.addEventListener("pointerleave", hide);
  wrap.addEventListener("click", e => { if (e.pointerType && e.pointerType !== "mouse") show(true); }); /* スマホ・ペンはタップで */
}

/* Works: タグ絞り込み */
function bindFilters() {
  const bar = $("#flt");
  if (!bar) return;
  bar.onclick = e => {
    const b = e.target.closest("button");
    if (!b) return;
    bar.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x === b));
    const t = b.dataset.t;
    $("#wg").innerHTML = SITE.works.filter(w => !t || (w.tags || []).includes(t)).map(workCard).join("");
  };
}

const pageKey = () => {
  const h = location.hash.replace(/^#\/?/, "") || "home";
  return VIEWS[h] ? h : "home";
};

/* enter=true のときだけ、文字などが下からふわっと現れる演出を付ける(初回表示用) */
function route(enter = false) {
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
function ringDir(from, to) {
  const n = PAGES.length, fi = PAGES.findIndex(p => p[0] === from), ti = PAGES.findIndex(p => p[0] === to);
  if (fi < 0 || ti < 0 || fi === ti) return "none";
  return (ti - fi + n) % n <= n / 2 ? "next" : "prev";
}

/* 初回表示は演出つき(Homeに直接アクセスしたときも含む)。それ以降のページ送りは View Transition で切り替え、
   終わった後の演出は付けない。非対応・「動きを減らす」設定のときは即座に(非対応ブラウザは演出つきで)切り替える */
function navigate() {
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
  const loop = () => {
    x += (tx - x) * .15; y += (ty - y) * .15;
    dot.style.transform = `translate(${x + 10}px,${y + 10}px)`;
    requestAnimationFrame(loop);
  };
  addEventListener("mousemove", e => {
    tx = e.clientX; ty = e.clientY;
    if (!on) { on = true; dot.style.opacity = .6; x = tx; y = ty; loop(); }
  });
  document.addEventListener("mouseleave", () => { dot.style.opacity = 0; });
}
