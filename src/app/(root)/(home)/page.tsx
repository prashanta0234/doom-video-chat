import HomeOptionsCards from "@/components/home/HomeOptionsCards";
import TodaysUpcomingMeetings from "@/components/home/TodaysUpcomingMettings";
import UpcomingCard from "@/components/home/HeroUpcomingCard";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Doom Home",
	description: "Doom Zoom Home page",
};

const Home = () => {
	return (
		<>
			<UpcomingCard />
			<HomeOptionsCards />
			<TodaysUpcomingMeetings />
		</>
	);
};

export default Home;
