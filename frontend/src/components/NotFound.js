import React from 'react'
import { Component } from "react"
import { Link } from 'react-router-dom'

class  NotFound extends Component {


    render(){
        return(
            <div className="not-found">
                <h1>404!</h1>
                <h2>Página no encontrada... :(</h2>
                <Link to={"/"} className="btn btn-danger">Back</Link>
            </div>
        );
    }
    
}

export default NotFound;