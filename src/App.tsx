import React, { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChatList } from './chat-component/ChatList';
import { Main } from './pages/Main';
import { ChatPage } from './pages/ChatPage/ChatPage';
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

export const App: FC = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Main />} />
            <Route path="profile" element={<Profile />} />
            <Route path="about" element={<AboutWithConnect />} />
            <Route path="chats">
              <Route index element={<ChatList />} />
              <Route path=":chatId" element={<ChatPage />} />
            </Route>
          </Route>
          <Route path="*" element={<div>404 page</div>} />
        </Routes>
      </Suspense>
    </Provider>
  );
};
