const mongoose = require("mongoose");

//creating the schema
const UserSchema = new mongoose.Schema(
    {
    name: {type:String, required:true},
    email : {type:String, required:true}    
    },
    {timestamps: true}
)

//creating the model using schema
const Users = mongoose.model("Users",UserSchema);

module.exports = Users;