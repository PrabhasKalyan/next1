const mongoose=require('mongoose');
const userschema=new mongoose.Schema(
    {
        username:{type:String,
        required:true,
    unique:true},
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    clg:{
        type:String,
    }, 
    }
)
const Usersmodel=mongoose.models.usersmodels || mongoose.model("usersmodels",userschema);
export default Usersmodel;
