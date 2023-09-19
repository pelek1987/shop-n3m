import { getAllProducts } from "@/services/product";
import { ProductsList } from "@/ui/organisms/ProductsList";

export default async function ProductsPage() {
	const products = await getAllProducts();
	return (
		<div>
			<h2 className="sr-only">Products</h2>
			<ProductsList products={products} />
		</div>
	);
}
