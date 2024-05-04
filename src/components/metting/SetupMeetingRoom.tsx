import {
	DeviceSettings,
	VideoPreview,
	useCall,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";

const SetupMeetingRoom = () => {
	const [isMicCamToggleOn, setIsMicCamToggleOn] = useState(false);
	const call = useCall();
	if (!call) {
		throw new Error("useCall must be used within StreamCall component");
	}
	useEffect(() => {
		if (isMicCamToggleOn) {
			call.microphone.disable();
			call.camera.disable();
		} else {
			call.microphone.enable();
			call.camera.enable();
		}
	}, [isMicCamToggleOn, call]);
	return (
		<div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
			<h1 className="text-2xl font-bold">Setup</h1>
			<VideoPreview className="h-[800px] w-[800px]" mirror={false} />
		</div>
	);
};

export default SetupMeetingRoom;
