import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Form from '../components/form/Form';
import setValidData from '../components/pages/FormPage';

// describe('Form page', () => {
//   it('Renders About us', () => {
//     render(<Form setValidData={setValidData} />);
//     expect(screen.getByRole('form')).toBeInTheDocument();
//     expect(screen.getByRole('radio')).toBeInTheDocument();
//     expect(screen.getByRole('checkbox')).toBeInTheDocument();
//     expect(screen.getByRole('listbox')).toBeInTheDocument();
//   });
// });
