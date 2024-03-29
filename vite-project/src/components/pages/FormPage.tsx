import { FieldErrors, FieldValues, useForm, UseFormRegister } from 'react-hook-form';
import Form from '../form/Form';

import '../validCard/validCard.scss';
import {
  FormCheckboxInput,
  FormDateInput,
  FormFileInput,
  FormRadioInput,
  FormSelectInput,
  FormTextInput,
} from '../inputs';
import { useState } from 'react';
import ValidCard from '../validCard/ValidCard';

export type IValidCard = {
  name: string;
  birthday: string;
  gender: string;
  country: string;
  img: FileList;
  accept: string;
};
export type IValidInputCard = {
  name: string;
  birthday: string;
  gender: string;
  country: string;
  img: string;
  accept: string;
};

export type InputProps = {
  register: UseFormRegister<IValidCard>;
  errors: FieldErrors<FieldValues>;
  id: string[];
  type: string;
  placeholder?: string;
  role?: string;
  value?: string[];
  defaultChecked?: boolean;
  name: string;
};

const Message = () => {
  return <h2 style={{ fontSize: '2rem' }}>Your data has been saved</h2>;
};

const FormPage = () => {
  const [validData, setValidData] = useState<IValidInputCard[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<IValidCard>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit = (data: IValidCard) => {
    const validInputData: IValidInputCard = {
      name: data.name,
      gender: data.gender,
      country: data.country,
      accept: data.accept,
      birthday: data.birthday,
      img: URL.createObjectURL(data.img[0]),
    };
    if (isValid) {
      setValidData((validData) => [...validData, validInputData]);
      setIsSuccess(true);
    }
    reset();
  };
  setTimeout(() => {
    setIsSuccess(false);
  }, 5000);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTextInput
          type="text"
          placeholder="Enter your name"
          id={['fullName']}
          name="name"
          register={register}
          errors={errors}
        />
        <FormDateInput
          type="date"
          placeholder="Enter your birthday"
          id={['birthday']}
          name="birthday"
          register={register}
          errors={errors}
        />
        <FormRadioInput
          type="radio"
          role="radio"
          name="gender"
          id={['dot-1', 'dot-2', 'dot-3']}
          register={register}
          value={['male', 'female', 'prefer not to say']}
          defaultChecked={false}
          errors={errors}
        />
        <FormSelectInput
          type="text"
          id={['country']}
          name="country"
          register={register}
          errors={errors}
        />
        <FormFileInput type="file" id={['myfile']} name="img" register={register} errors={errors} />
        <FormCheckboxInput
          type="checkbox"
          id={['accept']}
          name="accept"
          register={register}
          errors={errors}
        />
      </Form>
      {isSuccess && <Message />}
      <ul className="cards__list">
        {validData.map((object, ind) => {
          return <ValidCard item={object} key={ind} />;
        })}
      </ul>
    </>
  );
};
export default FormPage;
