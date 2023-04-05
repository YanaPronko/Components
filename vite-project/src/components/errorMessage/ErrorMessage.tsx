import img from './error.gif';
import './errorMessage.scss';

const ErrorMessage = () => {
  return (
    <>
      <h1 className='error__title'>ERROR! Something went wrong!</h1>
      <img className="error" src={img} alt="error picture" />;
    </>
  );
};

export default ErrorMessage;
