import { NextResponse } from "next/server";
import { validateLead } from "@/lib/validators";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    console.log("🔥 Webhook HIT");

    const data = await req.json();
    console.log("📩 Incoming data:", data);

    const error = validateLead(data);
    if (error) {
      console.log("❌ Validation error:", error);

      return NextResponse.json({ message: error }, { status: 400 });
    }

    console.log("✅ Validation OK");

    const client = await clientPromise;
    const db = client.db("heliCorp");

    console.log("🗄️ Connected to MongoDB");

    // 1. tìm customer theo email
    let customer = await db.collection("customers").findOne({
      email: data.email,
    });

    console.log("👤 Customer found:", customer);

    // 2. nếu chưa có thì tạo mới
    if (!customer) {
      console.log("➕ Creating new customer");

      const result = await db.collection("customers").insertOne({
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      customer = { _id: result.insertedId };

      console.log("✔️ Customer created:", customer._id);
    }

    // 3. lưu request
    await db.collection("consult_requests").insertOne({
      customerId: customer._id,
      time: new Date(),
      petkit: data.wantsCare,
    });

    console.log("📌 Consult request saved");

    return NextResponse.json({ success: true });
  } catch (err) {
    console.log("💥 Webhook error:", err);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}