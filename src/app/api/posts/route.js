import { NextResponse } from "next/server";
import db from "@/utils/db";
import Post from "@/models/Post";

export const POST = async (request) => {


  try {
    await db.connect();
    
    const posts = await Post.find();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};


