import MeetingList from "@/components/shared/MeetingList";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Upcoming Meetings",
	description: "Doom Zoom Upcoming meetings",
};

const UpComing = () => {
	return (
		<>
			<section>
				<div>
					<h1 className="font-bold text-3xl">Upcoming Meetings</h1>
				</div>
				<div>
					<MeetingList type="upcoming" />
				</div>
			</section>
		</>
	);
};

export default UpComing;
