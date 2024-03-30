import express from "express"
import { login, signUp } from "../controller/auth.js"
import { auth, isAdmin } from "../middleware/authMiddleware.js"
const router=express.Router()

router.post("/signUp",auth,isAdmin,signUp)
router.post("/login",login)


export default router;