"use client";

import { ReactNode } from "react";
import { ChatProvider } from "./common/store/chat";

export default function AppProvider({ children }: { children: ReactNode }) {
  return <ChatProvider>{children}</ChatProvider>;
}
