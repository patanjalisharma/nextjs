
async function ReviewDetails({params}: {
    params: Promise<{ productsId: string, reviewId: string}>
}) {

    const { productsId, reviewId } = await params;
  return (
    <div>
        Review {reviewId} for product {productsId}
    </div>
  )
}

export default ReviewDetails