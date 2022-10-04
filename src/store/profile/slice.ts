import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  name: 'gb',
  visible: true,
  isAuth: false,
};

const profileSLice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    toggleProfile: (state) => {
      state.visible = !state.visible;
    },
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { toggleProfile, changeName } = profileSLice.actions;
export const profileReducer = profileSLice.reducer;