import express from 'express'
import auth from '../middleware/auth.js'
import appointController from "../controllers/appointController.js"


const appointRoutes = express.Router();

appointRoutes.get("/getallappointments", appointController.getallappointments);

appointRoutes.post("/bookappointment", appointController.bookappointment);

// appointRoutes.put("/completed", appointController.completed);

export default appointRoutes;