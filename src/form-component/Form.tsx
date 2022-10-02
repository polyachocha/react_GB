import React, { FC, useState } from 'react';
import styles from './Form.module.css';
import { TextField } from '@mui/material';
import { Button } from './components/Button';
import { AUTHOR, Message } from 'src/types';
import { useParams } from 'react-router-dom';

interface FormProps {
  addMessage: (chatId: string, msg: Message) => void;
}

export const Form: FC<FormProps> = ({ addMessage }) => {
  const [value, setValue] = useState('');
  const { chatId } = useParams();

  const sendMessage = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (chatId) {
      addMessage(chatId, {
        author: AUTHOR.USER,
        value,
      });
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
