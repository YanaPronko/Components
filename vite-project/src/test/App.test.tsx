import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import App from '../components/app/App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
  });
});
