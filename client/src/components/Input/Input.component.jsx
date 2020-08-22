import React from "react";
//styles:
import { InputContainer } from "./Input.styles";

const Input = ({ type, name, label, changeHandler, value, ...otherProps }) => {
	return (
		<InputContainer>
			<label htmlFor={name}>{label}</label>
			<input
				type={type}
				name={name}
				onChange={changeHandler}
				value={value}
				{...otherProps}
			/>
		</InputContainer>
	);
};

export default Input;
