import { ReactNode } from 'react';
import './form.scss';

type FormProps = {
  children: ReactNode;
  onSubmit: () => unknown;
};

const Form: React.FC<FormProps> = ({ children, ...props }) => {
  return (
    <form className="form" noValidate {...props}>
      <div className="content">
        <div className="user-details">
          {children}
          <div className="button">
            <input type="submit" value="Register" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
