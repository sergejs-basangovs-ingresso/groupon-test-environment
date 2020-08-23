import { reducer, INITIAL_STATE } from "./reducer";
import { loginStart, loginSuccess, loginError, logoutProceed } from "./actions";

describe("reducer", () => {
	const mockPayload = {
		authToken: "3b34679c6702cc9b7d5dc86227f93ef7",
		errorMessage: "Unauthorized",
	};

	it("should return initial state as default case", () => {
		const expectedState = INITIAL_STATE;
		const receivedState = reducer(undefined, {});
		expect(receivedState).toEqual(expectedState);
	});

	it("should handle LOGIN_START event", () => {
		const action = loginStart();
		const prevState = INITIAL_STATE;
		const expectedState = {
			...prevState,
			loading: true,
		};
		const receivedState = reducer(prevState, action);
		expect(receivedState).toEqual(expectedState);
	});

	it("should handle LOGIN_SUCCESS event", () => {
		const action = loginSuccess(mockPayload.authToken);
		const prevState = INITIAL_STATE;
		const expectedState = {
			...prevState,
			loading: false,
			authToken: action.payload,
			error: null,
		};

		const receivedState = reducer(prevState, action);
		expect(receivedState).toEqual(expectedState);
	});

	it("should handle LOGIN_ERROR event", () => {
		const action = loginError(mockPayload.errorMessage);
		const prevState = INITIAL_STATE;
		const expectedState = {
			...prevState,
			loading: false,
			error: action.payload,
		};

		const receivedState = reducer(prevState, action);
		expect(receivedState).toEqual(expectedState);
	});

	it("should handle LOGOUT event", () => {
		const action = logoutProceed();
		const prevState = INITIAL_STATE;
		const expectedState = {
			...INITIAL_STATE,
		};

		const receivedState = reducer(prevState, action);
		expect(receivedState).toEqual(expectedState);
	});
});
