import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface LangState {
  lang: 'en' | 'np';
}

const initialState: LangState = {
  lang: 'en',
};

const langSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<'en' | 'np'>) => {
      state.lang = action.payload;
    },
  },
});

export const { setLang } = langSlice.actions;
export default langSlice.reducer;
