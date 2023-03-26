import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormSelectInput from '../components/inputs/FormSelectInput';
import { selectInputRef } from '../components/form/Form';

describe('Render', () => {
  it('render', () => {
    render(<FormSelectInput reference={selectInputRef} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
  });
});
