import express from "express"

import {Home} from "../controllers/indexController.js"

const router = express.Router()

router.get("/", Home)

export default router