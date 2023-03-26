import { Component, RefObject } from 'react';
import { RefProps } from '../form/Form';
import '../form/form.scss';

class FormFileInput extends Component<RefProps> {
  render() {
    return (
      <>
        <label className="file-label" htmlFor="myfile">
          Select a file:
        </label>
        <input
          className="input file-input"
          type="file"
          id="myfile"
          name="pathToFile"
          ref={this.props.reference}
          required
        />
        <span className="error-message">This field is required</span>
      </>
    );
  }
}
export default FormFileInput;
