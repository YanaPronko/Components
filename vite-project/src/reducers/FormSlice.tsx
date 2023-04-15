import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { IValidInputCard } from '../components/pages/FormPage';
import { AppDispatch, RootState } from '../store/store';

const initialState: IValidInputCard[] = [];

export const formsSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    saveFormCard(state, action: PayloadAction<IValidInputCard>) {
      state.push(action.payload);
    },
  },
});
export const { actions, reducer } = formsSlice;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default reducer;
