import React from "react";
import { shallow } from "enzyme";

import Input from "./Input.component";

describe("<Input/>", () => {
	let wrapper;
	const mockProps = {
		type: "text",
		name: "username",
		label: " Username",
		changeHandler: jest.fn(),
		value: "",
	};

	beforeEach(() => {
		wrapper = shallow(<Input {...mockProps} />);
	});

	it("should render the component", () => {
		expect(wrapper.length).toEqual(1);
	});
	it("should match the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
