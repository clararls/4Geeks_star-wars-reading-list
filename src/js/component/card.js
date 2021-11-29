import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = props => {
	//no se como hacer que salgan o el genero o la población
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
				<button href="#" className="btn far fa-heart favorites" />
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
