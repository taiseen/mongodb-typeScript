import { test } from "../controllers/test";
import { Router } from "express";

const router = Router();


router.get('/', test);


export default router;