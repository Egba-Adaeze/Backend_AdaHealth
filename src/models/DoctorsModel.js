import mongoose from "mongoose";

const Doctorschema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      minLength: 3,
    },
    lastname: {
      type: String,
      required: true,
      minLength: 3,
     } ,
    specialization: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    fees: {
      type: Number,
      required: true
    },
    phone: {
      type: Number,
      required: true,
    picture:{
      type: String,
      required: true
    }
      
    }});
 

export default mongoose.model("Doctor", Doctorschema);