import { createStore,compose, combineReducers, applyMiddleware } from "redux";
import  thunk from 'redux-thunk';
import { workersListReducer, workersRegisterReducer,userLoginReducer } from "./reducers/userReducer";


const initialState = {
    userSignin: {
        user: localStorage.getItem("userInfo") ?
            JSON.parse(localStorage.getItem('userInfo')) : null
    }
}
const rootReducer = combineReducers({
   workersList: workersListReducer,
   workerRegister: workersRegisterReducer,
   userSignin: userLoginReducer
})



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const store = createStore(rootReducer,initialState, applyMiddleware(thunk))