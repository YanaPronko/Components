import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormPage from '../components/pages/FormPage';
import FormSelectInput from '../components/inputs/FormSelectInput';
// import { FieldErrors, FieldValues, useForm, UseFormRegister } from 'react-hook-form';
// import { IValidCard } from '../components/pages/FormPage';
// import { Form } from 'react-router-dom';
// import { mockComponent } from 'react-dom/test-utils';

/* const register: UseFormRegister<IValidCard> = ''
const errors: FieldErrors<FieldValues>; */

describe('Render Select input', () => {
  it('render', () => {
    render(<FormPage />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
  });
});
