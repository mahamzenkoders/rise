import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getCookieFn } from './utils/storage.util';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('accessToken')?.value;
  const role = req.cookies.get('role')?.value;

 

  const { pathname } = req.nextUrl.clone();

  // if (pathname === "/") {
  //   return NextResponse.redirect(new URL("/dashboard", req.url));
  // }

  if(role=='jobSeeker'&& pathname=='/')
  {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if(role=='employer' && pathname=='/')
  {
    return NextResponse.redirect(new URL("/employer/employer-dashboard", req.url));
  }
  // const publicRoutes = ['/login'];

  // const protectedRoutes = ['/', '/products'];

  // if (token && publicRoutes.includes(pathname)) {
  //   return NextResponse.redirect(new URL('/', req.url));
  // }

  // if (!token && protectedRoutes.includes(pathname)) {
  //   return NextResponse.redirect(new URL('/login', req.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|static|favicon.ico|assets|favicon|manifest.json|_next).*)',
  ],
};
