import React, {Fragment}from 'react'
import Navigation from '../components/Navigation'

function Layouts({children}) {
    return (
        <Fragment>
            <Navigation/>
            <div>
                {children}
            </div>
        </Fragment>
    )
    
}

export default Layouts
