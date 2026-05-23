import MobilityFooter from "@/components/GlobalMobilityFooter";
import MobilityNavbar from "@/components/GlobalMobilityHeader";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
	variable: "--font-nunito-sans",
	subsets: ["latin"],
});

export default function GlobalMobilityLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<MobilityNavbar />
			{children}
			
		</>
	);
}
