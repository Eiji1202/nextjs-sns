import { storage } from '@/config/firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// File型のデータからfirebaseに画像をアップロードし、ダウンロードURLを返す
export async function uploadProfileIcon(file: File): Promise<string> {
  const storageRef = ref(storage, `profileIcons/${file.name}`);

  // 画像をアップロード
  await uploadBytes(storageRef, file);

  // 画像のダウンロードURLを取得
  const url = await getDownloadURL(storageRef);

  return url;
}
