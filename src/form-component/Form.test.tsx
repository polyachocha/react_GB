import { Form } from './Form';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('test component Form', () => {
  it('render form', () => {
    const addMessageFn = jest.fn();
    render(<Form addMessage={addMessageFn} />);
  });

  it('button in Form', () => {
    const addMessageFn = jest.fn();
    render(<Form addMessage={addMessageFn} />);
    expect(screen.getByRole('button')).toBeInTheDocument;
  });

  it('input change with fireevent', () => {
    const addMessageFn = jest.fn();
    render(<Form addMessage={addMessageFn} />);
    const input = screen.getByTestId<HTMLInputElement>('input');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(input.value).toBe('new value');
  });
});
