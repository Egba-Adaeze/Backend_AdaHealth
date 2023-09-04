// import express from "express";
// import https from 'https';
// import * as dotenv from "dotenv";


// const userRoutes = express.Router();


// dotenv.config();


// app.get("/paystack", function(req,res){
  

// const params = JSON.stringify({
//   "email": "customer@email.com",
//   "amount": "20000"
// })

// const options = {
//   hostname: 'api.paystack.co',
//   port: 443,
//   path: '/transaction/initialize',
//   method: 'POST',
//   headers: {
//     Authorization: 'Bearer SECRET_KEY',
//     'Content-Type': 'application/json'
//   }
// }

// const reqpaystack = https.request(options, res => {
//   let data = ''

//   respaystack.on('data', (chunk) => {
//     data += chunk
//   });

//   respaystack.on('end', () => {
//     console.log(JSON.parse(data))
//   })
// }).on('error', error => {
//   console.error(error)
// })

// reqpaystack.write(params)
// reqpaystack.end()

// })