/* サイトのデータ(src/data.ts の SITE)の「形」の定義。
   ここに無い名前を書いたり、文字列の場所に数字を書いたりすると、ビルド時にエラーで教えてくれます。 */

/** 一周するページ(左上/右上ボタンの順番に並ぶもの) */
export type RingKey = "links" | "works" | "home" | "about" | "interests";
/** 表示できるページ全部(一周の外の Peripheral を含む) */
export type ViewKey = RingKey | "peripheral";

/** 角丸の正方形サムネ。クリックで拡大(full があればそちらを拡大) */
export interface Img {
  src: string;
  full?: string;
  alt?: string;
  caption?: string;
}

export interface Work {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  image?: string;
  url: string;
  status: string;
  featured?: boolean;
}

export interface Interest {
  label: string;
  note: string;
  url: string;
  images?: Img[];
}
export interface InterestCategory {
  category: string;
  items: Interest[];
}

export interface LinkItem {
  label: string;
  handle: string;
  url: string;
  logo?: string;
}

export interface PeripheralEntry {
  title: string;
  body: string | string[];
  images?: Img[];
}

export interface Quiz {
  title?: string;
  question: string;
  choices: string[];
  answer: string;
  right?: string;
  wrong?: string;
  explain?: string;
}

export interface Music {
  title?: string;
  url: string;
  height?: number;
}

/** ページ全体の背景(PC用・スマホ用を別々に指定) */
export interface PageBg {
  pc?: string;
  mobile?: string;
  opacity?: number;
  url?: string;
}
export type BgConfig = { [K in ViewKey]?: PageBg } & {
  slide?: { pc?: boolean; mobile?: boolean };
  opacity?: number;
};

/** セクション(見出し)ごとの背景 */
export interface SectionBg {
  src: string;
  opacity?: number | null;
  url?: string;
}

export interface Site {
  name: string;
  phonetic: string;
  initial: string;
  avatarImage?: string;
  avatarSay?: string[];
  tagline: string;
  updated: string;
  about: {
    body: string[];
    now: string[];
    timeline: { date: string; text: string }[];
  };
  works: Work[];
  cardOpacity?: number;
  sectionBgOpacity?: number;
  sectionBg?: Record<string, SectionBg>;
  bg?: BgConfig;
  peripheral?: { blurb?: string; entries?: PeripheralEntry[] };
  quiz?: Quiz;
  music?: Music[];
  interests: InterestCategory[];
  links: LinkItem[];
}
