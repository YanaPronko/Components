import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';

const initialState = {
  searchParam: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchParams(state, action: PayloadAction<string>) {
      state.searchParam = action.payload;
    },
  },
});
export const { actions, reducer } = searchSlice;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default reducer;
