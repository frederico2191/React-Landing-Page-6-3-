import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer"


//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Jumbotron/>
			<div className="row row-cols-4" id="CardContainer">
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
			<Footer/>
		</div>
		
	)
};

export default Home;
