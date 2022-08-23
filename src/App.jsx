import './index.css'
import { Message } from './message-component/Message';
import { useState } from 'react';

export const App = () => {
  const [text] = useState('hello')
  return (
    <Message text={text} />
  );
}
