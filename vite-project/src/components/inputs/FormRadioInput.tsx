import { Component, RefObject } from 'react';
import '../form/form.scss';

type Props = {
  reference: RefObject<HTMLInputElement>[];
};

class FormRadioInput extends Component<Props> {
  render() {
    return (
      <div className="gender-details">
        <input
          type="radio"
          name="gender"
          id="dot-1"
          value="male"
          defaultChecked={false}
          required
          ref={this.props.reference[0]}
        />
        <input
          type="radio"
          name="gender"
          id="dot-2"
          value="female"
          defaultChecked={false}
          ref={this.props.reference[1]}
        />
        <input
          type="radio"
          name="gender"
          id="dot-3"
          value="Prefer not to say"
          defaultChecked={false}
          ref={this.props.reference[2]}
        />
        <span className="gender-title">Gender</span>
        <div className="category">
          <label htmlFor="dot-1">
            <span className="dot one"></span>
            <span className="gender">Male</span>
          </label>
          <label htmlFor="dot-2">
            <span className="dot two"></span>
            <span className="gender">Female</span>
          </label>
          <label htmlFor="dot-3">
            <span className="dot three"></span>
            <span className="gender">Prefer not to say</span>
          </label>
        </div>
        <span className="error-message">Choose one of button</span>
      </div>
    );
  }
}
export default FormRadioInput;
