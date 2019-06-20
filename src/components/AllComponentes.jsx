import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { JoseContext } from '../app/context/jose';
import { MariaContext } from '../app/context/Maria';
import { JoaoContext } from '../app/context/Joao';
import { MadalenaContext } from '../app/context/Madalena';
import { JoaquimContext } from '../app/context/Joaquim';

export default props => {
    const jose = useContext(JoseContext)
    const maria = useContext(MariaContext)
    const joao = useContext(JoaoContext)
    const madalena = useContext(MadalenaContext)
    const joaquim = useContext(JoaquimContext)
    return (
        <div>
                <Link to="/jose" onClick={() => jose.setCount(count => count + 1)}>
                    <b style={{color:'red'}}> Jose Context working: </b>
                </Link>{jose.msg}
            <br />
            <Link to="/maria" onClick={() => maria.setCount(count => count + 1)}>
                <b style={{color:'red'}} > Maria Context working:  </b>
            </Link>{maria.msg} 
            <br />
            <b style={{color:'red'}}>
                Joao Context working: </b>{joao.msg} <br />
            <b style={{color:'red'}}>
                MadalenA Context working: </b> {madalena.msg} <br />
            <b style={{color:'red'}}>
                Joaquim Context working: </b> {joaquim.msg} <br />
        </div>
    )
}