import { createSlice } from "@reduxjs/toolkit";
import Signin from "../../pages/SignIn";

const initialState ={
    currentUser: null,
    error : null,
    loading: false,
};

const userSlice =createSlice({
    name: 'user',
    initialState,
    reducers:{
        signInStart: (state) => {
            state.loading =true;
        },
        SignInSuccess: (state, action) => {
            state.currentUser=action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) =>{
            state.error =action.payload;
            state.loading= false;
        }
    }
});

export const {signInStart, SignInSuccess, signInFailure} = userSlice.actions;
export default userSlice.reducer;