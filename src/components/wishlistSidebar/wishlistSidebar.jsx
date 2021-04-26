import React from 'react'
import css from './wishlistSidebar.module.css'
import home from './../../img/home.png'
import friends from './../../img/friends.png'
import holidays from './../../img/holidays.png'
import gifts from './../../img/gifts.png'
import { NavLink } from 'react-router-dom'

const WishlistSidebar = () => {
    return (
        <div className={css.Wishlistside_bar}>

            <div className={css.Wishlistside_bar_content}>
                <div className={css.wrapper}>
                    <img src={home} alt="home" />
                    <NavLink to="/Personal" className={css.link}>Личный кабинет</NavLink>
                </div>

                <div className={css.wrapper}>
                    <img src={friends} alt="friends" />
                    <NavLink to="/MyFriend" className={css.link}>Мои друзья</NavLink>
                </div>

                <div className={css.wrapper}>
                    <img src={holidays} alt="holidays" />
                    <NavLink to="/holidays" className={css.link}>Мои праздники</NavLink>
                </div>

                <div className={css.wrapper}>
                    <img src={gifts} alt="gifts" />
                    <NavLink to="/MyWishList" className={css.link}>Мой список желаний</NavLink>
                </div>
            </div>

            <button className={css.share}>Поделиться</button>
        </div>
    )
}

export default WishlistSidebar