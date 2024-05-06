import {
	CallControls,
	DeviceSelectorAudioInput,
	DeviceSelectorVideo,
	DeviceSettings,
	VideoPreview,
	useCall,
	useCallStateHooks,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { DisabledVideoPreview } from "./OffVideoMic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Alert from "../shared/Alert";

const SetupMeetingRoom = ({
	setIsSetupCompleted,
}: {
	setIsSetupCompleted: (value: boolean) => void;
}) => {
	const [isMicToggleOn, setIsMicToggleOn] = useState(false);
	const [isCamToggleOn, setCamToggleOn] = useState(false);
	const router = useRouter();

	const { useCallEndedAt, useCallStartsAt } = useCallStateHooks();
	const callStartsAt = useCallStartsAt();
	const callEndedAt = useCallEndedAt();
	const callTimeNotArrived =
		callStartsAt && new Date(callStartsAt) > new Date();
	const callHasEnded = !!callEndedAt;

	const call = useCall();
	if (!call) {
		throw new Error("useCall must be used within StreamCall component");
	}
	useEffect(() => {
		if (isMicToggleOn) {
			call.microphone.disable();
		}

		if (isCamToggleOn) {
			call.camera.disable();
		}

		if (callTimeNotArrived) {
			call.camera.disable();
			call.microphone.disable();
		} else {
			call.camera.enable();
			call.microphone.enable();
		}
	}, [isMicToggleOn, isCamToggleOn, call, callTimeNotArrived]);

	if (callTimeNotArrived) {
		return (
			<Alert
				title={`Your Meeting has not started yet. It is scheduled for ${callStartsAt.toLocaleString()}`}
			/>
		);
	}
	if (callHasEnded)
		return (
			<Alert
				title="The call has been ended by the host"
				iconUrl="/icons/call-ended.svg"
			/>
		);

	const joinMeeting = () => {
		setIsSetupCompleted(true);
		call.join();
	};

	const cancelCallButton = () => {
		router.push("/");
	};

	return (
		<div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white ">
			<h1 className="text-2xl font-bold">Setup your meeting</h1>
			<div className=" md:w-2/5 place-content-center overflow-hidden">
				<VideoPreview
					// mirror={false}
					DisabledVideoPreview={DisabledVideoPreview}
				/>
				<CallControls onLeave={cancelCallButton} />
			</div>
			<div>
				<button
					onClick={joinMeeting}
					className="bg-green-600 py-1 px-3 text-black rounded-md"
				>
					Join meeting
				</button>
			</div>
		</div>
	);
};

export default SetupMeetingRoom;
