import { useEffect } from 'react';

export const MessageList = ({ messages }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (messages.length > 0) {
        alert('Сообщение доставлено!');
      }
    }, 1500);
    return () => clearInterval(timeout);
  }, [messages]);

  return (
    <ul>
      {messages.map((message, idx) => (
        <li key={idx} data-testid="li">
          {message.author} : {message.value}
        </li>
      ))}
    </ul>
  );
};
