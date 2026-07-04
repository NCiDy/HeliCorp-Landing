import { NextResponse } from "next/server";
import { askGemini } from "@/lib/gemini";
import { askGroq } from "@/lib/groq";

export async function POST(req: Request) {
  const { message } = await req.json();

  try {
    const reply = await askGemini(message);

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error(error);

    if (error.status === 429) {
      const reply = await askGroq(message);

      return NextResponse.json({ reply });
    }

    return NextResponse.json(
      {
        reply: "Đã xảy ra lỗi.",
      },
      {
        status: 500,
      }
    );
  }
}