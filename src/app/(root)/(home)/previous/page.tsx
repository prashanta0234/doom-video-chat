import MeetingList from "@/components/shared/MeetingList";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Previous Meetings",
	description: "Doom Zoom Previous Meetings  page",
};

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
