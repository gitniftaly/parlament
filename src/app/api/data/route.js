import connection from "@/lib/mongoose";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connection();
    const datares = await mongoose.connection.db
      .collection("deputies")
      .find()
      .toArray();

    return NextResponse.json({ success: true, data: datares });
  } catch (error) {
    console.log(error);
    // throw new Error();
  }
}
