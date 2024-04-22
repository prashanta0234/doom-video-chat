import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
	return (
		<>
			<nav className="bg-dark-2 h-16 w-full flex items-center !content-center justify-between flex-wrap px-7">
				<Link href={"/"} className="flex gap-1  items-center">
					<Image alt="logo" src={"/icons/logo.svg"} width={32} height={32} />
					<p className="text-[26px] font-extrabold text-white">BOOM</p>
				</Link>
				<div className="w-[50] h-[50] rounded bg-white text-black">
					<p>A</p>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
