import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	//no se como hacer que salgan o el genero o la population
	if (props.value.gender !== "undefined" && props.value.terrain == "undefined") {
		return (
			<div key={props.index} className="card" style={{ width: "18rem" }}>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{props.value.name}</h5>
					<ul className="card-body">
						<li>Gender: {props.value.gender}</li>
						<li>Hair Color: {props.value.hair_color}</li>
						<li>Eye Color: {props.value.eye_color}</li>
					</ul>
					<button href="#" className="btn btn-primary">
						Learn more!
					</button>
					<button href="#" className="btn far fa-heart favorites" />
				</div>
			</div>
		);
	} else {
		return (
			<div key={props.index} className="card" style={{ width: "18rem" }}>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{props.value.name}</h5>
					<ul className="card-body">
						<li>Population: {props.value.population}</li>
						<li>Terrain: {props.value.terrain}</li>
					</ul>
					<button href="#" className="btn btn-primary">
						Learn more!
					</button>
					<button href="#" className="btn far fa-heart favorites" />
				</div>
			</div>
		);
	}
};

Card.propTypes = {
	value: PropTypes.object,
	index: PropTypes.number
};
export default Card;
