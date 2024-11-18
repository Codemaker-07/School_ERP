import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connect() {
    try {
        await mongoose.connect(process.env.mongo_uri as string);
        console.log("Connected to database");
    } catch (error) {
        console.log("Error connecting to database: ", error);
    }
}

export default connect;
