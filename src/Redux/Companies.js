import { createSlice } from "@reduxjs/toolkit";

const CompaniesSlice = createSlice({
  name: "Companies",
  initialState: {
    CompaniesDet: [],
  },
  reducers: {
    addCompaniesdet: (state, action) => {
      state.CompaniesDet =action.payload;
    },
  },
});

export const { addCompaniesdet } = CompaniesSlice.actions;
export default CompaniesSlice.reducer;
