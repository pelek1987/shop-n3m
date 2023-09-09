"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { type AppRoutesValues } from "@/types/app-routes";

type ActiveLinkProps = {
	href: AppRoutesValues;
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
