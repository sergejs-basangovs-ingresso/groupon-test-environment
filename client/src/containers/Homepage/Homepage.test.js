import React from "react";
import { mount } from "enzyme";
import { StoreProvider } from "../../context/store";
import { testAttributes } from "../../data/page.content";

import Homepage from "./Homepage.component";

describe("<Homepage/>", () => {
	let wrapper;
	const mockProps = {
		history: {
			push: jest.fn(),
		},
	};

	beforeEach(() => {
		wrapper = mount(
			<StoreProvider>
				<Homepage {...mockProps} />
			</StoreProvider>
		);
	});

	it("should render the component", () => {
		expect(wrapper.containsMatchingElement(<Homepage />)).toEqual(true);
	});

	it("should contain data test ID", () => {
		expect(wrapper.find("[data-testid]").props()["data-testid"]).toEqual(
			testAttributes.logoutButton
		);
	});

	it("should match the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
