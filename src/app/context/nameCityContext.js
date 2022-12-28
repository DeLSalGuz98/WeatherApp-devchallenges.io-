import React, { createContext } from "react";

export const nameCityContext = createContext("london");

export const NameCityContextProvider = ({children, value})=>{
    return(
        <nameCityContext.Provider value={value} >
            {children}
        </nameCityContext.Provider>
    )
}