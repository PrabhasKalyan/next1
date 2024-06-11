import User from "/Users/prabhaskalyan/ex/src/app/signup/page";
import Usersmodel from "/Users/prabhaskalyan/ex/src/models/usermodel"
const jwt=require("jsonwebtoken");
export default function POST(req,res){
    if (req.method=="POST"){
        const {username,password}=req.data;
        const user=Usersmodel.findOne({username:username});
        if (user){
            if(user.password==password){
                const token=jwt.sign({id:user.id},"abcdefgh",{expiresIn:'1h'})
            }
        }
        else{
            res.status(200).json({msg:"User not found"});
        }
        console.log(username);
    }
    else{
        res.status(200).json({msg:"invalid"});
    }
}

