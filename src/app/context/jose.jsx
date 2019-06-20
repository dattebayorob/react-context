import React, { useState } from 'react'

export const JoseContext = React.createContext()
export const JoseCtx = ({children}) => {
    const [ msg, setMsg ] = useState('Hey, I\'m jose in a context')
    const [ count, setCount] = useState(0)

    return (
        <JoseContext.Provider value={{ msg, setMsg, count, setCount }}>
            {children}
        </JoseContext.Provider>
    )
}