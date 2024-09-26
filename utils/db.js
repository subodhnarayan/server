require('dotenv').config();
const mongoose = require("mongoose");
const URI = "mongodb://127.0.0.1:27017/mern_admin";

const URL = process.env.MONGODB_URL;

//mongoose.connect(URI);

const connectDb = async () => {
    try {
        await mongoose.connect(URL);
        console.log("connnection sucessfull to database");
    }
    catch (error) {
        console.error("database connection failed");
        process.exit(0);
    }
}


module.exports = connectDb;