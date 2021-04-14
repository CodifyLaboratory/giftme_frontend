import React, {useState,useEffect} from 'react'
import css from './myFriends.module.css'
import search from './../../img/search.png'
import FriendsInfo from './../../components/friendsInfo/friendsInfo'
import SideBar from './../../components/sidebar/sidebar'

const MyFriend = () => {
    const [friends, setFriends] = useState([])
    
    useEffect (() => {
        fetch ('http://167.99.46.0/users/')
        .then((res)=> res.json())
        .then((data) => {
            setFriends(data) 
        })

    }, [])
    return (
        <div className={css.wrapper}>
            <SideBar />
        
            <div className={css.search}>
            <div className={css.body}>
                <label>
                    <input className={css.input_search} type="search" ></input>
                    <img className={css.search_img} src={search} alt="search" />
                </label>
            </div>
            <br />
            <div className={css.friends_title}>
                <h1>Мои Друзья</h1>
            </div>

            <div className={css.Friends_info}>
            <FriendsInfo />
                {
                     friends.length ? friends?.map((item)=> <FriendsInfo user={item}/>) : 'X'
                }

            </div>

            {/* <div className={css.more}>Показать еще...</div> */}



        </div>
        </div>

    )
}

export default MyFriend

