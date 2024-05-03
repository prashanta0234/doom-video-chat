import React from "react";
import UpcomingMeetingCard from "../shared/upcomingMeetingCard";
import Link from "next/link";

const TodaysUpcomingMeetings = () => {
	return (
		<>
			<section>
				<div className="flex justify-between items-center">
					<p className="text-xl md:text-3xl font-bold">
						Today’s Upcoming Meetings
					</p>

					<Link href={"/upcoming"}>See all</Link>
				</div>
				<div className="mt-7 grid md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-3">
					<UpcomingMeetingCard />
					<UpcomingMeetingCard />
				</div>
			</section>
		</>
	);
};

export default TodaysUpcomingMeetings;
