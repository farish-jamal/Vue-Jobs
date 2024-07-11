const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 8000;

// Imports

const handleConnectionToDB = require("./src/db");
const adminRoutes = require("./src/route");


// Middlewares
app.use(express.json());
app.use(cors());

// Handle Database connection 

handleConnectionToDB(process.env.MONGO_URI).then(()=>{
 console.log("Connected to databse")
}).catch((error) => {
 console.error(error, "Error Connecting to databse");
})

app.use("/api/admin", adminRoutes);


app.listen(port, ()=> {
 console.log(`App is running on ${port}`);
})