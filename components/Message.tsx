"use client";
import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";
import React, { useEffect, useRef } from "react";

interface messageProps {
  content: string;
  isUserMessage: boolean;
  isLoading: boolean;
}

const Message = ({ content, isUserMessage, isLoading }: messageProps) => {
  const messageEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [content]);
  return (
    <div
      className={cn({
        "bg-zinc-800": isUserMessage,
        "bg-zinc-900/25": !isUserMessage,
      })}
    >
      <div className="p-6">
        <div className="max-w-3xl flex items-start gap-2.5">
          <div
            className={cn(
              "w-10 shrink-0 aspect-square rounded-full border border-zinc-700 bg-zinc-900 flex justify-center items-center",
              { "bg-blue-950 border-blue-700 text-zinc-200": isUserMessage }
            )}
          >
            {isUserMessage ? (
              <User className="w-5" />
            ) : (
              <Bot className="w-5 text-white" />
            )}
          </div>
          <div className="flex flex-col ml-6 w-full">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold text-white">
                {isUserMessage ? "You" : "PageMind"}
              </span>
            </div>
            <p className="text-sm font-normal py-2.5 text-white">{content}</p>
          </div>
        </div>
      </div>
      <div ref={messageEndRef} />{" "}
      {/* This is the element we scroll into view */}
    </div>
  );
};

export default Message;
