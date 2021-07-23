
const baseUrl = "http://localhost:5700/v1"

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

const getWorkers = async(signal) => {
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

const sortPatients = async(signal) => {
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