import express from 'express';
import userAuthorization from '../middleware/userAuthorization.js';
import { sendMessage } from '../controller/message.controller.js';

const router = express.Router()

router.post('/send/:id', userAuthorization, sendMessage)

export default router