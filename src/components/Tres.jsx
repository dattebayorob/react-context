import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import { MariaContext } from '../app/context/Maria';

export class Tres extends Component{
    state = {
        maria: ''
    }
    componentDidMount(){
        this.setState({ maria: this.context.maria })
    }

    render(){

        const { maria } = this.state

        return (
            <div>
            <div style={{display: 'block'}}>
                "{maria}"
            </div>
            <Link to="/un" >
                Got to Uno
            </Link>
            <Link to="/un/dos" >
                Got to Dos
            </Link>

        </div>
        )
    }
}
Tres.contextType = MariaContext