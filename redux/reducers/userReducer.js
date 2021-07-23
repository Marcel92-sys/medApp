import { LIST_WORKERS_FAIL, LIST_WORKERS_REQUEST, LIST_WORKERS_SUCCESS,
     LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, 
     LOGOUT_USER, 
     REGISTER_WORKERS_FAIL, REGISTER_WORKERS_REQUEST, REGISTER_WORKERS_SUCCESS } from "../actions/userActions";


export const workersListReducer = (state = {loading:false,workers:[]}, action) => {
    switch(action.type) {
        case LIST_WORKERS_REQUEST: 
            return {loading: true};
        case LIST_WORKERS_SUCCESS: 
            return {loading: false, workers: action.payload};
        case LIST_WORKERS_FAIL: 
            return {loading:false, error: action.payload}

           default:
               return state; 
        }
}



export const userLoginReducer = (state={loading:false}, action) => {
    switch(action.type) {
        case LOGIN_REQUEST:
            return {loading: true};
        case LOGIN_SUCCESS:
            return {loading: false, user: action.payload};
        case LOGIN_FAIL: 
        return {loading: false, error: action.payload}
        case LOGOUT_USER: 
        return {};
            default:
                return state;
    }
}

export const workersRegisterReducer = (state={loading:false}, action) => {
    switch(action.type) {
        case REGISTER_WORKERS_REQUEST:
            return {loading:true};
        case REGISTER_WORKERS_SUCCESS:
            return {loading: false, newWorker: action.payload};
        case REGISTER_WORKERS_FAIL:
            return {loading:false, error: action.payload}
        default:
            return state
    }
}
