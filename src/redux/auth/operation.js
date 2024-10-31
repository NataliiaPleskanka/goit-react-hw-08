import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const goitAPI = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitAPI.post("/users/signup", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitAPI.post("/users/login", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
    try {
      await goItApi.post("/users/logout");
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  });
  
  export const refresh = createAsyncThunk("auth/refresh", async (_, thunkApi) => {
    try {
      const saveToken = thunkApi.getState().auth.token;
      if (!saveToken) {
        return thunkApi.rejectWithValue("Token not found");
      }
      setAuthHeader(saveToken);
      const { data } = await goItApi.get("/users/current");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  });
