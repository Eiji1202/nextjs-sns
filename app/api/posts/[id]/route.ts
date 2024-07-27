import { NextRequest, NextResponse } from 'next/server';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/config/firebase';

// 投稿を削除
export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  const postId = params.id;
  if (!postId) {
    return NextResponse.json({ error: 'postIdが指定されていません' }, { status: 400 });
  }

  try {
    const docRef = doc(db, 'posts', postId);
    await deleteDoc(docRef);
    return NextResponse.json({ message: '投稿が削除されました' });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
