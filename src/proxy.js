import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'
 
// This function can be marked `async` if using `await` inside
export async function proxy(request) {

//   return NextResponse.redirect(new URL('/home', request.url))
// console.log("proxy message");


const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})

if (!session){
     return NextResponse.redirect(new URL('/signIn', request.url))
}

}
 
export const config = {
  matcher: ['/myProfile', '/all-products/:path' ],
}
