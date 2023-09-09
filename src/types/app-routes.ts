import { type ObjectValues } from "./utils";

export const AppRoutes = {
	HOME: "/",
	PRODUCTS: "/products",
} as const;

export type AppRoutesValues = ObjectValues<typeof AppRoutes>;
