import NavBar from "@/components/shared/NavBar";
import SideBar from "@/components/shared/SideBar";
import { StreamVideoProvider } from "@/providers/StreamClientProvider";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const HomeLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	auth().protect();
	return (
		<main>
			<NavBar />
			<section className="flex">
				<SideBar />
				<StreamVideoProvider>
					<div className="p-9 flex-1">{children}</div>
				</StreamVideoProvider>
			</section>
		</main>
	);
};

export default HomeLayout;
