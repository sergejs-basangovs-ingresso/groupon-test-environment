import React from "react";
import { mount } from "enzyme";
import { StoreProvider } from "../../context/store";

import Header from "./Header.component";

describe("<Header/>", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(
			<StoreProvider>
				<Header />
			</StoreProvider>
		);
	});

	it("should render the component", () => {
		expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
	});

	it("should match the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
