import { ProductsList } from "@/ui/organisms/ProductsList";

const products = [
	{
		id: "1",
		name: "Earthen Bottle",
		price: 2137,
		coverImage: {
			src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
			alt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
		},
	},
	{
		id: "2",
		name: "Nomad Tumbler",
		price: 2137,
		coverImage: {
			src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
			alt: "Olive drab green insulated bottle with flared screw lid and flat top.",
		},
	},
	{
		id: "3",
		name: "Focus Paper Refill",
		price: 2137,
		coverImage: {
			src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
			alt: "Person using a pen to cross a task off a productivity paper card.",
		},
	},
	{
		id: "4",
		name: "Machined Mechanical Pencil",
		price: 2137,
		coverImage: {
			src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
			alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
		},
	},
];

export default function ProductsPage() {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="sr-only">Products</h2>
				<ProductsList products={products} />
			</div>
		</div>
	);
}
