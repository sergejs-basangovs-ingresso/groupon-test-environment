import React from "react";
import { shallow } from "enzyme";
import { testAttributes } from "../../data/page.content";

import Navbar from "./Navbar.component";

describe("<Navbar/>", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Navbar />);
	});

	it("should render the component", () => {
		expect(wrapper.length).toEqual(1);
	});
	it("should have data test ID attribute", () => {
		expect(wrapper.find("[data-testid]").props()["data-testid"]).toEqual(
			testAttributes.navbar
		);
	});
	it("should match the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
