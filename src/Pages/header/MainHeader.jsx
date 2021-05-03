import React from 'react';
import Css from './../header/MainHeader.module.css'
import Logo from '../../img/logo.png'
import {Link} from 'react-router-dom'

function MainHeader() {
    return (
        
            <div className={Css.header}>
                <div className={Css.logo}>
                 <Link to = '/'> <img src={Logo} alt="GiftMe" /> </Link>  
                </div>
                <div className={Css.menu}>
                    <Link  to = '/signUp' className={Css.sign}>Регистрация</Link>
                    <Link  to = '/login' className={Css.login}>Войти</Link>
                </div>

            </div>

        
    )
}
export default MainHeader;