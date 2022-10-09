import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { StoreState } from 'src/store';
import { auth } from 'src/store/profile/slice';

import style from './Header.module.css';

const nav = [
  {
    name: 'Main',
    path: '/',
  },
  {
    name: 'Chats',
    path: '/chats',
  },
  {
    name: 'Profile',
    path: '/profile',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Articles',
    path: '/articles',
  },
];

export const Header: FC = () => {
  const isAuth = useSelector((state: StoreState) => state.profile.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(auth(false));
  };

  const handleLogin = () => {
    navigate('/signin');
  };
  return (
    <>
      <header style={{ backgroundColor: 'grey' }}>
        <ul className={style.ul}>
          {nav.map((item, idx) => (
            <li key={idx}>
              <NavLink
                to={item.path}
                style={({ isActive }) => ({
                  color: isActive ? 'green' : 'blue',
                })}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
      <main>
      {isAuth ? (
          <button onClick={handleLogout}>logout</button>
        ) : (
          <button onClick={handleLogin}>login</button>
        )}
        <Outlet />
      </main>
    </>
  );
};
