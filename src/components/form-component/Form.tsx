import styles from './Form.module.css';
import React, { FC, useState } from 'react';
import { TextField } from '@mui/material';
import { Button } from './components/Button/Button';
import { AUTHOR } from 'src/types';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { StoreState } from '../../store'
import { addMessageWithReply } from 'src/store/messages/slice';

export const Form: FC = () => {
  const [value, setValue] = useState('');
  const { chatId } = useParams();
  const dispatch = useDispatch<ThunkDispatch<StoreState, void, any>>();

  const sendMessage = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (chatId) {
      dispatch(
        addMessageWithReply({
          chatName: chatId,
          message: { author: AUTHOR.USER, value},
        })
      );
    }
    setValue('');
  };
  return (
    <form onSubmit={sendMessage} className={styles.form}>
      <TextField
        autoFocus
        id="outlined-basic"
        label="Введите текст"
        variant="outlined"
        className={styles.input}
        type="text"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        inputProps={{ 'data-testid': 'input' }}
      />
      <br />
      <Button disabled={!value} render={(label: string) => <div>{label}</div>}>
        Send
      </Button>
    </form>
  );
};
