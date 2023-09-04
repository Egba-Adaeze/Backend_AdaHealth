import express from "express";
import https from 'https';
import jwt from "jsonwebtoken"
import cors from "cors";
import * as dotenv from "dotenv";
import connectDB from "./src/config/mongo.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRoutes from "../Backend/src/routes/userRoutes.js";
import doctorsRoutes from "../Backend/src/routes/doctorsRoutes.js"
import appointRoutes from "../Backend/src/routes/appointRoutes.js";
//import paymentController from "../Backend/src/controllers/paymentController.js"

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());       
app.use("/api/user", userRoutes);
app.use("/api/doctor", doctorsRoutes);
app.use("/api/appointment", appointRoutes);
// app.use("/api/paystack");









dotenv.config();


app.get("/paystack", function(req,res){
  

const params = JSON.stringify({
  "email": "customer@email.com",
  "amount": "20000"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transaction/initialize',
  method: 'POST',
  headers: {
    Authorization: 'Bearer SECRET_KEY',
    'Content-Type': 'application/json'
  }
}

const reqpaystack = https.request(options, res => {
  let data = ''

  respaystack.on('data', (chunk) => {
    data += chunk
  });

  respaystack.on('end', () => {
    console.log(JSON.parse(data))
  })
}).on('error', error => {
  console.error(error)
})

reqpaystack.write(params)
reqpaystack.end()

})


async function connect() {
    try {
        app.listen(8000, () => {
        connectDB(process.env.MONGODB_PASSWORD);
        console.log("server is running on port 8000");
      });
    } catch (err) {
      console.log(err);
    }
  }
  connect();
  
  // // to generate jwt token
  // import crypto from 'crypto'
  // const secrectkey = crypto.randomBytes(32).toString('hex');
  // console.log(secrectkey); 