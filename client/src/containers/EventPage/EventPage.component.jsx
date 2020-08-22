import React, { useContext, useEffect } from "react";
import { store } from "../../context/store";
import { getEventBookingUrl } from "../../context/utils";

//styles:
import { EventPageContainer } from "./EventPage.styles";

const EventPage = ({ match }) => {
	const {
		state: { authToken },
	} = useContext(store);
	const { id } = match.params;
	const { iframeUrl, eventName } = getEventBookingUrl(id, authToken);

	useEffect(() => {
		const messageHandler = (event) => {
			if (event.origin === "https://groupon.qa.ingresso.co.uk") {
				console.log("Incoming message: ", JSON.parse(event.data));
			}
		};
		window.addEventListener("message", messageHandler);
		return () => {
			window.removeEventListener("message", messageHandler);
		};
	}, []);

	return (
		<EventPageContainer>
			<h2>{eventName}</h2>
			<iframe
				src={iframeUrl}
				frameBorder="0"
				data-testid="groupon-test__booking-app__iframe"
				title={id}
			></iframe>
		</EventPageContainer>
	);
};

export default EventPage;
