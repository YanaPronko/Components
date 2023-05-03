import { describe, it, expect } from 'vitest';
import { render, screen } from './tests';
import FormPage from '../components/pages/FormPage';

describe('Render Select input', () => {
  it('render', () => {
    render(<FormPage />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
  });
});
