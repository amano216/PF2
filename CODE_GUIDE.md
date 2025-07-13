# ポートフォリオサイト コード解説ガイド

## 目次
1. [基本概念](#基本概念)
2. [HTML解説](#html解説)
3. [CSS解説](#css解説)
4. [JavaScript解説](#javascript解説)
5. [実践的なTips](#実践的なtips)

## 基本概念

### ウェブサイトの3要素
- **HTML**: サイトの構造（骨組み）
- **CSS**: サイトの見た目（装飾）
- **JavaScript**: サイトの動き（動作）

## HTML解説

### 基本構造（index.html:1-14）
```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>天野博 - エンジニア・訪問看護経営者 ポートフォリオ</title>
    <link rel="stylesheet" href="css/bento-grid.css">
</head>
<body>
    <!-- コンテンツ -->
</body>
</html>
```

**解説**：
- `<!DOCTYPE html>`: HTML5を使用することを宣言
- `<html lang="ja">`: 日本語のページであることを指定
- `<meta charset="UTF-8">`: 文字コードをUTF-8に設定（日本語表示に必要）
- `<meta name="viewport">`: スマホ対応のための設定
- `<link rel="stylesheet">`: CSSファイルを読み込む

### ヘッダー構造（index.html:14-34）
```html
<header class="header">
    <div class="container">
        <nav class="navigation">
            <h1 class="logo">Hiroshi Amano</h1>
            <ul class="nav-menu">
                <li><a href="#vision">ビジョン</a></li>
            </ul>
        </nav>
    </div>
</header>
```

**解説**：
- `class="header"`: CSSでスタイルを適用するための目印
- `<nav>`: ナビゲーションであることを示すタグ
- `href="#vision"`: ページ内リンク（#付きはIDへジャンプ）

### セクション構造（index.html:73-103）
```html
<section id="vision" class="vision">
    <div class="container">
        <h2 class="section-title">かなえたい夢</h2>
        <div class="vision-content">
            <!-- コンテンツ -->
        </div>
    </div>
</section>
```

**解説**：
- `<section>`: 意味のあるまとまりを表す
- `id="vision"`: ページ内リンクの飛び先
- `class="vision"`: そのセクション専用のスタイル

## CSS解説

### CSS変数（bento-grid.css:10-22）
```css
:root {
    --primary-color: #1a1a1a;
    --accent-color: #4a9eff;
    --gap: 24px;
}
```

**解説**：
- `:root`: サイト全体で使える変数を定義
- `--primary-color`: 変数名（--で始まる）
- 使用例: `color: var(--primary-color);`

### グリッドレイアウト（bento-grid.css:104-110）
```css
.hero-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: var(--gap);
}
```

**解説**：
- `display: grid`: グリッドレイアウトを使用
- `grid-template-columns: repeat(12, 1fr)`: 12個の同じ幅の列を作成
- `gap`: 要素間の隙間

### グリッド配置（bento-grid.css:112-117）
```css
.hero-identity {
    grid-column: span 8;
    grid-row: span 2;
}
```

**解説**：
- `grid-column: span 8`: 8列分の幅を使用
- `grid-row: span 2`: 2行分の高さを使用

### ホバー効果（bento-grid.css:154-158）
```css
.strength-item:hover {
    box-shadow: var(--hover-shadow);
    transform: translateY(-2px);
}
```

**解説**：
- `:hover`: マウスを乗せた時の状態
- `box-shadow`: 影をつける
- `transform: translateY(-2px)`: 2px上に移動

### レスポンシブ対応（bento-grid.css:730-793）
```css
@media (max-width: 768px) {
    .hero-content {
        grid-template-columns: 1fr;
    }
}
```

**解説**：
- `@media`: 画面サイズによってスタイルを変更
- `max-width: 768px`: 768px以下の画面で適用
- スマホでは1列表示に変更

## JavaScript解説

### スムーススクロール（main.js）
```javascript
// ページ内リンクをクリックした時
$('a[href^="#"]').click(function() {
    // スクロール先を取得
    var target = $(this.hash);
    // アニメーションでスクロール
    $('html, body').animate({
        scrollTop: target.offset().top - 70
    }, 600);
    return false;
});
```

**解説**：
- `$('a[href^="#"]')`: #で始まるリンクを選択
- `.click()`: クリック時の処理
- `.animate()`: アニメーション効果
- `600`: 600ミリ秒（0.6秒）かけて移動

### タブ切り替え（main.js）
```javascript
$('.tab-button').click(function() {
    // アクティブクラスを切り替え
    $('.tab-button').removeClass('active');
    $(this).addClass('active');
    
    // カテゴリでフィルタリング
    var category = $(this).data('category');
    if (category === 'all') {
        $('.work-item').show();
    } else {
        $('.work-item').hide();
        $('.work-item[data-category="' + category + '"]').show();
    }
});
```

**解説**：
- `.removeClass()`: クラスを削除
- `.addClass()`: クラスを追加
- `.data()`: data属性の値を取得
- `.show()` / `.hide()`: 表示/非表示

## 実践的なTips

### 1. 開発の順序
1. **HTML作成**: まず構造を作る
2. **CSS適用**: 見た目を整える
3. **JavaScript追加**: 動きをつける

### 2. クラス名の付け方
```css
/* 良い例：意味がわかる */
.section-title { }
.hero-content { }

/* 悪い例：意味不明 */
.box1 { }
.red-text { }
```

### 3. よく使うCSSプロパティ
- `margin`: 外側の余白
- `padding`: 内側の余白
- `display: flex`: 横並び配置
- `display: grid`: グリッド配置
- `position`: 位置の指定
- `transition`: アニメーション

### 4. デバッグ方法
1. **ブラウザの開発者ツール**（F12キー）
2. **要素を検証**で HTML/CSS を確認
3. **Console**で JavaScript エラーを確認

### 5. 学習リソース
- [MDN Web Docs](https://developer.mozilla.org/ja/): 公式リファレンス
- [CSS Tricks](https://css-tricks.com/): CSS テクニック集
- [Can I Use](https://caniuse.com/): ブラウザ対応状況

## コードとの対応表

| 機能 | HTMLファイル | CSSファイル | 行番号 |
|------|------------|------------|--------|
| ヘッダー | index.html | bento-grid.css | HTML:14-34, CSS:40-85 |
| ヒーローセクション | index.html | bento-grid.css | HTML:37-71, CSS:87-167 |
| グリッドレイアウト | index.html | bento-grid.css | HTML:45-61, CSS:104-110 |
| スキルバー | index.html | bento-grid.css | HTML:136-138, CSS:332-347 |
| タブ切り替え | index.html | main.js | HTML:242-247, JS:該当箇所 |
| レスポンシブ | - | bento-grid.css | CSS:730-793 |

## 練習問題

### 1. 色を変更してみよう
`bento-grid.css`の12行目：
```css
--accent-color: #4a9eff; /* これを好きな色に変更 */
```

### 2. 余白を調整してみよう
`bento-grid.css`の202行目：
```css
section {
    padding: 80px 0; /* 数値を変更して余白を調整 */
}
```

### 3. アニメーション速度を変更してみよう
`bento-grid.css`の176行目：
```css
transition: all 0.3s; /* 0.3sを0.5sなどに変更 */
```