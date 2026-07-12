import Link from "next/link"


function HomePage() {
  return (
    <div>
      <h1>Click blog to redirect</h1>
      <Link href="/blog">Blog</Link> <br />
      <Link href="/products">Products</Link>
    </div>
  )
}

export default HomePage