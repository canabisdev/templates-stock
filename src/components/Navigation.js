import React, {Fragment, useState} from 'react'
import Navbar from './Navbar'
import NavMobile from './NavMobile'




function Navigation() {

const [showNavMobile, setShowMobile] = useState(false)

const closeNavMobile =() => {
    setShowMobile(false)
}

const toggleNavMobile =() => {
    setShowMobile(!showNavMobile)
}
  return(
    <Fragment>
       <div className="heading">
          <Navbar toggleNavMobile={toggleNavMobile} />
          <NavMobile isOpen={showNavMobile} closeNavMobile={closeNavMobile}/>
       </div>
        
    </Fragment>    
  )
}

export default Navigation
