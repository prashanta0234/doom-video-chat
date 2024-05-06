"use client";
import React, { useState } from "react";
import HomeOptionCard from "./HomeOptionCard";
import { useRouter } from "next/navigation";
import NewMeetingDialog from "./NewMettingDialog";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "../ui/use-toast";
import ReactDatePicker from "react-datepicker";

const HomeOptionsCards = () => {
	const [option, setOption] = useState<
		"newMeeting" | "joinMeeting" | "scheduleMeeting" | undefined
	>();
	const [value, setValue] = useState({
		dateTime: new Date(),
		description: "",
		link: "",
	});

	const [callDetails, setCallDetails] = useState<Call>();
	const [date, setDate] = useState(new Date());

	const router = useRouter();
	const user = useUser();
	const client = useStreamVideoClient();

	const { toast } = useToast();

	const createMeeting = async () => {
		if (!user || !client) return;
		try {
			const id = crypto.randomUUID();
			const call = client.call("default", id);

			if (!call) throw new Error("Failed to create new call.");
			const startAt =
				value.dateTime.toISOString() || new Date(Date.now()).toISOString();
			const description = value.description || "Instant call";
			await call.getOrCreate({
				data: {
					starts_at: startAt,
					custom: {
						description,
					},
				},
			});
			setCallDetails(call);
			if (!value.description) {
				router.push(`/meeting/${call.id}`);
			}
			toast({
				title: "Meeting Created! ",
			});
		} catch (e) {
			console.log(e);
			toast({
				title: "Can`t create a new meeting. ",
			});
		}
	};

	const createScheduleMeeting = async () => {
		if (!user || !client) return;
		try {
			if (!date) {
				toast({
					title: "Please select a Date.",
				});
			}
			const id = crypto.randomUUID();
			const call = client.call("default", id);

			if (!call) throw new Error("Failed to create new call.");
			const startAt =
				value.dateTime.toISOString() || new Date(Date.now()).toISOString();
			const description = value.description;
			const dateTime =
				date?.toISOString() || new Date(Date.now()).toISOString();
			await call.getOrCreate({
				data: {
					starts_at: dateTime,

					custom: {
						description,
						created_at: startAt,
					},
				},
			});

			setCallDetails(call);
			setValue({
				...value,
				link: `${process.env.NEXT_PUBLIC_HOST}/meeting/${call.id}`,
			});

			toast({
				title: "Meeting Created! ",
			});
		} catch (e) {
			console.log(e);
			toast({
				title: "Can`t create a new meeting. ",
			});
		}
	};

	const copyStateValue = () => {
		navigator.clipboard
			.writeText(value.link)
			.then(() => {
				// console.log("State value copied to clipboard");
				toast({
					title: "Link copied ",
				});

				// setOption(un);
			})
			.catch((error) => {
				console.error("Error copying state value to clipboard:", error);
			});
	};
	return (
		<div className="my-8 grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-3">
			<HomeOptionCard
				bg="bg-[#FF742E]"
				icon="/icons/plus.svg"
				title="New Meeting"
				description="Setup a new recording"
				handleClick={() => setOption("newMeeting")}
			/>
			<HomeOptionCard
				bg="bg-[#0E78F9]"
				icon="/icons/addpeople.svg"
				title="Join Meeting"
				description="via invitation link"
				handleClick={() => setOption("joinMeeting")}
			/>
			<HomeOptionCard
				bg="bg-[#830EF9]"
				icon="/icons/calender.svg"
				title="Schedule Meeting"
				description="Plan your meeting"
				handleClick={() => setOption("scheduleMeeting")}
			/>
			<HomeOptionCard
				bg="bg-[#F9A90E]"
				icon="/icons/Video.svg"
				title="View Recordings"
				description="Meeting recordings"
				handleClick={() => router.push("/recordings")}
			/>

			{/* {!setCallDetails} */}

			{!callDetails ? (
				<NewMeetingDialog
					isOpen={option === "scheduleMeeting"}
					onClose={() => setOption(undefined)}
					title="Create a schedule meeting"
					buttonText="Create schedule meeting"
					handleClick={createScheduleMeeting}
				>
					<div className="flex flex-col gap-2">
						<label>Add a description</label>
						<textarea
							className="bg-dark-2 text-white min-h-20 p-2 rounded-md "
							id="des"
							onChange={(e) =>
								setValue({ ...value, description: e.target.value })
							}
						/>
					</div>

					<div className="flex flex-col gap-2">
						<label>Select Date and time</label>
						<ReactDatePicker
							// showIcon
							selected={date}
							onChange={(date) => setDate(date!)}
							dateFormat="MM/dd/yyyy h:mm aa"
							// showTimeInput
							showTimeSelect
							timeIntervals={10}
							className="bg-dark-2 text-white w-full p-2 rounded-md "
						/>
					</div>
				</NewMeetingDialog>
			) : (
				<NewMeetingDialog
					isOpen={option === "scheduleMeeting"}
					onClose={() => {
						setOption(undefined);
						setCallDetails(undefined);
					}}
					title="Schedule Meeting Created"
					buttonText="Copy link"
					handleClick={copyStateValue}
					image="/icons/succesMeeting.svg"
				/>
			)}

			<NewMeetingDialog
				isOpen={option === "newMeeting"}
				onClose={() => setOption(undefined)}
				title="Create a instant meeting"
				buttonText="Create meeting"
				handleClick={createMeeting}
			/>
		</div>
	);
};

export default HomeOptionsCards;
