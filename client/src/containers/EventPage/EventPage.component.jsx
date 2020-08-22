import React, { useContext } from "react";
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

	return (
		<EventPageContainer>
			<h2>{eventName}</h2>
			<iframe
				src={iframeUrl}
				frameborder="0"
				data-testid="groupon-test__booking-app__iframe"
				title={id}
				width="90%"
				height="900"
			></iframe>
		</EventPageContainer>
	);
};

export default EventPage;
