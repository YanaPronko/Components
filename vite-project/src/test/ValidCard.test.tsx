import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ValidCard from '../components/validCard/ValidCard';
import { IValidInputCard } from '../components/pages/FormPage';

const item: IValidInputCard = {
  name: 'mockname',
  birthday: '2020-10-05',
  gender: 'female',
  country: 'Belarus',
  img: 'mockpath',
  accept: 'true',
};

describe('Valid card', () => {
  it('renders valid card component after submitting form', () => {
    render(<ValidCard item={item} />);
    expect(screen.getByText(/female/i)).toBeInTheDocument();
    expect(screen.getByText(/Belarus/i)).toBeInTheDocument();
  });
});
