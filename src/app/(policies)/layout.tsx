import "../globals.css";

export default function StaticPagesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="prose">
				<div className="bg-white">{children}</div>
			</body>
		</html>
	);
}
