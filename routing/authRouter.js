const express = require("express");
const authRouter = express.Router();
const axios = require("axios");

// groupon b2b authentication pre-requisites:
const AUTH_URL = "https://groupon.qa.ingresso.co.uk/api/b2b";
const AUTH_PREFIX = "groupon-test/";

authRouter.use("/authentication", async (req, res) => {
	const {
		body: { username, password },
	} = req;

	try {
		const { headers } = await axios({
			method: "POST",
			url: AUTH_URL,
			auth: {
				username: `${AUTH_PREFIX}${username}`,
				password,
			},
		});
		const authToken = headers["x-b2b-token"];
		res.status(201).send({ authToken });
	} catch (error) {
		res.status(401).send({ error });
	}
});

module.exports = authRouter;
