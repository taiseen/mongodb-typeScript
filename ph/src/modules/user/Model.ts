import { Model, Schema, model } from "mongoose";
import { IFullName, IUser } from "./Interface";


// [type] creating for custom instance method()
type UserFullName = Model<IUser, {}, IFullName>;


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// Step 2 ==> Create Schema
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩


const UserSchema = new Schema<IUser, UserFullName, IFullName>({
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true, enum: ["student", "teacher"] },
    password: { type: String, required: true },
    name: {
        fastName: { type: String, required: true },
        lastName: { type: String, required: true },
    },
    gender: { type: String, required: true, enum: ["male", "female"], default: "male" },
    dateOfBirth: { type: String },                      // 🟢 optional
    email: { type: String, required: true },
    contact: { type: String, required: true },
    emergencyContact: { type: String },                 // 🟢 optional
    presentAddress: { type: String },                   // 🟢 optional
    permanentAddress: { type: String, required: true },
});


// create custom instance method()
UserSchema.method('getFullName', function getFullName() {
    return this.name.fastName + ' ' + this.name.lastName;
});


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// Step 3 ==> Create Model
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

const UserModel = model<IUser, UserFullName>('User', UserSchema);

export default UserModel;