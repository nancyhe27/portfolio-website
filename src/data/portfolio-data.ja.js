export const portfolioData = {
  hero: {
    name: "何遠です。",
    title: "プログラマー、デザイナー、そしてフルスタックでプロダクトをつくる人です。",
    subtitle: "ライス大学でコンピュータサイエンスとアジア研究を専攻している学部3年生です。",
    description: "コードの美しさとデザインの直感性を重ね合わせ、端から端まで一貫した体験を届けています。",
    image: "/images/portfolio_hero.PNG"
  },

  projects: [
    {
      id: 1,
      title: "WeKruit",
      subtitle: "2025年5月 - 2025年8月",
      task: "インターンシップ（UI/UX + 開発）",
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
      "Python、Java、JavaScript、TypeScript、Go、C、HTML/CSS、SQL"
    ],
    frameworks_and_tools: [
      "React、Node.js、Express.js、Firebase、GitHub、Tailwind CSS、\nFigma、Adobe Creative Suite（Illustrator、Photoshop、InDesign）、Procreate、Canva"
    ],
    specialties: [
      "UXリサーチとヒューマン・コンピュータ・インタラクション手法、ユーザーエクスペリエンスデザイン、インタラクティブなWeb・モバイルアプリの設計、レスポンシブUI設計とフロントエンド実装、フルスタック開発と情報設計、クラウド環境でのデプロイとチーム共同開発"
    ]
  },

  about: {
    // About.jsコンポーネント用のメイン説明
    description: "上海で生まれ、ヒューストンを拠点に、デザインと開発の両方に時間を注いでいます。論理と美しさ、その交わる場所にあるプロジェクトに心を惹かれてきました。Figmaでのプロトタイピングから、レスポンシブなUI構築、AIを使ったブラウザツールの実験まで、そんな領域でのものづくりを楽しんでいます。",
    
    // About.jsコンポーネント用のアート関連説明
    artDescription: "子どものころから油絵、パステル、コラージュ、デジタルイラストなど、さまざまな表現に夢中でした。その後コンピュータサイエンスを学び、プログラミングが自分に新しい「創造のための構造」を与えてくれることに気づきました。現代の創作では、ビジュアルも、論理も、システムも、すべてが体験を形づくるという視点を得たのです。",
    
    // MainContentのaboutセクション用の追加段落
    workDescription: "いまはFigmaとIDEを自由に行き来しながら、プロダクトの動き方やスケーラビリティ、そしてユーザーが最初から最後までどう体験するかを考えています。見た目、仕組み、存在する理由──その三つを常に並べて考え、同じ重みで判断しています。",
    
    languageDescription: "授業や仕事の時間以外は、よく語学の勉強をしています。マンダリンや上海語、英語、日本語に加えて、少しだけ韓国語も話せます。新しい言葉を学ぶたびに、その裏にある仕組みや文化の違いに気づけるのがすごく面白いんです。何より、人とつながれる喜びが大きくて、その体験が自然にUXの考え方にもつながっている気がします。音楽もその助けになります（J-POPやK-POPの大ファンなんです）。",
    
    // About.jsコンポーネント用の画像データ
    personalImages: [
      { src: "/images/about/campanile1.jpg", alt: "ライス大学年鑑カンパニーレの表紙（デジタルアート）" },
      { src: "/images/about/food2.jpg", alt: "「独断主義のレシピ」（油絵）" },
      { src: "/images/about/wordplay3.jpg", alt: "「言葉遊び」（ミクストメディア）" },
      { src: "/images/about/physics4.jpg", alt: "「コンフォジックス」（アクリル画）" }
    ],
    
    artImages: [
      { src: "/images/about/food2.jpg", alt: "「独断主義のレシピ」（油絵）" },
      { src: "/images/about/wordplay3.jpg", alt: "「言葉遊び」（ミクストメディア）" },
      { src: "/images/about/physics4.jpg", alt: "「コンフォジックス」（アクリル画）" }
    ]
  },
};
