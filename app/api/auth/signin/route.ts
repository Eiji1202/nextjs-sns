import { db } from '@/config/firebase';
import { NextResponse } from 'next/server';
import { collection, getDocs, query, where } from 'firebase/firestore';
import bcrypt from 'bcrypt';

// ログイン
export async function POST(request: Request) {
  const { email, password } = await request.json();

  try {
    // ユーザー情報を取得
    const q = query(collection(db, 'users'), where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error('ユーザーが見つかりません');
    }

    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();

    // パスワードを検証
    const passwordMatch = await bcrypt.compare(password, userData.password);
    if (!passwordMatch) {
      throw new Error('パスワードが間違っています');
    };

    return NextResponse.json({ userId: userData.userId });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 401 });
  }
}
