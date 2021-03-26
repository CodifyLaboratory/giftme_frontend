import React from 'react';
import Css from '../Header/header.module.css'
import Bell from '../../Images/Bell.png'
import Present from '../../Images/Present.png'
import Logo from '../../Images/Logo.png'



function Header() {
    return (
        <header>
            <div className={Css.header}>
                <div className={Css.logo}>
                    <img src={Logo} alt="GiftMe" />
                </div>
                <div className={Css.menu}>
                    <nav>О нас</nav>
                    <nav>Лента</nav>
                    <nav>Мой WishList</nav>
                    <nav>Мои Друзья</nav>
                </div>
                <div className={Css.ikon}>
                    <img src={Bell} alt="Bell" />
                    <div className={Css.present}>
                        <img src={Present} alt="Gift" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;