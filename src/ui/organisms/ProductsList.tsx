import { ProductsListItem } from "../molecules/ProductsListItem";
import { type Product } from "@/types/product";

type ProductsListProps = {
	products: Product[];
};

export const ProductsList = ({ products }: ProductsListProps) => {
	return (
		<ul
			data-testid="prodcuts-list"
			className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
		>
			{products.map((product) => (
				<ProductsListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
