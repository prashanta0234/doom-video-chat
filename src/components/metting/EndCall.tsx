import { PhoneOff } from "lucide-react";
import React from "react";

const EndCall = () => {
	return (
		<>
			<button className="bg-red-600 py-2 px-4 rounded-xl" title="End meeting">
				<PhoneOff />
			</button>
		</>
	);
};

export default EndCall;
