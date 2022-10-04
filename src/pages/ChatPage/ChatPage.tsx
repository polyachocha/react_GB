import { FC } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ChatList } from 'src/components/chat-component/ChatList';
import { Form } from 'src/components/form-component/Form';
import { MessageList } from 'src/components/message-component/MessageList';
import { useSelector } from 'react-redux';
import { selectMessages } from 'src/store/messages/selector';

export const ChatPage: FC = () => {
  const { chatId } = useParams();
  const messages = useSelector(selectMessages);

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }
return (
    <>
      <ChatList />
      <MessageList messages={chatId ? messages[chatId] : []} />
      <Form />
    </>
  );
};
