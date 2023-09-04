import express from "express";
import userModel from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import DoctorsModel from "../models/DoctorsModel.js"
import Appointments from "../models/Appointments.js";

const userRoutes = express.Router();




const getuser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id).select("-password");
    return res.send(user);
  } catch (error) {
    res.status(500).send("Unable to get user");
  }
};

const getAllUsers = async (req, res) => {
try {
  const data = await userModel.find();
  res.json(data);
} catch (err) {
  res.status(500).json({ success: false, message: err.message });
}
};

const register = async (req, res) => {
  try {
    const emailPresent = await userModel.findOne({ email: req.body.email });
    if (emailPresent) {
      return res.status(400).send("Email already exists");
    }
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    const user = await userModel({ ...req.body, password: hashedPass });
    const result = await user.save();
    if (!result) {
      return res.status(500).send("Unable to register user");
    }
    return res.status(201).send("User registered successfully");
  } catch (error) {
    res.status(500).send("Unable to register user");
  }
};


const login = async (req, res) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: "email or password not provided " });
  }

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Login not successful", error: "User not found" });
    }

    const result = await bcrypt.compare(password, user.password);
    if (result) {
      const maxAge = 3 * 60 * 60;
      const token = jwt.sign(
        { id: user._id, email },
        process.env.JWT_SECRECT_KEY,
        { expiresIn: maxAge }
      );

      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(201).json({ message: "Login successful", user, token });
    } else {
      res.status(400).json({ message: "Unauthorized Credentials" });
    }
  } catch (err) {
    res.status(400).json({ message: "An error occurred", error: err.message });
  }
};





export default { getuser, getAllUsers, login, register };
