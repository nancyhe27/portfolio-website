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
          "result": "結果：37人の回答者のうち32人（86%）が「はい」と回答しました。"
        },
        {
          "title": "機能2：ライブ混雑レベル",
          "image": {
            "src": "/images/projects/project-02/pie/pie2.PNG",
            "alt": "様々な学習エリアのリアルタイム占有レベルを表示するインターフェース"
          },
          "question": "Q：「キャンパスで勉強に適した場所を見つけるのに困難を経験したことがありますか？」",
          "result": "結果：37人の回答者のうち31人（84%）が「はい」と回答しました。"
        }
      ]
    },
    {
      "id": "mindmap",
      "title": "8時間目：マインドマップ",
      "content": "ユーザーリサーチからの洞察を統合し、アプリの機能とユーザーフローを視覚化するための包括的なマインドマップを作成しました。",
      "image": {
        "src": "/images/projects/project-02/mindmap/mindmap.png",
        "alt": "SwipyCampusアプリの機能、ユーザーフロー、機能接続を示すマインドマップ図"
      }
    },
    {
      "id": "sketches",
      "title": "12時間目：初期スケッチ",
      "content": "主要な画面とユーザーフローの手描きスケッチを作成し、アプリの基本構造とナビゲーションパターンを探索しました。",
      "images": [
        {
          "src": "/images/projects/project-02/sketch/home_sketch.png",
          "alt": "メイン建物リストビューを示すホーム画面スケッチ"
        },
        {
          "src": "/images/projects/project-02/sketch/search_sketch.png",
          "alt": "フィルターとカテゴリーオプションを備えた検索機能スケッチ"
        },
        {
          "src": "/images/projects/project-02/sketch/building_sketch.png",
          "alt": "詳細なアクセス情報を示す個別建物ビュースケッチ"
        },
        {
          "src": "/images/projects/project-02/sketch/homelist_sketch.png",
          "alt": "スケジュールされた場所の保存されたリストスケッチ"
        },
        {
          "src": "/images/projects/project-02/sketch/ai_sketch.png",
          "alt": "パーソナライズされた推奨のためのAI機能スケッチ"
        }
      ]
    },
    {
      "id": "prototypes",
      "title": "20時間目：高忠実度プロトタイプ",
      "content": "スケッチをインタラクティブな高忠実度プロトタイプに変換し、アプリの最終的なルック＆フィールとユーザーエクスペリエンスを実証しました。",
      "prototypeSections": [
        {
          "title": "プロトタイプセクション1",
          "images": [
            "/images/projects/project-02/prototype/1/proto1_1.png",
            "/images/projects/project-02/prototype/1/proto1_2.png",
            "/images/projects/project-02/prototype/1/proto1_3.png",
            "/images/projects/project-02/prototype/1/proto1_4.png"
          ]
        },
        {
          "title": "プロトタイプセクション2", 
          "images": [
            "/images/projects/project-02/prototype/2/proto2_1.png",
            "/images/projects/project-02/prototype/2/proto2_2.png",
            "/images/projects/project-02/prototype/2/proto2_3.png"
          ]
        },
        {
          "title": "プロトタイプセクション3",
          "images": [
            "/images/projects/project-02/prototype/3/proto3_1.png",
            "/images/projects/project-02/prototype/3/proto3_2.png",
            "/images/projects/project-02/prototype/3/proto3_3.png",
            "/images/projects/project-02/prototype/3/proto3_4.png"
          ]
        },
        {
          "title": "プロトタイプセクション4",
          "images": [
            "/images/projects/project-02/prototype/4/proto4_1.png",
            "/images/projects/project-02/prototype/4/proto4_2.png",
            "/images/projects/project-02/prototype/4/proto4_3.png",
            "/images/projects/project-02/prototype/4/proto4_4.png"
          ]
        },
        {
          "title": "プロトタイプセクション5",
          "images": [
            "/images/projects/project-02/prototype/5/proto5_1.png",
            "/images/projects/project-02/prototype/5/proto5_2.png",
            "/images/projects/project-02/prototype/5/proto5_3.png",
            "/images/projects/project-02/prototype/5/proto5_4.png"
          ]
        }
      ]
    },
    {
      "id": "improvements",
      "title": "28時間目：デザイン改良",
      "content": "ユーザビリティテストとチームフィードバックに基づいて、アプリのビジュアルデザインと機能性を向上させるための戦略的改良を実装しました。",
      "improvements": [
        {
          "title": "ホーム画面の改良",
          "before": "/images/projects/project-02/improve/home_before.png",
          "after": "/images/projects/project-02/improve/home_after.png",
          "description": "情報階層を改善し、アクセス状況を明確にし、ナビゲーションを簡素化しました。"
        },
        {
          "title": "カラーコーディングシステム",
          "before": "/images/projects/project-02/improve/colorcode_before.png", 
          "after": "/images/projects/project-02/improve/colorcode_after.png",
          "description": "アクセス可能性とアクセス不可能性を示すより直感的なカラーコーディングシステムを実装しました。"
        }
      ]
    },
    {
      "id": "mascot",
      "title": "32時間目：マスコットデザイン",
      "content": "SwipyCampusアプリにフレンドリーで親しみやすい個性を与えるため、「Swipy」マスコットキャラクターを作成しました。",
      "mascotVariations": [
        {
          "color": "グレー",
          "image": "/images/projects/project-02/swipy/gray_swipy.PNG",
          "description": "デフォルトのニュートラル状態"
        },
        {
          "color": "グリーン", 
          "image": "/images/projects/project-02/swipy/green_swipy.PNG",
          "description": "アクセス可能/利用可能状態"
        },
        {
          "color": "レッド",
          "image": "/images/projects/project-02/swipy/red_swipy.PNG", 
          "description": "アクセス不可/利用不可状態"
        },
        {
          "color": "イエロー",
          "image": "/images/projects/project-02/swipy/yellow_swipy.PNG",
          "description": "制限付き/部分アクセス状態"
        }
      ]
    }
  ]
};
