import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { FiAlignJustify, FiPhone, FiSearch } from "react-icons/fi";




export default function Navbar({toggleNavMobile}) {
    const [state] = useState({
        logo: '/assets/logo192.png',
    })
    return (
        <div className="menu">
                <div className="menu__logo">
                    <Link className="navbar__logo" to='/'>
                        <LazyLoadImage src={state.logo} alt='logo' />
                    </Link>
                </div>
                <nav className="navbar">
                    <ul className="navbar__list">
                        <li className="navbar__list__item">
                            <NavLink className="navbar__link" to='/'>
                                Acceuil
                            </NavLink>
                        </li>
                        <li className="navbar__list__item">
                            <NavLink className="navbar__link" to='/about'>
                                Informations
                            </NavLink>
                        </li>
                        <li className="navbar__list__item">
                            <NavLink className="navbar__link" to='/busines'>
                                Business
                            </NavLink>
                        </li>
                        <li className="navbar__list__item">
                            <NavLink className="navbar__link" to='/service'>
                                Service
                            </NavLink>
                        </li>
                        <li className="navbar__list__item">
                            <NavLink className="navbar__link" to='/developer'>
                                Developpeur
                            </NavLink>
                        </li>
                        
                    </ul>
                    <div className="navbar__list__icon">
                            <div className="navbar__list__icon--search" >
                                <FiSearch  size="3em" className="color"/>
                            </div>
                            <div className="navbar__list__icon--contact">
                                <FiPhone  size="3em" className="color"/>
                            </div>
                            <div className="navbar__list__icon--mobile" onClick={toggleNavMobile}>
                                <FiAlignJustify  className="color"  size="3em"/>
                            </div>
                        </div>
            </nav>

        </div>
       
    )
}
