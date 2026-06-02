import dotenv from "dotenv";
import fs from "fs-extra";

if (fs.existsSync("config.env")) {
	dotenv.config({
		path: "./config.env"
	});
}

const config = {
	MONGODB_URI: process.env.MONGODB_URI || "mongodb+srv://xenoppc_db_user:SlLfJ9hcArTtSCIt@cluster0.30beukq.mongodb.net/?appName=Cluster0", // put your mongo db url
};

export default config;