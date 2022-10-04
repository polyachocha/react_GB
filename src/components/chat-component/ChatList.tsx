import { ListItem } from '@mui/material';
import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addChat, deleteChat } from 'src/store/messages/actions';
import { selectChats } from 'src/store/messages/selector';

export const ChatList: FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const chats = useSelector(
    selectChats,
    (prev, next) => prev.length === next.length
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value) {
      dispatch(addChat(value));
      setValue('');
    }
  };
  return (
    <>
      <ul>
        {chats.map((chat) => (
          <ListItem key={chat.id}>
            <NavLink
              to={`/chats/${chat.name}`}
              style={({ isActive }) => ({
                color: isActive ? 'green' : 'blue',
              })}
            >
              {chat.name}
            </NavLink>
            <button onClick={() => dispatch(deleteChat(chat.name))}>del</button>
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
