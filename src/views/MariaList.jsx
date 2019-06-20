import React from 'react'
import { Link } from 'react-router-dom'
import { MariaContext } from '../app/context/Maria';

export const MariaList = props => {
    return (
        <strong>
            <Link to="/maria/form">
                LIST: {props.msg}
            </Link>
        </strong>)

}

export default props => <MariaContext.Consumer>
                                {
                                    (ctx) => <MariaList {...props} {...ctx}/>
                                }
                        </MariaContext.Consumer>