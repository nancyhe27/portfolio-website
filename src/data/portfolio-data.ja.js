export const portfolioData = {
  hero: {
    name: "Nancy",
    title: "プログラマー、デザイナー、フルスタック開発者",
    subtitle: "ライス大学 コンピューターサイエンス・アジア研究専攻3年生",
    description: "きれいなコードと直感的なデザインを組み合わせた、思慮深いエンドツーエンド製品を作成します。",
    image: "/images/portfolio_hero.PNG"
  },

  projects: [
    {
      id: 1,
      title: "WeKruit",
      subtitle: "2025年5月 - 2025年8月",
      task: "インターンシップ（UI/UX + フルスタック開発）",
      thumbnail: "/images/projects/project-01/thumbnails/wekruit_thumbnail.png",
      hoverThumbnail: "/images/projects/project-01/thumbnails/wekruit_thumbnail_hover.png",
      route: "/wekruit",
    },
    {
      id: 2,
      title: "SwipyCampus",
      subtitle: "2025年2月",
      task: "モバイルアプリデザイン",
      thumbnail: "/images/projects/project-02/thumbnails/swipycampus_thumbnail.png",
      hoverThumbnail: "/images/projects/project-02/thumbnails/swipycampus_thumbnail_hover.png",
      route: "/swipycampus"
    },
    {
      id: 3,
      title: "RideSystems",
      subtitle: "2024年9月 - 2024年12月",
      task: "モバイルアプリデザイン",
      thumbnail: "/images/projects/project-03/thumbnails/project-thumb-03.png",
      hoverThumbnail: "/images/projects/project-03/thumbnails/project-thumb-03-hover.png",
      route: "/ridesystems",
      comingSoon: true
    },
    {
      id: 4,
      title: "English Hunt",
      subtitle: "2024年11月 - 2024年12月",
      task: "ウェブゲーム開発",
      thumbnail: "/images/projects/project-04/thumbnails/project-thumb-04.png",
      hoverThumbnail: "/images/projects/project-04/thumbnails/project-thumb-04-hover.png",
      route: "/englishhunt",
      comingSoon: true
    },
    {
      id: 5,
      title: "ColorGraph AI",
      subtitle: "2024年9月 - 現在",
      task: "AIデザインツールスタートアップ",
      thumbnail: "/images/projects/project-05/thumbnails/project-thumb-05.png",
      hoverThumbnail: "/images/projects/project-05/thumbnails/project-thumb-05-hover.png",
      route: "/colorgraphai",
      comingSoon: true
    },
  ],

  skills: {
    programming_languages: [
      "Python、Java、JavaScript、TypeScript、HTML/CSS、SQL"
    ],
    frameworks_and_tools: [
      "React、Node.js、Express.js、Firebase、GitHub、Tailwind CSS、\nFigma、Adobe Creative Suite（Illustrator、Photoshop、InDesign）、Procreate、Canva"
    ],
    specialties: [
      "フルスタック開発、REST API・データベース設計、レスポンシブUI工学、UX主導のフロントエンド設計、クラウドデプロイ・Git協力"
    ]
  },

  about: {
    // About.jsコンポーネント用のメイン説明
    description: "上海で生まれ、ヒューストンを拠点に、私はデザインと開発の間で時間を分けています。Figmaでのプロトタイピングからレスポンシブインターフェースの構築、AI搭載ブラウザツールの実験まで、論理と美学の交差点に位置するプロジェクトに惹かれています。",
    
    // About.jsコンポーネント用のアート関連説明
    artDescription: "幼い頃から様々な媒体でアートを作ってきました。油絵、パステル、コラージュ、デジタルイラストレーションなど、その一部をここに示しています。その後、コンピューターサイエンスを学び、プログラミングがこれまで以上に強力な創造的構造を与えてくれることに気づきました。それは現代のコンテキストでの創造について、視覚、論理、システムがすべて体験を形作る中での私の考え方を広げました。",
    
    // MainContentのaboutセクション用の追加段落
    workDescription: "今、私はFigmaとIDEの間を流暢に行き来し、物事がどのように振る舞い、どのようにスケールし、人々が最初のインタラクションから最後まで どのように体験するかについて考えています。私は物事がどう見えるか、どう機能するか、そしてなぜ存在するかを等しく重視しています。",
    
    languageDescription: "授業や仕事以外では、言語学習を愛しています。私は中国語、英語、日本語、上海語、そして少し韓国語を話します。言語学習は、言語構造と人々とのつながりに対する自然な好奇心を育み、カジュアルなユーザーエクスペリエンス思考の良い相棒となっています。音楽もそのプロセスを助けてくれます（J-popとK-popの大ファンです）。",
    
    // About.jsコンポーネント用の画像データ
    personalImages: [
      { src: "/images/about/campanile1.jpg", alt: "ライス大学年鑑カンパニーレ（デジタル）の表紙" },
      { src: "/images/about/food2.jpg", alt: "「独断主義のレシピ」（油絵）" },
      { src: "/images/about/wordplay3.jpg", alt: "「言葉遊び」（ミクストメディア）" },
      { src: "/images/about/physics4.jpg", alt: "「コンフォジックス」（アクリル）" }
    ],
    
    artImages: [
      { src: "/images/about/food2.jpg", alt: "「独断主義のレシピ」（油絵）" },
      { src: "/images/about/wordplay3.jpg", alt: "「言葉遊び」（ミクストメディア）" },
      { src: "/images/about/physics4.jpg", alt: "「コンフォジックス」（アクリル）" }
    ]
  },
};
