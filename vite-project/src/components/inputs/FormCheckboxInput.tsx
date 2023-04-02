import { InputProps } from '../pages/FormPage';
import '../form/form.scss';

const FormCheckboxInput: React.FC<InputProps> = ({ register, id, errors, ...inputProps }) => {
  return (
    <div className="policy">
      <input id={id[0]} {...register('accept', { required: true })} {...inputProps} />
      <h3 className="checkbox-title">I accept all terms & condition</h3>
      {errors?.accept && <p className="error-message">You must accept policy to register</p>}
    </div>
  );
};

export default FormCheckboxInput;
