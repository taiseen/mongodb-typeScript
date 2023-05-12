import { IUser } from "./Interface";
import UserModel from "./Model";


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// Step 4 ==> Create Service
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩


// #################################################################################
// #################################################################################
// #################################################################################

export const dbCreateUser = async (userData: IUser): Promise<IUser> => {

    const userInfo = new UserModel(userData);

    await userInfo.save(); // user info saved in to database from here...

    // 🔴🔴🔴 our creating ==> custom instance method() call...
    console.log(userInfo.getFullName());

    return userInfo;
}

// #################################################################################
// #################################################################################
// #################################################################################

export const dbGetAllUser = async (): Promise<IUser[]> => {

    const doNotSendToClient = { __v: 0, _id: 0, password: 0 };

    return await UserModel.find().select(doNotSendToClient);

}

// #################################################################################
// #################################################################################
// #################################################################################

export const dbGetUserById = async (userId: string): Promise<IUser | null> => {

    // Field Filtering...
    const onlySendTheseProperty = { _id: 0, id: 1, name: 1, role: 1, contact: 1, email: 1 };

    return await UserModel.findOne({ id: userId }, onlySendTheseProperty);

}

// #################################################################################
// #################################################################################
// #################################################################################

export const dbGetUsersByRole = async () => {

    // 🔴🔴🔴 our creating ==> custom static function() call...
    return await UserModel.getUsersByRole();

}

// #################################################################################
// #################################################################################
// #################################################################################


