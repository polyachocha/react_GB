import { List, ListItem } from '@mui/material';
import { FC } from 'react';
import { Messages } from 'src/types';

interface MessageListProps {
  messages: Messages;
}

export const MessageList: FC<MessageListProps> = ({ messages }) => {
  return (
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
};
