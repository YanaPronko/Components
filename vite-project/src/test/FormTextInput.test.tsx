import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormTextInput from '../components/inputs/FormTextInput';
import { textInputRef } from '../components/form/Form';

describe('Render', () => {
  it('render', () => {
    render(<FormTextInput reference={textInputRef} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your name/i)).toBeInTheDocument();
  });
});
