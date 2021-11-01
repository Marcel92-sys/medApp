import axios from "axios"

export const baseUrl = "http://192.168.43.83:5700/api/v1"

const createWorker = async(user) => {
    try {
        let response = await fetch(baseUrl +'/workers/register', {
            method: "POST",
            headers: {
                'Accept' : 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(user)
        })
        return await response.json()
        
    } catch (error) {
        console.log(error)
    }
}

export const login = async(user) => {
    try {
        let response = await axios('', {
            method: "POST",
            headers: {
                'Accept' : 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(user)
        })
        return await response.json()
        
    } catch (error) {
        console.log(error)
    }
}


const getPatients = async(signal) => {
    try {
        let response = await fetch(baseUrl +'/patients', {
            method: 'GET',
            signal:signal
        })
        return await response.json()
    } catch (error) {
        console.log(error)
    }

}


export const getPatient = async(params) => {
    try {
        let response = await fetch(baseUrl +'/patients/' + params.patId, {
            method: 'GET',
            // signal:signal
        })
        return await response.json()
    } catch (error) {
        console.log(error)
    }

}


export const getPatientFile = async(params) => {
    try {
        let response = await fetch(baseUrl +'/patients/encounters/' + params.patId, {
            method: 'GET',
            // signal:signal
        })
        return await response.json()
    } catch (error) {
        console.log(error)
    }

}



export const getWorkers = async(signal) => {
    try {
        let response = await fetch(baseUrl +'/workers', {
            method: 'GET',
            signal:signal
        })
        return await response.json()
    } catch (error) {
        console.log(error)
    }

}


export const getEncountersByMe = async(params) => {
    try {
        let response = await fetch(baseUrl +'/workers/' + params.wkId + "/encounters", {
            method: 'GET',
        })
        return await response.json()
    } catch (error) {
        console.log(error)
    }

}


export const sortPatients = async(signal) => {
    try {
        let response = await fetch(baseUrl +'/patients', {
            method: 'GET',
            signal:signal
        })
        return await response.json()
    } catch (error) {
        console.log(error)
    }

}

export const getMessagesByMe = async(params) => {
    try {
        let response = await fetch(baseUrl +'/messages/' + params.userId + "/" + params.receiverId, {
            method: 'GET',
        })
        return await response.json()
    } catch (error) {
        console.log(error)
    }

}
