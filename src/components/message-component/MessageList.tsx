import { FC } from 'react';


export const MessageList: FC<any> = ({ messages }) => (
  <ul>
    {messages.map((message: any, idx: number) => (
      <li key={idx} data-testid="li">
        {message.author} : {message.value}
      </li>
    ))}
  </ul>
);
