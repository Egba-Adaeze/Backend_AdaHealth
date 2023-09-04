import express from 'express';
import auth from '../middleware/auth.js'
import doctorController from '../controllers/doctorController.js'


const doctorRoutes = express.Router();

doctorRoutes.get("/getdoctor/:id", doctorController.getdoctor);
doctorRoutes.get("/getalldoctors", doctorController.getalldoctors); 
doctorRoutes.put("/deletedoctor/:id",  doctorController.deletedoctor);
doctorRoutes.post("/applyfordoctor", doctorController.applyfordoctor);


export default doctorRoutes;