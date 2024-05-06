import React, { ReactNode } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

interface NewMeetingDialogProps {
	onClose: () => void;
	isOpen: boolean;
	title: string;
	buttonText?: string;
	handleClick?: () => void;
	children?: ReactNode;
	image?: string;
	buttonIcon?: string;
}

const NewMeetingDialog = ({
	onClose,
	isOpen,
	title,
	buttonText,
	handleClick,
	children,
	image,
	buttonIcon,
}: NewMeetingDialogProps) => {
	return (
		<>
			<Dialog open={isOpen} onOpenChange={onClose}>
				<DialogContent className="bg-dark-1 border-none">
					<div className="flex flex-col gap-6">
						<DialogHeader>
							<DialogTitle className=" text-center">{title}</DialogTitle>
						</DialogHeader>
						{image && (
							<div className="flex justify-center">
								<Image alt="img" src={image} width={72} height={72} />
							</div>
						)}
						{children}
						<button
							onClick={handleClick}
							className="bg-blue-1 py-2 rounded-md "
						>
							{buttonIcon && <Image alt="icon" src={buttonIcon} />}
							{buttonText}
						</button>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default NewMeetingDialog;
