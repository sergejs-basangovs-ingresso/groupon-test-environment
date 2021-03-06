import React from "react";
import { mount } from "enzyme";
import { StoreProvider } from "../../context/store";
import { testAttributes } from "../../data/page.content";

import EventPage from "./EventPage.component";

describe("<EventPage/>", () => {
	let wrapper;
	const mockProps = {
		match: {
			params: { id: "test-event-id" },
		},
		history: { push: jest.fn() },
	};

	beforeEach(() => {
		wrapper = mount(
			<StoreProvider>
				<EventPage {...mockProps} />
			</StoreProvider>
		);
	});

	it("should render the component", () => {
		expect(wrapper.containsMatchingElement(<EventPage />)).toEqual(true);
	});

	it("should contain iframe with data test ID", () => {
		expect(wrapper.find("[data-testid]").props()["data-testid"]).toEqual(
			testAttributes.bookingIframe
		);
	});

	it("should match the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
