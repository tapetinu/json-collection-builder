import type { Metadata } from "next";
import { geistMono, geistSans } from "@/fonts/local-fonts";
import "./globals.css";

export const metadata: Metadata = {
	title: "JSON Collection Generator",
	description: "JSON Collection Generator",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
