import { FC, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ChatList } from "./chat-component";
import { Header } from "./header";
import { AboutWithConnect } from "../pages/About";
import { ChatPage } from "../pages/ChatPage";
import { Main } from "../pages/Main";
// import { Profile } from "./pages/Profile";

const Profile = lazy(() =>
  Promise.all([
    import('../pages/Profile').then(({ Profile }) => ({
      default: Profile,
    })),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExport]) => moduleExport)
);

export const AppRouter: FC = () => (
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
);