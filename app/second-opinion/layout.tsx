import ExpertFooter from "@/components/ExpertFooter";
import ExpertNavbar from "@/components/ExpertHeader";
import { Nunito_Sans } from "next/font/google";

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
			<ExpertNavbar />
			{children}
			<ExpertFooter />
		</>
	);
}
