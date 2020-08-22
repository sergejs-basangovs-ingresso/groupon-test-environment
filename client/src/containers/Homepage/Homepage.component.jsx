import React, { useContext, useEffect } from "react";
import { store } from "../../context/store";
import { logoutProceed } from "../../context/actions";

//components:
import Button from "../../components/Button/Button.component";

//styles:
import { HomepageContainer } from "./Homepage.styles";

const Homepage = ({ history }) => {
	const {
		state: { authToken },
		dispatch,
	} = useContext(store);

	useEffect(() => {
		if (!authToken) {
			history.push("/login");
		}
	}, [authToken, history]);

	const logOutHandler = () => {
		dispatch(logoutProceed());
	};

	return (
		<HomepageContainer>
			<h2>Welcome, Furious Tester!</h2>
			<p>Here you can do A LOT of things !</p>
			<p>Select from navigation menu above the event you wish to test.</p>
			<p>OR .</p>

			<div data-testid="groupon-test__logout-button">
				<Button clickHandler={logOutHandler}>
					You can click this button and Logout
				</Button>
			</div>
		</HomepageContainer>
	);
};

export default Homepage;
