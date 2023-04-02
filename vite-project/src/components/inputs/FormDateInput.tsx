import { Component } from 'react';
import { RefProps } from '../form/Form';
import '../form/form.scss';

class FormDateInput extends Component<RefProps> {
  render() {
    return (
      <div className="input-field">
        <label className="details">Date of Birth</label>
        <input
          className="input date-input"
          name="date"
          type="date"
          placeholder="Enter birth date"
          ref={this.props.reference}
          required
        />
        <span className="error-message">This field is required</span>
      </div>
    );
  }
}
export default FormDateInput;
