import React from "react";
import { Message as TMessage } from "ai";
import Message from "./Message";
import { MessageSquare } from "lucide-react";

interface messagesProps {
  messages: TMessage[];
}

const Messages = ({ messages }: messagesProps) => {
  return (
    <div className="flex flex-1 flex-col overflow-y-auto max-h-[cal(100vh-3.5rem-7rem)]">
      {messages.length ? (
        messages.map((message, i) => (
          <Message
            content={message.content}
            isUserMessage={message.role === "user"}
            key={i}
          />
        ))
      ) : (
        <div className=" flex-1 flex flex-col items-center justify-center gap-2">
          <MessageSquare className=" size-8 text-blue-500" />
          <h3 className=" font-semibold text-white text-xl">You're all set!</h3>
          <p className=" text-zinc-500 text-sm">
            Ask your first question to get started.
          </p>
        </div>
      )}
    </div>
  );
};

export default Messages;
