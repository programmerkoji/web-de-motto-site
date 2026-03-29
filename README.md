# ウェブでもっと | 町のIT相談所サイト

Astro + Tailwind CSS で構築した、小規模事業者向けの事業サイトです。
`design.html` のトーンをベースに、営業サイトとして使いやすい Astro 構成へ載せ替えています。

## ローカル起動

```sh
npm install
npm run dev
```

## build

```sh
npm run build
npm run preview
```

## ディレクトリ構成

```text
src/
├── components/
│   ├── layout/
│   │   ├── Footer.astro
│   │   └── Header.astro
│   ├── sections/
│   │   ├── CtaSection.astro
│   │   ├── FeaturesSection.astro
│   │   ├── FlowSection.astro
│   │   ├── HeroSection.astro
│   │   ├── PricingSection.astro
│   │   ├── ProblemsSection.astro
│   │   ├── ProfileSection.astro
│   │   └── ServicesSection.astro
│   └── ui/
│       ├── PrimaryLink.astro
│       └── SectionHeading.astro
├── content/
│   ├── cases/
│   └── columns/
├── data/
│   └── site.ts
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── contact.astro
│   └── index.astro
├── styles/
│   └── global.css
└── content.config.ts
```

## 実装方針

- `design.html` の配色・余白・軽さを Astro コンポーネントへ落とし込む
- トップページの各セクションは `src/components/sections` に分割する
- ボタンや見出しなどの最小単位は `src/components/ui` に寄せる
- 共通ヘッダー・フッターは `src/components/layout` へ分ける
- 文言や一覧データは `src/data/site.ts` にまとめて後から調整しやすくする
- 将来の `事例` `コラム` 追加に備えて Content Collections を用意する

## content collections

現在は次の2コレクションを用意しています。

- `cases`
  - 将来の事例一覧 `/cases`
  - 将来の事例詳細 `/cases/[slug]`
- `columns`
  - 将来のコラム一覧 `/columns`
  - 将来のコラム詳細 `/columns/[slug]`

サンプル Markdown を 1 件ずつ配置しているため、一覧ページと詳細ページを追加すればすぐ展開できます。

## 環境変数

```env
PUBLIC_SITE_URL=https://example.com
PUBLIC_CONTACT_EMAIL=hello@example.com
```
