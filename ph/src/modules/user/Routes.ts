import { createUser, getAllUser, getUserById, getUsersByRole, deleteUser, updateUserInfo } from './Controller';
import express from 'express';


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// Step 6 ==> Create Route
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩


const route = express.Router();


// CRUD methods call...


// ⬜ Read
route.get('/', getAllUser);
route.get('/teacher', getUsersByRole); // this order is important, to get data from specific url...
route.get('/:userId', getUserById);


// ✅ Create
route.post('/create', createUser);


// 🟩 Update
route.patch('/:userId', updateUserInfo);


// 🟥 Delete
route.delete('/:userId', deleteUser);


export default route;