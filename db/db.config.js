//import mongoose from "mongoose"
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/db_danar_arga_syailendra_betest",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection;
connection.on('error',(error) => console.error(error));
connection.once('open', () => console.log('Database Connected'))

module.exports = mongoose