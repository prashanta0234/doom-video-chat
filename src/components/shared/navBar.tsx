"use client";

import { sidebarLinks } from "@/constants";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SideBarButton from "./sideBarButton";

const NavBar = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			{open && (
				<section className="min-h-screen w-64 bg-dark-2  fixed md:hidden">
					<div className="md:hidden w-full flex justify-end p-4">
						<button onClick={() => setOpen(!open)}>
							<Image
								alt="menu"
								src={"/icons/close.svg"}
								height={25}
								width={25}
							/>
						</button>
					</div>
					<div className="pt-12">
						{sidebarLinks.map((item, i) => (
							<div key={i} onClick={() => setOpen(false)}>
								<SideBarButton
									imgURL={item.imgURL}
									label={item.label}
									route={item.route}
								/>
							</div>
						))}
					</div>
				</section>
			)}
			<nav className="bg-dark-2 h-16 w-full flex items-center !content-center justify-between flex-wrap px-7">
				<button className="md:hidden" onClick={() => setOpen(!open)}>
					<Image alt="menu" src={"/icons/menu.svg"} height={25} width={25} />
				</button>
				<Link href={"/"} className="flex gap-1  items-center  ">
					<Image
						alt="logo"
						src={"/icons/logo.svg"}
						width={32}
						height={32}
						className="hidden md:inline"
					/>
					<p className="text-[26px] font-extrabold text-white ">BOOM</p>
				</Link>

				<div className="w-[80] h-[80]  text-black">
					<UserButton />
				</div>
			</nav>
		</>
	);
};

export default NavBar;
