import React, { useState, useContext } from "react";
import { store } from "../../context/store";
import { loginProceed } from "../../context/actions";

//components:
import Input from "../../components/Input/Input.component";
import Button from "../../components/Button/Button.component";

//styles:
import { LoginPageContainer, ButtonGroup } from "./LoginPage.styles";

const LoginPage = () => {
	const initialState = Object.freeze({
		username: "",
		password: "",
	});

	const [credentials, setCredentials] = useState({ ...initialState });
	const { username, password } = credentials;
	const { dispatch } = useContext(store);

	const inputChangeHandler = (event) => {
		const { name, value } = event.target;
		setCredentials({
			...credentials,
			[name]: value,
		});
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();

		if (username.trim() === "" || password.trim() === "") {
			return;
		}

		dispatch(loginProceed(username, password, dispatch));
		setCredentials({ ...initialState });
	};

	return (
		<LoginPageContainer>
			<form onSubmit={formSubmitHandler}>
				<Input
					type="text"
					name="username"
					label="Username"
					changeHandler={inputChangeHandler}
					value={username}
				/>
				<Input
					type="password"
					name="password"
					label="Password"
					changeHandler={inputChangeHandler}
					value={password}
				/>
				<ButtonGroup>
					<Button type="submit">Submit</Button>
				</ButtonGroup>
			</form>
		</LoginPageContainer>
	);
};

export default LoginPage;
