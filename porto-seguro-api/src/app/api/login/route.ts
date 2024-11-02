import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

function generateAuthToken(userId: string): string {

    return `mock_token_for_user_${userId}`; 
}

export async function POST(request: NextRequest) {
    const { username, password } = await request.json();

 
    if (username == 'mr.fiap@gmail.com' && password == 'front-end') {
        const token = generateAuthToken('123');
        const response = NextResponse.json({ message: 'Login bem-sucedido' });

  
        response.cookies.set('auth_token', token, {
            httpOnly: true,
            maxAge: 60 * 60,  
            path: '/',
        });

        return response;
    } else {
        return NextResponse.json({ message: 'Credenciais inválidas' }, { status: 401 });
    }
}
