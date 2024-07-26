// ユーザー情報を取得
export async function fetchUserData(userId: string) {
  try {
    const response = await fetch(`/api/users/${userId}`);
    const result = await response.json();

    if (response.ok) {
      return { success: true, userData: result.userData };
    } else {
      return { success: false, error: result.error };
    }
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}
