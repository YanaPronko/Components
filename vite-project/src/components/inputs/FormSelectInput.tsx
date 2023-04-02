import React from 'react';
import '../form/form.scss';
import { InputProps } from '../pages/FormPage';

const FormSelectInput: React.FC<InputProps> = ({ register, id, errors, ...inputProps }) => {
  return (
    <div className="input-field">
      <label htmlFor={id[0]} className="details">
        Country
      </label>
      <select
        className="input select-input"
        id={id[0]}
        {...register('country', { required: true })}
        {...inputProps}
      >
        <option value="">Select country</option>
        <option>Belarus</option>
        <option>Russian Federation</option>
        <option>Other</option>
      </select>
      {errors?.country && <p className="error-message">This field is required!</p>}
    </div>
  );
};
export default FormSelectInput;
