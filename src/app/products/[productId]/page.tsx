type SingleProductPageProps = {
	params: {
		productId: string;
	};
};

export default function SingleProductPage({ params }: SingleProductPageProps) {
	return <div>Product ID #{params.productId}</div>;
}
