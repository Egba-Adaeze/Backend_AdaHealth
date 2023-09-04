import mongoose from "mongoose"

const detailSchema = mongoose.Schema(
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
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        minLength: 8,
      },
      gender: {
        type: String,
        enum: ['Male','Female','Others'],
        required: true
      },
      picture: {
        type: String,
        required: true
      },
    }
    );


export default mongoose.model("userModel", detailSchema);

    