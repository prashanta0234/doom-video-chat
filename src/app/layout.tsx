import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import "react-datepicker/dist/react-datepicker.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Doom APP",
	description: "Clone of Zoom",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<SpeedInsights />
			<ClerkProvider>
				<html lang="en">
					<body className={`${inter.className} bg-dark-1 min-h-screen`}>
						{children}
						<Toaster />
					</body>
				</html>
			</ClerkProvider>
		</>
	);
}
