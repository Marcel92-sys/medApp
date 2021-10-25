import AsyncStorage from "@react-native-async-storage/async-storage"


export const authenticate = async(user) => {
    try {
        await AsyncStorage.setItem('jwt',  JSON.stringify(user))
    } catch (e) {
        console.log(e)
    }
}

export const isAuthenticated =async () => {
    try {
        const user = await AsyncStorage.getItem('jwt')
            return user != null ? JSON.parse(user) : null
    } catch (e) {
        console.log("error at isAuthenticated: ", e)
    }
}

export const clearJWT = async() => {
    try {
        await AsyncStorage.removeItem('jwt')
    } catch (e) {
        console.log("clearJWT error:", e)
    }
}