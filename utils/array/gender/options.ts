type GenderOption = {
  label: string;
  value: string;
}[];

export const genderOptions: GenderOption = [
  { label: "選択してください", value: "" },
  { label: "男性", value: "male" },
  { label: "女性", value: "female" },
  { label: "その他", value: "other" },
];
