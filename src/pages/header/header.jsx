import React from 'react';
import '../header/header.css'
import Logo from '../../img/logo.png'
function Header () {
    return (
        <header>
            <div className='header'>
                <div className="logo">
                    <img src={Logo} alt="GiftMe"/>
                </div>
                <div className='menu'>
                    <nav className='nav1'>О нас</nav>
                    <nav>Миссия сайта</nav>
                    <button className='nav2'>Регистрация</button>
                    <nav>Войти</nav>
                </div>
               
                </div>
              
        </header>
    )
}
export default Header;