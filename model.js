const mongoose = require("mongoose");
const userModel = new mongoose.Schema(
{
    nombreUsuario:{
        type:String //tipo string
    },
    placa:{
        type:String //tipo string
},

    timeStamp:true,
    versionKey:false,
}
)
const ModelUser = mongoose.model("placa_reserva", userModel);
module.exports = ModelUser;