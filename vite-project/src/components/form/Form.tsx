import React, { RefObject } from 'react';
import { Component, FormEvent } from 'react';
import {
  FormCheckboxInput,
  FormDateInput,
  FormFileInput,
  FormRadioInput,
  FormSelectInput,
  FormTextInput,
} from '../inputs';

import { IValidCard } from '../pages/FormPage';

type Props = {
  setValidData: (object: IValidCard) => void;
};
type References = (HTMLInputElement | HTMLSelectElement | null)[];
export type RefProps = {
  reference: RefObject<HTMLInputElement>;
};

import './form.scss';

class Form extends Component<Props> {
  textInputRef = React.createRef<HTMLInputElement>();
  dateInputRef = React.createRef<HTMLInputElement>();
  checkboxInputRef = React.createRef<HTMLInputElement>();
  selectInputRef = React.createRef<HTMLSelectElement>();
  radioMaleInputRef = React.createRef<HTMLInputElement>();
  radioFemaleInputRef = React.createRef<HTMLInputElement>();
  radioOtherInputRef = React.createRef<HTMLInputElement>();
  fileInputRef = React.createRef<HTMLInputElement>();

  getRefs = () => {
    const references = [];

    const textInput = this.textInputRef.current;
    const dateInput = this.dateInputRef.current;
    const checkboxInput = this.checkboxInputRef.current;
    const selectInput = this.selectInputRef.current;
    const radioMaleInput = this.radioMaleInputRef.current;
    const radioFemaleInput = this.radioFemaleInputRef.current;
    const radioOtherleInput = this.radioOtherInputRef.current;
    const fileInput = this.fileInputRef.current;

    references.push(
      textInput,
      dateInput,
      checkboxInput,
      selectInput,
      radioMaleInput,
      radioFemaleInput,
      radioOtherleInput,
      fileInput
    );
    return references;
  };

  checkInputs = (arr: References, dataForCard: IValidCard) => {
    if (arr)
      arr.forEach((input) => {
        if (!input?.validity.valid) {
          input?.classList.add('submitted');
          console.log('invalid');
          return false;
        } else {
          const type = input.type ? input.type : input.tagName;
          if (input instanceof HTMLInputElement) {
            switch (type) {
              case 'radio':
                if (!input.checked) {
                  return;
                } else {
                  dataForCard[input.name as keyof IValidCard] = input.value;
                }
                break;
              case 'file':
                if (input.files) {
                  dataForCard[input.name as keyof IValidCard] = input.files[0].name;
                }
                break;
              case 'checkbox':
                dataForCard[input.name as keyof IValidCard] = 'accept terms';
                break;
              default:
                dataForCard[input.name as keyof IValidCard] = input.value;
            }
          } else {
            dataForCard[input.name as keyof IValidCard] = input.value;
          }
        }
      });
  };

  handleAfterInputValidation = (e: FormEvent, data: IValidCard, arr: References) => {
    const target = e.target;

    if (target instanceof HTMLFormElement) {
      if (target.checkValidity()) {
        this.props.setValidData(data);
        target.reset();
        arr.forEach((input) => input?.classList.remove('submitted'));
      }
    }
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const dataForCard: IValidCard = {
      fullname: '',
      date: '',
      gender: '',
      country: '',
      pathToFile: '',
      accept: '',
    };
    const references = this.getRefs();
    this.checkInputs(references, dataForCard);
    this.handleAfterInputValidation(e, dataForCard, references);
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit} noValidate>
        <div className="content">
          <div className="user-details">
            <FormTextInput reference={this.textInputRef} />
            <FormDateInput reference={this.dateInputRef} />
            <FormRadioInput
              reference={[
                this.radioMaleInputRef,
                this.radioFemaleInputRef,
                this.radioOtherInputRef,
              ]}
            />
            <FormSelectInput reference={this.selectInputRef} />
            <FormFileInput reference={this.fileInputRef} />
            <FormCheckboxInput reference={this.checkboxInputRef} />
            <div className="button">
              <input type="submit" value="Register" />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
