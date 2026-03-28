# 町のIT相談所 サイト

Astro と TypeScript で作る、小規模な事業紹介サイトの初期実装です。
ローカルでは軽く開発を進めつつ、将来的に `VPS + Docker + Traefik + Cloudflare` へ移行しやすいよう、静的サイト寄りの構成にしています。

## 初期方針

- Astro 単体で始める
- 依存は増やしすぎない
- スタイルはプレーンな CSS で管理する
- ページ数が少ない間はシンプルに保つ
- 将来の `お知らせ` `コラム` `事例` 追加に備えて content collection を最小構成で入れる

## ディレクトリ構成

```text
/
├── public/
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   └── Header.astro
│   ├── content/
│   │   ├── case-studies/
│   │   ├── columns/
│   │   └── news/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── contact.astro
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css
│   └── content.config.ts
├── .env.example
├── astro.config.mjs
└── package.json
```

## ローカル起動

```sh
npm install
npm run dev
```

ブラウザで `http://localhost:4321` を開いて確認します。

## build

```sh
npm run build
npm run preview
```

`build` で静的出力を確認し、`preview` で本番相当の表示をローカル確認できます。

## 環境変数

`.env.example` を元に `.env` を作成してください。

```env
PUBLIC_SITE_URL=https://example.com
PUBLIC_CONTACT_EMAIL=hello@example.com
```

現時点では最小限ですが、公開 URL や問い合わせ先の切り替えに使えます。

## content collection を入れた理由

今回のサイトは事業紹介が中心ですが、将来的に以下の追加が見えているため、Astro 標準の content collection を最小構成で導入しています。

- お知らせ
- コラム
- 事例

今は空コレクションのままで運用負荷を増やさず、必要になった時点で Markdown を追加して展開できます。

## 今後の本番移行方針

現段階では Astro 単体で十分です。将来の本番移行では、次の順序を想定しています。

1. `PUBLIC_SITE_URL` などの環境変数を本番値へ切り替える
2. `npm run build` で生成した成果物を配信対象にする
3. 必要になった段階で Docker 化する
4. VPS 上で Traefik をリバースプロキシとして置く
5. DNS と HTTPS は Cloudflare 前提で整理する

このサイトは業務アプリではなく静的サイト寄りなので、最初から Docker や複雑なミドルウェアを持ち込まず、配信方式だけ後から差し替えられるコードベースに寄せています。
