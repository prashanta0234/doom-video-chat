"use client";
import { useUser } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useState } from "react";

const MeetingRoom = ({ params }: { params: { slug: string } }) => {
	const [isSetupCompleted, setIsSetupCompleted] = useState(false);

	const { user, isLoaded } = useUser();
	return (
		<>
			<main className="h-screen w-full">
				<StreamCall>
					<StreamTheme>
						{isSetupCompleted ? "Meeting Room" : "setup Meeting room"}
					</StreamTheme>
				</StreamCall>
			</main>
		</>
	);
};

export default MeetingRoom;
