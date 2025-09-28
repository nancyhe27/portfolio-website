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
};
