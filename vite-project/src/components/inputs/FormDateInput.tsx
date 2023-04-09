import React from 'react';
import { InputProps } from '../pages/FormPage';
import '../form/form.scss';

const FormDateInput: React.FC<InputProps> = ({ register, id, errors, ...inputProps }) => {
  return (
    <div className="input-field">
      <label htmlFor={id[0]} className="details">
        Date of Birth
      </label>
      <input
        className="input date-input"
        id={id[0]}
        {...register('birthday', { required: true })}
        {...inputProps}
      />
      {errors?.birthday && <p className="error-message">This field is required!</p>}
    </div>
  );
};

export default FormDateInput;
