"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type ActiveLinkProps = {
	href: string;
	className: string;
	children: React.ReactNode;
};

export const ActiveLink = ({ href, children, className }: ActiveLinkProps) => {
	const pathName = usePathname();
	const isActive = href === pathName;
	const classNames = clsx(className, {
		underline: isActive,
	});

	return (
		<Link className={classNames} href={href}>
			{children}
		</Link>
	);
};
