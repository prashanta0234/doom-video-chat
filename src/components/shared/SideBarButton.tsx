"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface sideBarProps {
	imgURL: string;
	route: string;
	label: string;
}

const SideBarButton = ({ imgURL, label, route }: sideBarProps) => {
	const pathname = usePathname();

	return (
		<div className="mx-3">
			<Link
				href={route}
				className={`w-full h-14 flex gap-4 hover:bg-gray-500 items-center pl-4 rounded-md ${
					pathname == route && "bg-blue-1"
				}`}
			>
				<Image src={imgURL} alt={label} width={24} height={24} />
				<p>{label}</p>
			</Link>
		</div>
	);
};

export default SideBarButton;
