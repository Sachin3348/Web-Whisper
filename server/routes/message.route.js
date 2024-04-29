import express from 'express';
import userAuthorization from '../middleware/userAuthorization.js';
import { getMessages, sendMessage } from '../controller/message.controller.js';

const router = express.Router()

router.post('/send/:id', userAuthorization, sendMessage)
router.get('/:id', userAuthorization, getMessages)

export default router