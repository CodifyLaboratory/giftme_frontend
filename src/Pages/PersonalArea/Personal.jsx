import React from 'react'
import Css from '../PersonalArea/Personal.module.css'
import Area from '../../Images/area.png'
import Friends from '../../Images/friends.png'
import Holidays from '../../Images/holidays.png'
import Wishes from '../../Images/wishes.png'
import Ellips from '../../Images/ellips.png'
import Edit from '../../Images/edit.png'


function Personal() {
    return (
        <div className={Css.personal}>
            <div className={Css.container}>
                <div className={Css.sideBar}>
                    <div className={Css.area}>
                        <img src={Area} alt="" />
                        <div>Личный кабинет</div>
                    </div>
                    <div className={Css.friends}>
                        <img src={Friends} alt="" />
                        <div>Мои друзья</div>
                    </div>
                    <div className={Css.holidays}>
                        <img src={Holidays} alt="" />
                        <div>Мои праздники</div>
                    </div>
                    <div className={Css.wishes}>
                        <img src={Wishes} alt="" />
                        <div>Мой список желаний</div>
                    </div>
                    <button>Поделиться</button>
                </div>
                <div>
                    <div className={Css.user}>
                        <img src={Ellips} alt="" />
                        <div>Alymov Adilet</div>
                        <div>alymovadilet1996@gmail.com</div>
                    </div>
                    <div className={Css.edit}>
                        <img src={Edit} alt="" />
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
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quibusdam, assumenda libero enim atque facilis quia porro eius reprehenderit deleniti,
                    earum molestias ab?
                         Laudantium in rem, earum quisquam voluptatum praesentium quam.</div>
                </div>
            </div>
        </div>

    )
}




export default Personal;