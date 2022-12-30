import React, {createContext, useState} from "react";

export const navContext = createContext();

export function NavContextProvider({children}) {
    const [statusNav, setStatusNav] = useState(true);
    return(
        <navContext.Provider value={{statusNav, setStatusNav}} >
            {children}
        </navContext.Provider>
    )
}