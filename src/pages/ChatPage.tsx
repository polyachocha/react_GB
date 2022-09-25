import { FC, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ChatList } from 'src/chat-component/ChatList';
import { Form } from 'src/form-component/Form';
import { MessageList } from 'src/message-component/MessageList';
import { AUTHOR, Chat, Message, Messages } from 'src/types';

interface ChatPageProps {
  chats: Chat[];
  onAddChat: (chat: Chat) => void;
  messages: Messages;
  onAddMessage: (chatId: string, msg: Message) => void;
  delChat: (chatId: string) => void;
}
export const ChatPage: FC<ChatPageProps> = ({
  chats,
  onAddChat,
  messages,
  onAddMessage,
  delChat,
}) => {
  const { chatId } = useParams();

  useEffect(() => {
    if (
      chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].author === AUTHOR.USER
    ) {
      const timeout = setTimeout(() => {
        onAddMessage(chatId, {
          author: AUTHOR.BOT,
          value: 'Im BOT',
        });
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [chatId, messages, onAddMessage]);

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <>
      <ChatList chats={chats} onAddChat={onAddChat} delChat={delChat} />
      <MessageList messages={chatId ? messages[chatId] : []} />
      <Form addMessage={onAddMessage} />
    </>
  );
};
/* 
  const addMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (messages.length > 0) {
        alert('Сообщение доставлено!');
      }
    }, 1500);
    return () => clearInterval(timeout);
  }, [messages]);

  <MessageList messages={messages} />
      <Form addMessage={addMessage} /> */
