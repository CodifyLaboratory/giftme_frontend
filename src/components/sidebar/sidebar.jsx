import React from 'react'
import css from './sidebar.css'
import friends from './../../img/friends.png'
import holidays from './../../img/holidays.png'
import gifts from './../../img/gifts.png'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className='side-bar'>


            <div className='side-bar-content'>

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
                    <Link className='link'>Мои подарки</Link>
                </div>
            </div>

        </div>


    )
}

export default SideBar