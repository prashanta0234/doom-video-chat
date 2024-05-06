import MeetingList from "@/components/shared/MeetingList";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Doom Recordings",
	description: "Doom Zoom Recordings page",
};

const Recordings = () => {
	return (
		<section>
			<div>
				<h1 className="font-bold text-3xl">Meeting Recordings</h1>
			</div>
			<div>
				<MeetingList type="recordings" />
			</div>
		</section>
	);
};

export default Recordings;
