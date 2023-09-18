export type ProductCoverImage = {
	src: string;
	alt: string;
};

export type Product = {
	id: string;
	name: string;
	category: string;
	price: number;
	coverImage: ProductCoverImage;
};
