import { Component, RefObject } from 'react';
import '../form/form.scss';

type Props = {
  reference: RefObject<HTMLInputElement>;
};

class FormFileInput extends Component<Props> {
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
