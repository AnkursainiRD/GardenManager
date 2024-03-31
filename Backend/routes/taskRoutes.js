import express from "express"
import { auth, isAdmin, isStaff } from "../middleware/authMiddleware.js";
import { assignTask, getToadyTask } from "../controller/task.js";
const router=express.Router()


router.post("/assignTask",auth,isAdmin,assignTask)
router.post("/getToadyTask",auth,isStaff,getToadyTask)

export default router;
