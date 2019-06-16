import React, { useState } from 'react'

export const MariaContext = React.createContext()
export const MariaCtx = ({children}) => {
    const [ maria, setMaria ] = useState('Un')

    return (
        <MariaContext.Provider value={{maria,setMaria}}>
            {children}
        </MariaContext.Provider>
    )
}