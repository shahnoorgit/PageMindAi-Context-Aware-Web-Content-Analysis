import ChatWrapper from "@/components/ChatWrapper";
import { ragchat } from "@/lib/rag-chat";
import { redis } from "@/lib/redis";
import React from "react";

interface Pageprops {
  params: {
    url: string | string[] | undefined;
  };
}

const encoded = ({ uri }: { uri: string[] }) => {
  const encodedURI = uri.map((component) => decodeURIComponent(component));
  return encodedURI.join("/");
};

const page = async ({ params }: Pageprops) => {
  const encodedUri = encoded({ uri: params.url as string[] });
  const isAlreadyIndexed = await redis.sismember(" indexed-urls", encodedUri);
  const sessionId = "mock-session";
  if (!isAlreadyIndexed) {
    await ragchat.context.add({
      type: "html",
      source: encodedUri,
      config: { chunkSize: 200, chunkOverlap: 50 },
    });
    console.log(" added to vector");
    await redis.sadd(" indexed-urls", encodedUri);
  }
  return <ChatWrapper sessionId={sessionId} />;
};

export default page;
