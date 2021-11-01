import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import instance from "../../helpers/axios"

const initialState = {
    patientsList : [],
        status: 'idle',
        error: null
    }

    export const getPatients = createAsyncThunk('patients/getPatients', async() => {
       const res = await instance.get('/patients/')
        return res.data
    })

    export const patientsSlice = createSlice({
        name:'patients',
        initialState,
        reducers:{},
        extraReducers: {
            [getPatients.pending]: (state) => {
                state.status = 'loading'
            },
            [getPatients.fulfilled]: (state, {payload}) => {
                state.status = 'succeeded'
                state.patientsList = payload
            },
            [getPatients.rejected]: (state, action ) => {
                state.status = 'failed'
                state.error =  action.error.message
            }
        }
    })

    const patientsListReducer = patientsSlice.reducer

    export default patientsListReducer