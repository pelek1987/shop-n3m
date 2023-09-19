import "../globals.css";

export default function PoliciesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="mx-auto bg-white">{children}</div>;
}
