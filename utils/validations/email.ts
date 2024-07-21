export const EMAIL_VALIDATION = {
  required: "メールアドレスは必須です",
  pattern: {
    value: /^\S+@\S+$/i,
    message: "メールアドレスの形式が正しくありません",
  },
}
