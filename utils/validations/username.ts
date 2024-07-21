export const USERNAME_VALIDATION = {
  required: "ユーザー名は必須です",
  minLength: {
    value: 1,
    message: "ユーザー名は1文字以上で入力してください",
  },
  maxLength: {
    value: 20,
    message: "ユーザー名は20文字以内で入力してください",
  },
}
