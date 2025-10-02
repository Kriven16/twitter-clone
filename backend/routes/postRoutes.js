import express from "express"
import { proctectRoute } from "../middleware/protectRoute.js"
import { commentOnPost, createPost, deletePost, getAllPosts, getFollowingPosts, getLikedPosts, getUserPosts, likeUnlikePost } from "../controllers/postControllers.js"

const router = express.Router()

router.get("/all",proctectRoute,getAllPosts)
router.get("/likes/:id",proctectRoute,getLikedPosts)
router.get("/following",proctectRoute,getFollowingPosts)
router.get("/user/:username",proctectRoute,getUserPosts)

router.post("/create",proctectRoute,createPost)
router.post("/like/:id",proctectRoute,likeUnlikePost)
router.post("/comment/:id",proctectRoute,commentOnPost)
router.delete("/:id",proctectRoute,deletePost)


export default router