import express ,{ Router } from 'express'
import { body, query } from 'express-validator'
import cors from 'cors';


const router = Router()
router.use(cors())
router.use(express.static("./public"));
router.use(express.static("files"));
router.get('/', express.static("./public"))

export default router
