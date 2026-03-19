import { NextRequest, NextResponse } from "next/server";

const DEEPL_API_KEY = process.env.DEEPL_API_KEY;
const isFreeKey = DEEPL_API_KEY?.endsWith(":fx");
const DEEPL_URL = isFreeKey
  ? "https://api-free.deepl.com/v2/translate"
  : "https://api.deepl.com/v2/translate";

export async function POST(req: NextRequest) {
  if (!DEEPL_API_KEY) {
    return NextResponse.json(
      { error: "DEEPL_API_KEY is not configured" },
      { status: 500 }
    );
  }

  try {
    const { texts, targetLang } = await req.json();
    if (!Array.isArray(texts) || texts.length === 0 || !targetLang) {
      return NextResponse.json(
        { error: "texts (array) and targetLang are required" },
        { status: 400 }
      );
    }

    const res = await fetch(DEEPL_URL, {
      method: "POST",
      headers: {
        Authorization: `DeepL-Auth-Key ${DEEPL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: texts,
        target_lang: targetLang,
        source_lang: "EN",
      }),
    });

    if (!res.ok) {
      let errDetail: string;
      try {
        const errJson = await res.json();
        errDetail = errJson.message || errJson.error?.message || JSON.stringify(errJson);
      } catch {
        errDetail = await res.text();
      }
      console.error("DeepL API error:", res.status, errDetail);
      return NextResponse.json(
        { error: "Translation failed", details: errDetail },
        { status: res.status }
      );
    }

    const data = await res.json();
    const translations = data.translations?.map((t: { text: string }) => t.text) ?? [];
    return NextResponse.json({ translations });
  } catch (e) {
    console.error("Translate API error:", e);
    return NextResponse.json(
      { error: "Translation failed" },
      { status: 500 }
    );
  }
}
