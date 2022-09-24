import { Form } from './form-component/Form';
import { MessageList } from './message-component/MessageList';
import { useState } from 'react';
import './index.css';

export const App = () => {
  const [messages, setMessages] = useState([]);
  const addMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <>
      <MessageList messages={messages} />
      <Form addMessage={addMessage} />
    </>
  );
};
