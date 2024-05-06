import React from "react";
import MeetingCard from "../shared/MeetingCard";
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
					<MeetingCard
						title="Team Sync: Sprint Planning & Updates"
						description="March 15, 2024 - 10:00 AM"
						icon="/icons/upcoming.svg"
						button1="Start"
						button2="Copy Invitation"
						btn2Icon="/icons/copy.svg"
					/>
					<MeetingCard
						title="Project Pulse Check: Weekly Standup"
						description="March 15, 2024 - 10:00 AM"
						icon="/icons/upcoming.svg"
						button1="Start"
						button2="Copy Invitation"
						btn2Icon="/icons/copy.svg"
					/>
				</div>
			</section>
		</>
	);
};

export default TodaysUpcomingMeetings;
