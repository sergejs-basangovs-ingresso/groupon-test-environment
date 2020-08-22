import styled from "styled-components";

export const ButtonContainer = styled.button`
	cursor: pointer;
	padding: 6px 12px;
	border-radius: 6px;
	font-size: 16px;
	color: ${(props) => props.color || "#333"};
	background-color: ${(props) => props.background || "#efefef"};
`;
