import { Form } from './Form';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('test component Form', () => {
  it('render form', () => {
    const addMessageFn = jest.fn();
    render(<Form addMessage={addMessageFn}/>);
  });

  it('button in Form', () => {
    render(<Form />);
    expect(screen.getByRole('button')).toBeInTheDocument;
  });
});
