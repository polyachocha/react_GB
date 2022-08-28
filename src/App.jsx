import './index.css'
import { Message } from './message-component/Message';

export const App = () => {
  const text = "hello"
  return (
    <Message text={text} />
  );
}
