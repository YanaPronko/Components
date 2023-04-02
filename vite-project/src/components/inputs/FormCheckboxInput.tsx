import { Component } from 'react';
import { RefProps } from '../form/Form';
import '../form/form.scss';

class FormCheckboxInput extends Component<RefProps> {
  render() {
    return (
      <div className="policy">
        <input
          id="acccept"
          name="accept"
          className="input"
          type="checkbox"
          ref={this.props.reference}
          required
        />
        <h3 className="checkbox-title">I accept all terms & condition</h3>
        <span className="error-message">You must accept policy to register</span>
      </div>
    );
  }
}
export default FormCheckboxInput;
