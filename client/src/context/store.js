import React, { createContext, useReducer } from "react";
import { INITIAL_STATE, reducer } from "./reducer";

export const store = createContext(INITIAL_STATE);
const { Provider } = store;

export const StoreProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
	return <Provider value={{ state, dispatch }}> {children} </Provider>;
};
