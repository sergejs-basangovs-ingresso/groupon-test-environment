import React from "react";
// styles:
import { ButtonContainer } from "./Button.styles";

const Button = ({ children, type, clickHandler, color, background }) => {
	return (
		<ButtonContainer
			type={type}
			onClick={clickHandler}
			color={color}
			background={background}
		>
			{children}
		</ButtonContainer>
	);
};

export default Button;
