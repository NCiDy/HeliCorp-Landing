import { NextResponse } from "next/server";
import { validateLead } from "@/lib/validators";

export async function POST(req: Request) {
  const data = await req.json();

  const error = validateLead(data);
  if (error) {
    return NextResponse.json(
      { message: error },
      { status: 400 }
    );
  }

  console.log("NEW LEAD:", data);

  return NextResponse.json({ success: true });
}