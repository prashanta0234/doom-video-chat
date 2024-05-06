import React from "react";
import MeetingCard from "./MeetingCard";

type MeetingListType = {
	type: "upcoming" | "previous" | "recordings";
};

const MeetingList = ({ type }: MeetingListType) => {
	const dmar = [1, 2, 3, 4, 5];
	return (
		<>
			<section className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-3">
				{type === "upcoming" &&
					dmar.map((item, index) => (
						<MeetingCard
							key={index}
							title="Team Sync: Sprint Planning & Updates"
							description="March 15, 2024 - 10:00 AM"
							icon={"/icons/upcoming.svg"}
							button1="Start"
							button2="Copy Invitation"
							btn2Icon="/icons/copy.svg"
						/>
					))}
				{type === "previous" &&
					dmar.map((item, index) => (
						<MeetingCard
							key={index}
							title="Team Sync: Sprint Planning & Updates"
							description="March 15, 2024 - 10:00 AM"
							icon={"/icons/previous.svg"}
						/>
					))}
				{type === "recordings" &&
					dmar.map((item, index) => (
						<MeetingCard
							key={index}
							title="Team Sync: Sprint Planning & Updates"
							description="March 15, 2024 - 10:00 AM"
							icon={"/icons/recording.svg"}
							button1="Play"
							button2="Share"
							btn2Icon="/icons/share.svg"
							btn1Icon="/icons/play.svg"
						/>
					))}
			</section>
		</>
	);
};

export default MeetingList;
