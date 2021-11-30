import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Card from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container testimonial-group">
			<div className="row">
				<h1 className="categoryData">Characters</h1>
				{store.characters
					? store.characters.map((value, index) => {
							return <Card key={index} value={value} index={index} category={"people"} />;
					  })
					: ""}
			</div>
			<div className="row">
				<h1 className="categoryData">Planets</h1>
				{store.planets
					? store.planets.map((value, index) => {
							return <Card key={index} value={value} index={index} category={"planets"} />;
					  })
					: ""}
			</div>
			<div className="row">
				<h1 className="categoryData">Vehicles</h1>
				{store.vehicles
					? store.vehicles.map((value, index) => {
							return <Card key={index} value={value} index={index} category={"vehicles"} />;
					  })
					: ""}
			</div>
		</div>
	);
};
