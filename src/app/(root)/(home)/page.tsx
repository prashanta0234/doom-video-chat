import HomeOptionsCards from "@/components/home/HomeOptionsCards";
import TodaysUpcomingMeetings from "@/components/home/TodaysUpcomingMettings";
import UpcomingCard from "@/components/home/HeroUpcomingCard";
import React from "react";

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
