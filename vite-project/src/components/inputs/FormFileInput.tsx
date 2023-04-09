import { InputProps } from '../pages/FormPage';
import '../form/form.scss';

const FormFileInput: React.FC<InputProps> = ({ register, id, errors, ...inputProps }) => {
  return (
    <>
      <label className="file-label" htmlFor={id[0]}>
        Select a file:
      </label>
      <input
        className="input file-input"
        id={id[0]}
        {...register('img', { required: true })}
        {...inputProps}
      />
      {errors?.img && <p className="error-message">This field is required!</p>}
    </>
  );
};
export default FormFileInput;
