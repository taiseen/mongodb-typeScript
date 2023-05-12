import mongoose from "mongoose";

const mongoDB = async () => {

    try {
        // Remove console warning...
        mongoose.set('strictQuery', true);
        await mongoose.connect('mongodb://localhost:27017/testing');

        console.log("Connected To MongoDB ==> OK ✅");
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default mongoDB;

// mongoose.connection.on('disconnected', () => {
//     console.log('[Listener] ==> MongoDB Disconnected... 🟥');
// })

// mongoose.connection.on('connected', () => {
//     console.log('[Listener] ==> MongoDB Connected... ✅');
// })