import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Todo from '../todo/todo'
import About from '../about/about'
import Menu from '../template/menu'

export default (props) => (
    <Router>
        <div >
            <Menu />
            <Route exact path='/' component={Todo} />
            <Route path='/about' component={About} />
        </div>
    </Router>
)