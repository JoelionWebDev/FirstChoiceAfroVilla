import { NextResponse } from "next/server";

const SYSTEM_PROMPT =
  "You are a helpful real estate assistant for First Choice Afro Villa Limited, a Nigerian real estate company. " +
  "Answer questions about their estates, pricing, payment plans, documentation, and policies. " +
  "Be friendly, professional, and concise. If asked about something outside the scope of the company's offerings, " +
  "politely redirect to the company's contact channels.";

export async function POST(request) {
  try {
    const { messages } = await request.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY not configured" },
        { status: 500 }
      );
    }

    const lastUserMessage = messages.filter((m) => m.role === "user").pop();
    if (!lastUserMessage) {
      return NextResponse.json({ error: "No user message" }, { status: 400 });
    }

    const history = [];
    for (const msg of messages) {
      if (msg.role === "user" && msg !== lastUserMessage) {
        history.push({ role: "user", parts: [{ text: msg.content }] });
      } else if (msg.role === "assistant") {
        history.push({ role: "model", parts: [{ text: msg.content }] });
      }
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
          { role: "model", parts: [{ text: "Understood. I will follow those guidelines." }] },
          ...history,
          { role: "user", parts: [{ text: lastUserMessage.content }] },
        ],
        generationConfig: { maxOutputTokens: 500 },
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error("Gemini API error:", response.status, body);
      return NextResponse.json(
        { error: "Failed to get AI response" },
        { status: 502 }
      );
    }

    const data = await response.json();
    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I'm sorry, I couldn't process that. Please try again or speak with an agent.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}