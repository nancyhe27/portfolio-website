export const project02Data = {
  "id": 2,
  "title": "SwipyCampus",
  "duration": "2025年2月",
  "platform": "iOS",
  "task": "モバイルアプリのアイデア創出・デザイン",
  "collaborators": [
    "Laura Chirila",
    "Ana Urruticoechea Hurtado",
    "Grace Yang"
  ],
  "methods": [
    "混合方法ユーザーリサーチ",
    "文脈調査",
    "ユーザビリティテスト",
    "ラピッドプロトタイピング",
    "ワイヤーフレーミング"
  ],
  "tools": [
    "Figma",
    "Procreate",
    "IMovie"
  ],
  "overview": "2025年春、私は36時間のRice Designathonに参加しました。これは、日常の課題を革新的な方法で解決するモバイルアプリをデザインする全米規模のチャレンジです。2日間でチームはユーザーリサーチを行い、機能するプロトタイプを設計し、プロモーション動画を制作し、さらに審査員への15分間のピッチまでやり遂げました。そこで開発したのが「SwipyCampus」。制限時間やID制限によりアクセスが制限される建物や入口のリアルタイム状況を表示し、学生の無駄な移動を防ぐアプリです。最終的に、SwipyCampusは101チーム中2位に選ばれました。",
  "description": {
    "text": "SwipyCampusは、建物・入口のリアルタイムアクセス、ライブ混雑度、詳細な場所情報を1つのアプリで提供し、学生がキャンパスをより効率的にナビゲートできるよう支援します。",
    "logo": {
      "src": "/images/projects/project-02/header/logo.png",
      "alt": "Swipyマスコットキャラクターを特徴とするSwipyCampusアプリのロゴ",
    }
  },
  "heroImage": "/images/projects/project-02/header/swipycampus_header_test2.png",
  "sections": [
    {
      "id": "ideation",
      "title": "1時間目：アイデア創出",
      "content": "多くの大学生にとって、夜間や悪天候の中で建物まで歩いたのに、入口が営業時間外やID制限で施錠されているのを知る——そんな経験は珍しくありません。信頼できるリアルタイム情報がなければ、複数のドアを試したり、別の学習場所を探したりして時間を浪費してしまいます。SwipyCampusは各入口のライブステータスに加えて、混雑度やWi-Fi／電源の有無などの場所情報を表示することで、この問題を解決します。静かなソロ作業のコーナーでも、グループコラボに向いたカフェ風スペースでも、推測に頼らず見つけられます。"
    },
    {
      "id": "user_research",
      "title": "4時間目：ユーザーリサーチ",
      "content": "キャンパス全体で37名の学生に調査を行い、入口制限による建物アクセスの難しさと、適切な学習スペースの発見の難しさという2つの主要課題を特定しました。これらを中核機能の焦点としました。",
      "features": [
        {
          "title": "機能1：リアルタイム場所アクセス情報",
          "image": {
            "src": "/images/projects/project-02/pie/pie1.PNG",
            "alt": "ドアの利用可能性インジケーターを備えたリアルタイム建物アクセス状況を示すユーザーインターフェースモックアップ"
          },
          "question": "Q：「制限されたドアアクセスのために、キャンパスの建物や部屋に入れなかった経験はありますか？」",
          "quote": "ある夜、−30°の天候の中を静かな学習場所まで20分歩いたのに、施錠されていました。諦めて家に帰りました。"
        },
        {
          "title": "機能2：学習スポット推奨",
          "image": {
            "src": "/images/projects/project-02/pie/pie2.PNG",
            "alt": "混雑度と設備情報を含む学習スペース推奨を表示するアプリインターフェース"
          },
          "question": "Q：「キャンパスで自分に合った学習スペースを見つけるのに、どのくらい苦労しますか？」",
          "quote": "人気スポットはたいてい満席で、試行錯誤でさまよい歩くことになります。"
          }
      ],
      "insights": "2つの主要課題に加えて、建物ナビゲーションに関する詳細も浮き彫りになりました。学生の70.3%が、特定の時間にどの入口が開いているか分からないと回答し、半数超（54.1%）がリアルタイムのドアアクセス情報の不足を挙げました。多くの学生（75.7%）は開いているドアを見つけるために試行錯誤に頼っており、10〜20分を費やすことがよくあります。アクセス問題は、ID制限のある研究室、スタジオ、専門施設で最も多く報告されました。"
    },
    {
      "id": "wireframes",
      "title": "8時間目：ワイヤーフレーム＆改良",
      "subsections": [
        {
          "title": "機能マップ",
          "images": [
            {
              "src": "/images/projects/project-02/mindmap/mindmap.png",
              "alt": "機能マップ",
            }
          ]
        },
        {
          "title": "低忠実度ワイヤーフレーム",
          "images": [
            {
              "src": "/images/projects/project-02/sketch/home_sketch.png",
              "alt": "ホーム（マップビュー）",
            },
            {
              "src": "/images/projects/project-02/sketch/search_sketch.png",
              "alt": "検索",
            },
            {
              "src": "/images/projects/project-02/sketch/building_sketch.png",
              "alt": "場所",
            },
            {
              "src": "/images/projects/project-02/sketch/homelist_sketch.png",
              "alt": "ホーム（リストビュー）",
            },
            {
              "src": "/images/projects/project-02/sketch/ai_sketch.png",
              "alt": "AIチャットボット",
            }
          ]
        },
        {
          "title": "UI/UX改良",
          "comparisons": [
            {
              "before": {
                "src": "/images/projects/project-02/improve/home_before.png",
                "alt": "ホーム（改良前）",
                "caption": "ホーム（改良前）"
              },
              "after": {
                "src": "/images/projects/project-02/improve/home_after.png",
                "alt": "ホーム（改良後）",
                "caption": "ホーム（改良後）"
              },
              "subtitle": "ナビゲーションの統合",
              "description": "ホームに散在していたボタンをナビゲーションバーに集約。導線を明快にし、タスクの分離により混乱を軽減しました."
            },
            {
              "before": {
                "src": "/images/projects/project-02/improve/colorcode_before.png",
                "alt": "建物情報（改良前）",
                "caption": "建物情報（改良前）"
              },
              "after": {
                "src": "/images/projects/project-02/improve/colorcode_after.png",
                "alt": "建物情報（改良後）",
                "caption": "建物情報（改良後）"
              },
              "subtitle": "コンテキスト情報の強化",
              "description": "従来は建物ページに一般的なアクセス情報のみを表示していました。更新ではドア単位のアクセス情報とライブ混雑度を追加し、ズーム時のマップ余白を活用して、多くの場合ページを開かずに主要情報を確認できるようにしました。"
            }
          ]
        }
      ]
    },
    {
      "id": "mascot_design",
      "title": "16時間目：ブランディング",
      "quote": "正直、必要がなければしばらくすると使うのを忘れてしまうかも。",
      "content": "テスト中、ある学生から「アプリを定期的に使うのを忘れるかもしれない」との指摘がありました。エンゲージメントを高め、感情的なつながりを強くするため、アプリのパーソナリティ兼アシスタントとしてマスコットを導入しました。",
      "mascot": {
        "name": "Swipy the Agent",
        "description": "Swipyは建物にスワイプして入る学生IDカードから着想を得たキャラクターで、状態は4種類（開放・現在アクセス不可・禁止・不明）に色分けされています。各場所やドアの横に表示され、素早くアクセス可否を確認できます。さらに仮想エージェントとして、ユーザーのニーズに基づく学習スポットを提案します。",
        "states": [
          {
            "name": "開放",
            "src": "/images/projects/project-02/swipy/green_swipy.PNG",
            "alt": "開放",
            "caption": "開放"
          },
          {
            "name": "現在アクセス不可",
            "src": "/images/projects/project-02/swipy/yellow_swipy.PNG",
            "alt": "現在アクセス不可",
            "caption": "現在アクセス不可"
          },
          {
            "name": "禁止",
            "src": "/images/projects/project-02/swipy/red_swipy.PNG",
            "alt": "禁止",
            "caption": "禁止"
          },
          {
            "name": "不明",
            "src": "/images/projects/project-02/swipy/gray_swipy.PNG",
            "alt": "不明",
            "caption": "不明"
          }
        ]
      }
    },
    {
      "id": "prototype",
      "title": "18時間目：プロトタイプ",
      "cta": "プロトタイプを体験してください！",
      "flows": [
        {
          "title": "サインアップ／サインイン＋ID認証",
          "images": [
            "/images/projects/project-02/prototype/1/welcome.png",
            "/images/projects/project-02/prototype/1/sign_up.png",
            "/images/projects/project-02/prototype/1/student_id.png",
            "/images/projects/project-02/prototype/1/sign_in.png"
          ]
        },
        {
          "title": "オンボーディング",
          "images": [
            "/images/projects/project-02/prototype/2/onboarding1.png",
            "/images/projects/project-02/prototype/2/onboarding2.png",
            "/images/projects/project-02/prototype/2/onboarding3.png"
          ]
        },
        {
          "title": "ホーム（リストビュー）＋ステータス更新",
          "images": [
            "/images/projects/project-02/prototype/3/home.png",
            "/images/projects/project-02/prototype/3/kraft_hall.png",
            "/images/projects/project-02/prototype/3/update_status1.png",
            "/images/projects/project-02/prototype/3/update_status2.png"
          ]
        },
        {
          "title": "ホーム（マップビュー）＋検索",
          "images": [
            "/images/projects/project-02/prototype/4/map.png",
            "/images/projects/project-02/prototype/4/filter.png",
            "/images/projects/project-02/prototype/4/search.png",
            "/images/projects/project-02/prototype/4/map_kraft_hall.png"
          ]
        },
        {
          "title": "AIエージェント＋プロフィール",
          "images": [
            "/images/projects/project-02/prototype/5/ai1.png",
            "/images/projects/project-02/prototype/5/ai2.png",
            "/images/projects/project-02/prototype/5/ai3.png",
            "/images/projects/project-02/prototype/5/profile.png"
          ]
        }
      ]
    },
    {
      "id": "promotion",
      "title": "30時間目：プロモーション",
      "video": {
        "url": "https://www.youtube.com/watch?v=L9rcY-laK-w",
        "title": null
      }
    }
  ],
  "route": "/project-02",
  "thumbnail": "project-thumb-02.png"
}