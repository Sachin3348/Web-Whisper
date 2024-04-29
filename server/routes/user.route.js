import express from 'express'
import userAuthorization from '../middleware/userAuthorization.js'
import { getUserForSidebar } from '../controller/user.controller.js'

const router = express.Router()

router.get('/', userAuthorization, getUserForSidebar)

export default router