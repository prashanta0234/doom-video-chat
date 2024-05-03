import { auth } from "@clerk/nextjs/server";
import React from "react";

const MeetingRoom = ({ params }: { params: { slug: string } }) => {
	auth().protect();
	return <div>ID:{params.slug}</div>;
};

export default MeetingRoom;
