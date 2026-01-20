import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const adminPassword = process.env.ADMIN_DASHBOARD_PASSWORD;

  if (!adminPassword) {
    return NextResponse.json(
      { message: '관리자 비밀번호가 설정되지 않았습니다.' },
      { status: 500 },
    );
  }

  const { password } = await request.json();

  if (password !== adminPassword) {
    return NextResponse.json({ message: '비밀번호가 올바르지 않습니다.' }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });

  response.cookies.set('admin_session', 'active', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 8, // 8시간
    path: '/',
  });

  return response;
}


