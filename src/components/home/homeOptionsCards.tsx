import Image from "next/image";
import React from "react";

const HomeOptionsCards = () => {
	return (
		<div className="my-8 grid md:grid-cols-4 sm:grid-cols-1 gap-3">
			<div className="h-64 w-full bg-[#FF742E] rounded-xl p-6">
				<div className="flex h-full flex-col justify-between">
					<div>
						<Image
							alt="new metting"
							src={"/icons/plus.svg"}
							height={40}
							width={40}
							className="p-[10px] bg-white bg-opacity-35 rounded-lg"
						/>
					</div>
					<div>
						<p className="text-2xl font-bold">New Meeting</p>
						<p className="text-lg leading-6 font-normal">
							Setup a new recording
						</p>
					</div>
				</div>
			</div>
			<div className="h-64 w-full bg-[#0E78F9] rounded-xl p-6">
				<div className="flex h-full flex-col justify-between">
					<div>
						<Image
							alt="new metting"
							src={"/icons/addpeople.svg"}
							height={40}
							width={40}
							className="p-[10px] bg-white bg-opacity-35 rounded-lg"
						/>
					</div>
					<div>
						<p className="text-2xl font-bold">Join Meeting</p>
						<p className="text-lg leading-6 font-normal">via invitation link</p>
					</div>
				</div>
			</div>
			<div className="h-64 w-full bg-[#830EF9] rounded-xl p-6">
				<div className="flex h-full flex-col justify-between">
					<div>
						<Image
							alt="new metting"
							src={"/icons/calender.svg"}
							height={40}
							width={40}
							className="p-[10px] bg-white bg-opacity-35 rounded-lg"
						/>
					</div>
					<div>
						<p className="text-2xl font-bold">Schedule Meeting</p>
						<p className="text-lg leading-6 font-normal">Plan your meeting</p>
					</div>
				</div>
			</div>
			<div className="h-64 w-full bg-[#F9A90E] rounded-xl p-6">
				<div className="flex h-full flex-col justify-between">
					<div>
						<Image
							alt="new metting"
							src={"/icons/Video.svg"}
							height={40}
							width={40}
							className="p-[10px] bg-white bg-opacity-35 rounded-lg"
						/>
					</div>
					<div>
						<p className="text-2xl font-bold">View Recordings</p>
						<p className="text-lg leading-6 font-normal">Meeting recordings</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeOptionsCards;
