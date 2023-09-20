import { type Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getSingleProductById } from "@/services/product";
import { formatMoney } from "@/utils";

type SingleProductPageProps = {
	params: {
		productId: string;
	};
};

export async function generateMetadaata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getSingleProductById(params.productId);

	return {
		title: `${product.name} - My Shop at Next13Masters`,
		description: product.description,
		openGraph: {
			title: `${product.name} - My Shop at Next13Masters`,
			description: product.description,
			images: [{ url: product.coverImage.src, alt: product.coverImage.alt }],
		},
	};
}

export default async function SingleProductPage({
	params,
}: SingleProductPageProps) {
	const product = await getSingleProductById(params.productId);

	return (
		<div className="mx-auto grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
			<div className="rounded-lg border-2 border-slate-100 bg-white p-4">
				<img
					className="h-full w-full object-cover object-center"
					src={product.coverImage.src}
					alt={product.coverImage.alt}
				/>
			</div>
			<div className="p-4">
				<h1 className="mb-4 text-2xl font-bold">{product.name}</h1>
				<p className="mb-4 text-xl">{formatMoney(product.price)}</p>
				<p className="prose text-xl">
					<MDXRemote source={product.longDescription} />
				</p>
			</div>
		</div>
	);
}
