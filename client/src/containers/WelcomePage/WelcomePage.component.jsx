import React, { useContext } from "react";
import { store } from "../../context/store";
import { logoutProceed } from "../../context/actions";

//components:
import Button from "../../components/Button/Button.component";

//styles:
import { WelcomePageContainer } from "./WelcomePage.styles";

const WelcomePage = () => {
	const { dispatch } = useContext(store);

	const logOutHandler = () => {
		dispatch(logoutProceed());
	};

	return (
		<WelcomePageContainer>
			<h2>Welcome, Furious Tester!</h2>
			<p>Here you can do A LOT of things !</p>
			<p>Select from navigation menu above the event you wish to test.</p>
			<p>OR .</p>
			<div data-testid="groupon-test__logout-button">
				<Button clickHandler={logOutHandler}>
					You can click this button and Logout
				</Button>
			</div>
		</WelcomePageContainer>
	);
};

export default WelcomePage;
