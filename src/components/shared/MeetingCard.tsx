import Image from "next/image";
import React from "react";

type MeetingListType = {
	icon: string;
	title: string;
	description: string;
	button1?: string;
	button2?: string;
	btn1Icon?: string;
	btn2Icon?: string;
	handleClickBtn1?: () => void;
	handleClickBtn2?: () => void;
};

const MeetingCard = ({
	icon,
	title,
	description,
	button1,
	button2,
	btn1Icon,
	btn2Icon,
	handleClickBtn1,
	handleClickBtn2,
}: MeetingListType) => {
	return (
		<>
			<div className="min-h-64 bg-dark-2 p-8 flex flex-col justify-between rounded-lg">
				<div>
					<div className="flex flex-col gap-3">
						<Image alt="up coming" src={icon} height={30} width={30} />

						<h3 className="text-xl md:text-2xl font-bold">{title}</h3>
						<p>{description}</p>
					</div>
				</div>
				<div className="flex gap-4 mt-5">
					{button1 && (
						<button
							className="py-2 px-5 rounded-md bg-blue-1 flex items-center gap-2"
							onClick={handleClickBtn1}
						>
							{btn1Icon && (
								<Image alt="copy" src={btn1Icon} height={14} width={14} />
							)}

							{button1}
						</button>
					)}

					{button2 && (
						<button
							className="py-2 px-5 rounded-md flex items-center gap-2 bg-dark-1"
							onClick={handleClickBtn2}
						>
							{btn2Icon && (
								<Image alt="copy" src={btn2Icon} height={14} width={14} />
							)}
							{button2}
						</button>
					)}
				</div>
			</div>
		</>
	);
};

export default MeetingCard;
