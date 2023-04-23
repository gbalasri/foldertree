import { NextResponse } from "next/server";
const url= "https://dev.test.sega.co.uk/api/list"; 
//Function to fetch the contents from Sega api list
export async function GET()
{
    const res= await fetch(url,{
        method: "GET",
        mode: "cors",
       headers:{
           "Content-type": "application/json",
           "x-secret-api-key": "fcAJwqSI1loSEdpOgaOI6qLpWPV9dGJe",
           "Access-Control-Allow-Origin": "http://localhost:3000/"
       }
       });
       const folderdata : Folders[] = await res.json();
       return NextResponse.json(folderdata)
}