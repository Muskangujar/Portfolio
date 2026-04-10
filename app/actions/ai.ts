'use server';

export async function askAI(userText: string, context: string) {
  const token = process.env.GROQ_API_KEY;

  if (!token) {
    return { error: "TOKEN_MISSING" };
  }

  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        headers: { 
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            { role: "system", content: context },
            { role: "user", content: userText }
          ],
          max_tokens: 300,
          temperature: 0.6
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return { error: result.error?.message || result.message || "GROQ_API_FAILURE" };
    }

    return { text: result.choices[0].message.content.trim() };
  } catch (err: any) {
    return { error: err.message || "SERVER_ERROR" };
  }
}
