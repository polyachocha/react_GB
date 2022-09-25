import { List, ListItem } from '@mui/material';
import React, { FC, useState } from 'react';
import { nanoid } from 'nanoid';
import { Chat } from 'src/types';
import { NavLink } from 'react-router-dom';

interface ChatListProps {
  chats: Chat[];
  onAddChat: (chat: Chat) => void;
  delChat: (chatId: string) => void;
}

export const ChatList: FC<ChatListProps> = ({ chats, onAddChat, delChat }) => {
  const [value, setValue] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value) {
      onAddChat({
        id: nanoid(),
        name: value,
      });
      setValue('');
    }
  };
  return (
    <>
      <ul>
        {chats.map((chat) => (
          <ListItem key={chat.id}>
            <NavLink
              to={`/chats/${chat.id}`}
              style={({ isActive }) => ({
                color: isActive ? 'green' : 'blue',
              })}
            >
              {chat.name} <button onClick={() => delChat(chat.id)}>del</button>
            </NavLink>
          </ListItem>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button>create chat</button>
      </form>
    </>
  );
};
