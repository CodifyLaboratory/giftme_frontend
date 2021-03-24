import React from 'react'
import css from './sidebar.module.css'
import friends from './../../img/friends.png'
import holidays from './../../img/holidays.png'
import gifts from './../../img/gifts.png'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className={css.side_bar}>


            <div className={css.side_bar_content}>

                <div className={css.wrapper}>
                    <img src={friends} alt="friends" />
                    <Link className={css.link}>Мои друзья</Link>
                </div>

                <div className={css.wrapper}>
                    <img src={holidays} alt="holidays" />
                    <Link className={css.link}>Мои праздники</Link>
                </div>

                <div className={css.wrapper}>
                    <img src={gifts} alt="gifts" />
                    <Link className={css.link}>Мои подарки</Link>
                </div>
            </div>

        </div>


    )
}

export default SideBar;