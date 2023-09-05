import { type Product } from "@/types/product";

type ProductsListItemDescriptionProps = {
	product: Product;
};

export const ProductsListItemDescription = ({ product }: ProductsListItemDescriptionProps) => {
	return (
		<>
			<h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
			<p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
		</>
	);
};
