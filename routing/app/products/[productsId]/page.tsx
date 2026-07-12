import { Metadata } from 'next';

type Props = {
  params: Promise<{ productsId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productsId } = await params;
  return {
    title: `Product ${productsId}`,
  }
}


async function ProductDetails({
  params,
}: Props) {
  const { productsId } = await params;

  return (
    <div>
      Details about your product: {productsId}
    </div>
  );
}

export default ProductDetails;