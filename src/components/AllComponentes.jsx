import React, {useContext} from 'react'
import { JoseContext } from '../app/context/jose';
import { MariaContext } from '../app/context/Maria';
import { JoaoContext } from '../app/context/Joao';

export default props => {
    const jose = useContext(JoseContext)
    const maria = useContext(MariaContext)
    const joao = useContext(JoaoContext)

    return (
        <div>
            Jose Context working: {jose.msg} <br />
            Maria Context working:  {maria.msg} <br />
            Joao Context working: <br /> {joao.msg} <br />
        </div>
    )
}