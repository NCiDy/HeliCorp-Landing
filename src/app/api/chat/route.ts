import { NextResponse } from "next/server";
import { askGemini } from "@/lib/gemini";
import { askGroq } from "@/lib/groq";

export async function POST(req: Request) {
  const { message } = await req.json();

  try {
    const reply = await askGemini(message);
    return NextResponse.json({ reply });

  } catch (error: any) {
    console.error("Gemini error:", error);

    const status = error?.status;

    const isGeminiBad =
      [401, 403, 429].includes(status) || !status;

    if (isGeminiBad) {
      try {
        const reply = await askGroq(message);
        return NextResponse.json({ reply });
      } catch (groqError) {
        console.error("Groq error:", groqError);
      }
    }

    return NextResponse.json(
      { reply: "Đã xảy ra lỗi." },
      { status: 500 }
    );
  }
}