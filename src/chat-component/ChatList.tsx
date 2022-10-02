import { List, ListItem } from '@mui/material';
import { FC } from 'react';
import { Chat } from 'src/types';

interface ChatListProps {
  chats: Chat[];
}

export const ChatList: FC<ChatListProps> = ({ chats }) => {
  return (
    <>
      <ul>
        {chats.map((chat) => (
          <ListItem key={chat.id}>
            <List>{chat.name}</List>
          </ListItem>
        ))}
      </ul>
    </>
  );
};
