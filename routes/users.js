import express from "express";

import { getAllUsers, getSingleUser, updateNewUser, userChanger} from "../controllers/usersController.js";
const router = express.Router();

// GET to get all users

router.get("/", getAllUsers )


// GET to get single users 
router.get("/:id", getSingleUser)

// POST to add new user

router.post("/", updateNewUser)

router.patch("/:id", userChanger)

export default router;
