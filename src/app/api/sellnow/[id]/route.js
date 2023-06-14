import { NextResponse } from "next/server";
import db from "@/utils/db";
import productsSchema from "@/models/ProductModel";


export const GET = async (request, { params }) => {
    const { id } = params;

  
    try {
      await db.connect();
  
      const deviceId  = await productsSchema.findById(id)
    //   db.collection.find({_id:ObjectId('5e208c18d598b806c869ca37')}).pretty()
        
      return new NextResponse(JSON.stringify(deviceId), { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };