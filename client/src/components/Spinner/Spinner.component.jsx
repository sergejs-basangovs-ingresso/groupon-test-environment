import React from "react";
//styles:
import { SpinnerContainer } from "./Spinner.styles";

const Spinner = () => (
	<SpinnerContainer>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</SpinnerContainer>
);

export default React.memo(Spinner);
