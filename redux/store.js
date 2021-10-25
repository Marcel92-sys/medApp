import {configureStore} from '@reduxjs/toolkit'
import { isAuthenticated } from '../helpers/authHelpers'
import authReducer from './auth/authSlice'
import workersListReducer from './hWorkers/workersSlice'
import patientsListReducer from './patients/patientsListSlice'

const intialState = {
    authState: { userInfo : isAuthenticated() ? isAuthenticated : null}
};

const store = configureStore({
    reducer: {
        patientsList: patientsListReducer,
        workersList: workersListReducer,
        authState: authReducer

    },
    intialState
})


export default store