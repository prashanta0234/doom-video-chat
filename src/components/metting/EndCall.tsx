import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import { PhoneOff } from "lucide-react";
import React from "react";

const EndCall = () => {
	const { useCallCreatedBy, useLocalParticipant } = useCallStateHooks();
	const creator = useCallCreatedBy();
	const user = useLocalParticipant();
	const call = useCall();

	return (
		<>
			<button
				className={`bg-red-600 py-2 px-4 rounded-xl ${
					creator?.id !== user?.userId && "hidden"
				}`}
				title="End meeting"
				onClick={() => call?.endCall()}
			>
				<PhoneOff />
			</button>
		</>
	);
};

export default EndCall;
