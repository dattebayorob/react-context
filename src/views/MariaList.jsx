import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MariaContext } from '../app/context/Maria';
import { JoseContext } from '../app/context/jose';

export const MariaList = props => {
    const jose = useContext(JoseContext)

    return (
        <strong>
            <Link to="/maria/form">
                LIST: {props.msg} - Clicked ({props.count}) times
            </Link><br/>
                Jose was clicked ({jose.count}) times
            <br />
            <Link to="/contexts">
                ALL COMPONENTS
            </Link>
        </strong>)

}

export default props => <MariaContext.Consumer>
                                {
                                    (ctx) => <MariaList {...props} {...ctx}/>
                                }
                        </MariaContext.Consumer>