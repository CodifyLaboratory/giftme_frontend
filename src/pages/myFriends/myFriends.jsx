import React from 'react'
import css from './myFriends.module.css'
import search from './../../img/search.png'
import FriendsInfo from '../../components/friendsInfo/friendsInfo'
import Sidebar from '../../components/sidebar/sidebar'
import {useDispatch, useSelector} from "react-redux";
import {getAllUsersFetch} from "../../store/actions/alUsersAction";

const MyFriend = () => {
    const dispatch = useDispatch();
    const users = useSelector(state=>state.allUsers.users)
    const id = useSelector(state=>state.auth.id)
    React.useEffect(()=>{
        dispatch(getAllUsersFetch())
    }, [])


    return (
        <div className={css.wrapper}>
            <div>

            </div>
            <Sidebar />
            <div>
                <div className={css.search}>
                    <label>
                        <input className={css.input_search} type="search" />
                        <img className={css.search_img} src={search} alt="search" />
                    </label>
                </div>
                <div className={css.friends_title}>
                    <h1>Мои Друзья</h1>
                </div>
                <div className={css.Friends_info}>

                    {
                        users && users.map(item => {
                                if (item.id !== id) {

                                    return <FriendsInfo key={item.id} first_name={item.first_name}
                                                        last_name={item.last_name}
                                                        description={item.description}/>
                                } else return null
                            }
                        )
                    }

                    {
                        !users.length && <div className={css.no_friends}>Друзей пока нет</div>
                    }


                </div>
                <div className={css.more}>Показать еще...</div>
            </div>
        </div>


    )
}

export default MyFriend

