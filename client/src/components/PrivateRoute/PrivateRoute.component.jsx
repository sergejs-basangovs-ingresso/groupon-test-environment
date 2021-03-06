import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { store } from "../../context/store";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const {
		state: { authToken },
	} = useContext(store);

	return (
		<Route
			{...rest}
			render={(props) =>
				authToken ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	);
};

export default PrivateRoute;
