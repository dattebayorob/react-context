import React, {useContext} from 'react'
import { MariaContext } from '../app/context/Maria';
import { Link } from 'react-router-dom'

export const Un = props => {
    const { maria, setMaria } = useContext(MariaContext)

    function onClick(){
        setMaria(`${maria}, Dos`)
    }

    return (
        <div>
            <div style={{display: 'block'}}>
                "{maria}"
            </div>
            <Link to="/un/dos" onClick={ () => onClick() }>
                Got to Dos
            </Link>
        </div>
    )
}