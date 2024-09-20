import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  countryData: []
};

const countrySlice = createSlice({
  name: "country",
  initialState,

  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
      state.error = null;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    setCountryData(state, action) {
      state.loading = false;
      state.error = null;
      state.countryData = action.payload;
    }
  }
});

export const countrySliceActions = countrySlice.actions;

export default countrySlice.reducer;