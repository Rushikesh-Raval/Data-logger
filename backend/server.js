const express = require('express');
const app = express();
const mongoose = require('mongoose');
const color = require("color")
const dotenv = require("dotenv");
const cors = require('cors')
dotenv.config();
const useRoute = require('./routes/userRoute.js')
const User = require('./models/userModel.js')
app.use(cors());

// convert the datat to json file so that system can read it using Middleware
app.use(express.json());

//connecting to mongoDB
mongoose.connect(process.env.URI)
.then(()=>{console.log('database connected')
app.listen(process.env.PORT || 5000)}
).catch((error)=>{
    console.log("error:",error)
})

app.use(useRoute);
