import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
// import { AuthState } from "./IAuth";
import useAxios from "@/services/useAxios.services";
import { formaterDataAuth } from "@/services/formaterDataAuth.services";
// import writedLocalStorage from "@/services/storage.services";




export interface AuthState {
  token: string;
  islogin: boolean;
  user: any[];
  id: string | number;

}


const initialState: AuthState = {
  token: "",
  islogin: false,
  user: [],
  id: ""
};
export const authAsync = createAsyncThunk(
  "counter/fetchCount",
  async (userData: any) => {
    // const url = "http://localhost:3001/users/login";

    // const todo: any = { url, method: "post", body: userData, idParams: "" }

    // const response = await useAxios(todo);
    // const {
    //   data: { token, exist: islogin }
    // } = response
    // const { data: dataUser } = response


    // const user = dataUser
    // const { _id } = dataUser.dataUser
    // const resp = { token, islogin, user, _id }



    // // const returnData = await writedLocalStorage(resp)

    // // The value we return becomes the `fulfilled` action payload
    // return response.data;

    const AxiosG: any = await useAxios({
      url: "http://localhost:3001/Auth/Auth",
      method: 'PUT', // Use 'GET', 'POST', 'PUT', etc. as needed
      body: {
        "email": "nico.contigliani@gmail.com",
        "password": "123456789"
      },
      idParams: null,
    });

    const todo = await formaterDataAuth(AxiosG)
    console.log("🚀 ~ file: page.tsx:34 ~ fetchData ~ todo:", todo)





  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authd: (state, action: PayloadAction<any>) => {
      state.token += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authAsync.pending, (state) => {
        state.islogin = false;
      })
       .addCase(authAsync.fulfilled, (state, action) => {
        console.log("todo")
      //   state.islogin = true;
      //   state.user = action.payload;
      //   state.token = action.payload.token;
      //   state.id = action.payload.dataUser._id;




      })
      .addCase(authAsync.rejected, (state) => {
        state.islogin = false;
      });
  },
});

export const { authd } = authSlice.actions;

export default authSlice.reducer;
