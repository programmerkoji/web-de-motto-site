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
PUBLIC_CONTACT_FORM_ACTION=https://formspree.io/f/your-form-id
```

ローカルでは `.env` を使い、GitHub Actions では同じ値を Repository Variables に設定します。

## GitHub Actions で自動デプロイ

`main` ブランチに push したタイミングで、GitHub Actions が `npm ci` と `npm run build` を実行し、生成された `dist/` を `rsync` でさくらレンタルサーバーへアップロードします。

追加したワークフローは [deploy.yml](/Users/kojisato/workspace/web_de_motto/main_site/.github/workflows/deploy.yml:1) です。

### 1. SSH 鍵を用意する

ローカルでデプロイ専用鍵を作る例です。

```sh
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/github_actions_sakura
```

- 公開鍵: `~/.ssh/github_actions_sakura.pub`
- 秘密鍵: `~/.ssh/github_actions_sakura`

公開鍵の内容を、さくらレンタルサーバー側の `~/.ssh/authorized_keys` に追加します。

### 2. known_hosts を取得する

GitHub Actions 側で接続先検証に使います。

```sh
ssh-keyscan -p 22 your-server.sakura.ne.jp
```

ポートが 22 以外ならその値に読み替えてください。

### 3. GitHub に Variables を登録する

GitHub の `Settings > Secrets and variables > Actions > Variables` に次を登録します。

- `PUBLIC_SITE_URL`
- `PUBLIC_CONTACT_FORM_ACTION`

これらはビルド時に埋め込まれる公開値なので、Secrets ではなく Variables で問題ありません。

### 4. GitHub に Secrets を登録する

GitHub の `Settings > Secrets and variables > Actions > Secrets` に次を登録します。

- `DEPLOY_HOST`
  - 例: `your-server.sakura.ne.jp`
- `DEPLOY_PORT`
  - 例: `22`
- `DEPLOY_USER`
  - 例: `your_user`
- `DEPLOY_PATH`
  - 例: `/home/your_user/www/`
- `DEPLOY_SSH_PRIVATE_KEY`
  - `~/.ssh/github_actions_sakura` の中身をそのまま貼る
- `DEPLOY_KNOWN_HOSTS`
  - `ssh-keyscan` の出力をそのまま貼る

`DEPLOY_PATH` は、現在 `scp` で `dist/` を置いている公開ディレクトリに合わせてください。

### 5. 動作確認する

`main` に push するか、GitHub の Actions 画面から `Deploy` を手動実行します。

正常なら次の流れで完了します。

- 依存関係をインストール
- Astro をビルド
- `dist/` をサーバーへ差分反映

### 補足

- `--delete` を付けているため、ローカルの `dist/` に存在しない古いファイルはサーバー側からも削除されます
- デプロイ先に末尾スラッシュ付きの公開ディレクトリを指定しておくと意図がずれにくいです
- ブランチを `main` 以外に変えたい場合は [deploy.yml](/Users/kojisato/workspace/web_de_motto/main_site/.github/workflows/deploy.yml:1) の `on.push.branches` を修正してください
