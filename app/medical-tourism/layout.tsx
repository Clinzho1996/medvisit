import MedicalVisitFooter from "@/components/MedicalFooter";
import MedicalNavbar from "@/components/MedicalHeader";
import { Nunito_Sans } from "next/font/google";
import "../globals.css";

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
		<>
			<MedicalNavbar />
			{children}
			<MedicalVisitFooter />
		</>
	);
}
