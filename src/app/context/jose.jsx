import React, { useState } from 'react'

export const JoseContext = React.createContext()
export const JoseCtx = ({children}) => {
    const [ msg, setMsg ] = useState('Hey, I\'m jose in a context')

    return (
        <JoseContext.Provider value={{ msg, setMsg }}>
            {children}
        </JoseContext.Provider>
    )
}