import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a href="#" className='navbar-brand'>
            <i className='fa fa-calendar-check-o'></i> Todo APP
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Tarefas<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">Sobre</Link>
                </li>
                
                
            </ul>
        </div>

    </nav>
)