import { getSingleProductById } from "@/services/product";

type SingleProductPageProps = {
	params: {
		productId: string;
	};
};

export default async function SingleProductPage({
	params,
}: SingleProductPageProps) {
	const product = await getSingleProductById(params.productId);

	return <div>Product ID {product.id}</div>;
}
