import React, { useState } from 'react'

export const JoaquimContext = React.createContext()
export const JoaquimCtx = ({children}) => {
    const [ msg, setMsg ] = useState('Hey, I\'m Joaquim in a context')

    return (
        <JoaquimContext.Provider value={{ msg, setMsg }}>
            {children}
        </JoaquimContext.Provider>
    )
}