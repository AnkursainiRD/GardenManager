import express from "express"
import { auth, isAdmin, isStaff } from "../middleware/authMiddleware.js";
import { assignTask } from "../controller/task.js";
const router=express.Router()


router.post("/assignTask",auth,isAdmin,assignTask)

export default router;
