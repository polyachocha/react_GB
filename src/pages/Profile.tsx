import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectName, selectVisible } from 'src/store/profile/selectors';
import { changeName, toggleProfile } from '../store/profile/slice';

export const Profile: FC = () => {
  const dispatch = useDispatch();

  const name = useSelector(selectName);
  const visible = useSelector(selectVisible);
  const [value, setValue] = useState('');

  return (
    <>
      <h2>Profile page</h2>
      <p>visible: </p>
      <input type="checkbox" checked={visible} readOnly />
      <button onClick={() => dispatch(toggleProfile())}>change visible</button>
      <p>name: {name}</p>
      <p>Change name:</p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(changeName(value))}>change name</button>
    </>
  );
};
