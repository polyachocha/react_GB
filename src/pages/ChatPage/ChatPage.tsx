import { FC, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ChatList } from 'src/chat-component/ChatList';
import { Form } from 'src/form-component/Form';
import { MessageList } from 'src/message-component/MessageList';
import { useSelector, useDispatch } from 'react-redux';
import { selectMessages } from 'src/store/messages/selector';
import { addMessage } from 'src/store/messages/actions';
import { AUTHOR } from 'src/types';

export const ChatPage: FC = () => {
  const { chatId } = useParams();
  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].author === AUTHOR.USER
    ) {
      const timeout = setTimeout(() => {
        dispatch(
          addMessage(chatId, {
            author: AUTHOR.BOT,
            value: 'Im BOT',
          })
        );
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [chatId, messages, dispatch]);

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
