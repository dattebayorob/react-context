import React from 'react'
import { MariaContext } from '../app/context/Maria';
import { Link } from 'react-router-dom'

const Dos = ({maria, setMaria}) => {

    function onClick(e){
        setMaria(`${maria}, Tres`)
    }

    return (
        <div>
            <div style={{display: 'block'}}>
                "{maria}"
            </div>
            <Link to="/un/dos/tres" onClick={ () => onClick() }>
                Got to Tres
            </Link>
        </div>
    )
}

export default props => (
    <MariaContext.Consumer>
        {({maria, setMaria}) => <Dos {...{ maria,setMaria }} { ...props } />}
    </MariaContext.Consumer>
)