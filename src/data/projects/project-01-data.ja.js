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
                "/images/projects/project-01/main_product/flow1/dashboard.png",
                "/images/projects/project-01/main_product/flow1/audio_view.png",
                "/images/projects/project-01/main_product/flow1/video_view.png"
              ]
            },
            {
              "title": "フロー2：候補者準備ダッシュボード",
              "description": "学生が面接の準備をするためのダッシュボードを設計しました。このフローは、モック面接の実行から詳細な結果とフィードバックの確認まで、学生をガイドします。",
              "steps": [
                {
                  "title": "ステップ1：準備ダッシュボード",
                  "description": "学生は利用可能なモック面接、完了した面接、および進行状況を見ます。"
                },
                {
                  "title": "ステップ2：面接設定",
                  "description": "学生は面接タイプ（技術、行動、ケーススタディ）を選択し、難易度レベルを設定します。"
                },
                {
                  "title": "ステップ3：面接実行",
                  "description": "学生はAIエージェントとのライブ面接を実行し、リアルタイムのフィードバックを受けます。"
                },
                {
                  "title": "ステップ4：結果確認",
                  "description": "面接後、学生は詳細な分析、スコア、改善のための具体的な推奨事項を受け取ります。"
                }
              ],
              "images": [
                "/images/projects/project-01/main_product/flow2/prep_dashboard.png",
                "/images/projects/project-01/main_product/flow2/interview_setup.png",
                "/images/projects/project-01/main_product/flow2/live_interview.png",
                "/images/projects/project-01/main_product/flow2/results_view.png"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "title": "デザインシステムとリファインメント",
      "subsections": [
        {
          "id": 1,
          "subtitle": "デザインシステム開発",
          "paragraphs": [
            "WeKruitの成長するプロダクトスイートの一貫性を確保するため、包括的なデザインシステムを開発しました。このシステムには、タイポグラフィ、カラーパレット、コンポーネントライブラリ、インタラクションパターンが含まれます。",
            "各コンポーネントは再利用性、アクセシビリティ、スケーラビリティを念頭に置いて設計されました。デザインシステムは、デザインと開発の間のギャップを埋め、一貫したユーザーエクスペリエンスを確保しました。"
          ],
          "imageGroups": [
            {
              "title": "デザインシステム要素",
              "description": "WeKruitプラットフォーム全体で使用される主要なデザインシステム要素。一貫性、アクセシビリティ、スケーラビリティに焦点を当てています。",
              "images": [
                "/images/projects/project-01/design_system/colors.png",
                "/images/projects/project-01/design_system/fonts.png",
                "/images/projects/project-01/design_system/button.png",
                "/images/projects/project-01/design_system/interaction.png",
                "/images/projects/project-01/design_system/margin.png",
                "/images/projects/project-01/design_system/Upload.png"
              ]
            }
          ]
        },
        {
          "id": 2,
          "subtitle": "UI/UXリファインメント",
          "paragraphs": [
            "既存のインターフェースの使いやすさの問題を特定し、ユーザーエクスペリエンスを向上させるための戦略的な改良を実装しました。これらの変更は、ユーザーフィードバックとデータドリブンな洞察に基づいていました。",
            "改良により、ユーザーエンゲージメントが向上し、タスク完了時間が短縮され、全体的なプラットフォーム満足度が向上しました。"
          ],
          "imageGroups": [
            {
              "title": "Before/After比較",
              "description": "主要なUIコンポーネントの改良を示すBefore/After比較。ユーザビリティ、視覚階層、アクセシビリティの改善に焦点を当てています。",
              "beforeAfterPairs": [
                {
                  "before": "/images/projects/project-01/refinement/before1.png",
                  "after": "/images/projects/project-01/refinement/after1.png",
                  "description": "ダッシュボードナビゲーションの改良：より明確な情報階層とアクセシビリティの向上"
                },
                {
                  "before": "/images/projects/project-01/refinement/before2.png",
                  "after": "/images/projects/project-01/refinement/after2.png",
                  "description": "面接リストビューの改良：より良いデータ可視化と素早いアクションアクセス"
                },
                {
                  "before": "/images/projects/project-01/refinement/before3.png",
                  "after": "/images/projects/project-01/refinement/after3.png",
                  "description": "結果ページの改良：より明確なフィードバック表示と実行可能な洞察"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
