import { z } from 'zod';

const MAX_IMAGE_SIZE = 5;
const sizeInMB = (sizeInBytes: number, decimalsNum = 2) => {
  const result = sizeInBytes / (1024 * 1024);
  return +result.toFixed(decimalsNum);
};
const IMAGE_TYPES = ['image/jpg', 'image/png', 'image/jpeg'];

// クライアント用のスキーマ
export const signUpSchemaClient = z.object({
  username:
    z.string()
    .min(1, 'ユーザー名を入力してください')
    .max(20, 'ユーザー名は20文字以内で入力してください'),
  email:
    z.string()
    .min(1, 'メールアドレスを入力してください')
    .email('メールアドレスの形式が正しくありません'),
  password:
    z.string()
    .min(1, 'パスワードを入力してください')
    .refine((val) => val.length >= 8, {
      message: "パスワードは8文字以上で入力してください",
    })
    .refine((val) => /^[a-zA-Z\d]+$/.test(val), {
      message: "パスワードは半角英数で入力してください",
    }),
  profileIcon: z.any()
    .refine((files) => files instanceof FileList && files.length >= 1, {
      message: 'プロフィール画像を選択してください',
    })
    .refine((files) => files instanceof FileList && Array.from(files).every(file => sizeInMB(file.size) <= MAX_IMAGE_SIZE), {
      message: "ファイルサイズは最大5MBです",
    })
    .refine((files) => files instanceof FileList && Array.from(files).every(file => IMAGE_TYPES.includes(file.type)), {
      message: '.jpg、.jpeg、.pngのみ可能です',
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

export type SignUpSchemaClientType = z.infer<typeof signUpSchemaClient>;

// signUpSchemaClientからprofileIconを取り除いたスキーマ
const baseSchema = signUpSchemaClient.omit({ profileIcon: true });

// APIリクエスト用のスキーマ
// profileIconをstring型に変更
export const signUpSchemaServer = baseSchema.extend({
  profileIcon: z.string(),
});

export type SignUpSchemaServerType = z.infer<typeof signUpSchemaServer>
