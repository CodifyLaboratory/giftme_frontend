import React from 'react'
import Css from './Personal.module.css'
import Area from '../../Images/area.png'
import Friends from '../../Images/friends.png'
import Holidays from '../../Images/holidays.png'
import Gifts from '../../Images/gifts.png'
import Ellips from '../../Images/ellips.png'
import Edit from '../../Images/edit.png'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getDataFetch} from "../../store/actions/userAction";


function Personal() {
    const dispatch = useDispatch()
    const userInfo = useSelector(state=>state.user)



    React.useEffect(()=>{
        dispatch(getDataFetch())
    },[])

    return (
        <div className={Css.personal}>
            <div className={Css.container}>
                <div className={Css.sideBar}>
                    <div className={Css.area}>
                        <img src={Area} alt="Area" />
                       <NavLink to="/Personal" className={Css.area_link}>Мой личный кабинет</NavLink>
                    </div>
                    <div className={Css.area}>
                        <img src={Friends} alt="Friends" />
                        <NavLink to="/MyFriend" className={Css.area_link}>Мои друзья</NavLink>
                    </div>
                    <div className={Css.area}>
                        <img src={Holidays} alt="Holidays" />
                        <NavLink to="/holidayList" className={Css.area_link}>Мои праздники</NavLink>
                    </div>
                    <div className={Css.area}>
                        <img src={Gifts} alt="Gifts" />
                        <NavLink to="/MyWishList" className={Css.area_link}>Мой список желаний</NavLink>
                    </div>
                    <button>Поделиться</button>
                </div>
                <div className={Css.content}>
                    <div className={Css.user}>
                        <img src={Ellips} alt="Ellips" />
                        <div className={Css.name}>{`${userInfo.first_name} ${userInfo.last_name}`}</div>
                        <div className={Css.email}>{userInfo.email}</div>
                    </div>
                    <div className={Css.edit}>
                        <img src={Edit} alt="Edit" />
                        <NavLink to="/AboutMe" className={Css.edit_profil}>Редактировать профиль</NavLink>
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
                        {userInfo.description}
                    </div>
                </div>
            </div>
        </div>

    )
}




export default Personal;