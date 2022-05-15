import { createContext, ReactNode, useContext, useState } from 'react';

type TAB = 'INSTANT_ANSWERS' | 'CHAT';

interface IContext {
  openTab: TAB;
  setOpenTab: (value: TAB) => unknown;
  searchTerm: string | null;
  setSearchTerm: (term: string | null) => unknown;
}

const ChatContext = createContext<IContext | undefined>(undefined);
ChatContext.displayName = 'TalentProfileContext';

export function ChatProvider({ children }: { children: ReactNode }) {
  const [openTab, setOpenTab] = useState<TAB>('INSTANT_ANSWERS');
  const [searchTerm, setSearchTerm] = useState<string | null>(null);

  return (
    <ChatContext.Provider
      value={{ openTab, setOpenTab, searchTerm, setSearchTerm }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  const ctx = useContext(ChatContext);
  if (ctx === undefined) throw new Error('ChatContext is undefined');
  return ctx;
}
