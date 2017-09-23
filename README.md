# 【非公式】Untiy JP Mastodonソース　Read Me

こちらは[【非公式】Untiy JP Mastodon](https://unityjp-mastodon.tokyo/)で使用しているソースコードになります。
もし、ソースを使用したい場合はunityjpmastodon_v1.6.1ブランチからクローンしてください。

## 環境
【非公式】Untiy JP MastodonはAmazon Web Serviceを使用しています。

### AWS設定

使用したAWSのサービスは以下の通りです。

・EC2インスタンス　

OS：ubuntu16.04<br />
タイプ：t2.micro

・RDS

エンジン：PostgreSQL<br />
クラス：db.t2.micro<br />
ストレージ：20GB

・ElastiChache

タイプ：cache.t2.micro

・VPC

・S3

・CloudWatch

・CloudFront

※ほぼ全てAWSの無料枠に収まるように設定しています

### 環境構築にあたり参考させていただいたサイト

[マストドンAWS構築チュートリアル完全版|初心者から大規模運用まで](http://webfood.info/mastodon-aws-tutorial/)
[AWSのEC2で最小限の努力でmastodonを構築する](https://qiita.com/tsuitta_dayo/items/dfd659ec68435653d16a)
[AWSの無料SSLを使ってmastodonインスタンスを立てる手順](https://qiita.com/genya0407/items/afb9c3f075225de856ed)

※Mastodonは日々、かなりのスピードで更新しているため、現バージョンで上記のサイトを見ても構築できる保証はありません

## 本家Mastodonからの変更点 2017/9/24時点

・画像素材

・日本語用のサイト説明文(config/locales/ja.yml)

・サイトタイトル(config/locales/settings.yml)

・スタートページにUnityリンク集追加(app/javascript/mastodon/features/getting_started/index.js)

・docker-compose.yml

※詳細な変更点を知りたい方は各自diffツール等でご確認ください

以下、セキュリティ面で公開できないファイルになります（.env.production.sampleを複製して、各自で設定してください）

・.env.production

## 変更履歴

### v1.3.2 

・2017/05/06

【非公式】Untiy JP Mastodon　一般公開

### v1.3.3

・2017/05/06

バージョンアップデート

### v1.4.1 

・2017/06/15

バージョンアップデート

### v1.4.3 

・2017/06/16

バージョンアップデート

### v1.5.1 

・2017/08/16

バージョンアップデート<br />
一部画像素材を変更（本家の画像素材が変更されたため）<br />
スタートページにUnityリンク集追加

・2017/09/12

AWS設定変更<br />
→アイコン等の素材の通信形式をHTTP1.1からHTTP2.0に切り替え

### v1.6.1 

・2017/09/22
バージョンアップデート<br/>
Webプッシュ通知機能追加

## 注意事項

※【非公式】Untiy JP MastodonはMastodonが採用しているAffero General Public License v3.0に基づき、ソースコードを公開しています。<br />
※【非公式】Untiy JP Mastodonは本家Mastodonと同様、Affero General Public License v3.0ライセンスを継承しています。<br />
※【非公式】Untiy JP Mastodonは一部画像アセットにユニティちゃんの画像を加工して使用しているため、[ユニティちゃんライセンス](http://unity-chan.com/contents/guideline/)に従って公開しています。

© Unity Technologies Japan/UCL

![Mastodon](https://i.imgur.com/NhZc40l.png)
========

[![Build Status](http://img.shields.io/travis/tootsuite/mastodon.svg)][travis]
[![Code Climate](https://img.shields.io/codeclimate/github/tootsuite/mastodon.svg)][code_climate]

[travis]: https://travis-ci.org/tootsuite/mastodon
[code_climate]: https://codeclimate.com/github/tootsuite/mastodon

Mastodon is a free, open-source social network server. A decentralized solution to commercial platforms, it avoids the risks of a single company monopolizing your communication. Anyone can run Mastodon and participate in the social network seamlessly.

An alternative implementation of the GNU social project. Based on [ActivityStreams](https://en.wikipedia.org/wiki/Activity_Streams_(format)), [Webfinger](https://en.wikipedia.org/wiki/WebFinger), [WebSub](https://en.wikipedia.org/wiki/WebSub) and [Salmon](https://en.wikipedia.org/wiki/Salmon_(protocol)).

Click on the screenshot to watch a demo of the UI:

[![Screenshot](https://i.imgur.com/pG3Nnz3.jpg)][youtube_demo]

[youtube_demo]: https://www.youtube.com/watch?v=YO1jQ8_rAMU

The project focus is a clean REST API and a good user interface. Ruby on Rails is used for the back-end, while React.js and Redux are used for the dynamic front-end. A static front-end for public resources (profiles and statuses) is also provided.

If you would like, you can [support the development of this project on Patreon][patreon]. Alternatively, you can donate to this BTC address: `17j2g7vpgHhLuXhN4bueZFCvdxxieyRVWd`

[patreon]: https://www.patreon.com/user?u=619786

## Resources

- [List of Mastodon instances](https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/List-of-Mastodon-instances.md)
- [Use this tool to find Twitter friends on Mastodon](https://mastodon-bridge.herokuapp.com)
- [API overview](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md)
- [Frequently Asked Questions](https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/FAQ.md)
- [List of apps](https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/Apps.md)

## Features

- **Fully interoperable with GNU social and any OStatus platform**
  Whatever implements Atom feeds, ActivityStreams, Salmon, WebSub and Webfinger is part of the network
- **Real-time timeline updates**
  See the updates of people you're following appear in real-time in the UI via WebSockets
- **Federated thread resolving**
  If someone you follow replies to a user unknown to the server, the server fetches the full thread so you can view it without leaving the UI
- **Media attachments like images and WebM**
  Upload and view images and WebM videos attached to the updates
- **OAuth2 and a straightforward REST API**
  Mastodon acts as an OAuth2 provider so 3rd party apps can use the API, which is RESTful and simple
- **Background processing for long-running tasks**
  Mastodon tries to be as fast and responsive as possible, so all long-running tasks that can be delegated to background processing, are
- **Deployable via Docker**
  You don't need to mess with dependencies and configuration if you want to try Mastodon, if you have Docker and Docker Compose the deployment is extremely easy
  
## Development

Please follow the [development guide](https://github.com/tootsuite/documentation/blob/master/Running-Mastodon/Development-guide.md) from the documentation repository.

## Deployment

There are guides in the documentation repository for [deploying on various platforms](https://github.com/tootsuite/documentation#running-mastodon).

## Contributing

You can open issues for bugs you've found or features you think are missing. You can also submit pull requests to this repository. [Here are the guidelines for code contributions](CONTRIBUTING.md)

**IRC channel**: #mastodon on irc.freenode.net

## Extra credits

- The [Emoji One](https://github.com/Ranks/emojione) pack has been used for the emojis
- The error page image courtesy of [Dopatwo](https://www.youtube.com/user/dopatwo)

![Mastodon error image](https://mastodon.social/oops.png)
