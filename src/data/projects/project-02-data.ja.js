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
  "overview": "2025年春、私は36時間のRice Designathonに参加しました。これは日常の問題を革新的な方法で解決するモバイルアプリをデザインする全国規模のチャレンジです。2日間で、チームはユーザーリサーチを実施し、機能的なプロトタイプを設計し、プロモーションビデオを作成し、審査員パネルに15分間のピッチを行いました。私たちは、制限時間やIDベースのアクセスによって影響を受けるキャンパスの建物や入り口のリアルタイムアクセス情報を表示することで、無駄な移動を防ぐアプリ「SwipyCampus」を開発しました。SwipyCampusは101の参加チーム中2位を獲得しました。",
  "description": {
    "text": "SwipyCampusは、リアルタイムの建物・入り口アクセス、ライブ混雑レベル、詳細な場所情報を1つのアプリで提供することで、学生がキャンパスをより効率的にナビゲートするのを支援します。",
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
      "content": "多くの大学生にとって、時には夜間や悪天候の中で建物まで歩いて行ったものの、制限時間やIDベースのアクセスのために入り口が施錠されていることを発見するのは、よくある困惑です。信頼できるリアルタイム情報がなければ、複数のドアを試したり、代替の学習場所を探したりして時間を無駄にします。SwipyCampusは、各キャンパス入り口のライブステータスを、混雑レベルやWi-Fiやコンセントの利用可能性などの詳細な場所情報とともに表示することで、この問題を解決するために設計されました。静かな個人作業のコーナーが必要でも、グループコラボレーションのための活気あるカフェスタイルのスペースが必要でも、SwipyCampusは推測なしで見つけるのを手助けします。"
    },
    {
      "id": "user_research",
      "title": "4時間目：ユーザーリサーチ",
      "content": "37人の大学生を対象にキャンパス全体の調査を実施し、制限された入り口による建物へのアクセスの困難と、適切な学習スペースを見つけることの困難という2つの主要な問題を明らかにしました。これらが私たちのコア機能の焦点となりました。",
      "features": [
        {
          "title": "機能1：リアルタイム場所アクセス情報",
          "image": {
            "src": "/images/projects/project-02/pie/pie1.PNG",
            "alt": "ドアの利用可能性インジケーターを備えたリアルタイム建物アクセス状況を示すユーザーインターフェースモックアップ"
          },
          "question": "Q：「制限されたドアアクセスのためにキャンパスの建物や部屋へのアクセスに困難を経験したことがありますか？」",
          "quote": "ある夜、-30°の天候の中を静かな学習場所まで20分歩いたのに、施錠されていることがわかりました。諦めて代わりに家に帰りました。"
        },
        {
          "title": "機能2：学習スポット推奨",
          "image": {
            "src": "/images/projects/project-02/pie/pie2.PNG", 
            "alt": "混雑レベルと設備情報を含む学習スペース推奨を表示するアプリインターフェース"
          },
          "question": "Q：「キャンパスで適切な学習スペースを見つけるのにどの程度困難を経験しますか？」",
          "quote": "人気のスポットはしばしば満員で、試行錯誤で学習スペースを探してさまよい歩くことになります。"
        }
      ],
      "insights": "2つの主要な問題に加えて、調査回答はキャンパス建物のナビゲーションにおける追加の詳細を浮き彫りにしました。学生の70.3%が特定の時間にどの入り口が開いているかを知らないと回答し、半数以上（54.1%）がリアルタイムドアアクセス情報の不足を挙げました。ほとんどの学生（75.7%）が開いているドアを見つけるために試行錯誤に頼っており、しばしば10〜20分を探索に費やしています。アクセス問題は、ID制限のある研究室、スタジオ、専門施設で最も頻繁に報告されました。"
    },
    {
      "id": "wireframes",
      "title": "8時間目：ワイヤーフレーム & 改良",
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
              "subtitle": "ナビゲーション統合",
              "description": "ホームページの散らばったボタンをナビゲーションバーに置き換え、ナビゲーションを明確にし、タスクのより明確な分離により混乱を減らしました。"
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
              "subtitle": "文脈データ強化",
              "description": "以前は、建物ページは一般的なアクセス情報のみを表示していました。更新では、ドア固有のアクセスとライブ混雑詳細を追加し、ズームイン時の追加マップスペースを使用することで、ユーザーはページを開かずにすべての主要情報を表示できることが多くなります。"
            }
          ]
        }
      ]
    },
    {
      "id": "mascot_design",
      "title": "16時間目：ブランディング",
      "quote": "正直に言うと、必要でない限り、しばらくするとそれを使うのを忘れてしまうでしょう。",
      "content": "テスト中、ある学生がユーザーが定期的にアプリを使用することを忘れる可能性があることを指摘しました。エンゲージメントを高め、より強い感情的つながりを築くため、アプリのパーソナリティとアシスタントとしてマスコットを導入しました。",
      "mascot": {
        "name": "Swipy the Agent",
        "description": "Swipyは建物にスワイプして入るのに使用される学生IDカードからインスピレーションを得ており、4つのカラーコード化された状態があります：開放、現在アクセス不可、禁止、不明。これらのアイコンは各場所とドアの横に表示され、迅速なアクセスチェックが可能で、Swipyはアプリの仮想エージェントとしても機能し、ユーザーのニーズに基づいて学習スポットを推奨します。",
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
          "title": "サインイン/アップ + ID認証",
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
          "title": "ホーム（リストビュー） + ステータス更新",
          "images": [
            "/images/projects/project-02/prototype/3/home.png",
            "/images/projects/project-02/prototype/3/kraft_hall.png",
            "/images/projects/project-02/prototype/3/update_status1.png",
            "/images/projects/project-02/prototype/3/update_status2.png"
          ]
        },
        {
          "title": "ホーム（マップビュー） + 検索",
          "images": [
            "/images/projects/project-02/prototype/4/map.png",
            "/images/projects/project-02/prototype/4/filter.png",
            "/images/projects/project-02/prototype/4/search.png",
            "/images/projects/project-02/prototype/4/map_kraft_hall.png"
          ]
        },
        {
          "title": "AIエージェント + プロフィール",
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