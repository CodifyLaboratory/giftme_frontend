import React from 'react';
import Css from './../header/MainHeader.module.css'
import Logo from '../../img/logo.png'
import {NavLink} from "react-router-dom";

function MainHeader() {
    return (
        
            <div className={Css.header}>
                <div className={Css.logo}>
                    <img src={Logo} alt="GiftMe" />
                </div>
                <div className={Css.menu}>
                    <NavLink to="/" className={Css.nav1}>
                    О нас
                    </NavLink>
                    <NavLink to="/" className={Css.nav}>Миссия сайта</NavLink>
                    <NavLink to="/SignUp" className={Css.nav2}>
                   Регистрация
                    </NavLink>
                   <NavLink to="/Login" className={Css.nav}>Войти</NavLink>
                </div>

            </div>

        
    )
}
export default MainHeader;