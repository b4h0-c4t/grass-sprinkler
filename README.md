# grass-sprinkler
## 概要
指定したリポジトリに自動で草を生やしてくれるアプリです。

## 事前準備
- gitのインストール
- Gitのリモートサーバに登録されているssh秘密鍵の用意(パスフレーズなし)

## 使い方
1. `git clone git@github.com:b4h0-c4t/grass-sprinkler.git`
1. `cd /path/to/grass-sprinkler`
1. template_config.shを基にconfig.shを生成・編集
1. (必要に応じて) cron_confの編集
  - `cd grass-sprinkler` をcloneしたディレクトリに変更
  - 草を生やしたいタイミングを調節
1. `crontab cronconf`

## 登録したのcronの削除
1. `crontab -r`
  - 注意: 他にcronを動作させていた場合、全て消えます
  - cronを利用したことがない人向けの解説なので、わかる人は自分で設定しましょう
