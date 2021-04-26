import React from 'react'
import Css from '../PersonalArea/Personal.module.css'
import Area from '../../Images/area.png'
import Friends from '../../Images/friends.png'
import Holidays from '../../Images/holidays.png'
import Gifts from '../../Images/gifts.png'
import Ellips from '../../Images/ellips.png'
import Edit from '../../Images/edit.png'
import {Link} from 'react-router-dom'


function Personal() {
    return (
        <div className={Css.personal}>
            <div className={Css.container}>
                <div className={Css.sideBar}>
                    <div className={Css.area}>
                        <img src={Area} alt="Area" />
                        <Link to ='/personal'>Личный кабинет</Link>
                    </div>
                    <div className={Css.area}>
                        <img src={Friends} alt="Friends" />
                        <Link to ='/myFriend'>Мои друзья</Link>
                    </div>
                    <div className={Css.area}>
                        <img src={Holidays} alt="Holidays" />
                        <Link to ='/myHolidays'>Мои праздники</Link>
                    </div>
                    <div className={Css.area}>
                        <img src={Gifts} alt="Gifts" />
                        <Link to ='/myWishlist'>Мой список желаний</Link>
                    </div>
                    <button>Поделиться</button>
                </div>
                <div className={Css.content}>
                    <div className={Css.user}>
                        <img src={Ellips} alt="Ellips" />
                        <div className={Css.name}>Kurmanova Aigerim</div>
                        <div className={Css.email}>Kurmanova21@mail.ru</div>
                    </div>
                    <div className={Css.edit}>
                        <img src={Edit} alt="Edit" />
                        <div>Редактировать профиль</div>
                    </div>
                    <div className={Css.counter}>
                        <div>
                            <div>123</div>
                            <div>Друзья</div>
                        </div>
                        <div>
                            <div>234</div>
                            <div>Подарил(-а)</div>
                        </div>
                        <div>
                            <div>345</div>
                            <div>Подарено</div>
                        </div>
                    </div>
                    <div className={Css.info}>
                        <div>Художник, юрист, артист</div>
                        <div>24 года</div>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rem expedita perferendis ducimus? 
                            Eligendi totam, suscipit nihil excepturi repellat velit aperiam debitis aut laborum repellendus natus libero, deleniti quas eaque?</div>
                    </div>
                </div>
            </div>
        </div>

    )
}




export default Personal;