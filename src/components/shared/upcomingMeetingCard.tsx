import Image from "next/image";
import React from "react";

const UpcomingMeetingCard = () => {
	return (
		<>
			<div className="h-64 bg-dark-2 p-8 flex flex-col justify-between">
				<div>
					<div className="flex flex-col gap-3">
						<Image
							alt="up coming"
							src={"/icons/upcoming.svg"}
							height={30}
							width={30}
						/>

						<h3 className="text-2xl font-bold">
							Team Sync: Sprint Planning & Updates
						</h3>
						<p>March 15, 2024 - 10:00 AM</p>
					</div>
				</div>
				<div className="flex gap-4">
					<button className="py-2 px-5 rounded-md bg-blue-1">Start</button>
					<button className="py-2 px-5 rounded-md flex items-center gap-2 bg-dark-1">
						<Image alt="copy" src={"/icons/copy.svg"} height={14} width={14} />
						Copy Invitation
					</button>
				</div>
			</div>
		</>
	);
};

export default UpcomingMeetingCard;
