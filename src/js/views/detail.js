import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CharactersDetail } from "../component/details/characters";
import { PlanetsDetail } from "../component/details/planets";
import { VehiclesDetail } from "../component/details/vehicles";

export const Detail = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.loadInfoData(params.category, params.theid);
	}, []);
	const getcomponentByCategory = category => {
		if (category == "people") {
			return <CharactersDetail value={store.result.properties} />;
		} else if (category == "planets") {
			return <PlanetsDetail value={store.result.properties} />;
		} else if (category == "vehicles") {
			return <VehiclesDetail value={store.result.properties} />;
		}
	};
	return (
		<div className="container">
			<h1>{store.result.properties ? store.result.properties.name : ""}</h1>
			<img className="rounded mx-auto d-block" src="https://c.tenor.com/ldtrtxE3DTgAAAAC/star-wars-r2d2.gif" />
			<br />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat sodales leo, id feugiat metus
				semper sed. Pellentesque dapibus metus quis volutpat mattis. Donec commodo mollis magna, non ornare quam
				tincidunt at. Fusce eu nibh eget ex luctus venenatis. Sed at odio blandit, euismod quam nec, iaculis
				ante.
			</p>
			<br />
			{getcomponentByCategory(params.category)}
			<br />
			<div className="text-center">
				<Link to="/">
					<button className="btn btn-primary btn-lg">Back home</button>
				</Link>
			</div>
		</div>
	);
};
