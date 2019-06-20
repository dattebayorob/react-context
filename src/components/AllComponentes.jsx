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
                <Link to="/jose">
                    <b style={{color:'red'}}> Jose Context working: </b>
                </Link>{jose.msg}
            <br />
            <b style={{color:'red'}}>
                Maria Context working:  </b>{maria.msg} <br />
            <b style={{color:'red'}}>
                Joao Context working: </b>{joao.msg} <br />
            <b style={{color:'red'}}>
                MadalenA Context working: </b> {madalena.msg} <br />
            <b style={{color:'red'}}>
                Joaquim Context working: </b> {joaquim.msg} <br />
        </div>
    )
}