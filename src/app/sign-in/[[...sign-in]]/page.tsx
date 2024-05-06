import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Doom Login",
	description: "Doom login auth",
};

export default function Page() {
	return (
		<>
			<section className="flex justify-center items-center min-h-screen">
				<SignIn path="/sign-in" />
			</section>
		</>
	);
}
