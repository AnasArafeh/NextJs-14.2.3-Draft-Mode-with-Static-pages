// route handler enabling draft mode
import { draftMode, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    const { pathname, searchParams } = request.nextUrl;

    const slug = searchParams.get('slug')

    searchParams.set('path', slug);
    searchParams.set('test', "working");
    request.nextUrl.pathname = slug;

    console.log("slug", slug)
    console.log("request.nextUrl.pathname", request.nextUrl.pathname)
    draftMode().enable()
    redirect(`${request.nextUrl.pathname}${request.nextUrl.search}`)
}