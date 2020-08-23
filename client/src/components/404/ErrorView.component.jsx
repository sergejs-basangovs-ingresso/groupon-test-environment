import React from "react";
import {
	ErrorImageContainer,
	ErrorImageText,
	ErrorImageOverlay,
} from "./ErrorView.styles";

const ErrorView = () => {
	return (
		<ErrorImageOverlay>
			<ErrorImageContainer imageUrl="https://i.imgur.com/FOeYt4E.png" />
			<ErrorImageText>Sorry, this page doesn't exist.</ErrorImageText>
		</ErrorImageOverlay>
	);
};

export default ErrorView;
