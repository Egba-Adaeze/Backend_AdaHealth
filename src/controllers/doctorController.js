import express from 'express'
import Doctor from '../models/DoctorsModel.js'
import userModel from '../models/users.js'
import Appointment from '../models/Appointments.js'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const doctorRoutes = express.Router();

const getalldoctors = async (req, res) => {
  try {
    const data = await Doctor.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
  };

  const getdoctor = async (req, res) => {
    try {
      const data = await Doctor.findById(req.params.id);
      res.json(data);
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
    };


const applyfordoctor = async (req, res) => {
  try {
    // Create a new doctor instance using the request body
    const newDoctor = new Doctor(req.body);

    // Save the new doctor instance to the database
    const savedDoctor = await newDoctor.save();

    res.status(201).json({message: "Saved doctor"}); // Respond with the saved doctor
  } catch (error) {
    res.status(500).json({ message: "Unable to save doctor", error: error.message });
  }
};




const deletedoctor = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Doctor.findByIdAndDelete(id);
    res.status(201).json({ message: "doctors successfully deleted", data });
    // res.send(`User with name ${data.name} has been deleted..`);
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "An error occurred",
      error: err.message,
    });
  }
};


export default{
  getdoctor,
  getalldoctors,
  deletedoctor,
  applyfordoctor,
}