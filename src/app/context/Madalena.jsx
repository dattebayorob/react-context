import React, { useState } from 'react';

export const MadalenaContext = React.createContext()
export const MadalenaCtx = ({children}) => {
    const [ msg, setMsg ] = useState('Hey, I\'m Madalena in a context')

    return (
        <MadalenaContext.Provider value={{ msg, setMsg }}>
            {children}
        </MadalenaContext.Provider>
    )
}