import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div key={props.index} className="card" style={{ width: "18rem" }}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.value.name}</h5>
				<a href="#" className="btn btn-primary">
					Learn more!
				</a>
				<a href="#" className="btn btn-primary">
					Learn more!
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	value: PropTypes.object,
	index: PropTypes.number
};
export default Card;
