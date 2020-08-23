import React from "react";
import { mount } from "enzyme";
import { StoreProvider } from "../../context/store";
import { testAttributes } from "../../data/page.content";

import LoginPage from "./LoginPage.component";

describe("<LoginPage/>", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(
			<StoreProvider>
				<LoginPage />
			</StoreProvider>
		);
	});

	it("should render the component", () => {
		expect(wrapper.containsMatchingElement(<LoginPage />)).toEqual(true);
	});

	it("should contain form with data test ID", () => {
		expect(wrapper.find("[data-testid]").props()["data-testid"]).toEqual(
			testAttributes.loginForm
		);
	});

	it("should match the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
