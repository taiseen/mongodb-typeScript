import mongoose from "mongoose";


const dbConnect = async () => {

    const url = 'mongodb://localhost:27017/assignment-2';

    try {
        await mongoose.connect(url);
        console.log("Connected To MongoDB ==> OK ✅");
    } catch (error) {
        console.error(error);
        throw error;
    }
}


export default dbConnect;
