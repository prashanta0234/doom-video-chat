import React from "react";

const UpcomingCard = () => {
	return (
		<>
			<div className="!w-full min-h-[280px] bg-upcoming-card rounded-[20px] p-10 ">
				<div className="flex flex-col h-full justify-between gap-20">
					<p className="bg-dark-2 p-2 text-sm leading-5 rounded-md w-fit">
						Upcoming Meeting at: 12:30 PM
					</p>
					<div>
						<p className="text-7xl font-extrabold	">
							12:04 <span className="text-2xl font-medium">PM</span>
						</p>
						<p className="text-2xl font-medium text-[#C9DDFF]">
							{" "}
							Friday, 29 March 2024
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default UpcomingCard;
