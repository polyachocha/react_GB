import { List, ListItem } from '@mui/material';
import { FC } from 'react';
import { Message } from 'src/types';

interface MessageListProps {
  messages: Message[];
}

export const MessageList: FC<MessageListProps> = ({ messages }) => (
  <List>
    {messages.map((message, idx) => (
      <ListItem key={idx}>
        <li key={idx} data-testid="li">
          {message.author} : {message.value}
        </li>
      </ListItem>
    ))}
  </List>
);
