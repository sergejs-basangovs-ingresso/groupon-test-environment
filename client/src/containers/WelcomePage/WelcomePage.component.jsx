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
			<p>Here you can do plenty of things !</p>
			<p>Select from navigation menu above the event you wish to view.</p>
			<p>OR you can click this button and logout</p>
			<div>
				<Button clickHandler={logOutHandler}>Log out</Button>
			</div>
		</WelcomePageContainer>
	);
};

export default WelcomePage;
