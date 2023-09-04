import mongoose from "mongoose";

const Appointmentschema = mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "userModel",
      required: true,
    },
    doctorId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Doctor",
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['Pending','Confirmed'],
      default: 'Pending'
    },
  },
  {
    timestamps: true,
  }
);



export default mongoose.model("Appointment", Appointmentschema);