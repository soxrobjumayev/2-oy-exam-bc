import { Router } from "express";
import controller from '../controllers/elonla.controller.js';
import checktoken from '../middlewares/checktoken.js'
import validition from '../middlewares/validation.js' 

const router = Router()


router.post('/elonla', validition,controller.POST)
router.get('/elonla', controller.GET)







export default router
  