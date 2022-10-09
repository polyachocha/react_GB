import { MessageList } from './MessageList';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('test component MessageList', () => {
  it('render MessageList', () => {
    render(<MessageList messages={[]} />);
  });

  it('component MessageList is empty', () => {
    render(<MessageList messages={[]} />);
    expect(screen.queryAllByRole('li').length).toBe(0);
  });

  it('MessageList length is 3', () => {
    const messageList = [
      {
        author: 'Anna',
        value: '1',
      },
      {
        author: 'Kate',
        value: '2',
      },
      {
        author: 'Steve',
        value: '5',
      },
    ];
    render(<MessageList messages={[]} />);
    expect(screen.getAllByTestId('li').length).toBe(3);
  });
});
