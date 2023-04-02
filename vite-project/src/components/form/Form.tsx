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

import { IValidCardStringFields, IValidCard } from '../pages/FormPage';

type Props = {
  setValidData: (object: IValidCard) => void;
};
type References = (HTMLInputElement | HTMLSelectElement | null)[];
export type RefProps = {
  reference: RefObject<HTMLInputElement>;
};

import './form.scss';

export const textInputRef = React.createRef<HTMLInputElement>();
export const dateInputRef = React.createRef<HTMLInputElement>();
export const checkboxInputRef = React.createRef<HTMLInputElement>();
export const selectInputRef = React.createRef<HTMLSelectElement>();
export const radioMaleInputRef = React.createRef<HTMLInputElement>();
export const radioFemaleInputRef = React.createRef<HTMLInputElement>();
export const radioOtherInputRef = React.createRef<HTMLInputElement>();
export const fileInputRef = React.createRef<HTMLInputElement>();

class Form extends Component<Props> {
  getRefs = () => {
    const references = [];

    const textInput = textInputRef.current;
    const dateInput = dateInputRef.current;
    const checkboxInput = checkboxInputRef.current;
    const selectInput = selectInputRef.current;
    const radioMaleInput = radioMaleInputRef.current;
    const radioFemaleInput = radioFemaleInputRef.current;
    const radioOtherleInput = radioOtherInputRef.current;
    const fileInput = fileInputRef.current;

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
          return false;
        } else {
          const type = input.type ? input.type : input.tagName;
          if (input instanceof HTMLInputElement) {
            switch (type) {
              case 'radio':
                if (!input.checked) {
                  return;
                } else {
                  dataForCard[input.name as IValidCardStringFields] = input.value;
                }
                break;
              case 'file':
                if (input.files) {
                  dataForCard[input.name as 'pathToFile'] = input.files[0];
                }
                break;
              case 'checkbox':
                dataForCard[input.name as IValidCardStringFields] = 'accept terms';
                break;
              default:
                dataForCard[input.name as IValidCardStringFields] = input.value;
            }
          } else {
            dataForCard[input.name as IValidCardStringFields] = input.value;
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
      pathToFile: null,
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
            <FormTextInput reference={textInputRef} />
            <FormDateInput reference={dateInputRef} />
            <FormRadioInput
              reference={[radioMaleInputRef, radioFemaleInputRef, radioOtherInputRef]}
            />
            <FormSelectInput reference={selectInputRef} />
            <FormFileInput reference={fileInputRef} />
            <FormCheckboxInput reference={checkboxInputRef} />
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
