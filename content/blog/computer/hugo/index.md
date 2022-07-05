---
title: "Hugo + GitHub Pagesに乗り換えた"
tags : [
  "computer",
  "hugo",
]
date: 2020-04-13T05:48:26+09:00
toc : true
---

はてなブログをやめてHugoとGitHub Pagesに乗り換えた.
ブログの移転はこれで4回目で, 
Hugoが5代目になった.
<!--more-->
3回目の引越しの時と違って
前代のはてなブログの記事をそのまま移転したので, 
はてなブログの方は検索エンジンから除外させた
(`noindex`, `nofollow`).

## Hugoとは

> Hugo is one of the most popular open-source static site generators. With its amazing speed and flexibility, Hugo makes building websites fun again.  

[The world’s fastest framework for building websites | Hugo](https://gohugo.io/)

Hugoは静的サイトジェネレータの一つ.
Go言語でできているので, 
ビルドが高速・軽快で拡張性にも富んでいる.

どうしてHugoを選んだかと言うと, 
そんなに理由はない.
「静的サイトジェネレータ」で検索して上位に出てきたから, 
使ったことが無かったから, など.
他の候補はJekyll, React Static, Gatsbyなどがあったが, 
Go言語という特徴が有利に働いた.

### 導入

日本語の文献が沢山あり困らないが, 
[公式チュートリアル](https://gohugo.io/getting-started/quick-start/)で十分だと思う.

Ubuntuでのインストールは`snap`でできる.

```bash
snap install hugo --channel=extended
```

サイトを作るのもすぐにできる.
実に手軽である.

```bash
hugo new site YourSiteName
```

ブログ名や作者名などは`./config.toml`で設定する.
詳しくは後述のテーマごとのREADME.mdを参照されたい.

### テーマ

Hugoには実に豊富なテーマが用意されている.
自分でも作れるが, 
しばらくは既存のテーマでHugoに慣れることにした.
気軽にテーマを乗り換えられるのも
Hugoの特徴

[公式サイトのテーマ一覧](https://themes.gohugo.io/)からテーマを選ぶ.
私は[Track3/hermit](https://github.com/Track3/hermit)にした.
シンプルだが, 細かいところまで作りこまれている.
なにしろ[作者様のブログ](https://ojbk.im/)がとてもかっこいい.
東アジア系の全角文字との相性も良く, 
自分で作るときの参考にしたい.

テーマの導入は`git submodule add`ですると, 
後々の管理が簡単である.

```bash
cd YourSiteName
git submodule add https://github.com/Track3/hermit.git themes/hermit
```

あとは, `./config.toml`で, テーマを選択する.

```toml
theme = "hermit"
```

他の設定はテーマごとの[README.md](https://github.com/Track3/hermit/blob/master/README.md)を参考にする.

### ビルド

`hugo`コマンドを単体で実行することで, 
`./public`にHTML群ができる.
ちなみに, 
`hugo --minify`とすると生成されるファイルの改行が省略されて
より軽量になる.

また, 

```bash
hugo server
```

を実行することで,
[http://localhost:1313/](http://localhost:1313/)にサーバーが立ち上がる.
ソースを書き換えるとすぐに反映されるので,
下書き時に便利.

## GitHub Pagesとは

> Websites for you and your projects, hosted directly from your GitHub repository. Just edit, push, and your changes are live.

[GitHub Pages](https://pages.github.com/)

Hugoで生成したサイトのホスティングにはGitHub Pagesを利用している.
[タスク管理ツール](/blog/computer/todoo/)を作ったときにも使ったが,
`git push`するだけで反映されるのは便利.
あと, いつの間にか[GitHub Actions](https://github.com/features/actions)なるものができていた.
GitLabと悩んでいたが, Twitterで教えてもらいGitHub Pagesに決定した.

GitHub ActionsによるHugoのビルドとデプロイは, 以下の記事をそのまま使わせて頂いている.

[GitHub Actions による GitHub Pages への自動デプロイ - Qiita](https://qiita.com/peaceiris/items/d401f2e5724fdcb0759d)

よく見たら, この記事の作者様がTwitterで教えて下さった方であった.
とてもありがたい.

## つまづいたところ

### `gh-pages`ブランチが反映されない

User and Organizationリポジトリでは, 
`gh-pages`ではなく`master`ブランチにコードを配置する必要がある.
なので, 
生成したコードを`master`ブランチにデプロイするように設定すると直った([参考](https://qiita.com/peaceiris/items/d401f2e5724fdcb0759d#user-and-organization-%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA%E3%81%AE%E5%A0%B4%E5%90%88)).


### GitHub PagesのCSSが読み込まれない

`./config.toml`の`basURL`を`http://xiupos.github.io/`にしていた.
正しくは,

```yml
baseURL = "https://xiupos.github.io/"
```

また, 絶対パスの指定をしておくと更に安心.

```yml
canonifyurls = true
```
