async function ProductDetails({
  params,
}: {
  params: Promise<{ productsId: string }>;
}) {
  const { productsId } = await params;

  return (
    <div>
      Details about your product: {productsId}
    </div>
  );
}

export default ProductDetails;