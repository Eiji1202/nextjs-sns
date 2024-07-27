import { NextResponse } from 'next/server';
import { addDoc, collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { db } from 'config/firebase';
import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';

// 投稿一覧を取得
export async function GET() {
  try {
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q);
    const posts = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        postId: doc.id,
        ...data,
        createdAt: formatDistanceToNow(new Date(data.createdAt), { addSuffix: true, locale: ja }),
      };
    });
    return NextResponse.json({ posts });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

// 投稿を保存
export async function POST(req: Request) {
  const { userId, content } = await req.json();
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

    const docRef = await addDoc(collection(db, 'posts'), {
      userId,
      username: userData.username,
      profileIcon: userData.profileIcon,
      content,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ id: docRef.id, message: '投稿が保存されました' });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
