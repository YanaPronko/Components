import { InputProps } from '../pages/FormPage';
import '../form/form.scss';

const FormTextInput: React.FC<InputProps> = ({ register, id, errors, ...inputProps }) => {
  return (
    <div className="input-box">
      <label htmlFor={id[0]} className="details">
        Full Name
      </label>
      <input
        className="input name-input"
        id={id[0]}
        {...register('name', {
          required: true,
          pattern: /^[A-Za-zа-яёА-ЯЁ0-9]{3,16}/,
        })}
        {...inputProps}
      />
      {errors?.name && (
        <p className="error-message">
          Username should be 3-16 characters and should not include any special character!
        </p>
      )}
    </div>
  );
};
export default FormTextInput;
