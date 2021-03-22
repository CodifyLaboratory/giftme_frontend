import React from 'react';
import '../Header/header.css'
import Bell from '../../Images/Bell.png'
import Present from '../../Images/Present.png'
import Logo from '../../Images/Logo.png'



function Header() {
    return (
        <header>
            <div className='header'>
                <div className="logo">
                    <img src={Logo} alt="GiftMe" />

                </div>
                <div className='menu'>
                    <nav>О нас</nav>
                    <nav>Лента</nav>
                    <nav>Мой WishList</nav>
                    <nav>Мои Друзья</nav>
                </div>
                <div className='ikon'>
                    <img src={Bell} alt="Bell" />
                    <div className="present">
                        <img src={Present} alt="Gift" />
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;