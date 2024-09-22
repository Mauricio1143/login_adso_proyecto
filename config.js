const mongoose = require("mongoose");
const dbconnect =()=>{
    mongoose.set("strictQuery", true);
    mongoose.connect("mongodb://localhost:27017/login_adso_proyecto")
    .then((sucess)=> console.log("conexion exitosa"))
    .catch((err)=> console.log(err.message));
}
module.exports = dbconnect;


