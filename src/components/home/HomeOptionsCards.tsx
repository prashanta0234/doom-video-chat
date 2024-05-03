"use client";
import React, { useState } from "react";
import HomeOptionCard from "./HomeOptionCard";
import { useRouter } from "next/navigation";
import NewMeetingDialog from "./NewMettingDialog";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "../ui/use-toast";
// import { toast } from "../ui/use-toast";

const HomeOptionsCards = () => {
	const [option, setOption] = useState<
		"newMeeting" | "joinMeeting" | "scheduleMeeting" | undefined
	>();
	const [value, setValue] = useState({
		dateTime: new Date(),
		description: "",
		link: "",
	});

	const [callDetails, setCallDetails] = useState<Call>();

	const router = useRouter();
	const user = useUser();
	const client = useStreamVideoClient();

	const { toast } = useToast();

	const createMeeting = async () => {
		if (!user || !client) return;
		try {
			if (!value.description) {
				toast({
					title: "Please select a Date ",
				});
			}
			const id = crypto.randomUUID();
			const call = client.call("default", id);

			if (!call) throw new Error("Failed to create new call.");
			const startAt =
				value.dateTime.toISOString() || new Date(Date.now()).toISOString();
			const description = value.description || "Instant call";
			await call.getOrCreate({
				data: {
					starts_at: startAt,
					custom: {
						description,
					},
				},
			});
			setCallDetails(call);
			if (!value.description) {
				router.push(`/meeting/${call.id}`);
			}
			toast({
				title: "Meeting Created! ",
			});
		} catch (e) {
			console.log(e);
			toast({
				title: "Can`t create a new meeting. ",
			});
		}
	};
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
