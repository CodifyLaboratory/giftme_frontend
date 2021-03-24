import React from 'react';
import Css from '../header/header.module.css'
import Logo from '../../img/logo.png'

function Header() {
    return (
        <header>
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

        </header>
    )
}
export default Header;