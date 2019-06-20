import React from 'react';
import { Link } from 'react-router-dom'
import { MariaContext } from '../app/context/Maria';

export const MariaForm = props => {
    return (
        <strong>
            <Link to="/maria/">
                FORM: {props.msg}
            </Link>
        </strong>
    )

}

export default props => <MariaContext.Consumer>
                                {
                                    (ctx) => <MariaForm {...props} {...ctx}/>
                                }
                        </MariaContext.Consumer>