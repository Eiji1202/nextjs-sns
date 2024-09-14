# Next.js と Firebase を使った SNS アプリの作成

## デプロイ後URL

https://nextjs-ily1zhlop-eiji1202s-projects.vercel.app/

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

## 使用した技術

- Next.js（バージョン 14 の AppRouter）
- FirebaseAuthentication
- Firestore
- ReactHookForm（ユーザー登録とログインのフォームのバリデーション）
- Zod（スキーマの定義とバリデーションで、ReactHookFormと組み合わせることでより堅牢な実装ができる）

## 意識した点

- prettier、eslint、editorconfig等のフォーマッターの設定
- `/styles`ディレクトリ内にsassの共通設定をして使いやすくした
- 全体的なディレクトリ構成
- コンポーネントはAtomicDesignで分けて、Storybookでカタログ化した
- `/lib/api`ディレクトリ内にBFF関数を定義して、どのページからAPIを実行してBFF関数を通じて疎通するようにした

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

## 実装後

> **新規ユーザー登録 → 投稿一覧ページにリダイレクト → 記事を投稿 → 投稿削除**

https://github.com/user-attachments/assets/6b789825-b81d-46a2-8c16-6993324687a8

> **ログイン → 投稿一覧ページにリダイレクト → 記事を投稿 → 投稿削除**

https://github.com/user-attachments/assets/8b94cb8a-a023-4899-84f4-291e96ded512
