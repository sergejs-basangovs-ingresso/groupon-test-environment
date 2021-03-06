import React, { useContext, useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { store } from "../../context/store";
import { loginProceed } from "../../context/actions";
import { testAttributes } from "../../data/page.content";

//components:
import Header from "../Header/Header.component";
import LoginPage from "../LoginPage/LoginPage.component";
import Homepage from "../Homepage/Homepage.component";
import EventPage from "../EventPage/EventPage.component";
import ErrorView from "../../components/404/ErrorView.component";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute.component";

//styles:
import { AppContainer } from "./App.styles";

export const App = () => {
	const { dispatch } = useContext(store);

	useEffect(() => {
		// on mount only:
		dispatch(loginProceed(null, null, dispatch));
	}, [dispatch]);

	return (
		<AppContainer data-testid={testAttributes.app}>
			<Header />
			<Switch>
				<PrivateRoute exact path="/" component={Homepage} />
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/event-:id" component={EventPage} />
				<Route render={() => <ErrorView />} />
			</Switch>
		</AppContainer>
	);
};

export default withRouter(App);
