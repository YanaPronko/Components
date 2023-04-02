import { Component } from 'react';
import { RefProps } from '../form/Form';
import '../form/form.scss';

class FormTextInput extends Component<RefProps> {
  render() {
    return (
      <div className="input-box">
        <label htmlFor="name" className="details">
          Full Name
        </label>
        <input
          className="input name-input"
          id="name"
          name="fullname"
          type="text"
          placeholder="Enter your name"
          pattern="^[A-Za-zа-яёА-ЯЁ0-9]{3,16}$"
          ref={this.props.reference}
          required
        />
        <span className="error-message">
          Username should be 3-16 characters and should not include any special character!
        </span>
      </div>
    );
  }
}
export default FormTextInput;
