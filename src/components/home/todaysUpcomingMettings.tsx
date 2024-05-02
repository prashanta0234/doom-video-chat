import React from "react";
import UpcomingMeetingCard from "../shared/upcomingMeetingCard";

const TodaysUpcomingMeetings = () => {
	return (
		<>
			<section>
				<div className="flex justify-between items-center">
					<p className="text-3xl font-bold">Today’s Upcoming Meetings</p>
					<p>See all</p>
				</div>
				<div className="mt-7 grid md:grid-cols-2 sm:grid-cols-1 gap-3">
					<UpcomingMeetingCard />
					<UpcomingMeetingCard />
				</div>
			</section>
		</>
	);
};

export default TodaysUpcomingMeetings;
