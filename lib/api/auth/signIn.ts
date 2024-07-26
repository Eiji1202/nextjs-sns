import { SingInSchemaType,  signInSchema} from "@/utils/schema/signIn";

// ログイン
export async function signIn(data: SingInSchemaType) {
  const parsedData = signInSchema.parse(data);

  try {
    const response = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(parsedData),
    });

    const result = await response.json();

    if (response.ok) {
      return { success: true, data: result };
    } else {
      return { success: false, error: result.error };
    }
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}
