import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormPage from '../components/pages/FormPage';

describe('Render Select input', () => {
  it('render', () => {
    render(<FormPage />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
  });
});
