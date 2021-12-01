import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = props => {
	const { store, actions } = useContext(Context);
	const [Favorites, setFavorites] = useState(0);
	const AddFavorites = event => {
		if (Favorites == 1) {
			actions.deleteFavorites(props.category, props.value);
		} else {
			actions.favorites(props.category, props.value);
		}
		setFavorites(Favorites == 0 ? 1 : 0);
	};

	return (
		<div key={props.index} className="card" style={{ width: "18rem" }}>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.value.name}</h5>
				<ul className="card-body">Name: {props.value.name}</ul>
				<Link className="btn btn-primary" to={"/detail/" + props.category + "/" + props.value.uid}>
					Learn more!
				</Link>
				<button
					href="#"
					className={`btn far fa-heart ${Favorites == 1 ? "favorites" : ""}`}
					onClick={AddFavorites}
				/>
			</div>
		</div>
	);
};

Card.propTypes = {
	value: PropTypes.object,
	index: PropTypes.number,
	category: PropTypes.string
};
export default Card;
