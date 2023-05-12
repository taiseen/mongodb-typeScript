import { createUser, getAllUser, getUserById } from './Controller';
import express from 'express';

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// Step 5 ==> Create Route
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

const route = express.Router();

route.get('/', getAllUser);
route.get('/:userId', getUserById);
route.post('/create-user', createUser);


export default route;