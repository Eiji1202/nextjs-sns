# Next.js と Firebase を使った SNS アプリの作成

## 概要

- 新規登録、ログイン機能を実装（認証には FirebaseAuthentication、DB は Firestore を使用）
- レスポンシブ対応
- UI フレームワークは使用しない
- CSS Modules で実装
- linter には ESLint、formatter には Prettier を使用
- テストケース/テストコードを作成（jest を使用）
- ログインしたユーザーのみ投稿一覧を閲覧できる（投稿日時の降順）
- 投稿の最大文字数は 140 文字
- 自身の投稿は削除できる
- 最終的に vercel へデプロイする

## 使用する技術

- Next.js（バージョン 14 の AppRouter）
- FirebaseAuthentication
- Firestore
- ReactHookForm（ユーザー登録のフォームと投稿の型付けとバリデーション）
- Zod（クライアントとAPIのリクエストの型付け）

## ユーザー登録時の入力内容

- ユーザー名
- メールアドレス
- パスワード
- プロフィールアイコン
- 生年月日
- 性別
- 利用規約への同意（チェックボックス）

## ログイン時の入力内容
- メールアドレス
- パスワード
