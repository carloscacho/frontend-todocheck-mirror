import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/jquery/dist/jquery'
import '../../node_modules/popper.js/dist/umd/popper'
import '../../node_modules/bootstrap/dist/js/bootstrap'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React from 'react'

//componets 

import Routes from './routes'

export default (props) => (
        <div className='container'>
            <Routes />
        </div>
)
            



