import { createSlice } from "@reduxjs/toolkit";

const filterState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filterState,

  reducers: {
    setStatusFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
