import { Button } from './Button';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Button', () => {
  it('render component', () => {
    render(<Button>test</Button>);
  });
});
