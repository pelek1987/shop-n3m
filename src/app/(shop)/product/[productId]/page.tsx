import { getSingleProductById } from "@/services/product";
import { formatMoney } from "@/utils";

type SingleProductPageProps = {
	params: {
		productId: string;
	};
};

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
				<p className="text-xl">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
					aspernatur necessitatibus incidunt laborum, officiis mollitia quae
					fugiat fugit vitae pariatur magni enim? Quaerat ratione alias veniam
					vero earum esse in.
				</p>
			</div>
		</div>
	);
}
