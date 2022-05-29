import React, { createContext, useContext, useReducer } from 'react';

// prepare datalayer
export const StateContext = createContext();

//wraps whole app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);