import React, { useContext } from "react";
import { store } from "../../context/store";

// components:
import Navbar from "../../components/Navbar/Navbar.component";
//styles:
import { HeaderContainer } from "./Header.styles";

const Header = () => {
	const { state } = useContext(store);
	const { authToken } = state;

	return (
		<HeaderContainer>
			<h1>
				Booking app test webpage. <br />
				<small>Embedded in an iframe within this parent page</small>
			</h1>

			{authToken ? <Navbar /> : null}
		</HeaderContainer>
	);
};

export default React.memo(Header);
