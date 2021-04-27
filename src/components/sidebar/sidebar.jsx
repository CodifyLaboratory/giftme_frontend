import React from 'react'
import css from './sidebar.module.css'
import friends from './../../img/friends.png'
import holidays from './../../img/holidays.png'
import gifts from './../../img/gifts.png'
import {NavLink} from 'react-router-dom'

const SideBar = () => {
    return (
        <div className={css.side_bar}>


            <div className={css.side_bar_content}>

                <div className={css.wrapper}>
                    <img src={friends} alt="friends" />
                    <NavLink to="/MyFriend" className={css.link}>Мои друзья</NavLink>
                </div>

                <div className={css.wrapper}>
                    <img src={holidays} alt="holidays" />
                    <NavLink to="/holidayList" className={css.link}>Мои праздники</NavLink>
                </div>

                <div className={css.wrapper}>
                    <img src={gifts} alt="gifts" />
                    <NavLink to="/" className={css.link}>Мои подарки</NavLink>
                </div>
            </div>

        </div>


    )
}

export default SideBar;