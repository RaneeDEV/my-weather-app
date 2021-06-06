import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { getCurrentWeatherByName } from '../api/oswm'




const CitiesContext = createContext()
export const useCities = () => useContext(CitiesContext)
export default function CitiesProvider({ children }) {
    const [cities, dispatchCities] = useReducer(citiesReducer, [])
    useEffect(() => {
        console.log('effect call');
        if (!window.localStorage.cities) {
            window.localStorage.cities = JSON.stringify([])
        }
        const savedCities = JSON.parse(window.localStorage.cities)
        dispatchCities({ type: 'INIT_SET', payload: savedCities })
        console.log('INIT_SET');

        savedCities.forEach(async (city) => {
            if (!city.data) {
                const query = `${city.name},${city.country}`
                const data = await getCurrentWeatherByName(query)
                dispatchCities({ type: 'ADD_CITY_DATA', payload: { id: city.id, data } })
            }
        })
    }, [])

    function citiesReducer(state, action) {
        console.log('reducer call!', action.type);
        switch (action.type) {
            case 'INIT_SET':
                return action.payload
            case 'ADD_CITY_DATA': {
                const cityIdx = state.findIndex(city => city.id === action.payload.id)
                const newCityData = { ...state[cityIdx], data: action.payload.data }
                const newState = [...state]
                newState.splice(cityIdx, 1, newCityData)
                return newState
            }
            case 'ADD_CITY': {
                console.log('ADD_CITY!!! start');
                const newState = [...state, action.payload]
                console.log('ADD_CITY!!! end');
                return newState
            }
            default:
                throw new Error('Wrong action type!')
        }
    }
    return <CitiesContext.Provider value={[cities, dispatchCities]}>{children}</CitiesContext.Provider>
}