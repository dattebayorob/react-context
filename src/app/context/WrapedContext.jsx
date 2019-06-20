import React from 'react';

export const WrapedContext = ({contexts, children}) => {
    let wrapedContexts = {}
    contexts.forEach((Ctx, i) => {
        if(i === 0){
            wrapedContexts = (<Ctx key={i}>{children}</Ctx>)
            return
        }
        wrapedContexts = (<Ctx key={i}>{wrapedContexts}</Ctx>)
    }) 
    return wrapedContexts
}