import React from "react";
import SideBarButton from "./sideBarButton";
import { sidebarLinks } from "@/constants";

const SideBar = () => {
	return (
		<>
			<section className="min-h-screen w-64 bg-dark-2 pt-12 hidden md:inline">
				{sidebarLinks.map((item, i) => (
					<SideBarButton
						key={i}
						imgURL={item.imgURL}
						label={item.label}
						route={item.route}
					/>
				))}
			</section>
		</>
	);
};

export default SideBar;
