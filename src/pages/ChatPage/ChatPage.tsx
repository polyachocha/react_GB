import { FC } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ChatList } from 'src/components/chat-component/ChatList';
import { Form } from 'src/components/form-component/Form';
import { MessageList } from 'src/components/message-component/MessageList';

export const ChatPage: FC<any> = ({ chats, messages }) => {
  const { chatId } = useParams();

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  const prepareMessages = [
    ...Object.values((chatId && messages[chatId].messages) || {}),
  ];
return (
    <>
      <ChatList chats={chats}/>
      <MessageList messages={prepareMessages} />
      <Form />
    </>
  );
};
