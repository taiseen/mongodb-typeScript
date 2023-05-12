import { dbCreateUser, dbDeleteUser, dbGetAllUser, dbGetUserById, dbGetUsersByRole, dbUpdateUserInfo } from "./Service";
import { Request, Response } from "express";


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// Step 5 ==> Create Controller
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩


// #################################################################################
// #################################################################################
// #################################################################################


export const createUser = async (req: Request, res: Response) => {

    const userInfo = req.body;
    const user = await dbCreateUser(userInfo);

    res.status(200).json({
        status: "success ✅",
        data: user,
    });
}


// #################################################################################
// #################################################################################
// #################################################################################


export const getAllUser = async (req: Request, res: Response) => {

    const users = await dbGetAllUser();

    res.status(200).json({ data: users });
}


// #################################################################################
// #################################################################################
// #################################################################################


export const getUserById = async (req: Request, res: Response) => {

    const id = req.params.userId;
    const user = await dbGetUserById(id);

    res.status(200).json({ data: user });
}


// #################################################################################
// #################################################################################
// #################################################################################


export const getUsersByRole = async (req: Request, res: Response) => {

    const users = await dbGetUsersByRole();

    res.status(200).json({ data: users });
}


// #################################################################################
// #################################################################################
// #################################################################################


export const deleteUser = async (req: Request, res: Response) => {

    const id = req.params.userId;
    const user = await dbDeleteUser(id);

    user
        ? res.status(200).json({ data: `✅ ${id} :- data deleted successful` })
        : res.status(200).json({ data: `🔴 No user find by this id :- ${id}` })
}


// #################################################################################
// #################################################################################
// #################################################################################


export const updateUserInfo = async (req: Request, res: Response) => {

    const info = req.body;
    const   id = req.params.userId;
    const user = await dbUpdateUserInfo(id, info);

    res.status(200).json({
        status: "success ✅",
        data: user,
    });
}


// #################################################################################
// #################################################################################
// #################################################################################