import HomeOptionsCards from "@/components/home/homeOptionsCards";
import TodaysUpcomingMeetings from "@/components/home/todaysUpcomingMettings";
import UpcomingCard from "@/components/home/upcomingCard";
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
