import { NextResponse } from "next/server";
import db from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await db.connect();
    console.log("Database Connected");

    const posts = await Post.findById(_id);

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  } finally {
    await db.disconnect();
    console.log("Database disconnected");
  }
};
