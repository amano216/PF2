# ポートフォリオサイト プロジェクト

天野博氏のポートフォリオサイトのソースコードと学習用ドキュメントです。

## 📁 プロジェクト構成

```
PF2/
├── index.html          # メインHTMLファイル
├── css/
│   ├── style.css       # 元のスタイルシート
│   ├── minimal.css     # ミニマルデザイン
│   └── bento-grid.css  # ベントグリッドレイアウト ← 現在使用中
├── js/
│   └── main.js         # JavaScriptファイル
├── CLAUDE.md           # プロジェクト設定
├── PROMPT.md           # サイト再現用プロンプト集
├── CODE_GUIDE.md       # 初学者向けコード解説
└── PROJECT_README.md   # このファイル
```

## 🚀 クイックスタート

### 1. ローカルで確認する方法

```bash
# Python 3を使用
python -m http.server 8000

# または Node.jsを使用
npx http-server -p 8000
```

ブラウザで `http://localhost:8000` を開く

### 2. デザインを切り替える方法

`index.html` の8-10行目を編集：

```html
<!-- ミニマルデザインを使う場合 -->
<link rel="stylesheet" href="css/minimal.css">

<!-- ベントグリッドを使う場合（現在） -->
<link rel="stylesheet" href="css/bento-grid.css">
```

## 📚 ドキュメント

### [PROMPT.md](PROMPT.md) - サイト再現プロンプト
- 基本プロンプト：サイト全体を再現
- 詳細プロンプト：セクション別の指示
- カスタマイズ用：色やレイアウトの変更

### [CODE_GUIDE.md](CODE_GUIDE.md) - コード解説ガイド
- HTML/CSS/JSの基本概念
- 実際のコードの詳細解説
- 練習問題付き

### [CLAUDE.md](CLAUDE.md) - プロジェクト設定
- 開発環境の説明
- コーディング原則
- 主要機能一覧

## 🔍 コード参照ガイド

### 主要なセクションの場所

| セクション | HTMLの場所 | CSSの場所 | 機能 |
|-----------|-----------|-----------|------|
| ヘッダー | index.html:14-34 | bento-grid.css:40-85 | 固定ナビゲーション |
| ヒーロー | index.html:37-71 | bento-grid.css:87-167 | メインビジュアル |
| ビジョン | index.html:73-103 | bento-grid.css:215-271 | 目標カード |
| スキル | index.html:130-183 | bento-grid.css:310-366 | スキルバー |
| 実績 | index.html:239-309 | bento-grid.css:432-521 | フィルター機能 |

### 重要な技術ポイント

#### 1. ベントグリッドレイアウト
```css
/* 12カラムグリッドシステム */
.hero-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 24px;
}

/* 要素の配置 */
.hero-identity {
    grid-column: span 8;  /* 8列分の幅 */
    grid-row: span 2;     /* 2行分の高さ */
}
```
参照：bento-grid.css:104-110

#### 2. CSS変数の活用
```css
:root {
    --primary-color: #1a1a1a;
    --accent-color: #4a9eff;
}
```
参照：bento-grid.css:10-22

#### 3. レスポンシブ対応
```css
@media (max-width: 768px) {
    /* モバイル用スタイル */
}
```
参照：bento-grid.css:730-793

## 💡 カスタマイズのヒント

### 色を変更する
1. `css/bento-grid.css` を開く
2. 12行目の `--accent-color: #4a9eff;` を変更
3. ブラウザをリロード

### 新しいセクションを追加する
1. `index.html` に新しい `<section>` を追加
2. `css/bento-grid.css` にスタイルを追加
3. ナビゲーションメニューにリンクを追加

### アニメーションを追加する
1. CSSに `@keyframes` を定義
2. 要素に `animation` プロパティを適用
3. 参考：bento-grid.css:796-809

## 🛠 トラブルシューティング

### よくある問題

**Q: 日本語が文字化けする**
A: HTMLの文字コードがUTF-8になっているか確認
```html
<meta charset="UTF-8">
```

**Q: レイアウトが崩れる**
A: ブラウザの開発者ツール（F12）でCSSを確認

**Q: JavaScriptが動かない**
A: コンソールでエラーを確認、jQueryが読み込まれているか確認

## 📖 学習の進め方

1. **基礎を理解**：[CODE_GUIDE.md](CODE_GUIDE.md)の基本概念を読む
2. **コードを読む**：実際のファイルを開いて確認
3. **変更してみる**：練習問題に挑戦
4. **新機能を追加**：オリジナルの要素を追加

## 🤝 貢献について

このプロジェクトは学習用テンプレートです。
改善案やバグ報告は歓迎します。

---

作成者：天野博
ライセンス：MIT