import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../helpers/apiCalls";

const initialState = {
       userInfo:"",
        status: 'idle',
        error: null
    }

export const getWorker = createAsyncThunk('userDetails/worker', async(userDetails) => {
    const res = await axios.get(baseUrl+'/workers/'+workerId)
    return res.data
})

export const workerSlice = createSlice({
    name:'worker',
    initialState,
    reducers: {},
    extraReducers: {
        [getWorker.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getWorker.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.userInfo = action.payload
        },

        [getWorker.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error
        }
    }
})

const workerReducer  = workerSlice.reducer



export default workerReducer