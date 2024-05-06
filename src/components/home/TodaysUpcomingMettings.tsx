"use client";

import React from "react";
import MeetingCard from "../shared/MeetingCard";
import Link from "next/link";
import { useGetCalls } from "@/hooks/useDateCalls";
import { Call } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";

const TodaysUpcomingMeetings = () => {
	const { upcomingCalls } = useGetCalls();
	const router = useRouter();
	const { toast } = useToast();

	const calls = upcomingCalls?.slice(0, 2);

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
					{calls &&
						calls.map((meeting: Call, index) => (
							<MeetingCard
								key={index}
								title={
									(meeting as Call).state?.custom?.description || "No Title"
								}
								description={
									(meeting as Call).state?.startsAt?.toLocaleString() ||
									"No description"
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
				</div>
			</section>
		</>
	);
};

export default TodaysUpcomingMeetings;
