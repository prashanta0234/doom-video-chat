import { ParticipantView, useCallStateHooks } from "@stream-io/video-react-sdk";

export const Participants = () => {
	const { useParticipants } = useCallStateHooks();
	const participants = useParticipants();
	return (
		<>
			{participants.map((p) => (
				<ParticipantView participant={p} key={p.sessionId} />
			))}
		</>
	);
};
