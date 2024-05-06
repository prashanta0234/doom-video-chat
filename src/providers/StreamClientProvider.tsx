"use client";

import { useUser } from "@clerk/nextjs";
import {
	StreamCall,
	StreamVideo,
	StreamVideoClient,
	User,
} from "@stream-io/video-react-sdk";
import { ReactNode, useEffect, useState } from "react";

import { tokenProvider } from "@/actions/tokenProvider";
import { Loader } from "@/components/shared/Loader";

const apiKey = process.env.NEXT_PUBLIC_STREAM_KEY;

export const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
	const [videoClient, setVideoClient] = useState<StreamVideoClient>();
	const { user, isLoaded } = useUser();
	console.log(user);
	useEffect(() => {
		if (!user || !isLoaded) return;
		if (!apiKey) throw new Error("Stream Api key not found.");
		const client = new StreamVideoClient({
			apiKey,
			user: {
				id: user?.id,
				name: user?.fullName || user?.firstName || "User",
				image: user?.imageUrl,
			},
			tokenProvider: tokenProvider,
		});
		setVideoClient(client);
	}, [user, isLoaded]);
	if (!videoClient) return <Loader />;
	return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};
