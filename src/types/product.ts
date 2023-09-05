export type ProductCoverImage = {
	src: string;
	alt: string;
};

export type Product = {
	id: string;
	name: string;
	price: number;
	coverImage: ProductCoverImage;
};
