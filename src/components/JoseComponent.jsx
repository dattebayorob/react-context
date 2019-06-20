import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { JoseContext } from '../app/context/jose';

export default props => {
    const jose = useContext(JoseContext)

    return (
        <Link to="/contexts">
        {jose.msg}
        </Link>
    )
}