import { Schema, model } from "mongoose";
import IUser from "./Interface";

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// Step 2 ==> Create Schema
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

const UserSchema = new Schema<IUser>({
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true, enum: ["student", "teacher"] },
    password: { type: String, required: true },
    name: {
        fastName: { type: String, required: true },
        laseName: { type: String, required: true },
    },
    gender: { type: String, required: true, enum: ["male", "female"], default: "male" },
    dateOfBirth: { type: String },                      // 🟢 optional
    email: { type: String, required: true },
    contact: { type: String, required: true },
    emergencyContact: { type: String },                 // 🟢 optional
    presentAddress: { type: String },                   // 🟢 optional
    permanentAddress: { type: String, required: true },
});


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// Step 3 ==> Create Model
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

const UserModel = model<IUser>('User', UserSchema);

export default UserModel;