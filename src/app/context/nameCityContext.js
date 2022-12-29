import React, { createContext, useState } from "react";

export const nameCityContext = createContext("london");

export const NameCityContextProvider = ({children})=>{
    const [nameCity, setNameCity] = useState("");
    return(
        <nameCityContext.Provider value={{nameCity,setNameCity}} >
            {children}
        </nameCityContext.Provider>
    )
}