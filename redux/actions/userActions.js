import instance from "../../helpers/axios";

//  list-healthWorkers action
export const LIST_WORKERS_REQUEST = "LIST_WORKERS_REQUEST";
export const LIST_WORKERS_SUCCESS = "LIST_WORKERS_SUCCESS";
export const LIST_WORKERS_FAIL = "LIST_WORKERS_FAIL";


export const listWorkers = () => async(dispatch) =>{
    dispatch({
        type:LIST_WORKERS_REQUEST
    });
    try {
        const res = instance.get('/workers')
        if (res.data) {
            dispatch({
                type: LIST_WORKERS_SUCCESS,
                payload: res.data
            })
        } else {
            console.log('Unable to fetch')
        }
    } catch (error) {
        dispatch({
            type:LIST_WORKERS_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        });
    }
}


// worker Login action
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const loginUser = (surname, password) => async(dispatch) => {
    const loginDetails = {surname, password}
    
    dispatch({
        type: LOGIN_REQUEST,
        payload: loginDetails
    });

    try{
        const res = await instance.post('/login', loginDetails)

        if  (res.data) {

            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
                
            })
            localStorage.setItem("userInfo", JSON.stringify(res.data))
        } else {
            console.log("Something went wrong")
        }
    } catch(err) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message

        })
    }

}

// worker registration action
export const REGISTER_WORKERS_REQUEST = "REGISTER_WORKERS_REQUEST";
export const REGISTER_WORKERS_SUCCESS = "REGISTER_WORKERS_SUCCESS";
export const REGISTER_WORKERS_FAIL = "REGISTER_WORKERS_FAIL";

export const registerWorker = (name, surname, password, age, gender, department, cadre)=> async(dispatch) => {

    const registerDetails = {name, surname, password, age, gender, department, cadre}

    dispatch({
        type: REGISTER_WORKERS_REQUEST,
        payload: registerDetails
    })

    try {
        const res = await instance.post('', registerDetails)
        if (res.data) {
            dispatch({
                type: REGISTER_WORKERS_SUCCESS,
                payload: res.data
            })
            localStorage.setItem("workerInfo", JSON.stringify(res.data))
        } else {
            console.log("something went wrong")
        }
    } catch (error) {
        dispatch({
            type: REGISTER_WORKERS_FAIL,
             payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message

        })
    }
}





// worker registration action
export const REGISTER_PATIENT_REQUEST = "REGISTER_PATIENT_REQUEST";
export const REGISTER_PATIENT_SUCCESS = "REGISTER_PATIENT_SUCCESS";
export const REGISTER_PATIENT_FAIL = "REGISTER_PATIENT_FAIL";

export const registerPatient = (name, surname, password, age,ward,lga,state,bmi,height,weight, gender)=> async(dispatch) => {

    const registerDetails = {name, surname, password, age,ward,lga,state,bmi,height,weight, gender}

    dispatch({
        type: REGISTER_PATIENT_REQUEST,
        payload: registerDetails
    })

    try {
        const res = await instance.post('', registerDetails)
        if (res.data) {
            dispatch({
                type: REGISTER_PATIENT_SUCCESS,
                payload: res.data
            })
            localStorage.setItem("patientInfo", JSON.stringify(res.data))
        } else {
            console.log("something went wrong")
        }
    } catch (error) {
        dispatch({
            type: REGISTER_PATIENT_FAIL,
             payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message

        })
    }
}


// Log out action

export const LOGOUT_USER = "LOGOUT_USER"
export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: LOGOUT_USER });
};
