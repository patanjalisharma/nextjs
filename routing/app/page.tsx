import Link from "next/link"


function HomePage() {
  return (
    <div>
      <h1>Click blog to redirect</h1>
      <Link href="/blog">Blog</Link> <br />
      <Link href="/products">Products</Link>

      <Link href="/articles/breaking-news?lang=en">Read in english</Link>
      <Link href="/articles/breaking-news?lang=es">Read in spanish</Link>
    </div>
  )
}

export default HomePage