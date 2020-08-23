import React from "react";
import { shallow } from "enzyme";

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
			"groupon-test__navbar"
		);
	});
	it("should match the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
