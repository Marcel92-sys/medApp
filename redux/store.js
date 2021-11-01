import {configureStore} from '@reduxjs/toolkit'
import { isAuthenticated } from '../helpers/authHelpers'
import authReducer from './auth/authSlice'
import workersListReducer from './hWorkers/workersSlice'
import patientsListReducer from './patients/patientsListSlice'
import patientReducer from './userDetails/patientDetailsSlice'
import workerReducer from './userDetails/workerDetailsSlice'



const store = configureStore({
    reducer: {
        patientsList: patientsListReducer,
        workersList: workersListReducer,
        authState: authReducer,
        user: patientReducer

    }
})


export default store