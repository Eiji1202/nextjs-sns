import { NextRequest, NextResponse } from 'next/server';
import { collection, where, getDocs, query } from 'firebase/firestore';
import { db } from '@/config/firebase';

// ユーザー情報を取得
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id: userId } = params;
  if (!userId) {
    return NextResponse.json({ error: 'ユーザーIDが指定されていません' }, { status: 400 });
  }

  try {
    const q = query(collection(db, 'users'), where('userId', '==', userId));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return NextResponse.json({ error: 'ユーザーが見つかりません' }, { status: 404 });
    }

    const userDoc = querySnapshot.docs[0];

    if (!userDoc.exists()) {
      return NextResponse.json({ error: 'ユーザーが見つかりません' }, { status: 404 });
    }

    const userData = userDoc.data();
    return NextResponse.json({ userData });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
