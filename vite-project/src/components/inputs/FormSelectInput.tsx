import { Component, RefObject } from 'react';
import '../form/form.scss';

type Props = {
  reference: RefObject<HTMLSelectElement>;
};

class FormSelectInput extends Component<Props> {
  render() {
    return (
      <div className="input-field">
        <label className="details">Country</label>
        <select className="input select-input" name="country" ref={this.props.reference} required>
          <option value="">Select country</option>
          <option>Belarus</option>
          <option>Russian Federation</option>
          <option>Other</option>
        </select>
        <span className="error-message">Choose one of field</span>
      </div>
    );
  }
}
export default FormSelectInput;
