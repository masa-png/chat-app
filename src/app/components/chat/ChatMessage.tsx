"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useChat } from "@/app/common/store/chat";

type ChatMessage = {
  id: number;
  role: string;
  message: string;
};

export const ChatMessage: React.FC = () => {
  const [inputMessage, setInputMessage] = useState<ChatMessage[]>([]);
  const { sender, setSender } = useChat();

  useEffect(() => {
    const getMessage = async () => {
      try {
        const response = await fetch("/api/chat", {
          method: "GET",
        });
        const data = await response.json();
        setInputMessage(data);
      } catch (err) {
        console.error(err);
      }
    };

    getMessage();
    setSender(false);
  }, [sender, setSender]);

  return (
    <div className="px-5 py-8 h-full">
      {inputMessage &&
        inputMessage.map((post, index) => (
          <div key={index}>
            {/* 自分のメッセージ */}
            {post.role === "user" && (
              <div className="flex gap-2.5 justify-end mt-5">
                <div className="p-2.5 px-5 mt-1 bg-blue-600 rounded-lg leading-normal h-fit text-white">
                  {post.message}
                </div>
              </div>
            )}
            {/* 相手側のメッセージ */}
            {post.role === "bot" && (
              <div className="flex gap-2.5">
                <Image
                  src="https://doodleipsum.com/700/avatar-2?i=0639d368201785f32891763286f61ca0"
                  alt=""
                  width={50}
                  height={50}
                />
                <div className="p-2.5 px-5 mt-1 bg-white rounded-lg leading-normal h-fit">
                  {post.message}
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};
