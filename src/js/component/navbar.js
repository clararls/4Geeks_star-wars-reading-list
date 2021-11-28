import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	// ver como poner el logo de star wars y intentar hacer un dropdown con un solo elemento
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span
					src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png"
					className="navbar-brand mb-0 h1">
					React Boilerplate
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
