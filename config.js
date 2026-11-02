import dotenv from "dotenv";
import fs from "fs-extra";

if (fs.existsSync("config.env")) {
	dotenv.config({
		path: "./config.env"
	});
}

const config = {
	MONGODB_URI: process.env.MONGODB_URI || "mongodb+srv://adithyanrb9_db_user:<db_password>@cluster1.qjpje6a.mongodb.net/", // put your mongo db url
};

export default config;
