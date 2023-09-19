import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { AppRoutes } from "@/types/app-routes";

export default function ShopLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<nav className="mb-20">
					<ul className="flex justify-center space-x-4">
						<li>
							<ActiveLink href={AppRoutes.HOME} className="px-4 py-2 text-lg">
								Home
							</ActiveLink>
						</li>
						<li>
							<ActiveLink
								exact={true}
								href={`${AppRoutes.PRODUCTS}`}
								className="px-4 py-2 text-lg"
							>
								All
							</ActiveLink>
						</li>
					</ul>
				</nav>
				{children}
			</div>
		</div>
	);
}
