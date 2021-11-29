import React, { useState } from "react";
import { Link } from "react-router-dom";

<Link to="/demo">
	<button className="btn btn-primary ml-3">Favorites</button>
</Link>;
export const Navbar = () => {
	const [dropdown, setDropdown] = useState(false);
	const toggleOpen = () => setDropdown(!dropdown);
	// intentar hacer un dropdown con un solo elemento
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png"
						alt="logo"
						id="logo"
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button onClick={toggleOpen}>Favorites</button>
					<div className={`dropdown-menu ${dropdown ? "show" : ""} `} aria-labelledby="dropdownMenuButton">
						<a className="dropdown-item" href="#">
							Delete
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
