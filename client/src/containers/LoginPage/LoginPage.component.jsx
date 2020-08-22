import React, { useState, useContext, useCallback } from "react";
import { store } from "../../context/store";
import { loginProceed } from "../../context/actions";

//components:
import Input from "../../components/Input/Input.component";
import Button from "../../components/Button/Button.component";
import Spinner from "../../components/Spinner/Spinner.component";

//styles:
import {
	LoginPageContainer,
	ButtonGroup,
	ErrorMessage,
} from "./LoginPage.styles";

const LoginPage = () => {
	const initialState = Object.freeze({
		username: "",
		password: "",
	});

	const [credentials, setCredentials] = useState({ ...initialState });
	const { username, password } = credentials;
	const {
		state: { loading, error },
		dispatch,
	} = useContext(store);

	const inputChangeHandler = useCallback(
		(event) => {
			const { name, value } = event.target;
			setCredentials({
				...credentials,
				[name]: value,
			});
		},
		[credentials]
	);

	const formSubmitHandler = (event) => {
		event.preventDefault();

		if (username.trim() === "" || password.trim() === "") {
			return;
		}

		dispatch(loginProceed(username, password, dispatch));
		setCredentials({ ...initialState });
	};

	const errorMessage = error ? (
		<ErrorMessage>Login failed. Please, try again</ErrorMessage>
	) : null;

	return (
		<LoginPageContainer>
			{loading ? (
				<Spinner />
			) : (
				<form
					onSubmit={formSubmitHandler}
					data-testid="groupon-test__login"
				>
					{errorMessage}
					<Input
						type="text"
						name="username"
						label="Username"
						changeHandler={inputChangeHandler}
						value={username}
						placeholder="your B2B #username"
					/>
					<Input
						type="password"
						name="password"
						label="Password"
						changeHandler={inputChangeHandler}
						value={password}
						placeholder="your B2B password"
					/>
					<ButtonGroup>
						<Button type="submit">Submit</Button>
					</ButtonGroup>
				</form>
			)}
		</LoginPageContainer>
	);
};

export default LoginPage;
