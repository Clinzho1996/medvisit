import MedicalVisitFooter from "@/components/MedicalFooter";
import MedicalNavbar from "@/components/MedicalHeader";
import { cn } from "@/lib/utils";
import { Geist, Nunito_Sans } from "next/font/google";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const nunitoSans = Nunito_Sans({
	variable: "--font-nunito-sans",
	subsets: ["latin"],
});

export default function MedicalLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={cn(
				"h-full",
				"antialiased",
				nunitoSans.variable,
				"font-sans",
				geist.variable,
			)}>
			<body className="min-h-full flex flex-col">
				<MedicalNavbar />
				{children}
				<MedicalVisitFooter />
			</body>
		</html>
	);
}
