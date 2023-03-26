import { Component } from 'react';

import ValidCard from '../validCard/ValidCard';
import Form from '../form/Form';

import '../validCard/validCard.scss';

export interface IValidCard {
  fullname: string;
  date: string;
  gender: string;
  country: string;
  pathToFile: string;
  accept: string;
}
type State = {
  validData: IValidCard[] | [];
  isValid: boolean;
};

class Message extends Component {
  render() {
    return <h2 style={{ fontSize: '2rem' }}>Your data has been saved</h2>;
  }
}

class FormPage extends Component<Record<string, never>, State> {
  state = {
    validData: [],
    isValid: false,
  };

  setValidData = (object: IValidCard) => {
    this.setState(({ validData }) => ({
      validData: [...validData, object],
      isValid: true,
    }));
  };

  render() {
    const isValid = this.state.isValid;
    const message = isValid ? <Message /> : null;
    setTimeout(() => {
      this.setState(() => ({
        isValid: false,
      }));
    }, 5000);
    return (
      <>
        <Form setValidData={this.setValidData} />
        {message}
        <ul className="cards__list">
          {this.state.validData.map((object, ind) => {
            return <ValidCard item={object} key={ind} />;
          })}
        </ul>
      </>
    );
  }
}
export default FormPage;
