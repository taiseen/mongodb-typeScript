import { createUser, getAllUser, getUserById, getUsersByRole } from './Controller';
import express from 'express';

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// Step 6 ==> Create Route
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

const route = express.Router();


route.get('/', getAllUser);
route.get('/teacher', getUsersByRole);
route.get('/:userId', getUserById);
route.post('/create', createUser);


export default route;