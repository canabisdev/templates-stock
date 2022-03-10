import React, {Fragment} from 'react'
import { FiX } from 'react-icons/fi'
import {Link} from 'react-router-dom'

export default function  closeNavMobile({isOpen,closeNavMobile}) {
    
    return (
        <Fragment>
            <div className={isOpen ? "menu" : "navigation" }>
                <div class="navigation__button" onClick={closeNavMobile}>
                    <FiX size="4em" className="navigation__button--icon"/>
                </div>
                <div class="navigation__background">&nbsp;</div>
                <nav className="navigation__nav">
                    <ul className='navigation__list'>
                        <li className='navigation__item' >
                            <Link className='navigation__link'  to='/' onClick={closeNavMobile}>
                                Home
                            </Link>
                        </li>
                        <li className='navigation__item' >
                            <Link className='navigation__link'  to='/about' onClick={closeNavMobile}>
                                About
                            </Link>
                        </li>
                        <li className='navigation__item' >
                            <Link className='navigation__link'  to='/services' onClick={closeNavMobile}>
                                Service
                            </Link>
                        </li>
                        <li className='navigation__item' >
                            <Link className='navigation__link'  to='/gallery' onClick={closeNavMobile}>
                                Gallery
                            </Link>
                        </li>
                        <li className='navigation__item' >
                            <Link className='navigation__link'  to='/contact' onClick={closeNavMobile}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Fragment>
    )
}