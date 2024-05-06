"use client";
import { useUser } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useState } from "react";
import SetupMeetingRoom from "@/components/metting/SetupMeetingRoom";
import MeetingRoom from "@/components/metting/MeetingRoom";
import { useGetCallById } from "@/hooks/useGetCallById";
import { Loader } from "@/components/shared/Loader";

const Meeting = ({ params: { slug } }: { params: { slug: string } }) => {
	const [isSetupCompleted, setIsSetupCompleted] = useState(false);

	const { user, isLoaded } = useUser();

	const { call, isCallLoading } = useGetCallById(slug);
	if (isCallLoading) {
		return <Loader />;
	}
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
						{!isSetupCompleted ? (
							<SetupMeetingRoom setIsSetupCompleted={setIsSetupCompleted} />
						) : (
							<MeetingRoom />
						)}
					</StreamTheme>
				</StreamCall>
			</main>
		</>
	);
};

export default Meeting;
