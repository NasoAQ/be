const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const usersRoute = require("./routes/users");
const travelsRoute = require("./routes/travels");
const testimonialsRoute = require("./routes/testimonials");
const loginRoute = require("./routes/login");
const githubRoute = require("./routes/github");

const PORT = 5050;

const app = express();

app.use(cors());
app.use(express.json());

//Routes
app.use("/", usersRoute);
app.use("/", travelsRoute);
app.use("/", testimonialsRoute);
app.use("/", loginRoute);
app.use("/", githubRoute);

mongoose.connect(process.env.MONGODB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error during db connection"));
db.once("open", () => {
	console.log("Database connected");
});

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
