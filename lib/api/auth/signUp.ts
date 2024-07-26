import { uploadProfileIcon } from "@/lib/hooks/firebase/uploadProfileIcon";
import { SignUpSchemaClientType } from "@/utils/schema/signUp";

export async function signUp(data: SignUpSchemaClientType) {
  // プロフィール画像のアップロードとURLの取得
  const profileIconFile = data.profileIcon[0] as File;
  const profileIconUrl = await uploadProfileIcon(profileIconFile);

  try {
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...data, profileIcon: profileIconUrl}),
    });

    const result = await res.json();

    if (res.ok) {
      return { success: true, data: result };
    } else {
      return { success: false, error: result.error };
    }
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}
