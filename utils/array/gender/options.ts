type GenderOption = {
  label: string;
  value: number;
}[];

export const genderOptions: GenderOption = [
  { label: "選択してください", value: 0 },
  { label: "男性", value: 1 },
  { label: "女性", value: 2 },
  { label: "その他", value: 3 },
];
