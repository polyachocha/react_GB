import { useState } from 'react';
import styles from './Form.module.css';

export const Form = ({ addMessage }) => {
  const [value, setValue] = useState('');
  const [author, setAuthor] = useState('');

  const sendMessage = (ev) => {
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
      <input
        className={styles.input}
        type="text"
        value={value}
        placeholder="Введите текст"
        onChange={(ev) => setValue(ev.target.value)}
      />
      <br></br>
      <input
        className={styles.input}
        type="text"
        value={author}
        placeholder="Введите имя"
        onChange={(ev) => setAuthor(ev.target.value)}
      />
      <br></br>
      <button
        className={styles.button}
        disabled={!value}
        variant="contained"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};
