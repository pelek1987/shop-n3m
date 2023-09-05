import { type ProductCoverImage } from "@/types/product";

type ProductsListItemCoverImageProps = {
	coverImage: ProductCoverImage;
};

export const ProductsListItemCoverImage = ({
	coverImage: { src, alt },
}: ProductsListItemCoverImageProps) => {
	return (
		<div className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg bg-gray-200">
			<img
				src={src}
				alt={alt}
				className="h-full w-full object-cover object-center group-hover:opacity-75"
			/>
		</div>
	);
};
