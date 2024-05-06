"use client";
import MeetingRoom from "@/components/metting/MeetingRoom";
import SetupMeetingRoom from "@/components/metting/SetupMeetingRoom";
import React, { useState } from "react";

const MeetingPage = () => {
	const [isSetupCompleted, setIsSetupCompleted] = useState(false);
	return (
		<div>
			{!isSetupCompleted ? (
				<SetupMeetingRoom setIsSetupCompleted={setIsSetupCompleted} />
			) : (
				<MeetingRoom />
			)}
		</div>
	);
};

export default MeetingPage;
