import type { RingKey, Site } from "./types";

/* ====== SITE DATA(ここを編集して中身を変えます) ====== */
export const SITE: Site = {
  name:"nur_ieren",
  phonetic:"[ˌnuːɐ̯ˈiːʁən]",
  initial:"",
  avatarImage:"./Home/nur.webp",
  avatarSay:["ぬぁ～","ぬぅ～","ぬる～"], /* アイコンにマウスを乗せると、この中からランダムに吹き出しが出る */
  tagline:"僕のいろいろが置かれてるよ",
  updated:"2026.11.26",
  about:{
    body:["バーチャルな超絶ゆったりまったり一般人","目元の名前アクセと髪にかかった北斗七星がトレードマーク？"],
    now:["discordに生息しながら空いた時間でVRChatをしている"],
    timeline:[{date:"2026.10.19",text:"このサイトを作り始める"}]
  },
  works:[
    {id:"bot",title:"vrc-friend-bot",description:"フレンドのログイン時間を知るのに便利です。",date:"2026",tags:["discord","bot","vrchat","python"],image:"",url:"https://github.com/vor-ges/vrc-friend-bot",status:"release",featured:true},
    {id:"bot",title:"vrc-friend-bot-rs",description:"vrc-friend-botのRust版です。",date:"2026",tags:["discord","bot","vrchat","rust"],image:"",url:"https://github.com/vor-ges/vrc-friend-bot-rs",status:"work in progress",featured:false},
    {id:"tool",title:"ArmatureSyncControl",description:"アーマチュア内のTransform値を揃えます。",date:"2026",tags:["tool","unity","streamline","c#"],image:"",url:"https://github.com/nur-ieren/ArmatureSyncControl",status:"release",featured:false},
	  {id:"tool",title:"ExpressionMenuRelinker",description:"新しいアバターごとのメニューを作るのに便利です。",date:"2026",tags:["tool","unity","streamline","c#"],image:"",url:"https://github.com/nur-ieren/ExpresionMenuRelinker",status:"release",featured:false},
	  {id:"tool",title:"MatsPrefsUnifier",description:"マテリアルの影設定などを揃えます。",date:"2026",tags:["tool","unity","streamline","c#"],image:"",url:"https://github.com/vor-ges/MatsPrefsUnifier",status:"release",featured:true},
	  {id:"tool",title:"MenuToggler",description:"不要なUnityメニューを非表示にします。",date:"2026",tags:["tool","unity","streamline","c#"],image:"",url:"https://github.com/nur-ieren/MenuToggler",status:"release",featured:true},
	  {id:"tool",title:"Openlilavatarutils",description:"lilavatarutilsをアバタールート右クリックから簡単に開きます。",date:"2026",tags:["tool","unity","streamline","c#"],image:"",url:"https://github.com/nur-ieren/Openlilavatarutils",status:"release",featured:false},
	  {id:"tool",title:"ProjectFolderHider",description:"不要なProjectタブ内のフォルダを非表示にします。",date:"2026",tags:["tool","unity","streamline","c#"],image:"",url:"https://github.com/nur-ieren/ProjectFolderHider",status:"release",featured:false},
	  {id:"tool",title:"WDUnifier",description:"アバター内のControllerのWriteDefaultsを一括統一します。",date:"2026",tags:["tool","unity","streamline","c#"],image:"",url:"https://github.com/nur-ieren/WDUnifier",status:"release",featured:false}
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
		{label:"外国語 / Foreign languages",note:"English >> Deutsch >>>> 한국어 >>> Türkçe >>> Latina\nいろんな言語を幅広く、特にゲルマン語派を中心に楽しんでる〜\n英語とドイツ語は不自由なく話せる程度にまで持っていきたい！",url:""
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
export const PAGES: ReadonlyArray<readonly [RingKey, string]> = [["links","Links"],["works","Works"],["home","Home"],["about","About"],["interests","Interests"]];
