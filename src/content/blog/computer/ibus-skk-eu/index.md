---
title: "ibus-skkでEurKEY配列を使う"
pubDate: 2024-03-30T00:00:00+09:00
toc : false
math: false
tikz: false
lang : ja
---

[EurKEY](https://eurkey.steffen.bruentjen.eu/) とは, US 配列をベースにヨーロッパ諸言語の文字を入力できるキー配列である. 右 Alt キーを押しながら対応するキーを押すと, ä, ß, ç などが入力される. "Ampère", "Schrödinger" などがスムーズに入力できて重宝する.

ibus-skk で日本語配列以外を使うには, /usr/share/ibus/component/skk.xml の `<layout>ja</layout>` を書き換えればよい. ただし, Gnome の場合は全てのキー配列を表示するように設定しないと EurKEY は使えない.

```bash
# Gnome の設定ですべてのキー配列が表示されるように
gsettings set org.gnome.desktop.input-sources show-all-sources true

# ibus-skk のキー配列を EurKEY に
sudo sed -ie s/jp/eu/g /usr/share/ibus/component/skk.xml
```
