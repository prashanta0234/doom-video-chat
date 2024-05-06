"use client";

import { useGetCalls } from "@/hooks/useDateCalls";
import React from "react";

const UpcomingCard = () => {
	const { upcomingCalls } = useGetCalls();

	const startsAtDate = upcomingCalls && upcomingCalls[1]?.state?.startsAt;
	const date = startsAtDate ? new Date(startsAtDate) : null;

	const formatAMPM = (date: Date): string => {
		let hours = date.getHours();
		let minutes = date.getMinutes();
		const ampm = hours >= 12 ? "PM" : "AM";
		hours = hours % 12;
		hours = hours ? hours : 12;
		minutes = +(minutes < 10 ? "0" + minutes : minutes);
		const strTime = hours + ":" + minutes;
		return strTime + " " + ampm;
	};

	const getMonthName = (monthNum: number): string => {
		const months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
		return months[monthNum];
	};

	const formatDate = (date: Date): string => {
		const month = getMonthName(date.getMonth());
		const day = date.getDate();
		const year = date.getFullYear();
		return `${month} ${day}, ${year}`;
	};

	return (
		<>
			{upcomingCalls && upcomingCalls.length > 0 && (
				<div className="!w-full min-h-[280px] bg-upcoming-card rounded-[20px] p-10 ">
					<div className="flex flex-col h-full justify-between gap-20">
						<p className="bg-dark-2 p-2 text-sm leading-5 rounded-md w-fit">
							Upcoming Meeting at: {date && formatDate(date)}
						</p>
						<div>
							<p className="text-7xl font-extrabold	">
								{date ? formatAMPM(date) : ""}
							</p>
							<p className="text-2xl font-medium text-[#C9DDFF]">
								{date ? formatDate(date) : ""}
							</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default UpcomingCard;
