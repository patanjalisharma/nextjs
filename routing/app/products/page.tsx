import Link from "next/link"

function ProductPage() {
  const productsId = 1;
  return (
    <div>

      
      <Link href="/">Home</Link>
        <Link href={`/products/${productsId}`}>Product 1</Link>
        <Link href="/products/2">Product 2</Link>
        <Link href="/products/3">Product 3</Link>
    </div>
  )
}

export default ProductPage