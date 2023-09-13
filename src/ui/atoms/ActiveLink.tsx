"use client";

import { type UrlObject } from "url";
import { type } from "os";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
// import { type AppRoutesValues } from "@/types/app-routes";
import type { Route } from "next";

type ActiveLinkProps<T extends string> = {
	href: Route<T> | UrlObject;
	className: string;
	children: React.ReactNode;
	exact?: boolean;
};

export const ActiveLink = <T extends string>({
	href,
	children,
	className,
	exact = true,
}: ActiveLinkProps<T>) => {
	const pathName = usePathname();

	let isActive: boolean = false;

	if (typeof href === "string") {
		isActive = exact
			? href === pathName
			: pathName.split("/").includes(href.toString().slice(1));
	}

	if (typeof href === "object" && href.pathname) {
		isActive = exact
			? href.pathname === pathName
			: pathName.split("/").includes(href.pathname.slice(1));
	}

	const classNames = clsx(className, {
		underline: isActive,
	});

	return (
		<Link className={classNames} href={href}>
			{children}
		</Link>
	);
};
