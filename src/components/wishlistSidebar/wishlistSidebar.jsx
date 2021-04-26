import React from 'react'
import css from './wishlistSidebar.module.css'
import home from './../../img/home.png'
import friends from './../../img/friends.png'
import holidays from './../../img/holidays.png'
import gifts from './../../img/gifts.png'
import { Link } from 'react-router-dom'

const WishlistSidebar = () => {
    return (
        <div className={css.Wishlistside_bar}>

            <div className={css.Wishlistside_bar_content}>
                <div className={css.wrapper}>
                    <img src={home} alt="home" />
                    <Link to ='/personal'className={css.link}>Личный кабинет</Link>
                </div>

                <div className={css.wrapper}>
                    <img src={friends} alt="friends" />
                    <Link to ='/myFriend' className={css.link}>Мои друзья</Link>
                </div>

                <div className={css.wrapper}>
                    <img src={holidays} alt="holidays" />
                    <Link className={css.link}>Мои праздники</Link>
                </div>

                <div className={css.wrapper}>
                    <img src={gifts} alt="gifts" />
                    <Link to ='/myWishlist'className={css.link}>Мой список желаний</Link>
                </div>
            </div>

            <button className={css.share}>Поделиться</button>
        </div>
    )
}

export default WishlistSidebar