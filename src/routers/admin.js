import { Router } from "express";
import controller from '../controllers/admin.controllers.js';
import checktoken from "../middlewares/checktoken.js";


const router = Router()



router.post('/admin', controller.LOGIN)
router.put('/admin/tasdiqlash/:elonId',checktoken, controller.PUT)








export default router
  