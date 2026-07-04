import { NextResponse } from "next/server";
import { validateLead } from "@/lib/validators";
import clientPromise from "@/lib/mongodb";
import moment from "moment-timezone";

export async function POST(req: Request) {
  try {
    console.log("- Webhook:");

    const data = await req.json();
    console.log("- Incoming data:", data);

    const error = validateLead(data);
    if (error) {
      console.log("- Validation error:", error);

      return NextResponse.json({ message: error }, { status: 400 });
    }

    console.log("- Validation OK");

    const client = await clientPromise;
    const db = client.db("heliCorp");

    console.log("- Connected to MongoDB");

    // Check Email trùng
    let customer = await db.collection("customers").findOne({
      email: data.email,
    });

    console.log("- Customer found:", customer);

    // Tạo mới dữ liệu người dùng nếu Email không trùng
    if (!customer) {
      console.log("- Creating new customer");

      const result = await db.collection("customers").insertOne({
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      customer = { _id: result.insertedId };

      console.log("- Customer created:", customer._id);
    }

    
    // Lưu dữ liệu gửi form
    await db.collection("consult_requests").insertOne({
      customerId: customer._id,
      time: moment()
        .tz("Asia/Ho_Chi_Minh")
        .format("YYYY-MM-DD HH:mm:ss"),
      petkit: data.wantsCare,
    });

    console.log("- Consult request saved");

    return NextResponse.json({ success: true });
  } catch (err) {
    console.log("- Webhook error:", err);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}