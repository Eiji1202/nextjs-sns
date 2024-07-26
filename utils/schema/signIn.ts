import { z } from 'zod';

export const signInSchema = z.object({
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
});

export type SingInSchemaType = z.infer<typeof signInSchema>;
