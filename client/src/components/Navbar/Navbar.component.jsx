import React from "react";
import { NavLink } from "react-router-dom";
import { events } from "../../data/page.content";

//styles:
import { NavbarContainer } from "./Navbar.styles";

const Navbar = () => {
	return (
		<NavbarContainer data-testid="groupon-test__navbar">
			<ul>
				{events.map(({ id, url, title }) => (
					<li key={id}>
						<NavLink
							exact
							to={id}
							activeStyle={{
								color: "#000",
								textDecoration: "underline",
							}}
						>
							{title}
						</NavLink>
					</li>
				))}
			</ul>
		</NavbarContainer>
	);
};

export default Navbar;
