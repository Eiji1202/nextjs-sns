import { SignUpSchemaServerType } from "./signUp";

// クライアント側で扱うユーザーデータのスキーマ
export type UserDataType = Omit<SignUpSchemaServerType, 'terms'> & {
  userId: string;
};
