import { z } from 'zod';

export const signUpSchema = z.object({
  username:
    z.string()
    .min(1, 'ユーザー名は必須です')
    .max(20, 'ユーザー名は20文字以内で入力してください'),
  email:
    z.string()
    .min(1, 'メールアドレスは必須です')
    .email('メールアドレスの形式が正しくありません'),
  password:
    z.string()
    .min(1, 'パスワードは入力必須です')
    .refine((val) => val.length >= 8, {
      message: "パスワードは8文字以上で入力してください",
    })
    .refine((val) => /^[a-zA-Z\d]+$/.test(val), {
      message: "パスワードは半角英数で入力してください",
    }),
  profileIcon:
    z.any()
    .refine((val) => val !== null, {
      message: "プロフィール画像は必須です"
    }),
  dateOfBirth:
    z.object({
      year: z.number().int().min(1, '生年を選択してください'),
      month: z.number().int().min(1, '月を選択してください'),
      day: z.number().int().min(1, '日を選択してください'),
    }),
  gender:
    z.string()
    .refine(value => value !== "", {
      message: "性別を選択してください"
    }),
  terms:
    z.boolean()
    .refine(value => value === true, {
      message: "利用規約に同意してください"
    })
});

export type UserSchemaType = z.infer<typeof signUpSchema>;
