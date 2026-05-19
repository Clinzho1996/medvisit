import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
	variable: "--font-nunito-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Medvisit Nigeria",
	description: "Top Medical Tourism Company in Nigeria | Medvisit Nigeria",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={cn("h-full", "antialiased", nunitoSans.variable)}>
			<body className={cn("min-h-full flex flex-col")}>{children}</body>
		</html>
	);
}
