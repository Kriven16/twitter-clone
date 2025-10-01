import express from "express"
import { proctectRoute } from "../middleware/protectRoute.js";
import { followUnfollowUser, getSuggestedUsers, getUserProfile, updateUser } from "../controllers/userController.js";

const router = express.Router()

router.get("/profile/:username", proctectRoute, getUserProfile);
router.get("/suggested", proctectRoute, getSuggestedUsers);
router.post("/follow/:id", proctectRoute, followUnfollowUser);
router.post("/update", proctectRoute, updateUser);

export default router 