import React from "react";
import { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "../../context/store";
//components:
import App from "./App.component";
import Header from "../Header/Header.component";
import LoginPage from "../LoginPage/LoginPage.component";

describe("<App/>", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(
			<StoreProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</StoreProvider>
		);
	});

	it("should render the component", () => {
		expect(wrapper.containsMatchingElement(<App />)).toEqual(true);
	});

	it("should render the Header component", () => {
		expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
	});

	it("should render the LoginPage component at initial state", () => {
		expect(wrapper.containsMatchingElement(<LoginPage />)).toEqual(true);
	});

	it("should match the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
