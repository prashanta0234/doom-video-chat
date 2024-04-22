import NavBar from "@/components/shared/navBar";
import SideBar from "@/components/shared/sideBar";
import React from "react";

const HomeLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<main>
			<NavBar />
			<section className="flex">
				<SideBar />

				<div className="p-9 flex-1">{children}</div>
			</section>
		</main>
	);
};

export default HomeLayout;
