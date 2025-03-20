import Image from "next/image";

export default function ChatMessage() {
  return (
    <div className="px-5 py-8 h-full">
      {/* 相手側のメッセージ */}
      <div className="flex gap-2.5">
        <Image
          src="https://doodleipsum.com/700/avatar-2?i=0639d368201785f32891763286f61ca0"
          alt=""
          width={50}
          height={50}
        />
        <div className="p-2.5 px-5 mt-1 bg-white rounded-lg leading-normal h-fit">
          こんにちは！
        </div>
      </div>

      {/* 自分のメッセージ */}
      <div className="flex gap-2.5 justify-end mt-5">
        <div className="p-2.5 px-5 mt-1 bg-blue-600 rounded-lg leading-normal h-fit text-white">
          こんにちは！
        </div>
      </div>
    </div>
  );
}
