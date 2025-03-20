export default function ChatForm() {
  return (
    <div className="fixed bottom-0 w-full p-5 bg-white">
      <div className="flex gap-2.5">
        <input
          type="text"
          placeholder="メッセージを入力..."
          className="w-full p-2.5 rounded-lg border border-gray-300"
        />
        <button className="p-2.5 bg-blue-600 text-white rounded-lg border-none">
          送信
        </button>
      </div>
    </div>
  );
}
