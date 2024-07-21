export const PASSWORD_VALIDATION = {
  required: "パスワードは必須です",
  minLength: {
    value: 8,
    message: "パスワードは8文字以上で入力してください",
  },
  pattern: {
    value: /^[a-zA-Z\d]+$/,
    message: "パスワードは半角英数で入力してください",
  },
}
