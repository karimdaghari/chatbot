import { createContext, ReactNode, useContext, useState } from 'react';

interface IContext {
  openTab: 'INSTANT_ANSWERS' | 'CHAT';
  setOpenTab: (value: IContext['openTab']) => unknown;
}

const ChatContext = createContext<IContext | undefined>(undefined);
ChatContext.displayName = 'TalentProfileContext';

export function ChatProvider({ children }: { children: ReactNode }) {
  const [openTab, setOpenTab] =
    useState<IContext['openTab']>('INSTANT_ANSWERS');

  return (
    <ChatContext.Provider value={{ openTab, setOpenTab }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  const ctx = useContext(ChatContext);
  if (ctx === undefined) throw new Error('ChatContext is undefined');
  return ctx;
}
