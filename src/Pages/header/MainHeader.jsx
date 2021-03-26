import React from 'react';
import Css from './../header/MainHeader.module.css'
import Logo from '../../img/logo.png'

function MainHeader() {
    return (
        
            <div className={Css.header}>
                <div className={Css.logo}>
                    <img src={Logo} alt="GiftMe" />
                </div>
                <div className={Css.menu}>
                    <nav className={Css.nav1}>О нас</nav>
                    <nav>Миссия сайта</nav>
                    <button className={Css.nav2}>Регистрация</button>
                    <nav>Войти</nav>
                </div>

            </div>

        
    )
}
export default MainHeader;