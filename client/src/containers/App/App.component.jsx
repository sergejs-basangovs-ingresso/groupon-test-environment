import React, { useContext, useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { store } from "../../context/store";
import { loginProceed } from "../../context/actions";

//components:
import Header from "../Header/Header.component";
import LoginPage from "../LoginPage/LoginPage.component";
import WelcomePage from "../WelcomePage/WelcomePage.component";
import EventPage from "../EventPage/EventPage.component";
import ErrorView from "../../components/404/ErrorView.component";

//styles:
import { AppContainer } from "./App.styles";

function App({ history }) {
	const { state, dispatch } = useContext(store);
	const { authToken } = state;

	useEffect(() => {
		// on mount only
		dispatch(loginProceed(null, null, dispatch));
	}, [dispatch]);

	useEffect(() => {
		const path = authToken ? "/" : "/login";
		history.push(path);
	}, [authToken]);

	return (
		<AppContainer>
			<Header />
			<Switch>
				<Route exact path="/" component={WelcomePage} />
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/event-:id" component={EventPage} />
				<Route render={() => <ErrorView />} />
			</Switch>
		</AppContainer>
	);
}

export default withRouter(App);
