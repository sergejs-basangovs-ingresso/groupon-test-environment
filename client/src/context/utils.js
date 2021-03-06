import { events } from "../data/page.content";

export const setCookie = (name, value) => {
	let date = new Date(Date.now() + 86400e3);
	date = date.toUTCString();
	window.document.cookie = `${name}=${value}; expires=${date}`;
};

export const getCookie = (name) => {
	let matches = window.document.cookie.match(
		new RegExp(
			"(?:^|; )" +
				name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
				"=([^;]*)"
		)
	);
	return matches ? decodeURIComponent(matches[1]) : null;
};

export const deleteCookie = (name) => {
	window.document.cookie = `${name}=''; max-age=-1`;
};

export const getEventData = (eventId, authToken) => {
	const eventData = events.find((event) => event.id === eventId);
	const iframeUrl = eventData ? `${eventData.url}&token=${authToken}` : null;
	const eventName = eventData ? eventData.eventName : null;

	return { iframeUrl, eventName };
};
