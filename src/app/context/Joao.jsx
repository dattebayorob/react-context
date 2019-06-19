import React, { useState } from 'react'

export const JoaoContext = React.createContext()
export const JoaoCtx = ({children}) => {
    const [ msg, setMsg ] = useState('Hey, I\'m joao in a contextnho')

    return (
        <JoaoContext.Provider value={{ msg, setMsg }}>
            {children}
        </JoaoContext.Provider>
    )
}