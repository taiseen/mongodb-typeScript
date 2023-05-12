import { IFullName, IUser, UserModel } from "./Interface";
import { Schema, model } from "mongoose";


// [type] creating for custom instance method()
// type UserFullName = Model<IUser, {}, IFullName>;


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// Step 2 ==> Create Schema
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩


// const UserSchema = new Schema<IUser, UserFullName, IFullName>({
const UserSchema = new Schema<IUser, UserModel, IFullName>({
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


// create custom [instance] method()
UserSchema.method('getFullName', function getFullName() {
    return this.name.fastName + ' ' + this.name.lastName;
});


// create custom [static] function()
UserSchema.static('getUsersByRole', async function getUsersByRole() {
    const doNotSendTheseProperties = { __v: 0, _id: 0, password: 0 };
    return await this.find({ role: 'teacher' }).select(doNotSendTheseProperties);
});



// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// Step 3 ==> Create Model
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩


// const UserModel = model<IUser, UserFullName>('User', UserSchema);
const UserModel = model<IUser, UserModel>('User', UserSchema);

export default UserModel;