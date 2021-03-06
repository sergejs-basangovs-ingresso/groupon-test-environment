import actionsTypes from "./actions.types";
import axios from "axios";
import { setCookie, getCookie, deleteCookie } from "./utils";

// auth request url based on environment:
const AUTH_PROXY_URL =
	process.env.NODE_ENV === "development"
		? "http://localhost:4000/authentication"
		: "/authentication";

export const loginStart = () => ({
	type: actionsTypes.LOGIN_START,
});

export const loginSuccess = (authToken) => ({
	type: actionsTypes.LOGIN_SUCCESS,
	payload: authToken,
});

export const loginError = (error) => ({
	type: actionsTypes.LOGIN_ERROR,
	payload: error,
});

export const loginProceed = async (username, password, dispatch) => {
	dispatch(loginStart());

	// if token exists in cookies:
	const authToken = getCookie("authToken");
	if (authToken) {
		return dispatch(loginSuccess(authToken));
	}

	// if username, password are null
	if (!username || !password) {
		return dispatch(loginSuccess(null));
	}

	try {
		const {
			data: { authToken },
		} = await axios({
			method: "POST",
			url: AUTH_PROXY_URL,
			data: {
				username,
				password,
			},
		});

		setCookie("authToken", authToken);
		dispatch(loginSuccess(authToken));
	} catch (error) {
		dispatch(loginError(error.response.statusText));
	}
};

export const logoutProceed = () => {
	deleteCookie("authToken");
	return { type: actionsTypes.LOGOUT };
};
