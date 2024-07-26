import { db, auth } from '@/config/firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { NextResponse, NextRequest } from 'next/server';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import bcrypt from 'bcrypt';
import { signUpSchemaServer, SignUpSchemaServerType } from '@/utils/schema/signUp';

// 新規ユーザー登録
export async function POST(request: NextRequest) {
  const data = await request.json();
  try {
    const parsedData: SignUpSchemaServerType = signUpSchemaServer.parse(data)
    const { username, email, password, profileIcon, dateOfBirth, gender } = parsedData;

    // メールアドレスが既に登録されていないか確認
    const q = query(collection(db, 'users'), where('email', '==', email));
    const userSnapshot = await getDocs(q);

    if (!userSnapshot.empty) {
      return NextResponse.json({ error: 'このメールアドレスは既に使用されています。' }, { status: 400 });
    }

    // パスワードをハッシュ化
    const hashedPassword = await bcrypt.hash(password, 10);

    // Firebase Authでユーザー作成
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Firestoreにユーザーデータを保存
    await addDoc(collection(db, 'users'), {
      userId: user.uid,
      username,
      email,
      password: hashedPassword,
      profileIcon,
      dateOfBirth: {
        year: dateOfBirth.year,
        month: dateOfBirth.month,
        day: dateOfBirth.day,
      },
      gender,
      createdAt: new Date()
    });

    return NextResponse.json({ message: '新規ユーザー登録に成功しました' });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
