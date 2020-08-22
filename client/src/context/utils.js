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
