import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer"


//create your first component
const Home = () => {
	const data = [
		{id:1, cardTitle:'This is my title', cardContent: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', cardUpdate: 'Updated 3 minutes ago.'},
		{id:2, cardTitle:'This is my 2nd title', cardContent: 'LALALLA 2 l lead-in to additional content. This content is a little bit longer.', cardUpdate: 'Updated 2 minutes ago.'},
		{id:3, cardTitle:'This is my 3rd title', cardContent: 'This is a This is the fional of 3 cards that i have quickly invetedsd.', cardUpdate: 'Updated 5 minutes ago.'}
	]


	
	return (
		<div>
			<Navbar/>
			<Jumbotron/>
			<div className="row row-cols-4" id="CardContainer">
				{data.map(({ id, cardTitle, cardContent, cardUpdate })=>(
          			<Card key={id} cardTitle={cardTitle} cardContent={cardContent} cardUpdate={cardUpdate}/>
        		))}
			</div>
			<Footer/>
		</div>
		
	)
};

export default Home;
