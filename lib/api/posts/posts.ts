// 投稿一覧を取得
export async function fetchPosts() {
  try {
    const response = await fetch('/api/posts');
    const data = await response.json();
    if (response.ok) {
      return { success: true, posts: data.posts };
    } else {
      return { success: false, error: data.error };
    }
  } catch (error: unknown) {
    let errorMessage = "不明なエラーが発生しました";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return { success: false, error: errorMessage };
  }
}

// 投稿を作成
export async function createPost(data: { userId: string; content: string }) {
  try {
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
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

// 投稿を削除
export async function deletePost(id: string) {
  try {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
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
