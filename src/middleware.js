import { NextRequest,NextResponse } from "next/server";
import signup from "./app/signup/page";
export function middleware(req){
    const token=req.cookies.get('token');
    const {pathname}=req.nextUrl;
    const protectedRoutes=['/home','/login','/signup'];
    if(pathname=="/home"){
    if(token){
        return NextResponse.redirect(new URL('/',req.url));
    }
    }
    if(pathname=="/login" || pathname=="/signup"){
        if(token){
            return NextResponse.redirect(new URL('/home',req.url))
        }
    }
    return NextResponse.next();
}
export const config = {
    matcher: ['/home','/login','/signup'],
  };






