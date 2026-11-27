// 公開用ファイルを _site/ に作るスクリプト(npm run build から呼ばれます)
//   1. index.html・画像フォルダなどの静的ファイルをそのままコピー
//   2. src/style.css をコピー
//   3. src/main.ts(+ data.ts, types.ts)を1つの JavaScript にまとめて _site/src/app.js に出力
import { build } from "esbuild";
import { cpSync, mkdirSync, readdirSync, rmSync } from "node:fs";

const OUT = "_site";

// 公開しないもの(ソース・設定・ビルド結果など)
const SKIP = new Set([
  ".git", ".github", ".gitignore", "node_modules", OUT, "scripts", "src",
  "package.json", "package-lock.json", "tsconfig.json", "README.md",
]);

rmSync(OUT, { recursive: true, force: true });
mkdirSync(`${OUT}/src`, { recursive: true });

for (const name of readdirSync(".")) {
  if (!SKIP.has(name)) cpSync(name, `${OUT}/${name}`, { recursive: true });
}
cpSync("src/style.css", `${OUT}/src/style.css`);

await build({
  entryPoints: ["src/main.ts"],
  bundle: true,
  format: "iife",
  target: "es2022",
  minify: true,
  sourcemap: "linked",
  outfile: `${OUT}/src/app.js`,
  logLevel: "info",
});
