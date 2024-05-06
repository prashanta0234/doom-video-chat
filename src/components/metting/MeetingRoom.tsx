import { cn } from "@/lib/utils";
import {
	CallControls,
	CallParticipantsList,
	PaginatedGridLayout,
	SpeakerLayout,
	useCall,
	useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutList, Users } from "lucide-react";
import EndCall from "./EndCall";

type pageLayout = "grid" | "speaker-left" | "speaker-right";

const MeetingRoom = () => {
	const [layout, setLayout] = useState<pageLayout>("grid");
	const [showParticipant, setShowParticipant] = useState(false);
	const [windowSize, setWindowSize] = useState(window.innerWidth);
	const router = useRouter();
	const call = useCall();
	const { useCallCallingState, useParticipants } = useCallStateHooks();

	const callingState = useCallCallingState();
	console.log(callingState);

	const cancelCallButton = () => {
		router.push("/");
	};

	if (callingState === "left") {
		router.push("/");
	}
	useEffect(() => {
		const handleResize = () => {
			setWindowSize(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const RenderLayout = () => {
		switch (layout) {
			case "grid":
				return <PaginatedGridLayout groupSize={windowSize > 850 ? 6 : 4} />;
			case "speaker-left":
				return (
					<SpeakerLayout
						participantsBarPosition={"right"}
						participantsBarLimit={windowSize > 850 ? 3 : 1}
					/>
				);

			default:
				return <SpeakerLayout participantsBarPosition={"left"} />;
		}
	};
	return (
		<>
			<section className="p-4 h-screen w-full overflow-hidden relative text-white">
				<div className="relative size-full flex justify-center content-center h-[80%]">
					<div className="flex items-center size-full max-w-[1000px]">
						<RenderLayout />
						{/* <CallControls onLeave={cancelCallButton} /> */}
					</div>
					{/* <div className={`h-[calc(100vh-86px)] ${showParticipant&& 'show-block'} ml-2 'hidden'`}></div> */}
					<div
						className={cn(
							"h-[calc(100vh-86px)]  ml-2 hidden bg-dark-2 p-4 rounded-md absolute right-[10px]",
							{
								"show-block": showParticipant,
							}
						)}
					>
						<CallParticipantsList onClose={() => setShowParticipant(false)} />
					</div>
				</div>
				<div className="fixed bottom-0 py-2 flex justify-center items-center gap-5 w-full flex-wrap">
					<CallControls onLeave={cancelCallButton} />
					<DropdownMenu>
						<DropdownMenuTrigger title="Views">
							<LayoutList />
						</DropdownMenuTrigger>
						<DropdownMenuContent className="bg-dark-1">
							{["Grid", "Speaker-left", "Speaker-right"].map((item, index) => (
								<>
									<DropdownMenuItem
										className={`cursor-pointer hover:bg-gray-400 ${
											layout === item.toLowerCase() && "bg-blue-600"
										}`}
										key={index}
										onClick={() => setLayout(item.toLowerCase() as pageLayout)}
									>
										{item}
									</DropdownMenuItem>
									<DropdownMenuSeparator />
								</>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
					<button
						onClick={() => setShowParticipant((value) => !value)}
						title="Show participants"
					>
						<Users />
					</button>
					<EndCall />
				</div>
			</section>
		</>
	);
};

export default MeetingRoom;
