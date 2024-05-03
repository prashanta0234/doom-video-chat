import Image from "next/image";
import React, { useState } from "react";
import NewMeetingDialog from "./newMettingDialog";

interface homeOptionCardProps {
	bg: string;
	icon: string;
	title: string;
	description: string;
	handleClick: () => void;
}

const HomeOptionCard = ({
	bg,
	icon,
	title,
	description,
	handleClick,
}: homeOptionCardProps) => {
	return (
		<>
			<div
				className={`h-64 w-full ${bg} rounded-xl p-6 cursor-pointer`}
				onClick={handleClick}
			>
				<div className="flex h-full flex-col justify-between">
					<div>
						<Image
							alt="meeting"
							src={icon}
							height={40}
							width={40}
							className="p-[10px] bg-white bg-opacity-35 rounded-lg"
						/>
					</div>
					<div>
						<p className="text-xl md:text-2xl font-bold">{title}</p>
						<p className="text-lg leading-6 font-normal">{description}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeOptionCard;
