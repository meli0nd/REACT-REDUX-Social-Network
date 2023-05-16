import React from 'react'
import s from './Header.module.css'
import logo from '../../assest/img/HeaderLogo.png'
import headerLogo from '../../assest/img/Logo.png'
import { NavLink } from 'react-router-dom'



const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.Logo} >
                <img src={headerLogo} alt="..." />
            </div>
            <div className={s.headerLogo}><img src={logo} alt='...' /></div>

            <div className={s.loginBlock}>
                {props.login
                    ? <div className={s.userName}>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to='/login'>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header