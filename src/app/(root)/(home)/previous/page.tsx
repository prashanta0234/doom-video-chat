import MeetingCard from "@/components/shared/MeetingCard";
import MeetingList from "@/components/shared/MeetingList";
import React from "react";

const Previous = () => {
	return (
		<section>
			<div>
				<h1 className="font-bold text-3xl">Previous Meetings</h1>
			</div>
			<div>
				<MeetingList type="ended" />
			</div>
		</section>
	);
};

export default Previous;
