import React from "react";
import { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "../../context/store";

import PrivateRoute from "./PrivateRoute.component";

describe("HOC: <PrivateRoute/>", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(
			<BrowserRouter>
				<StoreProvider>
					<PrivateRoute />
				</StoreProvider>
			</BrowserRouter>
		);
	});

	it("should render the component", () => {
		expect(wrapper.containsMatchingElement(<PrivateRoute />)).toEqual(true);
	});

	it("should match the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
