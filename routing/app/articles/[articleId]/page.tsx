'use client'
import Link from 'next/link'
import { use } from 'react'

 function NewsArticle({ params, searchParams }: {
    params: Promise<{ articleId: string }>,
    searchParams: Promise< { lang? : "en" | "es" | "de" } >
}) {

    const { articleId } =  use(params)
    const { lang="en" } =  use(searchParams)
  return (
    <div>
        <h1>Article Id: {articleId}</h1>
        <p>Reading in language: {lang}</p>

        <div>
            <Link href={`/articles/${articleId}?lang=en`}>English</Link>
            <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
            <Link href={`/articles/${articleId}?lang=de`}>Germany</Link>
        </div>
    </div>
  )
}

export default NewsArticle


//for server components simple async await
//for client components use react use() hook to get params and searchParams