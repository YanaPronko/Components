import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormRadioInput from '../components/inputs/FormRadioInput';
import {
  radioMaleInputRef,
  radioFemaleInputRef,
  radioOtherInputRef,
} from '../components/form/Form';

describe('Radio inputs', () => {
  it('render radio inputs', () => {
    render(
      <FormRadioInput reference={[radioMaleInputRef, radioFemaleInputRef, radioOtherInputRef]} />
    );
    // expect(screen.getAllByRole('radio')).toBeInTheDocument();
    // expect(screen.getByLabelText(/female/i)).toBeInTheDocument();
    // expect(screen.getByLabelText(/prefer not to say/i)).toBeInTheDocument();
  });
});
