import connect from "/Users/prabhaskalyan/ex/src/dbconfig/dbconfig"
import Usersmodel from "/Users/prabhaskalyan/ex/src/models/usermodel"
import { NextRequest,NextResponse } from "next/server";
connect();
export async function POST(req:NextRequest, res:NextResponse) {
  if (req.method === "POST") {
    const reqbody=await req.json;
    const {name}=reqbody;
    console.log(req.body);
    // const users=new Usersmodel({username:name,email:email,password:password})
    // await users.save();
    return new Response( name );
  } else if (req.method === 'GET') {
    return new Response("this is get");
  } else {
    return new Response("ok");
  }
}



