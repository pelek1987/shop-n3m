import { ProductsListItemCoverImage } from "../atoms/ProductsListItemCoverImage";
import { ProductsListItemDescription } from "../atoms/ProductsListItemDescription";
import { type Product } from "@/types/product";

type ProductsListItemProps = {
	product: Product;
};

export const ProductsListItem = ({ product }: ProductsListItemProps) => {
	return (
		<li className="group">
			<ProductsListItemCoverImage coverImage={product.coverImage} />
			<ProductsListItemDescription product={product} />
		</li>
	);
};
