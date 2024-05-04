"use client";
import { useUser } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useState } from "react";
import SetupMeetingRoom from "@/components/metting/SetupMeetingRoom";
import MeetingRoom from "@/components/metting/MeetingRoom";
import { useGetCallById } from "@/hooks/useGetCallById";

const Meeting = ({ params: { slug } }: { params: { slug: string } }) => {
	const [isSetupCompleted, setIsSetupCompleted] = useState(false);

	const { user, isLoaded } = useUser();
	const { call, isLoading } = useGetCallById(slug);
	if (!call)
		return (
			<p className="text-center text-3xl font-bold text-white">
				Call Not Found
			</p>
		);
	return (
		<>
			<main className="h-screen w-full">
				<StreamCall call={call}>
					<StreamTheme>
						{!isSetupCompleted ? <SetupMeetingRoom /> : <MeetingRoom />}
					</StreamTheme>
				</StreamCall>
			</main>
		</>
	);
};

export default Meeting;
