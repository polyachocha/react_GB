import { Form } from './form-component/Form';
import { MessageList } from './message-component/MessageList';
import { useState, useEffect } from 'react';
import './index.css';

export const App = () => {
  const [messages, setMessages] = useState([]);
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

  return (
    <>
      <MessageList messages={messages} />
      <Form addMessage={addMessage} />
    </>
  );
};
