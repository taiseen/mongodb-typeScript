import { DB_URL, PORT } from "../config";
import mongoose from "mongoose";

const dbConnection = async () => {

    try {
        // Remove console warning...
        mongoose.set('strictQuery', true);
        await mongoose.connect(DB_URL);

        console.log('TS Server Running in ==>', PORT);
        console.log("Connected To MongoDB ==> OK ✅");

    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default dbConnection;