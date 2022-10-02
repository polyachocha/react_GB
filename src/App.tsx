import React, { FC, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChatList } from './chat-component/ChatList';
import { Main } from './pages/Main';
// import { Profile } from './pages/Profile';
import { AUTHOR, Chat, Message, Messages } from './types';
import { ChatPage } from './pages/ChatPage';
import { Header } from './header/Header';
import { Provider } from 'react-redux';
import { store } from './store';
import { AboutWithConnect } from './pages/About';

const Profile = React.lazy(() =>
  Promise.all([
    import('./pages/Profile').then(({ Profile }) => ({
      default: Profile,
    })),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExport]) => moduleExport)
);

const defaultChats: Chat[] = [
  {
    id: '1',
    name: 'first',
  },
  {
    id: '2',
    name: 'second',
  },
];

const defaultMessages: Messages = {
  '1': [{ author: AUTHOR.USER, value: 'hello, world' }],
  '2': [{ author: AUTHOR.BOT, value: 'hello, im bot' }],
};

export const App: FC = () => {
  const [chats, setChats] = useState<Chat[]>(defaultChats);
  const [messages, setMessages] = useState<Messages>(defaultMessages);

  const onAddChat = (newChat: Chat) => {
    setChats([...chats, newChat]);
    setMessages({
      ...messages,
      [newChat.id]: [],
    });
  };

  const onAddMessage = (chatId: string, newMessage: Message) => {
    setMessages({
      ...messages,
      [chatId]: [...messages[chatId], newMessage],
    });
  };

  const onDelChat = (chatId: string) => {
    const filterChats = chats.filter((item) => item.id != chatId);
    setChats([...filterChats]);
    delete messages[chatId];
    setMessages({ ...messages });
  };

  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Main />} />
            <Route path="profile" element={<Profile />} />
            <Route path="about" element={<AboutWithConnect />} />
            <Route path="chats">
              <Route
                index
                element={
                  <ChatList
                    chats={chats}
                    onAddChat={onAddChat}
                    delChat={onDelChat}
                  />
                }
              />
              <Route
                path=":chatId"
                element={
                  <ChatPage
                    chats={chats}
                    onAddChat={onAddChat}
                    messages={messages}
                    onAddMessage={onAddMessage}
                    delChat={onDelChat}
                  />
                }
              />
            </Route>
          </Route>
          <Route path="*" element={<div>404 page</div>} />
        </Routes>
      </Suspense>
    </Provider>
  );
};
