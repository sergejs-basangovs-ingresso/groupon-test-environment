import actionsTypes from "./actions.types";

export const INITIAL_STATE = {
	loading: false,
	error: null,
	authToken: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionsTypes.LOGIN_START:
			return {
				...state,
				loading: true,
			};
		case actionsTypes.LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				authToken: action.payload,
			};
		case actionsTypes.LOGIN_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case actionsTypes.LOGOUT:
			return {
				...INITIAL_STATE,
			};
		default:
			return state;
	}
};
