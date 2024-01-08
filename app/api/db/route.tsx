import ClientPromise from '../../lib/mongodb'
import { NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';


//-----Formating interface-------------------------------------------------------------------
export interface MyDocument {
  _id: ObjectId;
  name: string;
  mail: string;
  content: string;
}
//-------------------------------------------------------------------------------------------




//-----Here we read the database-------------------------------------------------------------
export async function Call () {
  try {
    const client = await ClientPromise;
    const collection = client.db("testPort").collection("form")
    const data = await collection.find({}).toArray();
    
    const table: {id : ObjectId, name: string, mail: string, content: string}[] = data.map((item: MyDocument)=> ({
      _id: item._id,
      name: item.name,
      mail: item.mail,
      content: item.content,
      
    }));
  
    console.log(table);
  } catch (err) {
      console.log("Error occured during reading")
    }
}
//-------------------------------------------------------------------------------------------




//-----Insert part---------------------------------------------------------------------------
export async  function POST(request: NextRequest) {
//-----Treat data from request---------------------------------------------------------------
  const { email, name, message } = await request.json();

//-----Connect to DB and insert Document-----------------------------------------------------
  try {
    const client = await ClientPromise;
    const collection = client.db("testPort").collection("form");
    await collection.insertOne({
    name: `${name}`,
    mail: `${email}`,
    content: `${message}`,
    }); 
    return NextResponse.json( {status : 200});
  } catch (err) {
      return NextResponse.json({ error: err }, { status: 500 });
    }
  
  

}