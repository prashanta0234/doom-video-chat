"use client";

import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React from "react";

import { useGetCallById } from "@/hooks/useGetCallById";
import { Loader } from "@/components/shared/Loader";
import MeetingPage from "./MeetingPage";

const Meeting = ({ params: { slug } }: { params: { slug: string } }) => {
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
						<MeetingPage />
					</StreamTheme>
				</StreamCall>
			</main>
		</>
	);
};

export default Meeting;
