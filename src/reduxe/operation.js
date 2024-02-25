import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65db46283ea883a152916eb0.mockapi.io/";

export const fetchCards = createAsyncThunk(
  "cards/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("contacts");
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addCard = createAsyncThunk(
  "cards/addCard",
  async (newCard, thunkAPI) => {
    try {
      const response = await axios.post("contacts", newCard);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  "cards/deleteCard",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
