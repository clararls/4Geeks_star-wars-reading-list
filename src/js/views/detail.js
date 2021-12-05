import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Detail = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.loadInfoData(params.category, params.theid);
	}, []);

	return (
		<div className="container">
			<h1>{store.result.properties ? store.result.properties.name : ""}</h1>
			<img src="https://c.tenor.com/ldtrtxE3DTgAAAAC/star-wars-r2d2.gif" />
			<br />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat sodales leo, id feugiat metus
				semper sed. Pellentesque dapibus metus quis volutpat mattis. Donec commodo mollis magna, non ornare quam
				tincidunt at. Fusce eu nibh eget ex luctus venenatis. Sed at odio blandit, euismod quam nec, iaculis
				ante.
			</p>
			<br />
			<div className="row">
				<div className="col-auto">
					<h5>Name</h5>
					{store.result.properties ? store.result.properties.name : ""}
				</div>
				<div className="col-auto">
					<h5>Birth Year</h5>
					{store.result.properties ? store.result.properties.birth_year : ""}
				</div>
				<div className="col-auto">
					<h5>Gender</h5>
					{store.result.properties ? store.result.properties.gender : ""}
				</div>
				<div className="col-auto">
					<h5>Height</h5>
					{store.result.properties ? store.result.properties.height : ""}
				</div>
				<div className="col-auto">
					<h5>Skin Color</h5>
					{store.result.properties ? store.result.properties.skin_color : ""}
				</div>
				<div className="col-auto">
					<h5>Eye Color </h5>
					{store.result.properties ? store.result.properties.eye_color : ""}
				</div>
			</div>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
