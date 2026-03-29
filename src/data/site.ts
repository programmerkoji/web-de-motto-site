export const siteInfo = {
  name: 'ウェブでもっと',
  concept: '町のIT相談所',
  owner: '代表者名が入ります',
  description:
    '中小企業・個人事業主のための町のIT相談所。Excel自動化、業務改善、Webシステム、ホームページ制作まで、小さなITの困りごとを相談しやすく支援します。',
  contactEmail: import.meta.env.PUBLIC_CONTACT_EMAIL || 'hello@example.com',
};

export const problemItems = [
  '同じ入力作業を毎月手作業でやっている',
  'Excel管理がぐちゃぐちゃでミスが怖い',
  'ホームページを作ったが、更新の仕方がわからない',
  'IT担当者がいなくて、誰に聞いていいか不明',
];

export const services = [
  {
    icon: '💬',
    title: 'IT相談',
    description: 'ツール選定や導入のアドバイスなど、何でも聞ける窓口です。',
    examples: ['業務のIT化相談', 'Excel整理', 'ITツール選定'],
  },
  {
    icon: '⚙️',
    title: '業務自動化',
    description: 'Excel や GAS を活用し、日々のルーチンワークを自動化します。',
    examples: ['Excel自動化', 'CSV処理', 'データ整理'],
  },
  {
    icon: '💻',
    title: '小さなシステム',
    description: '顧客管理や予約管理など、御社に合わせた使いやすい道具を作ります。',
    examples: ['予約管理', '顧客管理', '売上管理'],
  },
  {
    icon: '🌐',
    title: 'Webサイト',
    description: '制作から運用サポートまで。放置状態のサイト改善も対応できます。',
    examples: ['WordPress制作', 'ホームページ修正', '運用サポート'],
  },
];

export const pricingItems = [
  { label: '初回ご相談', price: '無料', note: 'まずは現状整理と方向性の確認から' },
  { label: 'スポット相談', price: '5,000円〜', note: '1時間程度の壁打ちや小さな相談に' },
  { label: '業務改善・自動化', price: '30,000円〜', note: '内容に応じて段階的に対応します' },
  { label: 'システム開発', price: '100,000円〜', note: '要件を整理した上でお見積りします' },
];

export const featureItems = [
  {
    title: '専門用語をできるだけ使わずにお話しします',
    description: '難しい言葉で押し切るのではなく、仕事の流れに合わせてわかる言葉で整理します。',
  },
  {
    title: '小さな困りごとから相談できます',
    description: 'いきなり大きな開発を前提にせず、ちょっとした改善や見直しから始められます。',
  },
  {
    title: '必要なら実装までそのまま進められます',
    description: '相談だけで終わらず、自動化やシステム制作まで一貫して対応可能です。',
  },
];

export const profileItems = [
  'フリーランスエンジニア',
  'Webシステム開発',
  'Laravel / Vue / React',
  'GAS / Excel自動化 / WordPress',
];

export const flowSteps = [
  {
    step: '01',
    title: 'お問い合わせ',
    description: '困っていることを、まとまっていない状態でもお気軽にお送りください。',
  },
  {
    step: '02',
    title: 'ヒアリング',
    description: '現在のやり方や悩みを伺い、どこを整えるとよいかを整理します。',
  },
  {
    step: '03',
    title: 'ご提案',
    description: '小さく始める方法も含めて、無理のない進め方と費用感をご案内します。',
  },
  {
    step: '04',
    title: '作業開始',
    description: '必要な範囲から改善や制作を進め、運用しやすい形に整えます。',
  },
];

export const contactExamples = [
  'Excelを整理したい',
  'IT化を相談したい',
  'Webシステムを作りたい',
];
