import React from 'react';
import Css from '../Header/header.module.css'
import Bell from '../../Images/Bell.png'
import Present from '../../Images/Present.png'
import Logo from '../../Images/Logo.png'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {userLogout} from "../../store/actions/authAction";
import {removeUserData} from "../../store/actions/userAction";
import {removeAllUsers} from "../../store/actions/alUsersAction";



function Header() {

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(userLogout());
        dispatch(removeUserData())
        dispatch(removeAllUsers())
    }

    return (
        <header>
            <div className={Css.header}>
                <div className={Css.logo}>
                    <img src={Logo} alt="GiftMe" />
                </div>
                <div className={Css.menu}>
                    <NavLink to="/" className={Css.nav}>
                        О нас
                    </NavLink>
                    <NavLink to="/" className={Css.nav}>
                        Лента
                    </NavLink>
                    <NavLink to="/MyWishList" className={Css.nav}>
                        Мой Wishist
                </NavLink>
                <NavLink to="/MyFriend" className={Css.nav}>
                    Мои друзья
                </NavLink>
                    <NavLink to="/" className={Css.nav} onClick={logoutHandler}>
                        Выйти
                    </NavLink>
                </div>
                <div className={Css.ikon}>
                    <NavLink to="/">
                     <img src={Bell} alt="Bell" />
                    </NavLink>
                    <NavLink to="/CartPage" className={Css.present}>
                        <img src={Present} alt="Gift" />
                    </NavLink>

                </div>
            </div>
        </header>
    )
}

export default Header;