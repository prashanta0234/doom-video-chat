import { StreamVideoProvider } from "@/providers/StreamClientProvider";
import { auth } from "@clerk/nextjs/server";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
	auth().protect();
	return (
		<main>
			<StreamVideoProvider>{children}</StreamVideoProvider>
		</main>
	);
};

export default Layout;
