"use client";

import { useState } from "react";
import { useChat } from "@/app/common/store/chat";

export const ChatForm: React.FC = () => {
  const [message, setMessage] = useState<string>(""); // 入力ボックスのテキストを保持
  const { setSender } = useChat(); // ユーザーが送信したアクションをグローバルに保管

  const sendMessage = async () => {
    if (!message) return;

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role: "user",
          message: message,
        }),
      });
      const data = await response.json();
      setSender(true);
    } catch (err) {
      console.error(err);
    }

    setMessage("");
  };

  return (
    <div className="fixed bottom-0 w-full p-5 bg-white">
      <div className="flex gap-2.5">
        <input
          type="text"
          value={message}
          placeholder="新しいチャットを送る..."
          className="w-full p-2.5 rounded-lg border border-gray-300"
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
              e.preventDefault();
              sendMessage();
            }
          }}
        />
        <button className="p-2.5 bg-blue-600 text-white rounded-lg border-none">
          送信
        </button>
      </div>
    </div>
  );
};
