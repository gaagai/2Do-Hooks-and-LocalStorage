import { useState, useEffect } from 'react'


function useLocalStorageState(key, defaultVal) {
    //Set the state off a value in localStorage (or dewfault)
    const [state, setstate] = useState(() => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
        }
        catch (e) {
            val = defaultVal
        }
        return val
    })

    //use useEffect to update localStorage when state changes
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setstate]
}


export default useLocalStorageState;