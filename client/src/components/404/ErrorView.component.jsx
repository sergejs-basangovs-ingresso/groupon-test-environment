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
			<ErrorImageText>Sorry, something went wrong.</ErrorImageText>
		</ErrorImageOverlay>
	);
};

export default ErrorView;
