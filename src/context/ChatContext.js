import React, { createContext, useState, useContext } from 'react';

/**
 * Quando o React renderiza um componente que assina este objeto, este vai ler o valor atual do Provider.
 * @returns Cria um contexto react
 */
const ChatContext = createContext({
  isOpenChat: [],
  setIsOpenChat: () => { },
});

/**
 * Permite componentes consumidores a assinarem mudanças no contexto.
 * @retunrs provider
 */
export default function ChatProvider({ children }) {
  const [isOpenChat, setIsOpenChat] = useState({});

  return (
    <ChatContext.Provider value={
      {
        isOpenChat,
        setIsOpenChat,
      }

    } >
      {children}
    </ ChatContext.Provider >
  )
}

/**
* Acessa o contexto `ChatContext`
* @returns a informação e um dispatch para setar a lista
*/
export function useChatContext() {
  const context = useContext(ChatContext);
  const { isOpenChat, setIsOpenChat } = context;
  return { isOpenChat, setIsOpenChat };
}
