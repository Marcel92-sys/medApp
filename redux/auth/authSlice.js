import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../helpers/apiCalls";
import { authenticate } from "../../helpers/authHelpers";

const initialState = {
       userInfo:"",
        status: 'idle',
        error: null
    }

export const loginUser = createAsyncThunk('auth/loginUser', async(userDetails) => {
    const res = await axios.post(baseUrl+'/login', userDetails)

        console.log("At authSlice", res.data)
     authenticate(res.data)
    return res.data
})

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [loginUser.pending]: (state, action) => {
            state.status = 'loading'
        },
        [loginUser.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.userInfo = action.payload
        },

        [loginUser.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error
        }
    }
})

const authReducer  = authSlice.reducer



export default authReducer