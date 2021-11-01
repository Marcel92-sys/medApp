import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../helpers/apiCalls";
import { isAuthenticated } from "../../helpers/authHelpers";




      

const initialState = {
       userInfo:"",
        status: 'idle',
        error: null
    }

export const getPatient = createAsyncThunk('userDetails/patient', async() => {
    //   isAuthenticated()
    //     .then(value => {
    //         console.log("userState from asyncStorage at ptSlice", value)
    //         // setUserInfo( value)
    //         if(value.user.bmi) {
    //             // dispatch(getPatient(value.user.id))
                
    // const res = await axios.get(baseUrl+'/patients/' +{"patId": value.user.id} )
    
    //         }
    //         // dispatch(getWorker(value.user.id))
            
    
    //     })
    //     .catch(e => console.log("error", e))
    
    const res = await axios.get(baseUrl+'/patients/' + {"wkId": value.user.id })
    
    return res.data
     
})

export const patientSlice = createSlice({
    name:'patient',
    initialState,
    reducers: {},
    extraReducers: {
        [getPatient.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getPatient.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.userInfo = action.payload
        },

        [getPatient.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error
        }
    }
})

const patientReducer  = patientSlice.reducer



export default patientReducer