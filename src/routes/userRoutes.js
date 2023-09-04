import express from 'express'
import auth from '../middleware/auth.js'
import userController from "../controllers/userController.js"

const userRoutes = express.Router();

userRoutes.get("/getuser/:id", auth, userController.getuser);

userRoutes.get("/getallusers", auth, userController.getAllUsers);

userRoutes.post("/login", userController.login);

userRoutes.post("/register", userController.register);


export default userRoutes;