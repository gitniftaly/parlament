import { NextResponse } from "next/server";

export function middleware(request) {
  const user = "";
  if (!user) {
    return NextResponse.redirect(new URL("/", request.url), {
      status: 303,
    });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin"],
};
