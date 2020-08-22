const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRouter = require("./routing/authRouter");
const PORT = process.env.PORT || 4000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/authentication", authRouter);

//serve react-app in production:
if (process.env.NODE_ENV === "production") {
	app.use(compression());
	app.use(enforce.HTTPS({ trustProtoHeader: true }));
	//serve our react app all static files in build/ directory:
	app.use(express.static(path.join(__dirname, "client/build")));

	//for every/all incoming get requests: serve react app index.html
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "client/build", "index.html"));
	});
}

app.listen(PORT, (error) => {
	if (error) throw error;
	console.log(`Express server on http://localhost:${PORT}`);
});
