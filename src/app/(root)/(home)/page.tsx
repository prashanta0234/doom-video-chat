import HomeOptionsCards from "@/components/home/homeOptionsCards";
import TodaysUpcomingMeetings from "@/components/home/todaysUpcomingMettings";
import UpcomingCard from "@/components/home/heroUpcomingCard";
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
