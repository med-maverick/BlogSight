import React from "react";
import Hero from "./Hero";
import MostTrendingSection from "./MostTrendingSection";
import TeamSection from "./TeamSection";


function BlogHome(){
	return (
		<div id="home-page">
			<Hero />
			<MostTrendingSection/>
			<TeamSection />
		</div>
	);
}

export default BlogHome;