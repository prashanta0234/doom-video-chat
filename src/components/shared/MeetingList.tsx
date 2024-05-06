"use client";

import React, { useEffect, useState } from "react";
import MeetingCard from "./MeetingCard";
import { useRouter } from "next/navigation";
import { useGetCalls } from "@/hooks/useDateCalls";
import { Call, CallRecording } from "@stream-io/video-react-sdk";
import { Loader } from "./Loader";
import { useToast } from "../ui/use-toast";

type MeetingListType = {
	type: "upcoming" | "ended" | "recordings";
};

const MeetingList = ({ type }: MeetingListType) => {
	const router = useRouter();
	const { endedCalls, upcomingCalls, callRecordings, isLoading } =
		useGetCalls();
	const [recordings, setRecordings] = useState<CallRecording[]>([]);
	const { toast } = useToast();

	const getCalls = () => {
		switch (type) {
			case "ended":
				return endedCalls;
			case "recordings":
				return recordings;
			case "upcoming":
				return upcomingCalls;
			default:
				return [];
		}
	};

	const getNoCallsMessage = () => {
		switch (type) {
			case "ended":
				return "No Previous Calls";
			case "upcoming":
				return "No Upcoming Calls";
			case "recordings":
				return "No Recordings";
			default:
				return "";
		}
	};

	useEffect(() => {
		const fetchRecordings = async () => {
			const callData = await Promise.all(
				callRecordings?.map((meeting) => meeting.queryRecordings()) ?? []
			);

			const recordings = callData
				.filter((call) => call.recordings.length > 0)
				.flatMap((call) => call.recordings);

			setRecordings(recordings);
		};

		if (type === "recordings") {
			fetchRecordings();
		}
	}, [type, callRecordings]);

	if (isLoading) return <Loader />;

	const calls = getCalls();
	const noCallsMessage = getNoCallsMessage();

	return (
		<>
			<section className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-3">
				{calls && calls.length > 0 ? (
					<>
						{type === "upcoming" &&
							calls.map((meeting: Call | CallRecording, index) => (
								<MeetingCard
									key={index}
									title={
										(meeting as Call).state?.custom?.description ||
										(meeting as CallRecording).filename?.substring(0, 20) ||
										"No Title"
									}
									description={
										(meeting as Call).state?.startsAt?.toLocaleString() ||
										(meeting as CallRecording).start_time?.toLocaleString()
									}
									icon={"/icons/upcoming.svg"}
									button1="Start"
									button2="Copy Invitation"
									btn2Icon="/icons/copy.svg"
									handleClickBtn1={() =>
										router.push(`/meeting/${(meeting as Call).id}`)
									}
									handleClickBtn2={() => {
										navigator.clipboard.writeText(
											`${process.env.NEXT_PUBLIC_HOST}/meeting/${
												(meeting as Call).id
											}`
										);
										toast({
											title: "Link Copied",
										});
									}}
								/>
							))}

						{type === "ended" &&
							calls.map((meeting: Call | CallRecording, index) => (
								<MeetingCard
									key={index}
									title={
										(meeting as Call).state?.custom?.description ||
										(meeting as CallRecording).filename?.substring(0, 20) ||
										"No Title"
									}
									description={
										(meeting as Call).state?.startsAt?.toLocaleString() ||
										(meeting as CallRecording).start_time?.toLocaleString()
									}
									icon={"/icons/previous.svg"}
								/>
							))}

						{type === "recordings" &&
							calls.map((meeting: Call | CallRecording, index) => (
								<MeetingCard
									key={index}
									title={
										(meeting as Call).state?.custom?.description ||
										(meeting as CallRecording).filename?.substring(0, 20) ||
										"No Title"
									}
									description={
										(meeting as Call).state?.startsAt?.toLocaleString() ||
										(meeting as CallRecording).start_time?.toLocaleString()
									}
									icon={"/icons/recording.svg"}
									button2="Share"
									btn2Icon="/icons/share.svg"
									handleClickBtn2={() => {
										navigator.clipboard.writeText(
											(meeting as CallRecording).url
										);
										toast({
											title: "Link Copied",
										});
									}}
								/>
							))}
					</>
				) : (
					<h1>{noCallsMessage}</h1>
				)}
			</section>
		</>
	);
};

export default MeetingList;
