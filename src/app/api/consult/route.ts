import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req: Request) {
  try {
    const { name, email, phone, petkit } = await req.json();

    const client = await clientPromise;
    const db = client.db("heliCorp");

    // 1. check customer
    let customer = await db.collection("customers").findOne({ email });

    // 2. create if not exist
    if (!customer) {
      const result = await db.collection("customers").insertOne({
        name,
        email,
        phone,
      });

      customer = {
        _id: result.insertedId,
      };
    }

    // 3. insert consult request
    await db.collection("consult_requests").insertOne({
      customerId: customer._id,
      time: new Date(),
      petkit: !!petkit,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, err });
  }
}