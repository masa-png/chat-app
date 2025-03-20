import { createContext, useContext, useState, ReactNode } from "react";

type ChatContextType = {
  sender: boolean;
  setSender: (value: boolean) => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [sender, setSender] = useState(false);

  return (
    <ChatContext.Provider value={{ sender, setSender }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
}
