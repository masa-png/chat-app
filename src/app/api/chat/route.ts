import { NextResponse } from "next/server";

interface ChatMessage {
  id: number;
  role: "bot" | "user";
  message: string;
}

// チャットのメッセージを格納する配列
let chatMessages: ChatMessage[] = [
  {
    id: 1,
    role: "bot",
    message: "こんにちは！",
  },
];

export async function GET() {
  return NextResponse.json(chatMessages);
}

export async function POST(request: Request) {
  // リクエストのボディからデータを取得
  const data = await request.json();

  // 新しいメッセージオブジェクトを作成
  const newMessage: ChatMessage = {
    id: chatMessages.length + 1,
    role: data.role || "user",
    message: data.message,
  };

  // 新しいメッセージをchatMessages配列に追加
  chatMessages.push(newMessage);

  // ユーザーと同じメッセージをbotメッセージとしてchatMessages配列に追加
  chatMessages.push({
    id: chatMessages.length + 1,
    role: "bot",
    message: data.message,
  });

  return NextResponse.json(newMessage);
}
