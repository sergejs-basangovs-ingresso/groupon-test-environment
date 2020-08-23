import React from "react";
import { shallow } from "enzyme";

import Button from "./Button.component";

describe("<Button/>", () => {
	let wrapper;
	const mockProps = {
		children: "Click the button",
		type: "button",
		clickHandler: jest.fn(),
		color: "#333",
		background: "#eaeaea",
	};

	beforeEach(() => {
		const { children, ...restOfProps } = mockProps;
		wrapper = shallow(<Button {...restOfProps}>{children}</Button>);
	});

	it("should render the component", () => {
		expect(wrapper.length).toEqual(1);
	});
	it("should match the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
