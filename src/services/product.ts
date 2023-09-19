import { type Product } from "@/types/product";

type ProductItemResponse = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

const mapProductItemResponseToProductItem = (product: ProductItemResponse) => {
	return {
		id: product.id,
		name: product.title,
		category: product.category,
		price: product.price,
		coverImage: {
			src: product.image,
			alt: product.title,
		},
	};
};

export const getAllProducts = async (): Promise<Product[]> => {
	const res = await fetch(
		"https://naszsklep-api.vercel.app/api/products?take=20",
	);
	const data = (await res.json()) as ProductItemResponse[];

	return data.map((product) => mapProductItemResponseToProductItem(product));
};

export const getSingleProductById = async (
	id: ProductItemResponse["id"],
): Promise<Product> => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${id}`,
	);
	const data = (await res.json()) as ProductItemResponse;

	return mapProductItemResponseToProductItem(data);
};
