import { ragchat } from "@/lib/rag-chat";
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const { messages, sessionId } = await req.json();
  try {
    const lastMessage = messages[messages.length - 1].content;
    const response = await ragchat.chat(lastMessage, {
      streaming: true,
      sessionId,
    });
    return aiUseChatAdapter(response);
  } catch (error) {
    console.log(error);
    throw new Error(error as string);
  }
};
