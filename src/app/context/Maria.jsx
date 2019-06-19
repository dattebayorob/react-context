import React, { useState } from 'react'

export const MariaContext = React.createContext()
export const MariaCtx = ({children}) => {
    const [ msg, setMsg ] = useState('Hey, I\'m Maria in a context')

    return (
        <MariaContext.Provider value={{ msg, setMsg }}>
            {children}
        </MariaContext.Provider>
    )
}