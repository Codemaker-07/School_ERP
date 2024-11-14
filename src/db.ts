import mongoose from "mongoose";

async function connect() {
    try {
        await mongoose.connect("mongodb+srv://nova:nova2346@nova.r5lap4p.mongodb.net/?retryWrites=true&w=majority&appName=nova");
        console.log("Connected to database");
    } catch (error) {
        console.log("Error connecting to database: ", error);
    }
}

export default connect;
