import { createContext, ReactNode, useContext, useState } from 'react';

type TAB = 'INSTANT_ANSWERS' | 'CHAT';

interface IContext {
  openTab: TAB;
  setOpenTab: (value: TAB) => unknown;
  searchTerm: string | null;
  setSearchTerm: (term: string | null) => unknown;
}

const AssistantContext = createContext<IContext | undefined>(undefined);
AssistantContext.displayName = 'AssistantContext';

export function AssistantProvider({ children }: { children: ReactNode }) {
  const [openTab, setOpenTab] = useState<TAB>('INSTANT_ANSWERS');
  const [searchTerm, setSearchTerm] = useState<string | null>(null);

  return (
    <AssistantContext.Provider
      value={{ openTab, setOpenTab, searchTerm, setSearchTerm }}>
      {children}
    </AssistantContext.Provider>
  );
}

export function useAssistantContext() {
  const ctx = useContext(AssistantContext);
  if (ctx === undefined) throw new Error('AssistantContext is undefined');
  return ctx;
}
