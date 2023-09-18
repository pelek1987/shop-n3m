import Link from "next/link";
import { ProductsListItemCoverImage } from "../atoms/ProductsListItemCoverImage";
import { ProductsListItemDescription } from "../atoms/ProductsListItemDescription";
import { type Product } from "@/types/product";
import { AppRoutes } from "@/types/app-routes";

type ProductsListItemProps = {
	product: Product;
};

export const ProductsListItem = ({ product }: ProductsListItemProps) => {
	return (
		<li className="group">
			<Link href={`${AppRoutes.PRODUCTS}/${product.id}`}>
				<ProductsListItemCoverImage coverImage={product.coverImage} />
				<ProductsListItemDescription product={product} />
			</Link>
		</li>
	);
};
