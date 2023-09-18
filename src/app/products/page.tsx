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
		<>
			<h2 className="sr-only">Products</h2>
			<ProductsList products={products} />
		</>
	);
}
