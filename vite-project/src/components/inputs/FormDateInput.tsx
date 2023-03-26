import { Component, RefObject } from 'react';
import '../form/form.scss';

type Props = {
  reference: RefObject<HTMLInputElement>;
};

class FormDateInput extends Component<Props> {
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
