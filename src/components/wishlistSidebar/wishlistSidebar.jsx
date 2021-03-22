import React from 'react'
import css from './wishlistSidebar.css'
import home from './../../img/home.png'
import friends from './../../img/friends.png'
import holidays from './../../img/holidays.png'
import gifts from './../../img/gifts.png'
import { Link } from 'react-router-dom'

const WishlistSidebar = () => {
    return (
        <div className='Wishlistside-bar'>

            <div className='Wishlistside-bar-content'>
                <div className='wrapper'>
                    <img src={home} alt="home" />
                    <Link className="link">Личный кабинет</Link>
                </div>

                <div className='wrapper'>
                    <img src={friends} alt="friends" />
                    <Link className="link">Мои друзья</Link>
                </div>

                <div className='wrapper'>
                    <img src={holidays} alt="holidays" />
                    <Link className='link'>Мои праздники</Link>
                </div>

                <div className='wrapper'>
                    <img src={gifts} alt="gifts" />
                    <Link className='link'>Мой список желаний</Link>
                </div>
                </div>

                <button className='share'>Поделиться</button>

            
        </div>
    )
}

export default WishlistSidebar