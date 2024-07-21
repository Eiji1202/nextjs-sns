type DateOfBirthOption = {
  label: string;
  value: number;
}[];

const currentYear = new Date().getFullYear();

export const yearsOption: DateOfBirthOption = [{label: "年", value: 0}, ...Array.from({ length: 100 }, (_, i) => ({
  label: `${currentYear - i}`,
  value: currentYear - i,
}))];

export const monthsOption: DateOfBirthOption = [{label: "月", value: 0}, ...Array.from({ length: 12 }, (_, i) => ({
  label: `${i + 1}`,
  value: i + 1,
}))];

export const daysOption: DateOfBirthOption = [{label: "日", value: 0}, ...Array.from({ length: 31 }, (_, i) => ({
  label: `${i + 1}`,
  value: i + 1,
}))];
