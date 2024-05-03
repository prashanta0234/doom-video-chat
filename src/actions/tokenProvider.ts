"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_KEY;
const secretKey = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
	const user = await currentUser();

	if (!user) throw new Error("User not logged in.");
	if (!apiKey) throw new Error("Api key is missing.");
	if (!secretKey) throw new Error("Secret key is missing.");

	const client = new StreamClient(apiKey, secretKey);

	const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
	const issued = Math.floor(Date.now() / 1000) - 60;
	return client.createToken(user?.id, exp, issued);
};
