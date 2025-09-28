export const project01Data = {
  "id": 1,
  "title": "WeKruit", 
  "duration": "2025年4月 – 2025年8月",
  "platform": "デスクトップ",
  "task": "UI/UXエンジニアリング・SDE インターンシップ",
  "collaborators": [
    "Adam Yang（メンター）",
    "Noah Liu",
    "Brandon Saunders", 
    "Shenyu Zhang",
    "Bingxi Liu"
  ],
  "programming": ["JavaScript", "TypeScript", "HTML/CSS", "Python"],
  "tools": [
    "Figma",
    "React",
    "Tailwind CSS", 
    "Firebase",
    "GitHub",
    "ClickUp"
  ],
  "overview": "2025年夏、WeKruitでUI/UXフルスタック開発者インターンとして勤務しました。WeKruitは企業と学生向けのAI面接プラットフォームを構築するSaaSスタートアップです。私の役割はデザインとエンジニアリングを組み合わせ、ユーザーフローのマッピングからフルスタック機能の実装まで行いました。10週間で、クライアント向け面接ダッシュボード、AIエージェント面接プロセス、WeKruitデザインシステム、プロトタイプを洗練された製品に変換するUI/UX改良に貢献しました。これらの取り組みにより、3つのクライアント企業で1,000件以上の面接のレビューと準備プロセスが合理化され、100人以上の学生がモック セッションをよりスムーズに実行できるようになりました。",
  "heroImage": "/images/projects/project-01/header/hero.png",
  "sections": [
    {
      "id": 1,
      "title": "メイン製品：クライアント向けダッシュボード",
      "subsections": [
        {
          "id": 1,
          "subtitle": "プロトタイプデザイン",
          "paragraphs": [
            "チームマネージャーと機能要件を明確にすることから始めました。主要なユーザーフローをマッピングし、低忠実度ワイヤーフレームを作成し、インタラクティブプロトタイプを反復して、画面と機能の接続方法を定義しました。複数回のフィードバックにより、プロトタイプを明確でテスト可能なデザインに改良しました。",
            "機密性により、完全なワークフロー図を共有することはできません。代わりに、私の貢献を説明するために、代表的なUIフローとコンポーネントの改良を含めました。"
          ],
          "imageGroups": [
            {
              "title": "フロー1：面接ダッシュボード",
              "description": "このフローを設計して、リクルーターをダッシュボード概要から個別の面接に導きます。デザインは候補者データ、トランスクリプト、録画を一元化し、コンテキストスイッチを減らし、1,000件以上の面接のレビューを合理化します。",
              "steps": [
                {
                  "title": "ステップ1：面接ダッシュボード",
                  "description": "リクルーターは面接時間、期間、録画への直接リンクを含む候補者リストを見ます。"
                },
                {
                  "title": "ステップ2.1：音声面接を表示", 
                  "description": "音声のみの面接では、リクルーターは迅速なレビューのために再生と同期されたタイムスタンプ付きトランスクリプトを見ます。"
                },
                {
                  "title": "ステップ2.2：ビデオ面接を表示",
                  "description": "ビデオ面接では、画面は分割され、左側にビデオ、右側にトランスクリプトが表示され、視覚的手がかりとテキストレビューの両方が可能になります。"
                }
              ],
              "images": [
                {
                  "src": "/images/projects/project-01/main_product/flow1/1.png",
                  "alt": "WeKruit プロトタイプデザインワイヤーフレーム",
                  "caption": "ステップ1：面接ダッシュボード"
                },
                {
                  "src": "/images/projects/project-01/main_product/flow1/2.png", 
                  "alt": "WeKruit プロトタイプデザインワイヤーフレーム",
                  "caption": "ステップ2.1：音声面接を表示"
                },
                {
                  "src": "/images/projects/project-01/main_product/flow1/3.png",
                  "alt": "WeKruit プロトタイプデザインワイヤーフレーム", 
                  "caption": "ステップ2.2：ビデオ面接を表示"
                }
              ]
            },
            {
              "title": "フロー2：候補者オンボーディング",
              "description": "学生が面接の準備をするためのダッシュボードを設計しました。このフローは、モック面接の実行から詳細な結果とフィードバックの確認まで、学生をガイドします。",
              "steps": [
                {
                  "title": "ステップ1：準備ダッシュボード",
                  "description": "学生は利用可能なモック面接、完了した面接、および進行状況を見ます。"
                },
                {
                  "title": "ステップ2：面接質問を生成",
                  "description": "学生は面接タイプ（技術、行動、ケーススタディ）を選択し、難易度レベルを設定します。"
                },
                {
                  "title": "ステップ3：候補者ダッシュボード",
                  "description": "学生はAIエージェントとのライブ面接を実行し、リアルタイムのフィードバックを受けます。"
                },
                {
                  "title": "ステップ4：面接招待を送信",
                  "description": "面接後、学生は詳細な分析、スコア、改善のための具体的な推奨事項を受け取ります。"
                }
              ],
              "images": [
                {
                  "src": "/images/projects/project-01/main_product/flow2/1.png",
                  "alt": "インタラクティブプロトタイプ画面",
                  "caption": "ステップ1：準備ダッシュボード"
                },
                {
                  "src": "/images/projects/project-01/main_product/flow2/2.png",
                  "alt": "インタラクティブプロトタイプ画面",
                  "caption": "ステップ2：面接質問を生成"
                },
                {
                  "src": "/images/projects/project-01/main_product/flow2/3.png", 
                  "alt": "コンポーネントリファインメントプロセス",
                  "caption": "ステップ3：候補者ダッシュボード"
                },
                {
                  "src": "/images/projects/project-01/main_product/flow2/4.png",
                  "alt": "最終プロトタイプモックアップ",
                  "caption": "ステップ4：面接招待を送信"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "subtitle": "プロトタイプ開発",
          "paragraphs": [
            "デザインフェーズ後、プロトタイプを実装に移しました。React コンポーネントの構築、状態管理の設定、Firebase との統合を行い、実際のデータフローとユーザーインタラクションをテストしました。"
          ]
        }
      ]
    },
    {
      "id": 2,
      "title": "デザインシステム",
      "paragraphs": [
        "WeKruit の製品スイート全体で一貫性を確保するため、包括的なデザインシステムを開発しました。"
      ],
      "subsections": [
        {
          "id": 1,
          "subtitle": "ユニバーサルスタイル定義",
          "paragraphs": [
            "タイポグラフィ、カラー、スペーシングの基準を定義し、すべてのプラットフォームでの一貫性を確保しました。"
          ],
          "images": [
            {
              "src": "/images/projects/project-01/design_system/colors-old.png",
              "alt": "WeKruit タイポグラフィ",
              "caption": "WeKruit タイポグラフィ"
            },
            {
              "src": "/images/projects/project-01/design_system/fonts-old.png",
              "alt": "WeKruit タイポグラフィ",
              "caption": "WeKruit フォント"
            }
          ]
        },
        {
          "id": 2,
          "subtitle": "単一コンポーネント：ボタン & マージン",
          "paragraphs": [
            "ボタンの状態、スペーシング、配置を文書化し、バリエーションを単一の再利用可能なモデルに統一しました。"
          ],
          "images": [
            {
              "src": "/images/projects/project-01/design_system/button.png",
              "alt": "WeKruit ボタン",
              "caption": "WeKruit ボタン"
            },
            {
              "src": "/images/projects/project-01/design_system/margin.png",
              "alt": "WeKruit マージン",
              "caption": "WeKruit マージン"
            }
          ]
        },
        {
          "id": 3,
          "subtitle": "複合コンポーネント：アップロードインターフェース",
          "paragraphs": [
            "単一要素を定義した後、サイト全体で使用されるアップロードインターフェースのような複合要素に移りました。"
          ],
          "images": [
            {
              "src": "/images/projects/project-01/design_system/Upload.png",
              "alt": "WeKruit アップロード",
              "caption": "WeKruit アップロード"
            }
          ]
        },
        {
          "id": 4,
          "subtitle": "インタラクション仕様",
          "paragraphs": [
            "ユーザーインタラクションパターンを定義し、一貫したエクスペリエンスを確保しました。"
          ],
          "images": [
            {
              "src": "/images/projects/project-01/design_system/interaction.png",
              "alt": "WeKruit インタラクション",
              "caption": "WeKruit インタラクション"
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "title": "UI/UX リファインメント",
      "paragraphs": [
        "既存インターフェースの使いやすさの問題を特定し、ユーザーエクスペリエンスを向上させるための戦略的改良を実装しました。"
      ],
      "subtitles": [
        "主要改善"
      ],
      "images": [
        {
          "src": "/images/projects/project-01/refinement/before1.png",
          "alt": "リデザイン前のダッシュボードナビゲーション",
          "caption": "前：混乱したレイアウト"
        },
        {
          "src": "/images/projects/project-01/refinement/after1.png",
          "alt": "リデザイン後のダッシュボードナビゲーション",
          "caption": "後：改善された階層"
        },
        {
          "src": "/images/projects/project-01/refinement/before2.png",
          "alt": "リデザイン前の候補者リスト",
          "caption": "前：基本リスト"
        },
        {
          "src": "/images/projects/project-01/refinement/after2.png",
          "alt": "リデザイン後の候補者リスト",
          "caption": "後：拡張された情報"
        },
        {
          "src": "/images/projects/project-01/refinement/before3.png",
          "alt": "リデザイン前の面接作成フロー",
          "caption": "前：整理されていないレイアウト"
        },
        {
          "src": "/images/projects/project-01/refinement/after3.png",
          "alt": "リデザイン後の面接作成フロー", 
          "caption": "後：最適化された構造化ワークフロー"
        }
      ]
    },
    {
      "id": 4,
      "title": "振り返り",
      "paragraphs": [
        "WeKruit での3ヶ月間のインターンシップを通じて、デザインと開発は2つの別々のトラックではなく、同じプロセスの2つの半分であることを学びました。それらを組み合わせることの力強さを発見する真の興奮を見つけました！",
        "デザインでは、システムを異なって見るようになりました。デザインシステムに取り組んでいる間、タイポグラフィスケールからスペーシングルールまで、すべての小さな選択が画面を越えて重みを持つことに気づきました。これらの決定は、エンジニアがどのようにコーディングするか、機能がどれくらい速く出荷されるか、ユーザーが製品をどのように体験するかに影響しました。また、エラー状態やローディングインジケーターなどのパターンが、レイアウトや色と同じようにユーザーの信頼を形作ることに気づき始めました。この変化により、デザインを美学以上のものとして理解するようになりました：それは製品全体を一貫性があり適応可能にするフレームワークでした。",
        "開発では、プロトタイプでの実験から、人々が実際に使用する機能の構築まで成長しました。React コンポーネントを書き、Firebase と統合することで、責任感がより鋭くなりました：私のコードは機能的であるだけでなく、保守可能でスケーラブルでなければなりませんでした。デバッグとリファクタリングは「動作させる」ことから、他の人がその上に構築できることを確保することになりました。バックエンドエンジニアとの協力により、データフローとタイミングについてどれだけの思考が必要か、特にリクルーターが依存するリアルタイム更新を処理する際に学びました。",
        "最も楽しかったのは、自分がデザインした機能を構築する稀な機会でした。ある日 Figma でアイデアをスケッチし、次の日にそれがコードで生き生きと動いているのを見ることで、これまで感じたことのない責任感を得ました。デザイン、コーディング、改良のループは、デザインと開発が単に協力するだけでなく、実際に同じ手の中で共存するときに最も強力な製品が生まれることを教えてくれました。そして、それが私が続けたい仕事の種類です！"
      ]
    }
  ]
};