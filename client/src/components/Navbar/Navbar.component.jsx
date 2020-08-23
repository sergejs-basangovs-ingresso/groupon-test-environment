import React from "react";
import { NavLink } from "react-router-dom";
import { events, testAttributes } from "../../data/page.content";

//styles:
import { NavbarContainer } from "./Navbar.styles";

const Navbar = () => {
	const active = {
		color: "#000",
		textDecoration: "underline",
	};
	return (
		<NavbarContainer data-testid={testAttributes.navbar}>
			<ul>
				<li>
					<NavLink exact to="/" activeStyle={active}>
						Homepage
					</NavLink>
				</li>

				{events.map(({ id, url, title }) => (
					<li key={id}>
						<NavLink exact to={"event-" + id} activeStyle={active}>
							{title}
						</NavLink>
					</li>
				))}
			</ul>
		</NavbarContainer>
	);
};

export default Navbar;
