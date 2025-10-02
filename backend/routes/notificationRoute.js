import express from "express";
import { proctectRoute } from "../middleware/protectRoute.js";
import { deleteNotifications, getNotifications } from "../controllers/notificationControllers.js";

const router = express.Router()
router.get("/",proctectRoute,getNotifications)
router.delete("/",proctectRoute,deleteNotifications)

export default router