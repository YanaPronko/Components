import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Main } from '../components/pages';

describe('Main page', () => {
  it('renders Main component', () => {
    render(<Main />);
  });
});
