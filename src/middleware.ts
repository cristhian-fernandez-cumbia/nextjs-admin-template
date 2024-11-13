export { default } from 'next-auth/middleware'

export const config = {
  matcher: [
    "/",
    "/productos",
    "/productos/:path",
    "/usuarios/:path",
  ]
}