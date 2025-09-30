import express from "express" 
import { getMe, login, logout, signup } from "../controllers/authControllers.js"
import { proctectRoute } from "../middleware/protectRoute.js"

const router = express.Router()

router.get("/me",proctectRoute,getMe)
router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)
export default router