import { Router } from "express";
import { addDoctor } from "../controllers/doctorController.js";

const router = Router()

router.route("/add").post(addDoctor)




export default router