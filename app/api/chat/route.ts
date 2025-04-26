import { main } from "@/app/bot";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const data = await request.json();
  try {
    const responseText = await main({ message: data.message });
    
    return NextResponse.json({ message: responseText }, { status: 200 });
  } catch (error) {
    console.error("Error in bot.ts:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
