<<<<<<< HEAD
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
=======
import { Form } from './form-component/Form';
import { MessageList } from './message-component/MessageList';
import { useState, useEffect } from 'react';
import './index.css';
>>>>>>> cec5a8c6ad7728e31e3d5491e8d249f72fe05607

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
<<<<<<< HEAD
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
=======
    <>
      <MessageList messages={messages} />
      <Form addMessage={addMessage} />
    </>
>>>>>>> cec5a8c6ad7728e31e3d5491e8d249f72fe05607
  );
};
