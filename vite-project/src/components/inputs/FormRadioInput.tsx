import { InputProps } from '../pages/FormPage';
import '../form/form.scss';

const FormRadioInput: React.FC<InputProps> = ({
  register,
  id,
  role,
  value,
  defaultChecked,
  errors,
  ...inputProps
}) => {
  return (
    <div className="gender-details">
      <input
        className="input"
        id={id[0]}
        value={value?.length ? value[0] : ''}
        role={role}
        defaultChecked={defaultChecked}
        {...register('gender', { required: true })}
        {...inputProps}
      />
      <input
        className="input"
        id={id[1]}
        value={value?.length ? value[1] : ''}
        role={role}
        defaultChecked={defaultChecked}
        {...register('gender', { required: true })}
        {...inputProps}
      />
      <input
        className="input"
        id={id[2]}
        value={value?.length ? value[2] : ''}
        role={role}
        defaultChecked={defaultChecked}
        {...register('gender', { required: true })}
        {...inputProps}
      />
      <span className="gender-title">Gender</span>
      <div className="category">
        <label htmlFor={id[0]}>
          <span className="dot one"></span>
          <span className="gender">Male</span>
        </label>
        <label htmlFor={id[1]}>
          <span className="dot two"></span>
          <span className="gender">Female</span>
        </label>
        <label htmlFor={id[2]}>
          <span className="dot three"></span>
          <span className="gender">Prefer not to say</span>
        </label>
      </div>
      {errors?.gender && <p className="error-message">This field is required!</p>}
    </div>
  );
};

export default FormRadioInput;
