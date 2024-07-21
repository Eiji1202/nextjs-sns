export const DATE_OF_BIRTH_VALIDATION = {
  year: {
    validate: (value: number) => value !== 0 || "生年を選択してください",
  },
  month: {
    validate: (value: number) => value !== 0 || "月を選択してください",
  },
  day: {
    validate: (value: number) => value !== 0 || "日を選択してください",
  },
}
