import React, { FC, useState } from 'react';
import styles from './Form.module.css';
import MUIButton from '@mui/material/Button';
import { TextField } from '@mui/material';
import { Message } from 'src/types';

interface FormProps {
  addMessage: (msg: Message) => void;
}

export const Form: FC<FormProps> = ({ addMessage }) => {
  const [value, setValue] = useState('');
  const [author, setAuthor] = useState('');

  const sendMessage = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    addMessage({
      author,
      value,
    });
    setValue('');
    setAuthor('');
  };
  return (
    <form onSubmit={sendMessage} className={styles.form}>
      <TextField
        autoFocus
        id="outlined-basic"
        label="Введите имя"
        variant="outlined"
        className={styles.input}
        type="text"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
      />
      <br />
      <TextField
        id="outlined-basic"
        label="Введите текст"
        variant="outlined"
        className={styles.input}
        type="text"
        value={author}
        placeholder="Введите имя"
        onChange={(ev) => setAuthor(ev.target.value)}
      />
      <br />
      <MUIButton
        className={styles.button}
        disabled={!value}
        variant="contained"
        type="submit"
      >
        Send
      </MUIButton>
    </form>
  );
};
