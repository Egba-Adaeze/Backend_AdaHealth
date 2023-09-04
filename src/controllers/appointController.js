import userModel from "../models/users.js";
import Appointment from "../models/Appointments.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import DoctorsModels from "../models/DoctorsModel.js"


const getallappointments = async (req, res) => {
  try {
    const keyword = req.query.search
      ? {
          $or: [{ userId: req.query.search }, { doctorId: req.query.search }],
        }
      : {};

    const appointments = await Appointment.find(keyword)
      .populate("doctorId")
      .populate("userId");
    return res.send(appointments);
  } catch (error) {
    res.status(500).send("Unable to get apponintments");
  }
};



const bookappointment = async (req, res) => {
  try {
    // Create a new appointment instance using data from the request body
    const appointment = new Appointment({
      date: req.body.date,
      time: req.body.time,
      doctorId: req.body.doctorId,
      userId: req.body.userId,  // Use userId from the request body
      status: 'Pending',  
    });

    // ... (rest of the code)

    // Save the appointment to the database
    const result = await appointment.save();

    // Respond with a 201 status and the result of the saved appointment
    return res.status(201).send(result);
  } catch (error) {
    console.log("error", error);
    // Handle errors by responding with a 500 status and an error message
    res.status(500).send("Unable to book appointment");
  }
};




// const completed = async (req, res) => {
//   try {
//     const alreadyFound = await Appointment.findOneAndUpdate(
//       { _id: req.body.appointid },
//       { status: "Completed" }
//     );

//     const usernotification = Notification({
//       userId: req.locals,
//       content: `Your appointment with ${req.body.doctorname} has been completed`,
//     });

//     await usernotification.save();

//     const user = await userModel.findById(req.locals);

//     const doctornotification = Notification({
//       userId: req.body.doctorId,
//       content: `Your appointment with ${user.firstname} ${user.lastname} has been completed`,
//     });

//     await doctornotification.save();

//     return res.status(201).send("Appointment completed");
//   } catch (error) {
//     res.status(500).send("Unable to complete appointment");
//   }
// };

export default {
  getallappointments,
  bookappointment
  
};