import connect from "@/dbconfig/dbconfig";
import {Usersmodel} from "@/models/usermodel"
import { request } from "express";
import { NextApiRequest,NextApiResponse } from "next";
connect();
export default async function POST(NextRequest,NextResponse) {
    if(req.method==='POST') {
      const {name,email,password}=await req.body;
      console.log(name);
      res.setHeader('Allow', 'POST');
      NextApiResponse.status(405).json({ message: 'Data received', name });
      console.log(email,passowrd);
      const users=new Usersmodel({username:name,email:email,password:password})
      await users.save();
      console.log(name);
    }
    else{
        NextApiResponse.status(200).json({message:"Invalid"})
    }
}

