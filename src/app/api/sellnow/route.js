import { NextResponse } from "next/server";
import db from "@/utils/db";
import productsSchema from "@/models/ProductModel";

export const GET = async (request) => {


  try {
    await db.connect();
    
    const deviceData = await productsSchema.find();

    return new NextResponse(JSON.stringify(deviceData), { status: 200 })
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};