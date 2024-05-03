"use client";
import React, { useState } from "react";
import HomeOptionCard from "./homeOptionCard";
import { useRouter } from "next/navigation";
import NewMeetingDialog from "./newMettingDialog";

const HomeOptionsCards = () => {
	const [option, setOption] = useState<
		"newMeeting" | "joinMeeting" | "scheduleMeeting" | undefined
	>();
	const [open, setOpen] = useState(false);
	const router = useRouter();

	const createMeeting = () => {};
	return (
		<div className="my-8 grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-3">
			<HomeOptionCard
				bg="bg-[#FF742E]"
				icon="/icons/plus.svg"
				title="New Meeting"
				description="Setup a new recording"
				handleClick={() => setOption("newMeeting")}
			/>
			<HomeOptionCard
				bg="bg-[#0E78F9]"
				icon="/icons/addpeople.svg"
				title="Join Meeting"
				description="via invitation link"
				handleClick={() => setOption("joinMeeting")}
			/>
			<HomeOptionCard
				bg="bg-[#830EF9]"
				icon="/icons/calender.svg"
				title="Schedule Meeting"
				description="Plan your meeting"
				handleClick={() => setOption("scheduleMeeting")}
			/>
			<HomeOptionCard
				bg="bg-[#F9A90E]"
				icon="/icons/Video.svg"
				title="View Recordings"
				description="Meeting recordings"
				handleClick={() => router.push("/recordings")}
			/>

			<NewMeetingDialog
				isOpen={option === "newMeeting"}
				onClose={() => setOption(undefined)}
				title="Create a instant meeting"
				buttonText="Create meeting"
				handleClick={createMeeting}
			/>
		</div>
	);
};

export default HomeOptionsCards;
