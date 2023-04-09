import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FormPage } from '../components/pages';

describe('Render', () => {
  it('render', () => {
    render(<FormPage />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your name/i)).toBeInTheDocument();
  });
});
