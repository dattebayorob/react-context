import React, { useState } from 'react'

export const MariaContext = React.createContext()
export const MariaCtx = ({children}) => {
    const [ msg, setMsg ] = useState('Hey, I\'m Maria in a context')
    const [ count, setCount ] = useState(0)

    return (
        <MariaContext.Provider value={{ msg, count, setCount }}>
            {children}
        </MariaContext.Provider>
    )
}