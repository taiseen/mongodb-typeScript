import { createTestData, test } from "../controllers/test";
import { Router } from "express";

const router = Router();


router.get('/', test);

router.post('/', createTestData);


export default router;