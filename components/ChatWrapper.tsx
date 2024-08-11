"use client";
import { useChat } from "ai/react";
import React from "react";
import Messages from "./Messages";

const ChatWrapper = ({ sessionId }: { sessionId: string }) => {
  const { messages, handleSubmit, handleInputChange, input } = useChat({
    api: "/api/chat-stream",
    body: { sessionId },
  });
  return (
    <div className="relative divide-y divide-zinc-700 flex-col justify-center gap-2 min-h-full bg-zinc-900 flex">
      <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col">
        <Messages messages={messages} />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className=" text-black"
          value={input}
          onChange={handleInputChange}
          type="text"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatWrapper;
