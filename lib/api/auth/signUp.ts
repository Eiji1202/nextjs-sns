import { uploadProfileIcon } from "@/lib/hooks/firebase/uploadProfileIcon";
import { SignUpSchemaClientType, signUpSchemaServer, SignUpSchemaServerType } from "@/utils/schema/signUp";

export async function signUp(data: SignUpSchemaClientType) {
  const parsedData: SignUpSchemaServerType = signUpSchemaServer.parse(data);

  // プロフィール画像のアップロードとURLの取得
  const profileIconFile = parsedData.profileIcon[0];
  const profileIconUrl = await uploadProfileIcon(profileIconFile);

  try {
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...parsedData, profileIcon: profileIconUrl}),
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
