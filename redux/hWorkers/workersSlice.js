import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import instance from "../../helpers/axios"

const initialState = {
    workers : [],
        status: 'idle',
        error: null
    }

    export const getWorkers = createAsyncThunk('workers/getWorkers', async() => {
      const res = await instance.get('/workers/')
        return res.data
    })

    export const workersSlice = createSlice({
        name:'workers',
        initialState,
        reducers:{},
        extraReducers: {
            [getWorkers.pending]: (state) => {
                state.status = 'loading'
            },
            [getWorkers.fulfilled]: (state, {payload}) => {
                state.status = 'succeeded'
                state.workers = payload
            },
            [getWorkers.rejected]: (state, action ) => {
                state.status = 'failed'
                state.error =  action.error.message
            }
        }
    })

    const workersListReducer = workersSlice.reducer

    export default workersListReducer