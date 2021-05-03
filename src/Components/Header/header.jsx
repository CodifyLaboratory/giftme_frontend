import React from 'react';
import Css from '../Header/header.module.css'
import Bell from '../../Images/Bell.png'
import Present from '../../Images/Present.png'
import Logo from '../../Images/Logo.png'
import {Link} from 'react-router-dom'


function Header() {
    return (
        <header>
            <div className={Css.header}>
                <div className={Css.logo}>
                <Link to = '/' ><img src={Logo} alt="GiftMe" /> </Link>
                </div>
            
                <div className={Css.menu}>     
                    <Link to ='/'>Лента</Link>
                    <Link to = '/myWishlist'>Мой WishList</Link>
                    <Link to ='/myFriend'>Мои Друзья</Link>
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