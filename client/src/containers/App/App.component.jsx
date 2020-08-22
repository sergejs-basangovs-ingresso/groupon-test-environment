import React, { useContext, useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { store } from "../../context/store";
import { isAuthenticated } from "../../context/actions";

//components:
import Header from "../Header/Header.component";
import LoginPage from "../LoginPage/LoginPage.component";
import WelcomePage from "../WelcomePage/WelcomePage.component";
import EventPage from "../EventPage/EventPage.component";

//styles:
import { AppContainer } from "./App.styles";

function App({ history }) {
	const { state, dispatch } = useContext(store);
	const { authToken } = state;

	useEffect(() => {
		const path = authToken ? "/" : "/login";
		history.push(path);
	}, [authToken]);

	useEffect(() => {
		dispatch(isAuthenticated());
	}, [dispatch]);

	return (
		<AppContainer>
			<Header />
			<Switch>
				<Route exact path="/" component={WelcomePage} />
				<Route path="/login" component={LoginPage} />
				<Route path="/event-:id" component={EventPage} />
			</Switch>
		</AppContainer>
	);
}

export default withRouter(App);
